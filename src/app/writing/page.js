import { FloatingHeader } from '@/components/floating-header'
import { ScrollArea } from '@/components/scroll-area'
import { WritingListLayout } from '@/components/writing/writing-list-layout'
import { getSortedYazilar, YAZILAR_META } from '@/lib/yazilar-data'

export const metadata = {
    title: YAZILAR_META.title
}

export default function Writing() {
    const sortedPosts = getSortedYazilar()

    return (
        <ScrollArea className="lg:hidden">
            <FloatingHeader title={YAZILAR_META.title} />
            <WritingListLayout list={sortedPosts} isMobile />
        </ScrollArea>
    )
}
