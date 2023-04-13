import VInput from './UI/VInput.vue'
import VButton from './UI/VButton.vue'
import VLoader from './UI/VLoader.vue'
import VModal from './UI/VModal.vue'
import AuthInput from './UI/AuthInput.vue'

const components = [
  {
    name: 'VLoader',
    component: VLoader
  },
  {
    name: 'VInput',
    component: VInput
  },
  { name: 'VButton', component: VButton },
  { name: 'VModal', component: VModal },
  { name: 'AuthInput', component: AuthInput }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
