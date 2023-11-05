import plugin from "tailwindcss"

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["manrope", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
}

export default tailwindConfig
