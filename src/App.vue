<script setup lang="ts">
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import BackToTop from '@/components/shared/BackToTop.vue'
import NotificationToast from '@/components/shared/NotificationToast.vue'
import { useSeo } from '@/composables/useSeo'

useSeo()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <TheFooter />
    <BackToTop />
    <NotificationToast />
  </div>
</template>
