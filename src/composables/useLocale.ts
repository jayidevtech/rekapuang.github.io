import { computed, ref } from 'vue'

export type Locale = 'id' | 'en'

type Dict = Record<string, string>

const messages: Record<Locale, Dict> = {
  id: {
    'nav.features': 'Fitur',
    'nav.benefits': 'Keuntungan',
    'nav.pricing': 'Harga',
    'nav.download': 'Download',
    'nav.contact': 'Kontak',
    'theme.enableDark': 'Aktifkan mode gelap',
    'theme.enableLight': 'Aktifkan mode terang',
    'theme.darkMode': 'Mode Gelap',
    'theme.lightMode': 'Mode Terang',

    'hero.title': 'Kelola Keuangan Anda dengan Mudah',
    'hero.subtitle': 'Aplikasi manajemen keuangan pribadi yang powerful, gratis, dan tanpa iklan. Catat, analisis, dan kontrol pengeluaran Anda dengan semudah satu sentuhan.',
    'hero.ctaDownload': 'Download Sekarang',
    'hero.ctaLearn': 'Pelajari Lebih Lanjut',

    'section.features.title': 'Fitur-Fitur Unggulan',
    'section.features.subtitle': 'Semua yang Anda butuhkan untuk mengelola keuangan pribadi dengan sempurna',
    'section.benefits.title': 'Mengapa Pilih Rekap Uang?',
    'section.benefits.subtitle': 'Keunggulan yang membedakan kami dari kompetitor lain',
    'section.pricing.title': 'Pilih Paket yang Sesuai',
    'section.pricing.subtitle': 'Free lifetime untuk kebutuhan dasar. Premium lifetime untuk fitur tanpa batas.',
    'section.comparison.title': 'Perbandingan dengan Kompetitor',
    'section.comparison.subtitle': 'Lihat mengapa Rekap Uang yang terbaik',
    'section.testimonials.title': 'Apa Kata Pengguna?',
    'section.testimonials.subtitle': 'Ribuan pengguna puas telah merasakan manfaatnya',
    'section.download.title': 'Mulai Kelola Keuangan Hari Ini!',
    'section.download.subtitle': 'Sekarang tersedia untuk Android di Google Play Store',
    'section.faq.title': 'Pertanyaan Umum (FAQ)',
    'section.faq.subtitle': 'Jawaban cepat untuk pertanyaan yang sering diajukan',
    'section.contact.title': 'Hubungi Kami',
    'section.contact.subtitle': 'Ada pertanyaan atau feedback? Kami siap membantu!',

    'footer.brandDesc': 'Aplikasi manajemen keuangan pribadi yang powerful, gratis, dan aman. Kelola keuanganmu dengan mudah dan raih kebebasan finansial bersama Rekap Uang.',
    'footer.navigation': 'Navigasi',
    'footer.product': 'Produk',
    'footer.legal': 'Legal',
    'footer.downloadAndroid': 'Download Android',
    'footer.downloadIos': 'Download iOS',
    'footer.changelog': 'Changelog',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.by': 'by',
    'footer.forFreedom': 'for your financial freedom',

    'iosPopup.title': 'iOS Coming Soon',
    'iosPopup.body': 'Versi iOS sedang dalam proses persiapan dan akan segera hadir di App Store. Nantikan update berikutnya.',
    'iosPopup.ok': 'Mengerti',

    'download.androidBtn': 'Download di Google Play',
    'download.iosComing': 'Segera Hadir di App Store',

    'common.backHome': 'Kembali ke Beranda',
    'common.languageLabel': 'Ganti bahasa',

    'changelog.title': 'Changelog Rekap Uang',
    'changelog.subtitle': 'Riwayat pembaruan fitur, peningkatan, dan perbaikan aplikasi.',
  },
  en: {
    'nav.features': 'Features',
    'nav.benefits': 'Benefits',
    'nav.pricing': 'Pricing',
    'nav.download': 'Download',
    'nav.contact': 'Contact',
    'theme.enableDark': 'Enable dark mode',
    'theme.enableLight': 'Enable light mode',
    'theme.darkMode': 'Dark Mode',
    'theme.lightMode': 'Light Mode',

    'hero.title': 'Manage Your Finances with Ease',
    'hero.subtitle': 'A powerful, free, ad-free personal finance app. Track, analyze, and control your spending with just a few taps.',
    'hero.ctaDownload': 'Download Now',
    'hero.ctaLearn': 'Learn More',

    'section.features.title': 'Key Features',
    'section.features.subtitle': 'Everything you need to manage your personal finances perfectly',
    'section.benefits.title': 'Why Choose Rekap Uang?',
    'section.benefits.subtitle': 'Advantages that set us apart from competitors',
    'section.pricing.title': 'Choose the Right Plan',
    'section.pricing.subtitle': 'Lifetime free for basic needs. Lifetime premium for unlimited features.',
    'section.comparison.title': 'Competitor Comparison',
    'section.comparison.subtitle': 'See why Rekap Uang is the best choice',
    'section.testimonials.title': 'What Users Say',
    'section.testimonials.subtitle': 'Thousands of happy users have felt the benefits',
    'section.download.title': 'Start Managing Your Money Today!',
    'section.download.subtitle': 'Now publicly available on Google Play Store for Android',
    'section.faq.title': 'Frequently Asked Questions',
    'section.faq.subtitle': 'Quick answers to common questions',
    'section.contact.title': 'Contact Us',
    'section.contact.subtitle': 'Have a question or feedback? We are here to help!',

    'footer.brandDesc': 'A powerful, free, and secure personal finance app. Manage your money easily and achieve financial freedom with Rekap Uang.',
    'footer.navigation': 'Navigation',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.downloadAndroid': 'Download Android',
    'footer.downloadIos': 'Download iOS',
    'footer.changelog': 'Changelog',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.by': 'by',
    'footer.forFreedom': 'for your financial freedom',

    'iosPopup.title': 'iOS Coming Soon',
    'iosPopup.body': 'The iOS version is currently in preparation and will be available on the App Store soon. Stay tuned for updates.',
    'iosPopup.ok': 'Got it',

    'download.androidBtn': 'Get it on Google Play',
    'download.iosComing': 'Coming Soon on the App Store',

    'common.backHome': 'Back to Home',
    'common.languageLabel': 'Change language',

    'changelog.title': 'Rekap Uang Changelog',
    'changelog.subtitle': 'History of app updates, improvements, and fixes.',
  },
}

const locale = ref<Locale>('en')

export function getPreferredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem('locale') as Locale | null
  if (saved === 'id' || saved === 'en') return saved

  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('id') ? 'id' : 'en'
}

function initLocale() {
  const saved = localStorage.getItem('locale') as Locale | null
  if (saved === 'id' || saved === 'en') {
    locale.value = saved
    return
  }

  // First visit: auto-detect from browser and persist as default locale.
  locale.value = getPreferredLocale()
  localStorage.setItem('locale', locale.value)
}

function setLocale(next: Locale) {
  locale.value = next
  localStorage.setItem('locale', next)
}

function toggleLocale() {
  setLocale(locale.value === 'id' ? 'en' : 'id')
}

function t(key: string) {
  return messages[locale.value][key] ?? messages.id[key] ?? key
}

export function useLocale() {
  return {
    locale: computed(() => locale.value),
    isEnglish: computed(() => locale.value === 'en'),
    t,
    setLocale,
    toggleLocale,
    initLocale,
  }
}
