<script setup>
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <div class="wrapper">
    <TheNavigation />
    <!-- <MainHeader></MainHeader> -->
    <!-- <MainContent></MainContent> -->

    <RouterView></RouterView>
  </div>
</template>
