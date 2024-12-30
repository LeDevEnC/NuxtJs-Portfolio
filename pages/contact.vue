<template>
  <section class="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center py-10">
    <div class="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-8 space-y-6 lg:space-y-0 lg:space-x-12">
      <!-- Section gauche : description -->
      <div class="flex flex-col items-center lg:items-start space-y-4">
        <h1 class="text-3xl font-bold text-gray-800">Contactez-moi</h1>
        <p class="text-lg text-gray-600 text-center lg:text-left">
          Vous avez des questions ou souhaitez collaborer ? Remplissez le formulaire pour m'envoyer un message.
        </p>
      </div>

      <!-- Section droite : formulaire -->
      <form class="w-full max-w-md space-y-4">
        <!-- Nom -->
        <div>
          <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="nom"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <!-- Prénom -->
        <div>
          <label for="prenom" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            id="prenom"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <!-- Adresse e-mail -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <!-- Sujet -->
        <div>
          <label for="sujet" class="block text-sm font-medium text-gray-700">Sujet</label>
          <input
            type="text"
            id="sujet"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <!-- Corps du message -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            required
            rows="4"
            class="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <!-- Bouton d'envoi -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </div>
  </section>
</template>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
