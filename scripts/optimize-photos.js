#!/usr/bin/env node
/**
 * Fotoğraf optimizasyon scripti.
 *
 * Kullanım:
 *   node scripts/optimize-photos.js                  # public/assets/sanat
 *   node scripts/optimize-photos.js public/assets/2015
 *   node scripts/optimize-photos.js path/to/folder
 *
 * Ne yapar:
 *   - Verilen klasördeki her JPG/PNG/HEIC'i okur
 *   - Max genişlik 2560px (yatay/dikey otomatik ayarlanır)
 *   - JPG quality 85 (mozjpeg) — profesyonel seviye, gözle fark yok
 *   - EXIF verilerini korur (tarih, konum, kamera)
 *   - Orijinali `.originals/` altına yedekler (bir defalık)
 *   - Dosyayı *yerinde* (in-place) değiştirir
 *
 * Çıktı: Ne kadar küçüldü, özet.
 */

const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')

// Uzun kenar sınırı — hem genişlik hem yükseklik için geçerli.
// (Eskiden sadece genişlik sınırlanıyordu, dikey fotoğraflar 4500px'e kadar çıkıyordu.)
const MAX_EDGE = 2560
const JPEG_QUALITY = 85
const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png', '.heic']

// İşlenmiş dosyaların parmak izi — CI'da her çalıştırmada yeniden
// encode edilip kalite kaybı birikmesin diye.
const MANIFEST_PATH = path.resolve(process.cwd(), 'src/data/optimized-images.json')

const targetDir = path.resolve(
  process.cwd(),
  process.argv[2] || 'public/assets/sanat'
)

if (!fs.existsSync(targetDir)) {
  console.error(`❌ Klasör bulunamadı: ${targetDir}`)
  process.exit(1)
}

const backupDir = path.join(targetDir, '.originals')
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true })

// ─── Manifest ───────────────────────────────────────────────
// GitHub Actions'ta .originals/ yok (gitignore'da), o yüzden script
// zaten optimize edilmiş dosyayı "orijinal" sanıp tekrar encode ediyordu.
// Her CI çalışmasında bir tur daha kalite kaybı demekti. Manifest bunu keser.

function loadManifest() {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'))
  } catch {
    return {}
  }
}

function saveManifest(m) {
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true })
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(m, null, 2))
}

const manifest = loadManifest()
const manifestKey = (file) =>
  path.relative(process.cwd(), path.join(targetDir, file))

const files = fs
  .readdirSync(targetDir)
  .filter((f) => SUPPORTED_EXT.includes(path.extname(f).toLowerCase()))
  .filter((f) => !f.startsWith('.'))

if (files.length === 0) {
  console.log(`ℹ️  ${targetDir} içinde optimize edilecek görsel yok.`)
  process.exit(0)
}

console.log(`\n🖼️  ${files.length} görsel bulundu: ${targetDir}\n`)

let totalBefore = 0
let totalAfter = 0
let skipped = 0

async function optimizeOne(file) {
  const filePath = path.join(targetDir, file)
  const ext = path.extname(file).toLowerCase()
  const origExt = path.extname(file) // orijinal büyük/küçük harf korunur
  const baseName = path.basename(file, origExt)
  const backupPath = path.join(backupDir, file)

  const beforeSize = fs.statSync(filePath).size
  totalBefore += beforeSize

  // Bu dosya daha önce işlendiyse ve o zamandan beri değişmediyse dokunma.
  // (Aksi halde her CI çalışmasında yeniden encode edilip kalite kaybederdi.)
  const key = manifestKey(file)
  if (manifest[key] && manifest[key].size === beforeSize) {
    totalAfter += beforeSize
    skipped++
    console.log(`  ⏭️  ${file} — zaten işlenmiş`)
    return
  }

  // Zaten yedeklenmişse tekrar yedekleme
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath)
  }

  // HEIC → JPG dönüşümü (sharp HEIC okuyor ama yazamaz; JPG'ye çeviriyoruz)
  // Diğerlerinde orijinal ext'i (büyük/küçük harf) koru
  const outputExt = ext === '.heic' ? '.jpg' : origExt
  const tempOutputPath = path.join(
    targetDir,
    `${baseName}.optimized${outputExt}`
  )

  try {
    let pipeline = sharp(backupPath, { failOn: 'none' })
      .rotate() // EXIF'teki rotation'ı uygula, sonra sıfırla
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE, // dikey fotoğraflar da sınırlansın
        withoutEnlargement: true, // küçükse büyütme
        fit: 'inside' // en/boy oranı korunur
      })
      .withMetadata() // EXIF koru

    if (outputExt === '.png') {
      pipeline = pipeline.png({ quality: 90, compressionLevel: 9 })
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    }

    await pipeline.toFile(tempOutputPath)

    const afterSize = fs.statSync(tempOutputPath).size

    // Eğer optimize edilmiş daha büyükse, optimize edileni sil (nadir)
    if (afterSize >= beforeSize && outputExt === ext) {
      fs.unlinkSync(tempOutputPath)
      totalAfter += beforeSize
      skipped++
      manifest[key] = { size: beforeSize }
      console.log(
        `  ⏭️  ${file} — zaten optimum (${(beforeSize / 1024 / 1024).toFixed(2)}MB)`
      )
      return
    }

    // HEIC'i sil, yerine JPG koy
    if (ext === '.heic') {
      fs.unlinkSync(filePath)
    }

    // Son dosyayı yerine koy
    const finalPath = path.join(targetDir, `${baseName}${outputExt}`)
    fs.renameSync(tempOutputPath, finalPath)

    // HEIC → JPG'de dosya adı değişiyor, manifest'i son ada göre yaz
    manifest[manifestKey(path.basename(finalPath))] = { size: afterSize }
    totalAfter += afterSize
    const saved = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1)
    console.log(
      `  ✅ ${file} → ${(beforeSize / 1024 / 1024).toFixed(2)}MB → ${(afterSize / 1024 / 1024).toFixed(2)}MB (%${saved} tasarruf)`
    )
  } catch (err) {
    console.error(`  ❌ ${file} işlenemedi:`, err.message)
    totalAfter += beforeSize
  }
}

async function main() {
  for (const file of files) {
    await optimizeOne(file)
  }

  // Silinmiş fotoğrafların manifest kayıtlarını temizle.
  // Aksi halde aynı adla farklı bir dosya eklenip boyutu tesadüfen
  // tutarsa yanlışlıkla "zaten işlenmiş" sayılırdı.
  const mevcut = new Set(files.map((f) => manifestKey(f)))
  let temizlenen = 0
  for (const key of Object.keys(manifest)) {
    // Sadece bu klasöre ait kayıtları değerlendir
    if (!key.startsWith(path.relative(process.cwd(), targetDir))) continue
    if (!mevcut.has(key) && !fs.existsSync(path.resolve(process.cwd(), key))) {
      delete manifest[key]
      temizlenen++
    }
  }
  if (temizlenen > 0) {
    console.log(`\n🧹 ${temizlenen} öksüz manifest kaydı temizlendi.`)
  }

  saveManifest(manifest)

  const savedPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)
  const beforeMB = (totalBefore / 1024 / 1024).toFixed(2)
  const afterMB = (totalAfter / 1024 / 1024).toFixed(2)

  console.log('\n' + '─'.repeat(60))
  console.log(`📊 Toplam:  ${beforeMB}MB  →  ${afterMB}MB  (%${savedPct} tasarruf)`)
  console.log(`📦 ${files.length - skipped} görsel işlendi, ${skipped} atlandı.`)
  console.log(`💾 Orijinaller yedeklendi: ${backupDir}`)
  console.log('─'.repeat(60) + '\n')
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
