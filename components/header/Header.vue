<!-- <template>
    <header class="flex items-center bg-black w-full border-state-200 py-2">
        <div class="container">
            <div class="flex justify-between items-center">
                <div class="gap-6 px-4">
                <button @click="toggleMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
                    <NuxtLink to="/" class="flex items-center text-white text-2xl font-semibold">
                        <img src="/assets/images/Artboard 1.png" class="h-12 w-12 gap-6 animate-pulse" alt="">
                        <span class="sm:text-xl sm:text-blue-400">PORTOFOLIO</span>
                    </NuxtLink>
                </div>
                <nav class="hidden sm:block sm:ml-6">
                    <NuxtLink to="/" class="text-base text-white">Home</NuxtLink>
                    <NuxtLink to="/product" class="text-base text-white">Product</NuxtLink>
                    <NuxtLink to="/about" class="text-base text-white">About</NuxtLink>
                    <NuxtLink to="/cart" class="text-base text-white">cart</NuxtLink>
                </nav>
                <div class="sm:hidden" :class="{ 'block': isOpen, 'hidden': !isOpen }">
                <div >
                    <NuxtLink to="/" class="text-base text-white block">Home</NuxtLink>
                    <NuxtLink to="/product" class="text-base text-white block">Product</NuxtLink>
                    <NuxtLink to="/about" class="text-base text-white ">About</NuxtLink>
                    <NuxtLink to="/cart" class="text-base text-white">cart</NuxtLink>
                </div>
                </div>
            </div>
        </div>
    </header>
</template> -->

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
            <div class="flex items-center gap-4">
                <img src="/assets/images/logowta.jpeg" class="h-12 w-12 gap-6 animate-pulse" alt="">
                <span class="text-2xl text-blue-400 lg:text-xl lg:text-slate-800 font-bold">Wans Tour Agency</span>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
              <div class="item center space-x-4">
                <NuxtLink to="/" class="text-base text-slate-800">Beranda</NuxtLink>
                <NuxtLink to="/about" class="text-base text-slate-800">Tentang</NuxtLink>
                <NuxtLink to="/kategori" class="text-base text-slate-800">Kategori</NuxtLink>
                <NuxtLink to="/destinasi" class="text-base text-slate-800">Destinasi</NuxtLink>
                <NuxtLink to="/informasi" class="text-base text-slate-800">Informasi</NuxtLink>
                <NuxtLink to="/percobaan" class="bg-sky-500 text-base hover:bg-sky-300 text-white p-2 font-semibold rounded-md">Booking</NuxtLink>
            </div>
            </div>
        </div>
      </div>
      <div class="sm:hidden" :class="{ 'block': isOpen, 'hidden': !isOpen }">
        <div class="px-2 pt-2 pb-3 space-y-1 item center ">
                <NuxtLink to="/" class="text-base text-slate-800 hover:bg-gray-700 hover:text-white block px-3 py-2">Beranda</NuxtLink>
                <NuxtLink to="/about" class="text-base text-slate-800 hover:bg-gray-700 hover:text-white block px-3 py-2 ">About</NuxtLink>
                <NuxtLink to="/kategori" class="text-base text-slate-800 hover:bg-gray-700 hover:text-white block px-3 py-2">Kategori</NuxtLink>
                <NuxtLink to="/destinasi" class="text-base text-slate-800 hover:bg-gray-700 hover:text-white block px-3 py-2">Destinasi</NuxtLink>
                <NuxtLink to="/informasi" class="text-base text-slate-800 hover:bg-gray-700 hover:text-white block px-3 py-2">Informasi</NuxtLink>
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
  