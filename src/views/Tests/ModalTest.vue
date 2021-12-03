<script setup lang="ts">
const modalVisible = ref(false)
function showModal() {
  modalVisible.value = true
}

const modal2Visible = ref(false)
function showModal2() {
  modal2Visible.value = true
}
</script>

<template>
  <a-button @click="showModal">可拖拽的弹窗 外层</a-button>
  <Modal
    v-model:visible="modalVisible"
    title="可拖拽的弹窗 外层 width=80%"
    width="80%"
  >
    <a-button @click="showModal2">可拖拽的弹窗 内层</a-button>
  </Modal>
  <Modal
    v-model:visible="modal2Visible"
    title="可拖拽的弹窗 内层 width=300px"
    width="300px"
  >内容</Modal>
</template>
