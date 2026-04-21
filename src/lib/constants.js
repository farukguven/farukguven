import {
  BookmarkIcon,
  BookOpenIcon,
  CameraIcon,
  ClapperboardIcon,
  NavigationIcon,
  PencilLineIcon,
  SparklesIcon,
  WrenchIcon
} from 'lucide-react'

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
    href: '/izler',
    label: 'İzler',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/rafim',
    label: 'Rafım',
    icon: <BookOpenIcon size={16} />,
    disabled: true
  },
  {
    href: '/bookmarks',
    label: 'Yer İmleri',
    icon: <BookmarkIcon size={16} />,
    disabled: true
  }
]

// Girişimlerim - kendi kişisel projelerim / ürünlerim
// Şimdilik boş — Monipi canlıya alınınca buraya eklenir
export const GIRISIMLER = []

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

// Kullandığım yazılım araçları — çalışma alanına üçüncü collapsible olarak gider
export const SOFTWARE_ITEMS = [
  {
    category: 'Sistem Yönetimi',
    items: [
      { title: 'FortiGate', url: 'https://www.fortinet.com', specs: 'Güvenlik duvarı ve ağ yönetimi' },
      { title: 'Microsoft Azure', url: 'https://azure.microsoft.com', specs: 'Bulut altyapısı ve DevOps' },
      { title: 'Proxmox VE', url: 'https://www.proxmox.com', specs: 'Sanallaştırma platformu' },
      { title: 'Zabbix', url: 'https://www.zabbix.com', specs: 'Altyapı izleme ve uyarı' },
      { title: 'GLPI', url: 'https://glpi-project.org', specs: 'BT varlık ve destek yönetimi' },
      { title: 'Snipe-IT', url: 'https://snipeitapp.com', specs: 'Açık kaynak envanter yönetimi' }
    ]
  },
  {
    category: 'Geliştirme',
    items: [
      { title: 'VS Code', url: 'https://code.visualstudio.com', specs: 'Ana kod editörüm' },
      { title: 'OrbStack', url: 'https://orbstack.dev', specs: 'Mac için hafif Docker' },
      { title: 'GitHub', url: 'https://github.com', specs: 'Kod depolama ve iş birliği' },
      { title: 'Cursor', url: 'https://cursor.sh', specs: 'AI destekli kod editörü' }
    ]
  },
  {
    category: 'Tasarım & Video',
    items: [
      { title: 'Figma', url: 'https://www.figma.com', specs: 'Arayüz ve prototip tasarımı' },
      { title: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve', specs: 'Video düzenleme ve renk' },
      { title: 'Adobe Lightroom', url: 'https://www.adobe.com/products/photoshop-lightroom.html', specs: 'Fotoğraf düzenleme' }
    ]
  },
  {
    category: 'Yapay Zekâ',
    items: [
      { title: 'Claude', url: 'https://claude.ai', specs: 'Günlük AI asistanım' },
      { title: 'ChatGPT', url: 'https://chat.openai.com', specs: 'Çeşitli yardımcı görevler' },
      { title: 'Unreal Engine', url: 'https://www.unrealengine.com', specs: 'Gerçek zamanlı 3D ve animasyon' }
    ]
  },
  {
    category: 'Üretkenlik',
    items: [
      { title: 'Notion', url: 'https://www.notion.so', specs: 'Notlar ve proje yönetimi' },
      { title: 'Raycast', url: 'https://www.raycast.com', specs: 'Mac için verimlilik launcher\'ı' }
    ]
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
