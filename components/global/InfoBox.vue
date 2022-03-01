<template>
  <div class="info">
    <p><slot name="info-box">default</slot></p>
  </div>
</template>

<style scoped>
.info {
    padding: auto;
    background-color: blue;
    color: white;
}
</style>