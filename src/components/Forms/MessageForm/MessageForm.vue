<template>
  <div class="form-wrap">
    <h3 class="form-title">Get Free SEO Analysis?</h3>
    <p class="form-desc">
      Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar
      neque laoreet suspendisse interdum consectetur libero.
    </p>

    <form @submit.prevent="submitForm">
      <div class="form" :style="{ backgroundColor: bg }">
        <div class="form-col">
          <label class="form-label">
            <span class="form-caption">Email</span>
            <v-input
              type="email"
              class="input"
              :style="{ color: '#000' }"
              required="true"
              v-model="messageInfo.email"
            ></v-input>
          </label>
          <label class="form-label">
            <span class="form-caption">Name</span>
            <v-input
              type="text"
              :style="{ color: '#000' }"
              v-model="messageInfo.name"
              required="true"
            ></v-input>
          </label>
        </div>
        <label class="form-label">
          <span class="form-caption">Message</span>
          <v-input
            type="textarea"
            :style="{ color: '#000' }"
            v-model="messageInfo.message"
            required="true"
          ></v-input>
        </label>
        <v-button :loading="sendMessageStatus.isLoading" type="submit">Submit</v-button>

        <div class="message success" :class="{ active: sendMessageStatus.isSend }">
          <span class="close" @click="sendMessageStatus.isSend = false">&times;</span>
          Спасибо! Ваше сообщение было отправлено.
        </div>
        <div class="message error" :class="{ active: sendMessageStatus.isError }">
          <span class="close" @click="sendMessageStatus.isError = false">&times;</span>
          При отправке возникла ошибка. Попробуйте повторить запрос позже
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { sendMessageData } from '@/api/requests.js'

const props = defineProps({
  bg: {
    type: String,
    default: '#f2f2f2'
  }
})

const submitForm = () => {
  sendMessageStatus.isLoading = true
  sendMessageData(messageInfo)
    .then((resp) => {
      sendMessageStatus.isSend = true
    })
    .catch((err) => {
      sendMessageStatus.isSend = true
    })
    .finally((resp) => (sendMessageStatus.isLoading = false))
}

const messageInfo = reactive({
  email: '',
  name: '',
  message: ''
})

const sendMessageStatus = reactive({
  errorMessage: '',
  isSend: false,
  isError: false,
  isLoading: false
})
</script>

<style lang="scss" scoped>
.form-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-title {
  font-size: 3rem;
  font-weight: 400;
  color: inherit;
}

.form-desc {
  color: inherit;
}

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  overflow: hidden;

  .form-col {
    display: flex;
    gap: 10px;

    .form-label {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        color: #000;
      }
    }
  }
}

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

.form-caption {
  color: #111;
}

@media (max-width: 992px) {
  .form-col {
    flex-direction: column;
  }
}
</style>
