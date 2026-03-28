import { ref, onMounted, onUnmounted } from 'vue'

export function useScreenshotSlider(count: number, intervalMs = 4000) {
  const current = ref(0)
  let timer: ReturnType<typeof setInterval> | null = null

  function goTo(index: number) {
    current.value = index
  }

  function next() {
    current.value = (current.value + 1) % count
  }

  function start() {
    if (timer) clearInterval(timer)
    timer = setInterval(next, intervalMs)
  }

  function stop() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  function goToAndRestart(index: number) {
    goTo(index)
    stop()
    start()
  }

  onMounted(start)
  onUnmounted(stop)

  return { current, goTo: goToAndRestart, pause: stop, resume: start }
}
