<template>
  <span class="loader" :class="{ style }"></span>
</template>

<style lang="scss" scoped>
.loader {
  width: 20px;
  height: 20px;
  border: 3px solid lightgray;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.page {
  width: 150px;
  height: 150px;
  border: 10px solid lightgray;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script setup>
const props = defineProps({
  style: String
})
</script>
