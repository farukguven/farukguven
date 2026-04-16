'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Calendar, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// Her ülke için benzersiz gradient renkleri
const COUNTRY_GRADIENTS = {
  'İtalya': 'from-emerald-900/80 via-emerald-800/60 to-red-900/70',
  'Vatikan': 'from-amber-900/80 via-yellow-800/60 to-amber-700/70',
  'Fransa': 'from-blue-900/80 via-indigo-800/60 to-rose-900/70',
  'Hollanda': 'from-orange-900/80 via-amber-800/60 to-blue-900/70',
  'İspanya': 'from-red-900/80 via-orange-800/60 to-yellow-900/70',
  'Balkanlar': 'from-teal-900/80 via-cyan-800/60 to-slate-900/70',
}

const COUNTRY_BASE = {
  'İtalya': 'from-green-800 to-emerald-950',
  'Vatikan': 'from-amber-700 to-yellow-950',
  'Fransa': 'from-blue-800 to-indigo-950',
  'Hollanda': 'from-orange-700 to-blue-950',
  'İspanya': 'from-red-800 to-orange-950',
  'Balkanlar': 'from-teal-700 to-slate-950',
}

export function TripContentItem({ item, forwardedRef }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const hasImages = item.images && item.images.length > 0
  const hasMultipleImages = hasImages && item.images.length > 1

  const gradient = COUNTRY_GRADIENTS[item.country] || 'from-gray-900/80 via-gray-800/60 to-gray-900/70'
  const baseGradient = COUNTRY_BASE[item.country] || 'from-gray-800 to-gray-950'

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length)
  }
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
  }

  return (
    <article
      ref={forwardedRef}
      id={item.id}
      className="relative w-full rounded-3xl overflow-hidden scroll-mt-24 mb-8 group"
      style={{ minHeight: '480px' }}
    >
      {/* Arka Plan: Fotoğraf veya Gradient */}
      {hasImages ? (
        <>
          <Image
            src={item.images[currentImageIndex]}
            alt={`${item.city} fotoğraf`}
            fill
            className="object-cover transition-all duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 75vw"
            priority={false}
          />
          {/* Fotoğraf üzeri koyu overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
        </>
      ) : (
        /* Fotoğraf yoksa güzel bir gradient arka plan */
        <div className={`absolute inset-0 bg-gradient-to-br ${baseGradient}`}>
          {/* Dekoratif daireler */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
        </div>
      )}

      {/* Üst Bar: Ülke Badge + Tarih */}
      <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
        {/* Ülke Badge (görseldeki "Switzerland" badge gibi) */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <span className="text-lg">{item.flag}</span>
          <span className="text-white font-medium text-sm">{item.country}</span>
        </div>

        {/* Tarih Badge */}
        <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/10">
          <Calendar size={12} className="text-white/80" />
          <span className="text-white/90 text-xs font-medium">{item.dateStr}</span>
        </div>
      </div>

      {/* Ortadaki büyük emoji (fotoğraf yoksa) */}
      {!hasImages && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[120px] opacity-10 select-none">{item.flag}</span>
        </div>
      )}

      {/* Alt Kısım: İçerik Kartları */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {/* Şehir ve Açıklama Kartı */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-5 shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={14} className="text-white/70" />
            <h2 className="text-xl font-bold text-white tracking-tight">{item.city}</h2>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>

          {/* Deneyim Alıntısı */}
          {item.experiences && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex gap-2">
                <Quote size={14} className="text-white/40 shrink-0 mt-0.5" />
                <p className="text-white/60 text-xs leading-relaxed italic">
                  {item.experiences}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fotoğraf Navigasyonu (birden fazla görsel varsa) */}
      {hasMultipleImages && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <button
            onClick={prevImage}
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          <span className="text-white/70 text-xs font-medium tabular-nums">
            {currentImageIndex + 1} / {item.images.length}
          </span>
          <button
            onClick={nextImage}
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      )}
    </article>
  )
}
