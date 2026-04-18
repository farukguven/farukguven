import Markdown from 'markdown-to-jsx'
import { notFound } from 'next/navigation'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { YAZILAR, getYazi } from '@/lib/yazilar-data'

export function generateStaticParams() {
    return YAZILAR.map((y) => ({ slug: y.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const yazi = getYazi(slug)
    if (!yazi) return {}
    return {
        title: yazi.title,
        description: yazi.summary || yazi.title,
        openGraph: {
            title: yazi.title,
            description: yazi.summary || yazi.title,
            type: 'article',
            publishedTime: yazi.date
        }
    }
}

const TR_MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

function formatDate(dateStr) {
    const d = new Date(dateStr)
    return `${d.getDate()} ${TR_MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

export default async function WritingPost({ params }) {
    const { slug } = await params
    const yazi = getYazi(slug)
    if (!yazi) notFound()

    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle={yazi.title} goBackLink="/writing" />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title={yazi.title} />
                    <p className="mb-8 text-sm text-gray-400">{formatDate(yazi.date)}</p>
                    <article className="prose prose-gray max-w-none">
                        <Markdown
                            options={{
                                overrides: {
                                    h2: {
                                        props: {
                                            className: 'mt-10 mb-4 text-xl font-bold text-gray-900'
                                        }
                                    },
                                    h3: {
                                        props: {
                                            className: 'mt-8 mb-3 text-lg font-semibold text-gray-900'
                                        }
                                    },
                                    p: {
                                        props: {
                                            className: 'mb-4 leading-relaxed text-gray-700'
                                        }
                                    },
                                    ul: {
                                        props: {
                                            className: 'mb-4 list-disc pl-6 flex flex-col gap-1 text-gray-700'
                                        }
                                    },
                                    a: {
                                        props: {
                                            className: 'text-blue-600 hover:underline'
                                        }
                                    },
                                    code: {
                                        props: {
                                            className: 'rounded bg-gray-100 px-1.5 py-0.5 text-sm'
                                        }
                                    }
                                }
                            }}
                        >
                            {yazi.content}
                        </Markdown>
                    </article>
                </div>
            </div>
        </ScrollArea>
    )
}
