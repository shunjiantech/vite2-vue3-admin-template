<script setup lang="ts">
import * as uuid from 'uuid'
import { message, notification } from '~/modules/antdv'

function showMessage() {
  message.info('message')
}

function showNotification() {
  notification.info({
    message: 'Title',
    description: 'Description',
    onClick: () => {
      message.warning('点击了通知')
    },
  })
}

const modalId = uuid.v4()
const modalEl = ref()
const modalHeaderEl = ref()
const modalVisible = ref(false)

const { x, y } = useDraggable(modalHeaderEl)
const { width, height } = useElementSize(modalEl)
const { width: windowWidth, height: windowHeight } = useWindowSize()

watch([width, height], () => {
  x.value = Math.round((windowWidth.value - width.value) / 2)
  y.value = Math.round((windowHeight.value - height.value) / 2)
})

watch(x, () => {
  if (x.value < 0) {
    x.value = 0
  } else if (x.value + width.value > windowWidth.value) {
    x.value = windowWidth.value - width.value
  }
})

watch(y, () => {
  if (y.value < 0) {
    y.value = 0
  } else if (y.value + height.value > windowHeight.value) {
    y.value = windowHeight.value - height.value
  }
})

const stopWatch = watchEffect(async () => {
  if (modalVisible.value === true) {
    stopWatch()
    await nextTick()
    modalEl.value = document.getElementsByClassName(modalId)[0]
    modalHeaderEl.value = modalEl.value.getElementsByClassName('ant-modal-header')[0]
  }
})

function showModal() {
  modalVisible.value = true
}
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button @click="showMessage">Message</a-button>
      <a-button @click="showNotification">Notification</a-button>
    </a-space>
    <a-space>
      <a-date-picker></a-date-picker>
      <a-range-picker />
    </a-space>
    <a-space>
      <a-button @click="showModal">弹窗</a-button>
      <a-modal class="draggable" :class="modalId" :style="{ left: `${x}px`, top: `${y}px`, position: 'absolute' }" v-model:visible="modalVisible" title="弹窗标题">
        弹窗内容
      </a-modal>
    </a-space>
  </a-space>
</template>

<style lang="scss">
.ant-modal.draggable {
  padding-bottom: 0px;
  .ant-modal-header {
    user-select: none;
    cursor: move;
  }
}
</style>
