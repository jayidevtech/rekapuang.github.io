<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useLocale, type Locale } from '@/composables/useLocale'
import { useLocalizedRoute } from '@/composables/useLocalizedRoute'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isDarkMode = ref(false)
const activeSection = ref('')
const suppressHashCleanupUntil = ref(0)
const route = useRoute()
const router = useRouter()
const { t, isEnglish, setLocale } = useLocale()
const { homePath, localizedSection, switchedLocalePath } = useLocalizedRoute()
const isHomeRoute = computed(() => route.name === 'home')

const sections = ['#features', '#benefits', '#pricing', '#download', '#contact'] as const

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function applyTheme(isDark: boolean) {
  isDarkMode.value = isDark
  document.documentElement.classList.toggle('dark', isDark)
}

function toggleDarkMode() {
  const next = !isDarkMode.value
  applyTheme(next)
  localStorage.setItem('theme', next ? 'dark' : 'light')
}

function scrollToSection(hash: string) {
  const section = document.querySelector(hash) as HTMLElement | null
  if (!section) return

  const nav = document.querySelector('nav') as HTMLElement | null
  const navHeight = nav?.offsetHeight ?? 64
  const targetTop = section.getBoundingClientRect().top + window.scrollY - navHeight

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: 'smooth',
  })
}

async function goToSection(hash: string) {
  closeMenu()
  suppressHashCleanupUntil.value = Date.now() + 1200

  if (!isHomeRoute.value) {
    await router.push({ path: homePath.value, hash })
    requestAnimationFrame(() => {
      setTimeout(() => scrollToSection(hash), 50)
    })
    return
  }

  if (route.hash !== hash) {
    await router.replace({ path: homePath.value, query: route.query, hash })
  }

  activeSection.value = hash
  scrollToSection(hash)
}

async function toggleLanguage() {
  const nextLocale: Locale = isEnglish.value ? 'id' : 'en'
  setLocale(nextLocale)
  closeMenu()
  await router.push({ path: switchedLocalePath(nextLocale), query: route.query, hash: route.hash })
}

function handleScroll() {
  isScrolled.value = window.pageYOffset > 50

  if (!isHomeRoute.value) {
    activeSection.value = ''
    return
  }

  // When user scrolls back to top, clean hash from URL (/#features, etc.).
  // Guarded to avoid racing with intentional navigation via navbar click.
  if (window.scrollY <= 8 && route.hash && Date.now() > suppressHashCleanupUntil.value) {
    activeSection.value = ''
    void router.replace({ path: homePath.value, query: route.query, hash: '' })
    return
  }

  // Scrollspy fallback when URL hash is not set/updated while scrolling.
  const navOffset = 120
  let current = ''

  for (const hash of sections) {
    const section = document.querySelector(hash) as HTMLElement | null
    if (!section) continue

    const threshold = section.offsetTop - navOffset
    if (window.scrollY >= threshold) {
      current = hash
    }
  }

  activeSection.value = current
}

function handleClickOutside(event: MouseEvent) {
  const nav = document.querySelector('.navbar-wrapper')
  if (nav && !nav.contains(event.target as Node)) {
    closeMenu()
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

function isActive(hash: string) {
  if (!isHomeRoute.value) return false
  if (activeSection.value) return activeSection.value === hash
  return route.hash === hash
}

function desktopLinkClass(hash: string) {
  return isActive(hash)
    ? 'text-primary font-semibold'
    : 'text-slate-600 hover:text-primary font-medium'
}

function mobileLinkClass(hash: string) {
  return isActive(hash)
    ? 'text-primary bg-blue-50 font-semibold'
    : 'text-slate-600 hover:text-primary hover:bg-blue-50 font-medium'
}

watch(
  () => [route.name, route.hash],
  () => {
    if (isHomeRoute.value && route.hash) {
      activeSection.value = route.hash
    }
    if (!isHomeRoute.value) {
      activeSection.value = ''
    }
  },
  { immediate: true }
)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark)

  handleScroll()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
    :class="isScrolled ? 'shadow-md' : 'shadow-sm'"
  >
    <div class="navbar-wrapper max-w-6xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink
          :to="homePath"
          class="flex items-center gap-2 font-bold text-xl text-primary"
          style="font-family: 'Inter', sans-serif"
          @click="closeMenu"
        >
          <img src="/assets/logo/app_icon.png" alt="Rekap Uang App Icon" class="h-7 w-7 rounded-md object-cover" />
          <span>Rekap Uang</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-4">
          <ul class="flex items-center gap-6 list-none">
            <li>
              <a :href="localizedSection('#features')" :class="['transition-colors duration-200', desktopLinkClass('#features')]" @click.prevent="goToSection('#features')">
                {{ t('nav.features') }}
              </a>
            </li>
            <li>
              <a :href="localizedSection('#benefits')" :class="['transition-colors duration-200', desktopLinkClass('#benefits')]" @click.prevent="goToSection('#benefits')">
                {{ t('nav.benefits') }}
              </a>
            </li>
            <li>
              <a :href="localizedSection('#pricing')" :class="['transition-colors duration-200', desktopLinkClass('#pricing')]" @click.prevent="goToSection('#pricing')">
                {{ t('nav.pricing') }}
              </a>
            </li>
            <li>
              <a :href="localizedSection('#download')" :class="['transition-colors duration-200', desktopLinkClass('#download')]" @click.prevent="goToSection('#download')">
                {{ t('nav.download') }}
              </a>
            </li>
            <li>
              <a :href="localizedSection('#contact')" :class="['transition-colors duration-200', desktopLinkClass('#contact')]" @click.prevent="goToSection('#contact')">
                {{ t('nav.contact') }}
              </a>
            </li>
          </ul>

          <button
            class="h-9 w-9 rounded-full border border-slate-300 text-slate-600 hover:text-primary hover:border-primary transition-colors duration-200 flex items-center justify-center cursor-pointer"
            :aria-label="isDarkMode ? t('theme.enableLight') : t('theme.enableDark')"
            @click="toggleDarkMode"
          >
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          
          <button
            class="h-9 w-9 rounded-full border border-slate-300 text-slate-600 hover:text-primary hover:border-primary transition-colors duration-200 flex items-center justify-center cursor-pointer text-base"
            :aria-label="t('common.languageLabel')"
            @click="toggleLanguage"
          >
            <span aria-hidden="true">{{ isEnglish ? '🇺🇸' : '🇮🇩' }}</span>
          </button>
        </div>

        <!-- Hamburger -->
        <button
          class="hamburger md:hidden flex flex-col gap-1.5 p-2 rounded-md focus:outline-none"
          :class="{ active: isMenuOpen }"
          aria-label="Toggle menu"
          @click.stop="toggleMenu"
        >
          <span class="block w-6 h-0.5 bg-slate-800 transition-all duration-300 origin-center"></span>
          <span class="block w-6 h-0.5 bg-slate-800 transition-all duration-300 origin-center"></span>
          <span class="block w-6 h-0.5 bg-slate-800 transition-all duration-300 origin-center"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        class="md:hidden border-t border-slate-100 py-4"
      >
        <ul class="flex flex-col gap-1 list-none">
          <li>
            <a
              :href="localizedSection('#features')"
              :class="['block px-4 py-2 rounded-lg transition-colors duration-200', mobileLinkClass('#features')]"
              @click.prevent="goToSection('#features')"
            >
              {{ t('nav.features') }}
            </a>
          </li>
          <li>
            <a
              :href="localizedSection('#benefits')"
              :class="['block px-4 py-2 rounded-lg transition-colors duration-200', mobileLinkClass('#benefits')]"
              @click.prevent="goToSection('#benefits')"
            >
              {{ t('nav.benefits') }}
            </a>
          </li>
          <li>
            <a
              :href="localizedSection('#pricing')"
              :class="['block px-4 py-2 rounded-lg transition-colors duration-200', mobileLinkClass('#pricing')]"
              @click.prevent="goToSection('#pricing')"
            >
              {{ t('nav.pricing') }}
            </a>
          </li>
          <li>
            <a
              :href="localizedSection('#download')"
              :class="['block px-4 py-2 rounded-lg transition-colors duration-200', mobileLinkClass('#download')]"
              @click.prevent="goToSection('#download')"
            >
              {{ t('nav.download') }}
            </a>
          </li>
          <li>
            <a
              :href="localizedSection('#contact')"
              :class="['block px-4 py-2 rounded-lg transition-colors duration-200', mobileLinkClass('#contact')]"
              @click.prevent="goToSection('#contact')"
            >
              {{ t('nav.contact') }}
            </a>
          </li>
        </ul>

        <div class="px-4 pt-3 flex gap-3">
          <button
            class="w-full h-10 rounded-lg border border-slate-300 text-slate-700 hover:text-primary hover:border-primary transition-colors duration-200 flex items-center justify-center gap-2"
            :aria-label="isDarkMode ? t('theme.enableLight') : t('theme.enableDark')"
            @click="toggleDarkMode"
          >
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
            <span>{{ isDarkMode ? t('theme.lightMode') : t('theme.darkMode') }}</span>
          </button>
          
          <button
            class="w-full h-10 rounded-lg border border-slate-300 text-slate-700 hover:text-primary hover:border-primary transition-colors duration-200 flex items-center justify-center"
            :aria-label="t('common.languageLabel')"
            @click="toggleLanguage"
          >
            <span aria-hidden="true" class="text-base">{{ isEnglish ? '🇺🇸' : '🇮🇩' }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- Spacer for fixed navbar -->
  <div class="h-16"></div>
</template>
