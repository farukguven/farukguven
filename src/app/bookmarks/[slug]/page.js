import { ArrowUpRightIcon } from 'lucide-react'
import { notFound } from 'next/navigation'

import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ScrollToTop } from '@/components/scroll-to-top'
import { getKategori, YER_IMLERI_KATEGORILER } from '@/lib/yer-imleri-data'

export function generateStaticParams() {
    return YER_IMLERI_KATEGORILER.map((k) => ({ slug: k.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const kategori = getKategori(slug)
    if (!kategori) return {}
    return {
        title: `${kategori.title} | Yer İmleri`
    }
}

function BookmarkCard({ item }) {
    let host = ''
    try {
        host = new URL(item.url).host.replace('www.', '')
    } catch {}

    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
        >
            <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold leading-snug text-gray-900 group-hover:underline">
                    {item.title}
                </h3>
                <ArrowUpRightIcon
                    size={14}
                    className="mt-1 shrink-0 text-gray-300 transition-colors group-hover:text-gray-700"
                />
            </div>
            {item.description && (
                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
            )}
            {host && (
                <span className="mt-2 text-[11px] font-medium tabular-nums text-gray-400">
                    {host}
                </span>
            )}
        </a>
    )
}

export default async function KategoriPage({ params }) {
    const { slug } = await params
    const kategori = getKategori(slug)
    if (!kategori) notFound()

    return (
        <ScrollArea className="bg-grid" useScrollAreaId>
            <FloatingHeader scrollTitle={kategori.title} goBackLink="/bookmarks" />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title={kategori.title} />

                    {kategori.items.length === 0 ? (
                        <p className="mt-6 text-sm text-gray-400">
                            Bu kategoride henüz yer imi yok.
                        </p>
                    ) : (
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {kategori.items.map((item) => (
                                <BookmarkCard key={item.url} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <ScrollToTop />
        </ScrollArea>
    )
}
