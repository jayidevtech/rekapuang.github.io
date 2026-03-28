<script setup lang="ts">
import { computed } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useLocale } from '@/composables/useLocale'

useScrollAnimation()
const { t, isEnglish } = useLocale()

interface Feature {
  icon: string
  title: string
  description: string
  highlights: boolean
  list: string[]
}

const features = computed<Feature[]>(() => {
  if (isEnglish.value) {
    return [
      {
        icon: 'fas fa-camera',
        title: 'AI Receipt Scan',
        description: 'Advanced OCR AI scans receipts automatically. Save up to 80% of transaction entry time.',
        highlights: false,
        list: ['Auto-detect amount, date, and merchant', 'Supports Indonesian and international receipt formats', 'Powered by Google ML Kit'],
      },
      {
        icon: 'fas fa-chart-pie',
        title: 'Real-Time Dashboard',
        description: 'Monitor your financial condition in one intuitive and informative screen.',
        highlights: false,
        list: ['Real-time total balance', 'Quick transaction history', 'Smart filters and quick add'],
      },
      {
        icon: 'fas fa-plus-circle',
        title: 'Complete Tracking',
        description: 'Track every money in and out with details, quickly and easily.',
        highlights: false,
        list: ['Income and expenses', 'Custom categorization', 'Swipe to edit and delete'],
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Monthly Reports',
        description: 'In-depth analytics to support better financial decisions.',
        highlights: false,
        list: ['Detailed monthly summary', 'Category breakdown', 'Historical data access'],
      },
      {
        icon: 'fas fa-handshake',
        title: 'Debt Tracking',
        description: 'Never miss bills or loans with smart automatic reminders.',
        highlights: false,
        list: ['Separate debt and receivable tracking', 'Automatic H-5 reminders', 'Smart push notifications'],
      },
      {
        icon: 'fas fa-piggy-bank',
        title: 'Budget Management',
        description: 'Control spending with effective and visual budget planning.',
        highlights: false,
        list: ['Category-based budgets', 'Real-time progress tracking', 'Over-budget alerts'],
      },
      {
        icon: 'fas fa-file-export',
        title: 'Multi-Format Export',
        description: 'Share and analyze your data in other platforms flexibly.',
        highlights: false,
        list: ['Professional PDF export', 'Universal CSV format', 'Native Excel .xlsx'],
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Backup & Restore',
        description: 'Your data stays safe with bank-grade encrypted backup.',
        highlights: false,
        list: ['Bank-grade AES-CBC encryption', 'Local and Google Drive backup', 'Instant restore'],
      },
      {
        icon: 'fas fa-sliders-h',
        title: 'Complete Settings',
        description: 'Personalize the app to fit your preferences, securely and easily.',
        highlights: false,
        list: ['Multi-language and multi-currency', 'Light/Dark mode + 8 theme colors', 'Notification and auto-backup control'],
      },
    ]
  }

  return [
    {
      icon: 'fas fa-camera',
      title: 'Scan Struk dengan AI',
      description: 'Teknologi OCR AI yang canggih memindai struk belanja secara otomatis. Hemat waktu hingga 80% dalam pencatatan transaksi!',
      highlights: false,
      list: ['Deteksi otomatis jumlah, tanggal & merchant', 'Support format struk Indonesia & internasional', 'Teknologi Google ML Kit'],
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Dashboard Real-Time',
      description: 'Pantau kondisi keuangan Anda dalam satu layar yang intuitif dan informatif.',
      highlights: false,
      list: ['Total saldo real-time', 'Riwayat transaksi cepat', 'Filter cerdas & quick add'],
    },
    {
      icon: 'fas fa-plus-circle',
      title: 'Pencatatan Lengkap',
      description: 'Catat setiap rupiah yang masuk dan keluar dengan detail dan mudah.',
      highlights: false,
      list: ['Pemasukan & pengeluaran', 'Kategorisasi custom', 'Edit & hapus dengan swipe'],
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Laporan Bulanan',
      description: 'Analisis mendalam untuk keputusan finansial yang lebih baik dan strategis.',
      highlights: false,
      list: ['Ringkasan detail per bulan', 'Breakdown kategori', 'Akses data historis'],
    },
    {
      icon: 'fas fa-handshake',
      title: 'Track Utang-Piutang',
      description: 'Jangan lupa tagihan atau hutang dengan reminders otomatis yang cerdas.',
      highlights: false,
      list: ['Track utang & piutang terpisah', 'Reminder H-5 otomatis', 'Push notification smart'],
    },
    {
      icon: 'fas fa-piggy-bank',
      title: 'Budget Management',
      description: 'Kontrol pengeluaran dengan budget planning yang efektif dan visual.',
      highlights: false,
      list: ['Budget per kategori', 'Progress tracking real-time', 'Alert over budget'],
    },
    {
      icon: 'fas fa-file-export',
      title: 'Export Multi-Format',
      description: 'Bagikan atau analisis data Anda di platform lain dengan fleksibel.',
      highlights: false,
      list: ['Export ke PDF profesional', 'Format CSV universal', 'Excel .xlsx native'],
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Backup & Restore',
      description: 'Data Anda aman dengan sistem backup terenkripsi bank-grade.',
      highlights: false,
      list: ['Enkripsi AES-CBC level bank', 'Backup lokal & Google Drive', 'Restore data instant'],
    },
    {
      icon: 'fas fa-sliders-h',
      title: 'Pengaturan Lengkap',
      description: 'Atur aplikasi sesuai preferensi Anda—fleksibel, aman, dan mudah disesuaikan.',
      highlights: false,
      list: ['Multi-language (ID/EN) & multi-currency', 'Light/Dark mode + 8 pilihan warna', 'Kontrol notifikasi & backup otomatis'],
    },
  ]
})
</script>

<template>
  <section id="features" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14 will-animate">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.features.title') }}
        </h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">
          {{ t('section.features.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="f in features"
          :key="f.title"
          class="will-animate rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          :class="f.highlights
            ? 'bg-linear-to-br from-blue-600 to-blue-500 text-white border-blue-600 shadow-blue-100 shadow-lg'
            : 'bg-white text-slate-800 border-slate-200'"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
            :class="f.highlights ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'"
          >
            <i :class="f.icon"></i>
          </div>
          <h3
            class="text-lg font-bold mb-2"
            :class="f.highlights ? 'text-white' : 'text-slate-800'"
            style="font-family: 'Inter', sans-serif"
          >
            {{ f.title }}
          </h3>
          <p class="text-sm mb-4" :class="f.highlights ? 'text-blue-100' : 'text-slate-500'">
            {{ f.description }}
          </p>
          <ul class="space-y-1.5">
            <li
              v-for="item in f.list"
              :key="item"
              class="flex items-center gap-2 text-sm"
              :class="f.highlights ? 'text-blue-50' : 'text-slate-600'"
            >
              <i class="fas fa-check text-xs" :class="f.highlights ? 'text-white' : 'text-emerald-500'"></i>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
