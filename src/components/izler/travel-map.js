'use client'

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// POI type → emoji mapping
const POI_ICONS = {
  cafe: '☕',
  restaurant: '🍽️',
  museum: '🏛️',
  park: '🌿',
  landmark: '📍',
  shop: '🛍️',
  viewpoint: '👁️',
}

// Premium minimal main marker SVG
function createMarkerIcon(isActive, isFeatured) {
  const size = isActive ? 34 : 22
  const color = isActive ? '#1a1a1a' : isFeatured ? '#6b7280' : '#c9cdd3'
  const ringColor = isActive ? '#1a1a1a' : 'transparent'
  const innerDot = isActive ? 4.5 : 2.5

  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="white" stroke="${ringColor}" stroke-width="${isActive ? 2 : 0}" opacity="${isActive ? 1 : 0.85}" />
      <circle cx="${size / 2}" cy="${size / 2}" r="${innerDot}" fill="${color}" />
      ${isFeatured && !isActive ? `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 4}" fill="none" stroke="${color}" stroke-width="0.4" stroke-dasharray="2 2" />` : ''}
    </svg>
  `

  return L.divIcon({
    html: svg,
    className: 'travel-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  })
}

// POI marker — small emoji bubble
function createPoiIcon(poi) {
  const emoji = poi.icon || POI_ICONS[poi.type] || '📍'
  const html = `<div class="travel-poi-marker">${emoji}</div>`

  return L.divIcon({
    html,
    className: 'travel-poi-icon',
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  })
}

// Main location tooltip
function createTooltipContent(location) {
  const hasImage = location.images && location.images.length > 0
  const thumbHtml = hasImage
    ? `<div style="width:100%;height:80px;border-radius:8px;overflow:hidden;margin-bottom:6px;">
         <img src="${location.images[0].src}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;" />
       </div>`
    : ''

  const poiCount = location.pois?.length || 0
  const poiHint = poiCount > 0
    ? `<div style="font-size:10px;color:#9ca3af;margin-top:4px;">📍 ${poiCount} öneri · tıkla ve keşfet</div>`
    : ''

  return `
    <div style="font-family:inherit;padding:0;width:${hasImage ? '160px' : 'auto'};min-width:110px;max-width:180px;word-wrap:break-word;overflow-wrap:break-word;">
      ${thumbHtml}
      <div style="font-weight:600;font-size:13px;color:#111;margin-bottom:2px;word-wrap:break-word;">${location.flag} ${location.shortTitle || location.city}</div>
      <div style="font-size:11px;color:#6b7280;line-height:1.4;word-wrap:break-word;">${location.shortDescription || location.visitedDate || ''}</div>
      ${poiHint}
    </div>
  `
}

// POI popup — clean minimal card
function createPoiPopupContent(poi) {
  const emoji = poi.icon || POI_ICONS[poi.type] || '📍'
  const typeLabel = {
    cafe: 'Kafe', restaurant: 'Restoran', museum: 'Müze',
    park: 'Park', landmark: 'Görülecek Yer', shop: 'Alışveriş', viewpoint: 'Manzara'
  }[poi.type] || poi.type

  return `
    <div style="font-family:inherit;padding:2px 0;min-width:140px;max-width:220px;word-wrap:break-word;overflow-wrap:break-word;">
      <div style="font-weight:600;font-size:13px;color:#111;margin-bottom:3px;word-wrap:break-word;">${emoji} ${poi.name}</div>
      <div style="font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">${typeLabel}</div>
      ${poi.note ? `<div style="font-size:12px;color:#4b5563;line-height:1.5;word-wrap:break-word;">${poi.note}</div>` : ''}
    </div>
  `
}

export function TravelGuideMap({ locations = [], activeId, onMarkerClick, showRoute = false }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef({})
  const poiMarkersRef = useRef([])
  const routeLineRef = useRef(null)
  const [zoomedLocationId, setZoomedLocationId] = useState(null)

  // Initialize map
  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return

    const map = L.map(mapRef.current, {
      center: [45, 10],
      zoom: 4,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      touchZoom: true,
      dragging: true
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd',
      className: 'travel-map-tiles'
    }).addTo(map)

    L.control.zoom({ position: 'bottomright' }).addTo(map)

    L.control
      .attribution({ position: 'bottomleft', prefix: false })
      .addAttribution('© <a href="https://carto.com" target="_blank" style="color:#9ca3af">CARTO</a>')
      .addTo(map)

    // When user zooms out manually, clear POIs
    map.on('zoomend', () => {
      if (map.getZoom() < 10) {
        setZoomedLocationId(null)
      }
    })

    mapInstanceRef.current = map

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // Create main location markers
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map) return

    Object.values(markersRef.current).forEach((m) => m.remove())
    markersRef.current = {}

    locations.forEach((loc) => {
      const lat = Number(loc.coordinates?.lat)
      const lng = Number(loc.coordinates?.lng)
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return
      const isActive = loc.id === activeId
      const marker = L.marker([lat, lng], {
        icon: createMarkerIcon(isActive, loc.featured),
        zIndexOffset: isActive ? 1000 : loc.featured ? 500 : 0
      })

      marker.bindTooltip(createTooltipContent(loc), {
        direction: 'top',
        offset: [0, -18],
        className: 'travel-tooltip',
        opacity: 1
      })

      marker.on('click', () => {
        // Zoom into location and show POIs
        const hasPois = loc.pois && loc.pois.length > 0
        const targetZoom = hasPois ? 14 : 12

        try {
          map.flyTo([lat, lng], targetZoom, {
            duration: 1.2,
            easeLinearity: 0.25
          })
        } catch (e) {}

        setZoomedLocationId(loc.id)
        onMarkerClick?.(loc.id)
      })

      marker.addTo(map)
      markersRef.current[loc.id] = marker
    })
  }, [locations, activeId, onMarkerClick])

  // Render POI markers when zoomed into a location
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map) return

    // Clear existing POI markers
    poiMarkersRef.current.forEach((m) => m.remove())
    poiMarkersRef.current = []

    if (!zoomedLocationId) return

    const loc = locations.find((l) => l.id === zoomedLocationId)
    if (!loc?.pois?.length) return

    loc.pois.forEach((poi) => {
      const lat = Number(poi.coordinates?.lat)
      const lng = Number(poi.coordinates?.lng)
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return

      const marker = L.marker([lat, lng], {
        icon: createPoiIcon(poi),
        zIndexOffset: 100
      })

      marker.bindPopup(createPoiPopupContent(poi), {
        className: 'travel-poi-popup',
        closeButton: false,
        offset: [0, -10],
        maxWidth: 240,
        minWidth: 160
      })

      marker.addTo(map)
      poiMarkersRef.current.push(marker)
    })
  }, [zoomedLocationId, locations])

  // Route line
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map) return

    if (routeLineRef.current) {
      routeLineRef.current.remove()
      routeLineRef.current = null
    }

    if (showRoute && locations.length > 1) {
      const coords = [...locations]
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .filter((loc) => Number.isFinite(loc.coordinates?.lat) && Number.isFinite(loc.coordinates?.lng))
        .map((loc) => [loc.coordinates.lat, loc.coordinates.lng])

      routeLineRef.current = L.polyline(coords, {
        color: '#d4d4d4',
        weight: 1,
        dashArray: '4 6',
        opacity: 0.5
      }).addTo(map)
    }
  }, [locations, showRoute])

  // Pan to active location (from scroll sync — interactive city-level zoom)
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map || !activeId) return

    const loc = locations.find((l) => l.id === activeId)
    if (!loc) return

    const lat = loc.coordinates?.lat
    const lng = loc.coordinates?.lng
    if (typeof lat !== 'number' || typeof lng !== 'number') return

    // When activeId changes from scrolling, clear POI zoom state so map follows scroll
    if (zoomedLocationId && zoomedLocationId !== activeId) {
      setZoomedLocationId(null)
    }

    try {
      map.flyTo([lat, lng], 13, {
        duration: 1.2,
        easeLinearity: 0.25
      })
    } catch (e) {}
  }, [activeId, locations])

  return (
    <>
      <style jsx global>{`
        .travel-map-tiles {
          filter: brightness(1.06) saturate(0.15) contrast(0.9);
        }
        .travel-marker {
          background: none !important;
          border: none !important;
          transition: transform 0.3s ease;
        }
        .travel-poi-icon {
          background: none !important;
          border: none !important;
        }
        .travel-poi-marker {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .travel-poi-marker:hover {
          transform: scale(1.15);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
        }
        .travel-tooltip {
          background: white !important;
          border: 1px solid #f0f0f0 !important;
          border-radius: 12px !important;
          padding: 8px !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05) !important;
          font-family: inherit !important;
          max-width: min(200px, calc(100vw - 60px)) !important;
          white-space: normal !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        .travel-tooltip::before {
          border-top-color: #f0f0f0 !important;
        }
        .travel-tooltip img {
          border-radius: 8px !important;
          border: none !important;
        }
        .travel-poi-popup .leaflet-popup-content-wrapper {
          background: white !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
          border: 1px solid #f0f0f0 !important;
          padding: 0 !important;
        }
        .travel-poi-popup .leaflet-popup-content {
          margin: 12px 14px !important;
          font-family: inherit !important;
          white-space: normal !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        .travel-poi-popup .leaflet-popup-tip {
          background: white !important;
          border: 1px solid #f0f0f0 !important;
          box-shadow: none !important;
        }
        .leaflet-control-zoom {
          border: 1px solid #f0f0f0 !important;
          border-radius: 10px !important;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03) !important;
        }
        .leaflet-control-zoom a {
          color: #b0b0b0 !important;
          border-color: #f5f5f5 !important;
          width: 30px !important;
          height: 30px !important;
          line-height: 30px !important;
          font-size: 13px !important;
        }
        .leaflet-control-zoom a:hover {
          color: #666 !important;
          background: #fafafa !important;
        }
        .leaflet-container {
          font-family: inherit !important;
        }
        .leaflet-bottom.leaflet-left {
          font-size: 10px;
        }
        .leaflet-bottom.leaflet-left a {
          color: #9ca3af !important;
          font-size: 10px !important;
        }
      `}</style>
      <div className="relative h-full w-full">
        <div ref={mapRef} className="h-full w-full" />

        {/* Back to overview button when zoomed in */}
        {zoomedLocationId && (
          <button
            onClick={() => {
              setZoomedLocationId(null)
              const map = mapInstanceRef.current
              if (map) {
                try {
                  map.flyTo([45, 10], 4, { duration: 1.2 })
                } catch (e) {}
              }
            }}
            className="absolute top-3 left-3 z-[1000] flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-gray-500 shadow-sm backdrop-blur-sm border border-gray-100 hover:text-gray-800 hover:shadow-md transition-all duration-200"
          >
            ← Genel Görünüm
          </button>
        )}
      </div>
    </>
  )
}
