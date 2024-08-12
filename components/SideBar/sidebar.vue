<template>
  <div class="w-64 h-screen bg-gray-800 text-white">
    <div class="p-5">
      <h1 class="text-2xl font-bold">WTA Admin</h1>
    </div>
    <nav class="mt-10">
      <ul>
        <li>
          <nuxt-link to="/" class="block py-2 px-4 hover:bg-gray-700">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" class="block py-2 px-4 hover:bg-gray-700">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="block py-2 px-4 hover:bg-gray-700">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// Script setup is empty for this simple sidebar example
</script>

<style scoped>
/* Optional: Additional styling */
</style>
