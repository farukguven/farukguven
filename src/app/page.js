import Link from 'next/link'

import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { WritingListLayout } from '@/components/writing/writing-list-layout'
import { getSortedYazilar } from '@/lib/yazilar-data'

export default function Home() {
  const sortedPosts = getSortedYazilar()

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Faruk Güven" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Ana Sayfa" className="lg:hidden" />

          <p>Selamlar, Ben Faruk 👋</p>
          <p>
            Animasyon setinden sunucu odasına geçtim. Şimdi sistemleri yönetir, kendi projelerimi geliştiririm. Geri kalan zamanda dünyayı gezer, deklanşöre basarım. 🧑🏻‍💻
          </p>

          <Link href="/writing" className="inline-block">
            <h2 className="mt-10 mb-2 hover:underline">Yazılar</h2>
          </Link>
          <WritingListLayout list={sortedPosts} />
        </div>
      </div>
    </ScrollArea>
  )
}
