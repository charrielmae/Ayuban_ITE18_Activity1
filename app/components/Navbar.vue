<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-pale/90 dark:bg-offnavy-dark/95 border-b border-pale-border dark:border-offnavy-light shadow-xs transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Wordmark / Brand -->
        <NuxtLink to="/" class="group flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold-dark dark:text-gold-light font-display text-2xl group-hover:scale-105 transition-transform duration-300">
            C
          </div>
          <div>
            <span class="font-display text-2xl sm:text-3xl text-offnavy dark:text-pale-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
              Charriel Mae
            </span>
            <span class="hidden sm:block text-[11px] uppercase tracking-widest font-semibold text-rough -mt-1 font-sans">
              Student Leader & Explorer
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-semibold tracking-wide">
          <NuxtLink
            to="/"
            exact-active-class="text-gold-dark dark:text-gold-light border-b-2 border-gold font-bold bg-gold-50/60 dark:bg-offnavy-light/80"
            class="px-3 py-2 rounded-t-md text-offnavy dark:text-pale-200 hover:text-gold-dark dark:hover:text-gold-light hover:bg-gold-50/40 dark:hover:bg-offnavy-light/50 transition-colors"
          >
            Home
          </NuxtLink>
          <a
            href="/#about"
            class="px-3 py-2 rounded-t-md text-offnavy dark:text-pale-200 hover:text-gold-dark dark:hover:text-gold-light hover:bg-gold-50/40 dark:hover:bg-offnavy-light/50 transition-colors"
          >
            About Me
          </a>
          <a
            href="/#exploring"
            class="px-3 py-2 rounded-t-md text-offnavy dark:text-pale-200 hover:text-gold-dark dark:hover:text-gold-light hover:bg-gold-50/40 dark:hover:bg-offnavy-light/50 transition-colors"
          >
            Currently Exploring
          </a>
          <a
            href="/#expertise"
            class="px-3 py-2 rounded-t-md text-offnavy dark:text-pale-200 hover:text-gold-dark dark:hover:text-gold-light hover:bg-gold-50/40 dark:hover:bg-offnavy-light/50 transition-colors"
          >
            Expertise
          </a>
          <a
            href="/#connect"
            class="px-3 py-2 rounded-t-md text-offnavy dark:text-pale-200 hover:text-gold-dark dark:hover:text-gold-light hover:bg-gold-50/40 dark:hover:bg-offnavy-light/50 transition-colors"
          >
            Let's Connect
          </a>
        </nav>

        <!-- Right Side CTA -->
        <div class="hidden md:flex items-center space-x-4">
          <a
            href="mailto:charriel16@gmail.com"
            class="inline-flex items-center justify-center px-4 py-2 border border-gold text-xs uppercase tracking-wider font-semibold rounded-full text-offnavy dark:text-pale bg-gold/10 hover:bg-gold hover:text-white transition-all duration-300 shadow-xs"
          >
            Say Hello
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex md:hidden">
          <button
            type="button"
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-offnavy dark:text-pale hover:text-gold-dark hover:bg-gold/10 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu dropdown -->
    <div v-show="isOpen" class="md:hidden border-b border-pale-border dark:border-offnavy-light bg-pale dark:bg-offnavy-dark px-4 pt-2 pb-5 space-y-2">
      <NuxtLink
        to="/"
        @click="isOpen = false"
        exact-active-class="text-gold-dark dark:text-gold-light font-bold bg-gold-100 dark:bg-offnavy-light"
        class="block px-3 py-2 rounded-md text-base font-medium text-offnavy dark:text-pale hover:bg-gold-50 dark:hover:bg-offnavy-light"
      >
        Home
      </NuxtLink>
      <a
        href="/#about"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-offnavy dark:text-pale hover:bg-gold-50 dark:hover:bg-offnavy-light"
      >
        About Me
      </a>
      <a
        href="/#exploring"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-offnavy dark:text-pale hover:bg-gold-50 dark:hover:bg-offnavy-light"
      >
        Currently Exploring
      </a>
      <a
        href="/#expertise"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-offnavy dark:text-pale hover:bg-gold-50 dark:hover:bg-offnavy-light"
      >
        Expertise
      </a>
      <a
        href="/#connect"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-offnavy dark:text-pale hover:bg-gold-50 dark:hover:bg-offnavy-light"
      >
        Let's Connect
      </a>
      <div class="pt-3 border-t border-pale-border dark:border-offnavy-light">
        <a
          href="mailto:charriel16@gmail.com"
          class="block text-center w-full px-4 py-2 border border-gold bg-gold/15 text-offnavy dark:text-pale font-semibold rounded-full text-sm"
        >
          Say Hello (charriel16@gmail.com)
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
