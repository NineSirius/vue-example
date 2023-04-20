<template>
  <section class="card-wrap" :style="{ background: bg }">
    <div class="card container">
      <h2 class="title">{{ title }}</h2>

      <v-button style="align-self: center" @click="modalIsShow = true">Начать</v-button>
    </div>
  </section>

  <v-modal :isActive="modalIsShow" @closeModal="modalIsShow = false">
    <MessageForm></MessageForm>
  </v-modal>
</template>

<script setup>
import { ref } from 'vue'
import MessageForm from './Forms/MessageForm/MessageForm.vue'

const props = defineProps({
  title: String,
  bg: {
    type: String,
    default: 'var(--primary-color)'
  }
})

const modalIsShow = ref(false)
</script>

<style lang="scss" scoped>
.card-wrap {
  padding: 60px 0;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 40px !important;
  width: 100%;
  gap: 40px;
  background: #f2f2f2;

  h2 {
    max-width: 60%;
    color: #000;
    font-size: 3rem;
  }
}

@media (max-width: 868px) {
  .card {
    flex-direction: column;
    gap: 20px;

    h2 {
      text-align: center;
      max-width: unset;
    }
  }
}
</style>
