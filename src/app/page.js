import Link from 'next/link'
import { Suspense } from 'react'

import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { ScrollArea } from '@/components/scroll-area'
import { Button } from '@/components/ui/button'
import { WritingList } from '@/components/writing-list'
import { getAllPosts } from '@/lib/contentful'
import { getItemsByYear, getSortedPosts } from '@/lib/utils'

async function fetchData() {
  const allPosts = await getAllPosts()
  const sortedPosts = getSortedPosts(allPosts)
  const items = getItemsByYear(sortedPosts)
  return { items }
}

export default async function Home() {
  const { items } = await fetchData()

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Faruk Güven" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <p>
            Selamlar, Ben Faruk 👋
          </p>
          <p>
            Animasyon setinden sunucu odasına geçtim. Şimdi sistemleri yönetir, kendi projelerimi geliştiririm. Geri kalan zamanda dünyayı gezer, deklanşöre basarım. 🧑🏻‍💻
          </p>
          <Button asChild variant="link" className="inline px-0">
            <Link href="/writing">
              <h2 className="mt-8 mb-4">Writing</h2>
            </Link>
          </Button>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} header="Writing" />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
