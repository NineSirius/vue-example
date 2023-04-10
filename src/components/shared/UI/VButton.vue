<template>
  <button :type="type" class="btn" :class="{ [color]: color }">
    <slot />
  </button>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  content: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const isActive = ref(false)
</script>

<style scoped lang="scss">
.btn {
  border: unset;
  outline: unset;
  background: var(--primary-color);
  color: var(--light-color);
  padding: 15px 40px;
  border-radius: var(--border-radius);
  align-self: flex-start;

  font-weight: 600;
  text-transform: uppercase;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: var(--primary-color-hover);
  }

  &.primary {
    background: var(--primary-color);

    &:hover {
      background: var(--primary-color-hover);
    }
  }

  &.secondary {
    background: var(--secondary-color);

    &:hover {
      background: var(--secondary-color-hover);
    }
  }

  &.additional {
    background: var(--additional-color);

    &:hover {
      background: var(--additional-color-hover);
    }
  }
}
</style>
