<script setup>
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <div class="wrapper">
    <TheNavigation />
    <!-- <MainHeader></MainHeader> -->
    <!-- <MainContent></MainContent> -->

    <main class="content"><RouterView></RouterView></main>
    <MainFooter></MainFooter>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  min-height: 100vh;
}

.content {
  min-height: calc(100vh - 250px);
}
</style>
