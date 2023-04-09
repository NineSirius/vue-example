<template>
  <header class="header">
    <!-- <TheNavigation /> -->

    <div class="container">
      <div class="header-content container">
        <h1 class="header-title">Digital product marketing agency</h1>

        <p class="header-desc">
          Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix,
          in sumo augue soluta vis.
        </p>

        <form>
          <div class="header-form">
            <v-input
              type="email"
              name="email"
              placeholder="Введите свой электронный адрес"
              modelValue="userEmail"
            />
            <v-button type="submit">Подтвердить</v-button>
          </div>
        </form>

        <div class="header-contact-wrap">
          <div class="phone-wrap">
            <span class="icon">
              <i class="icon-phone"></i>
            </span>
            <a href="tel:+1(234) 567-8910" class="phone">+1(234) 567-8910</a>
          </div>

          <span class="email">
            <a href="mailto:info@sample.com">info@sample.com</a>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: url('/img/header-bg.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.header-title {
  color: var(--light-color);
  font-size: 3.75rem;
  font-weight: 700;
  font-family: 'Ubuntu';
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 570px;
  margin: 0;
  margin-right: auto;
  padding: 130px 0;
}

.header-form {
  background: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.header-contact-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .phone-wrap {
    display: flex;
    align-items: center;
    gap: 20px;

    .icon {
      border-radius: var(--border-radius);
      background: var(--secondary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      color: var(--light-color);
      padding: 10px;
    }

    .phone {
      font-size: 2.25rem;
      color: var(--light-color);
      font-weight: 700;
      transition: 0.1s;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  .email {
    color: var(--light-color);
  }
}

@media screen and (max-width: 560px) {
  .header-form {
    display: flex;
    flex-direction: column;

    button {
      width: 100% !important;
    }
  }
}
</style>

<script setup>
import TheNavigation from './TheNavigation.vue'
import { ref } from 'vue'
import { sendEmail } from '@/api/requests.js'

const userEmail = ref('')

const sendEmailFoo = () => {
  sendEmail(email)
}

const email = ref('0')
</script>
