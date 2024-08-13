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
        newSeat.value=0
        newHarga.value=""
        newDeskripsi.value=""
        newInfo.value=""
    }
    await getDestinasi()
}
const deletePercobaan = async (id: number) =>{
    // todos.value.splice(index, 1)
    await useSupabaseClient().from("tb_destinasi").delete().eq("id", id)
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
const modalTambah = ref(false)
const modalEdit = ref(false)

definePageMeta({
  layout: "sidebar",
})
</script>
<template>
<div class="container mx-auto p-[100px]">
    <!-- <div class="grid gap-2">
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="Nama" v-model="newNama" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="seat" v-model="newSeat" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="harga" v-model="newHarga" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="deskripsi" v-model="newDeskripsi" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="info" v-model="newInfo" @keyup.enter="addDestinasi"/>
        <button class="bg-blue-400 text-white p-2"  @click="addDestinasi">Tambah</button>
        <button class="bg-blue-400 text-white p-2"  @click="updateDestinasi">Edit</button>
    </div>
     -->
    
    <UButton label="Tambah" @click="modalTambah = true" />

    <div class="flex justify-between">
    <table class="table-fixed">
      <thead class="border-2">
        <tr>
          <th class="w-[50px] border-2 border-slate-700">No</th>
          <th class="w-[350px] border-2 border-slate-700">Nama</th>
          <th class="w-[350px] border-2 border-slate-700">jumlah Seat</th>
          <th class="w-[350px] border-2 border-slate-700">Harga</th>
          <!-- <th class="w-[350px] border-2 border-slate-700">Deskripsi</th> -->
          <!-- <th class="w-[350px] border-2 border-slate-700">Info</th> -->
          <th class="w-[350px] border-2 border-slate-700">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(destinasi, index) in destinasi" :key="index">
          <td class="border-2 border-slate-700 px-2 text-sm">{{ index+1 }}</td>
          <td class="border-2 border-slate-700 px-2 text-sm">{{ destinasi.nama }}</td>
          <td class="border-2 border-slate-700 px-2 text-sm">{{ destinasi.jumlah_seat }}</td>
          <td class="border-2 border-slate-700 px-2 text-sm">{{ destinasi.harga  }}</td>
          <!-- <td class="border-2 border-slate-700 px-2 text-sm h-[200px]">{{ destinasi.deskripsi  }}</td> -->
          <!-- <td class="border-2 border-slate-700 px-2 text-sm">{{ destinasi.info  }}</td> -->
          <th class="border-2 border-slate-700 px-2 gap-2">
            <div class="flex justify-center gap-2">
            <button class="w-[50px] bg-blue-600 rounded-sm text-white text-sm mr-2" @click="clikEdit(destinasi.id, destinasi.nama, destinasi.jumlah_seat, destinasi.harga, destinasi.deskripsi, destinasi.info)">Edit</button> 
            <button class="w-[50px] bg-red-600 rounded-sm text-white text-sm" @click="deletePercobaan(destinasi.id)" >Hapus</button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex justify-end gap-1">
    <h1 class="px-2 font-bold"></h1>
    <h1 class="px-2 border-2 border-gray-500 rounded-md">1</h1>
    <h1 class="px-2 border-2 border-gray-500 rounded-md">2</h1>
    <h1 class="px-2 border-2 border-gray-500 rounded-md">3</h1>
    <h1 class="px-2 font-bold">></h1>
  </div>
</div>

<!-- modal tambah -->
<UModal v-model="modalTambah" :overlay="false">
    <div class="p-4">
        <p class="text-center py-4 text-2xl">Tambah Data</p>
        <div class="flex gap-4 justify-center">
            <div>
                <div class="flex justify-center items-center bg-blue-400 w-[150px] h-[200px] rounded-md">
                    <p>Dummy Photo</p>
                </div>
                <button class="bg-slate-400 hover:bg-slate-200 text-white p-2 w-[150px] mt-2" >Upload Gambar</button>
            </div>
            <div class="grid gap-2">
                <input type="text" class="w-[500px] border-2 border-slate-500 p-1" placeholder="Nama" v-model="newNama" @keyup.enter="addDestinasi"/>
                <input type="text" class="w-full border-2 border-slate-500 p-1" placeholder="seat" v-model="newSeat" @keyup.enter="addDestinasi"/>
                <input type="text" class="w-full border-2 border-slate-500 p-1" placeholder="harga" v-model="newHarga" @keyup.enter="addDestinasi"/>
                <input type="text" class="w-full border-2 border-slate-500 p-1" placeholder="deskripsi" v-model="newDeskripsi" @keyup.enter="addDestinasi"/>
                <input type="text" class="w-full border-2 border-slate-500 p-1" placeholder="info" v-model="newInfo" @keyup.enter="addDestinasi"/>
            </div>
        </div>
        <div class="mt-10 flex justify-center gap-2 ">
        <button class="bg-blue-400 text-white p-2 w-[150px]"  @click="addDestinasi">Tambah</button>
        <button class="bg-blue-400 text-white p-2 w-[150px]"  @click="updateDestinasi">Edit</button>
        </div>
    </div>
</UModal>

<!-- modal edit -->
<UModal v-model="modalEdit" :overlay="false">
    <div class="p-4">
        <div class="grid gap-2">
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="Nama" v-model="newNama" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="seat" v-model="newSeat" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="harga" v-model="newHarga" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="deskripsi" v-model="newDeskripsi" @keyup.enter="addDestinasi"/>
        <input type="text" class="w-full border-2 border-blue-400 p-1" placeholder="info" v-model="newInfo" @keyup.enter="addDestinasi"/>
        <button class="bg-blue-400 text-white p-2"  @click="updateDestinasi">Edit</button>
        </div>
    </div>
</UModal>
</template>
