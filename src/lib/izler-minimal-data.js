// İzler - Minimal gezi notları
//
// Her yer için:
//   - city: şehir adı (başlık)
//   - country: ülke adı
//   - flag: ülke bayrağı emojisi
//   - year: yıl (gruplama için)
//   - date: "Mayıs 2024" gibi okunabilir tarih
//   - note: 1-2 cümle samimi düşünce
//   - highlight (opsiyonel): unutamadığın an / tavsiye
//   - photos (opsiyonel): /public/geziler/ altındaki dosya yolları (3-5 önerilir)
//   - favoriteSpots (opsiyonel): beğendiğin mekanlar, her biri:
//       { name, type, coords: { lat, lng }, note?, photo? }
//       type: 'landmark' | 'cafe' | 'restaurant' | 'museum' | 'park' | 'shop' | 'viewpoint'
//       photo: yok ise tip emojisiyle placeholder gösterir

export const IZLER_META = {
    title: 'İzler',
    subtitle: 'Gittiğim yerlerden küçük notlar'
}

export const IZLER = [
    // ─── 2024 ───
    {
        id: 'roma-2024',
        city: 'Roma',
        country: 'İtalya',
        flag: '🇮🇹',
        year: 2024,
        date: 'Mayıs 2024',
        note: 'Her köşe başında bir çeşme, her sokakta bir hikâye. Kolezyum\'un gölgesinde yürürken zamanın nasıl aktığını unuttum.',
        highlight: 'Trastevere\'de akşam yemeği — Roma\'nın gerçek hâli burada.',
        photos: [],
        favoriteSpots: [
            { name: 'Kolezyum', type: 'landmark', coords: { lat: 41.8902, lng: 12.4922 }, note: 'Sabah erken git, kalabalıktan önce bambaşka.' },
            { name: 'Pantheon', type: 'landmark', coords: { lat: 41.8986, lng: 12.4769 } },
            { name: 'Trastevere', type: 'restaurant', coords: { lat: 41.8867, lng: 12.4692 }, note: 'Akşam yemeği için ideal.' },
            { name: 'Sant\'Eustachio il Caffè', type: 'cafe', coords: { lat: 41.8983, lng: 12.4745 }, note: 'Roma\'nın en iyi espressosu.' },
            { name: 'Villa Borghese', type: 'park', coords: { lat: 41.9142, lng: 12.4858 } }
        ]
    },
    {
        id: 'vatikan-2024',
        city: 'Vatikan',
        country: 'Vatikan',
        flag: '🇻🇦',
        year: 2024,
        date: 'Mayıs 2024',
        note: 'Dünyanın en küçük ülkesinde devasa bir sanat mirası. Sistine Şapeli\'nin tavanına saatlerce bakılsa sıkılınmaz.',
        photos: []
    },
    {
        id: 'floransa-2024',
        city: 'Floransa',
        country: 'İtalya',
        flag: '🇮🇹',
        year: 2024,
        date: 'Mayıs 2024',
        note: 'Rönesans\'ın doğduğu şehir. Duomo\'nun kubbesine çıkıp Floransa\'yı yukarıdan görmek bambaşka bir his.',
        highlight: 'Piazzale Michelangelo — gün batımında gidilecek yer.',
        photos: []
    },
    {
        id: 'pisa-2024',
        city: 'Pisa',
        country: 'İtalya',
        flag: '🇮🇹',
        year: 2024,
        date: 'Mayıs 2024',
        note: 'Eğik Kule ikonik ama Pisa sadece ondan ibaret değil. Arno nehri kıyısında yürümek güzeldi.',
        photos: []
    },
    {
        id: 'milano-2024',
        city: 'Milano',
        country: 'İtalya',
        flag: '🇮🇹',
        year: 2024,
        date: 'Mayıs 2024',
        note: 'Moda, tasarım ve iş dünyasının kalbi. Duomo\'nun görkemi karşısında öylece duruyorsun.',
        photos: []
    },
    {
        id: 'venedik-2024',
        city: 'Venedik',
        country: 'İtalya',
        flag: '🇮🇹',
        year: 2024,
        date: 'Mayıs 2024',
        note: 'Ara sokaklarda kaybolmak, Venedik\'in gerçek ruhunu keşfetmenin en iyi yolu. Suyun sessizliğinde huzur var.',
        highlight: 'Burano adası — rengarenk evler, fotoğraf cenneti.',
        photos: []
    },

    // ─── 2023 ───
    {
        id: 'paris-2023',
        city: 'Paris',
        country: 'Fransa',
        flag: '🇫🇷',
        year: 2023,
        date: 'Kasım 2023',
        note: 'Sonbahar Paris\'i bambaşka. Eyfel\'den akşam ışıklarında şehri izlemek ve Seine kıyısında yürümek unutulmaz.',
        highlight: 'Shakespeare & Company — efsanevi kitapçı, Notre-Dame\'ın tam karşısında.',
        photos: []
    },
    {
        id: 'strazburg-2023',
        city: 'Strazburg',
        country: 'Fransa',
        flag: '🇫🇷',
        year: 2023,
        date: 'Kasım 2023',
        note: 'Fransız ve Alman kültürünün iç içe geçtiği masalsı bir şehir. Petite France kartpostaldan fırlamış gibi.',
        photos: []
    },
    {
        id: 'amsterdam-2023',
        city: 'Amsterdam',
        country: 'Hollanda',
        flag: '🇳🇱',
        year: 2023,
        date: 'Yaz 2023',
        note: 'Bisiklet trafiğine alışmak biraz zorlasa da şehri böyle deneyimlemek en ideali. Müzeleri ve kanallarıyla çok keyifli.',
        photos: []
    },
    {
        id: 'zaanse-schans-2023',
        city: 'Zaanse Schans',
        country: 'Hollanda',
        flag: '🇳🇱',
        year: 2023,
        date: 'Yaz 2023',
        note: 'Amsterdam\'dan kısa bir tren yolculuğu. Hollanda\'nın klasik kartpostal görüntüsü: yel değirmenleri ve tahta evler.',
        photos: []
    },
    {
        id: 'koln-2023',
        city: 'Köln',
        country: 'Almanya',
        flag: '🇩🇪',
        year: 2023,
        date: '2023',
        note: 'Köln Katedrali karşısında ilk duruşta büyüleniyorsun. Eski şehrin dar sokaklarında Kölsch birası eşliğinde akşamlar.',
        photos: []
    },
    {
        id: 'basel-2023',
        city: 'Basel',
        country: 'İsviçre',
        flag: '🇨🇭',
        year: 2023,
        date: '2023',
        note: 'Üç ülkenin sınırında (İsviçre, Almanya, Fransa) konumlanan sakin ve sofistike bir şehir.',
        photos: []
    },
    {
        id: 'luzern-2023',
        city: 'Luzern',
        country: 'İsviçre',
        flag: '🇨🇭',
        year: 2023,
        date: '2023',
        note: 'Luzern Gölü\'nün turkuaz sularıyla çevrili bu şehir İsviçre\'nin en fotojenik köşelerinden.',
        highlight: 'Pilatus Dağı — dişli trenle zirveye, Alpler\'in 360° panoraması.',
        photos: []
    },
    {
        id: 'lizbon-2023',
        city: 'Lizbon',
        country: 'Portekiz',
        flag: '🇵🇹',
        year: 2023,
        date: '2023',
        note: 'Yedi tepe üzerine kurulmuş Lizbon, tramvay sesleri, azulejo kaplı cepheler ve fado ile ruhuna işliyor.',
        highlight: 'Pastéis de Belém — deneyimlemeden dönme.',
        photos: []
    },

    // ─── 2022 ───
    {
        id: 'sevilla-2022',
        city: 'Sevilla',
        country: 'İspanya',
        flag: '🇪🇸',
        year: 2022,
        date: 'Güz 2022',
        note: 'Flamenko ritminin sokaklarda hissedildiği, portakal ağaçlarıyla kaplı Endülüs ruhunun en canlı hâli.',
        highlight: 'Triana\'da flamenco tablao — akşamı bambaşka yapıyor.',
        photos: []
    },
    {
        id: 'granada-2022',
        city: 'Granada',
        country: 'İspanya',
        flag: '🇪🇸',
        year: 2022,
        date: 'Güz 2022',
        note: 'Elhamra Sarayı\'nın detaylı mimarisi karşısında büyülenmemek imkânsız. Doğu ve Batı\'nın buluştuğu eşsiz bir yer.',
        highlight: 'Mirador de San Nicolás\'tan gün batımında Elhamra.',
        photos: []
    },
    {
        id: 'cordoba-2022',
        city: 'Cordoba',
        country: 'İspanya',
        flag: '🇪🇸',
        year: 2022,
        date: 'Güz 2022',
        note: 'Mezquita\'nın içine girince nefes kesiliyor — yüzlerce sütun ve at nalı kemerler bir orman gibi.',
        photos: []
    },
    {
        id: 'saraybosna-2022',
        city: 'Saraybosna',
        country: 'Bosna Hersek',
        flag: '🇧🇦',
        year: 2022,
        date: 'Bahar 2022',
        note: 'Osmanlı, Avusturya-Macaristan ve modern izlerin iç içe geçtiği şehir. Başçarşı\'da cezve kahvesi içerken evindeymiş gibi hissediyorsun.',
        photos: []
    },
    {
        id: 'mostar-2022',
        city: 'Mostar',
        country: 'Bosna Hersek',
        flag: '🇧🇦',
        year: 2022,
        date: 'Bahar 2022',
        note: 'Stari Most göründüğü anda zaman duruyor. Köprünün ağırlığı, Neretva\'nın rengi — kolay kolay unutulmuyor.',
        photos: []
    },
    {
        id: 'kotor-2022',
        city: 'Kotor',
        country: 'Karadağ',
        flag: '🇲🇪',
        year: 2022,
        date: 'Bahar 2022',
        note: 'Körfeze girerken fiyortları andıran manzaralar. Surlarla çevrili eski şehir kedileri ve dar sokaklarıyla masalsı.',
        highlight: 'Surlara tırmanış — 1.350 basamak ama manzara karşılığını veriyor.',
        photos: []
    },
    {
        id: 'uskup-2022',
        city: 'Üsküp',
        country: 'Makedonya',
        flag: '🇲🇰',
        year: 2022,
        date: 'Bahar 2022',
        note: 'Osmanlı mirası çarşı, modern heykeller ve Vardar kıyısındaki canlı atmosfer. Eski Çarşı\'da İstanbul\'u hatırlıyorsun.',
        photos: []
    },
    {
        id: 'ohri-2022',
        city: 'Ohri',
        country: 'Makedonya',
        flag: '🇲🇰',
        year: 2022,
        date: 'Bahar 2022',
        note: 'Ohri Gölü\'nün berrak suları ve kıyısındaki tarihi kiliselerle Balkanlar\'ın en huzurlu köşesi.',
        highlight: 'Sveti Jovan Kaneo — gölün kıyısındaki ikonik kilise.',
        photos: []
    }
]

// Benzersiz ülke listesini döndürür, her biri için o ülkenin
// ilk şehrinin id'sini içerir (anchor scroll için).
export function getCountryList(items) {
    const seen = new Map()
    for (const iz of items) {
        if (!seen.has(iz.country)) {
            seen.set(iz.country, {
                country: iz.country,
                flag: iz.flag,
                firstId: iz.id,
                cityCount: 1
            })
        } else {
            seen.get(iz.country).cityCount += 1
        }
    }
    return Array.from(seen.values())
}

// Yıla göre grupla
export function groupByYear(items) {
    const groups = items.reduce((acc, item) => {
        const year = item.year || 'Tarihsiz'
        if (!acc[year]) acc[year] = []
        acc[year].push(item)
        return acc
    }, {})
    // Yılları büyükten küçüğe sırala
    return Object.keys(groups)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => ({ year, items: groups[year] }))
}
