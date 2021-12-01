<script setup lang="ts">
import { siderCollapsed } from '~/layouts/siderCollapsed'
</script>

<template>
  <h1>Home</h1>
  <a-divider orientation="left">侧边栏收缩</a-divider>
  <div>当前是否收缩：{{ siderCollapsed }}</div>
  <a-button @click="siderCollapsed = !siderCollapsed">切换</a-button>
</template>
