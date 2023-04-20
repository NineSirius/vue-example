<template>
  <form @submit.prevent="submitForm" v-if="currentPageActive === 'login'">
    <div class="form-wrap">
      <h2 class="title">Авторизация</h2>

      <div class="form-group">
        <div class="message" v-if="loginStatus.errorMessage === 'Invalid identifier or password'">
          Неверный логин или пароль
        </div>
        <auth-input
          placeholder="Введите свой email"
          name="identifier"
          type="text"
          required
          v-model="loginData.identifier"
        ></auth-input>
      </div>

      <div class="form-group">
        <auth-input
          placeholder="Введите пароль"
          name="password"
          type="password"
          required
          v-model="loginData.password"
        ></auth-input>
      </div>

      <!-- <div class="social-login">
        <span class="google"><i class="icon-google"></i></span>
        <span class="vk"><i class="icon-vk"></i></span>
        <span class="telegram"><i class="icon-telegram"></i></span>
      </div> -->

      <v-button style="align-self: center; width: 100%" type="submit">Войти</v-button>
      <center>
        <span
          >Ещё нет аккаунта? Тогда
          <button @click="currentPageActive = 'reg'" class="link" type="button">
            зарегистрируйтесь
          </button></span
        >
      </center>
    </div>
  </form>

  <form @submit.prevent="submitRegForm" v-if="currentPageActive === 'reg'">
    <div class="form-wrap">
      <h2 class="title">Регистрация</h2>

      <div class="form-group-wrap">
        <div class="form-group">
          <div
            class="message"
            v-if="registerStatus.errorMessage === 'Email or Username are already taken'"
          >
            Email или имя пользователя уже используются
          </div>

          <auth-input
            placeholder="Введите имя пользователя"
            name="username"
            type="text"
            required
            v-model="registerData.username"
          ></auth-input>
        </div>

        <div class="form-group">
          <auth-input
            placeholder="Введите email"
            name="email"
            type="text"
            required
            v-model="registerData.email"
          ></auth-input>
        </div>
        <div class="form-group">
          <auth-input
            name="password"
            type="passwordWithConfirm"
            required
            v-model="registerData.password"
          ></auth-input>
        </div>
      </div>

      <!-- <div class="social-login">
        <span class="google"><i class="icon-google"></i></span>
        <span class="vk"><i class="icon-vk"></i></span>
        <span class="telegram"><i class="icon-telegram"></i></span>
      </div> -->

      <v-button style="align-self: center; width: 100%" type="submit">Войти</v-button>

      <center>
        <span
          >Уже есть аккаунт? Тогда
          <button @click="currentPageActive = 'login'" class="link" type="button">
            Войдите в аккаунт
          </button></span
        >
      </center>
    </div>
  </form>

  <div class="register-result" v-if="currentPageActive === 'register-success'">
    <h2>Ваш аккаунт был успешно зарегистрирован!</h2>
    <v-button @click="currentPageActive = 'login'">Авторизоваться</v-button>
  </div>

  <div class="loading" v-else-if="currentPageActive === 'loading'">
    <v-loader></v-loader>
  </div>

  <!-- <div
    class="register-result"
    v-else-if="currentPageActive === 'register-success'"
  ></div> -->
</template>

<script setup>
import { reactive, ref } from 'vue'
import { loginUser, registerUser } from '../../../api/requests'
import Cookies from 'js-cookie'

let currentPageActive = ref('login')

let loginData = reactive({
  identifier: '',
  password: ''
})

let registerData = reactive({
  username: '',
  email: '',
  password: ''
})

if (currentPageActive.value === 'login') {
  registerData = {
    username: '',
    email: '',
    password: ''
  }
} else if (currentPageActive.value === 'reg') {
  loginData = {
    identifier: '',
    password: ''
  }
}

let loginStatus = reactive({
  errorStatus: '',
  errorMessage: ''
})
let registerStatus = reactive({
  errorStatus: '',
  errorMessage: ''
})

const submitForm = () => {
  currentPageActive.value = 'loading'
  loginUser(loginData)
    .then((resp) => {
      Cookies.set('token', resp.jwt, { expires: 7 })
      location.reload()
    })
    .catch((error) => {
      return error.response.text().then((strapiErrorResponse) => {
        loginStatus.errorMessage = JSON.parse(strapiErrorResponse).error.message
        currentPageActive.value = 'login'
      })
    })
}

const submitRegForm = () => {
  currentPageActive.value = 'loading'
  registerUser(registerData)
    .then((resp) => {
      currentPageActive.value = 'register-success'
    })
    .catch((error) => {
      return error.response.text().then((strapiErrorResponse) => {
        registerStatus.errorMessage = JSON.parse(strapiErrorResponse).error.message
        currentPageActive.value = 'reg'
      })
    })
}
</script>

<style lang="scss" scoped>
.form-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.register-result {
  display: flex;
  flex-direction: column;
  gap: 10px;

  & button {
    align-self: center;
  }
}
.message {
  margin: 20px 0;
  color: red;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Ubuntu', sans-serif;
}

.social-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    border: 1px solid lightblue;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }

    &.google {
      color: black;
    }

    &.vk {
      color: #0077ff;
    }
    &.telegram {
      color: #29a9ea;
    }
  }
}
</style>
