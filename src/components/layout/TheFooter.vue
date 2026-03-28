<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocale } from '@/composables/useLocale'
import { useLocalizedRoute } from '@/composables/useLocalizedRoute'

const showIosComingSoon = ref(false)
const { t } = useLocale()
const { localizedPath, localizedSection } = useLocalizedRoute()

function openIosComingSoon() {
  showIosComingSoon.value = true
}

function closeIosComingSoon() {
  showIosComingSoon.value = false
}

function onOverlayClick(event: MouseEvent) {
  if (event.target === event.currentTarget) closeIosComingSoon()
}
</script>

<template>
  <footer class="bg-slate-900 text-slate-300 py-16">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <h4 class="text-white font-bold text-xl mb-4 flex items-center gap-2" style="font-family: 'Inter', sans-serif">
            <img src="/assets/logo/app_icon.png" alt="Rekap Uang App Icon" class="h-7 w-7 rounded-md object-cover" />
            Rekap Uang
          </h4>
          <p class="text-slate-400 text-sm leading-relaxed mb-5">
            {{ t('footer.brandDesc') }}
          </p>
          <div class="flex gap-3" v-if="false">
            <a href="#" title="Facebook" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
              <i class="fab fa-facebook-f text-sm"></i>
            </a>
            <a href="#" title="Instagram" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
              <i class="fab fa-instagram text-sm"></i>
            </a>
            <a href="#" title="Twitter" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
              <i class="fab fa-twitter text-sm"></i>
            </a>
            <a href="#" title="LinkedIn" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
              <i class="fab fa-linkedin-in text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-white font-semibold mb-4" style="font-family: 'Inter', sans-serif">{{ t('footer.navigation') }}</h4>
          <ul class="space-y-2 text-sm list-none">
            <li><RouterLink :to="localizedSection('#features')" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.features') }}</RouterLink></li>
            <li><RouterLink :to="localizedSection('#benefits')" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.benefits') }}</RouterLink></li>
            <li><RouterLink :to="localizedSection('#download')" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.download') }}</RouterLink></li>
            <li><RouterLink :to="localizedSection('#contact')" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.contact') }}</RouterLink></li>
          </ul>
        </div>

        <!-- Produk -->
        <div>
          <h4 class="text-white font-semibold mb-4" style="font-family: 'Inter', sans-serif">{{ t('footer.product') }}</h4>
          <ul class="space-y-2 text-sm list-none">
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.jayidevtech.rekapuang"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-400 hover:text-white transition-colors"
              >
                {{ t('footer.downloadAndroid') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-slate-400 hover:text-white transition-colors" @click.prevent="openIosComingSoon">
                {{ t('footer.downloadIos') }}
              </a>
            </li>
            <li>
              <RouterLink :to="localizedPath('/changelog')" class="text-slate-400 hover:text-white transition-colors">{{ t('footer.changelog') }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-white font-semibold mb-4" style="font-family: 'Inter', sans-serif">{{ t('footer.legal') }}</h4>
          <ul class="space-y-2 text-sm list-none">
            <li><RouterLink :to="localizedPath('/privacy-policy')" class="text-slate-400 hover:text-white transition-colors">{{ t('footer.privacy') }}</RouterLink></li>
            <li><RouterLink :to="localizedPath('/terms-of-service')" class="text-slate-400 hover:text-white transition-colors">{{ t('footer.terms') }}</RouterLink></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-slate-500 text-center md:text-left">
        <p>&copy; 2026 Rekap Uang. {{ t('footer.rights') }}</p>
        <p>{{ t('footer.madeWith') }} <i class="fas fa-heart text-red-500 mx-1"></i> {{ t('footer.by') }} <a href="https://jayidev.tech" target="_blank" rel="noopener noreferrer" class="font-bold">jayidev.tech</a> {{ t('footer.forFreedom') }}</p>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showIosComingSoon"
        class="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center p-4"
        @click="onOverlayClick"
      >
        <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
          <h3 class="text-xl font-bold text-slate-800 mb-2" style="font-family: 'Inter', sans-serif">{{ t('iosPopup.title') }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-5">
            {{ t('iosPopup.body') }}
          </p>
          <button
            class="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 transition-colors"
            @click="closeIosComingSoon"
          >
            {{ t('iosPopup.ok') }}
          </button>
        </div>
      </div>
    </Teleport>
  </footer>
</template>
