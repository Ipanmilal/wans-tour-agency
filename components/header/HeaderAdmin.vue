<template>
    <nav class="bg-white shadow-md relative ">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-end h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button @click="toggleMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            
          </div>
          <div class="hidden sm:block sm:ml-6">
              
            </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    }
  }


  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>