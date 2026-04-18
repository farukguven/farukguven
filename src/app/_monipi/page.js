import { ArrowUpRightIcon } from 'lucide-react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'

export const metadata = {
    title: 'Monipi',
    description: 'Kişisel bir girişim: Monipi — IoT ve sensör ekosistemi.'
}

// Timeline aşamaları — zamanla genişletilebilir
const ASAMALAR = [
    {
        donem: 'Fikir',
        items: [
            {
                title: 'Monipi Nasıl Doğdu?',
                description:
                    'Uzaktan izleme, bildirim ve otomasyon ihtiyacından doğan kendi ekosistemim. Önce küçük bir sıcaklık sensörü deneyimiyle başladı, sonrasında cihaz yönetimi, kullanıcı, şirket yapısı ile büyüdü.',
                status: 'done'
            }
        ]
    },
    {
        donem: 'Geliştirme',
        items: [
            {
                title: 'Mikroservis Mimarisi',
                description:
                    'Device, Hub, OTA, Image, Activity, Company, Mbox, Postgres gibi bağımsız servisler. Docker ile konteynerize edildi, OrbStack üzerinde Mac Mini\'de çalışıyor.',
                status: 'doing'
            },
            {
                title: 'Web Panel',
                description:
                    'Next.js tabanlı yönetim paneli. Cihaz listeleme, canlı veri izleme, firmware güncelleme ve raporlama ekranları.',
                status: 'doing'
            }
        ]
    },
    {
        donem: 'Yol Haritası',
        items: [
            {
                title: 'Mobil Uygulama',
                description:
                    'Sahada hızlı erişim için iOS/Android uygulaması. Bildirim yönetimi, QR ile cihaz ekleme, anlık grafikler.',
                status: 'todo'
            },
            {
                title: 'Pazaryeri',
                description:
                    'Monipi ekosistemine eklenebilecek sertifikalı cihazlar ve sensörler için küçük bir pazaryeri.',
                status: 'todo'
            }
        ]
    }
]

const STATUS_DOT = {
    done: 'bg-emerald-500',
    doing: 'bg-amber-500',
    todo: 'bg-gray-300'
}

const STATUS_LABEL = {
    done: 'Tamamlandı',
    doing: 'Sürüyor',
    todo: 'Planlandı'
}

export default function Monipi() {
    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle="Monipi" />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title="Monipi" />

                    <div className="flex flex-col gap-12">
                        {/* Proje Özeti */}
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-600">
                                Monipi — bağlı cihazları, sensörleri ve IoT ekosistemlerini tek bir panelden izlemeye ve yönetmeye yarayan kişisel girişimim. Amaç: küçük bir kurulumdan kurumsal ölçeğe kadar esneyebilen, sade bir yönetim deneyimi sunmak.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 text-xs">
                                <span className="rounded-md bg-gray-50 px-2 py-1 font-medium text-gray-600">
                                    IoT
                                </span>
                                <span className="rounded-md bg-gray-50 px-2 py-1 font-medium text-gray-600">
                                    Mikroservisler
                                </span>
                                <span className="rounded-md bg-gray-50 px-2 py-1 font-medium text-gray-600">
                                    Docker
                                </span>
                                <span className="rounded-md bg-gray-50 px-2 py-1 font-medium text-gray-600">
                                    Next.js
                                </span>
                                <span className="rounded-md bg-gray-50 px-2 py-1 font-medium text-gray-600">
                                    Go
                                </span>
                                <span className="rounded-md bg-gray-50 px-2 py-1 font-medium text-gray-600">
                                    PostgreSQL
                                </span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="flex flex-col items-stretch gap-12">
                            {ASAMALAR.map((asama) => (
                                <div
                                    key={asama.donem}
                                    className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
                                >
                                    <h2 className="mt-1 w-28 text-xl font-bold text-gray-900">
                                        {asama.donem}
                                    </h2>
                                    <section className="w-full min-w-0 flex-1">
                                        {asama.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="relative flex pb-10 last:pb-0"
                                            >
                                                <div className="absolute inset-0 flex w-5 justify-center">
                                                    <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200" />
                                                </div>
                                                <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                                                    <div
                                                        className={`size-2 rounded-full ${STATUS_DOT[item.status]}`}
                                                    />
                                                </div>
                                                <div className="grow pl-4 lg:pl-8">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex flex-wrap items-center gap-3">
                                                            <h3 className="text-lg font-bold text-gray-900">
                                                                {item.title}
                                                            </h3>
                                                            <span className="rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-500 border border-gray-100">
                                                                {STATUS_LABEL[item.status]}
                                                            </span>
                                                        </div>
                                                        <p className="leading-relaxed text-gray-600">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                </div>
                            ))}
                        </div>

                        {/* Alt not */}
                        <div className="rounded-xl bg-gray-50 p-6">
                            <p className="text-sm text-gray-600">
                                Monipi hala aktif geliştirdiğim bir girişim. Geliştirme notlarını ve teknik kararlarımı zaman zaman{' '}
                                <a
                                    href="/writing"
                                    className="font-medium text-gray-900 hover:underline"
                                >
                                    Yazılar
                                </a>{' '}
                                sayfasında paylaşıyorum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}
