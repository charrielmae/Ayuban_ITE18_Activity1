<template>
  <div class="min-h-screen bg-pale dark:bg-offnavy-dark text-offnavy dark:text-pale-100 font-sans transition-colors duration-300">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'

const { initTheme } = useTheme()
if (import.meta.client) {
  initTheme()
}
</script>
