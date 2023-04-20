<template>
  <section class="container">
    <h2 class="title">Our People</h2>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <div class="team-list">
      <!-- проверяем наличие данных -->
      <!-- отображаем данные -->
      <TeamListCard
        v-for="item in data"
        :key="item.id"
        :fullname="{ firstname: item.attributes.firstname, lastname: item.attributes.lastname }"
        :text="item.attributes.about"
        :avatar="item.attributes.avatar?.data?.attributes?.url"
        :position="item.attributes?.position"
        :contacts="item.attributes?.contacts"
      ></TeamListCard>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getTeamList } from '../../api/requests'
import TeamListCard from './TeamListCard.vue'

const data = ref(null)

onMounted(() => {
  getTeamList()
    .then((resp) => {
      console.log(resp)
      data.value = resp.data
    })
    .catch((err) => console.log(err))
})

// добавить TeamListCard в components
const components = {
  TeamListCard
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 80px !important;
  gap: 30px;

  p {
    color: var(--text-color);
    max-width: 500px;
    margin: 0 auto;
  }
}

.team-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media screen and (max-width: 992px) {
  .team-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 640px) {
  .container {
    padding: 20px !important;
  }
}

@media screen and (max-width: 540px) {
  .team-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>


return String(Array.from(str).reverse)
