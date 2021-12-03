<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs'

type ValueType = number | string | null

const props = defineProps<{
  value?: ValueType
  format?: string
}>()

const emit = defineEmits<{
  (e: 'update:value', value?: ValueType): void
}>()

const value = useVModel(props, 'value', emit)

const valueComputed = computed(() => {
  if (value.value === null || value.value === undefined) {
    // 讲 null 强制识别为 undefined
    // 因为antdv的date-picker value不支持null但是点击清空按钮update:value事件返回的却是null
    return <undefined>value.value
  }
  return dayjs(value.value)
})

function handleUpdate(newDayjsObj?: Dayjs | null) {
  if (newDayjsObj === null || newDayjsObj === undefined) {
    value.value = newDayjsObj
    return
  }
  if (props.format) {
    value.value = newDayjsObj.format(props.format)
  } else {
    value.value = newDayjsObj.valueOf()
  }
}
</script>

<template>
  <slot
    :value="valueComputed"
    :update="handleUpdate"
  />
</template>
