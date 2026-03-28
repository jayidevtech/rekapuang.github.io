<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { t, isEnglish } = useLocale()

interface FAQItem {
  question: string
  answer: string
  open: boolean
}

const faqs = ref<FAQItem[]>([])

const faqSource = computed<Omit<FAQItem, 'open'>[]>(() => (
  isEnglish.value
    ? [
      {
        question: 'Is Rekap Uang free?',
        answer: 'Rekap Uang has two versions: <strong>Free</strong> (complete core features, no time limit) and <strong>Premium</strong> (advanced features). Premium is only Rp 19,000 for the first 5000 users (discounted from Rp 39,000). One-time payment, lifetime access, no recurring subscription. No hidden costs and no ads in either version.',
      },
      {
        question: 'Is my data secure?',
        answer: 'Very secure. Your data is stored 100% on your local device. We do not collect or track user data. Cloud backup is optional and encrypted with bank-grade standards.',
      },
      {
        question: 'How do I use AI receipt OCR?',
        answer: 'Very easy. When adding a transaction, tap the camera icon. Take a receipt photo or choose one from gallery. AI will auto-detect amount, date, and merchant. Review the result, then import it into the form.',
      },
      {
        question: 'Can I use it offline?',
        answer: 'Yes, full offline support. You can record transactions, view dashboards, and export data without internet. Offline-first is one of our core design principles.',
      },
      {
        question: 'Is dark mode available?',
        answer: 'Absolutely. We provide light mode, dark mode, and auto mode (follow device setting), plus 8 theme colors for deeper personalization.',
      },
      {
        question: 'Which currencies are supported?',
        answer: 'We support 8 currencies: IDR, USD, EUR, JPY, SGD, KRW, MYR, and CNY, all with automatic conversion to your main currency.',
      },
    ]
    : [
      {
        question: 'Apakah Rekap Uang gratis?',
        answer: 'Rekap Uang memiliki dua versi: <strong>Gratis</strong> (fitur dasar lengkap, tidak ada batasan waktu) dan <strong>Premium</strong> (fitur advanced). Premium hanya Rp 19.000 untuk 5000 pengguna awal (diskon dari Rp 39.000). Pembayaran sekali saja, seumur hidup, tanpa subscription berulang. Tidak ada biaya tersembunyi atau iklan apapun di versi manapun.',
      },
      {
        question: 'Apakah data saya aman?',
        answer: 'Sangat aman! Data Anda tersimpan 100% di device lokal Anda. Kami tidak mengumpulkan atau melacak data pengguna. Backup cloud bersifat optional dan ter-enkripsi dengan standar bank.',
      },
      {
        question: 'Bagaimana cara pakai fitur OCR scan struk?',
        answer: 'Sangat mudah! Saat menambah transaksi, tap ikon kamera. Ambil foto struk atau pilih dari galeri. AI otomatis mendeteksi jumlah, tanggal, dan merchant. Review hasilnya lalu tap untuk import ke form.',
      },
      {
        question: 'Bisakah saya gunakan offline?',
        answer: 'Ya, penuh offline support! Anda bisa catat transaksi, lihat dashboard, dan export data tanpa internet. Mode offline-first adalah core design kami.',
      },
      {
        question: 'Apakah ada dark mode?',
        answer: 'Tentu! Kami punya light mode, dark mode, dan auto mode (follow device setting). Plus 8 pilihan warna tema untuk personalisasi lebih lanjut.',
      },
      {
        question: 'Apa format mata uang yang didukung?',
        answer: 'Kami support 8 mata uang: IDR, USD, EUR, JPY, SGD, KRW, MYR, dan CNY. Semua dengan konversi otomatis ke currency utama Anda.',
      },
    ]
))

watch(
  faqSource,
  (items) => {
    faqs.value = items.map((item) => ({ ...item, open: false }))
  },
  { immediate: true }
)

function toggle(index: number) {
  faqs.value.forEach((faq, i) => {
    if (i !== index) faq.open = false
  })
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.faq.title') }}
        </h2>
        <p class="text-slate-500 text-lg">{{ t('section.faq.subtitle') }}</p>
      </div>

      <div class="space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="faq-item rounded-2xl border border-slate-200 overflow-hidden"
          :class="{ open: faq.open }"
        >
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
            @click="toggle(i)"
          >
            <h4 class="font-semibold text-slate-800" style="font-family: 'Inter', sans-serif">{{ faq.question }}</h4>
            <i class="fas fa-chevron-down faq-chevron text-slate-400 shrink-0"></i>
          </button>
          <div class="faq-answer">
            <div class="px-6 pb-5 text-slate-600 text-sm leading-relaxed" v-html="faq.answer"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
