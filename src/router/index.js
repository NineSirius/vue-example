import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingPage
    }
  ]
})

export default router
