import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useLocale, type Locale } from '@/composables/useLocale'

type SeoConfig = {
  basePath: string
  title: string
  description: string
  keywords?: string
  image: string
  structuredData: Record<string, unknown>
}

const BASE_URL = 'https://rekapuang.jayidev.tech'
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/ss/home.jpg`
const PRIVACY_OG_IMAGE = `${BASE_URL}/assets/ss/settings.jpg`
const TERMS_OG_IMAGE = `${BASE_URL}/assets/ss/settings-2.jpg`
const CHANGELOG_OG_IMAGE = `${BASE_URL}/assets/ss/onboarding.jpg`

function absoluteUrl(path: string) {
  return path === '/' ? BASE_URL : `${BASE_URL}${path}`
}

function localeToOgLocale(locale: Locale) {
  return locale === 'id' ? 'id_ID' : 'en_US'
}

function localizedPath(basePath: string, locale: Locale) {
  return basePath === '/' ? `/${locale}` : `/${locale}${basePath}`
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }
}

function upsertStructuredData(data: Record<string, unknown>) {
  const selector = 'script[type="application/ld+json"][data-seo="structured-data"]'
  let element = document.head.querySelector(selector) as HTMLScriptElement | null

  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.setAttribute('data-seo', 'structured-data')
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

export function useSeo() {
  const route = useRoute()
  const { locale } = useLocale()

  const currentSeo = computed<SeoConfig>(() => {
    const isEnglish = locale.value === 'en'
    const currentLocale = locale.value

    if (route.name === 'privacy-policy') {
      return {
        basePath: '/privacy-policy',
        title: isEnglish ? 'Privacy Policy & Data Security - Rekap Uang' : 'Kebijakan Privasi & Keamanan Data - Rekap Uang',
        description: isEnglish
          ? 'Read Rekap Uang privacy policy, data storage policy, security practices, and your rights as a user.'
          : 'Baca kebijakan privasi Rekap Uang, cara penyimpanan data, praktik keamanan, dan hak Anda sebagai pengguna.',
        image: PRIVACY_OG_IMAGE,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: isEnglish ? 'Privacy Policy & Data Security - Rekap Uang' : 'Kebijakan Privasi & Keamanan Data - Rekap Uang',
          description: isEnglish
            ? 'Read Rekap Uang privacy policy, data storage policy, security practices, and your rights as a user.'
            : 'Baca kebijakan privasi Rekap Uang, cara penyimpanan data, praktik keamanan, dan hak Anda sebagai pengguna.',
          url: absoluteUrl(localizedPath('/privacy-policy', currentLocale)),
          inLanguage: currentLocale,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Rekap Uang',
            url: BASE_URL,
          },
        },
      }
    }

    if (route.name === 'terms-of-service') {
      return {
        basePath: '/terms-of-service',
        title: isEnglish ? 'Terms of Service & License - Rekap Uang' : 'Syarat, Ketentuan & Lisensi - Rekap Uang',
        description: isEnglish
          ? 'Review the terms of service for using Rekap Uang, including license, responsibilities, and legal information.'
          : 'Pelajari syarat dan ketentuan penggunaan Rekap Uang, termasuk lisensi, tanggung jawab, dan informasi legal.',
        image: TERMS_OG_IMAGE,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: isEnglish ? 'Terms of Service & License - Rekap Uang' : 'Syarat, Ketentuan & Lisensi - Rekap Uang',
          description: isEnglish
            ? 'Review the terms of service for using Rekap Uang, including license, responsibilities, and legal information.'
            : 'Pelajari syarat dan ketentuan penggunaan Rekap Uang, termasuk lisensi, tanggung jawab, dan informasi legal.',
          url: absoluteUrl(localizedPath('/terms-of-service', currentLocale)),
          inLanguage: currentLocale,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Rekap Uang',
            url: BASE_URL,
          },
        },
      }
    }

    if (route.name === 'changelog') {
      return {
        basePath: '/changelog',
        title: isEnglish ? 'Release Notes & Updates - Rekap Uang' : 'Catatan Rilis & Update - Rekap Uang',
        description: isEnglish
          ? 'Track the latest Rekap Uang releases, feature updates, improvements, and bug fixes.'
          : 'Lihat riwayat rilis Rekap Uang, pembaruan fitur, peningkatan, dan perbaikan bug terbaru.',
        image: CHANGELOG_OG_IMAGE,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: isEnglish ? 'Rekap Uang Release Notes & Updates' : 'Catatan Rilis & Update Rekap Uang',
          description: isEnglish
            ? 'Track the latest Rekap Uang releases, feature updates, improvements, and bug fixes.'
            : 'Lihat riwayat rilis Rekap Uang, pembaruan fitur, peningkatan, dan perbaikan bug terbaru.',
          url: absoluteUrl(localizedPath('/changelog', currentLocale)),
          inLanguage: currentLocale,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Rekap Uang',
            url: BASE_URL,
          },
        },
      }
    }

    return {
      basePath: '/',
      title: isEnglish
        ? 'Rekap Uang - Free Budget Tracker & Personal Finance App'
        : 'Rekap Uang - Aplikasi Budget Tracker & Keuangan Pribadi Gratis',
      description: isEnglish
        ? 'Rekap Uang is a free personal finance manager app with AI receipt OCR, budgeting, debt tracking, reports, and ad-free experience.'
        : 'Rekap Uang adalah aplikasi manajemen keuangan pribadi gratis dengan OCR AI untuk scan struk, budgeting, utang-piutang, laporan, dan tanpa iklan.',
      keywords: isEnglish
        ? 'personal finance app, money manager, budget tracker, receipt OCR, expense tracker, rekap uang'
        : 'aplikasi keuangan pribadi, money manager, budget tracker, OCR struk, pencatat pengeluaran, rekap uang',
      image: DEFAULT_OG_IMAGE,
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'JAYIDEVTECH',
            url: 'https://jayidev.tech',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'Rekap Uang',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Android, iOS',
            url: absoluteUrl(localizedPath('/', currentLocale)),
            image: DEFAULT_OG_IMAGE,
            description: isEnglish
              ? 'Free personal finance manager app with AI receipt OCR, budgeting, debt tracking, reports, and ad-free experience.'
              : 'Aplikasi manajemen keuangan pribadi gratis dengan OCR AI, budgeting, utang-piutang, laporan, dan tanpa iklan.',
            inLanguage: currentLocale,
            publisher: {
              '@type': 'Organization',
              name: 'JAYIDEVTECH',
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'IDR',
            },
          },
        ],
      },
    }
  })

  watchEffect(() => {
    const seo = currentSeo.value
    const currentPath = localizedPath(seo.basePath, locale.value)
    const currentUrl = absoluteUrl(currentPath)
    const ogLocale = localeToOgLocale(locale.value)
    const alternateLocale = locale.value === 'id' ? 'en_US' : 'id_ID'
    const englishUrl = absoluteUrl(localizedPath(seo.basePath, 'en'))
    const indonesianUrl = absoluteUrl(localizedPath(seo.basePath, 'id'))

    document.title = seo.title
    document.documentElement.lang = locale.value

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })

    if (seo.keywords) {
      upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords })
    }

    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: currentUrl })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: seo.image })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: ogLocale })
    upsertMeta('meta[property="og:locale:alternate"]', { property: 'og:locale:alternate', content: alternateLocale })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url', content: currentUrl })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.image })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: currentUrl })
    upsertLink('link[rel="alternate"][hreflang="id"]', { rel: 'alternate', hreflang: 'id', href: indonesianUrl })
    upsertLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: englishUrl })
    upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: englishUrl })
    upsertStructuredData(seo.structuredData)
  })
}