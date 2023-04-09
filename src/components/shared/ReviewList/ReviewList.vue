<template>
  <section class="reviews-list container">
    <ReviewCard
      v-for="item in reviews"
      :key="item.id"
      :body="item.attributes.body"
      :fullName="item.attributes.fullName"
      :position="item.attributes.position"
      :avatar="item.attributes.avatar.data.attributes.url"
    ></ReviewCard>
  </section>
</template>

<style lang="scss" scoped>
.reviews-list {
  display: flex;
  gap: 30px;
}
</style>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

import ReviewCard from '../ReviewList/ReviewCard.vue'

let reviews = ref([])

const getReviews = () => {
  return axios.get('http://localhost:1337/api/reviews?populate=avatar')
}

getReviews()
  .then((resp) => {
    reviews.value = resp.data.data
  })
  .catch((err) => console.log(err))
</script>
