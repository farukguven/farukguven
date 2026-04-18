import { ListItem } from '@/components/list-item'
import { SideMenu } from '@/components/side-menu'
import { getKategoriler, YER_IMLERI_META } from '@/lib/yer-imleri-data'

export default function BookmarksLayout({ children }) {
    const kategoriler = getKategoriler()

    return (
        <div className="flex w-full">
            <SideMenu title={YER_IMLERI_META.title} isInner>
                <div className="flex flex-col gap-1 text-sm">
                    {kategoriler.map((kategori) => (
                        <ListItem
                            key={kategori.slug}
                            path={`/bookmarks/${kategori.slug}`}
                            title={kategori.title}
                            description={`${kategori.count} yer imi`}
                        />
                    ))}
                </div>
            </SideMenu>
            <div className="lg:bg-grid flex-1">{children}</div>
        </div>
    )
}
