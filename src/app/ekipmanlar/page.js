'use client'

import { useState } from 'react'
import { MonitorIcon, LaptopIcon, KeyboardIcon, MouseIcon, HeadphonesIcon, LightbulbIcon, ArrowUpRightIcon, ChevronDownIcon, BackpackIcon, WatchIcon, SmartphoneIcon, WalletIcon, KeyIcon } from 'lucide-react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Link } from '@/components/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { WORKSPACE_ITEMS, SHOOTING_GEAR_ITEMS, SOFTWARE_ITEMS } from '@/lib/constants'
import { isExternalLink } from '@/lib/utils'

const equipment = [
    {
        name: 'MacBook Pro M4 Max',
        specs: '36GB RAM, 1TB SSD, 14-inch',
        description: 'Ana çalışma makinem',
        icon: LaptopIcon
    },
    {
        name: 'Asus ProArt',
        specs: '27-inch, 4K UHD, USB-C',
        description: 'Birincil monitör',
        icon: MonitorIcon
    },
    {
        name: 'Logitech MX Master 4',
        specs: 'Kablosuz Ergonomik Mouse',
        description: 'Günlük mouse',
        icon: MouseIcon
    },
    {
        name: 'Logitech MX Keys Mini',
        specs: 'Kablosuz kompakt klavye',
        description: 'Günlük klavye',
        icon: KeyboardIcon
    },
    {
        name: 'Sony WH-100XM5',
        specs: 'Kablosuz kafa üstü kulaklık',
        description: 'Kusursuz ses',
        icon: HeadphonesIcon
    },
    {
        name: 'Apple AirPods Pro',
        specs: 'Kablosuz kulak içi kulaklık',
        description: 'Günlük kulaklık',
        icon: HeadphonesIcon
    }
]

export default function CalismaAlanim() {
    const [isOtherEquipmentOpen, setIsOtherEquipmentOpen] = useState(false)
    const [isShootingGearOpen, setIsShootingGearOpen] = useState(false)
    const [isSoftwareOpen, setIsSoftwareOpen] = useState(false)

    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle="Çalışma Alanım" />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title="Çalışma Alanım" />

                    {/* Description */}
                    <p className="mb-8 text-gray-600">
                        Aktif olarak kullandığım ekipmanlar listesi. Tabii kucağımdaki kızım Asya çalışmama izin verdiği sürece... 😅
                    </p>

                    {/* Workspace Photo */}
                    <div className="mb-12 flex justify-center">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                            <img
                                src="/assets/IMG_1587.jpg"
                                alt="Çalışma Alanım"
                                className="h-auto w-full max-w-2xl object-cover"
                            />
                        </div>
                    </div>

                    {/* Equipment Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {equipment.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
                                >
                                    {/* Icon */}
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors group-hover:bg-gray-200">
                                        <Icon size={20} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.specs}</p>
                                        <p className="text-sm text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Other Equipment - Collapsible */}
                    <div className="mt-16">
                        <button
                            onClick={() => setIsOtherEquipmentOpen(!isOtherEquipmentOpen)}
                            className="group mb-4 flex w-full items-center justify-between rounded-lg px-1 py-2 text-left transition-colors hover:bg-gray-50"
                        >
                            <h2 className="text-xl font-bold text-gray-900">Diğer Ekipmanlar</h2>
                            <ChevronDownIcon
                                size={24}
                                className={`text-gray-400 transition-transform duration-300 group-hover:text-gray-600 ${isOtherEquipmentOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOtherEquipmentOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="hover:bg-transparent">
                                            <TableHead className="px-4 py-3 text-sm font-medium text-gray-500">Ürün</TableHead>
                                            <TableHead className="px-4 py-3 text-sm font-medium text-gray-500">Özellikler</TableHead>
                                            <TableHead className="px-4 py-3 text-right text-sm font-medium text-gray-500"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {WORKSPACE_ITEMS.map((item, index) => {
                                            const isExternal = isExternalLink(item.url)
                                            return (
                                                <TableRow key={index} className="group transition-colors hover:bg-gray-50/50">
                                                    <TableCell className="px-4 py-3 font-medium text-gray-900">{item.title}</TableCell>
                                                    <TableCell className="px-4 py-3 text-gray-500">{item.specs}</TableCell>
                                                    <TableCell className="px-4 py-3 text-right">
                                                        <Link
                                                            href={item.url}
                                                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                                                        >
                                                            {isExternal ? 'İncele' : 'Oku'}
                                                            {isExternal && <ArrowUpRightIcon size={14} className="mb-0.5" />}
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    {/* Shooting Gear - Collapsible */}
                    <div className="mt-8">
                        <button
                            onClick={() => setIsShootingGearOpen(!isShootingGearOpen)}
                            className="group mb-4 flex w-full items-center justify-between rounded-lg px-1 py-2 text-left transition-colors hover:bg-gray-50"
                        >
                            <h2 className="text-xl font-bold text-gray-900">Çekim Ekipmanlarım</h2>
                            <ChevronDownIcon
                                size={24}
                                className={`text-gray-400 transition-transform duration-300 group-hover:text-gray-600 ${isShootingGearOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isShootingGearOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="hover:bg-transparent">
                                            <TableHead className="px-4 py-3 text-sm font-medium text-gray-500">Ürün</TableHead>
                                            <TableHead className="px-4 py-3 text-sm font-medium text-gray-500">Özellikler</TableHead>
                                            <TableHead className="px-4 py-3 text-right text-sm font-medium text-gray-500"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {SHOOTING_GEAR_ITEMS.map((item, index) => {
                                            const isExternal = isExternalLink(item.url)
                                            return (
                                                <TableRow key={index} className="group transition-colors hover:bg-gray-50/50">
                                                    <TableCell className="px-4 py-3 font-medium text-gray-900">{item.title}</TableCell>
                                                    <TableCell className="px-4 py-3 text-gray-500">{item.specs}</TableCell>
                                                    <TableCell className="px-4 py-3 text-right">
                                                        <Link
                                                            href={item.url}
                                                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                                                        >
                                                            {isExternal ? 'İncele' : 'Oku'}
                                                            {isExternal && <ArrowUpRightIcon size={14} className="mb-0.5" />}
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    {/* Yazılımlar & Araçlar - Collapsible — şimdilik pasif, içerik hazır olunca aç */}
                    {false && (
                    <div className="mt-8">
                        <button
                            onClick={() => setIsSoftwareOpen(!isSoftwareOpen)}
                            className="group mb-4 flex w-full items-center justify-between rounded-lg px-1 py-2 text-left transition-colors hover:bg-gray-50"
                        >
                            <h2 className="text-xl font-bold text-gray-900">Yazılımlar & Araçlar</h2>
                            <ChevronDownIcon
                                size={24}
                                className={`text-gray-400 transition-transform duration-300 group-hover:text-gray-600 ${isSoftwareOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSoftwareOpen ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-col gap-8">
                                {SOFTWARE_ITEMS.map((group) => (
                                    <div key={group.category}>
                                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                            {group.category}
                                        </h3>
                                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="hover:bg-transparent">
                                                        <TableHead className="px-4 py-3 text-sm font-medium text-gray-500">Araç</TableHead>
                                                        <TableHead className="px-4 py-3 text-sm font-medium text-gray-500">Kullanım</TableHead>
                                                        <TableHead className="px-4 py-3 text-right text-sm font-medium text-gray-500"></TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {group.items.map((item) => (
                                                        <TableRow key={item.title} className="group transition-colors hover:bg-gray-50/50">
                                                            <TableCell className="px-4 py-3 font-medium text-gray-900">{item.title}</TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500">{item.specs}</TableCell>
                                                            <TableCell className="px-4 py-3 text-right">
                                                                <Link
                                                                    href={item.url}
                                                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                                                                >
                                                                    İncele
                                                                    <ArrowUpRightIcon size={14} className="mb-0.5" />
                                                                </Link>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Footer Note */}
                    <div className="mt-16 rounded-xl bg-gray-50 p-6 text-center">
                        <p className="text-sm text-gray-600">
                            Bu çalışma alanım zamanla evrimleşmeye devam ediyor. Kullandığım yeni araçları ve keşfettiğim yeni teknolojileri buradan paylaşmaya devam edeceğim.
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </ScrollArea>
    )
}
