<script lang="ts" setup>
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
  <section class="bg-white border-4 border-sky-600 shadow-xl rounded-xl hover:animate-bounce">
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
</template>