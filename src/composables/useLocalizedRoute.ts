import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLocale, type Locale } from '@/composables/useLocale'

function isLocale(value: unknown): value is Locale {
  return value === 'id' || value === 'en'
}

function stripLocale(path: string) {
  const stripped = path.replace(/^\/(id|en)(?=\/|$)/, '')
  return stripped === '' ? '/' : stripped
}

export function useLocalizedRoute() {
  const route = useRoute()
  const { locale } = useLocale()

  const currentLocale = computed<Locale>(() => {
    const paramLocale = Array.isArray(route.params.locale) ? route.params.locale[0] : route.params.locale
    return isLocale(paramLocale) ? paramLocale : locale.value
  })

  const homePath = computed(() => `/${currentLocale.value}`)

  function localizedPath(path = '/', targetLocale: Locale = currentLocale.value) {
    const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
    return `/${targetLocale}${normalized}`
  }

  function localizedSection(hash: string, targetLocale: Locale = currentLocale.value) {
    return `${localizedPath('/', targetLocale)}${hash}`
  }

  function switchedLocalePath(targetLocale: Locale) {
    return localizedPath(stripLocale(route.path), targetLocale)
  }

  return {
    currentLocale,
    homePath,
    localizedPath,
    localizedSection,
    switchedLocalePath,
  }
}