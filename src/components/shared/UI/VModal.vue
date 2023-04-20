<template>
  <div
    class="modal"
    :class="{ active: isActive }"
    :style="{
      background: bg
    }"
  >
    <span class="close" @click="$emit('closeModal')">
      <i class="icon-cross"></i>
    </span>
    <slot />
  </div>

  <div class="overlay" :class="{ active: isActive }" @click="$emit('closeModal')"></div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 100vh;
  min-width: 30vw;
  max-width: 600px !important;
  width: max-content;
  overflow-y: auto;
  transform: translate(-50%, -50%) scale(0.2);
  background: var(--light-color);
  z-index: 20;
  padding: 60px 40px 40px 40px;
  border-radius: var(--border-radius);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  .close {
    position: absolute;
    font-size: 32px;
    right: 20px;
    top: 20px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      color: var(--secondary-color);
    }
  }
}

@media (max-width: 972px) {
  .modal {
    min-width: 50vw;
    max-width: 90vw !important;
  }
}
</style>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  bg: {
    type: String,
    default: '#fff'
  }
})
</script>

vbase
