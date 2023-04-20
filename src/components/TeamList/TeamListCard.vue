<template>
  <div class="card">
    <img :src="avatar" alt="Betty Nelson" class="avatar" />
    <h4 class="name">{{ fullname.firstname }} {{ fullname.lastname }}</h4>
    <span class="position">{{ position }}</span>
    <p class="desc">{{ text }}</p>
    <div class="social">
      <a
        :href="item.link"
        target="_blank"
        class="social-link"
        v-for="item in contacts"
        :key="item.id"
      >
        <i :class="`icon-${item.name}`"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fullname: Object,
  avatar: String,
  text: String,
  position: String,
  contacts: Array
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #fff;
  box-shadow: var(--box-shadow);

  gap: 15px;
  .avatar {
    width: 133px;
    height: 133px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 50%;
  }

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
    font-size: 1rem;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
    gap: 10px;

    .social-link {
      background: var(--additional-color);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
