import { defineStore } from 'pinia'

export const usePageStore = defineStore({
  id: 'PagesStore',
  state: () => ({
    HomePage: null,
    LandingPage: null,
    AboutPage: null,
    TeamPage: null,
    GalleryPage: null,
    ContactsPage: null,
    Sponsors: null,
    DigitalMarketing: null
  }),
  actions: {
    changeState(key, data) {
      this[key] = data
    }
  }
})
