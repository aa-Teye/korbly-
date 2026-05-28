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
          900: '#0E2318',
          800: '#1A4033',
          700: '#2D6A4F',
        },
        gold: {
          DEFAULT: '#C8963E',
          light: '#E5B96A',
        },
        cream: '#F6F2E8',
        parchment: '#EDE8DA',
        muted: '#6B7B6E',
        line: '#D5CFC0',
        ink: '#09130F',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
