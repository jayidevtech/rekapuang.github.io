<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { t, isEnglish } = useLocale()

const freeFeatures = computed(() => (
  isEnglish.value
    ? [
      '35 transactions/month',
      '5 budgets/month',
      '5 debt/receivable entries/month',
      'Categories: Income 7, Expense 9',
      'View report data',
      'Local backup 1x/month',
      'Standard support',
    ]
    : [
      'Transaksi 35/bulan',
      'Budget 5/bulan',
      'Utang/Piutang 5/bulan',
      'Kategori: Income 7, Expense 9',
      'Lihat laporan data',
      'Backup lokal 1x/bulan',
      'Standard support',
    ]
))

const premiumFeatures = computed(() => (
  isEnglish.value
    ? [
      'Unlimited transactions',
      'Unlimited budgets',
      'Unlimited debt/receivable entries',
      'Unlimited custom categories',
      'PDF/CSV/Excel export',
      'Unlimited backup + Google Drive',
      'Full notification control',
      'Priority support',
    ]
    : [
      'Transaksi unlimited',
      'Budget unlimited',
      'Utang/Piutang unlimited',
      'Kategori custom unlimited',
      'Export PDF/CSV/Excel',
      'Backup unlimited + Google Drive',
      'Full control notifikasi',
      'Priority support',
    ]
))

const comparisonRows = computed(() => (
  isEnglish.value
    ? [
      { feature: 'Monthly Transactions', free: '35 transactions/month', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Budget Management', free: '5 budgets/month', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Debt & Receivables', free: '5/month (limited tenure)', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Custom Categories', free: 'Income: 7, Expense: 9', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Report Export', free: 'View data only', premium: 'PDF, CSV, Excel', premiumIcon: 'fa-check' },
      { feature: 'Backup & Restore', free: 'Local 1x/month', premium: 'Unlimited + Google Drive', premiumIcon: 'fa-check' },
      { feature: 'Notification Controls', free: 'Limited', premium: 'Full Control', premiumIcon: 'fa-check' },
      { feature: 'Customer Support', free: 'Standard', premium: 'Priority Support', premiumIcon: 'fa-check' },
    ]
    : [
      { feature: 'Transaksi Bulanan', free: '35 transaksi/bulan', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Budget Management', free: '5 budget/bulan', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Utang & Piutang', free: '5/bulan (tenor terbatas)', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Kategori Custom', free: 'Income: 7, Expense: 9', premium: 'Unlimited', premiumIcon: 'fa-infinity' },
      { feature: 'Export Laporan', free: 'Lihat data saja', premium: 'PDF, CSV, Excel', premiumIcon: 'fa-check' },
      { feature: 'Backup & Restore', free: 'Lokal 1x/bulan', premium: 'Unlimited + Google Drive', premiumIcon: 'fa-check' },
      { feature: 'Kontrol Notifikasi', free: 'Terbatas', premium: 'Full Control', premiumIcon: 'fa-check' },
      { feature: 'Customer Support', free: 'Standard', premium: 'Priority Support', premiumIcon: 'fa-check' },
    ]
))

const freeBadgeLabel = computed(() => (isEnglish.value ? 'Free' : 'Gratis'))
const foreverLabel = computed(() => (isEnglish.value ? 'Forever' : 'Selamanya'))
const freeDescription = computed(() => (
  isEnglish.value
    ? 'Perfect for beginners who want to start managing personal finance at no cost.'
    : 'Perfect untuk pemula yang ingin mulai kelola keuangan pribadi tanpa biaya.'
))
const startFreeLabel = computed(() => (isEnglish.value ? 'Start Free' : 'Mulai Gratis'))

const premiumBadgeLabel = computed(() => (isEnglish.value ? 'Popular ⭐' : 'Popular ⭐'))
const premiumTitle = computed(() => (isEnglish.value ? 'Premium Lifetime' : 'Premium Lifetime'))
const earlyBirdLabel = computed(() => (isEnglish.value ? 'Early Bird 50% OFF' : 'Early Bird 50% OFF'))
const premiumDescription = computed(() => (
  isEnglish.value
    ? 'For serious users who need full control and advanced features without limits.'
    : 'Untuk pengguna serius yang butuh kontrol penuh dan fitur advanced tanpa batasan.'
))
const upgradeLabel = computed(() => (isEnglish.value ? 'Upgrade Now' : 'Upgrade Sekarang'))
const quotaNote = computed(() => (
  isEnglish.value
    ? '⚡ Limited quota for early bird pricing!'
    : '⚡ Kuota terbatas untuk harga early bird!'
))

const tableTitle = computed(() => (isEnglish.value ? 'Detailed Feature Comparison' : 'Perbandingan Detail Fitur'))
const featureHeader = computed(() => (isEnglish.value ? 'Feature' : 'Fitur'))
const freeHeader = computed(() => 'Free')
const premiumHeader = computed(() => 'Premium Lifetime')
const priceFeatureLabel = computed(() => (isEnglish.value ? 'Price' : 'Harga'))
const noteText = computed(() => (
  isEnglish.value
    ? '💡 Note: The Free version is available forever. Upgrade to Premium anytime if you need unlimited features.'
    : '💡 Catatan: Free version tetap tersedia selamanya. Upgrade ke Premium kapan saja jika butuh fitur unlimited!'
))
</script>

<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.pricing.title') }}
        </h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">
          {{ t('section.pricing.subtitle') }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
        <!-- Free -->
        <div class="rounded-2xl border-2 border-slate-200 p-8 flex flex-col">
          <div class="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
            {{ freeBadgeLabel }}
          </div>
          <h3 class="text-2xl font-bold text-slate-800 mb-1" style="font-family: 'Inter', sans-serif">Free</h3>
          <div class="mb-2">
            <span class="text-4xl font-extrabold text-slate-900" style="font-family: 'Inter', sans-serif">Rp 0</span>
            <span class="text-slate-500 ml-2">{{ foreverLabel }}</span>
          </div>
          <p class="text-slate-500 text-sm mb-6">{{ freeDescription }}</p>
          <ul class="space-y-2 mb-8 flex-1">
            <li v-for="f in freeFeatures" :key="f" class="flex items-center gap-2 text-sm text-slate-600">
              <i class="fas fa-check text-emerald-500 shrink-0"></i>{{ f }}
            </li>
          </ul>
          <a
            href="#download"
            class="block text-center py-3 rounded-xl border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold transition-all duration-200"
          >
            {{ startFreeLabel }}
          </a>
        </div>

        <!-- Premium -->
        <div class="rounded-2xl border-2 border-blue-600 p-8 flex flex-col relative shadow-xl shadow-blue-100">
          <div class="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
            {{ premiumBadgeLabel }}
          </div>
          <h3 class="text-2xl font-bold text-slate-800 mb-1" style="font-family: 'Inter', sans-serif">{{ premiumTitle }}</h3>
          <div class="mb-1">
            <span class="text-4xl font-extrabold text-blue-600" style="font-family: 'Inter', sans-serif">Rp 19.000</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-slate-400 line-through text-sm">Rp 39.000</span>
            <span class="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-0.5 rounded-full">{{ earlyBirdLabel }}</span>
          </div>
          <p class="text-slate-500 text-sm mb-6">{{ premiumDescription }}</p>
          <ul class="space-y-2 mb-8 flex-1">
            <li v-for="f in premiumFeatures" :key="f" class="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <i class="fas fa-check text-emerald-500 shrink-0"></i>{{ f }}
            </li>
          </ul>
          <a
            href="#download"
            class="block text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-200"
          >
            {{ upgradeLabel }}
          </a>
          <small class="block text-center text-slate-400 text-xs mt-3">{{ quotaNote }}</small>
        </div>
      </div>

      <!-- Comparison Table -->
      <div class="bg-slate-50 rounded-2xl p-8">
        <h3 class="text-xl font-bold text-slate-800 mb-6 text-center" style="font-family: 'Inter', sans-serif">
          {{ tableTitle }}
        </h3>
        <div class="comparison-table-wrapper">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b-2 border-slate-200">
                <th class="text-left py-3 px-4 text-slate-700 font-semibold">{{ featureHeader }}</th>
                <th class="py-3 px-4 text-slate-700 font-semibold text-center">{{ freeHeader }}</th>
                <th class="py-3 px-4 text-blue-600 font-semibold text-center">{{ premiumHeader }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in comparisonRows"
                :key="row.feature"
                class="border-b border-slate-200"
                :class="i % 2 === 0 ? 'bg-white' : ''"
              >
                <td class="py-3 px-4 font-medium text-slate-700">{{ row.feature }}</td>
                <td class="py-3 px-4 text-center text-slate-500">{{ row.free }}</td>
                <td class="py-3 px-4 text-center text-emerald-600 font-semibold">
                  <i :class="`fas ${row.premiumIcon} mr-1`"></i>{{ row.premium }}
                </td>
              </tr>
              <tr class="border-b border-slate-200 bg-white">
                <td class="py-3 px-4 font-medium text-slate-700">{{ priceFeatureLabel }}</td>
                <td class="py-3 px-4 text-center font-bold text-slate-800">Rp 0</td>
                <td class="py-3 px-4 text-center">
                  <span class="font-bold text-emerald-600">Rp 19.000</span>
                  <span class="text-slate-400 text-xs line-through ml-1">Rp 39.000</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-500 text-sm mt-5 text-center">{{ noteText }}</p>
      </div>
    </div>
  </section>
</template>
