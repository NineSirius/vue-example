<template>
  <label v-if="type !== 'passwordWithConfirm'">
    <div class="input-wrap">
      <input
        :class="{ focused: focus.value }"
        :name="name"
        :type="type !== 'passwordWithConfirm' && type"
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
        v-else-if="showPassword && type !== 'passwordWithConfirm'"
        v-model="value"
      />

      <span
        class="placeholder"
        :class="{ active: showPassword && value !== '' }"
        >{{ placeholder }} {{ required && '*' }}</span
      >
    </div>

    <label>
      <div class="show-pass" v-if="type === 'password'">
        <input type="checkbox" @change="showPasswordFoo" />
        <span class="text">Показать пароль</span>
      </div>
    </label>
  </label>

  <div class="password-confirmation" v-else-if="type === 'passwordWithConfirm'">
    <span class="message" v-if="value !== confirmValue"
      >Пароли не совпадают</span
    >
    <label>
      <div class="input-wrap">
        <input
          :name="name"
          :type="showPassword ? 'text' : 'password'"
          :required="required"
          v-model="value"
        />
        <span
          class="placeholder"
          :class="{ active: showPassword && value !== '' }"
        >
          Введите пароль {{ required && '*' }}</span
        >
      </div>
    </label>
    <label>
      <div class="input-wrap">
        <input
          :name="name"
          :type="showPassword ? 'text' : 'password'"
          :required="required"
          v-model="confirmValue"
        />
        <span
          class="placeholder"
          :class="{ active: showPassword && value !== '' }"
          >Повторите пароль {{ required && '*' }}</span
        >
      </div>
    </label>

    <label>
      <div class="show-pass">
        <input type="checkbox" @change="showPasswordFoo" />
        <span class="text">Показать пароль</span>
      </div>
    </label>
  </div>
</template>

<style scoped lang="scss">
.password-confirmation {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .message {
    color: red;
  }
}
.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--light-color);
  width: 100%;

  input {
    border: unset;
    background: unset;
    outline: none;
    width: 100%;
    padding: 20px;
    height: 100%;
    color: var(--text-color);
    border-radius: 10px;
    outline: 1px solid lightgray;

    font-size: 18px;
    font-weight: 400;
    transition: 0.2s;

    &:focus {
      outline: 2px solid var(--primary-color);
    }
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

  .input:focus .input-wrap {
    border: 1px solid green;
  }
}

.show-pass {
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
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

const showPasswordFoo = (e) => {
  showPassword.value = e.target.checked
}

const emits = defineEmits(['update:modelValue'])
const value = ref(modelValue)
const confirmValue = ref('')
const focus = ref(false)
const showPassword = ref(false)

watch(value, () => {
  emits('update:modelValue', value.value)
})
</script>
