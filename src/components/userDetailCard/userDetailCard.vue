<template>
  <div class="card">
    <img :src="user.avatar_url" alt="аватар" class="card__image" />
    <h1 class="card__title">{{ user.login }}</h1>
    <p>Имя: {{ getValue(user.name) }}</p>
    <p>Компания: {{ getValue(user.company) }}</p>
    <p>Email: {{ getValue(user.email) }}</p>
    <p>Репозиториев: {{ getValue(user.public_repos) }}</p>
    <p>Подписчиков: {{ getValue(user.followers) }}</p>
    <p>Адрес: {{ getValue(user.location) }}</p>
    <p>Описание: {{ getValue(user.bio) }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps(['user'])

const getValue = (value) => {
  return value ? value :'не указано'
}
</script>

<style scoped lang="scss">
.card {
  max-width: 600px;
  width: 100%;
  padding: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.435);
  &__image {
    width: 50%;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
  }
  &__title {
    font-size: 34px;
    line-height: 100%;
    margin: 20px 0 0;
    text-align: center;
  }
}
</style>
