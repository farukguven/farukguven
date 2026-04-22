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
      className={`fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:text-gray-900 active:translate-y-0 md:bottom-8 md:right-8 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUpIcon size={18} className="transition-transform group-hover:-translate-y-0.5" />
    </button>
  )
}
