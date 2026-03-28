<script setup lang="ts">
import { ref } from 'vue'
import { useScreenshotSlider } from '@/composables/useScreenshotSlider'
import TestingModal from '@/components/shared/TestingModal.vue'
import { useLocale } from '@/composables/useLocale'

const screenshots = [
  { src: '/assets/ss/home.jpg', alt: 'Dashboard Keuangan Rekap Uang' },
  { src: '/assets/ss/aiscan.jpg', alt: 'Scan Struk AI dengan OCR' },
  { src: '/assets/ss/estatement.jpg', alt: 'Laporan Transaksi' },
  { src: '/assets/ss/budget.jpg', alt: 'Budget Management' },
  { src: '/assets/ss/debt.jpg', alt: 'Tracking Utang Piutang' },
]

const { current, goTo, pause, resume } = useScreenshotSlider(screenshots.length)
const showModal = ref(false)
const { t, isEnglish } = useLocale()
</script>

<template>
  <section class="relative overflow-hidden py-20 lg:py-28">
    <div class="hero-bg"></div>
    <div class="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-14">
        <!-- Text -->
        <div class="flex-1 text-center lg:text-left">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
            style="font-family: 'Inter', sans-serif"
          >
            {{ t('hero.title') }} 💰
          </h1>
          <p class="text-slate-600 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
            {{ t('hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <a
              href="#download"
              class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-blue-200 transition-all duration-200"
            >
              <i class="fas fa-download"></i> {{ t('hero.ctaDownload') }}
            </a>
            <a
              href="#features"
              class="inline-flex items-center justify-center px-7 py-4 rounded-xl border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold text-lg transition-all duration-200"
            >
              {{ t('hero.ctaLearn') }}
            </a>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-8">
            <div class="border-l-4 border-blue-600 pl-6 py-4 rounded-2xl">
              <h3 class="mb-2.5 text-3xl font-bold text-blue-600" style="font-family: 'Inter', sans-serif">{{ isEnglish ? 'Free' : 'Gratis' }}</h3>
              <p class="text-slate-500 text-sm">+ Premium</p>
            </div>
            <div class="border-l-4 border-blue-600 pl-6 py-4 rounded-2xl">
              <h3 class="mb-2.5 text-3xl font-bold text-blue-600" style="font-family: 'Inter', sans-serif">{{ isEnglish ? 'No' : 'Tanpa' }}</h3>
              <p class="text-slate-500 text-sm">{{ isEnglish ? 'Ads' : 'Iklan' }}</p>
            </div>
            <div class="border-l-4 border-blue-600 pl-6 py-4 rounded-2xl">
              <h3 class="mb-2.5 text-3xl font-bold text-blue-600" style="font-family: 'Inter', sans-serif">Private</h3>
              <p class="text-slate-500 text-sm">{{ isEnglish ? 'Secure Data' : 'Data Aman' }}</p>
            </div>
          </div>
        </div>

        <!-- Phone Mockup -->
        <div class="shrink-0">
          <div
            class="phone-mockup"
            @mouseenter="pause"
            @mouseleave="resume"
          >
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <div class="screenshot-slider">
                <div
                  v-for="(ss, i) in screenshots"
                  :key="i"
                  class="screenshot-slide"
                  :class="{ active: current === i }"
                >
                  <img :src="ss.src" :alt="ss.alt" class="app-screenshot" loading="lazy" />
                </div>
              </div>
              <div class="slide-indicators">
                <button
                  v-for="(_, i) in screenshots"
                  :key="i"
                  class="indicator"
                  :class="{ active: current === i }"
                  :aria-label="`Slide ${i + 1}`"
                  @click="goTo(i)"
                ></button>
              </div>
            </div>
            <div class="phone-bottom"></div>
          </div>
        </div>
      </div>
    </div>

    <TestingModal v-if="showModal" @close="showModal = false" />
  </section>
</template>
