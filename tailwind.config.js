/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'class'],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "rgb(17 24 39)",
        primary: {
          DEFAULT: "#4CAF50",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#2E7D32",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        ring: "#4CAF50",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
