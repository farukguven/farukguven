'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { CameraIcon, MapPinIcon, CalendarIcon, ApertureIcon, TimerIcon, FocusIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'

// Images with EXIF data
export const images = [
    {
        src: '/assets/sanat/IMG_0161.jpg',
        alt: 'İstanbul\'dan Bir Kare',
        height: 'medium',
        exif: {
            title: 'Kedi ve Şehir',
            location: 'İstanbul, Türkiye',
            date: 'Nisan 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/5800 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 64'
        }
    },
    {
        src: '/assets/sanat/IMG_1436.jpg',
        alt: 'Sevilla',
        height: 'tall',
        exif: {
            title: 'Sevilla Sokakları',
            location: 'Sevilla, İspanya',
            date: 'Mayıs 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Telephoto Camera f/2.8',
            aperture: 'f/2.8',
            shutter: '1/89 s',
            focalLength: '120 mm (Eşdeğer)',
            iso: 'ISO 200'
        }
    },
    {
        src: '/assets/sanat/IMG_1673.jpg',
        alt: 'Lizbon',
        height: 'tall',
        exif: {
            title: 'Lizbon Manzarası',
            location: 'Lizbon, Portekiz',
            date: 'Mayıs 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/3250 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 64'
        }
    },
    {
        src: '/assets/sanat/IMG_7117.jpg',
        alt: 'Kotor',
        height: 'short',
        exif: {
            title: 'Kotor Körfezi',
            location: 'Kotor, Karadağ',
            date: 'Ekim 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/9400 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 100'
        }
    },
    {
        src: '/assets/sanat/IMG_2464.JPG',
        alt: 'Zaandam 1',
        height: 'tall',
        exif: {
            title: 'Zaandam Mimarisi',
            location: 'Zaandam, Hollanda',
            date: 'Mayıs 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/4950 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 80'
        }
    },
    {
        src: '/assets/sanat/IMG_2634.JPG',
        alt: 'Zaandam 2',
        height: 'medium',
        exif: {
            title: 'Zaandam Yel değirmeni',
            location: 'Zaandam, Hollanda',
            date: 'Mayıs 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/3100 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 80'
        }
    },
    {
        src: '/assets/sanat/DSC03247.jpg',
        alt: 'Anı 1',
        height: 'short',
        exif: {
            title: 'Özel Anı',
            location: 'Bilinmiyor',
            date: 'Haziran 2025',
            camera: 'Sony A7C II',
            lens: 'Sony FE 35mm f/1.4',
            aperture: 'f/1.4',
            shutter: '1/4000 s',
            focalLength: '35 mm',
            iso: 'ISO 100'
        }
    },
    {
        src: '/assets/sanat/IMG_0730.JPG',
        alt: 'Kurtuba',
        height: 'tall',
        exif: {
            title: 'Kurtuba Sokakları',
            location: 'Kurtuba, İspanya',
            date: 'Nisan 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/50 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 500'
        }
    },
    {
        src: '/assets/sanat/IMG_0735.jpg',
        alt: 'Luzern',
        height: 'medium',
        exif: {
            title: 'Luzern Manzarası',
            location: 'Luzern, İsviçre',
            date: 'Mart 2026',
            camera: 'iPhone 17 Pro Max',
            lens: 'Apple Wide Camera',
            aperture: 'f/1.7',
            shutter: '1/11300 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 64'
        }
    },
    {
        src: '/assets/sanat/IMG_2964.jpg',
        alt: 'Bosna Hersek',
        height: 'tall',
        exif: {
            title: 'Doğa Manzarası',
            location: 'Prozor-Rama, Bosna Hersek',
            date: 'Temmuz 2025',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Telephoto Camera f/2.8',
            aperture: 'f/2.8',
            shutter: '1/780 s',
            focalLength: '120 mm (Eşdeğer)',
            iso: 'ISO 50'
        }
    },
    {
        src: '/assets/sanat/IMG_3048.jpg',
        alt: 'Seyahat',
        height: 'medium',
        exif: {
            title: 'Yolculuk',
            location: 'Balkanlar',
            date: 'Temmuz 2025',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/6000 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 100'
        }
    },
    {
        src: '/assets/sanat/IMG_3185.JPG',
        alt: 'Seyahat 2',
        height: 'short',
        exif: {
            title: 'Yolculuk Anısı',
            location: 'Balkanlar',
            date: 'Temmuz 2025',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/3200 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 100'
        }
    },
    {
        src: '/assets/sanat/IMG_6588.jpg',
        alt: 'Ohri',
        height: 'tall',
        exif: {
            title: 'Ohri Gölü',
            location: 'Ohri, Kuzey Makedonya',
            date: 'Ekim 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Wide Camera f/1.78',
            aperture: 'f/1.7',
            shutter: '1/11600 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 100'
        }
    },
    {
        src: '/assets/sanat/IMG_7112.jpg',
        alt: 'Manzara',
        height: 'medium',
        exif: {
            title: 'Türkiye Manzarası',
            location: 'Türkiye',
            date: 'Ocak 2026',
            camera: 'iPhone 17 Pro Max',
            lens: 'Apple Telephoto Camera',
            aperture: 'f/2.8',
            shutter: '1/640 s',
            focalLength: '120 mm (Eşdeğer)',
            iso: 'ISO 25'
        }
    },
    {
        src: '/assets/sanat/IMG_7148.jpg',
        alt: 'Kotor 2',
        height: 'tall',
        exif: {
            title: 'Kotor Surları',
            location: 'Kotor, Karadağ',
            date: 'Ekim 2024',
            camera: 'iPhone 15 Pro Max',
            lens: 'Apple Telephoto Camera f/2.8',
            aperture: 'f/2.8',
            shutter: '1/900 s',
            focalLength: '120 mm (Eşdeğer)',
            iso: 'ISO 50'
        }
    },
    {
        src: '/assets/sanat/IMG_0910.jpg',
        alt: 'İsviçre',
        height: 'medium',
        exif: {
            title: 'İsviçre Doğası',
            location: 'Luzern, İsviçre',
            date: 'Mart 2026',
            camera: 'iPhone 17 Pro Max',
            lens: 'Apple Ultra Wide Camera f/2.2',
            aperture: 'f/2.2',
            shutter: '1/2270 s',
            focalLength: '13 mm (Eşdeğer)',
            iso: 'ISO 20'
        }
    },
    {
        src: '/assets/sanat/IMG_8401.jpg',
        alt: 'Almanya',
        height: 'tall',
        exif: {
            title: 'Köln Manzarası',
            location: 'Köln, Almanya',
            date: 'Şubat 2026',
            camera: 'iPhone 17 Pro Max',
            lens: 'Apple Wide Camera',
            aperture: 'f/1.7',
            shutter: '1/11360 s',
            focalLength: '24 mm (Eşdeğer)',
            iso: 'ISO 64'
        }
    }
]

const heightClasses = {
    short: 'h-48',
    medium: 'h-64',
    tall: 'h-80'
}


// EXIF Overlay Component
function ExifOverlay({ exif, isLightbox = false }) {
    const isPhone = exif.camera.toLowerCase().includes('iphone');

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

                <div className="flex items-center gap-2">
                    <ApertureIcon size={12} />
                    <span>{exif.aperture}</span>
                </div>

                <div className="flex items-center gap-2">
                    <TimerIcon size={12} />
                    <span>{exif.shutter}</span>
                </div>

                <div className="flex items-center gap-2">
                    <FocusIcon size={12} />
                    <span>{exif.focalLength} | {exif.iso}</span>
                </div>
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

    const sortedImages = useMemo(() => {
        const monthMap = {
            'Ocak': 1, 'Şubat': 2, 'Mart': 3, 'Nisan': 4, 'Mayıs': 5, 'Haziran': 6,
            'Temmuz': 7, 'Ağustos': 8, 'Eylül': 9, 'Ekim': 10, 'Kasım': 11, 'Aralık': 12
        }

        return [...images].sort((a, b) => {
            if (a.exif.date === 'Bilinmiyor') return 1
            if (b.exif.date === 'Bilinmiyor') return -1

            const [monthAStr, yearAStr] = a.exif.date.split(' ')
            const [monthBStr, yearBStr] = b.exif.date.split(' ')
            
            const dateA = new Date(parseInt(yearAStr), (monthMap[monthAStr] || 1) - 1).getTime()
            const dateB = new Date(parseInt(yearBStr), (monthMap[monthBStr] || 1) - 1).getTime()
            
            return dateB - dateA
        })
    }, [])

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
