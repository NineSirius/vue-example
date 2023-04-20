<template>
  <div class="message-form" :style="{ background: bg, color: color }">
    <div class="container">
      <InfoWrap class="message-form">
        <template #first-content>
          <img
            :src="picture"
            alt="landing info image"
            class="info-item-img"
            style="width: 90% !important"
          />
        </template>
        <template #second-content>
          <MessageForm />
        </template>
      </InfoWrap>
    </div>
  </div>
</template>

<script setup>
import InfoWrap from '../../shared/InfoWrap.vue'
import MessageForm from './MessageForm.vue'

const props = defineProps({
  picture: String,
  bg: String,
  color: String
})
</script>

<style lang="scss" scoped>
.primary {
  background: var(--primary-color);
}

.secondary {
  background: var(--secondary-color);
}

.additional {
  background: var(--additional-color);
}
.info-item-img {
  width: 70% !important;
  align-self: center;
}

.message-form {
  padding: 50px 10px;
}
</style>
