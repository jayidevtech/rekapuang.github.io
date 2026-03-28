<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNotification } from '@/composables/useNotification'
import { useLocale } from '@/composables/useLocale'

const { show } = useNotification()
const { t, isEnglish } = useLocale()

const form = ref({ name: '', email: '', message: '' })
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function submit() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    show(isEnglish.value ? 'Please fill all fields!' : 'Harap isi semua field!', 'error')
    return
  }
  if (!emailRegex.test(form.value.email)) {
    show(isEnglish.value ? 'Invalid email address!' : 'Email tidak valid!', 'error')
    return
  }

  const supportEmail = 'jayidevtech@gmail.com'
  const subject = isEnglish.value
    ? `Message from Landing Page - ${form.value.name}`
    : `Pesan dari Landing Page - ${form.value.name}`
  const body = isEnglish.value
    ? `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
    : `Nama: ${form.value.name}\nEmail: ${form.value.email}\n\nPesan:\n${form.value.message}`
  const mailtoUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.location.href = mailtoUrl
  form.value = { name: '', email: '', message: '' }
  show(isEnglish.value ? 'Opening email application...' : 'Membuka aplikasi email...', 'success')
}

const contactItems = computed(() => (
  isEnglish.value
    ? [
      {
        icon: 'fas fa-envelope',
        title: 'Email Support',
        content: 'jayidevtech@gmail.com',
        href: 'mailto:jayidevtech@gmail.com',
        note: 'Response within 24 hours',
      },
      {
        icon: 'fas fa-globe',
        title: 'Developer Website',
        content: 'jayidev.tech',
        href: 'https://jayidev.tech',
        note: 'Visit for more information',
      },
      {
        icon: 'fas fa-headset',
        title: 'In-App Support',
        content: 'Contact support directly from the app',
        href: null,
        note: 'Instant help and feedback form available',
      },
    ]
    : [
      {
        icon: 'fas fa-envelope',
        title: 'Email Support',
        content: 'jayidevtech@gmail.com',
        href: 'mailto:jayidevtech@gmail.com',
        note: 'Response dalam 24 jam',
      },
      {
        icon: 'fas fa-globe',
        title: 'Developer Website',
        content: 'jayidev.tech',
        href: 'https://jayidev.tech',
        note: 'Kunjungi untuk info lebih lanjut',
      },
      {
        icon: 'fas fa-headset',
        title: 'In-App Support',
        content: 'Hubungi support langsung dari aplikasi',
        href: null,
        note: 'Bantuan instant & feedback form tersedia',
      },
    ]
))

const namePlaceholder = computed(() => (isEnglish.value ? 'Your Name' : 'Nama Anda'))
const emailPlaceholder = computed(() => (isEnglish.value ? 'Your Email' : 'Email Anda'))
const messagePlaceholder = computed(() => (isEnglish.value ? 'Questions or feedback...' : 'Pertanyaan atau feedback...'))
const submitLabel = computed(() => (isEnglish.value ? 'Send Message' : 'Kirim Pesan'))
</script>

<template>
  <section id="contact" class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Inter', sans-serif">
          {{ t('section.contact.title') }}
        </h2>
        <p class="text-slate-500 text-lg">{{ t('section.contact.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div
            v-for="item in contactItems"
            :key="item.title"
            class="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
              <i :class="item.icon"></i>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-1" style="font-family: 'Inter', sans-serif">{{ item.title }}</h4>
              <a
                v-if="item.href"
                :href="item.href"
                class="text-blue-600 hover:underline text-sm"
              >
                {{ item.content }}
              </a>
              <p v-else class="text-slate-600 text-sm">{{ item.content }}</p>
              <small class="block text-slate-400 text-xs mt-1">{{ item.note }}</small>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <form class="space-y-5" @submit.prevent="submit">
            <div>
              <input
                v-model="form.name"
                type="text"
                :placeholder="namePlaceholder"
                required
                class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all duration-200"
              />
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                :placeholder="emailPlaceholder"
                required
                class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all duration-200"
              />
            </div>
            <div>
              <textarea
                v-model="form.message"
                :placeholder="messagePlaceholder"
                rows="5"
                required
                class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all duration-200 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
            >
              {{ submitLabel }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
