/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: {
          DEFAULT: "#96a0b9",
          gradientLight: '#4f5b7a',
          gradientDark: '#515e7c',
          font: "#c2cbe0",
          fontTitle: "#7cbfe9",
          dark: "#444f6b",
        },
      },
    },
  },
  plugins: [],
}