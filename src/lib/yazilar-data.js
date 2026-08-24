// Yazılar - yerel blog verisi
//
// Yeni yazı eklemek için bu dosyaya bir obje ekle.
// `content` alanında markdown kullanabilirsin (başlık, liste, kalın vs.)
//
// `draft: true` verirsen yazı listede görünmez ama adresinden
// açılır — yayına almak için satırı sil ya da false yap.

export const YAZILAR_META = {
    title: 'Yazılar'
}

/**
 * @typedef {Object} Yazi
 * @property {string} slug - URL için (benzersiz)
 * @property {string} title - Başlık
 * @property {string} date - 'YYYY-MM-DD' formatında
 * @property {string} [summary] - Meta açıklama (opsiyonel)
 * @property {boolean} [draft] - true ise listede gizli
 * @property {string} content - Markdown içerik
 */

/** @type {Yazi[]} */
export const YAZILAR = [
    {
        slug: 'kagit-gibi-bir-ekran',
        title: 'Kâğıt Gibi Bir Ekran',
        date: '2026-08-24',
        summary:
            'E-kâğıt ekranla kendi fotoğraf çerçevemi yapıyorum: arkadan ışık vermeyen, elektrik kesilince bile görüntüyü tutan bir ekran.',
        draft: true,
        content: `Uzun süredir aklımda olan bir şeyi yapıyorum: e-kâğıt ekranla bir fotoğraf çerçevesi.

Sıradan bir ekran değil. Arkadan ışık vermiyor, bakınca kâğıda bakıyormuş gibi oluyorsun. Ve en tuhaf tarafı: fişini çektiğinde görüntü ekranda kalmaya devam ediyor.

## Neden e-kâğıt

Normal bir ekran duvarda parlıyor, kendini belli ediyor, elektrik yiyor. E-kâğıt ise sadece görüntü değişirken güç harcıyor.

## Donanım seçimi

Panel boyutu, renk mi tek renk mi, sürücü kartı, kontrolcü.

## Kutuyu kendim bastım

Üç boyutlu yazıcıyla çerçeve tasarımı.

## Asıl mesele: görseli hazırlamak

E-kâğıdın gösterebildiği renk sayısı çok sınırlı. Fotoğrafı olduğu gibi göndermek işe yaramıyor.

## Güç

Ne kadar dayanıyor.

## Sonuç

Duvarda nasıl duruyor.
`
    }
]

export function getYazi(slug) {
    return YAZILAR.find((y) => y.slug === slug) || null
}

export function getSortedYazilar() {
    return [...YAZILAR]
        .filter((y) => !y.draft)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
}
