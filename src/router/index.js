import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'home',
      component: LandingPage
    }
  ]
})

export default router