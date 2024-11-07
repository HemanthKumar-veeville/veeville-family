/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add colors inspired by Apple's theme
        "gray-dark": "#333333",
        "gray-light": "#f5f5f7",
        black: "#000000",
        white: "#ffffff",
        blue: "#0071e3",
      },
      fontFamily: {
        georgia: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
