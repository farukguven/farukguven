'use client'

import { useState, forwardRef } from 'react'
import Image from 'next/image'
import { MapPin, Calendar, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { TravelLightbox } from './travel-lightbox'

// Ülke renkleri — minimal, sadece gradient fallback
const COUNTRY_COLORS = {
  'İtalya': 'bg-emerald-50',
  'Vatikan': 'bg-amber-50',
  'Fransa': 'bg-blue-50',
  'Hollanda': 'bg-orange-50',
  'İspanya': 'bg-red-50',
  'Balkanlar': 'bg-teal-50',
}

export const TravelLocationCard = forwardRef(function TravelLocationCard({ location, isActive }, ref) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const hasImages = location.images && location.images.length > 0
  const hasMultipleImages = hasImages && location.images.length > 1
  const bgColor = COUNTRY_COLORS[location.country] || 'bg-gray-50'

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <section
        ref={ref}
        id={location.id}
        className="scroll-mt-6 pb-12"
      >
        {/* Gün badge (varsa) */}
        {location.day && (
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
              Gün {location.day}
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
        )}

        {/* Başlık alanı */}
        <div className="mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">{location.flag}</span>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
              {location.title}
            </h2>
            {location.featured && (
              <Star size={14} className="fill-gray-900 text-gray-900" />
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-gray-400">
            {location.city && (
              <span className="flex items-center gap-1">
                <MapPin size={11} />
                {location.city}
              </span>
            )}
            {location.visitedDate && (
              <span className="flex items-center gap-1">
                <Calendar size={11} />
                {location.visitedDate}
              </span>
            )}
            {location.tags && location.tags.length > 0 && (
              <div className="flex items-center gap-1.5">
                {location.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Görsel alanı */}
        {hasImages ? (
          <div className="group relative mb-4 overflow-hidden rounded-xl">
            <button
              onClick={() => openLightbox(currentImageIndex)}
              className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl focus:outline-none"
              aria-label="Fotoğrafı büyüt"
            >
              <Image
                src={location.images[currentImageIndex].src}
                alt={location.images[currentImageIndex].alt || location.title}
                fill
                className="rounded-none border-0 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </button>

            {/* Görsel caption */}
            {location.images[currentImageIndex].caption && (
              <p className="mt-2 text-xs text-gray-400 italic">
                {location.images[currentImageIndex].caption}
              </p>
            )}

            {/* Çoklu görsel navigasyonu */}
            {hasMultipleImages && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex((prev) => (prev - 1 + location.images.length) % location.images.length)
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white"
                  aria-label="Önceki fotoğraf"
                >
                  <ChevronLeft size={14} />
                </button>
                <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium tabular-nums text-gray-500 shadow-sm">
                  {currentImageIndex + 1}/{location.images.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex((prev) => (prev + 1) % location.images.length)
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white"
                  aria-label="Sonraki fotoğraf"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Fotoğraf yoksa minimal placeholder */
          <div className={`mb-4 flex aspect-[16/10] items-center justify-center rounded-xl border border-gray-100 ${bgColor}`}>
            <span className="text-5xl opacity-20">{location.flag}</span>
          </div>
        )}

        {/* Açıklama */}
        <p className="mb-0 text-sm leading-relaxed text-gray-600">
          {location.description}
        </p>

        {/* Rating */}
        {location.rating && (
          <div className="mt-3 flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < location.rating ? 'fill-gray-800 text-gray-800' : 'text-gray-200'}
              />
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {hasImages && (
        <TravelLightbox
          images={location.images}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
})
