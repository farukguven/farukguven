import {
  ArmchairIcon,
  BookmarkIcon,
  CameraIcon,
  NavigationIcon,
  PencilLineIcon,
  SparklesIcon,
  Wand2Icon,
  ClapperboardIcon,
  WrenchIcon
} from 'lucide-react'

export const TWEETS_COLLECTION_ID = 15896982

export const COLLECTION_IDS = [
  18259129,
  15968768,
  23598938,
  16949672,
  15807896,
  15807897,
  15969648,
  16338467,
  TWEETS_COLLECTION_ID,
  25589709,
  17139082,
  22029101,
  39696243
]

export const LINKS = [
  {
    href: '/',
    label: 'Ana Sayfa',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/writing',
    label: 'Yazılar',
    icon: <PencilLineIcon size={16} />
  },
  {
    href: '/izler',
    label: 'İzler',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/fotograflar',
    label: 'Objektifimden',
    icon: <CameraIcon size={16} />
  },
  {
    href: '/ekipmanlar',
    label: 'Çalışma Alanım',
    icon: <WrenchIcon size={16} />
  },
  {
    href: '/gorsel-seruven',
    label: 'Görsel Serüven',
    icon: <ClapperboardIcon size={16} />
  },
  {
    href: '/bookmarks',
    label: 'Yer İmleri',
    icon: <BookmarkIcon size={16} />
  }
]

export const SOCIAL_LINKS = [
  {
    href: 'https://instagram.com/dfarukguven',
    label: 'Instagram',
    icon: 'instagram'
  },
  {
    href: 'https://youtube.com/@farukguven',
    label: 'YouTube',
    icon: 'youtube'
  },
  {
    href: 'mailto:hello@farukguven.com',
    label: 'Email',
    icon: 'mail'
  }
]

export const WORKSPACE_ITEMS = [
  {
    title: 'Bambu Lab H2S Full Combo',
    url: 'https://store.bambulab.com/',
    specs: 'Akıllı 3D Yazıcı Combo Sistemi'
  },
  {
    title: 'Apple iPad mini 7',
    url: 'https://www.apple.com/ipad-mini/',
    specs: 'A17 Pro Çip, 8.3 inç Kompakt Tablet'
  },
  {
    title: 'Synology DS723+',
    url: 'https://www.synology.com/en-global/products/DS723+',
    specs: '2 Yuvalı Yüksek Performanslı NAS'
  },
  {
    title: 'Lexar SL500 4TB Taşınabilir SSD',
    url: 'https://www.lexar.com/product/lexar-sl500-portable-ssd/',
    specs: 'Metal Kasa, 2000MB/s (LSL500M004T)'
  },
  {
    title: 'Lexar Professional Go 2TB',
    url: 'https://www.lexar.com/product/lexar-professional-go-portable-ssd-with-hub/',
    specs: 'Video Çekimi İçin Kompakt SSD Seti'
  },
  {
    title: 'SanDisk Extreme PRO V2 4TB',
    url: 'https://www.westerndigital.com/products/portable-drives/sandisk-extreme-pro-usb-3-2-ssd',
    specs: 'Zırhlı ve Hızlı NVMe Taşınabilir SSD'
  },
  {
    title: 'Anker SOLIX C300X',
    url: 'https://www.anker.com/products/a1728-c300',
    specs: 'Kompakt Taşınabilir Güç İstasyonu'
  },
  {
    title: 'Zeuslap OL133ED 13.3"',
    url: 'https://zeuslap.com/products/ol133ed',
    specs: '13.3 inç Taşınabilir OLED Monitör'
  }
]

export const SHOOTING_GEAR_ITEMS = [
  {
    title: 'Sony A7C II',
    url: 'https://electronics.sony.com/imaging/interchangeable-lens-cameras/all-interchangeable-lens-cameras/p/ilce7cm2-b',
    specs: 'Full-Frame Aynasız Makine, 33MP'
  },
  {
    title: 'Sony FE 35mm f/1.4 GM Lens',
    url: 'https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel35f14gm',
    specs: 'G Master Serisi Geniş Açılı Lens'
  },
  {
    title: 'Tamron 35-150mm f/2-2.8 Di III VXD',
    url: 'https://tamron.com/global/consumer/lenses/a058/',
    specs: 'Çok Amaçlı Portre ve Seyahat Lensi'
  },
  {
    title: 'DJI Mini 5 Pro',
    url: 'https://www.dji.com/global/mini-5-pro',
    specs: 'Kompakt Drone, 4K HDR Video'
  },
  {
    title: 'Insta360 X3',
    url: 'https://www.insta360.com/product/insta360-x3',
    specs: '360° Aksiyon Kamerası, 5.7K'
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark'
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day."

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}
