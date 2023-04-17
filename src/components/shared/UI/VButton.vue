<template>
  <button
    :type="type"
    class="btn"
    :class="{ [color]: color }"
    :disabled="loading"
    v-if="variant === 'default'"
  >
    <slot v-if="!loading" />
    <v-loader v-if="loading"></v-loader>
  </button>

  <button v-else-if="variant === 'icon'" class="btn-icon">
    <span class="icon">
      <i :class="{ ['icon-' + icon]: true }"></i>
    </span>
    <span class="text"><slot></slot></span>
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
  },
  loading: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'default'
  },
  icon: String
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

.btn-icon {
  display: flex;
  align-items: center;
  gap: 10px;
  background: unset;
  border: unset;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background: #f2f2f2;
  }

  .icon {
    font-size: 1.0625rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    line-height: 115%;
  }
}
</style>
