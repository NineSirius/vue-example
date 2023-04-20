<template>
  <div class="header">
    <div class="container">
      <InfoWrap style="align-items: center">
        <template #first-content>
          <MainHeaderForm color="#fff"></MainHeaderForm>
        </template>
      </InfoWrap>
    </div>
  </div>

  <MainContent></MainContent>
</template>

<style lang="scss" scoped>
.header {
  padding: 80px 0;
  background: url('/img/header-bg.jpg') no-repeat;
  background-size: cover;
}
</style>

<script setup>
import MainHeaderForm from '../../components/MainHeaderForm.vue'
import InfoWrap from '../../components/shared/InfoWrap.vue'
import MainContent from './MainContent.vue'
</script>
