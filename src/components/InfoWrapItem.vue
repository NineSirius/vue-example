<template>
  <div class="info-about" :style="{ background: bg, color: color }">
    <div class="container">
      <InfoWrap :style="{ flexDirection: reverse ? 'row-reverse' : 'row' }">
        <template v-slot:first-content>
          <div class="info-content">
            <h2 class="info-title">{{ title }}</h2>
            <p class="info-description">
              {{ desc }}
            </p>
            <v-button :color="btnColor" @click="startedModal = true" class="button"
              >Подтвердить</v-button
            >
          </div>
        </template>
        <template v-slot:second-content>
          <div class="info-img-wrap">
            <img :src="picture" alt="landing info image" class="info-item-img" />
          </div>
        </template>
      </InfoWrap>

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import InfoWrap from './shared/InfoWrap.vue'

const props = defineProps({
  title: String,
  desc: String,
  picture: String,
  bg: String,
  color: String,
  reverse: Boolean,
  btnColor: {
    type: String,
    default: 'primary'
  },
  formColor: {
    type: String,
    default: 'primary'
  }
})
</script>

<style lang="scss" scoped>
.info-about {
  background-repeat: no-repeat !important;
  background-position: 50% 50% !important;
  background-size: contain !important;

  padding: 100px 0 100px 0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.info-img-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
}
.info-item-img {
  width: 90% !important;
  align-self: center;
}
.info-items-wrap {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .info-item {
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--light-color);
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.15);
    border-radius: var(--border-radius);
    padding: 20px;
    text-align: center;

    .icon {
      font-size: 24px;
    }

    h4 {
      color: inherit;
      text-transform: uppercase;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
}

.info-wrap {
  &:nth-child(2) {
    background: var(--secondary-color);
  }
}

.info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-self: center;
  height: 100%;

  .info-title {
    font-size: 3rem;
    color: inherit;
    font-weight: 500;
  }

  .info-description {
    color: inherit;
  }
}

.icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: inherit;

  i {
    font-size: 32px;
  }
}

.info-item:nth-child(1) {
  .icon {
    background: var(--primary-color);
  }
}
.info-item:nth-child(2) {
  .icon {
    background: var(--secondary-color);
  }
}
.info-item:nth-child(3) {
  .icon {
    background: var(--additional-color);
  }
}

@media (max-width: 768px) {
  .button {
    align-self: center !important;
  }
}
</style>
