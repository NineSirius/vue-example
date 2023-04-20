<template>
  <div
    class="modal"
    :class="{ active: isActive }"
    :style="{
      background: bg
    }"
  >
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
  overflow-y: auto;
  transform: translate(-50%, -50%) scale(0.2);
  background: var(--light-color);
  z-index: 20;
  padding: 40px;
  border-radius: var(--border-radius);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@media (max-width: 972px) {
  .modal {
    min-width: 50vw;
    max-width: 100vw !important;
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
