import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { getPreferredLocale, useLocale, type Locale } from '@/composables/useLocale'

const { setLocale } = useLocale()

function localizedPath(path: string, locale: Locale) {
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: (to) => ({ path: localizedPath('/', getPreferredLocale()), query: to.query, hash: to.hash }),
    },
    {
      path: '/privacy-policy',
      redirect: (to) => ({ path: localizedPath('/privacy-policy', getPreferredLocale()), query: to.query, hash: to.hash }),
    },
    {
      path: '/terms-of-service',
      redirect: (to) => ({ path: localizedPath('/terms-of-service', getPreferredLocale()), query: to.query, hash: to.hash }),
    },
    {
      path: '/changelog',
      redirect: (to) => ({ path: localizedPath('/changelog', getPreferredLocale()), query: to.query, hash: to.hash }),
    },
    {
      path: '/:locale(id|en)',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:locale(id|en)/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/PrivacyPolicyView.vue'),
    },
    {
      path: '/:locale(id|en)/terms-of-service',
      name: 'terms-of-service',
      component: () => import('@/views/TermsOfServiceView.vue'),
    },
    {
      path: '/:locale(id|en)/changelog',
      name: 'changelog',
      component: () => import('@/views/ChangelogView.vue'),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 72, // navbar height offset
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to) => {
  const nextLocale = Array.isArray(to.params.locale) ? to.params.locale[0] : to.params.locale
  if (nextLocale === 'id' || nextLocale === 'en') {
    setLocale(nextLocale)
  }
})

export default router
