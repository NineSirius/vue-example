import { defineStore } from 'pinia'

export const authDataStore = defineStore({
  id: 'authData',
  state: () => ({
    data: null
  }),
  actions: {
    changeData(data) {
      this.data = data
    }
  }
})
