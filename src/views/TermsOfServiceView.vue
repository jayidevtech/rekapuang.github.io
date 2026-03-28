<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocale } from '@/composables/useLocale'
import { useLocalizedRoute } from '@/composables/useLocalizedRoute'

const { t, isEnglish } = useLocale()
const { homePath } = useLocalizedRoute()

const sections = computed(() => (
  isEnglish.value
    ? [
      {
        id: 'acceptance',
        emoji: '📌',
        title: 'Acceptance of Terms',
        content: `<p>By downloading, installing, and using the Rekap Uang mobile app (the "App"), you agree to be bound by these Terms & Conditions (the "Agreement"). If you do not agree to any part of this Agreement, please do not use the App.</p>
        <p><strong>JAYIDEVTECH</strong> ("we" or the "Company") may update these Terms & Conditions at any time. Continued use of the App after changes means you accept the updated version.</p>`,
      },
      {
        id: 'license',
        emoji: '📜',
        title: 'License and Ownership Rights',
        content: `<p>We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial use. You may not:</p>
        <ul>
          <li><i class="fas fa-times text-red-500"></i> Sell, license, or transfer the App</li>
          <li><i class="fas fa-times text-red-500"></i> Modify or hack the App</li>
          <li><i class="fas fa-times text-red-500"></i> Use it for commercial purposes without written permission</li>
          <li><i class="fas fa-times text-red-500"></i> Redistribute or reverse engineer the App</li>
          <li><i class="fas fa-times text-red-500"></i> Create derivative products based on the App</li>
        </ul>`,
      },
      {
        id: 'acceptable-use',
        emoji: '✅',
        title: 'Acceptable Use',
        content: `<p>You agree to use the App only for lawful purposes and you will not:</p>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Use the App for illegal or unauthorized activities</li>
          <li><i class="fas fa-check text-emerald-500"></i> Disrupt or disable App services</li>
          <li><i class="fas fa-check text-emerald-500"></i> Attempt unauthorized access to the App or servers</li>
          <li><i class="fas fa-check text-emerald-500"></i> Share your access with third parties without permission</li>
          <li><i class="fas fa-check text-emerald-500"></i> Use the App to deliver malware or viruses</li>
        </ul>`,
      },
      {
        id: 'disclaimer',
        emoji: '⚠️',
        title: 'Disclaimer',
        content: `<h3>"AS IS" Basis</h3>
        <p>The App is provided "AS IS" without any warranties, express or implied.</p>
        <h3>No Financial Advice</h3>
        <p>Rekap Uang is a tool to record and analyze your finances, <strong>NOT</strong> financial or investment advice. We do not provide financial recommendations. Consult a professional financial advisor for major decisions.</p>
        <h3>Device Compatibility</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Minimum Android: SDK 21 (Android 5.0)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Minimum iOS: iOS 12.0</li>
        </ul>`,
      },
      {
        id: 'ip',
        emoji: '🎨',
        title: 'Intellectual Property Rights',
        content: `<p>All content in the App, including but not limited to text, graphics, logos, icons, and images, is owned by JAYIDEVTECH or its licensors and protected by international copyright laws.</p>`,
      },
      {
        id: 'governing-law',
        emoji: '📋',
        title: 'Governing Law',
        content: `<p>This Agreement and your use of the App are governed by and interpreted in accordance with the laws of Indonesia, without regard to conflict of law principles.</p>`,
      },
      {
        id: 'contact',
        emoji: '📞',
        title: 'Contact & Support',
        content: `<p>For questions about these Terms & Conditions:</p>
        <ul>
          <li><i class="fas fa-envelope text-blue-500"></i> Email: <strong>legal@jayidev.tech</strong></li>
          <li><i class="fas fa-globe text-blue-500"></i> Website: <strong>jayidevtech.github.io</strong></li>
          <li><i class="fas fa-comment text-blue-500"></i> In-App Support: Settings > Contact Support</li>
        </ul>`,
      },
    ]
    : [
      {
        id: 'acceptance',
        emoji: '📌',
        title: 'Penerimaan Syarat',
        content: `<p>Dengan mengunduh, menginstal, dan menggunakan aplikasi mobile Rekap Uang ("Aplikasi"), Anda sepakat untuk terikat oleh Syarat & Ketentuan ini ("Perjanjian"). Jika Anda tidak setuju dengan bagian mana pun dari Perjanjian ini, silakan jangan gunakan Aplikasi.</p>
        <p><strong>JAYIDEVTECH</strong> ("Kami" atau "Perusahaan") berhak untuk mengubah Syarat & Ketentuan ini kapan saja. Penggunaan berkelanjutan Aplikasi setelah perubahan berarti Anda menerima versi baru.</p>`,
      },
      {
        id: 'license',
        emoji: '📜',
        title: 'Lisensi dan Hak Kepemilikan',
        content: `<p>Kami memberikan Anda lisensi terbatas, non-eksklusif, dan tidak dapat ditransfer untuk menggunakan Aplikasi untuk tujuan pribadi dan non-komersial. Anda tidak boleh:</p>
        <ul>
          <li><i class="fas fa-times text-red-500"></i> Menjual, melisensikan, atau mentransfer Aplikasi</li>
          <li><i class="fas fa-times text-red-500"></i> Mengubah atau meretas Aplikasi</li>
          <li><i class="fas fa-times text-red-500"></i> Menggunakannya dengan tujuan komersial tanpa izin tertulis</li>
          <li><i class="fas fa-times text-red-500"></i> Mendistribusikan ulang atau membuat reverse engineer</li>
          <li><i class="fas fa-times text-red-500"></i> Membuat produk turunan berdasarkan Aplikasi</li>
        </ul>`,
      },
      {
        id: 'acceptable-use',
        emoji: '✅',
        title: 'Penggunaan yang Dapat Diterima',
        content: `<p>Anda setuju untuk menggunakan Aplikasi hanya untuk tujuan yang sah dan tidak akan:</p>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Menggunakan Aplikasi untuk aktivitas ilegal atau tidak sah</li>
          <li><i class="fas fa-check text-emerald-500"></i> Mengganggu atau melumpuhkan layanan Aplikasi</li>
          <li><i class="fas fa-check text-emerald-500"></i> Mencoba mendapatkan akses tidak sah ke Aplikasi atau server</li>
          <li><i class="fas fa-check text-emerald-500"></i> Membagikan akses Anda kepada pihak ketiga tanpa izin</li>
          <li><i class="fas fa-check text-emerald-500"></i> Menggunakan Aplikasi untuk mengirim malware atau virus</li>
        </ul>`,
      },
      {
        id: 'disclaimer',
        emoji: '⚠️',
        title: 'Disclaimer',
        content: `<h3>"AS IS" Basis</h3>
        <p>Aplikasi disediakan "SEBAGAIMANA ADANYA" tanpa garansi apapun, baik tersurat maupun tersirat.</p>
        <h3>Tidak Ada Saran Keuangan</h3>
        <p>Rekap Uang adalah alat untuk mencatat dan menganalisis keuangan Anda, <strong>BUKAN</strong> saran keuangan atau investasi. Kami tidak memberikan rekomendasi finansial. Konsultasikan dengan penasihat keuangan profesional untuk keputusan besar.</p>
        <h3>Kompatibilitas Perangkat</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Android minimum: SDK 21 (Android 5.0)</li>
          <li><i class="fas fa-check text-emerald-500"></i> iOS minimum: iOS 12.0</li>
        </ul>`,
      },
      {
        id: 'ip',
        emoji: '🎨',
        title: 'Hak Kekayaan Intelektual',
        content: `<p>Semua konten dalam Aplikasi, termasuk tetapi tidak terbatas pada teks, grafis, logo, ikon, gambar, adalah hak milik JAYIDEVTECH atau penyedia lisensinya, dan dilindungi oleh hukum hak cipta internasional.</p>`,
      },
      {
        id: 'governing-law',
        emoji: '📋',
        title: 'Hukum yang Berlaku',
        content: `<p>Perjanjian ini dan penggunaan Anda atas Aplikasi diatur oleh dan ditafsirkan sesuai dengan hukum Indonesia, tanpa memperhatikan prinsip-prinsip konflik hukumnya.</p>`,
      },
      {
        id: 'contact',
        emoji: '📞',
        title: 'Kontak & Support',
        content: `<p>Untuk pertanyaan tentang Syarat & Ketentuan ini:</p>
        <ul>
          <li><i class="fas fa-envelope text-blue-500"></i> Email: <strong>legal@jayidev.tech</strong></li>
          <li><i class="fas fa-globe text-blue-500"></i> Website: <strong>jayidevtech.github.io</strong></li>
          <li><i class="fas fa-comment text-blue-500"></i> In-App Support: Settings > Contact Support</li>
        </ul>`,
      },
    ]
))

const summaryItems = computed(() => (
  isEnglish.value
    ? [
      { icon: 'fas fa-user', title: 'Your Responsibility', desc: 'Use the app legally and wisely' },
      { icon: 'fas fa-shield-alt', title: 'Our Responsibility', desc: 'Limited by applicable laws' },
      { icon: 'fas fa-warning', title: 'Not Financial Advice', desc: 'A tracking tool, not a consultant' },
      { icon: 'fas fa-check-circle', title: 'Your Backup', desc: 'Always keep your own data backup' },
    ]
    : [
      { icon: 'fas fa-user', title: 'Tanggung Jawab Anda', desc: 'Gunakan aplikasi dengan bijak dan legal' },
      { icon: 'fas fa-shield-alt', title: 'Tanggung Jawab Kami', desc: 'Terbatas pada hukum yang berlaku' },
      { icon: 'fas fa-warning', title: 'Bukan Saran Finansial', desc: 'Hanya tool pencatat, bukan konsultan' },
      { icon: 'fas fa-check-circle', title: 'Backup Anda', desc: 'Selalu simpan backup data Anda sendiri' },
    ]
))

const pageTitle = computed(() => (
  isEnglish.value ? '⚖️ Terms & Conditions of Use' : '⚖️ Syarat & Ketentuan Penggunaan'
))
const lastUpdatedLabel = computed(() => (
  isEnglish.value ? 'Last updated: ' : 'Terakhir diperbarui: '
))
const lastUpdatedDate = computed(() => (
  isEnglish.value ? '28 February 2026' : '28 Februari 2026'
))
const summaryTitle = computed(() => (
  isEnglish.value ? '✅ Summary of Key Points' : '✅ Ringkasan Poin Penting'
))
</script>

<template>
  <div class="pt-4 pb-16 min-h-screen bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="py-12 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3" style="font-family: 'Inter', sans-serif">
          {{ pageTitle }}
        </h1>
        <p class="text-slate-500">
          {{ lastUpdatedLabel }}<strong>{{ lastUpdatedDate }}</strong>
        </p>
      </div>

      <!-- Sections -->
      <div class="policy-content space-y-2">
        <div
          v-for="s in sections"
          :key="s.id"
          class="bg-white rounded-2xl p-8 border border-slate-200"
        >
          <h2>{{ s.emoji }} {{ s.title }}</h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="s.content"></div>
        </div>

        <!-- Summary -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200">
          <h2>{{ summaryTitle }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div
              v-for="item in summaryItems"
              :key="item.title"
              class="text-center p-4 bg-blue-50 rounded-xl"
            >
              <i :class="`${item.icon} text-2xl text-blue-600 mb-2 block`"></i>
              <h4 class="font-bold text-slate-800 text-sm" style="font-family: 'Inter', sans-serif">{{ item.title }}</h4>
              <p class="text-slate-500 text-xs mt-1">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <RouterLink
          :to="homePath"
          class="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
        >
          <i class="fas fa-arrow-left"></i> {{ t('common.backHome') }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
