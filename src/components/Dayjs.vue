<script setup lang="ts">
import dayjs, { Dayjs, OpUnitType } from 'dayjs'

type ValueType = number | string | null

const props = defineProps<{
  value?: ValueType
  format?: string
  unitType?: 'startOf' | 'endOf'
  unit?: OpUnitType
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
  let obj = newDayjsObj
  if (obj === null || obj === undefined) {
    value.value = obj
    return
  }
  if (props.unitType && props.unit) {
    obj = obj[props.unitType](props.unit)
  }
  if (props.format) {
    value.value = obj.format(props.format)
  } else {
    value.value = obj.valueOf()
  }
}
</script>

<template>
  <slot
    :value="valueComputed"
    :update="handleUpdate"
  />
</template>
