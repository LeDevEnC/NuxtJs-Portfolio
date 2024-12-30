/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',  // Pages
    './components/**/*.{vue,js,ts,jsx,tsx}',  // Composants
    './layouts/**/*.{vue,js,ts,jsx,tsx}',  // Layouts
    './plugins/**/*.{js,ts}',  // Plugins
    './nuxt.config.{js,ts}',  // Nuxt config si nécessaire
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
