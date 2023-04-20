<template>
  <footer class="footer">
    <span class="footer-text"
      >Sample text. Click to select the text box. Click again or double <br />
      click to start editing the text.</span
    >
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  width: 100%;
  min-height: 200px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  font-family: 'Open Sans', sans-serif;
}
.footer-text {
  color: white;
  text-align: center;
}
.link-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
}
.link {
  color: #f6b3d1;
}
</style>
