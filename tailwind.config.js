/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        garamond: ["Cormorant Garamond", "serif"],
        oxygen: ["Oxygen", "sans-serif"]
      }
    },
  },
  plugins: [],
}

