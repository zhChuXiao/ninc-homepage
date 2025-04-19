/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './assets/**/*.{css,sass}'],
  theme: {
    extend: {
      animation: {
        fade: 'fade 0.3s ease-in-out'
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      colors: {
        gray: {
          50: '#f6f8fa',
          100: '#eaecef',
          200: '#d0d7de',
          300: '#afb8c1',
          400: '#8b949e',
          500: '#6e7781',
          600: '#57606a',
          700: '#424a53',
          800: '#1b1b1f',
          900: '#161618',
          950: '#0d1011',
          darkest: '#0a0a0b',
          dark: '#121214',
          DEFAULT: '#d0d7de',
          light: '#eaecef',
          lightest: '#f6f8fa'
        }
      }
    }
  },
  plugins: []
}
