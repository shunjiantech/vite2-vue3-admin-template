export function useRouterView() {
  const cacheRef = ref<Map<string, Symbol>>(new Map())

  const route = useRoute()

  const key = computed(() => {
    const path = route.path
    if (!cacheRef.value.has(path)) {
      cacheRef.value.set(path, Symbol(Date.now()))
    }
    return cacheRef.value.get(path)!
  })

  function reload(path: string = route.path) {
    cacheRef.value.set(path, Symbol(Date.now()))
  }

  return {
    key,
    reload,
  }
}
