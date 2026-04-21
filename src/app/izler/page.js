import { SparklesIcon } from 'lucide-react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { PhotoGallery } from '@/components/izler/photo-gallery'
import { FavoriteSpots } from '@/components/izler/favorite-spots'
import { IZLER, IZLER_META, groupByCountry, getCountryList } from '@/lib/izler-minimal-data'

export const metadata = {
    title: 'İzler',
    description: 'Gittiğim yerlerden küçük notlar.'
}

function IzCard({ iz }) {
    const hasPhotos = iz.photos && iz.photos.length > 0

    return (
        <article id={`iz-${iz.id}`} className="relative flex scroll-mt-20 pb-12 last:pb-0">
            {/* Dikey çizgi */}
            <div className="absolute inset-0 flex w-5 justify-center">
                <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200" />
            </div>

            {/* Nokta */}
            <div className="z-0 mt-1.5 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                <div className="size-2 rounded-full bg-gray-400" />
            </div>

            {/* İçerik */}
            <div className="grow pl-4 lg:pl-8">
                {/* Başlık */}
                <div className="mb-1 flex items-baseline gap-2.5">
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                        {iz.city}
                    </h3>
                    {iz.date && <span className="text-xs text-gray-400">· {iz.date}</span>}
                </div>

                {/* Not */}
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{iz.note}</p>

                {/* Highlight / Tavsiye */}
                {iz.highlight && (
                    <div className="mt-3 flex items-start gap-2 rounded-lg bg-gray-50 px-3 py-2">
                        <SparklesIcon size={13} className="mt-0.5 shrink-0 text-gray-400" />
                        <p className="text-[13px] leading-relaxed text-gray-600">{iz.highlight}</p>
                    </div>
                )}

                {/* Fotoğraflar */}
                {hasPhotos && <PhotoGallery photos={iz.photos} city={iz.city} />}

                {/* Beğendiğim yerler */}
                <FavoriteSpots spots={iz.favoriteSpots} city={iz.city} />
            </div>
        </article>
    )
}

export default function Izler() {
    const gruplar = groupByCountry(IZLER)
    const ulkeler = getCountryList(IZLER)

    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle={IZLER_META.title} />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title={IZLER_META.title} />

                    <p className="mb-4 text-gray-600">{IZLER_META.subtitle}</p>

                    <p className="mb-4 text-sm text-gray-400">
                        <span className="font-semibold text-gray-900 tabular-nums">{IZLER.length}</span>{' '}
                        şehir · <span className="font-semibold text-gray-900 tabular-nums">{ulkeler.length}</span>{' '}
                        ülke
                    </p>

                    {/* Ülke çipleri — tıklayınca o ülkenin ilk şehrine kaydırır */}
                    <div className="mb-12 flex flex-wrap gap-1.5">
                        {ulkeler.map((u) => (
                            <a
                                key={u.country}
                                href={`#iz-${u.firstId}`}
                                className="group inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-white hover:text-gray-900"
                            >
                                <span className="text-sm leading-none">{u.flag}</span>
                                <span className="font-medium">{u.country}</span>
                                <span className="tabular-nums text-gray-400 group-hover:text-gray-500">
                                    {u.cityCount}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-14">
                        {gruplar.map((grup) => (
                            <section
                                key={grup.country}
                                id={`ulke-${grup.items[0].id}`}
                                className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
                            >
                                <div className="sticky top-4 flex w-32 shrink-0 items-baseline gap-2">
                                    <span className="text-2xl leading-none">{grup.flag}</span>
                                    <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                        {grup.country}
                                    </h2>
                                </div>
                                <div className="w-full min-w-0 flex-1">
                                    {grup.items.map((iz) => (
                                        <IzCard key={iz.id} iz={iz} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="mt-16 rounded-xl bg-gray-50 p-6 text-center">
                        <p className="text-sm text-gray-600">
                            Gittiğim her yer küçük bir iz bırakıyor. Uzun gezi notlarını ve düşüncelerimi{' '}
                            <a href="/writing" className="font-medium text-gray-900 hover:underline">
                                Yazılar
                            </a>{' '}
                            sayfasında paylaşıyorum.
                        </p>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}
