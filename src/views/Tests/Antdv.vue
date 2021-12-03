<script setup lang="ts">
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
  </a-space>
</template>
