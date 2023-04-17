<template>
  <div class="container" v-if="userInfo.status === 'authorizined'">
    <h2 class="title">Профиль</h2>
    <div class="user-info-wrap">
      <img
        :src="userInfo.avatar || '/img/base-avatar.png'"
        alt=""
        class="avatar"
      />

      <div class="user-info">
        <h4 class="username">{{ userInfo.username }}</h4>
        
      </div>
    </div>
  </div>
  <div v-else-if="userInfo.status === 'unauthorizined'" class="container">
    <h2>Это страница для авторизованных пользователей</h2>
  </div>
  <div v-else class="container">
    <v-loader style="page"></v-loader>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { getUserInfo } from '../../api/requests'
import Cookie from 'js-cookie'

const userInfo = reactive({
  status: 'wait'
})
const token = Cookie.get('token') || ''

if (token !== '') {
  getUserInfo(token)
    .then((resp) => {
      console.log(resp)
      userInfo.status = 'authorizined'
    })
    .catch((err) => {
      console.log(err)
      userInfo.status = 'unauthorizined'
    })
}
</script>

<style lang="scss" scoped>
.avatar {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style>
