<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocale } from '@/composables/useLocale'
import { useLocalizedRoute } from '@/composables/useLocalizedRoute'

const { t, isEnglish } = useLocale()
const { homePath } = useLocalizedRoute()

interface ReleaseItem {
  version: string
  date: string
  type: 'major' | 'minor' | 'patch'
  items: string[]
}

const releases = computed<ReleaseItem[]>(() => (
  isEnglish.value
    ? [
      {
        version: 'v1.1.0+15',
        date: '5 May 2026',
        type: 'minor',
        items: [
          'Major stability and performance improvements across core app flows',
          'Google Sign-In, session restore, Premium status, and scan quota are now more consistent',
          'Debt/receivable totals can now be synced to transactions without duplicate records',
          'Synced debt/receivable entries now auto-update or auto-remove when totals change',
          'Debt menu tutorial and guide actions were refreshed to make the sync flow easier to follow',
        ],
      },
      {
        version: 'v1.0.1+14',
        date: '4 May 2026',
        type: 'minor',
        items: [
          'New coachmark onboarding flow with improved step stability',
          'Edit amount now follows selected currency in transaction and budget forms',
          'Category relation improvements across Indonesian/English language switching',
          'Settings page now shows dynamic app version and build number',
          'Localization and reliability improvements across key user flows',
        ],
      },
      {
        version: 'v1.0.0',
        date: '27 March 2026',
        type: 'major',
        items: [
          'Initial Rekap Uang release',
          'Core features: transactions, budgets, reports, debt tracking',
          'AI OCR integration for receipt scanning',
          'Offline-first mode and local backup',
          'Support for 2 languages: Indonesian and English, plus 8 global currencies',
          'Export data to CSV, PDF, and Excel',
        ],
      },
    ]
    : [
      {
        version: 'v1.1.0+15',
        date: '5 Mei 2026',
        type: 'minor',
        items: [
          'Peningkatan besar pada stabilitas dan performa di alur utama aplikasi',
          'Login Google, pemulihan sesi, status Premium, dan kuota scan kini lebih konsisten',
          'Sinkronisasi total hutang/piutang ke transaksi kini berjalan tanpa data duplikat',
          'Data sinkronisasi hutang/piutang kini otomatis diperbarui atau dihapus saat total berubah',
          'Tutorial menu Hutang dan aksi panduan diperbarui agar alur sinkronisasi lebih mudah dipahami',
        ],
      },
      {
        version: 'v1.0.1+14',
        date: '4 Mei 2026',
        type: 'minor',
        items: [
          'Flow onboarding coachmark baru dengan stabilitas step yang lebih baik',
          'Amount saat edit transaksi dan budget kini mengikuti mata uang yang dipilih',
          'Peningkatan relasi kategori saat perpindahan bahasa Indonesia/Inggris',
          'Halaman Settings kini menampilkan versi dan build number secara dinamis',
          'Peningkatan localization dan reliability di alur utama aplikasi',
        ],
      },
      {
        version: 'v1.0.0',
        date: '27 Maret 2026',
        type: 'major',
        items: [
          'Initial release Rekap Uang',
          'Fitur utama: transaksi, budget, laporan, utang-piutang',
          'Integrasi OCR AI untuk scan struk',
          'Mode offline-first dan backup lokal',
          'Support 2 bahasa: Indonesia & Inggris, 8 mata uang global',
          'Ekspor data ke CSV, PDF, dan Excel',
        ],
      },
    ]
))

function badgeClass(type: ReleaseItem['type']) {
  if (type === 'major') return 'bg-purple-100 text-purple-700'
  if (type === 'minor') return 'bg-blue-100 text-blue-700'
  return 'bg-emerald-100 text-emerald-700'
}

function label(type: ReleaseItem['type']) {
  if (type === 'major') return 'Major'
  if (type === 'minor') return 'Minor'
  return 'Patch'
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 py-12">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="mb-8">
        <RouterLink :to="homePath" class="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium">
          <i class="fas fa-arrow-left"></i>
          {{ t('common.backHome') }}
        </RouterLink>
      </div>

      <header class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3" style="font-family: 'Inter', sans-serif">
          {{ t('changelog.title') }}
        </h1>
        <p class="text-slate-600 text-base md:text-lg">
          {{ t('changelog.subtitle') }}
        </p>
      </header>

      <div class="space-y-6">
        <article
          v-for="release in releases"
          :key="release.version"
          class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 class="text-xl font-bold text-slate-800" style="font-family: 'Inter', sans-serif">{{ release.version }}</h2>
              <p class="text-slate-500 text-sm">{{ release.date }}</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-semibold" :class="badgeClass(release.type)">
              {{ label(release.type) }}
            </span>
          </div>

          <ul class="space-y-2 list-none">
            <li v-for="item in release.items" :key="item" class="flex items-start gap-2 text-slate-700 text-sm">
              <i class="fas fa-check-circle text-emerald-500 mt-0.5"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>
