<!-- <script lang="ts" setup>
import type { Products } from "~/types/products";

const props = defineProps({
  product: { type: Object, default: {} },
});

const oneProduct = ref(props.product);

const addCart = () => {
  oneProduct.value.isCart = !oneProduct.value.isCart;
  let localStorageData = localStorage.getItem("products");
  let productOfCart: Products[] = [];

  if (localStorageData) {
    productOfCart = JSON.parse(localStorageData);
  }

  if (oneProduct.value.isCart) {
    productOfCart.push(oneProduct.value);
    localStorage.setItem("products", JSON.stringify(productOfCart));
  } else {
    productOfCart = productOfCart.filter(
      (item) => item.id !== oneProduct.value.id
    );
    localStorage.setItem("products", JSON.stringify(productOfCart));
  }
};
</script>

<template>
  <section class="bg-white border-4 border-sky-600 shadow-xl rounded-xl">
    <div :class="`w-full h-[200px] p-5 bg-gray-300 rounded-xl`">
      <img :src="oneProduct.image" class="w-full h-full object-contain rounded-xl" />
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${oneProduct.id}`"><h3 class="text-lg font-bold text-slate-700 mb-4 text-limit limit-2">{{ oneProduct.name }}</h3></NuxtLink>
      <div class="flex justify-between items-center">
        <span class="text-sm font-normal text-slate-700">{{ oneProduct.category }}</span>
        <span class="text-sm text-sky-600 font-bold">Rp.{{ oneProduct.price }}</span>
      </div>
    </div>
  </section>
</template> -->

<!-- <script setup lang="ts">
import { darkMode } from '#tailwind-config';
import { ref } from 'vue';

interface IPercobaan {
    id: number
    nama: string
    alamat: string
    no_hp: string
}
// menampilkan data
import { usePercobaanStore} from '~/stores/percobaan';

const percobaanStore = usePercobaanStore();
const { getPercobaan, addPercobaan:satu, deletePercobaan:hapus, updatePercobaan:edit } = percobaanStore;
const { percobaan } = storeToRefs(percobaanStore);


// const todos = ref<ITodo[]>([])

const newPercobaan = ref<string>('')
  const newPercobaan1 = ref<string>('')
    const newPercobaan2 = ref<string>('')
    const editId = ref<number>(0)

getPercobaan()
setTimeout(()=>{
    console.log(percobaan)
},2000)

//menambahkan data
const addPercobaan = async() => {
    console.log(newPercobaan)
    if (newPercobaan.value.trim() !== '') {
        // todos.value.push({title: newTodo.value, status: false})
        await satu(newPercobaan.value, newPercobaan1.value, newPercobaan2.value)
        newPercobaan.value=""
        newPercobaan1.value=""
        newPercobaan2.value=""
    }
    await getPercobaan()
}
const deletePercobaan = async (id: number, nama: string, alamat: string, no_hp:string) =>{
    // todos.value.splice(index, 1)
    await hapus(id)
} 
//edit data
const updatePercobaan = async () =>{
    await edit(editId.value, newPercobaan.value, newPercobaan1.value, newPercobaan2.value)

    await getPercobaan()
    newPercobaan.value=""
    newPercobaan1.value=""
    newPercobaan2.value=""
    editId.value=0
}
//edit data 2
const clikEdit = (id: number, nama: string, alamat: string, no_hp:string) => {
  newPercobaan.value=nama
  newPercobaan1.value=alamat
  newPercobaan2.value=no_hp
  editId.value=id
}
const props = defineProps({
  product: { type: Object, default: {} },
});
</script>

<template>
  <section v-for="(percobaan, index) in percobaan" :key="index" class="bg-white w-{200px} border-4 border-sky-600 shadow-xl rounded-xl">
    <div :class="`w-full h-[200px] p-5 bg-gray-300 rounded-xl`">
      <img src="/assets/images/logowta.png" class="w-full h-full object-contain rounded-xl" />
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${percobaan.id}`"><h3 class="text-lg font-bold text-slate-700 mb-4 text-limit limit-2">{{ percobaan.nama }}</h3></NuxtLink>
      <div class="flex justify-between items-center">
        <span class="text-sm font-normal text-slate-700">{{ percobaan.alamat }}</span>
        <span class="text-sm text-sky-600 font-bold">Rp.{{ percobaan.no_hp }}</span>
      </div>
    </div>
  </section>
</template> -->

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
const addDestinasi = async() => {
    console.log(newNama)
    if (newNama.value.trim() !== '') {
        // todos.value.push({title: newTodo.value, status: false})
        await satu(newNama.value, newSeat.value, newHarga.value, newDeskripsi.value, newInfo.value)
        newNama.value=""
        newSeat.value= 0
        newHarga.value=""
        newDeskripsi.value=""
        newInfo.value=""
    }
    await getDestinasi()
}
const deletePercobaan = async (id: number, nama: string, alamat: string, no_hp:string) =>{
    // todos.value.splice(index, 1)
    await hapus(id)
} 
//edit data
const updateDestinasi = async () =>{
    await edit(editId.value, newNama.value, newSeat.value, newHarga.value, newDeskripsi.value, newInfo.value)

    await getDestinasi()
    newNama.value=""
    newSeat.value=0
    newHarga.value=""
    newDeskripsi.value=""
    newInfo.value=""
    editId.value=0
}
//edit data 2
const clikEdit = (id: number, nama: string, jumlah_seat: number, harga:string, deskripsi:string, info:string) => {
  newNama.value=nama
  newSeat.value=jumlah_seat
  newHarga.value=harga
  newDeskripsi.value=deskripsi
  newInfo.value=info
  editId.value=id
}
</script>

<template>
  <section v-for="(destinasi, index) in destinasi" :key="index" class="bg-white w-{200px} border-4 border-sky-600 shadow-xl rounded-xl">
    <div :class="`w-full h-[200px] p-5 bg-white shadow-lg rounded-xl`">
      <img src="/assets/images/logowta.png" class="w-full h-full object-contain rounded-xl" />
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${destinasi.id}`">
        <h3 class="text-2xl font-bold text-slate-700  text-limit limit-2 text-center w-[300px]">{{ destinasi.nama }}</h3>
        <h3 class="text-md text-slate-700  text-limit limit-2">{{ destinasi.jumlah_seat }} seat</h3>
        <h2 class="text-lg text-slate-700">Harga Mulai</h2>
      </NuxtLink>
      <div class="flex justify-center items-center">
        <span class="text-2xl text-slate-800 font-bold">Rp.{{ destinasi.harga }}</span>
      </div>
      <h2 class="text-md text-slate-700">Harga hanya termasuk BBM & Crew</h2>
      <NuxtLink :to="`/product/${destinasi.id}`">
        <h3 class="text-md text-sky-500  text-limit limit-2">Detail</h3>
      </NuxtLink>
    </div>
  </section>
</template>