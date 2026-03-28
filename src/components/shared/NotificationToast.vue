<script setup lang="ts">
import { useNotification } from '@/composables/useNotification'

const { notifications } = useNotification()

function bgColor(type: string) {
  if (type === 'success') return 'bg-emerald-500'
  if (type === 'error') return 'bg-red-500'
  return 'bg-blue-600'
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-5 right-5 z-9999 flex flex-col gap-3 pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="n in notifications"
          :key="n.id"
          class="pointer-events-auto px-5 py-4 rounded-xl text-white font-medium text-sm shadow-xl max-w-xs"
          :class="bgColor(n.type)"
        >
          {{ n.message }}
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-enter-active {
  animation: slideInRight 0.3s ease;
}
.toast-leave-active {
  animation: slideOutRight 0.3s ease;
}
@keyframes slideInRight {
  from { transform: translateX(400px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutRight {
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(400px); opacity: 0; }
}
</style>
