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
              <h1 class="font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-offnavy dark:text-pale-100 leading-tight">
                <span class="text-gold-dark dark:text-gold-light">Charriel Mae M. Ayuban</span>
              </h1>
            </div>

            <!-- Welcome message -->
            <div class="card-chrome-gold p-4 sm:p-5 shadow-xs backdrop-blur-xs relative group">
              <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-2xl"></div>
              <div class="relative z-10 flex items-start gap-3">
                <ChromeStar variant="gold" size="sm" class="mt-1" />
                <p class="font-heading text-lg sm:text-xl italic text-offnavy dark:text-pale-100 font-medium leading-relaxed">
                  "Welcome in. I’m Charriel Mae M. Ayuban a student leader, lifelong learner, and explorer building meaningful things outside my comfort zone."
                </p>
              </div>
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

    <!-- About Me Pillars Section -->
    <section id="about" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Core Pillars</span>
        <h2 class="font-balthazar text-3xl sm:text-4xl lg:text-5xl font-semibold text-offnavy dark:text-pale-100">
          About Me
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        <p class="font-sans font-light text-base text-offnavy/80 dark:text-pale-200">
          The values that guide every endeavor, every initiative, and every step outside my comfort zone.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service Card (Gold Chrome Gradient) -->
        <div class="card-chrome-gold p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gold/20 text-gold-dark dark:text-gold-light flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-xs">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <ChromeStar variant="gold" size="md" />
            </div>
            <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Pillar 01</span>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 mt-1 mb-3 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">Service</h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Driven by a genuine desire to help others succeed and leave every project, team, and community better than I found it.
            </p>
          </div>
        </div>

        <!-- Curiosity Card (Rough Chrome Gradient) -->
        <div class="card-chrome-rough p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-rough/20 text-rough dark:text-rough-light flex items-center justify-center group-hover:bg-rough group-hover:text-white transition-colors duration-300 shadow-xs">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <ChromeStar variant="rough" size="md" />
            </div>
            <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Pillar 02</span>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 mt-1 mb-3 group-hover:text-rough dark:group-hover:text-rough-light transition-colors">Curiosity</h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Fueled by an eagerness to learn, explore the world, and turn unfamiliar challenges into opportunities for discovery.
            </p>
          </div>
        </div>

        <!-- Resilience Card (Coral Chrome Gradient) -->
        <div class="card-chrome-coral p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-coral/25 text-coral-dark dark:text-coral-light flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors duration-300 shadow-xs">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <ChromeStar variant="coral" size="md" />
            </div>
            <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Pillar 03</span>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 mt-1 mb-3 group-hover:text-coral-dark dark:group-hover:text-coral-light transition-colors">Resilience</h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Grounded in conviction yet fearless enough to step outside my comfort zone, take calculated risks, and grow through adversity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Currently Exploring Section -->
    <section id="exploring" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Active Horizons</span>
        <h2 class="font-balthazar text-3xl sm:text-4xl lg:text-5xl font-semibold text-offnavy dark:text-pale-100">
          Currently Exploring
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        <p class="font-sans font-light text-base text-offnavy/80 dark:text-pale-200">
          Where I am dedicating my time, leadership energy, and curiosity today.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Exploring Card 1 (Gold Chrome) -->
        <div class="card-chrome-gold p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-4">
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center px-3 py-1 rounded-full bg-gold-50 dark:bg-gold-900/40 text-gold-dark dark:text-gold-light text-xs font-semibold uppercase tracking-wider border border-gold/30">
                Leadership & Impact
              </div>
              <ChromeStar variant="gold" size="sm" />
            </div>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
              Leading & Serving in College
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Stepping up as a student leader to serve my peers, organize meaningful initiatives, and turn campus ideas into real community impact.
            </p>
          </div>
          <div class="relative z-10 pt-6 mt-6 border-t border-gold/20 dark:border-offnavy-light text-xs text-rough dark:text-rough-light font-semibold flex items-center justify-between">
            <span>Student Leadership</span>
            <span class="text-gold-dark dark:text-gold-light">Active Ongoing</span>
          </div>
        </div>

        <!-- Exploring Card 2 (Rough Chrome) -->
        <div class="card-chrome-rough p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-4">
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center px-3 py-1 rounded-full bg-rough-soft dark:bg-rough/20 text-rough dark:text-rough-light text-xs font-semibold uppercase tracking-wider border border-rough/30">
                Skills & Foundation
              </div>
              <ChromeStar variant="rough" size="sm" />
            </div>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-rough dark:group-hover:text-rough-light transition-colors">
              Sharpening My Craft
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Navigating the balance of undergraduate life while actively discovering and building the practical skills that will prepare me for what comes next.
            </p>
          </div>
          <div class="relative z-10 pt-6 mt-6 border-t border-rough/20 dark:border-offnavy-light text-xs text-rough dark:text-rough-light font-semibold flex items-center justify-between">
            <span>Skill Acquisition</span>
            <span class="text-rough dark:text-rough-light">Continuous</span>
          </div>
        </div>

        <!-- Exploring Card 3 (Navy Chrome) -->
        <div class="card-chrome-navy p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-4">
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center px-3 py-1 rounded-full bg-pale-muted dark:bg-offnavy-light text-offnavy dark:text-pale-200 text-xs font-semibold uppercase tracking-wider border border-gold/30">
                Life & Mindset
              </div>
              <ChromeStar variant="silver" size="sm" />
            </div>
            <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
              Wondering & Experiencing Life
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 leading-relaxed text-sm sm:text-base">
              Staying curious beyond the classroom—making room for adventure, new perspectives, and simply enjoying the journey as it unfolds.
            </p>
          </div>
          <div class="relative z-10 pt-6 mt-6 border-t border-gold/20 dark:border-offnavy-light text-xs text-rough dark:text-rough-light font-semibold flex items-center justify-between">
            <span>Curiosity & Joy</span>
            <span class="text-gold-dark dark:text-gold-light">Always</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Habits & Lifestyle Highlights -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Personal Life & Habits</span>
        <h2 class="font-balthazar text-3xl sm:text-4xl font-semibold text-offnavy dark:text-pale-100">
          When I’m Not Studying or Leading
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Habit 1: Reading (Gold Chrome) -->
        <div class="card-chrome-gold p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-drip.jpg')] bg-cover bg-top opacity-[0.05] dark:opacity-[0.14] mix-blend-screen pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 flex items-start gap-5">
            <div class="w-14 h-14 shrink-0 rounded-2xl bg-gold/20 text-gold-dark dark:text-gold-light flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="space-y-2 flex-1">
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Mindful Habit</span>
                <ChromeStar variant="gold" size="sm" />
              </div>
              <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
                Loves Reading in her vacant time
              </h3>
              <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
                Finding quiet joy and rich insights between the pages of books during moments of pause throughout the day.
              </p>
            </div>
          </div>
          <div class="relative z-10 mt-6 pt-4 border-t border-gold/20 dark:border-offnavy-light flex items-center justify-between text-xs text-gold-dark dark:text-gold-light font-semibold">
            <span>Passionate Reader</span>
            <span class="text-rough dark:text-rough-light">Personal Favorite</span>
          </div>
        </div>

        <!-- Habit 2: Exercising and Walking (Coral Chrome) -->
        <div class="card-chrome-coral p-8 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-drip.jpg')] bg-cover bg-top opacity-[0.05] dark:opacity-[0.14] mix-blend-screen pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 flex items-start gap-5">
            <div class="w-14 h-14 shrink-0 rounded-2xl bg-coral/25 text-coral-dark dark:text-coral-light flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="space-y-2 flex-1">
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Wellness Routine</span>
                <ChromeStar variant="coral" size="sm" />
              </div>
              <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-coral-dark dark:group-hover:text-coral-light transition-colors">
                Loves to do Exercising and Walking nearly afternoon
              </h3>
              <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
                Clearing the mind, re-energizing the body, and greeting the afternoon breeze with refreshing outdoor strolls and workout sessions.
              </p>
            </div>
          </div>
          <div class="relative z-10 mt-6 pt-4 border-t border-coral/20 dark:border-offnavy-light flex items-center justify-between text-xs text-rough dark:text-rough-light font-semibold">
            <span>Active Wellness</span>
            <span class="text-coral-dark dark:text-coral-light">Afternoon Routine</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Technical & Creative Stack</span>
        <h2 class="font-balthazar text-3xl sm:text-4xl lg:text-5xl font-semibold text-offnavy dark:text-pale-100">
          Expertise
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        <p class="font-sans font-light text-base text-offnavy/80 dark:text-pale-200">
          Technologies, frameworks, and creative software I actively leverage across student leadership, full-stack development, and visual media.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <!-- Canva (Navy Chrome) -->
        <div class="card-chrome-navy p-6 group flex flex-col items-center text-center justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.05] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 w-full flex flex-col items-center">
            <div class="w-full flex items-center justify-end mb-1">
              <ChromeStar variant="silver" size="sm" />
            </div>
            <div class="w-20 h-20 rounded-2xl bg-white/90 dark:bg-offnavy-light/80 border border-gold/30 dark:border-offnavy-muted flex items-center justify-center p-3 mb-4 group-hover:scale-110 group-hover:border-gold/60 transition-all duration-300 shadow-xs">
              <img src="/images/logos/canva.png" alt="Canva Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 mb-1 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
              Canva
            </h3>
            <p class="text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold mb-2">
              Visual Design
            </p>
            <p class="text-xs text-offnavy/75 dark:text-pale-300 font-light leading-relaxed">
              Publication materials, presentations, event branding, and student council campaigns.
            </p>
          </div>
          <span class="relative z-10 mt-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-gold/15 text-gold-dark dark:text-gold-light border border-gold/30">
            Creative & Media
          </span>
        </div>

        <!-- Laravel (Rough Chrome) -->
        <div class="card-chrome-rough p-6 group flex flex-col items-center text-center justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.05] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 w-full flex flex-col items-center">
            <div class="w-full flex items-center justify-end mb-1">
              <ChromeStar variant="rough" size="sm" />
            </div>
            <div class="w-20 h-20 rounded-2xl bg-white/90 dark:bg-offnavy-light/80 border border-rough/30 dark:border-offnavy-muted flex items-center justify-center p-3 mb-4 group-hover:scale-110 group-hover:border-rough transition-all duration-300 shadow-xs">
              <img src="/images/logos/laravel.png" alt="Laravel Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 mb-1 group-hover:text-rough dark:group-hover:text-rough-light transition-colors">
              Laravel
            </h3>
            <p class="text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold mb-2">
              Backend Framework
            </p>
            <p class="text-xs text-offnavy/75 dark:text-pale-300 font-light leading-relaxed">
              Robust PHP web applications, RESTful APIs, routing, MVC structure, and database migrations.
            </p>
          </div>
          <span class="relative z-10 mt-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-rough/15 text-rough dark:text-rough-light border border-rough/30">
            Web Backend
          </span>
        </div>

        <!-- PostgreSQL (Navy Chrome) -->
        <div class="card-chrome-navy p-6 group flex flex-col items-center text-center justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.05] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 w-full flex flex-col items-center">
            <div class="w-full flex items-center justify-end mb-1">
              <ChromeStar variant="silver" size="sm" />
            </div>
            <div class="w-20 h-20 rounded-2xl bg-white/90 dark:bg-offnavy-light/80 border border-gold/30 dark:border-offnavy-muted flex items-center justify-center p-3 mb-4 group-hover:scale-110 group-hover:border-gold transition-all duration-300 shadow-xs">
              <img src="/images/logos/postgresql.png" alt="PostgreSQL Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 mb-1 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
              PostgreSQL
            </h3>
            <p class="text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold mb-2">
              Relational Database
            </p>
            <p class="text-xs text-offnavy/75 dark:text-pale-300 font-light leading-relaxed">
              Data modeling, relational schema architecture, complex SQL queries, and data integrity.
            </p>
          </div>
          <span class="relative z-10 mt-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-gold/15 text-gold-dark dark:text-gold-light border border-gold/30">
            Database & SQL
          </span>
        </div>

        <!-- Nuxt (Gold Chrome) -->
        <div class="card-chrome-gold p-6 group flex flex-col items-center text-center justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.05] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 w-full flex flex-col items-center">
            <div class="w-full flex items-center justify-end mb-1">
              <ChromeStar variant="gold" size="sm" />
            </div>
            <div class="w-20 h-20 rounded-2xl bg-white/90 dark:bg-offnavy-light/80 border border-gold/40 dark:border-offnavy-muted flex items-center justify-center p-3 mb-4 group-hover:scale-110 group-hover:border-gold transition-all duration-300 shadow-xs">
              <img src="/images/logos/nuxt.png" alt="Nuxt Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 mb-1 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
              Nuxt
            </h3>
            <p class="text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold mb-2">
              Vue.js Full-Stack
            </p>
            <p class="text-xs text-offnavy/75 dark:text-pale-300 font-light leading-relaxed">
              Reactive frontend interfaces, SSR/SSG workflows, component-driven layouts, and Tailwind CSS.
            </p>
          </div>
          <span class="relative z-10 mt-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-gold/15 text-gold-dark dark:text-gold-light border border-gold/30">
            Frontend & SSR
          </span>
        </div>

        <!-- Adobe Lightroom (Coral Chrome) -->
        <div class="card-chrome-coral p-6 group flex flex-col items-center text-center justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.05] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 w-full flex flex-col items-center">
            <div class="w-full flex items-center justify-end mb-1">
              <ChromeStar variant="coral" size="sm" />
            </div>
            <div class="w-20 h-20 rounded-2xl bg-white/90 dark:bg-offnavy-light/80 border border-coral/40 dark:border-offnavy-muted flex items-center justify-center p-3 mb-4 group-hover:scale-110 group-hover:border-coral transition-all duration-300 shadow-xs">
              <img src="/images/logos/lightroom.png" alt="Adobe Lightroom Logo" class="max-h-full max-w-full object-contain" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 mb-1 group-hover:text-coral-dark dark:group-hover:text-coral-light transition-colors">
              Adobe Lightroom
            </h3>
            <p class="text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold mb-2">
              Photo Editing
            </p>
            <p class="text-xs text-offnavy/75 dark:text-pale-300 font-light leading-relaxed">
              Color grading, tonal adjustments, coastal photography curation, and visual post-processing.
            </p>
          </div>
          <span class="relative z-10 mt-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-coral/15 text-coral-dark dark:text-coral-light border border-coral/30">
            Photography
          </span>
        </div>
      </div>
    </section>

    <!-- Let’s Connect Section -->
    <section id="connect" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div class="card-chrome-navy p-8 sm:p-12 lg:p-16 border-2 border-gold/40 shadow-2xl relative overflow-hidden group">
        <!-- Liquid chrome textures & glow -->
        <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.08] dark:opacity-[0.18] mix-blend-overlay pointer-events-none rounded-3xl"></div>
        <div class="absolute -top-12 -left-12 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-coral/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold-dark dark:text-gold-light text-xs uppercase tracking-widest font-semibold border border-gold/30">
            <ChromeStar variant="gold" size="sm" />
            <span>Open Door</span>
            <ChromeStar variant="gold" size="sm" />
          </div>
          <h2 class="font-balthazar text-3xl sm:text-4xl lg:text-5xl font-semibold text-offnavy dark:text-white">
            Let’s Connect
          </h2>
          <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>

          <p class="font-sans font-light text-base sm:text-lg text-offnavy/80 dark:text-pale-200 leading-relaxed">
            Whether you want to collaborate on a project, swap ideas, share a book recommendation, or simply say hello—my inbox and lines are always open. Let’s build something meaningful together!
          </p>

          <!-- Contact items grid -->
          <div class="pt-6 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <!-- Say Hello (Gold Chrome) -->
            <a
              href="tel:+555754889"
              class="card-chrome-gold p-5 flex items-center space-x-4 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay pointer-events-none rounded-2xl"></div>
              <div class="relative z-10 w-12 h-12 rounded-xl bg-gold/20 text-gold-dark dark:text-gold-light flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="relative z-10 min-w-0 flex-1">
                <div class="flex items-center justify-between">
                  <p class="text-xs uppercase tracking-wider text-gold-dark dark:text-gold-light font-semibold mb-0.5">Say Hello</p>
                  <ChromeStar variant="gold" size="sm" />
                </div>
                <p class="text-sm font-bold text-offnavy dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">+555-754-889</p>
                <p class="text-xs text-offnavy/70 dark:text-pale-300 font-light mt-0.5">Mobile Contact Line</p>
              </div>
            </a>

            <!-- Drop a Note (Navy Chrome) -->
            <a
              href="mailto:charriel16@gmail.com"
              class="card-chrome-navy p-5 flex items-center space-x-4 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay pointer-events-none rounded-2xl"></div>
              <div class="relative z-10 w-12 h-12 rounded-xl bg-gold/20 text-gold-dark dark:text-gold-light flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="relative z-10 min-w-0 flex-1">
                <div class="flex items-center justify-between">
                  <p class="text-xs uppercase tracking-wider text-gold-dark dark:text-gold-light font-semibold mb-0.5">Drop a Note</p>
                  <ChromeStar variant="silver" size="sm" />
                </div>
                <p class="text-sm font-bold text-offnavy dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors break-all">charriel16@gmail.com</p>
                <p class="text-xs text-offnavy/70 dark:text-pale-300 font-light mt-0.5">Direct Personal Email</p>
              </div>
            </a>

            <!-- Follow the Journey (Coral Chrome) -->
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="card-chrome-coral p-5 flex items-center space-x-4 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay pointer-events-none rounded-2xl"></div>
              <div class="relative z-10 w-12 h-12 rounded-xl bg-coral/20 text-coral-dark dark:text-coral-light flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-coral group-hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <div class="relative z-10 min-w-0 flex-1">
                <div class="flex items-center justify-between">
                  <p class="text-xs uppercase tracking-wider text-coral-dark dark:text-coral-light font-semibold mb-0.5">Follow the Journey</p>
                  <ChromeStar variant="coral" size="sm" />
                </div>
                <p class="text-sm font-bold text-offnavy dark:text-white group-hover:text-coral-dark dark:group-hover:text-coral-light transition-colors">Charriel Mae M. Ayuban</p>
                <p class="text-xs text-offnavy/70 dark:text-pale-300 font-light mt-0.5">Facebook Profile</p>
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
