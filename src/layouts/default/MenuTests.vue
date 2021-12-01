<script setup lang="ts">
const baseURL = '/tests'
</script>

<template>
  <a-sub-menu :key="baseURL" title="功能实验">
    <template #icon>
      <ExperimentOutlined />
    </template>
    <a-menu-item :key="`${baseURL}/siderControl`">侧边栏收缩</a-menu-item>
    <a-menu-item :key="`${baseURL}/routerViewReload`">刷新页面</a-menu-item>
  </a-sub-menu>
</template>
