<template>
  <div class="container">
    <div class="navbar">
      <ul class="nav-links" :class="{ active: mobileNav.isActive }">
        <li><RouterLink to="/" class="nav-link">Главная</RouterLink></li>
        <li><RouterLink to="/landing" class="nav-link">Лендинг</RouterLink></li>
        <li><RouterLink to="/about" class="nav-link">О нас</RouterLink></li>
        <li><RouterLink to="/team" class="nav-link">Команда</RouterLink></li>
        <li><RouterLink to="/gallery" class="nav-link">Галерея</RouterLink></li>
        <li>
          <RouterLink to="/contacts" class="nav-link">Контакты</RouterLink>
        </li>
      </ul>

      <button class="hamburger" @click="switchIsActive">=</button>
      <v-button style="margin-left: auto" @click="authModal = true"
        >Аккаунт</v-button
      >
    </div>
    <div
      class="overlay"
      @click="mobileNav.isActive = false"
      :class="{ active: mobileNav.isActive }"
    ></div>
  </div>

  <v-modal :isActive="authModal" @closeModal="authModal = false">
    <AuthForm
  /></v-modal>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-color);
  padding: 22px;
  .nav-links {
    display: flex;
    .nav-link {
      padding: 10px 20px;
      font-weight: 400;
      font-size: 1rem;
      &.active {
        color: var(--link-color);
      }
    }
  }
}

.hamburger {
  display: none;
  margin-right: auto;
}

@media (max-width: 768px) {
  .hamburger {
    display: inline-flex;
  }
  .navbar {
    .nav-links {
      transform: translateX(-100%);
      transition: 0.2s;
      display: flex;
      flex-direction: column;
      background: var(--light-color);
      padding: 30px 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 30vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 11;

      &.active {
        transform: translateX(0);
      }
    }
  }
}

@media (max-width: 640px) {
  .nav-links {
    width: 40vw;
  }
}

@media (max-width: 380px) {
  .nav-links {
    width: 100vw;
  }
}
</style>

<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import AuthForm from '@/components/Forms/AuthForm/AuthForm.vue'

const switchIsActive = () => {
  mobileNav.isActive = !mobileNav.isActive
  mobileNav.isActive && document.body.classList.add('fixed')
  !mobileNav.isActive && document.body.classList.add('fixed')
}
const mobileNav = reactive({
  default: 'navbar',
  isActive: false
})

const authModal = ref(false)
</script>
