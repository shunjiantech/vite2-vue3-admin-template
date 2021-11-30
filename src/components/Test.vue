<script setup lang="ts">
import { message } from '../modules/antdv';
</script>

<template>
  <a-button @click="message.info('message')">show message</a-button>
</template>
