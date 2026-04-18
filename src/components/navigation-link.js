'use client'

import { ArrowUpRightIcon, AtSignIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo, useMemo } from 'react'

import { cn } from '@/lib/utils'

export const NavigationLink = memo(({ href, label, icon, shortcutNumber, disabled }) => {
  const pathname = usePathname()
  const iconCmp = useMemo(() => icon ?? <AtSignIcon size={16} />, [icon])

  // Pasif buton — tıklanamaz, soluk görünür
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        title="Yakında"
        className="flex cursor-not-allowed items-center justify-between rounded-lg p-2 opacity-40"
      >
        <span className="flex items-center gap-2">
          {iconCmp}
          <span className="font-medium">{label}</span>
        </span>
        <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">
          Yakında
        </span>
      </span>
    )
  }

  const isInternal = href.startsWith('/')
  if (!isInternal) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200"
      >
        <span className="inline-flex items-center gap-2 font-medium">
          {iconCmp} {label}
        </span>
        <ArrowUpRightIcon size={16} />
      </a>
    )
  }

  let isActive = false
  if (pathname?.length > 0) {
    const splittedPathname = pathname.split('/')
    const currentPathname = splittedPathname[1] ?? ''
    isActive = currentPathname === href.split('/')[1]
  }

  return (
    <Link
      key={href}
      href={href}
      className={cn(
        'group flex items-center justify-between rounded-lg p-2',
        isActive ? 'bg-black text-white' : 'hover:bg-gray-200'
      )}
    >
      <span className="flex items-center gap-2">
        {iconCmp}
        <span className={cn('font-medium', isActive && 'text-white')}>{label}</span>
      </span>
    </Link>
  )
})
NavigationLink.displayName = 'NavigationLink'
