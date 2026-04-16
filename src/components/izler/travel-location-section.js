'use client'

import { forwardRef, useState } from 'react'
import { MapPin, Calendar, Star, Heart } from 'lucide-react'
import { TravelGallery } from './travel-gallery'

export const TravelLocationSection = forwardRef(function TravelLocationSection(
  { location, isActive, onImageClick },
  ref
) {
  return (
    <section
      ref={ref}
      id={location.id}
      className={`scroll-mt-6 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}
    >
      {/* Day divider */}
      {location.day && (
        <div className="mb-5 flex items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-300">
            Gün {location.day}
          </span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
      )}

      {/* Header */}
      <div className="mb-5">
        <div className="flex items-start gap-2 sm:items-center sm:gap-2.5">
          <span className="text-lg shrink-0 mt-0.5 sm:mt-0">{location.flag}</span>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl md:text-[22px] min-w-0 break-words">
            {location.title}
          </h2>
          {location.featured && (
            <Heart size={13} className="fill-gray-800 text-gray-800 shrink-0 mt-1 sm:mt-0" />
          )}
        </div>

        {/* Meta row */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-400 max-w-full">
          {location.city && (
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-gray-300" />
              {location.city}, {location.country}
            </span>
          )}
          {location.visitedDate && (
            <span className="flex items-center gap-1">
              <Calendar size={11} className="text-gray-300" />
              {location.visitedDate}
            </span>
          )}
          {location.tags && location.tags.length > 0 && (
            <div className="flex items-center gap-1.5">
              {location.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-400 border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Gallery */}
      <TravelGallery
        images={location.images}
        locationTitle={location.title}
        flag={location.flag}
        country={location.country}
      />

      {/* Description */}
      <p className="mt-5 mb-0 text-[14px] sm:text-[15px] leading-[1.75] text-gray-600 break-words">
        {location.description}
      </p>

      {/* Rating */}
      {location.rating && (
        <div className="mt-3 flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < location.rating ? 'fill-gray-700 text-gray-700' : 'text-gray-200'}
            />
          ))}
        </div>
      )}

      {/* Separator */}
      <div className="mt-10 mb-10 border-b border-gray-100" />
    </section>
  )
})
