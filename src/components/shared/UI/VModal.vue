<template>
  <div class="modal" :class="{ active: isActive }">
    <slot />
  </div>

  <div class="overlay" :class="{ active: isActive }"></div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--light-color);
  z-index: 20;
  padding: 20px;
  border-radius: var(--border-radius);

  &.active {
    top: 50%;
  }
}
</style>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>
