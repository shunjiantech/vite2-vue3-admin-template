<script setup lang="ts">
import * as uuid from 'uuid'

const attrs = useAttrs()

const props = defineProps<{
  visible?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()  

const visible = useVModel(props, 'visible', emit)

// 弹窗的唯一ID，用于获取dom
const id = uuid.v4()

// 是否已经获取数据
const isReady = ref(false)

// modal dom 元素
const modalEl = ref()
const modalHeaderEl = ref()

// 用以保证关闭时收缩动画收缩到的位置的准确性
const originX = ref(0)
const originY = ref(0)

const { x, y } = useDraggable(modalHeaderEl)
const { width, height } = useElementSize(modalEl)
const { width: windowWidth, height: windowHeight } = useWindowSize()

// 弹窗 css
const style = computed(() => {
  if (!isReady.value) {
    return {}
  }
  return {
    left: `${x.value}px`,
    top: `${y.value}px`,
    transformOrigin: `${originX.value - x.value}px ${originY.value - y.value}px`,
  }
})

// x超出边界修正
watchEffect(() => {
  if (x.value < 0) {
    x.value = 0
  } else if (x.value + width.value > windowWidth.value) {
    x.value = windowWidth.value - width.value
  }
})

// y超出边界修正
watchEffect(() => {
  if (y.value < 0) {
    y.value = 0
  } else if (y.value + height.value > windowHeight.value) {
    y.value = windowHeight.value - height.value
  }
})

// 获取dom，每次 visible === true 都要重新获取，因为transform-origin时每次打开时根据鼠标位置变化的
watchEffect(async () => {
  if (visible.value === true) {
    isReady.value = false
    await nextTick()
    const modal = <HTMLElement>document.getElementsByClassName(id)[0]
    const header = <HTMLElement>modal.getElementsByClassName('ant-modal-header')[0]

    modalEl.value = modal
    modalHeaderEl.value = header

    x.value = modal.offsetLeft
    y.value = modal.offsetTop

    await nextTick()
    const [transformOriginX, transformOriginY] = modal.style.transformOrigin.split(' ')

    originX.value = x.value + parseInt(transformOriginX)
    originY.value = y.value + parseInt(transformOriginY)

    isReady.value = true
  }
})
</script>

<template>
  <a-modal
    v-bind="attrs"
    :class="{ draggable: isReady, [id]: true }"
    :style="style"
    v-model:visible="visible"
  >
    <slot />
  </a-modal>
</template>

<style lang="scss">
.ant-modal {
  &.draggable {
    position: absolute;
    // 清除默认样式
    padding: 0;
    // 页面宽度小于768时会多一个margin: 8px auto
    margin: 0;
    .ant-modal-header {
      user-select: none;
      cursor: move;
    }
  }
}
</style>
