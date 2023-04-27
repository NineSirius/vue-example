<template>
  <section class="ticket-wrap">
    <div class="container">
      <h2 class="title">Ticket Pricing</h2>
      <div class="cards">
        <div
          class="ticket-card"
          v-for="item in pageStore.AboutPage.product_info.product1"
          :key="item.id"
        >
          <h2 class="primary">{{ item.product_title }}</h2>

          <div class="ticket-card-content">
            <h4 class="price">$ {{ item.product_price }}</h4>
            <ul>
              <li>{{ item.product_feature }}</li>
              <li>{{ item.product_feature2 }}</li>
              <li>{{ item.product_feature3 }}</li>
              <li>{{ item.product_feature4 }}</li>
              <li>{{ item.product_feature5 }}</li>
            </ul>
            <v-button @click="modalIsShow = true">{{ item.product_btn_text }}</v-button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <v-modal :isActive="modalIsShow" @closeModal="modalIsShow = false">
    <MessageForm></MessageForm>
  </v-modal>
</template>

<script setup>
import { ref } from 'vue'
import MessageForm from '../Forms/MessageForm/MessageForm.vue'
import { usePageStore } from '../../store/pageStore'

const modalIsShow = ref(false)

const pageStore = usePageStore()
</script>

<style lang="scss" scoped>
.ticket-wrap {
  background: #f2f2f2;
  padding: 50px 0;

  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.title {
  text-align: center;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 20px;

  .ticket-card {
    width: 33.3%;
    background: #fff;
    box-shadow: var(--box-shadow);

    h2 {
      text-align: center;
      padding: 40px 0;
      font-size: 3rem;
      color: #fff;

      &:nth-child(1) {
        background: var(--primary-color);
      }
    }

    &:nth-child(2) {
      h2 {
        background: var(--secondary-color);
      }
    }
    &:nth-child(3) {
      h2 {
        background: var(--additional-color);
      }
    }

    .ticket-card-content {
      padding: 40px 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .price {
        font-size: 3rem;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      button {
        align-self: center;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .cards {
    flex-wrap: wrap;

    .ticket-card {
      width: 40%;
    }
    .ticket-card h2,
    .ticket-card-content .price {
      font-size: 2rem !important;
    }
  }
}

@media screen and (max-width: 540px) {
  .ticket-card {
    width: 100% !important;
  }
}
</style>
