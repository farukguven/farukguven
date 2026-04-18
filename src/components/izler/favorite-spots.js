'use client'

import { useRef } from 'react'
import { ExternalLinkIcon } from 'lucide-react'

// Mekan tipine göre emoji + Türkçe etiket (placeholder için)
const SPOT_META = {
    landmark: { emoji: '📍', label: 'Görülecek yer' },
    cafe: { emoji: '☕', label: 'Kafe' },
    restaurant: { emoji: '🍽️', label: 'Restoran' },
    museum: { emoji: '🏛️', label: 'Müze' },
    park: { emoji: '🌿', label: 'Park' },
    shop: { emoji: '🛍️', label: 'Alışveriş' },
    viewpoint: { emoji: '👁️', label: 'Manzara' }
}

function getMapsUrl(spot) {
    if (spot.coords) {
        return `https://www.google.com/maps/search/?api=1&query=${spot.coords.lat},${spot.coords.lng}`
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name)}`
}

export function FavoriteSpots({ spots = [] }) {
    const scrollRef = useRef(null)

    const scrollToCard = (index) => {
        const container = scrollRef.current
        if (!container) return
        const card = container.children[index]
        if (!card) return
        // Sadece yatay konteyneri kaydır — dikey sayfa scroll'una dokunma
        const cardCenter = card.offsetLeft + card.offsetWidth / 2
        const targetLeft = cardCenter - container.clientWidth / 2
        container.scrollTo({ left: targetLeft, behavior: 'smooth' })
    }

    if (!spots.length) return null

    return (
        <div
            ref={scrollRef}
            className="mt-5 -mx-2 flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-2 pb-2"
        >
            {spots.map((spot, idx) => {
                const meta = SPOT_META[spot.type] || SPOT_META.landmark
                return (
                    <div
                        key={spot.name}
                        className="flex w-[85%] shrink-0 snap-center flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-sm sm:w-[260px]"
                    >
                        {/* Fotoğraf / Placeholder — tıklayınca merkeze kayar */}
                        <button
                            onClick={() => scrollToCard(idx)}
                            className="group/photo relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 focus:outline-none"
                            aria-label={`${spot.name} kartını göster`}
                        >
                            {spot.photo ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={spot.photo}
                                    alt={spot.name}
                                    loading="lazy"
                                    className="h-full w-full rounded-none border-0 object-cover transition-transform duration-500 group-hover/photo:scale-[1.04]"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-4xl opacity-30 select-none">{meta.emoji}</span>
                                </div>
                            )}
                        </button>

                        {/* Bilgi — isim tıklayınca Google Maps açılır */}
                        <div className="flex flex-1 flex-col gap-1.5 p-3">
                            <a
                                href={getMapsUrl(spot)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/title flex items-start justify-between gap-2"
                            >
                                <h4 className="text-sm font-semibold leading-snug text-gray-900 group-hover/title:underline">
                                    {spot.name}
                                </h4>
                                <ExternalLinkIcon
                                    size={12}
                                    className="mt-0.5 shrink-0 text-gray-300 transition-colors group-hover/title:text-gray-700"
                                />
                            </a>
                            {spot.note && (
                                <p className="text-xs leading-relaxed text-gray-500 line-clamp-3">
                                    {spot.note}
                                </p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
