/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography"
module.exports = {
  darkMode: "class", // IMPORTANT for dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
   plugins: [typography],
};
