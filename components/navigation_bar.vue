<template>
    <nav class="bg-gray-900 text-white py-6 shadow-md">
      <div class="container mx-auto flex items-center justify-between px-8">
        <!-- Titre à gauche -->
        <NuxtLink to="/">
          <h1 class="text-3xl font-semibold text-gray-100 duration-200 transform hover:scale-105 font-sans">
            Mon Portfolio
          </h1>
        </NuxtLink>
  
        <!-- Liens à droite avec animations au survol -->
        <ul class="flex space-x-12">
          <li>
            <NuxtLink
              to="/"
              class="text-xl hover:text-gray-400 transition-colors duration-200 transform hover:scale-105 font-medium"
              active-class="text-blue-500"
            >
              Accueil
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projects"
              class="text-xl hover:text-gray-400 transition-colors duration-200 transform hover:scale-105 font-medium"
              active-class="text-blue-500"
            >
              Projets
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="text-xl hover:text-gray-400 transition-colors duration-200 transform hover:scale-105 font-medium"
              active-class="text-blue-500"
            >
              À propos
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="text-xl hover:text-gray-400 transition-colors duration-200 transform hover:scale-105 font-medium"
              active-class="text-blue-500"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style>
    /* Pas de styles additionnels pour l'instant, Tailwind gère tout */
  </style>
  