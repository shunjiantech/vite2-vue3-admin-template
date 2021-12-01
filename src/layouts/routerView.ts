export const defaultLayoutRouterViewKey = 'defaultLayoutRouterView'

type RouterView = typeof defaultLayoutRouterViewKey

export function injectRouterView(key: RouterView) {
  return inject<{
    key: Symbol,
    reload: (path?: string) => void,
  }>(key)
}
