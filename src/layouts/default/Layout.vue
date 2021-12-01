<script setup lang="ts">
import { breakpointsAntDesign } from '@vueuse/core'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { useRouterView } from '~/composables/useRouterView'
import { defaultLayoutRouterViewKey } from '../default/routerView'
import { siderCollapsed } from '../default/siderCollapsed'
import Menu from './Menu.vue'
import Tabs from './Tabs.vue'

const { md } = useBreakpoints(breakpointsAntDesign)
onMounted(() => {
  watch(md, () => {
    siderCollapsed.value = !md.value
  })
})

const nprogress = reactive(useNProgress())
const defaultLayoutRouterView = reactive(useRouterView({
  onBeforeReload: () => {
    nprogress.start()
  },
  onReload: () => {
    nprogress.done()
  },
}))
provide(defaultLayoutRouterViewKey, defaultLayoutRouterView)
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="title">vite2-vue3-admin-template</div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        class="sider"
        v-model:collapsed="siderCollapsed"
        collapsible
        :collapsed-width="56"
      >
        <Menu />
      </a-layout-sider>
      <a-layout-content class="content">
        <Tabs />
        <router-view #default="{ Component }">
          <keep-alive :max="10">
            <component :is="Component" :key="defaultLayoutRouterView.key" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  .header {
    .title {
      color: white;
      font-size: 20px;
    }
  }
  .sider {
    ::v-deep(.ant-layout-sider-children) {
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .content {
    overflow: auto;
  }
}
</style>
