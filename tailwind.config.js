/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobg : "url('/assets/bg-hero-comp.webp')"
      }
    },
  },
  plugins: [],
}