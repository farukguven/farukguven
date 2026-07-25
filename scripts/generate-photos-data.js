#!/usr/bin/env node
/**
 * Fotoğraf veri üretici.
 *
 * public/assets/sanat/ içindeki her fotoğrafı tarar:
 *   - EXIF okur (tarih, kamera, lens, aperture, shutter, iso, focal length, GPS)
 *   - GPS varsa Nominatim ile ters-geocoding → "Kotor, Karadağ"
 *   - Geocoding sonuçları src/data/geocode-cache.json'a cache'lenir
 *   - Görselin en/boy oranından height (short/medium/tall) hesaplanır
 *   - A+B hibrit alt text: insan-okur dosya adı varsa kullan, yoksa "Kotor'dan bir kare"
 *
 * Çıktı: src/data/sanat-photos.json
 *
 * Kullanım:
 *   node scripts/generate-photos-data.js
 */

const fs = require('node:fs')
const path = require('node:path')
const exifr = require('exifr')
const sharp = require('sharp')

const SANAT_DIR = path.resolve(process.cwd(), 'public/assets/sanat')
const DATA_DIR = path.resolve(process.cwd(), 'src/data')
const OUTPUT_PATH = path.join(DATA_DIR, 'sanat-photos.json')
const CACHE_PATH = path.join(DATA_DIR, 'geocode-cache.json')

const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png']
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/reverse'
const USER_AGENT = 'farukguven.com photo builder (hello@farukguven.com)'

// ─── Elle konum ────────────────────────────────────────────
// GPS'i olmayan fotoğraflar için (Sony makineler telefonla eşleşmediyse
// konum yazmıyor). Anahtar = uzantısız dosya adı.
// Yeni satır eklemek yeterli, gerisi otomatik.
const MANUAL_LOCATIONS = {
  DSC05955: { city: 'Bled', country: 'Slovenya' }
}

// ─── Şehir adı düzeltmeleri ────────────────────────────────
// Nominatim Türkçe istendiğinde bazen tarihî/Osmanlıca adları döndürüyor
// ya da idari birim ekliyor. Burada normale çeviriyoruz.
const CITY_OVERRIDES = {
  İşbîliye: 'Sevilla',
  Lucerne: 'Luzern',
  'Kuzey Makedonya': 'Makedonya'
}

// Nominatim'in eklediği idari birim ekleri ("Kotor Municipality" gibi)
const ADMIN_SUFFIX = /\s+(municipality|belediyesi|county|district|province|opština|općina)$/i

// Aylar
const MONTHS_TR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
]

// ─── Yardımcılar ───────────────────────────────────────────

function loadJSON(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  } catch {
    return fallback
  }
}

function saveJSON(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

function formatDate(date) {
  if (!date) return ''
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return ''
  return `${MONTHS_TR[d.getMonth()]} ${d.getFullYear()}`
}

// Shutter (1/X s) formatı
function formatShutter(exposureTime) {
  if (!exposureTime) return null
  if (exposureTime >= 1) return `${exposureTime} s`
  const inverted = Math.round(1 / exposureTime)
  return `1/${inverted} s`
}

function formatAperture(fNumber) {
  if (!fNumber) return null
  // EXIF f-number çoğu zaman kesirli gelir (2.798828125 gibi) — tek haneye yuvarla
  const rounded = Math.round(fNumber * 10) / 10
  return `f/${rounded}`
}

function formatFocalLength(focal, focal35) {
  if (!focal && !focal35) return null
  if (focal35) return `${Math.round(focal35)} mm (Eşdeğer)`
  return `${Math.round(focal)} mm`
}

function formatISO(iso) {
  if (!iso) return null
  return `ISO ${iso}`
}

// Kamera modelini normalleştir — "Apple iPhone 15 Pro Max" gibi
function normalizeCamera(make, model) {
  if (!model) return null
  if (!make) return model
  if (model.toLowerCase().startsWith(make.toLowerCase())) return model
  return `${make} ${model}`.trim()
}

// Lensi normalleştir
function normalizeLens(lensMake, lensModel) {
  if (!lensModel) return null
  if (!lensMake) return lensModel
  if (lensModel.toLowerCase().includes(lensMake.toLowerCase())) return lensModel
  return `${lensMake} ${lensModel}`.trim()
}

// Minik bulanık önizleme (LQIP) — base64 data URI.
// ~20px genişlik, dosya başına <1KB. Fotoğraf yüklenene kadar
// kartın içinde bulanık hâli durur, boş gri kutu görünmez.
async function makeBlurDataURL(filePath) {
  try {
    const buf = await sharp(filePath)
      .resize(20, 20, { fit: 'inside' })
      .jpeg({ quality: 45 })
      .toBuffer()
    return `data:image/jpeg;base64,${buf.toString('base64')}`
  } catch {
    return null
  }
}

// En/boy oranından height sınıfı
function heightFromAspect(width, height) {
  if (!width || !height) return 'medium'
  const ratio = width / height
  if (ratio < 0.85) return 'tall'     // dikey
  if (ratio > 1.25) return 'short'    // yatay
  return 'medium'                      // kare civarı
}

// Dosya adı insan-okur mu? (IMG_XXXX, DSC_XXXX, vs. değil)
function isHumanReadableFilename(basename) {
  const lower = basename.toLowerCase()
  // Genel kamera çıktıları
  if (/^(img|dsc|dscf|dji|gopr|_dsc|mvi|_mg)[-_ ]?\d+/i.test(basename)) return false
  if (/^\d{8}[-_ ]?\d+/.test(basename)) return false  // 20161105_182737
  // İçeriğinde harf olmalı
  if (!/[a-zçğıöşü]/i.test(basename)) return false
  return true
}

// ─── Türkçe ayrılma hâli eki (-dan/-den/-tan/-ten) ─────────
// Son ünlü kalınsa "a", inceyse "e"; son harf sert ünsüzse "t", değilse "d".
// Bled'den, Hallstatt'tan, Kotor'dan, Köln'den...
const BACK_VOWELS = 'aıouâû'
const FRONT_VOWELS = 'eiöüî'
const VOICELESS = 'pçtkfhsş'

function ablativeSuffix(word) {
  const lower = word.toLocaleLowerCase('tr-TR')

  // Sondan başlayarak ilk ünlüyü bul
  let isFront = false
  for (let i = lower.length - 1; i >= 0; i--) {
    if (BACK_VOWELS.includes(lower[i])) break
    if (FRONT_VOWELS.includes(lower[i])) {
      isFront = true
      break
    }
  }

  const vowel = isFront ? 'e' : 'a'
  const consonant = VOICELESS.includes(lower[lower.length - 1]) ? 't' : 'd'
  return `${consonant}${vowel}n`
}

function prettifyFilename(basename) {
  // "kotor-eski-kale" → "Kotor Eski Kale"
  return basename
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(w => w.charAt(0).toLocaleUpperCase('tr-TR') + w.slice(1).toLocaleLowerCase('tr-TR'))
    .join(' ')
}

// Şehir/ülke adını normalleştir: idari birim ekini at, sonra düzeltme
// tablosundan geçir ("Kotor Municipality" → "Kotor", "İşbîliye" → "Sevilla")
function normalizeName(name) {
  if (!name) return null
  const stripped = name.replace(ADMIN_SUFFIX, '').trim()
  return CITY_OVERRIDES[stripped] || stripped
}

// Geocode sonucundan şehir adını çıkar
function cityOnly(geocodeResult) {
  if (!geocodeResult || !geocodeResult.address) return null
  const a = geocodeResult.address
  const raw =
    a.city || a.town || a.village || a.municipality || a.hamlet || a.county || a.state
  return normalizeName(raw)
}

// Konumdan okunabilir kısa metin — "Kotor, Karadağ"
function prettyLocation(geocodeResult) {
  if (!geocodeResult || !geocodeResult.address) return null
  const city = cityOnly(geocodeResult)
  const country = normalizeName(geocodeResult.address.country)
  if (city && country) {
    // "Karadağ, Karadağ" gibi tekrarları engelle
    return city === country ? country : `${city}, ${country}`
  }
  return country || null
}

// ─── Reverse geocoding (Nominatim, cache'li) ────────────────

async function reverseGeocode(lat, lng, cache) {
  // Koordinatı 4 basamağa yuvarla → ~11m hassasiyet; aynı çekim noktası tek çağrı
  const key = `${lat.toFixed(4)},${lng.toFixed(4)}`
  if (cache[key]) return cache[key]

  // Nominatim fair use: 1 req/sn
  await new Promise((r) => setTimeout(r, 1100))

  const url = `${NOMINATIM_URL}?format=json&lat=${lat}&lon=${lng}&accept-language=tr,en&zoom=10`
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT, 'Accept': 'application/json' }
    })
    if (!res.ok) {
      console.warn(`  ⚠️  Nominatim HTTP ${res.status} (${key})`)
      return null
    }
    const data = await res.json()
    cache[key] = data
    return data
  } catch (err) {
    console.warn(`  ⚠️  Nominatim hatası (${key}):`, err.message)
    return null
  }
}

// ─── Ana fonksiyon ──────────────────────────────────────────

async function main() {
  if (!fs.existsSync(SANAT_DIR)) {
    console.error(`❌ Klasör yok: ${SANAT_DIR}`)
    process.exit(1)
  }

  const files = fs
    .readdirSync(SANAT_DIR)
    .filter((f) => SUPPORTED_EXT.includes(path.extname(f).toLowerCase()))
    .filter((f) => !f.startsWith('.'))
    .sort()

  if (files.length === 0) {
    console.log('ℹ️  Sanat klasörü boş.')
    saveJSON(OUTPUT_PATH, [])
    process.exit(0)
  }

  console.log(`\n🔍 ${files.length} fotoğraf işleniyor...\n`)

  const cache = loadJSON(CACHE_PATH, {})
  const results = []

  for (const file of files) {
    const filePath = path.join(SANAT_DIR, file)
    const ext = path.extname(file)
    const basename = path.basename(file, ext)

    try {
      const [exif, metadata] = await Promise.all([
        exifr.parse(filePath, {
          tiff: true,
          exif: true,
          gps: true,
          interop: false,
          ifd1: false
        }).catch(() => ({})),
        sharp(filePath).metadata().catch(() => ({}))
      ])

      const date = exif?.DateTimeOriginal || exif?.CreateDate || exif?.ModifyDate
      const dateStr = formatDate(date)

      // Konum: önce elle tanımlı tablo, yoksa GPS → ters-geocoding
      let location = null
      let cityName = null

      const manual = MANUAL_LOCATIONS[basename]
      if (manual) {
        cityName = manual.city || null
        location = manual.city
          ? `${manual.city}, ${manual.country}`
          : manual.country || null
      } else if (exif?.latitude && exif?.longitude) {
        const geo = await reverseGeocode(exif.latitude, exif.longitude, cache)
        location = prettyLocation(geo)
        cityName = cityOnly(geo)
        // Cache'i artımlı kaydet
        saveJSON(CACHE_PATH, cache)
      }

      // Alt text (A+B hibrit)
      let alt
      if (isHumanReadableFilename(basename)) {
        alt = prettifyFilename(basename)
      } else if (cityName) {
        alt = `${cityName}'${ablativeSuffix(cityName)} bir kare`
      } else {
        alt = 'Objektifimden bir kare'
      }

      // Height sınıfı (gerçek boyutlara göre)
      const height = heightFromAspect(metadata?.width, metadata?.height)

      // Bulanık önizleme
      const blurDataURL = await makeBlurDataURL(filePath)

      // Kamera
      const camera = normalizeCamera(exif?.Make, exif?.Model)
      const lens = normalizeLens(exif?.LensMake, exif?.LensModel)

      // Exif blok
      const exifBlock = {
        location: location || 'Bilinmiyor',
        date: dateStr || 'Tarih belirsiz',
        camera: camera || 'Bilinmiyor',
        lens: lens || null,
        aperture: formatAperture(exif?.FNumber || exif?.ApertureValue),
        shutter: formatShutter(exif?.ExposureTime),
        focalLength: formatFocalLength(exif?.FocalLength, exif?.FocalLengthIn35mmFormat),
        iso: formatISO(exif?.ISO || exif?.ISOSpeedRatings)
      }

      // Tarihten sort için timestamp
      const sortKey = date ? new Date(date).getTime() : 0

      results.push({
        src: `/assets/sanat/${file}`,
        alt,
        height,
        width: metadata?.width || null,
        heightPx: metadata?.height || null,
        blurDataURL,
        sortKey,
        exif: exifBlock
      })

      console.log(`  ✅ ${file}  →  ${location || 'GPS yok'}  ·  ${dateStr || 'tarih yok'}  ·  ${height}`)
    } catch (err) {
      console.warn(`  ❌ ${file} işlenemedi:`, err.message)
    }
  }

  // Tarihe göre yeni → eski sırala
  results.sort((a, b) => b.sortKey - a.sortKey)

  // sortKey'i JSON'dan çıkar (çalışma zamanı için gereksiz)
  const output = results.map(({ sortKey, ...rest }) => rest)

  saveJSON(OUTPUT_PATH, output)
  saveJSON(CACHE_PATH, cache)

  console.log(`\n📦 ${results.length} fotoğraf verisi → ${path.relative(process.cwd(), OUTPUT_PATH)}`)
  console.log(`🗺️  Geocoding cache: ${path.relative(process.cwd(), CACHE_PATH)} (${Object.keys(cache).length} konum)\n`)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
