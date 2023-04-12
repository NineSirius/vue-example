<template>
  <div class="wrapper">
    <div class="container">
      <div class="card">
        <h2 class="title">Got new Project?</h2>
        <p class="description">Call us fast support to this number</p>

        <div class="phone-num-wrap">
          <i class="icon-phone2"></i>

          <a href="tel:+1 (234) 567-8910"
            ><h3 class="phone-num">+1 (234) 567-8910</h3></a
          >
        </div>

        <v-button style="align-self: center">Начать</v-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 60px 0;
}
.card {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.description {
  color: var(--text-color);
}
.phone-num-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 32px;

  i {
    color: var(--secondary-color);
  }
  .phone-num {
    font-weight: 700;
  }
}
</style>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})
</script>
