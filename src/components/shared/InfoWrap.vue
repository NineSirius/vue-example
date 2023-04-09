<template>
  <div class="info-wrap">
    <div class="info-col">
      <slot name="first-content"></slot>
    </div>

    <div class="info-col">
      <slot name="second-content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-wrap {
  display: flex;
  gap: 20px;

  .info-col {
    flex-basis: 50%;
  }
}
</style>
