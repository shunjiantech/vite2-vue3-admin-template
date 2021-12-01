<script setup lang="ts">
import { injectRouterView, defaultLayoutRouterViewKey } from '~/layouts/routerView'
import { siderCollapsed } from '~/layouts/siderCollapsed'

// 刷新页面测试
const defaultLayoutRouterView = injectRouterView(defaultLayoutRouterViewKey)!

const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 600)
</script>

<template>
  <h1>Home</h1>
  <a-divider orientation="left">侧边栏收缩</a-divider>
  <div>当前是否收缩：{{ siderCollapsed }}</div>
  <a-button @click="siderCollapsed = !siderCollapsed">切换</a-button>
  <a-divider orientation="left">不跳转刷新页面</a-divider>
  <a-spin :spinning="loading">
    <div>通过改变router-view的key值router-view会重新渲染的特性实现刷新页面</div>
    <a-input></a-input>
    <a-button @click="defaultLayoutRouterView.reload()">刷新页面</a-button>
  </a-spin>
</template>
