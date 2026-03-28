import { ref } from 'vue'

export type NotificationType = 'success' | 'error' | 'info'

export interface Notification {
  id: number
  message: string
  type: NotificationType
}

const notifications = ref<Notification[]>([])
let nextId = 0

export function useNotification() {
  function show(message: string, type: NotificationType = 'info') {
    const id = nextId++
    notifications.value.push({ id, message, type })
    setTimeout(() => {
      notifications.value = notifications.value.filter((n) => n.id !== id)
    }, 4000)
  }

  return { notifications, show }
}
