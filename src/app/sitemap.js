import { YAZILAR } from '@/lib/yazilar-data'

const BASE_URL = 'https://farukguven.com'

// Statik sayfa listesi — site büyüdükçe buraya ekle
const STATIC_PAGES = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: 'writing', priority: 0.8, changeFrequency: 'weekly' },
  { path: 'fotograflar', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'ekipmanlar', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'gorsel-seruven', priority: 0.6, changeFrequency: 'yearly' }
  // İzler, Rafım, Yer İmleri pasif — aktif olunca buraya ekle
]

export default function sitemap() {
  const now = new Date()
  const staticUrls = STATIC_PAGES.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: now,
    changeFrequency,
    priority
  }))

  const yaziUrls = YAZILAR.map((y) => ({
    url: `${BASE_URL}/writing/${y.slug}`,
    lastModified: new Date(y.date),
    changeFrequency: 'yearly',
    priority: 0.7
  }))

  // Yer İmleri şimdilik pasif — aktif olunca eklenecek
  // const kategoriUrls = YER_IMLERI_KATEGORILER.map(...)

  return [...staticUrls, ...yaziUrls]
}
