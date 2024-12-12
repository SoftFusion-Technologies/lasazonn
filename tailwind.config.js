/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#FFA8ABC',
        tertiary: '#151030',
        pink: '#FF006C',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        grey: '#0a0a0a',
        gold: '#FFD700' // Color dorado
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'bar-bg': "url('./src/assets/Tragos/imgHeroSazon.webp')"
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        fadeInOut: 'fadeInOut 3s ease-in-out infinite'
      },
      fontFamily: {
        sazon: ['"Dancing Script"', 'cursive'] // Fuente personalizada
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};
