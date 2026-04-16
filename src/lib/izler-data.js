/**
 * Travel Guide Data Model
 *
 * Her yeni gezi eklemek için bu dosyaya bir TravelLocation objesi ekleyin.
 * Fotoğraflar public/geziler/ klasörüne konulmalıdır.
 *
 * @typedef {Object} TravelImage
 * @property {string} src - Görsel yolu (public/ altında)
 * @property {string} [alt] - Alternatif metin
 * @property {string} [caption] - Görsel açıklaması
 *
 * @typedef {Object} TravelLocation
 * @property {string} id - Benzersiz tanımlayıcı (URL anchor olarak da kullanılır)
 * @property {string} title - Başlık
 * @property {string} [shortTitle] - Kısa başlık (harita tooltip)
 * @property {string} country - Ülke adı
 * @property {string} [city] - Şehir adı
 * @property {string} flag - Ülke bayrağı emojisi
 * @property {string} description - Açıklama
 * @property {string} [shortDescription] - Kısa açıklama (harita tooltip)
 * @property {{ lat: number, lng: number }} coordinates - Koordinatlar
 * @property {TravelImage[]} images - Görseller
 * @property {string} [visitedDate] - Ziyaret tarihi
 * @property {number} [day] - Gün numarası (gün gün modda)
 * @property {number} [order] - Sıralama
 * @property {boolean} [featured] - Öne çıkan mı
 * @property {string[]} [tags] - Etiketler
 * @property {number} [rating] - Puan (1-5)
 * @property {string} [routeGroup] - Rota grubu
 * @property {PointOfInterest[]} [pois] - Yakındaki önerilen noktalar
 *
 * @typedef {Object} PointOfInterest
 * @property {string} id - Benzersiz tanımlayıcı
 * @property {string} name - Mekan adı
 * @property {string} type - Tür: 'cafe' | 'restaurant' | 'museum' | 'park' | 'landmark' | 'shop' | 'viewpoint'
 * @property {{ lat: number, lng: number }} coordinates - Koordinatlar
 * @property {string} [note] - Kısa not/yorum
 * @property {string} [icon] - Emoji ikonu (yoksa type'a göre otomatik atanır)
 */

export const TRAVEL_GUIDE_META = {
  title: 'İzler',
  subtitle: 'Keşfettiğim şehirlerden notlar ve anılar'
}

/** @type {TravelLocation[]} */
export const TIMELINE_GEZILER = [
  // ═══════════════════════════════════════
  // İTALYA 2024
  // ═══════════════════════════════════════
  {
    id: 'roma-2024',
    title: 'Roma — Sonsuz Şehir',
    shortTitle: 'Roma',
    country: 'İtalya',
    city: 'Roma',
    flag: '🇮🇹',
    description:
      'Antik Roma\'nın kalbine yolculuk. Her köşe başında bir çeşme, her sokakta bir hikâye. Kolezyum\'un gölgesinde yürürken zamanın nasıl aktığını unuttum.',
    shortDescription: 'Antik tarihin ve dolce vita\'nın buluştuğu şehir.',
    coordinates: { lat: 41.8902, lng: 12.4922 },
    images: [],
    visitedDate: 'Mayıs 2024',
    day: 1,
    order: 1,
    featured: true,
    tags: ['tarih', 'mimari', 'yemek'],
    rating: 5,
    routeGroup: 'italya-2024',
    pois: [
      { id: 'roma-colosseo', name: 'Kolezyum', type: 'landmark', coordinates: { lat: 41.8902, lng: 12.4922 }, note: 'Sabah erken saatte git, kalabalıktan önce gezmek bambaşka.' },
      { id: 'roma-pantheon', name: 'Pantheon', type: 'landmark', coordinates: { lat: 41.8986, lng: 12.4769 }, note: 'Kubbedeki göz deliğinden süzülen ışık büyüleyici.' },
      { id: 'roma-trastevere', name: 'Trastevere', type: 'restaurant', coordinates: { lat: 41.8867, lng: 12.4692 }, note: 'Roma\'nın en otantik mahallesi. Akşam yemeği için ideal.' },
      { id: 'roma-trevi', name: 'Trevi Çeşmesi', type: 'landmark', coordinates: { lat: 41.9009, lng: 12.4833 }, note: 'Bozuk parayı sol elle sağ omuz üzerinden at — geri dönersin.' },
      { id: 'roma-caffe', name: 'Sant\'Eustachio il Caffè', type: 'cafe', coordinates: { lat: 41.8983, lng: 12.4745 }, note: 'Roma\'nın en iyi espressosu burada. Gran Caffè dene.' },
      { id: 'roma-borghese', name: 'Villa Borghese', type: 'park', coordinates: { lat: 41.9142, lng: 12.4858 }, note: 'Şehrin ortasında huzurlu bir kaçış. Gölette kayık var.' }
    ]
  },
  {
    id: 'vatikan-2024',
    title: 'Vatikan — Sanatın Kalbi',
    shortTitle: 'Vatikan',
    country: 'Vatikan',
    city: 'Vatikan Müzeleri',
    flag: '🇻🇦',
    description:
      'Dünyanın en küçük ülkesinde devasa bir sanat mirası. Sistine Şapeli\'nin tavanı tek kelimeyle büyüleyici; insanın saatlerce bakıp inceleyesi geliyor.',
    shortDescription: 'Michelangelo\'nun başyapıtlarıyla dolu küçücük ülke.',
    coordinates: { lat: 41.9029, lng: 12.4534 },
    images: [],
    visitedDate: 'Mayıs 2024',
    day: 2,
    order: 2,
    featured: false,
    tags: ['sanat', 'müze', 'tarih'],
    rating: 5,
    routeGroup: 'italya-2024',
    pois: [
      { id: 'vatikan-sistine', name: 'Sistine Şapeli', type: 'museum', coordinates: { lat: 41.9029, lng: 12.4545 }, note: 'Tavana bakmaktan boyun ağrır ama değer. Fotoğraf çekmek yasak.' },
      { id: 'vatikan-stpeter', name: 'San Pietro Bazilikası', type: 'landmark', coordinates: { lat: 41.9022, lng: 12.4539 }, note: 'Kubbeye çık, Roma manzarası muhteşem.' }
    ]
  },
  {
    id: 'floransa-2024',
    title: 'Floransa — Rönesans\'ın Beşiği',
    shortTitle: 'Floransa',
    country: 'İtalya',
    city: 'Floransa',
    flag: '🇮🇹',
    description:
      'Rönesans\'ın doğduğu şehir. Duomo\'nun kubbesinden şehri seyretmek, Ponte Vecchio üzerinde yürümek ve Uffizi\'de saatlerce kaybolmak... Floransa zamanı durduruyor.',
    shortDescription: 'Rönesans\'ın doğduğu yer.',
    coordinates: { lat: 43.7696, lng: 11.2558 },
    images: [],
    visitedDate: 'Mayıs 2024',
    day: 3,
    order: 3,
    featured: true,
    tags: ['sanat', 'mimari', 'tarih'],
    rating: 5,
    routeGroup: 'italya-2024',
    pois: [
      { id: 'floransa-duomo', name: 'Duomo (Santa Maria del Fiore)', type: 'landmark', coordinates: { lat: 43.7731, lng: 11.2560 }, note: 'Brunelleschi\'nin kubbesine çık, 463 basamak ama manzara hak ediyor.' },
      { id: 'floransa-uffizi', name: 'Uffizi Galerisi', type: 'museum', coordinates: { lat: 43.7677, lng: 11.2553 }, note: 'Botticelli\'nin Venüs\'ün Doğuşu tablosu burada. Online bilet şart.' },
      { id: 'floransa-ponte', name: 'Ponte Vecchio', type: 'landmark', coordinates: { lat: 43.7680, lng: 11.2531 }, note: 'Üzerinde kuyumcu dükkanları olan tarihi köprü. Gün batımında git.' },
      { id: 'floransa-piazzale', name: 'Piazzale Michelangelo', type: 'viewpoint', coordinates: { lat: 43.7629, lng: 11.2650 }, note: 'Floransa\'nın en iyi panoramik manzara noktası.' }
    ]
  },
  {
    id: 'pisa-2024',
    title: 'Pisa — Eğik Kule ve Ötesi',
    shortTitle: 'Pisa',
    country: 'İtalya',
    city: 'Pisa',
    flag: '🇮🇹',
    description:
      'Eğik Kule elbette ikonik ama Pisa sadece kuleden ibaret değil. Arno nehri kıyısında yürüyüş ve Piazza dei Cavalieri\'nin sakin atmosferi güzel sürprizler sunuyor.',
    shortDescription: 'Eğik kulesi ile ünlü.',
    coordinates: { lat: 43.7228, lng: 10.3966 },
    images: [],
    visitedDate: 'Mayıs 2024',
    day: 4,
    order: 4,
    featured: false,
    tags: ['mimari', 'tarih'],
    rating: 3,
    routeGroup: 'italya-2024',
    pois: [
      { id: 'pisa-torre', name: 'Pisa Kulesi', type: 'landmark', coordinates: { lat: 43.7230, lng: 10.3966 }, note: 'Kuleye çıkmak için bilet al. Yukarıdan Toskana düzlükleri görünüyor.' },
      { id: 'pisa-duomo', name: 'Pisa Katedrali', type: 'landmark', coordinates: { lat: 43.7234, lng: 10.3942 }, note: 'Kulenin yanı başında, gotik-Romanesk mimarinin şaheseri.' }
    ]
  },
  {
    id: 'milano-2024',
    title: 'Milano — Modanın Başkenti',
    shortTitle: 'Milano',
    country: 'İtalya',
    city: 'Milano',
    flag: '🇮🇹',
    description:
      'Moda, tasarım ve iş dünyasının kalbi. Duomo\'nun görkemi karşısında büyülenirken, Galleria Vittorio Emanuele\'de yürümek başlı başına bir deneyim.',
    shortDescription: 'Modanın başkenti.',
    coordinates: { lat: 45.4642, lng: 9.1900 },
    images: [],
    visitedDate: 'Mayıs 2024',
    day: 5,
    order: 5,
    featured: false,
    tags: ['moda', 'mimari', 'şehir'],
    rating: 4,
    routeGroup: 'italya-2024',
    pois: [
      { id: 'milano-duomo', name: 'Milano Duomo', type: 'landmark', coordinates: { lat: 45.4641, lng: 9.1919 }, note: 'Çatıya çık, Alpler\'i görebilirsin. Mermer detaylar inanılmaz.' },
      { id: 'milano-galleria', name: 'Galleria Vittorio Emanuele II', type: 'shop', coordinates: { lat: 45.4657, lng: 9.1900 }, note: 'Dünyanın en eski alışveriş merkezlerinden. Boğa mozaiğinde dön.' },
      { id: 'milano-navigli', name: 'Navigli Kanalları', type: 'restaurant', coordinates: { lat: 45.4494, lng: 9.1798 }, note: 'Akşam aperitivo için ideal. Kanal boyunca barlar ve restoranlar.' }
    ]
  },
  {
    id: 'venedik-2024',
    title: 'Venedik — Suyun Üzerinde Rüya',
    shortTitle: 'Venedik',
    country: 'İtalya',
    city: 'Venedik',
    flag: '🇮🇹',
    description:
      'Ara sokaklarda kaybolmak, Venedik\'in gerçek ruhunu keşfetmenin en iyi yolu. Gondol turu klasiğin ötesinde; suların sessizliğinde huzur buldum.',
    shortDescription: 'Kanallar, köprüler ve zamansız bir güzellik.',
    coordinates: { lat: 45.4408, lng: 12.3155 },
    images: [],
    visitedDate: 'Mayıs 2024',
    day: 6,
    order: 6,
    featured: true,
    tags: ['romantik', 'gondol', 'mimari'],
    rating: 5,
    routeGroup: 'italya-2024',
    pois: [
      { id: 'venedik-rialto', name: 'Rialto Köprüsü', type: 'landmark', coordinates: { lat: 45.4381, lng: 12.3358 }, note: 'Gün batımında buradan kanal manzarası eşsiz.' },
      { id: 'venedik-marco', name: 'San Marco Meydanı', type: 'landmark', coordinates: { lat: 45.4343, lng: 12.3388 }, note: 'Kalabalık ama görkemli. Campanile\'ye çık.' },
      { id: 'venedik-florian', name: 'Caffè Florian', type: 'cafe', coordinates: { lat: 45.4340, lng: 12.3383 }, note: '1720\'den beri açık, dünyanın en eski kafelerinden.' },
      { id: 'venedik-burano', name: 'Burano Adası', type: 'viewpoint', coordinates: { lat: 45.4853, lng: 12.4168 }, note: 'Rengarenk evleriyle fotoğraf cenneti. Vapurla 40 dk.' }
    ]
  },

  // ═══════════════════════════════════════
  // FRANSa 2023
  // ═══════════════════════════════════════
  {
    id: 'paris-2023',
    title: 'Paris — Işıklar Şehri',
    shortTitle: 'Paris',
    country: 'Fransa',
    city: 'Paris',
    flag: '🇫🇷',
    description:
      'Sonbahar Paris\'i bambaşka. Eyfel Kulesi\'nden akşam ışıklarında şehri izlemek ve sıcak bir kahve eşliğinde Seine nehri kıyısında yürümek unutulmaz bir deneyim.',
    shortDescription: 'Sanat, gastronomi ve romantizmin başkenti.',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    images: [],
    visitedDate: 'Kasım 2023',
    day: 1,
    order: 7,
    featured: true,
    tags: ['sanat', 'yemek', 'kültür'],
    rating: 4,
    routeGroup: 'fransa-2023',
    pois: [
      { id: 'paris-eiffel', name: 'Eyfel Kulesi', type: 'landmark', coordinates: { lat: 48.8584, lng: 2.2945 }, note: 'Akşam ışıkları saatte bir yanıp sönüyor, kaçırma.' },
      { id: 'paris-louvre', name: 'Louvre Müzesi', type: 'museum', coordinates: { lat: 48.8606, lng: 2.3376 }, note: 'Bir günde bitiremezsin. Mona Lisa\'yı görmek istersen sabah git.' },
      { id: 'paris-montmartre', name: 'Montmartre', type: 'viewpoint', coordinates: { lat: 48.8867, lng: 2.3431 }, note: 'Sacré-Cœur\'den Paris manzarası ve sokak sanatçıları.' },
      { id: 'paris-shakespeare', name: 'Shakespeare & Company', type: 'shop', coordinates: { lat: 48.8526, lng: 2.3471 }, note: 'Efsanevi kitapçı. Notre-Dame\'ın tam karşısında.' },
      { id: 'paris-cafe-flore', name: 'Café de Flore', type: 'cafe', coordinates: { lat: 48.8540, lng: 2.3326 }, note: 'Sartre ve Beauvoir\'ın uğrak yeri. Sıcak çikolata harika.' }
    ]
  },
  {
    id: 'strazburg-2023',
    title: 'Strazburg — Avrupa\'nın Kalbi',
    shortTitle: 'Strazburg',
    country: 'Fransa',
    city: 'Strazburg',
    flag: '🇫🇷',
    description:
      'Fransız ve Alman kültürünün iç içe geçtiği büyüleyici bir şehir. Petite France mahallesi masalsı kanalları ve ahşap evleriyle kartpostaldan fırlamış gibi.',
    shortDescription: 'Avrupa\'nın kalbi, masalsı kanallar.',
    coordinates: { lat: 48.5734, lng: 7.7521 },
    images: [],
    visitedDate: 'Kasım 2023',
    day: 2,
    order: 8,
    featured: false,
    tags: ['mimari', 'kültür', 'yemek'],
    rating: 4,
    routeGroup: 'fransa-2023',
    pois: [
      { id: 'strazburg-petite', name: 'Petite France', type: 'viewpoint', coordinates: { lat: 48.5800, lng: 7.7410 }, note: 'Yarı ahşap evler ve kanallar. Sabah erken saatlerde sessiz ve büyüleyici.' },
      { id: 'strazburg-katedral', name: 'Strazburg Katedrali', type: 'landmark', coordinates: { lat: 48.5818, lng: 7.7510 }, note: 'Gotik mimarinin şaheseri. Astronomik saati kaçırma.' },
      { id: 'strazburg-tarte', name: 'Tarte Flambée', type: 'restaurant', coordinates: { lat: 48.5790, lng: 7.7480 }, note: 'Alsas mutfağının vazgeçilmezi. Geleneksel winstub\'larda dene.' }
    ]
  },

  // ═══════════════════════════════════════
  // HOLLANDA 2023
  // ═══════════════════════════════════════
  {
    id: 'amsterdam-2023',
    title: 'Amsterdam — Kanallar ve Sanat',
    shortTitle: 'Amsterdam',
    country: 'Hollanda',
    city: 'Amsterdam',
    flag: '🇳🇱',
    description:
      'Bisiklet trafiğine alışmak biraz zorlasa da şehri bu şekilde deneyimlemek en ideali. Müzeleri, kanalları ve dinamik sanat kültürüyle çok keyifli bir şehir.',
    shortDescription: 'Kanallar, bisikletler ve canlı kültür.',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    images: [],
    visitedDate: 'Yaz 2023',
    day: 1,
    order: 9,
    featured: false,
    tags: ['müze', 'bisiklet', 'kültür'],
    rating: 4,
    routeGroup: 'hollanda-2023',
    pois: [
      { id: 'ams-rijks', name: 'Rijksmuseum', type: 'museum', coordinates: { lat: 52.3600, lng: 4.8852 }, note: 'Gece Devriyesi tablosu tek başına ziyareti hak ediyor.' },
      { id: 'ams-anne', name: 'Anne Frank Evi', type: 'museum', coordinates: { lat: 52.3752, lng: 4.8840 }, note: 'Online bilet al, kuyruk çok uzun. Dokunaklı bir deneyim.' },
      { id: 'ams-vondelpark', name: 'Vondelpark', type: 'park', coordinates: { lat: 52.3580, lng: 4.8686 }, note: 'Bisikletle gezmek için ideal. Yazın açık hava konserleri var.' }
    ]
  },
  {
    id: 'zaanse-schans-2023',
    title: 'Zaanse Schans — Yel Değirmenleri',
    shortTitle: 'Zaanse Schans',
    country: 'Hollanda',
    city: 'Zaanse Schans',
    flag: '🇳🇱',
    description:
      'Amsterdam\'dan kısa bir tren yolculuğuyla ulaşılan bu açık hava müzesi, Hollanda\'nın klasik kartpostal görüntüsünü sunuyor. Yeşillikler içinde yel değirmenleri ve tahta evler.',
    shortDescription: 'Tarihi yel değirmenleri.',
    coordinates: { lat: 52.4736, lng: 4.7697 },
    images: [],
    visitedDate: 'Yaz 2023',
    day: 2,
    order: 10,
    featured: false,
    tags: ['doğa', 'tarih', 'köy'],
    rating: 3,
    routeGroup: 'hollanda-2023',
    pois: [
      { id: 'zaanse-degirmen', name: 'De Kat Yel Değirmeni', type: 'landmark', coordinates: { lat: 52.4730, lng: 4.7690 }, note: 'Çalışan bir boya değirmeni. İçine girip mekanizmayı görebilirsin.' },
      { id: 'zaanse-peynir', name: 'Catharina Hoeve Peynir Çiftliği', type: 'shop', coordinates: { lat: 52.4740, lng: 4.7710 }, note: 'Hollanda peyniri tadımı yapabilirsin. Gouda ve Edam çeşitleri harika.' }
    ]
  },

  // ═══════════════════════════════════════
  // ALMANYA
  // ═══════════════════════════════════════
  {
    id: 'koln-2023',
    title: 'Köln — Ren Nehri Kıyısında',
    shortTitle: 'Köln',
    country: 'Almanya',
    city: 'Köln',
    flag: '🇩🇪',
    description:
      'Köln Katedrali karşısında ilk duruşta büyüleniyorsun. Ren nehri kıyısında yürüyüş, eski şehrin dar sokaklarında Kölsch birası eşliğinde geçen akşamlar unutulmaz.',
    shortDescription: 'Ren nehri kıyısındaki tarihi şehir.',
    coordinates: { lat: 50.9375, lng: 6.9603 },
    images: [],
    visitedDate: '2023',
    day: 1,
    order: 11,
    featured: false,
    tags: ['tarih', 'mimari', 'kültür'],
    rating: 3,
    routeGroup: 'almanya-2023',
    pois: [
      { id: 'koln-dom', name: 'Köln Katedrali (Dom)', type: 'landmark', coordinates: { lat: 50.9413, lng: 6.9583 }, note: 'Gotik mimarinin doruk noktası. 533 basamakla güney kulesine çık.' },
      { id: 'koln-altstadt', name: 'Altstadt (Eski Şehir)', type: 'restaurant', coordinates: { lat: 50.9380, lng: 6.9610 }, note: 'Geleneksel Brauhaus\'larda Kölsch birası dene. Küçük bardaklarda gelir.' },
      { id: 'koln-hohenzollern', name: 'Hohenzollern Köprüsü', type: 'viewpoint', coordinates: { lat: 50.9412, lng: 6.9650 }, note: 'Binlerce aşk kilidiyle kaplı köprüden Ren manzarası.' }
    ]
  },

  // ═══════════════════════════════════════
  // İSVİÇRE
  // ═══════════════════════════════════════
  {
    id: 'basel-2023',
    title: 'Basel — Kültür ve Sanat Şehri',
    shortTitle: 'Basel',
    country: 'İsviçre',
    city: 'Basel',
    flag: '🇨🇭',
    description:
      'Üç ülkenin sınırında (İsviçre, Almanya, Fransa) konumlanan Basel, müze yoğunluğuyla Avrupa\'nın en zengin kültür şehirlerinden. Ren nehri kıyısında sakin ve sofistike.',
    shortDescription: 'Kültür ve sanat şehri.',
    coordinates: { lat: 47.5596, lng: 7.5886 },
    images: [],
    visitedDate: '2023',
    day: 1,
    order: 12,
    featured: false,
    tags: ['sanat', 'müze', 'kültür'],
    rating: 3,
    routeGroup: 'isvicre-2023',
    pois: [
      { id: 'basel-munster', name: 'Basel Münster', type: 'landmark', coordinates: { lat: 47.5560, lng: 7.5920 }, note: 'Kırmızı kumtaşından gotik katedral. Terası Ren\'e bakıyor.' },
      { id: 'basel-kunstmuseum', name: 'Kunstmuseum Basel', type: 'museum', coordinates: { lat: 47.5545, lng: 7.5935 }, note: 'Dünyanın en eski halka açık sanat koleksiyonlarından.' }
    ]
  },
  {
    id: 'luzern-2023',
    title: 'Luzern — Göller ve Dağlar',
    shortTitle: 'Luzern',
    country: 'İsviçre',
    city: 'Luzern',
    flag: '🇨🇭',
    description:
      'Luzern Gölü\'nün turkuaz sularıyla çevrili bu şehir, İsviçre\'nin en fotojenik köşelerinden. Kapellbrücke üzerinden yürürken, arka planda Pilatus Dağı silueti nefes kesiyor.',
    shortDescription: 'Göller ve dağlar şehri.',
    coordinates: { lat: 47.0502, lng: 8.3093 },
    images: [],
    visitedDate: '2023',
    day: 2,
    order: 13,
    featured: true,
    tags: ['doğa', 'göl', 'dağ'],
    rating: 4,
    routeGroup: 'isvicre-2023',
    pois: [
      { id: 'luzern-kapell', name: 'Kapellbrücke', type: 'landmark', coordinates: { lat: 47.0514, lng: 8.3075 }, note: 'Avrupa\'nın en eski kapalı ahşap köprüsü. İçindeki tablolara dikkat et.' },
      { id: 'luzern-pilatus', name: 'Pilatus Dağı', type: 'viewpoint', coordinates: { lat: 46.9790, lng: 8.2543 }, note: 'Dişli trenle zirveye çık. Alpler\'in 360° panoraması.' },
      { id: 'luzern-lowendenkmal', name: 'Aslan Anıtı', type: 'landmark', coordinates: { lat: 47.0585, lng: 8.3108 }, note: 'Mark Twain\'in "dünyanın en hüzünlü taş parçası" dediği heykel.' }
    ]
  },

  // ═══════════════════════════════════════
  // PORTEKİZ
  // ═══════════════════════════════════════
  {
    id: 'lizbon-2023',
    title: 'Lizbon — Yedi Tepe Şehri',
    shortTitle: 'Lizbon',
    country: 'Portekiz',
    city: 'Lizbon',
    flag: '🇵🇹',
    description:
      'Yedi tepe üzerine kurulmuş Lizbon, dar sokaklarında tramvay sesleri, azulejo kaplamalı cepheleri ve fado müziğiyle ruhunuza işliyor. Pastéis de Belém tatmadan dönmeyin.',
    shortDescription: 'Portekiz\'in başkenti.',
    coordinates: { lat: 38.7223, lng: -9.1393 },
    images: [],
    visitedDate: '2023',
    day: 1,
    order: 14,
    featured: true,
    tags: ['kültür', 'yemek', 'tarih'],
    rating: 5,
    routeGroup: 'portekiz-2023',
    pois: [
      { id: 'lizbon-belem', name: 'Belém Kulesi', type: 'landmark', coordinates: { lat: 38.6916, lng: -9.2160 }, note: 'Keşifler çağının simgesi. Yanındaki pastaneden pastéis de nata al.' },
      { id: 'lizbon-alfama', name: 'Alfama Mahallesi', type: 'viewpoint', coordinates: { lat: 38.7110, lng: -9.1300 }, note: 'Lizbon\'un en eski mahallesi. Dar sokaklar ve fado barları.' },
      { id: 'lizbon-tram28', name: 'Tramvay 28', type: 'landmark', coordinates: { lat: 38.7139, lng: -9.1365 }, note: 'Sarı tramvayla şehir turu. Sabah erken bin, çok kalabalık oluyor.' },
      { id: 'lizbon-timeout', name: 'Time Out Market', type: 'restaurant', coordinates: { lat: 38.7069, lng: -9.1459 }, note: 'Lizbon\'un en iyi restoranları tek çatı altında. Mutlaka uğra.' }
    ]
  },

  // ═══════════════════════════════════════
  // İSPANYA — ENDÜLÜS 2022
  // ═══════════════════════════════════════
  {
    id: 'sevilla-2022',
    title: 'Sevilla — Flamenko\'nun Kalbi',
    shortTitle: 'Sevilla',
    country: 'İspanya',
    city: 'Sevilla',
    flag: '🇪🇸',
    description:
      'Flamenko ritminin sokaklarda hissedildiği, portakal ağaçlarıyla kaplı bu şehir Endülüs ruhunun en canlı hali. Real Alcázar\'ın detaylı süslemeleri ve Guadalquivir kıyısındaki akşamlar unutulmaz.',
    shortDescription: 'Flamenko, portakal ağaçları ve Endülüs ruhu.',
    coordinates: { lat: 37.3886, lng: -5.9823 },
    images: [],
    visitedDate: 'Güz 2022',
    day: 1,
    order: 15,
    featured: true,
    tags: ['tarih', 'mimari', 'kültür'],
    rating: 5,
    routeGroup: 'endulus-2022',
    pois: [
      { id: 'sevilla-alcazar', name: 'Real Alcázar', type: 'landmark', coordinates: { lat: 37.3833, lng: -5.9901 }, note: 'Game of Thrones\'un Dorne sahneleri burada çekildi.' },
      { id: 'sevilla-katedral', name: 'Sevilla Katedrali & Giralda', type: 'landmark', coordinates: { lat: 37.3862, lng: -5.9929 }, note: 'Dünyanın en büyük gotik katedrali. Giralda kulesine çık.' },
      { id: 'sevilla-plaza', name: 'Plaza de España', type: 'viewpoint', coordinates: { lat: 37.3772, lng: -5.9869 }, note: 'Yarım daire şeklinde muazzam meydan. Kürek çekebilirsin.' },
      { id: 'sevilla-flamenco', name: 'Triana Mahallesi', type: 'restaurant', coordinates: { lat: 37.3830, lng: -6.0020 }, note: 'Flamenko\'nun doğduğu mahalle. Akşam tablao\'ya git.' }
    ]
  },
  {
    id: 'granada-2022',
    title: 'Granada — Elhamra\'nın Gölgesinde',
    shortTitle: 'Granada',
    country: 'İspanya',
    city: 'Granada',
    flag: '🇪🇸',
    description:
      'Elhamra Sarayı\'nın akıllara durgunluk veren detaylı mimarisi karşısında büyülenmemek imkânsız. Sierra Nevada\'nın eteklerinde, Doğu ve Batı\'nın buluştuğu eşsiz bir şehir.',
    shortDescription: 'Elhamra Sarayı ve Endülüs mirası.',
    coordinates: { lat: 37.1773, lng: -3.5986 },
    images: [],
    visitedDate: 'Güz 2022',
    day: 2,
    order: 16,
    featured: true,
    tags: ['tarih', 'mimari', 'kültür'],
    rating: 5,
    routeGroup: 'endulus-2022',
    pois: [
      { id: 'granada-alhambra', name: 'Elhamra Sarayı', type: 'landmark', coordinates: { lat: 37.1761, lng: -3.5881 }, note: 'Biletler haftalar öncesinden tükeniyor, erken al.' },
      { id: 'granada-albaicin', name: 'Albaicín Mahallesi', type: 'viewpoint', coordinates: { lat: 37.1809, lng: -3.5926 }, note: 'Elhamra\'nın en güzel fotoğrafı buradan çekilir.' },
      { id: 'granada-mirador', name: 'Mirador de San Nicolás', type: 'viewpoint', coordinates: { lat: 37.1815, lng: -3.5928 }, note: 'Gün batımında Elhamra manzarası efsane. Erken gel yer kap.' }
    ]
  },
  {
    id: 'cordoba-2022',
    title: 'Cordoba — Mezquita\'nın Şehri',
    shortTitle: 'Cordoba',
    country: 'İspanya',
    city: 'Cordoba',
    flag: '🇪🇸',
    description:
      'Mezquita\'nın içine adım attığınızda nefesınız kesiliyor — yüzlerce sütun ve at nalı kemerlerin oluşturduğu orman etkisi benzersiz. Yahudi Mahallesi\'nin dar sokaklarında kaybolmak ayrı bir keyif.',
    shortDescription: 'Tarihi Endülüs şehri.',
    coordinates: { lat: 37.8882, lng: -4.7794 },
    images: [],
    visitedDate: 'Güz 2022',
    day: 3,
    order: 17,
    featured: false,
    tags: ['tarih', 'mimari'],
    rating: 4,
    routeGroup: 'endulus-2022',
    pois: [
      { id: 'cordoba-mezquita', name: 'Mezquita (Cami-Katedral)', type: 'landmark', coordinates: { lat: 37.8789, lng: -4.7794 }, note: 'At nalı kemerler hipnotize ediyor. Sabah ilk saat git.' },
      { id: 'cordoba-juderia', name: 'Judería (Yahudi Mahallesi)', type: 'landmark', coordinates: { lat: 37.8797, lng: -4.7820 }, note: 'Beyaz badanalı dar sokaklar ve çiçekli avlular.' },
      { id: 'cordoba-alcazar', name: 'Alcázar de los Reyes Cristianos', type: 'park', coordinates: { lat: 37.8769, lng: -4.7826 }, note: 'Bahçeleri muhteşem. Havuzlar ve çeşmelerle dolu.' }
    ]
  },

  // ═══════════════════════════════════════
  // BALKANLAR 2022
  // ═══════════════════════════════════════
  {
    id: 'saraybosna-2022',
    title: 'Saraybosna — Kültürlerin Buluşma Noktası',
    shortTitle: 'Saraybosna',
    country: 'Bosna Hersek',
    city: 'Saraybosna',
    flag: '🇧🇦',
    description:
      'Osmanlı, Avusturya-Macaristan ve modern izlerin iç içe geçtiği benzersiz bir şehir. Başçarşı\'da cezve kahvesi içerken kendini evinde hissediyorsun.',
    shortDescription: 'Kültürlerin buluşma noktası.',
    coordinates: { lat: 43.8563, lng: 18.4131 },
    images: [],
    visitedDate: 'Bahar 2022',
    day: 1,
    order: 18,
    featured: false,
    tags: ['tarih', 'kültür', 'yemek'],
    rating: 4,
    routeGroup: 'balkanlar-2022',
    pois: [
      { id: 'saray-bascarsija', name: 'Başçarşı', type: 'shop', coordinates: { lat: 43.8598, lng: 18.4313 }, note: 'Saraybosna\'nın kalbi. Cezve kahvesi ve bakır işçiliği.' },
      { id: 'saray-sebilj', name: 'Sebilj Çeşmesi', type: 'landmark', coordinates: { lat: 43.8597, lng: 18.4311 }, note: 'Başçarşı\'nın sembolü. Güvercinlerle dolu meydan.' },
      { id: 'saray-tunnel', name: 'Tünel Müzesi', type: 'museum', coordinates: { lat: 43.8310, lng: 18.3662 }, note: 'Kuşatma döneminden kalma tünel. Dokunaklı bir deneyim.' }
    ]
  },
  {
    id: 'mostar-2022',
    title: 'Mostar — Köprünün İki Yakası',
    shortTitle: 'Mostar',
    country: 'Bosna Hersek',
    city: 'Mostar',
    flag: '🇧🇦',
    description:
      'Stari Most (Eski Köprü) göründüğü anda zaman duruyor. Neretva nehri üzerindeki bu ikonik köprü, yeniden inşa edilmiş olmasına rağmen hâlâ tarihin ağırlığını taşıyor.',
    shortDescription: 'Tarihi köprüsü ile ünlü.',
    coordinates: { lat: 43.3373, lng: 17.8153 },
    images: [],
    visitedDate: 'Bahar 2022',
    day: 2,
    order: 19,
    featured: true,
    tags: ['tarih', 'mimari'],
    rating: 4,
    routeGroup: 'balkanlar-2022',
    pois: [
      { id: 'mostar-bridge', name: 'Stari Most (Eski Köprü)', type: 'landmark', coordinates: { lat: 43.3373, lng: 17.8153 }, note: 'Köprüden atlayan yüzücüleri izlemek bir gelenek.' },
      { id: 'mostar-koski', name: 'Koski Mehmed Paşa Camii', type: 'viewpoint', coordinates: { lat: 43.3370, lng: 17.8145 }, note: 'Minaresinden köprü ve Neretva manzarası muhteşem.' }
    ]
  },
  {
    id: 'kotor-2022',
    title: 'Kotor — Adriyatik\'in Gizli Cenneti',
    shortTitle: 'Kotor',
    country: 'Karadağ',
    city: 'Kotor',
    flag: '🇲🇪',
    description:
      'Kotor Körfezi\'ne girdiğinizde fiyortları andıran manzaralar karşılıyor. Surlarla çevrili eski şehir, kedileri ve dar taş sokaklarıyla masalsı bir atmosfer sunuyor.',
    shortDescription: 'Tarihi körfez şehri.',
    coordinates: { lat: 42.4247, lng: 18.7712 },
    images: [],
    visitedDate: 'Bahar 2022',
    day: 3,
    order: 20,
    featured: false,
    tags: ['doğa', 'tarih', 'deniz'],
    rating: 4,
    routeGroup: 'balkanlar-2022',
    pois: [
      { id: 'kotor-surlar', name: 'Kotor Surları', type: 'viewpoint', coordinates: { lat: 42.4270, lng: 18.7720 }, note: '1.350 basamak çık, körfez manzarası nefes kesici.' },
      { id: 'kotor-oldtown', name: 'Eski Şehir', type: 'landmark', coordinates: { lat: 42.4247, lng: 18.7712 }, note: 'Labirent gibi sokaklar, kediler her köşede. Kaybol ve keşfet.' }
    ]
  },
  {
    id: 'uskup-2022',
    title: 'Üsküp — Vardar Kıyısında',
    shortTitle: 'Üsküp',
    country: 'Makedonya',
    city: 'Üsküp',
    flag: '🇲🇰',
    description:
      'Osmanlı mirası eski çarşısı, modern heykelleri ve Vardar nehri boyunca uzanan canlı atmosferiyle Üsküp sürpriz dolu. Eski Çarşı\'da yürürken İstanbul\'u hatırlıyorsun.',
    shortDescription: 'Vardar nehri kıyısındaki başkent.',
    coordinates: { lat: 41.9973, lng: 21.4280 },
    images: [],
    visitedDate: 'Bahar 2022',
    day: 4,
    order: 21,
    featured: false,
    tags: ['tarih', 'kültür'],
    rating: 3,
    routeGroup: 'balkanlar-2022',
    pois: [
      { id: 'uskup-carsija', name: 'Eski Çarşı', type: 'shop', coordinates: { lat: 42.0000, lng: 21.4370 }, note: 'Balkanlar\'ın en büyük Osmanlı çarşılarından. Bakırcılar çarşısını gez.' },
      { id: 'uskup-tas-kopru', name: 'Taş Köprü', type: 'landmark', coordinates: { lat: 41.9970, lng: 21.4320 }, note: 'Vardar üzerinde 15. yüzyıldan kalma Osmanlı köprüsü.' }
    ]
  },
  {
    id: 'ohri-2022',
    title: 'Ohri — Balkanlar\'ın İncisi',
    shortTitle: 'Ohri',
    country: 'Makedonya',
    city: 'Ohri',
    flag: '🇲🇰',
    description:
      'Ohri Gölü\'nün berrak suları ve kıyısındaki tarihi kiliselerle bu şehir Balkanlar\'ın en huzurlu köşesi. Gün batımında gölün renkleri değişirken zamandan kopuyorsun.',
    shortDescription: 'Balkanlar\'ın incisi.',
    coordinates: { lat: 41.1170, lng: 20.8016 },
    images: [],
    visitedDate: 'Bahar 2022',
    day: 5,
    order: 22,
    featured: false,
    tags: ['doğa', 'göl', 'tarih'],
    rating: 4,
    routeGroup: 'balkanlar-2022',
    pois: [
      { id: 'ohri-gol', name: 'Ohri Gölü', type: 'viewpoint', coordinates: { lat: 41.1100, lng: 20.7950 }, note: 'Balkanlardaki en huzurlu yer. Gün batımı inanılmaz.' },
      { id: 'ohri-samuil', name: 'Samuel Kalesi', type: 'landmark', coordinates: { lat: 41.1133, lng: 20.7927 }, note: 'Kaleden göl ve şehir panoraması. Sabah erken git.' },
      { id: 'ohri-jovan', name: 'Sveti Jovan Kaneo', type: 'landmark', coordinates: { lat: 41.1100, lng: 20.7880 }, note: 'Gölün kıyısındaki ikonik kilise. Makedonya\'nın en fotoğraflanan yeri.' }
    ]
  }
]
