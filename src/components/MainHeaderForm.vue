<template>
  <div class="header-content container" :style="{ color: color }">
    <h1 class="header-title">Digital product marketing agency</h1>

    <p class="header-desc">
      Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix, in sumo augue soluta
      vis.
    </p>

    <form @submit.prevent="sendEmailFoo">
      <div class="header-form">
        <v-input
          type="email"
          name="email"
          placeholder="Введите свой электронный адрес"
          v-model="requestEmail.email"
        />
        <v-button :loading="requestEmail.status" type="submit">Подтвердить</v-button>

        <div class="message success" :class="{ active: requestEmail.isSend }">
          <span class="close" @click="requestEmail.isSend = false">&times;</span>
          Спасибо! Ваше сообщение было отправлено.
        </div>
        <div class="message error" :class="{ active: requestEmail.isError }">
          <span class="close" @click="requestEmail.isError = false">&times;</span>
          При отправке возникла ошибка. Попробуйте повторить запрос позже
        </div>
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
</template>

<style lang="scss" scoped>
.header {
  background: url('/img/header-bg.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.header-title {
  color: inherit;
  font-size: 3.75rem;
  font-weight: 700;
  font-family: 'Ubuntu';
}

.header-desc {
  color: inherit;
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
  position: relative;
  overflow: hidden;
  background: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .message {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-self: start;
    font-size: 1.25rem;
    color: var(--light-color);
    transform: translateY(100%);
    transition: 0.1s;

    .close {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }

    &.success {
      background: var(--success-color);
    }

    &.error {
      background: var(--error-color);
    }

    &.active {
      transform: translateY(0);
    }
  }
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
      color: inherit;
      font-weight: 700;
      transition: 0.1s;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  .email {
    color: inherit;
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

@media screen and (max-width: 550px) {
  .phone-wrap {
    flex-direction: column;
  }

  .phone {
    font-size: 1.75rem !important;
  }
}
</style>

<script setup>
import { reactive } from 'vue'
import { sendEmail } from '@/api/requests.js'

const props = defineProps({
  bg: String,
  color: String
})

let requestEmail = reactive({
  email: '',
  status: false,
  isSend: false,
  isError: false
})

const sendEmailFoo = () => {
  requestEmail.status = true
  console.log(requestEmail.email)
  sendEmail(requestEmail.email)
    .then((resp) => {
      console.log(resp)
      requestEmail.status = false
      requestEmail.isSend = true
      requestEmail.isError = false
    })
    .catch((err) => {
      console.log(err)
      requestEmail.status = false
      requestEmail.isError = true
    })
}
</script>
