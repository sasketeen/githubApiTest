<script setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/header/MyHeader.vue';
</script>

<template>
  <MyHeader />
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.main {
  padding: 0 0 20px;
}
</style>
