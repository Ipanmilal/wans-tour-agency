<template>
  <div class="bg-color-black text-white ">
    <!-- slider -->
    <div class="flex items-center text-red-600 justify-center mb-8 pb-8 text-2xl font-bold"><span class="text-red">Tentang Kami</span>

      </div>
    <div
      id="slider3-container"
      class="flex items-center gap-6 mb-8 pb-8 overflow-x-scroll w-[80vw]"
    >
      <!-- slide item -->
      <Slider3Item v-for="number in 10" :key="'slider3-' + number" />
    </div>

    <!-- nav btns -->
    <div class="flex gap-x-8 mb-16">
      <button @click="prev">prev</button>
      <button @click="next">lanjut</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideThree',
  methods: {
    prev() {
      document.querySelector('#slider3-container').scrollLeft -= 232
    },
    next() {
      document.querySelector('#slider3-container').scrollLeft += 232
    },
  },
}
</script>

<style scoped>
/* make scrollbar transparent */
/* firefox */
#slider3-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* chrome */
#slider3-container::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
