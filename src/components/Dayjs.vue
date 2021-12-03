<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs'

const props = defineProps<{
  value: number | string
  format?: string
}>()

const emit = defineEmits<{
  (e: 'update:value', value: number | string): void
}>()

const value = useVModel(props, 'value', emit)

function handleUpdate(newDayjsObj: Dayjs) {
  if (props.format) {
    value.value = newDayjsObj.format(props.format)
  } else {
    value.value = newDayjsObj.valueOf()
  }
}
</script>

<template>
  <slot
    :value="dayjs(value)"
    :update="handleUpdate"
  />
</template>
