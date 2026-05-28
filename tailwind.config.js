/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0c1e36',
          800: '#13294b',
          700: '#1c3563',
          600: '#264a82',
        },
        burgundy: {
          900: '#4a0e1f',
          800: '#6b1530',
          700: '#8b1a3d',
          600: '#a52050',
        },
        ink: '#0f1a2c',
        paper: '#f5f6f8',
        line: '#e3e6eb',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
