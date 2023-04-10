<template>
  <div class="navbar" :class="{ active: isActive }">
    <ul class="nav-links">
      <li><RouterLink to="/home" class="nav-link">Главная</RouterLink></li>
      <li><RouterLink to="/landing" class="nav-link">Лендинг</RouterLink></li>
      <li><RouterLink to="/about" class="nav-link">О нас</RouterLink></li>
      <li><RouterLink to="/team" class="nav-link">Команда</RouterLink></li>
      <li><RouterLink to="/gallery" class="nav-link">Галерея</RouterLink></li>
      <li><RouterLink to="/contacts" class="nav-link">Контакты</RouterLink></li>
    </ul>

    <button class="hamburger">=</button>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  background: var(--light-color);
  padding: 22px 0;
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
}

@media (max-width: 768px) {
  .hamburger {
    display: inline-flex;
  }
  .navbar {
    transform: translateX(-100%);
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

    &.active {
      transform: translateX(0);
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
import { RouterLink } from 'vue-router'

const mobileNav = reactive({
  default: 'navbar',
  isActive: false
})
</script>
