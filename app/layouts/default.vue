<template>
  <div class="min-h-screen flex flex-col bg-pale dark:bg-offnavy-dark text-offnavy dark:text-pale-100 font-sans transition-colors duration-300">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
