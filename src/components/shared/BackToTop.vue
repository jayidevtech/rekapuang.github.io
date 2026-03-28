<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '@/composables/useLocale'

const visible = ref(false)
const { isEnglish } = useLocale()

function handleScroll() {
  visible.value = window.pageYOffset > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <button
    class="back-to-top fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-all duration-300"
    :class="{ show: visible }"
    :aria-label="isEnglish ? 'Back to top' : 'Kembali ke atas'"
    @click="scrollToTop"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>
