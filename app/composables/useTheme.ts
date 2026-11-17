import { ref, onMounted } from 'vue'

const isDark = ref(false)
let initialized = false

export function useTheme() {
  const initTheme = () => {
    if (import.meta.client && !initialized) {
      initialized = true
      const stored = localStorage.getItem('ayuban_theme')
      if (stored) {
        isDark.value = stored === 'dark'
      } else {
        isDark.value = document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      applyTheme()
    }
  }

  const applyTheme = () => {
    if (import.meta.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('ayuban_theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('ayuban_theme', 'light')
      }
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
