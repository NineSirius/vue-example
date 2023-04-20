<template>
  <div class="team-list">
    <TeamListCard
      v-for="item in data.data"
      :key="item.id"
      :fullname="{ firstname: item.attributes.firstname, lastname: item.attributes.lastname }"
      :text="item.attributes.about"
      :avatar="item.attributes.avatar.data.attributes.url"
      position="Лошарик"
    ></TeamListCard>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { getTeamList } from '../../api/requests'
import TeamListCard from './TeamListCard.vue'

let data = reactive({
  data: null
})

getTeamList()
  .then((resp) => {
    console.log(resp)
    data = resp
  })
  .catch((err) => console.log(err))
</script>

<style lang="scss" scoped>
.team-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
