'use client'

import { useRef } from 'react'

export function ImageSlider({ images }) {
  const scrollRef = useRef(null)

  const scrollToImage = (index) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const items = container.children
    if (items[index]) {
      items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  return (
    <div 
      ref={scrollRef}
      className="mt-2 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {images.map((imgSrc, idx) => (
        <div 
          key={idx}
          onClick={() => scrollToImage(idx)}
          className="snap-center shrink-0 w-[85%] sm:w-[60%] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <img src={imgSrc} alt={`Görsel ${idx + 1}`} className="h-64 sm:h-80 w-full object-cover" />
        </div>
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  )
}
