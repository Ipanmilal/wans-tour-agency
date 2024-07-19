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

<script setup lang="ts">
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
</template>