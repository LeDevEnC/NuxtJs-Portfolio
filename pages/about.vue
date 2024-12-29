<template>
    <section class="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center py-10">
      <div class="flex flex-col items-center max-w-3xl px-6 space-y-8 animate__animated animate__fadeIn">
        <!-- Titre -->
        <h1 class="text-4xl font-extrabold text-gray-800 mb-4">À propos de ce site</h1>
  
        <!-- Contenu -->
        <p class="text-xl text-center mb-6">
          Ce site a été créé par moi, Heulan Malki, dans le cadre de mon projet personnel pour
          présenter mes réalisations et mes compétences en informatique.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          Le site a été développé avec <strong>Nuxt.js</strong>, un framework basé sur Vue.js, et <strong>Tailwind CSS</strong>,
          une bibliothèque de styles utilitaire qui permet de créer des interfaces modernes et responsives facilement.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          Ce projet m'a permis d'explorer les concepts du développement frontend tout en me familiarisant avec
          des outils puissants comme Nuxt.js et Tailwind, que j'utilise maintenant régulièrement dans mes projets.
        </p>
  
        <!-- Logos côte à côte avec bords arrondis et liens cliquables -->
        <div class="flex space-x-8">
          <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">
            <img 
              src="/img/nuxt-logo.png" 
              alt="Nuxt.js" 
              class="w-24 h-auto transform transition-transform duration-300 hover:scale-110 rounded-lg"
            />
          </a>
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="/img/tailwind-logo.jpg" 
              alt="Tailwind CSS" 
              class="w-24 h-auto transform transition-transform duration-300 hover:scale-110 rounded-lg"
            />
          </a>
        </div>
      </div>
    </section>
  </template>
  
  
  <style>
  /* Animation d'entrée avec animate.css */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
  </style>
  