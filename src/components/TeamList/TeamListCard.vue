<template>
  <div class="card">
    <img :src="avatar" alt="Betty Nelson" />
    <h4 class="name">{{ fullname.firstname }} {{ fullname.lastname }}</h4>
    <span class="position">{{ position }}</span>
    <p class="desc">{{ text }}</p>
    <div class="social">
      <a href="#">
        <i class="icon-facebook"></i>
        <i class="icon-twitter"></i>
        <i class="icon-instagram"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fullname: Object,
  avatar: String,
  text: String,
  position: String
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;

  .name {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.25rem;
    font-family: 'Ubuntu', sans-serif;
  }

  .position {
    font-size: 1.125rem;
    color: var(--primary-color);
    font-weight: 600;
  }

  .desc {
    color: var(--text-color);
  }
}
</style>
