<template>
  <div class="input-wrap">
    <textarea
      :placeholder="placeholder"
      :name="name"
      type="textarea"
      v-if="type === 'textarea'"
      rows="5"
      :required="required"
      :style="style"
      v-model="value"
    ></textarea>

    <input
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :required="required"
      v-model="value"
      v-else
    />
  </div>
</template>

<style scoped lang="scss">
.input-wrap {
  background: var(--light-color);
  border-radius: var(--border-radius);
  padding: 15px;
  width: 100%;

  input,
  textarea {
    font-family: 'Open Sans';
    border: unset;
    background: unset;
    outline: none;
    width: 100%;
    color: var(--text-color);
    resize: vertical;

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
  modelValue: String,
  style: Object
})

const emits = defineEmits(['update:modelValue'])
const value = ref(modelValue)
watch(value, () => {
  emits('update:modelValue', value.value)
})
</script>
