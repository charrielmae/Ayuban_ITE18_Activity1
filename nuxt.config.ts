// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Charriel Mae M. Ayuban | Student Leader & Purpose-Driven Explorer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Personal portfolio and profile of Charriel Mae M. Ayuban – Student leader, lifelong learner, and explorer building meaningful things outside my comfort zone.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Balthazar&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Italiana&family=Jost:wght@300;400;500;600;700&family=Luxurious+Roman&family=Luxurious+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&family=Prata&display=swap'
        }
      ],
      script: [
        {
          innerHTML: `
            (function() {
              try {
                var stored = localStorage.getItem('ayuban_theme');
                var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
