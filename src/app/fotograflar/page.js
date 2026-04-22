'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CameraIcon, MapPinIcon, CalendarIcon, ApertureIcon, TimerIcon, FocusIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ScrollToTop } from '@/components/scroll-to-top'
import sanatPhotos from '@/data/sanat-photos.json'

// Fotoğraflar: build-time olarak /public/assets/sanat/ klasöründen üretiliyor
// (bkz. scripts/generate-photos-data.js). Buraya elle hiçbir şey eklemene gerek yok.
export const images = sanatPhotos

const heightClasses = {
    short: 'h-48',
    medium: 'h-64',
    tall: 'h-80'
}


// EXIF Overlay Component
function ExifOverlay({ exif, isLightbox = false }) {
    const isPhone = (exif.camera || '').toLowerCase().includes('iphone');

    return (
        <div className={`absolute bottom-0 left-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 text-white ${isLightbox ? 'right-auto max-w-sm rounded-tr-xl' : 'right-0'}`}>
            {/* Location & Date as the new title */}
            <div className={`mb-3 flex flex-wrap items-center gap-2 font-mono font-medium ${isLightbox ? 'text-lg' : 'text-sm'}`}>
                <MapPinIcon size={14} className="text-gray-300" />
                <span>{exif.location} - {exif.date}</span>
            </div>

            {/* EXIF Details */}
            <div className="space-y-1.5 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-2">
                    <CameraIcon size={12} />
                    <span>{exif.camera}</span>
                </div>

                {/* Show Lens only if not taken by a phone */}
                {!isPhone && exif.lens && exif.lens !== 'Belirtilmemiş' && (
                    <div className="flex items-center gap-2">
                        <FocusIcon size={12} />
                        <span>{exif.lens}</span>
                    </div>
                )}

                {exif.aperture && (
                    <div className="flex items-center gap-2">
                        <ApertureIcon size={12} />
                        <span>{exif.aperture}</span>
                    </div>
                )}

                {exif.shutter && (
                    <div className="flex items-center gap-2">
                        <TimerIcon size={12} />
                        <span>{exif.shutter}</span>
                    </div>
                )}

                {(exif.focalLength || exif.iso) && (
                    <div className="flex items-center gap-2">
                        <FocusIcon size={12} />
                        <span>{[exif.focalLength, exif.iso].filter(Boolean).join(' | ')}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

// Fullscreen Lightbox Component
function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
    const currentImage = images[currentIndex]

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
        if (e.key === 'ArrowRight') onNext()
        if (e.key === 'ArrowLeft') onPrev()
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={onClose}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {/* Close Button */}
            <button
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                onClick={onClose}
            >
                <XIcon size={24} />
            </button>

            {/* Previous Button */}
            {currentIndex > 0 && (
                <button
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                    onClick={(e) => { e.stopPropagation(); onPrev() }}
                >
                    <ChevronLeftIcon size={28} />
                </button>
            )}

            {/* Next Button */}
            {currentIndex < images.length - 1 && (
                <button
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                    onClick={(e) => { e.stopPropagation(); onNext() }}
                >
                    <ChevronRightIcon size={28} />
                </button>
            )}

            {/* Image Container */}
            <div
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain pointer-events-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    )
}

// Image Card Component
function ImageCard({ img, onClick, priority = false }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 ${heightClasses[img.height]}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover transition-transform duration-500 pointer-events-none ${isHovered ? 'scale-105' : ''}`}
                priority={priority}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
            />
            {isHovered && <ExifOverlay exif={img.exif} />}
        </div>
    )
}

export default function Sanat() {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // JSON build time'da yeniden-eskiye sıralı üretiliyor; ek iş yok.
    const sortedImages = images

    const openLightbox = (index) => {
        setCurrentImageIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    const nextImage = () => {
        if (currentImageIndex < sortedImages.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    return (
        <>
            <ScrollArea useScrollAreaId>
                <GradientBg3 />
                <FloatingHeader scrollTitle="Objektifimden" />
                <div className="content-wrapper">
                    <div className="content">
                        <PageTitle title="Objektifimden" />
                        <p className="mb-8 text-center text-gray-600">Seyahatlerimde ve günlük yaşantımda objektifime yansıyan bazı anlar.</p>

                        {/* Responsive Left-to-Right Masonry Hack without Hydration issues */}
                        {/* 1 Column (Mobile) */}
                        <div className="flex flex-col gap-3 sm:hidden">
                            {sortedImages.map((img, idx) => (
                                <ImageCard key={idx} img={img} onClick={() => openLightbox(idx)} />
                            ))}
                        </div>

                        {/* 2 Columns (Tablet) */}
                        <div className="hidden sm:flex lg:hidden gap-3">
                            {[0, 1].map((colIndex) => (
                                <div key={colIndex} className="flex-1 flex flex-col gap-3">
                                    {sortedImages
                                        .map((img, idx) => ({ img, idx }))
                                        .filter(({ idx }) => idx % 2 === colIndex)
                                        .map(({ img, idx }) => (
                                            <ImageCard key={idx} img={img} onClick={() => openLightbox(idx)} />
                                        ))}
                                </div>
                            ))}
                        </div>

                        {/* 3 Columns (Desktop) */}
                        <div className="hidden lg:flex gap-3">
                            {[0, 1, 2].map((colIndex) => (
                                <div key={colIndex} className="flex-1 flex flex-col gap-3">
                                    {sortedImages
                                        .map((img, idx) => ({ img, idx }))
                                        .filter(({ idx }) => idx % 3 === colIndex)
                                        .map(({ img, idx }) => (
                                            <ImageCard key={idx} img={img} onClick={() => openLightbox(idx)} />
                                        ))}
                                </div>
                            ))}
                        </div>

                        {sortedImages.length === 0 && (
                            <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-200 p-8 text-center">
                                <CameraIcon size={40} className="text-gray-300" />
                                <p className="text-gray-500">Henüz içerik yok.</p>
                            </div>
                        )}
                    </div>
                </div>
                <ScrollToTop />
            </ScrollArea>

            {/* Fullscreen Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    images={sortedImages}
                    currentIndex={currentImageIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </>
    )
}
