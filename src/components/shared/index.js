import VInput from './UI/VInput.vue'
import VButton from './UI/VButton.vue'

const components = [
  {
    name: 'VInput',
    component: VInput
  },
  { name: 'VButton', component: VButton }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
