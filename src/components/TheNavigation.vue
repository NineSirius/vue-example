<template>
  <div class="navbar" :class="{ active: isActive }">
    <ul class="nav-links">
      <router-link to="/home" class="nav-link">Главная</router-link>
      <router-link to="/landing" class="nav-link">Лендинг</router-link>
      <router-link to="/about" class="nav-link">О нас</router-link>
      <router-link to="/team" class="nav-link">Команда</router-link>
      <router-link to="/gallery" class="nav-link">Галерея</router-link>
      <router-link to="/contacts" class="nav-link">Контакты</router-link>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  background: var(--light-color);
  padding: 22px 0;
  transform: translateX(-100%);
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

  &.active {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 30vw;
    height: 100vh;

    .nav-links {
      display: flex;
      flex-direction: column;
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
import { reactive } from 'vue'
const mobileNav = reactive({
  default: 'navbar',
  isActive: false
})
</script>
