<template>
  <div class="results">
    <div v-if="!items || items.length === 0 || isRequestFall" class="results__empty-content">
      <p v-if="isRequestFall" class="results__paragraph results__paragraph_error">
        Что-то пошло не так. Повторите запрос позже
      </p>
      <p v-else-if="items === null" class="results__paragraph">Сделайте Ваш первый запрос</p>
      <p v-else class="results__paragraph">После отсеивания рептилоидов никого не осталось</p>
    </div>

    <div v-else>
      <p class="results__paragraph">Найдено: {{ totalCount }}</p>
      <ul class="results__content">
        <user-list-item v-for="item in items" :user-data="item" :key="item.id" />
      </ul>
      <button
        v-if="items.length < totalCount"
        class="results__more-button"
        @click="$emit('clickMoreButton')"
      >
        Еще
      </button>
    </div>
  </div>
</template>

<script setup>
import UserListItem from './UserListItem.vue'

defineProps(['items', 'totalCount', 'isRequestFall'])
defineEmits(['clickMoreButton'])
</script>

<style scoped lang="scss">
.results {
  flex-grow: 1;

  &__empty-content {
    height: 100%;
    min-height: 300px;
    background: url(@/assets/icons/gitHubLogo.png) center / 200px 200px no-repeat;
  }

  &__paragraph {
    text-align: center;
    font-size: 24px;
    margin: 0;
    color: var(--additional-text-color);

    &_error {
      color: var(--web_danger);
    }
  }

  &__content {
    padding: 0;
    margin: 20px 0 0;
    list-style: none;
    display: flex;
    gap: 60px 40px;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__more-button {
    display: block;
    margin: 40px auto 0;
    padding: 10px 10px;
    width: 150px;
    cursor: pointer;
    background: none;
    border: 1px solid var(--main_green);
    border-radius: 40px;

    font-size: 18px;
    color: var(--main-text-color);
    transition: all 0.3s;

    &:hover {
      background-color: var(--main_green);
    }
  }
}
</style>
