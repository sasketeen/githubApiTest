<template>
  <div class="card-wrapper">
    <div v-if="isFetching" class="loader">Загрузка...</div>
    <div v-else-if="isRequestFall" class="error">Что-то пошло не так</div>
    <user-detail-card v-else :user="selectedUser" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Octokit } from '@octokit/core'
import userDetailCard from '../components/userDetailCard/userDetailCard.vue'

const octokit = new Octokit()
const props = defineProps(['login'])
const selectedUser = ref(null)
const isFetching = ref(true)
const isRequestFall = ref(false)

onMounted(async () => {
  try {
    isRequestFall.value = false
    const res = await octokit.request(`GET /users/${props.login}`)
    selectedUser.value = res.data

  } catch (error) {
    console.error(error)
    isFetching.value = false
  } finally {
    isFetching.value = false
  }
})
</script>

<style scoped lang="scss">
.card-wrapper {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loader {
  font-size: 24px;
}
.error {
  font-size: 24px;
  color: var(--web_danger);
}
</style>
