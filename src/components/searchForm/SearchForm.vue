<template>
  <form class="search-form" @submit.prevent="$emit('submitted')" id="search">
    <div class="search-form__input-wrapper">
      <input
        type="text"
        class="search-form__input"
        :placeholder="inputPlaceholder"
        v-model="value"
      />
      <button v-if="value" class="search-form__submit" :disabled="isLoading">Найти</button>
    </div>
  </form>

  <div v-if="filterParams" class="filter-wrapper">
    <div class="filter">
      <span>Сортировать:</span>
      <ul class="filter__list">
        <li v-for="(param, index) in filterParams" :key="index">
          <input
            type="radio"
            name="filter"
            class="filter__radio"
            :id="param.id"
            :value="param.value"
            v-model="sort"
          />
          <label :for="param.id" @click="handleFilterClick">
            {{ param.label }}
            <svg
              class="filter__icon"
              :class="{ filter__icon_down: searchParams.order === 'desc' }"
              viewBox="0 -960 960 960"
            >
              <path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" />
            </svg>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

defineProps(['inputPlaceholder','isLoading', 'filterParams'])
defineEmits(['submitted'])

const store = useStore()

const searchParams = computed(() => store.state.users.searchParams)

/** Функция обработки клика по фильтру. Если нажатие происходит на активный фильтр,
 * то переключается метод сортировки между возрастанием и убыванием
 */
const handleFilterClick = ({ currentTarget }) => {
  if (currentTarget.previousSibling.checked) {
    store.commit('setSearchParams', { ...searchParams.value, order: getOrder.value })
  }
}


const getOrder = computed(() => {
  return searchParams.value.order === 'desc' ? 'asc' : 'desc'
})

const sort = computed({
  get () {
      return searchParams.value.sort
    },
  set (newValue) {
    store.commit('setSearchParams', { ...searchParams.value, sort: newValue })
  }
})

const value = computed({
  get () {
      return searchParams.value.value
    },
  set (newValue) {
    store.commit('setSearchParams', { ...searchParams.value, value: newValue })
  }
})
</script>

<style scoped lang="scss">
.search-form {
  display: flex;

  &__input-wrapper {
    width: 100%;
    position: relative;
  }

  &__input {
    padding: 10px 80px 10px 15px;
    width: 100%;
    background: none;
    border: unset;
    border: 1.5px solid var(--main_green);
    border-radius: 22px;

    font-size: 20px;
    line-height: 110%;
    color: var(--color-main-text);

    &:focus-visible {
      outline: none;
      border-color: var(--main_violet);
    }
  }

  &__submit {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 0 10px;
    margin: 5px;
    background: var(--main_green);
    border: none;
    border-radius: 517px;

    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    color: inherit;

    transition: all 0.3s;
    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      background-color: var(--additional_gray_light);
      opacity: .8;
    }
  }
}

.filter-wrapper {
  margin-top: 20px;
}
.filter {
  display: flex;
  align-items: baseline;
  font-size: 20px;

  &__list {
    display: flex;
    gap: 30px;
    padding: 0;
    margin: 0 0 0 10px;
    list-style: none;
  }

  &__icon {
    width: 24px;
    height: 24px;
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    fill: currentColor;
    transition: all 0.3s;

    &_down {
      transform: rotate(180deg);
    }
  }

  &__radio {
    width: 0px;
    height: 0px;

    & + label {
      cursor: pointer;
      border-radius: 20px;
    }

    &:focus-visible + label {
      outline: 1px solid var(--main_violet);
    }

    &:checked + label {
      color: var(--main_violet);
      position: relative;
      user-select: none;
      & .filter__icon {
        display: inline-block;
      }
    }
  }
}
</style>
