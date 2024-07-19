<script setup lang="ts">
// const props = defineProps({
//     product: {
//         type:
//         Object,
//         default: {},
//     }
// })

const newPercobaan = ref<string>('')
  const newPercobaan1 = ref<string>('')
    const newPercobaan2 = ref<string>('')
    const editId = ref<number>(0)

const clikEdit = (id: number, nama: string, alamat: string, no_hp:string) => {
  newPercobaan.value=nama
  newPercobaan1.value=alamat
  newPercobaan2.value=no_hp
  editId.value=id
}
</script>

<template>
    <section class=" flex justify-center py-10 bg-black">
        <div class="container px-6">
            <NuxtLink to="/" class="bg-white border border-slate-300 w-max flex items-center gap-1 py-2 px-5 rounded-full mb-7 cursor-pointer">
                <i class="ri-arrow-left-s-line text-base font-medium"></i>
                <span class="text-base font-medium">Kembali</span>
            </NuxtLink>
            <div class="flex  items-center border-2 border-white">
                <div class="w-1/2 bg-gray-300 mr-5 rounded-3x1 flex justify-center items-center p-5 h-[500px]">
                   
                </div>
                <div class="w-1/2 pl-5 px-6">
                    adasda
                    <p class="text-xl font-light mb-3">{{ newPercobaan }}</p>
                    <h1 class="text-4xl font-bold text-red-600 mb-3">{{ newPercobaan1 }}</h1>
                    <h3 class="text-4xl font-light mb-3">{{ newPercobaan2 }}</h3>
                    <p class="mb-10 text-white">{{ newPercobaan }}</p>
                    <div class="flex flex-col gap-4">
                        <!-- <NuxtLink to="/cart" class="w-full flex items-center gap-2 bg-blue-600 text-white py-3 justify-center rounded-lg cursor-pointer hover:bg-blue-600/80 transition duration-300 relative">
                            <i class="ri-shopping-cart-2-line"></i>
                            <span>Add to Cart</span>
                        </NuxtLink> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>