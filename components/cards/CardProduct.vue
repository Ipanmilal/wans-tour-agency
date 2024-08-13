<script setup lang="ts">
import { darkMode } from '#tailwind-config';
import { ref } from 'vue';

interface IDestinasi {
    id: number
    nama: string
    jumlah_seat: number
    harga: string
    deskripsi: string
    info: string
}
// menampilkan data
import { useDestinasiStore} from '~/stores/destinasi';

const destinasiStore = useDestinasiStore();
const { getDestinasi, addDestinasi:satu, deleteDestinasi:hapus, updateDestinasi:edit } = destinasiStore;
const { destinasi } = storeToRefs(destinasiStore);


// const todos = ref<ITodo[]>([])

const newNama = ref<string>('')
const newSeat = ref<number>(0)
const newHarga = ref<string>('')
const newDeskripsi = ref<string>('')
const newInfo = ref<string>('')
const editId = ref<number>(0)

getDestinasi()
setTimeout(()=>{
    console.log(destinasi)
},2000)

//menambahkan data
 

</script>

<template>
  <section v-for="(destinasi, index) in destinasi" :key="index" class="bg-white w-{100px} md:w-{200px} border-4 border-sky-600 shadow-xl rounded-xl">
    <div :class="`md:w-full h-[150px] md:h-[200px] p-5 bg-white shadow-lg rounded-xl`">
      <img src="/assets/images/logowta.png" class="w-full h-full object-contain rounded-xl" />
    </div>
    <div class="px-5 pb-5 pt-9 relative grid place-content-center">
      <NuxtLink :to="`/product/${destinasi.id}`" class="grid place-content-center">
        <h3 class="text-xl md:text-2xl font-bold text-slate-700 text-center w-[200px] md:w-[300px]">{{ destinasi.nama }}</h3>
        <h3 class="text-sm md:text-md text-slate-700  text-limit limit-2">{{ destinasi.jumlah_seat }} seat</h3>
        <h2 class="text-md md:text-lg text-slate-700">Harga Mulai</h2>
      </NuxtLink>
      <div class="flex justify-center items-center">
        <span class="text-xl md:text-2xl text-slate-800 font-bold">Rp.{{ destinasi.harga }}</span>
      </div>
      <NuxtLink :to="`/product/${destinasi.id}`">
        <h2 class="text-sm md:text-md text-slate-700">Harga hanya termasuk BBM & Crew</h2>
        <h3 class="text-md text-sky-500  text-limit limit-2">Detail</h3>
      </NuxtLink>
    </div>
  </section>
</template>