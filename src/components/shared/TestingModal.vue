<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()

function close() {
  emit('close')
}

function handleOverlayClick(event: MouseEvent) {
  if (event.target === event.currentTarget) close()
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
      @click="handleOverlayClick"
    >
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl leading-none"
          aria-label="Tutup"
          @click="close"
        >&times;</button>

        <h2 class="text-2xl font-bold text-slate-800 mb-2 pr-6" style="font-family: 'Inter', sans-serif">
          Bergabung Pengujian Tertutup
        </h2>

        <div class="space-y-6 mt-6">
          <div>
            <h3 class="font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <i class="fas fa-mobile-alt text-blue-600"></i>
              Bergabung Google Groups
            </h3>
            <p class="text-slate-500 text-sm mb-4">
              Anda harus bergabung dengan grup pengujian tertutup di Google Groups untuk mendapatkan akses awal ke aplikasi Rekap Uang.
            </p>

            <ol class="space-y-3 text-sm text-slate-600 list-decimal list-inside">
              <li><strong>Buka Browser:</strong> Buka Chrome, Firefox atau Safari.</li>
              <li>
                <strong>Akses Link:</strong> Kunjungi
                <a
                  href="https://groups.google.com/search?q=Tester%20Rekap%20Uang"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 underline"
                >Link Google Groups</a>
                untuk mengakses grup pengujian tertutup.
              </li>
              <li><strong>Cari Nama Grup:</strong> Cari dan Klik group <code class="bg-slate-100 px-1 rounded">Tester Rekap Uang</code> di hasil pencarian.</li>
              <li><strong>Klik Ikon Gabung:</strong> Biasanya berupa tombol bertuliskan <em>Minta untuk bergabung ke group</em> atau ikon "orang dengan tanda plus".</li>
              <li><strong>Selesaikan Pengaturan:</strong> Pilih preferensi pengiriman email dan klik <em>Join</em>.</li>
            </ol>
          </div>

          <div class="bg-blue-50 rounded-xl p-4 text-sm text-slate-600 flex gap-3">
            <i class="fas fa-info-circle text-blue-500 mt-0.5 shrink-0"></i>
            <p>
              Setelah bergabung, Anda akan mendapatkan akses untuk mengunduh melalui:
              <a
                href="https://play.google.com/apps/testing/com.jayidevtech.rekapuang"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 underline block mt-1 break-all"
              >play.google.com/apps/testing/com.jayidevtech.rekapuang</a>
            </p>
          </div>
        </div>

        <button
          class="mt-6 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          @click="close"
        >
          Mengerti, Tutup
        </button>
      </div>
    </div>
  </Teleport>
</template>
