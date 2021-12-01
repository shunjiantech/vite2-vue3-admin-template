<script setup lang="ts">
import MenuTests from './MenuTests.vue'

const route = useRoute()
const router = useRouter()

const openKeysSet = ref<Set<string>>(new Set())

watchEffect(() => {
  let path = ''
  route.path.split('/').forEach((key) => {
    path = `${path}/${key}`.replace(/\/+/g, '/')
    openKeysSet.value.add(path)
  })
})

const openKeys = computed({
  get: () => [...openKeysSet.value],
  set: (newKeys) => {
    const flag = newKeys.length > openKeysSet.value.size
    openKeysSet.value.clear()
    if (flag) {
      openKeysSet.value.add(newKeys[newKeys.length - 1])
    }
  },
})

function handleBeforeMenuSelect({ key, keyPath }: { key: string, keyPath: string[] }) {
  keyPath.forEach((key) => {
    openKeysSet.value.add(key)
  })
  router.replace(key)
}
</script>

<template>
  <a-menu
    v-model:open-keys="openKeys"
    :selected-keys="[route.path]"
    theme="dark"
    mode="inline"
    @select="handleBeforeMenuSelect"
  >
    <MenuTests />
  </a-menu>
</template>
