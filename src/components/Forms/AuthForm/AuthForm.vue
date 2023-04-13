<template>
  <form @submit.prevent="submitForm" v-if="pageStatus === 'edit'">
    <div class="form-wrap">
      <h2 class="title">Авторизация</h2>

      <div class="form-group">
        <div class="message" v-if="loginStatus.errorStatus === 400">
          Неверный логин или пароль
        </div>
        <auth-input
          placeholder="Введите свой email"
          name="identifier"
          type="email"
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

      <span>Войти с помощью</span>
      <div class="social-login">
        <span class="google"><i class="icon-google"></i></span>
        <span class="google"><i class="icon-discord"></i></span>
        <span class="google"><i class="icon-telegram"></i></span>
      </div>
      <v-button style="align-self: center; width: 100%" type="submit"
        >Войти</v-button
      >
    </div>
  </form>

  <div class="loading" v-else>
    <v-loader></v-loader>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { loginUser } from '../../../api/requests'
import Cookies from 'js-cookie'

const loginData = reactive({
  identifier: '',
  password: ''
})

let loginStatus = reactive({
  errorStatus: '',
  errorMessage: ''
})

let pageStatus = ref('edit')

const submitForm = () => {
  pageStatus.value = 'loading'
  loginUser(loginData)
    .then((resp) => {
      Cookies.set('token', resp.jwt, { expires: 7 })
      alert('Вы успешно авторизованы')
    })
    .catch((err) => {
      loginStatus.errorStatus = err.response.status
      pageStatus.value = 'edit'
    })
}
</script>

<style lang="scss" scoped>
.form-wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
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
    padding: 5px 10px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
