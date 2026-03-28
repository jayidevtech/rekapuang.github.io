import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { useLocale } from './composables/useLocale'

const { initLocale } = useLocale()
initLocale()

createApp(App).use(router).mount('#app')
