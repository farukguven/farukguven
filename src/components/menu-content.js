import Link from 'next/link'

import { NavigationLink } from '@/components/navigation-link'
import { LINKS, GIRISIMLER } from '@/lib/constants'

export const MenuContent = () => (
  <div className="flex w-full flex-col text-sm">
    <div className="flex flex-col gap-4">
      <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
        <img
          src="/assets/me.avif"
          alt="Faruk Güven"
          width={40}
          height={40}
          loading="lazy"
          className="rounded-full border shadow-xs"
          // eslint-disable-next-line react/no-unknown-property
          nopin="nopin"
        />
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight">Faruk Güven</span>
          <span className="text-gray-600">Seyir Defteri</span>
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        {LINKS.map((link, linkIndex) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            disabled={link.disabled}
            shortcutNumber={linkIndex + 1}
          />
        ))}
      </div>

      {/* Girişimlerim Section */}
      {GIRISIMLER.length > 0 && (
        <div className="mt-2 border-t pt-4">
          <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Girişimlerim
          </h3>
          <div className="flex flex-col gap-1">
            {GIRISIMLER.map((link) => (
              <NavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-2 border-t pt-4">
        <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          İletişim
        </h3>
        <div className="flex flex-col gap-1">
          <a
            href="https://instagram.com/dfarukguven"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </div>
            <svg className="size-4 text-gray-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="mailto:dfg@farukguven.com"
            className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>dfg@farukguven.com</span>
            </div>
            <svg className="size-4 text-gray-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
)
