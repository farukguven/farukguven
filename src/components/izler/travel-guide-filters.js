'use client'

import { useState } from 'react'
import { Heart, MapIcon, Calendar, Globe } from 'lucide-react'

const FILTER_OPTIONS = [
  { key: 'all', label: 'Tümü', icon: null },
  { key: 'featured', label: 'Favoriler', icon: Heart },
]

export function TravelGuideFilters({
  locations = [],
  activeFilter,
  onFilterChange,
  onLocationJump,
  showRoute,
  onToggleRoute,
}) {
  const [jumpOpen, setJumpOpen] = useState(false)

  // Collect unique route groups for day grouping
  const routeGroups = [...new Set(locations.map((l) => l.routeGroup).filter(Boolean))]

  return (
    <div className="flex min-w-0 items-center gap-2 overflow-x-auto scrollbar-hide">
      {/* Filter pills */}
      {FILTER_OPTIONS.map((opt) => {
        const Icon = opt.icon
        const isActive = activeFilter === opt.key
        return (
          <button
            key={opt.key}
            onClick={() => onFilterChange(opt.key)}
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            }`}
          >
            {Icon && <Icon size={11} className={isActive ? 'fill-white' : ''} />}
            {opt.label}
          </button>
        )
      })}

      {/* Route toggle */}
      <button
        onClick={onToggleRoute}
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
          showRoute
            ? 'bg-gray-900 text-white'
            : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
        }`}
      >
        <MapIcon size={11} />
        Rota
      </button>

      {/* Separator */}
      <div className="h-4 w-px bg-gray-200 mx-1 shrink-0" />

      {/* Quick jump */}
      <div className="relative">
        <button
          onClick={() => setJumpOpen(!jumpOpen)}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
        >
          <Globe size={11} />
          Konumlar
        </button>

        {jumpOpen && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setJumpOpen(false)} />
            <div className="absolute right-0 top-full z-40 mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg shadow-gray-100/50 lg:left-0 lg:right-auto">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    onLocationJump(loc.id)
                    setJumpOpen(false)
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition-colors hover:bg-gray-50"
                >
                  <span className="text-base">{loc.flag}</span>
                  <span className="truncate font-medium">{loc.shortTitle || loc.city}</span>
                  {loc.featured && <Heart size={10} className="ml-auto fill-gray-400 text-gray-400 shrink-0" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
