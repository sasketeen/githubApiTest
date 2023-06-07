<template>
  <li class="user-card">
    <img class="user-card__avatar" :src="userData.avatar_url" alt="аватар" />
    <div class="user-card__info">
      <p class="user-card__login">{{ userData.login }}</p>
      <p class="user-card__url">URL: <a :href="userData.html_url" class="link user-card__url-link" target="_blank" rel="noopener noreferrer">Github</a></p>
      <p class="user-card__url">Admin: {{ userData.site_admin ? 'да' : 'нет' }}</p>
      <RouterLink :to="`/user/${userData.login}`" class="link user-card__more-link">Подробнее</RouterLink>
    </div>
  </li>
</template>

<script setup>
defineProps(['userData'])
</script>

<style scoped lang="scss">
.user-card {
  width: 100%;
  max-width: 600px;

  display: flex;
  padding: 30px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 0 40px -15px #dd7df775;

  &__avatar {
    width: 240px;
    height: 240px;
    object-fit: contain;
    margin-right: 20px;
    border-radius: 7px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;

    font-size: 18px;
    overflow: hidden;
  }

  &__login {
    font-size: 26px;
    line-height: 110%;
    font-weight: 600;
    margin: 0;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__url {
    margin: 0;
    display: inline-block
  }

  &__url-link {
    color: var(--main_violet);
  }

  &__more-link {
    align-self: flex-start;
    margin-top: auto;
    border-radius: 20px;
    padding: 5px;

    &:focus-visible {
      outline: none;
      background-color: var(--main_green);
    }
  }
}
</style>
