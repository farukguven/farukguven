// Yer İmleri - paylaşmak istediğin web siteleri / kaynaklar
//
// Her kategori /bookmarks/[slug] şeklinde kendi sayfasına sahip olur.
// Yeni kategoriye bookmark eklemek için items dizisine obje ekle.

export const YER_IMLERI_META = {
    title: 'Yer İmleri'
}

/**
 * @typedef {Object} YerImi
 * @property {string} title - Başlık
 * @property {string} url - Tam URL
 * @property {string} [description] - Kısa açıklama (opsiyonel)
 */

/**
 * @typedef {Object} YerImiKategori
 * @property {string} slug - URL için
 * @property {string} title - Gösterilen ad
 * @property {YerImi[]} items
 */

/** @type {YerImiKategori[]} */
export const YER_IMLERI_KATEGORILER = [
    {
        slug: 'teknoloji',
        title: 'Teknoloji & Maker',
        items: [
            {
                title: 'Hacker News',
                url: 'https://news.ycombinator.com',
                description: 'Günlük teknoloji haberleri'
            },
            {
                title: 'Adafruit Learn',
                url: 'https://learn.adafruit.com',
                description: 'Elektronik ve maker projeleri için rehberler'
            }
        ]
    },
    {
        slug: 'tasarim',
        title: 'Tasarım',
        items: [
            {
                title: 'Dribbble',
                url: 'https://dribbble.com',
                description: 'Tasarım ilham galerisi'
            }
        ]
    },
    {
        slug: 'ogrenme',
        title: 'Öğrenme',
        items: [
            {
                title: 'MIT OpenCourseWare',
                url: 'https://ocw.mit.edu',
                description: 'Ücretsiz MIT dersleri'
            }
        ]
    }
]

export function getKategoriler() {
    return [...YER_IMLERI_KATEGORILER]
        .sort((a, b) => a.title.localeCompare(b.title, 'tr'))
        .map((k) => ({ ...k, count: k.items.length }))
}

export function getKategori(slug) {
    return YER_IMLERI_KATEGORILER.find((k) => k.slug === slug) || null
}
