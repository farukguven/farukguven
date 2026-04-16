'use client'

import { useEffect, useRef, useState, useCallback, useMemo, createRef } from 'react'
import dynamic from 'next/dynamic'
import { FloatingHeader } from '@/components/floating-header'
import { ScrollArea } from '@/components/scroll-area'
import { TIMELINE_GEZILER, TRAVEL_GUIDE_META } from '@/lib/izler-data'
import { TravelLocationSection } from '@/components/izler/travel-location-section'
import { TravelGuideFilters } from '@/components/izler/travel-guide-filters'
import { Map, List } from 'lucide-react'

// Dynamic import for the map to avoid SSR issues with Leaflet
const TravelGuideMap = dynamic(
  () => import('@/components/izler/travel-map').then((mod) => ({ default: mod.TravelGuideMap })),
  { ssr: false, loading: () => <div className="h-full w-full animate-pulse bg-gray-50" /> }
)

export default function Izler() {
  const [activeId, setActiveId] = useState(TIMELINE_GEZILER[0]?.id)
  const [activeFilter, setActiveFilter] = useState('all')
  const [showRoute, setShowRoute] = useState(false)
  const [mobileView, setMobileView] = useState('guide') // 'map' | 'guide'
  const contentRef = useRef(null)
  const isScrollingFromClick = useRef(false)

  const sectionRefs = useRef(
    TIMELINE_GEZILER.reduce((acc, item) => {
      acc[item.id] = createRef()
      return acc
    }, {})
  )

  // Filter locations
  const filteredLocations = useMemo(() => {
    if (activeFilter === 'featured') {
      return TIMELINE_GEZILER.filter((l) => l.featured)
    }
    return TIMELINE_GEZILER
  }, [activeFilter])

  // Intersection observer for scroll-based active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      if (isScrollingFromClick.current) return
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    filteredLocations.forEach((item) => {
      const ref = sectionRefs.current[item.id]
      if (ref?.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      filteredLocations.forEach((item) => {
        const ref = sectionRefs.current[item.id]
        if (ref?.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [filteredLocations])

  // Scroll to location (from map click or quick jump)
  const scrollToLocation = useCallback((id) => {
    setActiveId(id)
    isScrollingFromClick.current = true

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Reset after scroll completes
      setTimeout(() => {
        isScrollingFromClick.current = false
      }, 1200)
    }

    // On mobile, switch to guide view when marker clicked
    setMobileView('guide')
  }, [])

  const handleMarkerClick = useCallback((id) => {
    scrollToLocation(id)
  }, [scrollToLocation])

  return (
    <ScrollArea className="flex flex-col relative w-full h-full overflow-x-hidden">
      {/* Mobile header */}
      <FloatingHeader scrollTitle="İzler" />

      {/* Page header (mobile) */}
      {mobileView === 'guide' && (
        <div className="px-4 pt-8 pb-2 sm:px-5 lg:hidden">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            {TRAVEL_GUIDE_META.title}
          </h1>
          <p className="mt-1 mb-0 text-sm text-gray-400">
            {TRAVEL_GUIDE_META.subtitle}
          </p>
        </div>
      )}

      {/* Mobile view toggle */}
      <div className="sticky top-12 z-20 flex items-center justify-between gap-2 overflow-hidden border-b border-gray-100 bg-white/95 backdrop-blur-sm px-3 py-2.5 sm:px-5 lg:hidden">
        <div className="flex shrink-0 items-center gap-1 rounded-lg bg-gray-50 p-0.5">
          <button
            onClick={() => setMobileView('guide')}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
              mobileView === 'guide'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <List size={12} />
            Rehber
          </button>
          <button
            onClick={() => setMobileView('map')}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
              mobileView === 'map'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Map size={12} />
            Harita
          </button>
        </div>
        <TravelGuideFilters
          locations={TIMELINE_GEZILER}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onLocationJump={scrollToLocation}
          showRoute={showRoute}
          onToggleRoute={() => setShowRoute((s) => !s)}
        />
      </div>

      {/* Mobile map */}
      {mobileView === 'map' && (
        <div className="h-[calc(100dvh-180px)] w-full lg:hidden">
          <TravelGuideMap
            locations={filteredLocations}
            activeId={activeId}
            onMarkerClick={handleMarkerClick}
            showRoute={showRoute}
          />
        </div>
      )}

      {/* Desktop split layout */}
      <div className="flex w-full min-w-0 overflow-x-clip">
        {/* Left: Sticky map (desktop) */}
        <div className="hidden lg:block lg:w-[42%] xl:w-[42%]">
          <div className="sticky top-0 h-dvh">
            <TravelGuideMap
              locations={filteredLocations}
              activeId={activeId}
              onMarkerClick={handleMarkerClick}
              showRoute={showRoute}
            />
          </div>
        </div>

        {/* Right: Scrollable content */}
        <div
          ref={contentRef}
          className={`w-full min-w-0 lg:w-[58%] xl:w-[58%] ${mobileView === 'map' ? 'hidden lg:block' : ''}`}
        >
          {/* Desktop header + filters */}
          <div className="hidden lg:block sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="px-8 xl:px-12 pt-6 pb-4">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-0">
                    {TRAVEL_GUIDE_META.title}
                  </h1>
                  <p className="mt-0.5 mb-0 text-sm text-gray-400">
                    {TRAVEL_GUIDE_META.subtitle}
                  </p>
                </div>
                <span className="text-xs text-gray-300 tabular-nums">
                  {filteredLocations.length} konum
                </span>
              </div>
              <TravelGuideFilters
                locations={TIMELINE_GEZILER}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                onLocationJump={scrollToLocation}
                showRoute={showRoute}
                onToggleRoute={() => setShowRoute((s) => !s)}
              />
            </div>
          </div>

          {/* Location sections */}
          <div className="px-4 pt-8 pb-20 sm:px-5 lg:px-8 xl:px-12">
            {filteredLocations.map((location) => (
              <TravelLocationSection
                key={location.id}
                ref={sectionRefs.current[location.id]}
                location={location}
                isActive={activeId === location.id}
              />
            ))}

            {filteredLocations.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-sm text-gray-400">Bu filtreyle eşleşen konum bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
