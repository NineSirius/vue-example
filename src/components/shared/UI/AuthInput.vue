<template>
  <label>
    <div class="input-wrap">
      <input
        :name="name"
        :type="type"
        :required="required"
        v-if="type !== 'password'"
        v-model="value"
      />
      <input
        :name="name"
        :type="showPassword ? 'text' : 'password'"
        :required="required"
        :value="value"
        v-if="!showPassword && type === 'password'"
        v-model="value"
      />
      <input
        :name="name"
        :type="showPassword ? 'text' : 'password'"
        :required="required"
        :value="value"
        v-else-if="showPassword"
        v-model="value"
      />

      <span
        class="placeholder"
        :class="{ active: showPassword && value !== '' }"
        >{{ placeholder }} {{ required && '*' }}</span
      >

      <button
        @click="showPassword = !showPassword"
        v-if="type === 'password' && value !== ''"
        type="button"
      >
        Show
      </button>
    </div>
  </label>
</template>

<style scoped lang="scss">
.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--light-color);
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 20px;
  width: 100%;

  input {
    border: unset;
    background: unset;
    outline: none;
    width: 100%;
    color: var(--text-color);

    font-size: 18px;
    font-weight: 400;
  }
  .placeholder {
    position: absolute;
    left: 10px;
    transform: translateY(0);
    color: var(--caption-color);
    background: #fff;
    padding: 0 5px;
    font-size: 18px;
    transition: 0.1s;

    &.active {
      transform: translateY(-30px);
      font-size: 16px;
    }
  }

  input:focus ~ .placeholder,
  input:valid ~ .placeholder {
    transform: translateY(-30px);
    font-size: 16px;
  }
}
</style>

<script setup>
import { ref, defineEmits, watch } from 'vue'

const { modelValue } = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'I`am placeholder'
  },
  name: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  },
  modelValue: String
})

const emits = defineEmits(['update:modelValue'])
const value = ref(modelValue)
const showPassword = ref(false)

watch(value, () => {
  emits('update:modelValue', value.value)
})
</script>
