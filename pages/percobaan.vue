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

// ujicoba enkripsi
</script>
<!-- <template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<div class="w-1/2 mx-auto flex flex-col py-6 gap-3">
    <div class="flex items-center gap-4">
        <h1 class="text-3xl font-semibold">Percobaan</h1>
        <NuxtLink to="/test">To do</NuxtLink>
    </div>

    <div class="flex gap-2">
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="Nama" v-model="newPercobaan" @keyup.enter="addPercobaan"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="Alamat" v-model="newPercobaan1" @keyup.enter="addPercobaan"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="No HP" v-model="newPercobaan2" @keyup.enter="addPercobaan"/>
        <button class="bg-blue-400 text-white p-2"  @click="addPercobaan">Tambah</button>
        <button class="bg-blue-400 text-white p-2"  @click="updatePercobaan">Edit</button>
    </div>
    <div class="flex gap-2">
      <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="Cari" v-model="newPercobaan" @keyup.enter="addPercobaan"/>
      <button class="bg-blue-400 text-white p-2"  @click="updatePercobaan">Cari</button>  
    </div>
    

    <div class="flex justify-between">
    <table class="table-fixed">
      <thead class="border-2">
        <tr>
          <th class="w-[50px] border-2 border-black">No</th>
          <th class="w-[150px] border-2 border-black">Nama</th>
          <th class="w-[150px] border-2 border-black">Alamat</th>
          <th class="w-[150px] border-2 border-black">No telepon</th>
          <th class="w-[150px] border-2 border-black">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(percobaan, index) in percobaan" :key="index">
          <td class="border-2 border-black px-2 text-sm">{{ index+1 }}</td>
          <td class="border-2 border-black px-2 text-sm">{{ percobaan.nama }}</td>
          <td class="border-2 border-black px-2 text-sm">{{ percobaan.alamat }}</td>
          <td class="border-2 border-black px-2 text-sm">{{ percobaan.no_hp }}</td>
          <th class="border-2 border-black px-2 gap-2">
            <div class="flex justify-center gap-2">
            <button class="w-[50px] bg-blue-600 rounded-sm text-white text-sm mr-2" @click="clikEdit(percobaan.id, percobaan.nama, percobaan.alamat, percobaan.no_hp)">Edit</button> 
            <button class="w-[50px] bg-red-600 rounded-sm text-white text-sm" @click="updatePercobaan" >Hapus</button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex justify-end gap-1">
    <h1 class="px-2 font-bold"><</h1>
    <h1 class="px-2 border-2 border-gray-500 rounded-md">1</h1>
    <h1 class="px-2 border-2 border-gray-500 rounded-md">2</h1>
    <h1 class="px-2 border-2 border-gray-500 rounded-md">3</h1>
    <h1 class="px-2 font-bold">></h1>
  </div>
</div>  -->

<!-- <div class="p-16">
     <div x-data="{open : false}">
        <button @click="" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2,5">My Modal</button>
          <div x-show="open" class="fixed top-0 w-full h-screen bg-black/50 flex justify-center items-center">
            <div class="p-6 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md">
               <h2 class="mb-2 text-2xl font-bold text-gray">JUDUL MODAL</h2>
                  <p class="mb-4 font-normal text-gray-700">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique repellendus perferendis aspernatur! Impedit, dolorum harum error quis possimus, inventore necessitatibus dolore aperiam totam itaque delectus officia quisquam sit quos.
                   </p>
                   <button @click="" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg tetxt-sm px-5 py-2,5">Tambah</button>
                   <button @click="" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg tetxt-sm px-5 py-2,5">Batal</button>
            </div>
          </div>  
      </div>
      <p class="mb-4 font-normal text-gray-700">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique repellendus perferendis aspernatur! Impedit, dolorum harum error quis possimus, inventore necessitatibus dolore aperiam totam itaque delectus officia quisquam sit quos.
      </p>
      <p class="mb-4 font-normal text-gray-700">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique repellendus perferendis aspernatur! Impedit, dolorum harum error quis possimus, inventore necessitatibus dolore aperiam totam itaque delectus officia quisquam sit quos.
      </p>
      <p class="mb-4 font-normal text-gray-700">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique repellendus perferendis aspernatur! Impedit, dolorum harum error quis possimus, inventore necessitatibus dolore aperiam totam itaque delectus officia quisquam sit quos.
      </p>
</div> -->
