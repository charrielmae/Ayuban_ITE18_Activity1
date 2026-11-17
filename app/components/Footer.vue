<template>
  <footer class="bg-offnavy text-pale-100 border-t-2 border-gold/40 mt-auto transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <!-- Column 1: Identity & Motto -->
        <div class="space-y-4">
          <div class="font-display text-4xl text-gold-light">
            Charriel Mae M. Ayuban
          </div>
          <p class="text-xs uppercase tracking-widest text-rough-light font-semibold">
            Student Leader • Explorer • Lifelong Learner
          </p>
          <p class="text-sm font-light text-pale-300 leading-relaxed max-w-sm">
            Building meaningful things outside my comfort zone, turning challenges into discoveries, and serving community with heart.
          </p>
        </div>

        <!-- Column 2: Quick Navigation Links -->
        <div class="space-y-4">
          <h4 class="font-heading text-xl text-gold-light tracking-wide font-semibold">
            Navigation
          </h4>
          <ul class="space-y-2 text-sm font-normal">
            <li>
              <NuxtLink to="/" class="hover:text-gold-light transition-colors flex items-center space-x-2">
                <span class="text-gold">→</span>
                <span>Home Page</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/profile" class="hover:text-gold-light transition-colors flex items-center space-x-2">
                <span class="text-gold">→</span>
                <span>Personal Profile</span>
              </NuxtLink>
            </li>
            <li>
              <a href="/#about" class="hover:text-gold-light transition-colors flex items-center space-x-2">
                <span class="text-gold">→</span>
                <span>About Me & Values</span>
              </a>
            </li>
            <li>
              <a href="/#exploring" class="hover:text-gold-light transition-colors flex items-center space-x-2">
                <span class="text-gold">→</span>
                <span>Currently Exploring</span>
              </a>
            </li>
            <li>
              <a href="/#connect" class="hover:text-gold-light transition-colors flex items-center space-x-2">
                <span class="text-gold">→</span>
                <span>Let's Connect</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact & Channels -->
        <div class="space-y-4">
          <h4 class="font-heading text-xl text-gold-light tracking-wide font-semibold">
            Get In Touch
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-center space-x-3">
              <span class="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-light text-xs">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <p class="text-xs text-pale-400 font-light">Say Hello</p>
                <a href="tel:+555754889" class="font-semibold text-pale hover:text-gold-light transition-colors">
                  +555-754-889
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <span class="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-light text-xs">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p class="text-xs text-pale-400 font-light">Drop a Note</p>
                <a href="mailto:charriel16@gmail.com" class="font-semibold text-pale hover:text-gold-light transition-colors">
                  charriel16@gmail.com
                </a>
              </div>
            </div>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-3 group cursor-pointer"
            >
              <span class="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-light text-xs group-hover:bg-gold group-hover:text-offnavy group-hover:scale-105 transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </span>
              <div>
                <p class="text-xs text-pale-400 font-light">Follow the Journey</p>
                <span class="font-semibold text-pale group-hover:text-gold-light transition-colors">
                  Charriel Mae M. Ayuban (Facebook)
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom border, copyright & Theme Toggle Button -->
      <div class="mt-12 pt-6 border-t border-offnavy-muted flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-pale-400">
        <p>© {{ new Date().getFullYear() }} Charriel Mae M. Ayuban. Built with Nuxt 4 & Tailwind CSS.</p>

        <!-- Theme Toggle Button in Footer -->
        <div class="flex items-center gap-3">
          <span class="text-xs text-pale-300 font-medium">Appearance:</span>
          <button
            type="button"
            @click="toggleTheme"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-gold/40 text-gold-light hover:text-white transition-all duration-300 shadow-sm cursor-pointer focus:outline-hidden"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            aria-label="Toggle light and dark mode"
          >
            <!-- Sun icon when in dark mode (click to switch to light) -->
            <svg v-if="isDark" class="w-4 h-4 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon when in light mode (click to switch to dark) -->
            <svg v-else class="w-4 h-4 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span class="font-semibold text-xs tracking-wider uppercase">
              {{ isDark ? 'Light Mode' : 'Dark Mode' }}
            </span>
          </button>
        </div>

        <p class="italic font-display text-base text-gold-light">
          "Step outside comfort, lead with heart."
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
