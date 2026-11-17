<template>
  <div class="py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 transition-colors duration-300">
    <!-- Section 1: Hero & Personal Information -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <!-- Profile Picture Column with Faded Hover Transition -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="relative w-full max-w-sm group">
          <!-- Subtle decorative halo -->
          <div class="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold via-rough to-gold-dark opacity-30 group-hover:opacity-50 blur-sm transition-opacity duration-700"></div>

          <div class="relative rounded-3xl overflow-hidden border-4 border-white dark:border-offnavy-light shadow-2xl bg-white dark:bg-offnavy-dark aspect-[3/4] cursor-pointer">
            <!-- First Image (Default View) -->
            <img
              src="/images/profile.jpg"
              alt="Charriel Mae M. Ayuban"
              class="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />

            <!-- Second Image (Smooth Faded Transition on Cursor Hover) -->
            <img
              src="/images/profile-second.jpg"
              alt="Charriel Mae M. Ayuban at USWAK 2026 Leadership Ceremony"
              class="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />

            <!-- Badge overlay -->
            <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-offnavy/95 via-offnavy/50 to-transparent p-6 text-pale z-10 pointer-events-none">
              <p class="font-display text-3xl text-gold-light">Charriel Mae</p>
              <p class="text-xs uppercase tracking-widest text-pale-300 font-semibold mt-1">CCISLSG Governor • BSIT III</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal Information Details -->
      <div class="lg:col-span-7 space-y-6">
        <div class="space-y-2">
          <h1 class="font-balthazar text-4xl sm:text-5xl font-semibold text-offnavy dark:text-pale-100 leading-tight">
            Personal Information
          </h1>
          <p class="font-display text-2xl text-gold-dark dark:text-gold-light">
            Charriel Mae M. Ayuban
          </p>
        </div>

        <!-- Info Grid Card with Liquid Chrome Styling -->
        <div class="card-chrome-gold p-6 sm:p-8 group space-y-6">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-frame.jpg')] bg-cover opacity-[0.05] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>

          <div class="relative z-10 flex items-center justify-between border-b border-gold/30 dark:border-gold/20 pb-4">
            <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-bold">Profile Details</span>
            <ChromeStar variant="gold" size="md" />
          </div>

          <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            <!-- Full Name -->
            <div class="card-chrome-navy p-4 rounded-2xl group/item">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs uppercase tracking-wider text-rough dark:text-rough-light group-hover/item:text-gold-dark dark:group-hover/item:text-gold-light font-semibold block transition-colors">Full Name</span>
                <ChromeStar variant="silver" size="sm" />
              </div>
              <p class="font-bold text-offnavy dark:text-pale-100 text-base transition-colors">Ayuban, Charriel Mae M.</p>
            </div>

            <!-- Age -->
            <div class="card-chrome-rough p-4 rounded-2xl group/item">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs uppercase tracking-wider text-rough dark:text-rough-light group-hover/item:text-gold-dark dark:group-hover/item:text-gold-light font-semibold block transition-colors">Age</span>
                <ChromeStar variant="rough" size="sm" />
              </div>
              <p class="font-bold text-offnavy dark:text-pale-100 text-base transition-colors">21 years old</p>
            </div>

            <!-- Address -->
            <div class="card-chrome-gold sm:col-span-2 p-4 rounded-2xl group/item">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs uppercase tracking-wider text-rough dark:text-rough-light group-hover/item:text-gold-dark dark:group-hover/item:text-gold-light font-semibold block transition-colors">Address</span>
                <ChromeStar variant="gold" size="sm" />
              </div>
              <p class="font-medium text-offnavy dark:text-pale-100 text-base transition-colors">Las Casas Elena Subdivision, Baan Km.3, Butuan City</p>
            </div>

            <!-- Languages -->
            <div class="card-chrome-coral sm:col-span-2 p-4 rounded-2xl group/item">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs uppercase tracking-wider text-rough dark:text-rough-light group-hover/item:text-gold-dark dark:group-hover/item:text-gold-light font-semibold block transition-colors">Languages Spoken</span>
                <ChromeStar variant="coral" size="sm" />
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="px-3.5 py-1 rounded-full bg-white/70 dark:bg-offnavy-light/80 text-offnavy dark:text-pale-100 font-semibold text-xs border border-coral/30 hover:bg-coral hover:text-white dark:hover:bg-coral hover:scale-105 transition-all duration-200 cursor-default">
                  Filipino
                </span>
                <span class="px-3.5 py-1 rounded-full bg-white/70 dark:bg-offnavy-light/80 text-offnavy dark:text-pale-100 font-semibold text-xs border border-coral/30 hover:bg-coral hover:text-white dark:hover:bg-coral hover:scale-105 transition-all duration-200 cursor-default">
                  Visayan
                </span>
                <span class="px-3.5 py-1 rounded-full bg-white/70 dark:bg-offnavy-light/80 text-offnavy dark:text-pale-100 font-semibold text-xs border border-coral/30 hover:bg-coral hover:text-white dark:hover:bg-coral hover:scale-105 transition-all duration-200 cursor-default">
                  English
                </span>
              </div>
            </div>
          </div>

          <!-- Key Core Skills -->
          <div class="relative z-10 pt-4 border-t border-gold/30 dark:border-offnavy-muted">
            <span class="text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold block mb-3">Core Skills</span>
            <div class="flex flex-wrap gap-2">
              <span class="px-3.5 py-1.5 rounded-xl bg-offnavy dark:bg-offnavy-light text-pale-100 text-xs font-semibold tracking-wide hover:bg-gold dark:hover:bg-gold hover:text-offnavy dark:hover:text-offnavy hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">
                Resourceful
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-offnavy dark:bg-offnavy-light text-pale-100 text-xs font-semibold tracking-wide hover:bg-gold dark:hover:bg-gold hover:text-offnavy dark:hover:text-offnavy hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">
                Communication Skills
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-offnavy dark:bg-offnavy-light text-pale-100 text-xs font-semibold tracking-wide hover:bg-gold dark:hover:bg-gold hover:text-offnavy dark:hover:text-offnavy hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">
                Resilient
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-offnavy dark:bg-offnavy-light text-pale-100 text-xs font-semibold tracking-wide hover:bg-gold dark:hover:bg-gold hover:text-offnavy dark:hover:text-offnavy hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">
                Time Management
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-gold-dark dark:bg-gold text-white dark:text-offnavy text-xs font-semibold tracking-wide hover:bg-rough dark:hover:bg-rough hover:text-white hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">
                Leadership
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Educational Background with Pale hover -->
    <section class="space-y-8 pt-6">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Academic Journey</span>
        <h2 class="font-balthazar text-3xl sm:text-4xl font-semibold text-offnavy dark:text-pale-100">
          Educational Background
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div class="max-w-4xl mx-auto space-y-6">
        <!-- Tertiary School -->
        <div class="card-chrome-gold p-6 sm:p-8 group space-y-4">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gold/30 dark:border-gold/20 pb-4">
            <div class="flex items-center gap-3">
              <ChromeStar variant="gold" size="md" />
              <div>
                <span class="text-xs uppercase tracking-widest text-gold-dark dark:text-gold-light group-hover:text-rough dark:group-hover:text-gold-light font-semibold transition-colors">Tertiary School</span>
                <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">Caraga State University - Main Campus</h3>
              </div>
            </div>
            <span class="px-3.5 py-1 rounded-full bg-gold/20 dark:bg-gold/30 text-gold-dark dark:text-gold-light border border-gold/40 font-semibold text-xs tracking-wider self-start sm:self-auto shadow-xs">
              2024 - Present
            </span>
          </div>
          <div class="relative z-10 space-y-2 text-sm">
            <p class="text-offnavy dark:text-pale-100 font-semibold text-base">
              Degree: <span class="font-normal text-offnavy/90 dark:text-pale-200">Bachelor of Science in Information Technology (BSIT III)</span>
            </p>
            <div class="p-4 rounded-2xl bg-white/70 dark:bg-offnavy-dark/60 border border-gold/30 dark:border-gold/20">
              <span class="text-xs uppercase tracking-wider text-rough dark:text-rough-light font-semibold block mb-1">Leadership Highlights</span>
              <p class="text-offnavy/90 dark:text-pale-200 font-medium">
                CCISLSG A.Y 2025 - 2026 Director for Sports and currently CCISLSG A.Y 2026 - 2027 Governor
              </p>
            </div>
          </div>
        </div>

        <!-- Senior High School -->
        <div class="card-chrome-rough p-6 sm:p-8 group space-y-3">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-rough/30 dark:border-rough/20 pb-4">
            <div class="flex items-center gap-3">
              <ChromeStar variant="rough" size="md" />
              <div>
                <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold transition-colors">Senior High School</span>
                <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-rough dark:group-hover:text-rough-light transition-colors">Father Saturnino Pueblos University</h3>
              </div>
            </div>
            <span class="px-3.5 py-1 rounded-full bg-rough/20 dark:bg-rough/30 text-rough dark:text-rough-light border border-rough/40 font-semibold text-xs tracking-wider self-start sm:self-auto shadow-xs">
              2021 - 2023
            </span>
          </div>
          <p class="relative z-10 text-offnavy dark:text-pale-100 font-semibold text-sm">
            Track / Strand: <span class="font-normal text-offnavy/90 dark:text-pale-200">Accounting & Business Management (ABM)</span>
          </p>
        </div>

        <!-- Junior High School -->
        <div class="card-chrome-navy p-6 sm:p-8 group space-y-3">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gold/30 dark:border-offnavy-light pb-4">
            <div class="flex items-center gap-3">
              <ChromeStar variant="silver" size="md" />
              <div>
                <span class="text-xs uppercase tracking-widest text-gold-dark dark:text-gold-light font-semibold transition-colors">Junior High School</span>
                <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-light transition-colors">Francisco Bangoy National High School</h3>
              </div>
            </div>
            <span class="px-3.5 py-1 rounded-full bg-offnavy/15 dark:bg-offnavy-light text-offnavy dark:text-pale-200 border border-gold/30 font-semibold text-xs tracking-wider self-start sm:self-auto shadow-xs">
              2017 - 2021
            </span>
          </div>
          <div class="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 dark:bg-gold/25 text-gold-dark dark:text-gold-light text-xs font-semibold border border-gold/30">
            <span>Highlights:</span>
            <span>Graduated with Honors</span>
          </div>
        </div>

        <!-- Primary School -->
        <div class="card-chrome-coral p-6 sm:p-8 group space-y-3">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-coral/30 dark:border-coral/20 pb-4">
            <div class="flex items-center gap-3">
              <ChromeStar variant="coral" size="md" />
              <div>
                <span class="text-xs uppercase tracking-widest text-coral-dark dark:text-coral-light font-semibold transition-colors">Primary School</span>
                <h3 class="font-heading text-2xl font-bold text-offnavy dark:text-pale-100 group-hover:text-coral-dark dark:group-hover:text-coral-light transition-colors">Alviola Central Elementary School</h3>
              </div>
            </div>
            <span class="px-3.5 py-1 rounded-full bg-coral/20 dark:bg-coral/30 text-coral-dark dark:text-coral-light border border-coral/40 font-semibold text-xs tracking-wider self-start sm:self-auto shadow-xs">
              2010 - 2017
            </span>
          </div>
          <div class="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 dark:bg-gold/25 text-gold-dark dark:text-gold-light text-xs font-semibold border border-gold/30">
            <span>Highlights:</span>
            <span>Graduated with Honors</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Skills and Interests with Pale hover -->
    <section class="space-y-8 pt-6">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Capabilities & Competencies</span>
        <h2 class="font-balthazar text-3xl sm:text-4xl font-semibold text-offnavy dark:text-pale-100">
          Skills & Interests
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Item 1 (Gold Chrome) -->
        <div class="card-chrome-gold p-7 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-3">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-gold/20 text-gold-dark dark:text-gold-light font-bold flex items-center justify-center text-xs group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                01
              </span>
              <ChromeStar variant="gold" size="sm" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors duration-300">
              Servant Leadership & Teamwork
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
              Organizing student initiatives, rallying peers, and putting people first.
            </p>
          </div>
          <div class="relative z-10 pt-4 border-t border-gold/30 dark:border-gold/20 mt-4">
            <span class="text-[11px] font-semibold text-rough dark:text-rough-light uppercase tracking-wider">Community & People</span>
          </div>
        </div>

        <!-- Item 2 (Rough Chrome) -->
        <div class="card-chrome-rough p-7 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-3">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-rough/20 text-rough dark:text-rough-light font-bold flex items-center justify-center text-xs group-hover:bg-rough group-hover:text-white transition-colors duration-300">
                02
              </span>
              <ChromeStar variant="rough" size="sm" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 group-hover:text-rough dark:group-hover:text-rough-light transition-colors duration-300">
              Adaptability & Risk-Taking
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
              Stepping confidently into unfamiliar challenges and learning fast under pressure.
            </p>
          </div>
          <div class="relative z-10 pt-4 border-t border-rough/30 dark:border-rough/20 mt-4">
            <span class="text-[11px] font-semibold text-rough dark:text-rough-light uppercase tracking-wider">Agility & Growth</span>
          </div>
        </div>

        <!-- Item 3 (Coral Chrome) -->
        <div class="card-chrome-coral p-7 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-3">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-coral/25 text-coral-dark dark:text-coral-light font-bold flex items-center justify-center text-xs group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                03
              </span>
              <ChromeStar variant="coral" size="sm" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 group-hover:text-coral-dark dark:group-hover:text-coral-light transition-colors duration-300">
              Communication & Active Listening
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
              Bridging ideas across teams and listening with empathy before acting.
            </p>
          </div>
          <div class="relative z-10 pt-4 border-t border-coral/30 dark:border-coral/20 mt-4">
            <span class="text-[11px] font-semibold text-rough dark:text-rough-light uppercase tracking-wider">Empathy & Dialogue</span>
          </div>
        </div>

        <!-- Item 4 (Navy Chrome) -->
        <div class="card-chrome-navy p-7 group flex flex-col justify-between">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-3">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-offnavy/15 dark:bg-offnavy-light text-offnavy dark:text-pale-200 font-bold flex items-center justify-center text-xs group-hover:bg-gold group-hover:text-offnavy transition-colors duration-300">
                04
              </span>
              <ChromeStar variant="silver" size="sm" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-light transition-colors duration-300">
              Creative Problem-Solving
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
              Approaching tasks with curiosity, fresh perspectives, and an eye for detail.
            </p>
          </div>
          <div class="relative z-10 pt-4 border-t border-gold/30 dark:border-offnavy-light mt-4">
            <span class="text-[11px] font-semibold text-rough dark:text-rough-light uppercase tracking-wider">Innovation & Detail</span>
          </div>
        </div>

        <!-- Item 5 (Gold Chrome) -->
        <div class="card-chrome-gold p-7 group flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div class="absolute inset-0 bg-[url('/images/textures/chrome-stars.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
          <div class="relative z-10 space-y-3">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-gold/20 text-gold-dark dark:text-gold-light font-bold flex items-center justify-center text-xs group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                05
              </span>
              <ChromeStar variant="gold" size="sm" />
            </div>
            <h3 class="font-heading text-xl font-bold text-offnavy dark:text-pale-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors duration-300">
              Time & Responsibility Management
            </h3>
            <p class="font-sans font-light text-offnavy/80 dark:text-pale-200 text-sm leading-relaxed">
              Balancing undergraduate academics alongside student leadership commitments.
            </p>
          </div>
          <div class="relative z-10 pt-4 border-t border-gold/30 dark:border-gold/20 mt-4">
            <span class="text-[11px] font-semibold text-rough dark:text-rough-light uppercase tracking-wider">Focus & Balance</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Hobbies & Personal Pursuits (Navy Chrome with Drip Overlay) -->
    <section class="space-y-8 pt-6">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-semibold">Outside the Classroom</span>
        <h2 class="font-balthazar text-3xl sm:text-4xl font-semibold text-offnavy dark:text-pale-100">
          Hobbies & Personal Pursuits
        </h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div class="card-chrome-navy max-w-4xl mx-auto p-8 sm:p-10 group space-y-6">
        <div class="absolute inset-0 bg-[url('/images/textures/chrome-drip.jpg')] bg-cover bg-top opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>

        <div class="relative z-10 flex items-center justify-between border-b border-gold/30 dark:border-offnavy-light pb-4">
          <span class="text-xs uppercase tracking-widest text-rough dark:text-rough-light font-bold">Personal Life & Passions</span>
          <ChromeStar variant="gold" size="md" />
        </div>

        <p class="relative z-10 font-heading text-xl sm:text-2xl text-offnavy dark:text-pale-100 leading-relaxed font-medium">
          Outside of academics and student leadership, you’ll usually find me immersed in a good e-book, painting and coloring, dancing, taking afternoon walks, or sitting by the sea listening to the waves and I’m always eager to try new creative and outdoor adventures like coastal photography and community cleanups.
        </p>

        <!-- Activities Pills -->
        <div class="relative z-10 pt-4 border-t border-gold/20 dark:border-offnavy-muted flex flex-wrap gap-2.5">
          <span class="px-4 py-2 rounded-full bg-white/80 dark:bg-offnavy-card border border-gold/40 dark:border-gold/30 text-xs font-semibold text-offnavy dark:text-pale-100 shadow-2xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-offnavy hover:border-gold hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
            Immersed in E-books
          </span>
          <span class="px-4 py-2 rounded-full bg-white/80 dark:bg-offnavy-card border border-gold/40 dark:border-gold/30 text-xs font-semibold text-offnavy dark:text-pale-100 shadow-2xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-offnavy hover:border-gold hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
            Painting & Coloring
          </span>
          <span class="px-4 py-2 rounded-full bg-white/80 dark:bg-offnavy-card border border-gold/40 dark:border-gold/30 text-xs font-semibold text-offnavy dark:text-pale-100 shadow-2xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-offnavy hover:border-gold hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
            Dancing
          </span>
          <span class="px-4 py-2 rounded-full bg-white/80 dark:bg-offnavy-card border border-gold/40 dark:border-gold/30 text-xs font-semibold text-offnavy dark:text-pale-100 shadow-2xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-offnavy hover:border-gold hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
            Afternoon Walks
          </span>
          <span class="px-4 py-2 rounded-full bg-white/80 dark:bg-offnavy-card border border-gold/40 dark:border-gold/30 text-xs font-semibold text-offnavy dark:text-pale-100 shadow-2xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-offnavy hover:border-gold hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
            Sitting by the Sea & Waves
          </span>
          <span class="px-4 py-2 rounded-full bg-gold/20 dark:bg-gold/30 border border-gold text-xs font-semibold text-gold-dark dark:text-gold-light shadow-2xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-offnavy hover:border-gold hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
            Coastal Photography
          </span>
          <span class="px-4 py-2 rounded-full bg-rough/15 dark:bg-rough/25 border border-rough/40 text-xs font-semibold text-rough dark:text-rough-light shadow-2xs hover:bg-rough hover:text-white dark:hover:bg-rough dark:hover:text-white hover:border-rough hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default">
            Community Cleanups
          </span>
        </div>
      </div>
    </section>

    <!-- Bottom Action Navigation (Gold Chrome Card) -->
    <section class="max-w-4xl mx-auto pt-6 text-center">
      <div class="card-chrome-gold p-8 sm:p-10 group space-y-4">
        <div class="absolute inset-0 bg-[url('/images/textures/chrome-frame.jpg')] bg-cover opacity-[0.06] dark:opacity-[0.14] mix-blend-overlay pointer-events-none rounded-3xl"></div>
        <div class="relative z-10 flex justify-center mb-1">
          <ChromeStar variant="gold" size="lg" />
        </div>
        <h3 class="relative z-10 font-heading text-2xl sm:text-3xl font-bold text-offnavy dark:text-white">
          Ready to collaborate or connect?
        </h3>
        <p class="relative z-10 text-sm font-light text-offnavy/80 dark:text-pale-300 max-w-lg mx-auto">
          Return to the homepage to learn more about my active horizons, or reach out directly through my contact channels.
        </p>
        <div class="relative z-10 pt-3 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            to="/"
            class="inline-flex items-center px-6 py-3 rounded-full bg-offnavy dark:bg-offnavy-light text-pale-100 font-bold text-sm tracking-wide hover:bg-gold hover:text-offnavy dark:hover:bg-gold dark:hover:text-offnavy shadow-md transition-all duration-300"
          >
            ← Return to Homepage
          </NuxtLink>
          <a
            href="/#connect"
            class="inline-flex items-center px-6 py-3 rounded-full bg-white/70 dark:bg-white/10 border border-gold/40 text-offnavy dark:text-white font-semibold text-sm tracking-wide hover:bg-gold-50 dark:hover:bg-pale/20 hover:border-gold transition-all duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Personal Profile | Charriel Mae M. Ayuban'
})
</script>
