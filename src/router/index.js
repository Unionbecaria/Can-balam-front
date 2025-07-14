import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Error404 from '@/views/Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        const scrollWithOffset = (el) => {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 84
          window.scrollTo({ top, behavior: 'smooth' })
        }

        const el = document.querySelector(to.hash)
        if (el) {
          scrollWithOffset(el)
          resolve(false)
          return
        }

        const observer = new MutationObserver((mutations, obs) => {
          const el = document.querySelector(to.hash)
          if (el) {
            scrollWithOffset(el)
            obs.disconnect()
            resolve(false)
          }
        })

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        })

        setTimeout(() => {
          observer.disconnect()
          resolve({ top: 0 }) // fallback
        }, 2000)
      })
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }


})

export default router
