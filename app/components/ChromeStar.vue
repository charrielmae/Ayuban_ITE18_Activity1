<template>
  <svg
    :class="[
      sizeClass,
      'shrink-0 drop-shadow-xs transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110'
    ]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <!-- Gold Chrome Gradient -->
      <linearGradient :id="`star-gold-${uid}`" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#DFC285" />
        <stop offset="70%" stop-color="#C5A059" />
        <stop offset="100%" stop-color="#8F6B21" />
      </linearGradient>

      <!-- Rough Copper Gradient -->
      <linearGradient :id="`star-rough-${uid}`" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#E58B79" />
        <stop offset="70%" stop-color="#9E4738" />
        <stop offset="100%" stop-color="#6E281D" />
      </linearGradient>

      <!-- Coral Chrome Gradient -->
      <linearGradient :id="`star-coral-${uid}`" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#FFA3A3" />
        <stop offset="70%" stop-color="#F08080" />
        <stop offset="100%" stop-color="#B84A4A" />
      </linearGradient>

      <!-- Silver Chrome Gradient -->
      <linearGradient :id="`star-silver-${uid}`" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#E2E8F0" />
        <stop offset="70%" stop-color="#94A3B8" />
        <stop offset="100%" stop-color="#475569" />
      </linearGradient>
    </defs>

    <!-- Outer Chrome Star -->
    <path
      d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
      :fill="`url(#star-${variant}-${uid})`"
    />

    <!-- Inner Metallic Highlight Bevel -->
    <path
      d="M12 3.5C12 8.194 8.194 12 3.5 12C8.194 12 12 15.806 12 20.5C12 15.806 15.806 12 20.5 12C15.806 12 12 8.194 12 3.5Z"
      fill="#FFFFFF"
      fill-opacity="0.35"
    />

    <!-- Core Glint Point -->
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" fill-opacity="0.9" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'gold', // 'gold' | 'rough' | 'coral' | 'silver'
    validator: (v) => ['gold', 'rough', 'coral', 'silver'].includes(v)
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg' | 'xl'
    validator: (s) => ['sm', 'md', 'lg', 'xl'].includes(s)
  }
})

// Unique identifier to avoid SVG gradient ID collision across multiple cards
const uid = Math.random().toString(36).substring(2, 9)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-3.5 h-3.5'
    case 'lg':
      return 'w-6 h-6'
    case 'xl':
      return 'w-8 h-8'
    case 'md':
    default:
      return 'w-5 h-5'
  }
})
</script>
