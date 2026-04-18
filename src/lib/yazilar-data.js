// Yazılar - yerel blog verisi
//
// Yeni yazı eklemek için bu dosyaya bir obje ekle.
// `content` alanında markdown kullanabilirsin (başlık, liste, kalın vs.)

export const YAZILAR_META = {
    title: 'Yazılar'
}

/**
 * @typedef {Object} Yazi
 * @property {string} slug - URL için (benzersiz)
 * @property {string} title - Başlık
 * @property {string} date - 'YYYY-MM-DD' formatında
 * @property {string} content - Markdown içerik
 */

/** @type {Yazi[]} */
export const YAZILAR = []

export function getYazi(slug) {
    return YAZILAR.find((y) => y.slug === slug) || null
}

export function getSortedYazilar() {
    return [...YAZILAR].sort((a, b) => new Date(b.date) - new Date(a.date))
}
