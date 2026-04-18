import { SideMenu } from '@/components/side-menu'
import { WritingListLayout } from '@/components/writing/writing-list-layout'
import { getSortedYazilar, YAZILAR_META } from '@/lib/yazilar-data'

export default function WritingLayout({ children }) {
    const sortedPosts = getSortedYazilar()

    return (
        <>
            <SideMenu title={YAZILAR_META.title} isInner>
                <WritingListLayout list={sortedPosts} />
            </SideMenu>
            <div className="lg:bg-dots flex-1">{children}</div>
        </>
    )
}
