<script setup lang="ts">
const tabsRef = ref<HTMLElement>()

const tabsWrap = ref<HTMLElement>()
const tabsList = ref<HTMLElement>()

onMounted(() => {
  const tabs = tabsRef.value!
  tabsWrap.value = <HTMLElement>tabs.getElementsByClassName('ant-tabs-nav-wrap')[0]
  tabsList.value = <HTMLElement>tabs.getElementsByClassName('ant-tabs-nav-list')[0]
})

const { width: tabsWrapWidth } = useElementSize(tabsWrap)
const { width: tabsListWidth } = useElementSize(tabsList)

const isLeft = ref(true)
const isRight = ref(true)

useMutationObserver(tabsWrap, (mutations) => {
  const classList = (<HTMLElement>mutations[0].target).className.split(' ')
  isLeft.value = !classList.includes('ant-tabs-nav-wrap-ping-left')
  isRight.value = !classList.includes('ant-tabs-nav-wrap-ping-right')
}, {
  attributes: true,
})

let toX = 0;

function getX() {
  return -parseInt(/translate\((.*)px,.*\)/.exec(tabsList.value!.style.transform)![1])
}

const stepX = 30

function render() {
  let deltaY = 0
  if (toX > 0) {
    deltaY = toX > stepX ? stepX : toX
  } else {
    deltaY = toX < -stepX ? -stepX : toX
  }
  tabsList.value!.dispatchEvent(new WheelEvent('wheel', {
    deltaY: deltaY,
    bubbles: true,
  }))
  toX -= deltaY
  if (toX !== 0) {
    requestAnimationFrame(render)
  }
}

function scrollTo(toLeft: boolean) {
  const flag = toX === 0
  const x = getX()
  toX = toLeft
    ? Math.max(x - tabsWrapWidth.value * 0.8, 0) - x
    : Math.min(x + tabsWrapWidth.value * 0.8, tabsListWidth.value) - x
  if (flag) {
    requestAnimationFrame(render)
  }
}
</script>

<template>
  <div ref="tabsRef" class="tabs">
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
        <a-button
          class="btns"
          type="text"
          :disabled="isLeft"
          @click="scrollTo(true)"
        >
          <template #icon>
            <LeftOutlined />
          </template>
        </a-button>
      </template>
      <template #rightExtra>
        <a-space class="btns" :size="2">
          <a-button
            type="text"
            :disabled="isRight"
            @click="scrollTo(false)"
          >
            <template #icon>
              <RightOutlined />
            </template>
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
