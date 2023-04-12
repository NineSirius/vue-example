import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage/LandingPage.vue'
import GalleryPage from '@/pages/GalleryPage/GalleryPage.vue'
import AboutPage from '@/pages/AboutPage/AboutPage.vue'
import TeamPage from '@/pages/TeamPage/TeamPage.vue'
import ContactsPage from '@/pages/ContactsPage/ContactsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: LandingPage
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/gallery',
      name: 'Gallery Page',
      component: GalleryPage
    },
    {
      path: '/team',
      name: 'Team Page',
      component: TeamPage
    },
    {
      path: '/about',
      name: 'About Page',
      component: AboutPage
    },
    {
      path: '/contacts',
      name: 'ContactPage',
      component: ContactsPage
    }
  ]
})

export default router
