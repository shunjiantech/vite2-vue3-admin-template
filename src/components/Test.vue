<script setup lang="ts">
import { message } from '../modules/antdv';

const buttonText = ref('show message')

const messageText = ref('message')
</script>

<template>
  <a-button @click="message.info(messageText)">{{ buttonText }}</a-button>
</template>
