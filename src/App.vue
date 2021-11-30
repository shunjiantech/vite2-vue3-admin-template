<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'

const routeQuery = reactive({
  name: useRouteQuery('name'),
  page: useRouteQuery('page'),
})
</script>

<template>
  <a-space>
    <router-link to="/">Home</router-link>
    <router-link to="/other">Other</router-link>
  </a-space>
  <div>{{ routeQuery }}</div>
  <router-view />
</template>
