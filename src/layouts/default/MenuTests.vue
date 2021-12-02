<script setup lang="ts">
const baseURL = '/tests'

const router = useRouter()

function getTitle(path: string): string {
  const matched = router.resolve(path).matched
  const meta = matched[matched.length - 1].meta
  return <string>(meta.menuTitle || meta.menuAndTabTitle)
}
</script>

<template>
  <a-sub-menu
    :key="baseURL"
    :title="getTitle(baseURL)"
  >
    <template #icon>
      <ExperimentOutlined />
    </template>
    <a-menu-item
      :key="`${baseURL}/siderControl`"
    >{{ getTitle(`${baseURL}/siderControl`) }}</a-menu-item>
    <a-menu-item
      :key="`${baseURL}/routerViewReload`"
    >{{ getTitle(`${baseURL}/routerViewReload`) }}</a-menu-item>
    <a-menu-item
      :key="`${baseURL}/antdv`"
    >{{ getTitle(`${baseURL}/antdv`) }}</a-menu-item>
  </a-sub-menu>
</template>
