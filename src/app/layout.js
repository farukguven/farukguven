import '@/globals.css'

import { Inter } from 'next/font/google'

import { sharedMetadata } from '@/app/shared-metadata'
import { MenuContent } from '@/components/menu-content'
import { SideMenu } from '@/components/side-menu'
import { TailwindIndicator } from '@/components/tailwind-indicator'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const fetchCache = 'default-cache'

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      data-theme="light"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <main vaul-drawer-wrapper="" className="min-h-screen bg-white">
          <div className="lg:flex">
            <SideMenu className="relative hidden lg:flex">
              <MenuContent />
            </SideMenu>
            <div className="flex min-w-0 flex-1 overflow-x-clip">{children}</div>
          </div>
        </main>
        <TailwindIndicator />
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://farukguven.com'),
  robots: {
    index: true,
    follow: true
  },
  title: {
    default: sharedMetadata.title,
    template: `%s — ${sharedMetadata.title}`
  },
  description: sharedMetadata.description,
  keywords: ['Faruk Güven', 'farukguven', 'farukguven.com'],
  openGraph: {
    title: {
      default: sharedMetadata.title,
      template: `%s — ${sharedMetadata.title}`
    },
    description: sharedMetadata.description,
    alt: sharedMetadata.title,
    type: 'website',
    url: 'https://farukguven.com',
    siteName: sharedMetadata.title,
    locale: 'tr_TR'
  },
  alternates: {
    canonical: '/'
  },
  twitter: {
    card: 'summary_large_image'
  },
  other: {
    pinterest: 'nopin'
  }
}

export const viewport = {
  themeColor: 'white',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1
}
