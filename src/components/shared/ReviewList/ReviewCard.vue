<template>
  <article class="review-card">
    <img src="/img/quotes.png" alt="Quotes" class="quotes" />
    <p class="review-text">{{ body }}</p>

    <div class="review-author">
      <img :src="avatar" :alt="fullName" />
      <div class="author-info">
        <h4 class="name">{{ fullName }}</h4>
        <p class="position">{{ position }}</p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.review-card {
  width: 100%;
  background: var(--light-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 40px 60px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .quotes {
    width: 50px;
  }

  .review-text {
    color: var(--text-color);
    overflow: hidden;
  }

  .review-author {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }

    .author-info {
      display: flex;
      flex-direction: column;

      .position {
        color: var(--text-color);
      }
    }
  }
}
</style>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  fullName: String,
  body: String,
  avatar: String,
  position: String
})

const { fullName, body, avatar, position } = toRefs(props)
</script>
