interface MainStore {
  theme: ComputedRef<string>
  isDark: Ref<boolean>
  toggleTheme: (event: MouseEvent) => void
}

export const useMainStore = defineStore('main', (): MainStore => {
  const { isDark, changeTheme } = useTheme()

  const theme = computed(() => (isDark.value ? 'dark' : 'light'))

  const toggleTheme = (event: MouseEvent): void => {
    changeTheme(event)
  }

  return {
    theme,
    isDark,
    toggleTheme
  }
})
