<template>
  <div class="tabs">
    <a-tabs
      size="small"
      :tab-bar-gutter="4"
      type="editable-card"
      hideAdd
    >
      <a-tab-pane
        v-for="i in 40"
        :key="i"
        :tab="`Tab ${i}`"
      />
      <template #leftExtra>
        <a-button class="btns" type="text" #icon>
          <LeftOutlined />
        </a-button>
      </template>
      <template #rightExtra>
        <a-space class="btns" :size="2">
          <a-button type="text" #icon>
            <RightOutlined />
          </a-button>
          <a-dropdown :trigger="['click']">
            <a-button type="text" #icon>
              <EllipsisOutlined />
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item>刷新页面</a-menu-item>
                <a-menu-divider />
                <a-menu-item>关闭标签页</a-menu-item>
                <a-menu-item>关闭其他标签页</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-space>
      </template>
    </a-tabs>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  padding-top: 8px;
  background-image: linear-gradient(to bottom, #fff 42px, #f0f2f5 54px);
  ::v-deep(.ant-tabs) {
    .ant-tabs-nav {
      margin-bottom: 8px;
    }
    .ant-tabs-nav-operations {
      display: none;
    }
  }
  .btns {
    margin: 0 8px;
  }
}
</style>
