import Link from 'next/link'

import { cn } from '@/lib/utils'

const TR_MONTHS = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']

function formatDate(dateStr) {
    const d = new Date(dateStr)
    return `${d.getDate()} ${TR_MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

export const WritingLink = ({ post, isMobile, isActive }) => {
    const formattedDate = formatDate(post.date)

    return (
        <Link
            href={`/writing/${post.slug}`}
            className={cn(
                'flex flex-col gap-1 transition-colors duration-300',
                !isMobile && isActive ? 'bg-black text-white' : 'hover:bg-gray-200',
                isMobile ? 'border-b px-4 py-3 text-sm hover:bg-gray-100' : 'rounded-lg p-2'
            )}
        >
            <span className="font-medium">{post.title}</span>
            <span
                className={cn(
                    'transition-colors duration-300',
                    isActive ? 'text-slate-400' : 'text-slate-500'
                )}
            >
                <time dateTime={post.date}>{formattedDate}</time>
            </span>
        </Link>
    )
}
