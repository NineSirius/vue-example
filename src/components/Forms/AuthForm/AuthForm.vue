<template>
  <div class="form-wrap" @submit.prevent="submitForm">
    <h2 class="form-title">Вход</h2>

    <div class="form-group">
      <v-input
        placeholder="Введите свой email"
        name="identifier"
        type="text"
        v-model="loginData.identifier"
      ></v-input>
    </div>

    <div class="form-group">
      <v-input
        placeholder="Введите пароль"
        name="password"
        type="password"
        v-model="loginData.password"
      ></v-input>
    </div>
    <v-button style="align-self: center">Войти</v-button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const loginData = reactive({
  identifier: '',
  password: ''
})

const loginStatus = ref('pending')

const submitForm = () => {}
</script>

<style lang="scss" scoped>
.form-wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
