export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],  // Assure-toi que le fichier CSS est bien référencé ici

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',  
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css', 
    configPath: 'tailwind.config.js',  
    exposeConfig: {
      level: 2  
    },
    viewer: true,  
  },

  compatibilityDate: '2024-12-30',
});
