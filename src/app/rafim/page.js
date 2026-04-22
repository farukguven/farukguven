'use client'

import { useMemo, useState } from 'react'
import { BookOpenIcon, FilmIcon, TvIcon } from 'lucide-react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ScrollToTop } from '@/components/scroll-to-top'
import { RAFIM_META, RAFLAR, getRafStats } from '@/lib/rafim-data'

const RAF_ICONS = {
    kitaplar: BookOpenIcon,
    filmler: FilmIcon,
    diziler: TvIcon
}

function ItemCard({ item, raf }) {
    const status = raf.statusMeta[item.status] || null
    const bas = item.title
        .split(' ')
        .slice(0, 2)
        .map((w) => w.charAt(0))
        .join('')
        .toUpperCase()

    return (
        <div className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
            <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 font-semibold text-gray-500 transition-colors group-hover:from-gray-200 group-hover:to-gray-100">
                    {bas}
                </div>
                {status && (
                    <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${status.className}`}
                    >
                        <span className={`size-1.5 rounded-full ${status.dot}`} />
                        {status.label}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-semibold leading-snug text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">
                    {item.author}
                    {item.year ? ` · ${item.year}` : ''}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.subject}</p>
            </div>

            <div className="mt-1 flex">
                <span className="rounded-md bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-500">
                    {item.genre}
                </span>
            </div>
        </div>
    )
}

export default function Rafim() {
    const [activeTabId, setActiveTabId] = useState(RAFLAR[0].id)

    const activeRaf = useMemo(() => RAFLAR.find((r) => r.id === activeTabId), [activeTabId])
    const stats = useMemo(() => getRafStats(activeRaf), [activeRaf])

    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle={RAFIM_META.title} />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title={RAFIM_META.title} />

                    <p className="mb-8 text-gray-600">{RAFIM_META.subtitle}</p>

                    {/* Sekmeler */}
                    <div className="mb-10 flex items-center gap-1 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50/50 p-1 scrollbar-hide">
                        {RAFLAR.map((raf) => {
                            const Icon = RAF_ICONS[raf.id]
                            const isActive = raf.id === activeTabId
                            const count = raf.kategoriler.flatMap((k) => k.items).length
                            return (
                                <button
                                    key={raf.id}
                                    onClick={() => setActiveTabId(raf.id)}
                                    className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {Icon && <Icon size={15} />}
                                    <span>{raf.label}</span>
                                    <span
                                        className={`rounded-full px-1.5 py-0.5 text-[10px] tabular-nums ${
                                            isActive ? 'bg-gray-100 text-gray-600' : 'bg-gray-200/70 text-gray-500'
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* İstatistik barı */}
                    <div className="mb-10 flex items-center justify-between rounded-xl border border-gray-100 bg-white/50 px-5 py-3 text-sm">
                        <span className="text-gray-500">
                            <span className="font-semibold text-gray-900 tabular-nums">{stats.toplam}</span>{' '}
                            {activeRaf.itemNoun} · <span className="tabular-nums">{stats.kategoriSayisi}</span>{' '}
                            kategori
                        </span>
                        <span className="text-xs text-gray-400">{activeRaf.label} rafı</span>
                    </div>

                    {/* Kategoriler */}
                    <div className="flex flex-col gap-16">
                        {activeRaf.kategoriler.map((kategori) => (
                            <section key={kategori.id}>
                                <div className="mb-6 flex flex-col gap-1">
                                    <div className="flex items-baseline gap-3">
                                        <h2 className="text-xl font-bold text-gray-900">{kategori.name}</h2>
                                        <span className="text-xs text-gray-400 tabular-nums">
                                            {kategori.items.length} {activeRaf.itemNoun}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">{kategori.description}</p>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {kategori.items.map((item) => (
                                        <ItemCard key={item.id} item={item} raf={activeRaf} />
                                    ))}
                                </div>
                            </section>
                        ))}

                        {activeRaf.kategoriler.every((k) => k.items.length === 0) && (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <p className="text-sm text-gray-400">Henüz bu rafta içerik yok.</p>
                            </div>
                        )}
                    </div>

                    {/* Alt not */}
                    <div className="mt-16 rounded-xl bg-gray-50 p-6 text-center">
                        <p className="text-sm text-gray-600">
                            Her eser yeni bir ufuk. Okudukça, izledikçe notlarımı ve düşüncelerimi{' '}
                            <a href="/writing" className="font-medium text-gray-900 hover:underline">
                                Yazılar
                            </a>{' '}
                            sayfasında paylaşıyorum.
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </ScrollArea>
    )
}
