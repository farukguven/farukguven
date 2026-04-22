'use client'

import { useEffect, useState } from 'react'
import { ArrowUpIcon } from 'lucide-react'

import { SCROLL_AREA_ID } from '@/lib/constants'

export function ScrollToTop({ threshold = 400 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById(SCROLL_AREA_ID)
    if (!el) return

    const onScroll = () => setVisible(el.scrollTop > threshold)
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [threshold])

  const handleClick = () => {
    const el = document.getElementById(SCROLL_AREA_ID)
    if (!el) return
    el.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Sayfanın en üstüne çık"
      style={{
        WebkitBackdropFilter: 'blur(6px) saturate(200%) contrast(118%) brightness(108%)',
        backdropFilter: 'blur(6px) saturate(200%) contrast(118%) brightness(108%)',
        backgroundImage:
          'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.02) 70%)',
        boxShadow:
          '0 10px 28px -6px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.10), inset 0 1.5px 0 0 rgba(255,255,255,0.85), inset 0 -1.5px 2px 0 rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.25)'
      }}
      className={`fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-white/50 bg-white/10 text-gray-800 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/15 hover:text-gray-900 active:scale-100 active:translate-y-0 md:bottom-8 md:right-8 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUpIcon size={18} className="transition-transform group-hover:-translate-y-0.5" />
    </button>
  )
}
