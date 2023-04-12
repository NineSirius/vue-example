<template>
  <div class="main-header">
    <div class="container main-header-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.main-header {
  background: url('/img/main-header.jpg') no-repeat 100% / cover;
  padding: 100px 0;

  img {
    width: 240px;
    height: 240px;
    margin: 0 auto;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    line-height: 28px;
    font-size: 1rem;
    max-width: 775px;
    margin: 0 auto;
    color: var(--text-color);
  }

  button {
    align-self: center !important;
  }
}

.main-header-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 20px;
}
</style>
