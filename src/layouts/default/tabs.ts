const tabsKey = 'tabs'
export const tabs = useSessionStorage(tabsKey, new Map<string, string>())
