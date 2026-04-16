export const metadata = {
    title: 'İzler',
    description: 'Gezi notları ve seyahat deneyimleri'
}

export default function IzlerLayout({ children }) {
    return (
        <div className="min-w-0 max-w-full flex-1 overflow-x-clip">
            {children}
        </div>
    )
}
