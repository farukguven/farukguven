'use client'

import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function TravelLightbox({ images = [], initialIndex = 0, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex)
  }, [isOpen, initialIndex])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose, goNext, goPrev])

  if (!isOpen || images.length === 0) return null

  const current = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Fotoğraf görüntüleyici"
    >
      {/* Kapat */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        aria-label="Kapat"
      >
        <X size={20} />
      </button>

      {/* Önceki */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goPrev()
          }}
          className="absolute left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white md:left-6"
          aria-label="Önceki fotoğraf"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Görsel */}
      <div
        className="relative flex max-h-[85vh] max-w-[90vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[80vh] overflow-hidden">
          <img
            src={current.src}
            alt={current.alt || ''}
            className="max-h-[80vh] max-w-[90vw] rounded-none border-0 object-contain"
          />
        </div>
        {current.caption && (
          <p className="mt-3 text-center text-sm text-white/60">{current.caption}</p>
        )}
        {images.length > 1 && (
          <p className="mt-1 text-xs tabular-nums text-white/40">
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Sonraki */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goNext()
          }}
          className="absolute right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white md:right-6"
          aria-label="Sonraki fotoğraf"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  )
}
