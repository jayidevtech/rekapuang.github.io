<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { t, isEnglish } = useLocale()

const benefits = computed(() => {
  if (isEnglish.value) {
    return [
      { icon: 'fas fa-crown', title: 'Free & Premium', desc: 'Free forever for core features. Premium is Rp 19,000 (early bird) as a one-time payment.' },
      { icon: 'fas fa-ban', title: 'No Ads', desc: 'Clean, distraction-free experience. Focus on your money, not ads.' },
      { icon: 'fas fa-lock', title: 'Privacy First', desc: 'Your data stays 100% local on your device. No tracking or data collection.' },
      { icon: 'fas fa-wifi', title: 'Offline-First', desc: 'Use the app fully without an internet connection. Backup can be done without cloud.' },
      { icon: 'fas fa-globe', title: 'Multi-Language', desc: 'Available in Bahasa Indonesia and English. Perfect for global users.' },
      { icon: 'fas fa-money-bill', title: 'Multi-Currency', desc: 'Supports 8 international currencies with automatic conversion.' },
      { icon: 'fas fa-paint-brush', title: 'Modern UI', desc: 'Modern Material Design 3 with Dark Mode. Beautiful and functional design.' },
      { icon: 'fas fa-mobile-alt', title: 'Native Performance', desc: 'Built with Flutter for maximum performance on Android and iOS.' },
    ]
  }

  return [
    { icon: 'fas fa-crown', title: 'Gratis & Premium', desc: 'Gratis selamanya untuk fitur lengkap. Premium Rp 19.000 (early bird) - one-time payment!' },
    { icon: 'fas fa-ban', title: 'Tanpa Iklan', desc: 'Pengalaman bersih tanpa gangguan. Fokus pada keuangan, bukan iklan.' },
    { icon: 'fas fa-lock', title: 'Privacy First', desc: 'Data Anda tersimpan 100% lokal di device. Tidak ada tracking atau kumpul data.' },
    { icon: 'fas fa-wifi', title: 'Offline-First', desc: 'Gunakan penuh tanpa koneksi internet. Backup bisa tanpa cloud.' },
    { icon: 'fas fa-globe', title: 'Multi-Language', desc: 'Tersedia dalam Bahasa Indonesia & English. Perfect untuk user global.' },
    { icon: 'fas fa-money-bill', title: 'Multi-Currency', desc: 'Support 8 mata uang internasional dengan konversi otomatis.' },
    { icon: 'fas fa-paint-brush', title: 'Modern UI', desc: 'Material Design 3 modern dengan Dark Mode. Desain yang indah & fungsional.' },
    { icon: 'fas fa-mobile-alt', title: 'Native Performance', desc: 'Built dengan Flutter untuk performa maksimal di Android & iOS.' },
  ]
})
</script>

<template>
  <section id="benefits" class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.benefits.title') }}
        </h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">
          {{ t('section.benefits.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="b in benefits"
          :key="b.title"
          class="will-animate bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
        >
          <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mx-auto mb-4">
            <i :class="b.icon"></i>
          </div>
          <h3 class="font-bold text-slate-800 mb-2" style="font-family: 'Inter', sans-serif">{{ b.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ b.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
