<template>
  <section class="ticket-wrap">
    <div class="container">
      <h2 class="title">Ticket Pricing</h2>
      <div class="cards">
        <div class="ticket-card">
          <h2 class="primary">Basic</h2>

          <div class="ticket-card-content">
            <h4 class="price">$ 39.99</h4>
            <ul>
              <li>Person Entrance</li>
              <li>Person Launch</li>
              <li>Hours Everyday</li>
              <li>Band Performance</li>
              <li>Day-Night Experience</li>
            </ul>
            <v-button @click="modalIsShow = true">Buy ticket</v-button>
          </div>
        </div>
        <div class="ticket-card">
          <h2 class="secondary">Standart</h2>

          <div class="ticket-card-content">
            <h4 class="price">$ 59.99</h4>
            <ul>
              <li>Person Entrance</li>
              <li>Person Launch</li>
              <li>Hours Everyday</li>
              <li>Band Performance</li>
              <li>Day-Night Experience</li>
            </ul>
            <v-button @click="modalIsShow = true">Buy ticket</v-button>
          </div>
        </div>
        <div class="ticket-card">
          <h2 class="additional">Premium</h2>

          <div class="ticket-card-content">
            <h4 class="price">$ 79.99</h4>
            <ul>
              <li>Person Entrance</li>
              <li>Person Launch</li>
              <li>Hours Everyday</li>
              <li>Band Performance</li>
              <li>Day-Night Experience</li>
            </ul>
            <v-button @click="modalIsShow = true">Buy ticket</v-button>
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

const modalIsShow = ref(false)
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
