<template>
    <section class="min-h-screen bg-gray-200 text-gray-900 flex items-center justify-center pt-8 pb-12 overflow-hidden">
      <div class="flex items-center max-w-7xl px-8 space-x-32 animate__animated animate__fadeIn animate__delay-0.5s">
        <!-- Photo à gauche avec bords arrondis et format portrait ajusté -->
        <div class="w-72 h-96 rounded-lg overflow-hidden border-4 border-gray-500 shadow-lg transform transition duration-500 hover:scale-105">
          <img src="../assets/images/pdp.jpg" alt="Heulan Malki" class="w-full h-full object-cover" />
        </div>
    
        <!-- Texte à droite avec plus d'espace et animations -->
        <div class="max-w-xl space-y-8 animate__animated animate__fadeIn animate__delay-1s">
          <h1 class="text-5xl font-extrabold text-gray-800 mb-4">
            Bonjour, je suis Heulan Malki
          </h1>
          <p class="text-2xl">
            Étudiant en informatique à l'IUT de Vannes, passionné par la cybersécurité, le développement et tout ce qui est en rapport avec l'informatique.
          </p>
          <p class="text-xl">
            Ce site présente mes projets réalisés, mes compétences et mes expériences dans le domaine de l'informatique.
          </p>
          <p class="text-xl text-gray-600">
            N'hésitez pas à explorer les différentes sections pour en savoir plus sur moi et mes réalisations !
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <style>
    /* Animation d'entrée avec animate.css */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
  </style>
  