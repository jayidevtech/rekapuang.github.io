<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { t, isEnglish } = useLocale()

const testimonials = computed(() => (
  isEnglish.value
    ? [
      {
        initials: 'AY',
        name: 'Ayunda Rismawati',
        role: 'Android User - Jakarta',
        text: '"The best finance tracker app I have ever used. The OCR feature is a real game changer and saves me time every day."',
      },
      {
        initials: 'BW',
        name: 'Budi Wijaya',
        role: 'iOS User - Bandung',
        text: '"Free, ad-free, and very complete. The UI/UX is modern and pleasant. This is the perfect solution for tracking my personal finances."',
      },
      {
        initials: 'SR',
        name: 'Siti Rahayu',
        role: 'Freelancer - Medan',
        text: '"As a freelancer, the Excel export feature helps a lot with client finance reports. Highly recommended for professionals and individuals."',
      },
    ]
    : [
      {
        initials: 'AY',
        name: 'Ayunda Rismawati',
        role: 'User Android - Jakarta',
        text: '"Aplikasi finance tracker terbaik yang pernah saya pakai. Fitur OCR-nya benar-benar game changer! Menghemat waktu saya setiap hari."',
      },
      {
        initials: 'BW',
        name: 'Budi Wijaya',
        role: 'User iOS - Bandung',
        text: '"Gratis, tanpa iklan, dan sangat lengkap. UI/UX-nya juga modern dan enak dipandang. Ini adalah solusi perfect untuk tracking keuangan pribadi saya."',
      },
      {
        initials: 'SR',
        name: 'Siti Rahayu',
        role: 'Freelancer - Medan',
        text: '"Sebagai freelancer, fitur export ke Excel sangat membantu untuk laporan keuangan klien. Highly recommended untuk profesional dan individu!"',
      },
    ]
))
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.testimonials.title') }}
        </h2>
        <p class="text-slate-500 text-lg">{{ t('section.testimonials.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="will-animate bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
        >
          <div class="flex text-yellow-400 mb-4">
            <i v-for="n in 5" :key="n" class="fas fa-star text-sm"></i>
          </div>
          <p class="text-slate-600 leading-relaxed mb-6 italic">{{ t.text }}</p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
              {{ t.initials }}
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 text-sm" style="font-family: 'Inter', sans-serif">{{ t.name }}</h4>
              <p class="text-slate-400 text-xs">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
