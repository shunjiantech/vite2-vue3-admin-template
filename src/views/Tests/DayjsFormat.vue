<script setup lang="ts">
import dayjs from 'dayjs'

const form = reactive({
  time: null,
  timeStartOfYear: null,
  timeEndOfYear: null,
  timeStartOfMonth: null,
  timeEndOfMonth: null,
  timeStartOfDay: null,
  timeEndOfDay: null,
  timeStartOfHour: null,
  timeEndOfHour: null,
  timeStartOfMinute: null,
  timeEndOfMinute: null,
  timeStartOfSecond: null,
  timeEndOfSecond: null,
})

function format(timestamp?: number | null) {
  if (typeof timestamp !== 'number') {
    return ''
  }
  return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss SSS Z')
}
</script>

<template>
  <a-form layout="vertical">
    <a-row>
      <a-col :span="24">
        <a-form-item :label="`default: ${format(form.time)}`">
          <Dayjs v-model:value="form.time" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`startOfYear: ${format(form.timeStartOfYear)}`">
          <Dayjs v-model:value="form.timeStartOfYear" unit-type="startOf" unit="year" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`endOfYear: ${format(form.timeEndOfYear)}`">
          <Dayjs v-model:value="form.timeEndOfYear" unit-type="endOf" unit="year" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`startOfMonth: ${format(form.timeStartOfMonth)}`">
          <Dayjs v-model:value="form.timeStartOfMonth" unit-type="startOf" unit="month" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`endOfMonth: ${format(form.timeEndOfMonth)}`">
          <Dayjs v-model:value="form.timeEndOfMonth" unit-type="endOf" unit="month" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`startOfDay: ${format(form.timeStartOfDay)}`">
          <Dayjs v-model:value="form.timeStartOfDay" unit-type="startOf" unit="day" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`endOfDay: ${format(form.timeEndOfDay)}`">
          <Dayjs v-model:value="form.timeEndOfDay" unit-type="endOf" unit="day" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`startOfHour: ${format(form.timeStartOfHour)}`">
          <Dayjs v-model:value="form.timeStartOfHour" unit-type="startOf" unit="hour" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`endOfHour: ${format(form.timeEndOfHour)}`">
          <Dayjs v-model:value="form.timeEndOfHour" unit-type="endOf" unit="hour" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`startOfMinute: ${format(form.timeStartOfMinute)}`">
          <Dayjs v-model:value="form.timeStartOfMinute" unit-type="startOf" unit="minute" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`endOfMinute: ${format(form.timeEndOfMinute)}`">
          <Dayjs v-model:value="form.timeEndOfMinute" unit-type="endOf" unit="minute" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`startOfSecond: ${format(form.timeStartOfSecond)}`">
          <Dayjs v-model:value="form.timeStartOfSecond" unit-type="startOf" unit="second" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="`endOfSecond: ${format(form.timeEndOfSecond)}`">
          <Dayjs v-model:value="form.timeEndOfSecond" unit-type="endOf" unit="second" #default="{ value, update }">
            <a-date-picker :value="value" @update:value="update" />
          </Dayjs>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
