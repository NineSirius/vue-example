import { createApp } from 'vue'
import App from './App.vue'
import Shared from './components/shared'

import router from './router'

import './assets/icons.css'
import './assets/main.css'
import './assets/fonts.css'
import './assets/root.css'

const app = createApp(App)
app.use(Shared)
app.use(router)
app.mount('#app')
