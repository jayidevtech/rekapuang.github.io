<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.jayidevtech.rekapuang'
const { t, isEnglish } = useLocale()
</script>

<template>
  <section id="download" class="py-20 bg-linear-to-br from-blue-600 to-blue-800">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.download.title') }}
        </h2>
        <p class="text-blue-100 text-lg">{{ t('section.download.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
        <!-- Android -->
        <div class="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
          <div class="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl mb-4">
            <i class="fab fa-android"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-4" style="font-family: 'Inter', sans-serif">Android</h3>
          <div class="space-y-1.5 text-sm text-slate-600 mb-6 w-full text-left">
            <p class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> {{ isEnglish ? 'Android 7.0 and above' : 'Android 7.0 dan lebih baru' }}</p>
            <p class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Version 1.1.0 &amp; ~19MB</p>
            <p class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Native Performance</p>
          </div>
          <a
            :href="playStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <i class="fab fa-google-play"></i> {{ t('download.androidBtn') }}
          </a>
        </div>

        <!-- iOS -->
        <div class="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl opacity-80">
          <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-3xl mb-4">
            <i class="fab fa-apple"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-4" style="font-family: 'Inter', sans-serif">iOS</h3>
          <div class="space-y-1.5 text-sm text-slate-500 mb-6 w-full text-left">
            <p class="flex items-center gap-2"><i class="fas fa-clock text-slate-400"></i> {{ isEnglish ? 'Coming soon on the App Store' : 'Segera hadir di App Store' }}</p>
            <p class="flex items-center gap-2"><i class="fas fa-tools text-slate-400"></i> {{ isEnglish ? 'Currently in preparation' : 'Sedang dalam tahap persiapan' }}</p>
            <p class="flex items-center gap-2"><i class="fas fa-bell text-slate-400"></i> {{ isEnglish ? 'Stay tuned for the next update' : 'Nantikan update berikutnya' }}</p>
          </div>
          <button
            class="w-full py-3 rounded-xl border-2 border-slate-300 text-slate-500 font-semibold flex items-center justify-center gap-2 cursor-not-allowed"
            disabled
            aria-disabled="true"
          >
            <i class="fab fa-app-store"></i> {{ t('download.iosComing') }}
          </button>
        </div>
      </div>

      <p class="text-center text-blue-100 text-sm">
        {{ isEnglish
          ? '✅ Publicly available on Google Play • ✅ Instant install • ✅ Free forever'
          : '✅ Tersedia publik di Google Play • ✅ Instalasi instan • ✅ Gratis selamanya' }}
      </p>
    </div>
  </section>
</template>
