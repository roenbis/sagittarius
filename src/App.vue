<script setup lang="ts">
import AuthForm from './components/AuthForm.vue'
</script>

<template>
  <div class="container">
    <AuthForm/> 
  </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background:url('./assets/background.jpg');
    background-position: center;
    background-size: cover;
}
</style>
