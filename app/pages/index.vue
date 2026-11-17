<template>
  <div class="space-y-20 lg:space-y-28 pb-20 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-12 lg:pt-20 overflow-hidden">
      <!-- Decorative background blur accents -->
      <div class="absolute -top-16 -left-16 w-80 h-80 bg-gold/15 dark:bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -right-20 w-96 h-96 bg-rough/10 dark:bg-rough/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Introduction & Welcome -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <!-- Display Wordmark & Name -->
            <div class="space-y-2">
              <p class="font-display text-3xl sm:text-4xl text-rough dark:text-rough-light">
                A warm welcome from
              </p>
              <h1 class="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-offnavy dark:text-pale-100 leading-tight">
                <span class="text-gold-dark dark:text-gold-light">Charriel Mae M. Ayuban</span>
              </h1>
            </div>

            <!-- Welcome message -->
            <div class="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-offnavy/90 border border-gold/40 shadow-xs backdrop-blur-xs">
              <p class="font-heading text-lg sm:text-xl italic text-offnavy dark:text-pale-100 font-medium leading-relaxed">
                "Welcome in. I’m Charriel Mae M. Ayuban a student leader, lifelong learner, and explorer building meaningful things outside my comfort zone."
              </p>
            </div>

            <!-- Short introduction -->
            <p class="font-sans font-light text-base sm:text-lg text-offnavy/85 dark:text-pale-200 leading-relaxed text-justify lg:text-left">
              I am a purpose-driven explorer with a deep passion for service and continuous growth. I believe the best work happens when you are willing to step out of your comfort zone, take bold risks, and stay curious. Grounded in my values yet endlessly adaptable, I approach every project as an opportunity to learn something new, solve meaningful problems, and create value for the people around me. I don’t just adapt to change—I actively seek it out to discover better ways of building, leading, and serving.
            </p>

            <!-- Action buttons -->
            <div class="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <NuxtLink
                to="/profile"
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-offnavy dark:bg-gold text-pale dark:text-offnavy font-semibold text-sm tracking-wide shadow-md hover:bg-gold-dark dark:hover:bg-gold-light hover:shadow-lg transition-all duration-300 group"
              >
                <span>View Full Personal Profile</span>
                <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </NuxtLink>

              <a
                href="#connect"
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white dark:bg-offnavy-light border border-gold text-offnavy dark:text-pale-100 font-semibold text-sm tracking-wide shadow-xs hover:bg-gold-50 dark:hover:bg-offnavy hover:text-gold-dark dark:hover:text-gold-light transition-all duration-300"
              >
                Let’s Connect
              </a>
            </div>

            <!-- Quick stats bar -->
            <div class="pt-6 border-t border-pale-border dark:border-offnavy-light grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100">Service</p>
                <p class="font-sans text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold">Heart First</p>
              </div>
              <div>
                <p class="font-heading text-2xl font-bold text-gold-dark dark:text-gold-light">Curiosity</p>
                <p class="font-sans text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold">Continuous Growth</p>
              </div>
              <div>
                <p class="font-heading text-2xl font-bold text-rough dark:text-rough-light">Resilience</p>
                <p class="font-sans text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold">Bold Action</p>
              </div>
            </div>
          </div>

          <!-- Right Column: Profile Picture / Avatar with Faded Hover Transition -->
          <div class="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div class="relative group cursor-pointer">
              <!-- Golden halo background -->
              <div class="absolute -inset-2 bg-gradient-to-r from-gold via-rough to-gold rounded-3xl blur-md opacity-40 dark:opacity-30 group-hover:opacity-75 transition duration-500"></div>

              <!-- Main Image Wrapper -->
              <div class="relative w-72 h-96 sm:w-80 sm:h-[440px] md:w-88 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-offnavy-light bg-pale-card dark:bg-offnavy-dark">
                <!-- First Image (Default View) -->
                <img
                  src="/images/profile.jpg"
                  alt="Charriel Mae M. Ayuban"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                />

                <!-- Second Image (Smooth Faded Transition on Cursor Hover) -->
                <img
                  src="/images/profile-second.jpg"
                  alt="Charriel Mae M. Ayuban at USWAK 2026 Leadership Ceremony"
                  class="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                <!-- Floating badge on image -->
                <div class="absolute bottom-4 inset-x-6 p-2.5 rounded-xl bg-offnavy/85 backdrop-blur-md border border-gold/40 text-center text-pale z-10 pointer-events-none">
                  <p class="font-display text-2xl text-gold-light leading-none">Charriel Mae</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Navigation Bridge Banner to Personal Profile Page -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-offnavy via-offnavy-light to-offnavy text-pale shadow-xl border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-left">
          <span class="text-xs uppercase tracking-widest text-gold-light font-semibold">Deep Dive</span>
          <h3 class="font-heading text-2xl sm:text-3xl font-bold text-white">Want to know more about my personal journey?</h3>
          <p class="text-sm font-light text-pale-200">Discover my leadership milestones, education, personal background, and core principles.</p>
        </div>
        <NuxtLink
          to="/profile"
          class="shrink-0 px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-offnavy font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
        >
          Explore Personal Profile →
        </NuxtLink>
      </div>
    </section>

    <!-- About Me Pillars Section -->
    <section id="about" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Core Pillars</span>
        <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-offnavy dark:text-pale-100">
          About Me
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        <p class="font-sans font-light text-base text-offnavy/80 dark:text-pale-200">
          The values that guide every endeavor, every initiative, and every step outside my comfort zone.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service Card -->
        <div class="p-8 rounded-3xl bg-white dark:bg-offnavy border border-gold/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
          <div class="w-14 h-14 rounded-2xl bg-gold/15 text-gold-dark dark:text-gold-light flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Pillar 01</span>
          <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 mt-1 mb-3">Service</h3>
          <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
            Driven by a genuine desire to help others succeed and leave every project, team, and community better than I found it.
          </p>
        </div>

        <!-- Curiosity Card -->
        <div class="p-8 rounded-3xl bg-white dark:bg-offnavy border border-gold/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
          <div class="w-14 h-14 rounded-2xl bg-gold/15 text-gold-dark dark:text-gold-light flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Pillar 02</span>
          <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 mt-1 mb-3">Curiosity</h3>
          <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
            Fueled by an eagerness to learn, explore the world, and turn unfamiliar challenges into opportunities for discovery.
          </p>
        </div>

        <!-- Resilience Card -->
        <div class="p-8 rounded-3xl bg-white dark:bg-offnavy border border-gold/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
          <div class="w-14 h-14 rounded-2xl bg-gold/15 text-gold-dark dark:text-gold-light flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Pillar 03</span>
          <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 mt-1 mb-3">Resilience</h3>
          <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
            Grounded in conviction yet fearless enough to step outside my comfort zone, take calculated risks, and grow through adversity.
          </p>
        </div>
      </div>
    </section>

    <!-- Currently Exploring Section -->
    <section id="exploring" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Active Horizons</span>
        <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-offnavy dark:text-pale-100">
          Currently Exploring
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        <p class="font-sans font-light text-base text-offnavy/80 dark:text-pale-200">
          Where I am dedicating my time, leadership energy, and curiosity today.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Exploring Card 1 -->
        <div class="relative p-8 rounded-3xl bg-white/95 dark:bg-offnavy border-t-4 border-gold border-x border-b border-pale-border dark:border-offnavy-light shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-gold-50 dark:bg-gold-900/30 text-gold-dark dark:text-gold-light text-xs font-semibold uppercase tracking-wider">
              Leadership & Impact
            </div>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100">
              Leading & Serving in College
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Stepping up as a student leader to serve my peers, organize meaningful initiatives, and turn campus ideas into real community impact.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-pale-border dark:border-offnavy-light text-xs text-rough dark:text-rough-light font-semibold flex items-center justify-between">
            <span>Student Leadership</span>
            <span>Active Ongoing</span>
          </div>
        </div>

        <!-- Exploring Card 2 -->
        <div class="relative p-8 rounded-3xl bg-white/95 dark:bg-offnavy border-t-4 border-rough border-x border-b border-pale-border dark:border-offnavy-light shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-rough-soft dark:bg-rough/20 text-rough dark:text-rough-light text-xs font-semibold uppercase tracking-wider">
              Skills & Foundation
            </div>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100">
              Sharpening My Craft
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Navigating the balance of undergraduate life while actively discovering and building the practical skills that will prepare me for what comes next.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-pale-border dark:border-offnavy-light text-xs text-rough dark:text-rough-light font-semibold flex items-center justify-between">
            <span>Skill Acquisition</span>
            <span>Continuous</span>
          </div>
        </div>

        <!-- Exploring Card 3 -->
        <div class="relative p-8 rounded-3xl bg-white/95 dark:bg-offnavy border-t-4 border-offnavy dark:border-gold border-x border-b border-pale-border dark:border-offnavy-light shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-pale-muted dark:bg-offnavy-light text-offnavy dark:text-pale-200 text-xs font-semibold uppercase tracking-wider">
              Life & Mindset
            </div>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100">
              Wondering & Experiencing Life
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Staying curious beyond the classroom—making room for adventure, new perspectives, and simply enjoying the journey as it unfolds.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-pale-border dark:border-offnavy-light text-xs text-rough dark:text-rough-light font-semibold flex items-center justify-between">
            <span>Curiosity & Joy</span>
            <span>Always</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Habits & Lifestyle Highlights -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Personal Life & Habits</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-offnavy dark:text-pale-100">
          When I’m Not Studying or Leading
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Habit 1: Reading -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gold-50 dark:from-offnavy dark:to-offnavy-light p-8 border border-gold/40 dark:border-gold/30 shadow-md hover:shadow-xl transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 shrink-0 rounded-2xl bg-gold/20 text-gold-dark dark:text-gold-light flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="space-y-2">
              <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Mindful Habit</span>
              <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100">
                Loves Reading in her vacant time
              </h3>
              <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
                Finding quiet joy and rich insights between the pages of books during moments of pause throughout the day.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-gold/20 dark:border-offnavy-light flex items-center justify-between text-xs text-gold-dark dark:text-gold-light font-semibold">
            <span>Passionate Reader</span>
            <span class="text-rough dark:text-rough-light">Personal Favorite</span>
          </div>
        </div>

        <!-- Habit 2: Exercising and Walking -->
        <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-rough-soft dark:from-offnavy dark:to-offnavy-light p-8 border border-rough/30 dark:border-gold/30 shadow-md hover:shadow-xl transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 shrink-0 rounded-2xl bg-rough/15 text-rough dark:text-rough-light flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="space-y-2">
              <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Wellness Routine</span>
              <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100">
                Loves to do Exercising and Walking nearly afternoon
              </h3>
              <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
                Clearing the mind, re-energizing the body, and greeting the afternoon breeze with refreshing outdoor strolls and workout sessions.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-rough/20 dark:border-offnavy-light flex items-center justify-between text-xs text-rough dark:text-rough-light font-semibold">
            <span>Active Wellness</span>
            <span class="text-gold-dark dark:text-gold-light">Afternoon Routine</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Let’s Connect Section -->
    <section id="connect" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div class="rounded-3xl bg-offnavy dark:bg-offnavy-card text-pale p-8 sm:p-12 lg:p-16 border-2 border-gold/40 shadow-2xl relative overflow-hidden">
        <!-- Golden ornamental glow -->
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl mx-auto text-center space-y-6">
          <span class="text-xs uppercase tracking-widest text-gold-light font-semibold">Open Door</span>
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let’s Connect
          </h2>
          <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>

          <p class="font-sans font-light text-base sm:text-lg text-pale-200 leading-relaxed">
            Whether you want to collaborate on a project, swap ideas, share a book recommendation, or simply say hello—my inbox and lines are always open. Let’s build something meaningful together!
          </p>

          <!-- Contact items grid -->
          <div class="pt-6 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <!-- Say Hello -->
            <a
              href="tel:+555754889"
              class="p-5 rounded-2xl bg-white/5 border border-gold/25 hover:border-gold hover:bg-white/10 transition-all duration-300 flex items-center space-x-4 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div class="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold group-hover:text-offnavy transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs uppercase tracking-wider text-gold-light font-semibold mb-0.5">Say Hello</p>
                <p class="text-sm font-bold text-white group-hover:text-gold-light transition-colors">+555-754-889</p>
                <p class="text-xs text-pale-300 font-light mt-0.5">Mobile Contact Line</p>
              </div>
            </a>

            <!-- Drop a Note -->
            <a
              href="mailto:charriel16@gmail.com"
              class="p-5 rounded-2xl bg-white/5 border border-gold/25 hover:border-gold hover:bg-white/10 transition-all duration-300 flex items-center space-x-4 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div class="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold group-hover:text-offnavy transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs uppercase tracking-wider text-gold-light font-semibold mb-0.5">Drop a Note</p>
                <p class="text-sm font-bold text-white group-hover:text-gold-light transition-colors break-all">charriel16@gmail.com</p>
                <p class="text-xs text-pale-300 font-light mt-0.5">Direct Personal Email</p>
              </div>
            </a>

            <!-- Follow the Journey -->
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="p-5 rounded-2xl bg-white/5 border border-gold/25 hover:border-gold hover:bg-white/10 transition-all duration-300 flex items-center space-x-4 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div class="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold group-hover:text-offnavy transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs uppercase tracking-wider text-gold-light font-semibold mb-0.5">Follow the Journey</p>
                <p class="text-sm font-bold text-white group-hover:text-gold-light transition-colors">Charriel Mae M. Ayuban</p>
                <p class="text-xs text-pale-300 font-light mt-0.5">Facebook Profile</p>
              </div>
            </a>
          </div>

          <!-- Bottom navigation link to Profile -->
          <div class="pt-6">
            <NuxtLink
              to="/profile"
              class="inline-flex items-center space-x-2 text-sm text-gold-light hover:text-white underline underline-offset-8 transition-colors font-semibold"
            >
              <span>Read the comprehensive Personal Profile page</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Home | Charriel Mae M. Ayuban'
})
</script>
