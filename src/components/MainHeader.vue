<template>
  <header class="header">
    <!-- <TheNavigation /> -->

    <div class="container"></div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: url('/img/header-bg.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.header-title {
  color: var(--light-color);
  font-size: 3.75rem;
  font-weight: 700;
  font-family: 'Ubuntu';
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 570px;
  margin: 0;
  margin-right: auto;
  padding: 130px 0;
}

.header-form {
  position: relative;
  overflow: hidden;
  background: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .message {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-self: start;
    font-size: 1.25rem;
    color: var(--light-color);
    transform: translateY(100%);
    transition: 0.1s;

    .close {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }

    &.success {
      background: var(--success-color);
    }

    &.error {
      background: var(--error-color);
    }

    &.active {
      transform: translateY(0);
    }
  }
}

.header-contact-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .phone-wrap {
    display: flex;
    align-items: center;
    gap: 20px;

    .icon {
      border-radius: var(--border-radius);
      background: var(--secondary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      color: var(--light-color);
      padding: 10px;
    }

    .phone {
      font-size: 2.25rem;
      color: var(--light-color);
      font-weight: 700;
      transition: 0.1s;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  .email {
    color: var(--light-color);
  }
}

@media screen and (max-width: 560px) {
  .header-form {
    display: flex;
    flex-direction: column;

    button {
      width: 100% !important;
    }
  }
}
</style>

<script setup>
// import TheNavigation from './TheNavigation.vue'
</script>
