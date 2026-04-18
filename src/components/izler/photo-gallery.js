'use client'

import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'

export function PhotoGallery({ photos = [], city }) {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    const openAt = (i) => {
        setIndex(i)
        setOpen(true)
    }
    const close = () => setOpen(false)
    const next = () => setIndex((i) => (i + 1) % photos.length)
    const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)

    // Keyboard navigation
    useEffect(() => {
        if (!open) return
        const onKey = (e) => {
            if (e.key === 'Escape') close()
            else if (e.key === 'ArrowRight') next()
            else if (e.key === 'ArrowLeft') prev()
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [open, photos.length])

    if (!photos.length) return null

    // Grid kolon sayısı fotoğraf sayısına göre
    const gridCols =
        photos.length === 1
            ? 'grid-cols-1'
            : photos.length === 2
                ? 'grid-cols-2'
                : 'grid-cols-2 sm:grid-cols-3'

    return (
        <>
            <div className={`mt-4 grid ${gridCols} gap-2`}>
                {photos.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => openAt(i)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-100 bg-gray-50 transition-all hover:border-gray-300"
                        aria-label={`${city} fotoğraf ${i + 1}`}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={`${city} - ${i + 1}`}
                            className="h-full w-full rounded-none border-0 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {open && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={close}
                >
                    {/* Kapat */}
                    <button
                        onClick={close}
                        className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        aria-label="Kapat"
                    >
                        <XIcon size={20} />
                    </button>

                    {/* Önceki */}
                    {photos.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); prev() }}
                            className="absolute left-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                            aria-label="Önceki"
                        >
                            <ChevronLeftIcon size={20} />
                        </button>
                    )}

                    {/* Sonraki */}
                    {photos.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); next() }}
                            className="absolute right-4 bottom-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-4 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
                            aria-label="Sonraki"
                        >
                            <ChevronRightIcon size={20} />
                        </button>
                    )}

                    {/* Görsel */}
                    <div
                        className="relative max-h-[90vh] max-w-[95vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={photos[index]}
                            alt={`${city} - ${index + 1}`}
                            className="max-h-[90vh] max-w-[95vw] rounded-lg border-0 object-contain"
                        />
                        <div className="mt-3 text-center">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium tabular-nums text-white/80 backdrop-blur-sm">
                                {index + 1} / {photos.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
