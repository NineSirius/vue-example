<template>
  <div class="container">
    <div class="navbar">
      <ul class="nav-links" :class="{ active: mobileNav.isActive }">
        <li><RouterLink to="/" activeClass="active" class="nav-link">Главная</RouterLink></li>
        <li>
          <RouterLink to="/landing" activeClass="active" class="nav-link">Лендинг</RouterLink>
        </li>
        <li><RouterLink to="/about" activeClass="active" class="nav-link">О нас</RouterLink></li>
        <li><RouterLink to="/team" activeClass="active" class="nav-link">Команда</RouterLink></li>
        <li>
          <RouterLink to="/gallery" activeClass="active" class="nav-link">Галерея</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts" activeClass="active" class="nav-link">Контакты</RouterLink>
        </li>
      </ul>

      <button class="hamburger hamburger--slider" type="button" @click="switchIsActive">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <!-- <v-button
        style="margin-left: auto"
        v-if="isAuthenticated"
        @click="router.push('/profile')"
        >Профиль</v-button
      > -->

      <div class="profile" v-if="userInfo.data" style="margin-left: auto" ref="ddd">
        <button class="profile-btn" @click="profileIsShow = !profileIsShow">
          <img
            :src="userInfo.data.avatar.url"
            :alt="userInfo.data.username"
            class="avatar"
            v-if="userInfo.data.avatar"
          />
          <img src="/img/base-avatar.png" :alt="userInfo.data.username" class="avatar" v-else />
        </button>
        <div class="profile-info" :class="{ active: profileIsShow }">
          <div class="user-info">
            <img :src="userInfo.data.avatar.url" :alt="userInfo.data.username" class="avatar" />
            <div class="user-info-content">
              <h4 class="username">{{ userInfo.data.username }}</h4>
              <p class="email">{{ userInfo.data.email }}</p>
            </div>
          </div>

          <v-button
            @click="router.push('/admin')"
            variant="icon"
            icon="admin"
            v-if="userInfo.data.role.name === 'Admin'"
            >Админка</v-button
          >
          <v-button @click="logout" variant="icon" icon="sign-out">Выход</v-button>
        </div>
      </div>
      <v-button style="margin-left: auto" @click="authModal = true" v-else>Вход</v-button>
    </div>
    <div
      class="overlay"
      @click="mobileNav.isActive = false"
      :class="{ active: mobileNav.isActive }"
    ></div>
  </div>

  <v-modal :isActive="authModal" @closeModal="authModal = false">
    <AuthForm :clear="authModal"
  /></v-modal>
</template>

<style scoped lang="scss">
@import url('@/assets/hamburger.css');
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-color);
  padding: 22px;
  .nav-links {
    margin: 0;
    display: flex;
    .nav-link {
      padding: 10px 20px;
      font-weight: 400;
      font-size: 1rem;
      &.active {
        color: var(--primary-color);
      }

      &:hover {
        color: var(--secondary-color);
      }
    }
  }
}

.avatar {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.profile {
  position: relative;

  width: 35px;
  height: 35px;

  .profile-btn {
    border: none;
    background: none;

    &:hover {
      cursor: pointer;
    }
  }

  .profile-info {
    top: 110%;
    right: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 0;
    background: #ffff;
    box-shadow: var(--box-shadow);
    visibility: hidden;
    opacity: 0;
    transition: 0.2s;

    button {
      padding: 10px 15px;
    }

    .user-info {
      display: flex;
      padding: 10px;
      gap: 10px;
      .avatar {
        width: 35px;
        height: 35px;
      }

      .username {
        font-family: 'Ubuntu', sans-serif;
      }
      .email {
        font-size: 12px;
        line-height: unset;
        font-family: 'Ubuntu', sans-serif;
        color: var(--text-color);
      }

      &-content {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
    }

    &.active {
      visibility: visible;
      opacity: 1;
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
    width: 50vw !important;
    max-width: 50vw;
  }

  .nav-link {
    font-size: 1.5rem;
  }
}

@media (max-width: 380px) {
  .nav-links {
    width: 100vw !important;
  }
}
</style>

<script setup>
import { reactive, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import AuthForm from '@/components/Forms/AuthForm/AuthForm.vue'
import Cookie from 'js-cookie'
import router from '../router'
import { getUserInfo } from '../api/requests'
import { authDataStore } from '../store/authStore'

watch(router.currentRoute, () => {
  mobileNav.isActive = false

  console.log(router.currentRoute.value.fullPath)
})

let userInfo = authDataStore()

const logout = () => {
  Cookie.remove('token')
  location.reload()
}

let profileIsShow = ref(false)

// document.body.addEventListener('click', (e) => {
//   console.log(e.target.classList)
// })

const switchIsActive = () => {
  mobileNav.isActive = !mobileNav.isActive
}

const token = ref(Cookie.get('token') || false)

if (!userInfo.data && token.value) {
  getUserInfo(token.value).then((resp) => {
    console.log(resp)
    userInfo.changeData(resp)
  })
}

const mobileNav = reactive({
  default: 'navbar',
  isActive: false
})

watch(mobileNav.isActive, () => {
  console.log('changed')
  mobileNav.isActive
    ? document.body.classList.add('fixed')
    : document.body.classList.remove('fixed')
})

const authModal = ref(false)
</script>
