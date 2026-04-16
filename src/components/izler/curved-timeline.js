'use client'

import { MapPin } from 'lucide-react'

export function CurvedTimeline({ items = [], activeId }) {
    return (
        <div className="relative w-full py-8 px-4">
            {/* Ana çizgi */}
            <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-600 dark:via-neutral-700" />

            <div className="relative flex flex-col gap-10 mt-2">
                {items.map((item) => {
                    const isActive = item.id === activeId
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="relative flex items-start gap-4 group cursor-pointer no-underline"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }}
                        >
                            {/* Nokta göstergesi */}
                            <div className={`relative z-10 mt-1 flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-500
                                ${isActive
                                    ? 'border-blue-500 bg-blue-500 shadow-lg shadow-blue-500/30 scale-125'
                                    : 'border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-900 group-hover:border-blue-300'
                                }`}
                            >
                                {isActive && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                )}
                            </div>

                            {/* İçerik */}
                            <div className={`flex flex-col transition-all duration-300 ${isActive ? 'translate-x-1' : ''}`}>
                                <div className="flex items-center gap-2">
                                    <span className="text-base">{item.flag}</span>
                                    <span className={`text-sm font-semibold transition-colors duration-300
                                        ${isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300'}`}>
                                        {item.city}
                                    </span>
                                </div>
                                <div className={`flex items-center gap-1 mt-0.5 transition-colors duration-300
                                    ${isActive ? 'text-blue-500' : 'text-neutral-400 dark:text-neutral-500'}`}>
                                    <span className="text-xs">{item.dateStr}</span>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>

            {/* Alt fade */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-[#111] to-transparent pointer-events-none" />
        </div>
    )
}
