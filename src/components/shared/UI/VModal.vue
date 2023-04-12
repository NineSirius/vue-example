<template>
  <div class="modal" :class="{ active: isActive }">
    <slot />
  </div>

  <div
    class="overlay"
    :class="{ active: isActive }"
    @click="$emit('closeModal')"
  ></div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.2);
  background: var(--light-color);
  z-index: 20;
  padding: 20px;
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
</style>
<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

vbase
