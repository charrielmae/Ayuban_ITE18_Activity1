import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pale: {
          DEFAULT: '#FBF9F5',
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F7F3EB',
          300: '#EFE7DA',
          400: '#E4D7C2',
          card: '#FFFFFF',
          muted: '#F5EFE4',
          border: '#E8DCC9'
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DFC285',
          dark: '#9A7426',
          hover: '#B58F45',
          muted: '#FBF6EC',
          50: '#FBF7EF',
          100: '#F6EED9',
          500: '#C5A059',
          600: '#B08B42',
          700: '#936F2B'
        },
        rough: {
          DEFAULT: '#9E4738',
          light: '#E58B79',
          dark: '#7A2E21',
          soft: '#F7EDE9',
          muted: '#EAD1CB'
        },
        offnavy: {
          DEFAULT: '#141E30',
          light: '#1F2E45',
          dark: '#0A101C',
          muted: '#364860',
          card: '#16233B'
        },
        coral: {
          DEFAULT: '#F08080',
          light: '#FFA3A3',
          dark: '#D46363',
          soft: '#FEF4F4'
        }
      },
      fontFamily: {
        display: ['"Great Vibes"', 'cursive'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
        body: ['"Jost"', 'sans-serif']
      }
    }
  }
}
