<script setup lang="ts">
import { siderCollapsed } from '~/layouts/siderCollapsed'
</script>

<template>
  <h1>侧边栏收缩外部控制</h1>
  <div>当前是否收缩：{{ siderCollapsed ? '是' : '否' }}</div>
  <a-button @click="siderCollapsed = !siderCollapsed">收缩/展开</a-button>
</template>
