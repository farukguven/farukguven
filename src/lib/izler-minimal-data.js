// İzler - Minimal gezi notları
//
// Her yer için:
//   - city: şehir adı (başlık)
//   - country: ülke adı
//   - flag: ülke bayrağı emojisi
//   - year: yıl (gruplama için) — yazmazsan 'Tarihsiz' altında görünür
//   - date: "Mayıs 2024" gibi okunabilir tarih (opsiyonel)
//   - note: 1-2 cümle samimi düşünce
//   - highlight (opsiyonel): unutamadığın an / tavsiye
//   - photos (opsiyonel): /public/geziler/ altındaki dosya yolları (3-5 önerilir)
//   - favoriteSpots (opsiyonel): beğendiğin mekanlar
//   - mapEmbedUrl (opsiyonel): Google My Maps iframe embed URL'i

export const IZLER_META = {
    title: 'İzler',
    subtitle: 'Gittiğim yerlerden küçük notlar'
}

export const IZLER = [
    // ─── İTALYA ───
    {
        id: 'roma',
        city: 'Roma',
        country: 'İtalya',
        flag: '🇮🇹',
        note: 'Her köşe başında bir çeşme, her sokakta bir hikâye. Kolezyum\'un gölgesinde yürürken zamanın nasıl aktığını unuttum.',
        highlight: 'Trastevere\'de akşam yemeği — Roma\'nın gerçek hâli burada.',
        photos: [],
        favoriteSpots: []
    },
    {
        id: 'floransa',
        city: 'Floransa',
        country: 'İtalya',
        flag: '🇮🇹',
        note: 'Rönesans\'ın doğduğu şehir. Duomo\'nun kubbesine çıkıp Floransa\'yı yukarıdan görmek bambaşka bir his.',
        highlight: 'Piazzale Michelangelo — gün batımında gidilecek yer.',
        photos: []
    },
    {
        id: 'milano',
        city: 'Milano',
        country: 'İtalya',
        flag: '🇮🇹',
        note: 'Moda, tasarım ve iş dünyasının kalbi. Duomo\'nun görkemi karşısında öylece duruyorsun.',
        photos: []
    },
    {
        id: 'venedik',
        city: 'Venedik',
        country: 'İtalya',
        flag: '🇮🇹',
        note: 'Ara sokaklarda kaybolmak, Venedik\'in gerçek ruhunu keşfetmenin en iyi yolu. Suyun sessizliğinde huzur var.',
        highlight: 'Burano adası — rengarenk evler, fotoğraf cenneti.',
        photos: []
    },
    {
        id: 'pisa',
        city: 'Pisa',
        country: 'İtalya',
        flag: '🇮🇹',
        note: 'Eğik Kule ikonik ama Pisa sadece ondan ibaret değil. Arno nehri kıyısında yürümek güzeldi.',
        photos: []
    },
    // ─── İSPANYA ───
    {
        id: 'sevilla',
        city: 'Sevilla',
        country: 'İspanya',
        flag: '🇪🇸',
        note: 'Flamenko ritminin sokaklarda hissedildiği, portakal ağaçlarıyla kaplı Endülüs ruhunun en canlı hâli.',
        highlight: 'Triana\'da flamenco tablao — akşamı bambaşka yapıyor.',
        photos: []
    },
    {
        id: 'granada',
        city: 'Granada',
        country: 'İspanya',
        flag: '🇪🇸',
        note: 'Elhamra Sarayı\'nın detaylı mimarisi karşısında büyülenmemek imkânsız. Doğu ve Batı\'nın buluştuğu eşsiz bir yer.',
        highlight: 'Mirador de San Nicolás\'tan gün batımında Elhamra.',
        photos: []
    },
    {
        id: 'cordoba',
        city: 'Cordoba',
        country: 'İspanya',
        flag: '🇪🇸',
        note: 'Mezquita\'nın içine girince nefes kesiliyor — yüzlerce sütun ve at nalı kemerler bir orman gibi.',
        photos: []
    },

    // ─── PORTEKİZ ───
    {
        id: 'lizbon',
        city: 'Lizbon',
        country: 'Portekiz',
        flag: '🇵🇹',
        note: 'Yedi tepe üzerine kurulmuş Lizbon, tramvay sesleri, azulejo kaplı cepheler ve fado ile ruhuna işliyor.',
        highlight: 'Pastéis de Belém — deneyimlemeden dönme.',
        mapEmbedUrl: 'https://www.google.com/maps/d/embed?mid=1PVlx7JiGPPxSGtWN34NAvyaFfjJ9WJ2v&ehbc=2E312F',
        photos: []
    },

    // ─── HOLLANDA ───
    {
        id: 'amsterdam',
        city: 'Amsterdam',
        country: 'Hollanda',
        flag: '🇳🇱',
        note: 'Bisiklet trafiğine alışmak biraz zorlasa da şehri böyle deneyimlemek en ideali. Müzeleri ve kanallarıyla çok keyifli.',
        photos: []
    },
    {
        id: 'zaanse-schans',
        city: 'Zaanse Schans',
        country: 'Hollanda',
        flag: '🇳🇱',
        note: 'Amsterdam\'dan kısa bir tren yolculuğu. Hollanda\'nın klasik kartpostal görüntüsü: yel değirmenleri ve tahta evler.',
        photos: []
    },

    // ─── ALMANYA ───
    {
        id: 'koln',
        city: 'Köln',
        country: 'Almanya',
        flag: '🇩🇪',
        note: 'Köln Katedrali karşısında ilk duruşta büyüleniyorsun. Eski şehrin dar sokaklarında Kölsch birası eşliğinde akşamlar.',
        photos: []
    },

    // ─── FRANSA ───
    {
        id: 'paris',
        city: 'Paris',
        country: 'Fransa',
        flag: '🇫🇷',
        note: 'Sonbahar Paris\'i bambaşka. Eyfel\'den akşam ışıklarında şehri izlemek ve Seine kıyısında yürümek unutulmaz.',
        highlight: 'Shakespeare & Company — efsanevi kitapçı, Notre-Dame\'ın tam karşısında.',
        photos: []
    },
    {
        id: 'strazburg',
        city: 'Strazburg',
        country: 'Fransa',
        flag: '🇫🇷',
        note: 'Fransız ve Alman kültürünün iç içe geçtiği masalsı bir şehir. Petite France kartpostaldan fırlamış gibi.',
        photos: []
    },

    // ─── İSVİÇRE ───
    {
        id: 'basel',
        city: 'Basel',
        country: 'İsviçre',
        flag: '🇨🇭',
        note: 'Üç ülkenin sınırında (İsviçre, Almanya, Fransa) konumlanan sakin ve sofistike bir şehir.',
        photos: []
    },
    {
        id: 'luzern',
        city: 'Luzern',
        country: 'İsviçre',
        flag: '🇨🇭',
        note: 'Luzern Gölü\'nün turkuaz sularıyla çevrili bu şehir İsviçre\'nin en fotojenik köşelerinden.',
        highlight: 'Pilatus Dağı — dişli trenle zirveye, Alpler\'in 360° panoraması.',
        photos: []
    },

    // ─── MAKEDONYA ───
    {
        id: 'uskup',
        city: 'Üsküp',
        country: 'Makedonya',
        flag: '🇲🇰',
        note: 'Osmanlı mirası çarşı, modern heykeller ve Vardar kıyısındaki canlı atmosfer. Eski Çarşı\'da İstanbul\'u hatırlıyorsun.',
        photos: []
    },
    {
        id: 'ohri',
        city: 'Ohri',
        country: 'Makedonya',
        flag: '🇲🇰',
        note: 'Ohri Gölü\'nün berrak suları ve kıyısındaki tarihi kiliselerle Balkanlar\'ın en huzurlu köşesi.',
        highlight: 'Sveti Jovan Kaneo — gölün kıyısındaki ikonik kilise.',
        photos: []
    },

    // ─── KARADAĞ ───
    {
        id: 'kotor',
        city: 'Kotor',
        country: 'Karadağ',
        flag: '🇲🇪',
        note: 'Körfeze girerken fiyortları andıran manzaralar. Surlarla çevrili eski şehir kedileri ve dar sokaklarıyla masalsı.',
        highlight: 'Surlara tırmanış — 1.350 basamak ama manzara karşılığını veriyor.',
        photos: []
    },

    // ─── BOSNA HERSEK ───
    {
        id: 'saraybosna',
        city: 'Saraybosna',
        country: 'Bosna Hersek',
        flag: '🇧🇦',
        note: 'Osmanlı, Avusturya-Macaristan ve modern izlerin iç içe geçtiği şehir. Başçarşı\'da cezve kahvesi içerken evindeymiş gibi hissediyorsun.',
        photos: []
    },
    {
        id: 'mostar',
        city: 'Mostar',
        country: 'Bosna Hersek',
        flag: '🇧🇦',
        note: 'Stari Most göründüğü anda zaman duruyor. Köprünün ağırlığı, Neretva\'nın rengi — kolay kolay unutulmuyor.',
        photos: []
    },

    // ─── SLOVENYA ───
    {
        id: 'ljubljana',
        city: 'Ljubljana',
        country: 'Slovenya',
        flag: '🇸🇮',
        note: 'Küçük ama çok sıcak bir başkent. Ljubljanica nehri kenarındaki kafeler, yaya köprüleri ve tepedeki şato şehri özetliyor.',
        highlight: 'Dragon Bridge çevresinde akşam yürüyüşü — şehrin kalbi orada atıyor.',
        photos: []
    },
    {
        id: 'bled',
        city: 'Bled',
        country: 'Slovenya',
        flag: '🇸🇮',
        note: 'Göl ortasındaki minik ada ve kayalık üzerinde yükselen şato — sanki masal kitabından çıkmış bir sahne.',
        highlight: 'Pletna kayığıyla adaya geçiş ve Bled Cream Cake (Kremšnita).',
        photos: []
    },

    // ─── AVUSTURYA ───
    {
        id: 'graz',
        city: 'Graz',
        country: 'Avusturya',
        flag: '🇦🇹',
        note: 'Avusturya\'nın ikinci büyük şehri ama atmosferiyle çok daha sakin ve öğrenci ruhu taşıyan bir yer. Kırmızı kiremit çatılarla kaplı eski şehir UNESCO mirası.',
        highlight: 'Schlossberg tepesine tırmanış — Graz\'ı yukarıdan izlemek başka.',
        photos: []
    },
    {
        id: 'hallstatt',
        city: 'Hallstatt',
        country: 'Avusturya',
        flag: '🇦🇹',
        note: 'Dağlar, göl ve tahta evlerle çevrili bu köy, Avrupa\'nın en fotoğraflanan noktalarından. Sessizliği ve manzarası başka bir dünyaya ait.',
        highlight: 'Klasik manzara noktası — sabah erken git, turistlerden önce kendi başına kal.',
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

// Yıla göre grupla (yıl tanımlı değilse 'Tarihsiz' altında toplar)
export function groupByYear(items) {
    const groups = items.reduce((acc, item) => {
        const year = item.year || 'Tarihsiz'
        if (!acc[year]) acc[year] = []
        acc[year].push(item)
        return acc
    }, {})
    return Object.keys(groups)
        .sort((a, b) => {
            if (a === 'Tarihsiz') return 1
            if (b === 'Tarihsiz') return -1
            return Number(b) - Number(a)
        })
        .map((year) => ({ year, items: groups[year] }))
}

// Ülkeye göre grupla (yıl yerine)
export function groupByCountry(items) {
    const groups = items.reduce((acc, item) => {
        if (!acc[item.country]) {
            acc[item.country] = { country: item.country, flag: item.flag, items: [] }
        }
        acc[item.country].items.push(item)
        return acc
    }, {})
    return Object.values(groups)
}
