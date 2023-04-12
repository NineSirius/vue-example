<template>
  <div class="team-list">
    <div class="team-card" v-for="item in data.data" :key="item.id">
      <!-- <img :src="item.attributes.avatar.data.attributes.url" alt="avatar" /> -->
      <h2>hello world</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>

<script setup>
import { reactive } from 'vue'
import { getTeamList } from '../../api/requests'

let data = reactive({
  data: []
})

getTeamList()
  .then((resp) => {
    data = resp
  })
  .catch((err) => console.log(err))
</script>
