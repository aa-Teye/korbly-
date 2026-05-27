/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: 'var(--color-forest-900)',
          800: 'var(--color-forest-800)',
          700: 'var(--color-forest-700)',
        },
        gold: {
          DEFAULT: 'var(--color-gold)',
          light: 'var(--color-gold-light)',
        },
        cream: 'var(--color-cream)',
        parchment: 'var(--color-parchment)',
        muted: '#6B7B6E',
        line: 'var(--color-line)',
        ink: 'var(--color-ink)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
