interface RouterViewOptions {
  onBeforeReload?: () => void
  onReload?: () => void
} 

export function useRouterView(options?: RouterViewOptions) {
  const cacheRef = ref<Map<string, Symbol>>(new Map())

  const route = useRoute()

  const key = computed(() => {
    const path = route.path
    if (!cacheRef.value.has(path)) {
      cacheRef.value.set(path, Symbol())
    }
    return cacheRef.value.get(path)!
  })

  function reload(path: string = route.path) {
    options?.onBeforeReload && options.onBeforeReload()
    cacheRef.value.set(path, Symbol())
    options?.onReload && options.onReload()
  }

  return {
    key,
    reload,
  }
}
