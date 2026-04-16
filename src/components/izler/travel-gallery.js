'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TravelLightbox } from './travel-lightbox'

// Minimal country colors for placeholder
const COUNTRY_BG = {
  'İtalya': 'bg-emerald-50/60',
  'Vatikan': 'bg-amber-50/60',
  'Fransa': 'bg-blue-50/60',
  'Hollanda': 'bg-orange-50/60',
  'İspanya': 'bg-red-50/60',
  'Portekiz': 'bg-yellow-50/60',
  'Almanya': 'bg-zinc-50/60',
  'İsviçre': 'bg-rose-50/60',
  'Bosna Hersek': 'bg-sky-50/60',
  'Karadağ': 'bg-indigo-50/60',
  'Makedonya': 'bg-purple-50/60',
}

export function TravelGallery({ images = [], locationTitle, flag, country }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)

  const hasImages = images.length > 0
  const hasMultiple = images.length > 1
  const bgColor = COUNTRY_BG[country] || 'bg-gray-50/60'

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  // Touch swipe support
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev()
    }
    setTouchStart(null)
  }

  if (!hasImages) {
    return (
      <div className={`flex aspect-[4/3] sm:aspect-[16/10] w-full items-center justify-center rounded-xl border border-gray-100 ${bgColor}`}>
        <span className="text-5xl opacity-15 select-none">{flag}</span>
      </div>
    )
  }

  return (
    <>
      <div className="group relative">
        {/* Main image */}
        <button
          onClick={() => openLightbox(currentIndex)}
          onTouchStart={hasMultiple ? handleTouchStart : undefined}
          onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
          className="relative block aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xl focus:outline-none"
          aria-label="Fotoğrafı büyüt"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || locationTitle}
            fill
            className="rounded-none border-0 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </button>

        {/* Caption */}
        {images[currentIndex].caption && (
          <p className="mt-2 mb-0 text-xs text-gray-400 italic">{images[currentIndex].caption}</p>
        )}

        {/* Navigation */}
        {hasMultiple && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
              aria-label="Önceki fotoğraf"
            >
              <ChevronLeft size={14} />
            </button>
            <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-medium tabular-nums text-gray-500 shadow-sm backdrop-blur-sm">
              {currentIndex + 1}/{images.length}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
              aria-label="Sonraki fotoğraf"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* Thumbnail strip for multiple images */}
        {hasMultiple && (
          <div className="mt-2.5 flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
                  i === currentIndex
                    ? 'ring-2 ring-gray-900 ring-offset-1'
                    : 'opacity-50 hover:opacity-80'
                }`}
                aria-label={`Fotoğraf ${i + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt || ''}
                  fill
                  className="rounded-none border-0 object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <TravelLightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
