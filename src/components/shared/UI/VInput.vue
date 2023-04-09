<template>
  <div class="input-wrap">
    <input
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :required="required"
      v-model="value"
    />
  </div>
</template>

<style scoped lang="scss">
.input-wrap {
  background: var(--light-color);
  border-radius: var(--border-radius);
  padding: 15px;
  width: 100%;

  input {
    border: unset;
    background: unset;
    outline: none;
    width: 100%;
    color: var(--text-color);

    font-size: var(--base-font-size);
    font-weight: 400;

    &::placeholder {
      color: var(--caption-color);
    }
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
watch(value, () => {
  emits('update:modelValue', value)
})
</script>
