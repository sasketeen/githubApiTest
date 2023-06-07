<template>
  <header class="header">
    <RouterLink to="/" class="header__home-link">
      <span class="header__logo"></span>
      <p class="header__app-name">SearchHub</p>
    </RouterLink>
  </header>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: baseline;
  padding-top: 10px;

  &__home-link {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }

  &__logo {
    display: block;
    width: 64px;
    height: 64px;
    background: url('@/assets/icons/logo.png') center / contain no-repeat;
  }
  &__app-name {
    font-size: 46px;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 100%;
    margin: 10px 0 0 10px;
  }
}
</style>
