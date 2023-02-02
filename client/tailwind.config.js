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
          // DEFAULT: "#96a0b9",
          DEFAULT: "#3e50cb",
          gradientLight: "#6e7275",
          gradientDark: "#2b3136",
          fontLight: "#c2cbe0",
          // dark: "#E9EBFA",
          bg: "#E9EBFA",
          grey: "#edeef7",
          // light: colors.blue[200],
        },
      },
    },
  },
  plugins: [],
};
