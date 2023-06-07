<template>
  <section class="search section" id="search">
    <search-form
      input-placeholder="Введите username"
      :filter-params="filterParams"
      :isLoading="isLoading"
      @submitted="searchUsers"
    />
    <div class="results-wrapper">
      <search-results
        :items="users"
        :total-count="totalCount"
        :isRequestFall="isRequestFall"
        @click-more-button="loadMoreResults"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';
import SearchForm from '../searchForm/SearchForm.vue'
import SearchResults from './components/SearchResults.vue'

const store = useStore()


const users = computed(() => store.state.users.users)
const isLoading = computed(() => store.state.users.isLoading)
const totalCount = computed(() => store.state.users.totalCount)
const isRequestFall = computed(() => store.state.users.isRequestFall)
const loadMoreResults = () => store.dispatch('loadMoreResults')
const searchUsers = () => store.dispatch('searchUsers')

const filterParams = [
  {
    id: 1,
    label: 'по репозиториям',
    value: 'repositories'
  },
  {
    id: 2,
    label: 'по подписчикам',
    value: 'followers'
  }
]
</script>

<style scoped lang="scss">
.results-wrapper {
  min-height: calc(100dvh - 164px);
  display: flex;

  padding-top: 50px;
}
</style>
