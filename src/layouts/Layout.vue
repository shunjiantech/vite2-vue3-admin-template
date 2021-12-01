<script setup lang="ts">
import { siderCollapsed } from './siderCollapsed'

const route = useRoute()
const router = useRouter()

function handleBeforeMenuSelect(e: any) {
  router.replace(e.key)
}
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
        <a-menu
          :selected-keys="[route.path]"
          theme="dark"
          mode="inline"
          @select="handleBeforeMenuSelect"
        >
          <a-menu-item key="/" a="dsfsdf">
            <template #icon>
              <HomeOutlined />
            </template>
            <span>Home</span>
          </a-menu-item>
          <a-menu-item key="/other">
            <template #icon>
              <InfoCircleOutlined />
            </template>
            <span>Other</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="content">
        <router-view />
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
