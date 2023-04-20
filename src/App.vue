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

    <RouterView></RouterView>

    <MainFooter></MainFooter>
  </div>
</template>
