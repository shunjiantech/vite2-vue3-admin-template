<script setup lang="ts">
import { injectRouterView, defaultLayoutRouterViewKey } from '~/layouts/routerView'

const defaultLayoutRouterView = injectRouterView(defaultLayoutRouterViewKey)!

const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 600)
</script>

<template>
  <a-spin :spinning="loading">
    <h1>刷新页面</h1>
    <p>通过改变router-view的key值router-view会重新渲染的特性实现刷新页面</p>
    <a-input></a-input>
    <a-button @click="defaultLayoutRouterView.reload()">刷新页面</a-button>
  </a-spin>
</template>
