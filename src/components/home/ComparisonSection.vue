<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { t, isEnglish } = useLocale()

const rows = computed(() => (
  isEnglish.value
    ? [
      { feature: 'Price', ours: 'Free + Premium', theirs: 'Monthly Subscription', ourGood: true },
      { feature: 'Ads', ours: 'No Ads', theirs: 'Contains Ads', ourGood: true },
      { feature: 'Privacy', ours: '100% Private', theirs: 'Data Tracking', ourGood: true },
      { feature: 'Offline Mode', ours: 'Full', theirs: 'Internet Required', ourGood: true },
      { feature: 'AI Receipt OCR', ours: 'AI-Powered', theirs: 'Not Available', ourGood: true },
      { feature: 'Multi-Currency', ours: '8 Currencies', theirs: 'Limited', ourGood: true },
      { feature: 'Export Formats', ours: 'PDF, CSV, Excel', theirs: 'PDF Only', ourGood: true },
      { feature: 'Backup', ours: 'Local + Cloud', theirs: 'Cloud Only', ourGood: true },
    ]
    : [
      { feature: 'Harga', ours: 'Gratis + Premium', theirs: 'Subscription Bulanan', ourGood: true },
      { feature: 'Iklan', ours: 'Tanpa Iklan', theirs: 'Ada Iklan', ourGood: true },
      { feature: 'Privacy', ours: '100% Private', theirs: 'Data Tracking', ourGood: true },
      { feature: 'Mode Offline', ours: 'Penuh', theirs: 'Butuh Internet', ourGood: true },
      { feature: 'OCR Struk AI', ours: 'AI-Powered', theirs: 'Tidak Ada', ourGood: true },
      { feature: 'Multi-Currency', ours: '8 Currencies', theirs: 'Terbatas', ourGood: true },
      { feature: 'Export Format', ours: 'PDF, CSV, Excel', theirs: 'PDF Only', ourGood: true },
      { feature: 'Backup', ours: 'Local + Cloud', theirs: 'Cloud Only', ourGood: true },
    ]
))

const featureHeader = computed(() => (isEnglish.value ? 'Feature' : 'Fitur'))
const oursHeader = computed(() => 'Rekap Uang ✅')
const competitorHeader = computed(() => (isEnglish.value ? 'Other Competitors' : 'Kompetitor Lain'))
</script>

<template>
  <section class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.comparison.title') }}
        </h2>
        <p class="text-slate-500 text-lg">{{ t('section.comparison.subtitle') }}</p>
      </div>

      <div class="comparison-table-wrapper bg-white rounded-2xl shadow-sm border border-slate-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b-2 border-slate-200">
                <th class="text-left py-4 px-6 text-slate-700 font-semibold">{{ featureHeader }}</th>
                <th class="py-4 px-6 text-blue-600 font-bold text-center">{{ oursHeader }}</th>
                <th class="py-4 px-6 text-slate-500 font-semibold text-center">{{ competitorHeader }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in rows"
              :key="row.feature"
              class="border-b border-slate-100"
              :class="i % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-700' : ''"
            >
              <td class="py-3 px-6 font-medium text-slate-700">{{ row.feature }}</td>
              <td class="py-3 px-6 text-center text-emerald-600 font-semibold">
                <i class="fas fa-check mr-1.5"></i>{{ row.ours }}
              </td>
              <td class="py-3 px-6 text-center text-slate-400">
                <i class="fas fa-times mr-1.5 text-red-400"></i>{{ row.theirs }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
