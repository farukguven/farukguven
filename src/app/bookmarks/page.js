import Link from 'next/link'

import { FloatingHeader } from '@/components/floating-header'
import { ScrollArea } from '@/components/scroll-area'
import { getKategoriler, YER_IMLERI_META } from '@/lib/yer-imleri-data'

export const metadata = {
    title: YER_IMLERI_META.title
}

export default function Bookmarks() {
    const kategoriler = getKategoriler()

    return (
        <ScrollArea className="lg:hidden">
            <FloatingHeader title={YER_IMLERI_META.title} />
            {kategoriler.map((kategori) => (
                <Link
                    key={kategori.slug}
                    href={`/bookmarks/${kategori.slug}`}
                    className="flex flex-col gap-1 border-b px-4 py-3 text-sm hover:bg-gray-100"
                >
                    <span className="font-medium">{kategori.title}</span>
                    <span className="text-slate-500">{kategori.count} yer imi</span>
                </Link>
            ))}
        </ScrollArea>
    )
}
