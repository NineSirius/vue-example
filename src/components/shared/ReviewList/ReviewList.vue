<template>
  <section class="reviews-list container">
    <center><h2 class="title">Read what our customers say</h2></center>
    <div class="reviews-list-content">
      <ReviewCard
        v-for="item in reviews"
        class="review-card"
        :key="item.id"
        :body="item.attributes.body"
        :fullName="item.attributes.fullName"
        :position="item.attributes.position"
        :avatar="item.attributes.avatar.data.attributes.url"
      ></ReviewCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 60px auto;
}
.reviews-list-content {
  display: flex;
  gap: 30px;
}

@media (max-width: 768px) {
  .reviews-list-content {
    flex-wrap: wrap;

    .review-card {
      flex-basis: 100%;
    }
  }
}
</style>

<script setup>
import { ref } from 'vue'

import { getReviews } from '@/api/requests.js'

import ReviewCard from '../ReviewList/ReviewCard.vue'

let reviews = ref([])

getReviews()
  .then((resp) => {
    reviews.value = resp.data.data
  })
  .catch((err) => console.log(err))
</script>
