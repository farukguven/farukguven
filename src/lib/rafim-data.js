// Rafım - Kitap, Film ve Dizi koleksiyonum
//
// Her raf için status seçenekleri farklı:
//   Kitaplar: 'okudum' | 'okuyorum' | 'raftadir'
//   Filmler:  'izledim'
//   Diziler:  'takipte' | 'bitirdim' | 'biraktim'

export const RAFIM_META = {
    title: 'Rafım',
    subtitle: 'Okuduğum, izlediğim ve tavsiye ettiğim eserler'
}

// ─────────── KİTAPLAR ───────────
export const KITAP_KATEGORILER = [
    {
        id: 'etkileme-merak',
        name: 'Etkileme ve Merak',
        description: 'İletişim, ikna ve insan psikolojisi üzerine',
        items: [
            {
                id: 'etkili-iletisim',
                title: 'Etkili İletişimin 13 Kuralı',
                author: 'Jack Schafer',
                genre: 'Kişisel Gelişim',
                subject: 'İletişim becerilerini geliştirme rehberi',
                status: 'raftadir'
            },
            {
                id: 'bastan-cikarma',
                title: 'Baştan Çıkarma Sanatı',
                author: 'Robert Greene',
                genre: 'Psikoloji',
                subject: 'İkna ve baştan çıkarma teknikleri',
                status: 'raftadir'
            },
            {
                id: 'iknanin-psikolojisi',
                title: 'İknanın Psikolojisi',
                author: 'Robert Cialdini',
                genre: 'Psikoloji',
                subject: 'İkna teknikleri ve psikolojik temelleri',
                status: 'raftadir'
            }
        ]
    },
    {
        id: 'yuz-beden-dili',
        name: 'Yüz İfadeleri ve Beden Dili',
        description: 'Mimik, jest ve beden dili okumak',
        items: [
            {
                id: 'ne-dusundugunu-biliyorum',
                title: 'Ne Düşündüğünü Biliyorum',
                author: 'Paul Ekman',
                genre: 'Psikoloji',
                subject: 'Mikro ifadeler ve duygu analizi',
                status: 'raftadir'
            },
            {
                id: 'gercek-insanin-yuzunde',
                title: 'Gerçek İnsanın Yüzünde Yazar mı?',
                author: 'Erol Göka & Murat Beyazyüz',
                genre: 'Psikoloji',
                subject: 'Yüz ifadeleri ve insan davranışları',
                status: 'raftadir'
            },
            {
                id: 'beden-dili-yasalari',
                title: 'Beden Dili Yasalarının El Kitabı',
                author: 'Emrah Akçay',
                genre: 'Psikoloji',
                subject: 'Beden dili ve iletişim stratejileri',
                status: 'raftadir'
            },
            {
                id: 'beden-dili-ile-yakalamanin',
                title: 'Beden Dili ile Yakalamanın El Kitabı',
                author: 'Emrah Akçay',
                genre: 'Kişisel Gelişim',
                subject: 'Beden dili ile iletişim stratejileri',
                status: 'raftadir'
            }
        ]
    },
    {
        id: 'karakter-davranis',
        name: 'Karakter ve İnsan Davranışları',
        description: 'İnsanı ve toplumu anlamak üzerine',
        items: [
            {
                id: 'insan-dogasinin-yasasi',
                title: 'İnsan Doğasının Yasası',
                author: 'Robert Greene',
                genre: 'Psikoloji',
                subject: 'İnsan davranışları ve doğası üzerine analizler',
                status: 'raftadir'
            },
            {
                id: 'hizli-yavas-dusunme',
                title: 'Hızlı ve Yavaş Düşünme',
                author: 'Daniel Kahneman',
                genre: 'Psikoloji',
                subject: 'Düşünce süreçleri ve karar alma mekanizmaları',
                status: 'raftadir'
            },
            {
                id: 'tufek-mikrop-celik',
                title: 'Tüfek, Mikrop ve Çelik',
                author: 'Jared Diamond',
                genre: 'Bilim',
                subject: 'İnsan toplumlarının gelişimini etkileyen faktörler',
                status: 'raftadir'
            },
            {
                id: 'cokus',
                title: 'Çöküş',
                author: 'Jared Diamond',
                genre: 'Bilim',
                subject: 'Toplumların çöküş nedenleri ve çözümleri',
                status: 'raftadir'
            }
        ]
    }
]

// ─────────── FİLMLER ───────────
// Örnek veri — sen kendi listene göre düzenleyeceksin
export const FILM_KATEGORILER = [
    {
        id: 'favoriler',
        name: 'Favorilerim',
        description: 'Hayatımda iz bırakan filmler',
        items: [
            {
                id: 'interstellar',
                title: 'Interstellar',
                author: 'Christopher Nolan',
                genre: 'Bilim Kurgu',
                year: 2014,
                subject: 'İnsanlığın yeni yurt aradığı destansı bir uzay yolculuğu',
                status: 'izledim'
            },
            {
                id: 'fight-club',
                title: 'Dövüş Kulübü',
                author: 'David Fincher',
                genre: 'Dram',
                year: 1999,
                subject: 'Modern yaşamın anlamsızlığı ve kimlik arayışı',
                status: 'izledim'
            }
        ]
    },
    {
        id: 'bilim-kurgu',
        name: 'Bilim Kurgu',
        description: 'Gelecek ve bilimin sınırlarında',
        items: [
            {
                id: 'blade-runner-2049',
                title: 'Blade Runner 2049',
                author: 'Denis Villeneuve',
                genre: 'Bilim Kurgu',
                year: 2017,
                subject: 'Distopik bir gelecekte anlam ve kimlik arayışı',
                status: 'izledim'
            },
            {
                id: 'arrival',
                title: 'Arrival',
                author: 'Denis Villeneuve',
                genre: 'Bilim Kurgu',
                year: 2016,
                subject: 'Dilin ve zamanın doğası üzerine derinlikli bir düşünce deneyi',
                status: 'izledim'
            }
        ]
    },
    {
        id: 'yerli-sinema',
        name: 'Türk Sineması',
        description: 'Yerli yapımlardan seçmeler',
        items: [
            {
                id: 'ayla',
                title: 'Ayla',
                author: 'Can Ulkay',
                genre: 'Dram',
                year: 2017,
                subject: 'Kore Savaşı\'nda bir Türk askerinin gerçek hikâyesi',
                status: 'izledim'
            }
        ]
    }
]

// ─────────── DİZİLER ───────────
export const DIZI_KATEGORILER = [
    {
        id: 'klasikler',
        name: 'Bitirdiğim Klasikler',
        description: 'Sonuna kadar takip ettiğim diziler',
        items: [
            {
                id: 'breaking-bad',
                title: 'Breaking Bad',
                author: 'Vince Gilligan',
                genre: 'Dram',
                year: 2008,
                subject: 'Bir kimya öğretmeninin karanlığa dönüşü',
                status: 'bitirdim'
            },
            {
                id: 'westworld',
                title: 'Westworld',
                author: 'Jonathan Nolan',
                genre: 'Bilim Kurgu',
                year: 2016,
                subject: 'Yapay zekâ ve bilincin felsefesi',
                status: 'bitirdim'
            }
        ]
    },
    {
        id: 'takipteyim',
        name: 'Takipteyim',
        description: 'Yeni sezonları beklediğim diziler',
        items: [
            {
                id: 'foundation',
                title: 'Foundation',
                author: 'David S. Goyer',
                genre: 'Bilim Kurgu',
                year: 2021,
                subject: 'Asimov\'un destansı evreninin televizyona uyarlaması',
                status: 'takipte'
            }
        ]
    },
    {
        id: 'anime',
        name: 'Anime',
        description: 'Farklı bir anlatı dili',
        items: [
            {
                id: 'attack-on-titan',
                title: 'Attack on Titan',
                author: 'Hajime Isayama',
                genre: 'Aksiyon',
                year: 2013,
                subject: 'Devlere karşı hayatta kalma mücadelesi ve savaşın etiği',
                status: 'bitirdim'
            }
        ]
    }
]

// Sekme tanımları
export const RAFLAR = [
    {
        id: 'kitaplar',
        label: 'Kitaplar',
        kategoriler: KITAP_KATEGORILER,
        itemNoun: 'kitap',
        authorLabel: 'Yazar',
        statusMeta: {
            okudum: { label: 'Okudum', className: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500' },
            okuyorum: { label: 'Okuyorum', className: 'bg-amber-50 text-amber-700 border-amber-100', dot: 'bg-amber-500' },
            raftadir: { label: 'Raftadır', className: 'bg-gray-50 text-gray-600 border-gray-200', dot: 'bg-gray-400' }
        }
    },
    {
        id: 'filmler',
        label: 'Filmler',
        kategoriler: FILM_KATEGORILER,
        itemNoun: 'film',
        authorLabel: 'Yönetmen',
        statusMeta: {
            izledim: { label: 'İzledim', className: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500' }
        }
    },
    {
        id: 'diziler',
        label: 'Diziler',
        kategoriler: DIZI_KATEGORILER,
        itemNoun: 'dizi',
        authorLabel: 'Yaratıcı',
        statusMeta: {
            takipte: { label: 'Takipte', className: 'bg-amber-50 text-amber-700 border-amber-100', dot: 'bg-amber-500' },
            bitirdim: { label: 'Bitirdim', className: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500' },
            biraktim: { label: 'Bıraktım', className: 'bg-gray-50 text-gray-500 border-gray-200', dot: 'bg-gray-400' }
        }
    }
]

export function getRafStats(raf) {
    const items = raf.kategoriler.flatMap((k) => k.items)
    return {
        toplam: items.length,
        kategoriSayisi: raf.kategoriler.length
    }
}
