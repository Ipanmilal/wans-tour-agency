<!-- <script lang="ts" setup>
import { products } from '~/composables/constants/products';

const selectedCategory = ref(""); 
const allProducts = computed(() => {
	if (selectedCategory.value) {
		return products.filter((item) => item.category === selectedCategory.value);
	}
	return products;
});
</script>

<template>
    <div class="text-center bg-white">
                <h1 class="text-slate-700 font-bold text-3xl">Harga Sewa Bus Pariwisata Bandung</h1>
            </div>

	<section class="bg-white flex items-center justify-center px-6">   
		<div class="container">
			<div class="py-10">
				<div class="mb-6 flex justify-end gap-6">
					<DropDown @selected-category="selectedCategory = $event" />
				</div>
				<div class="grid place-items-center text-center gap-6 mx-auto sm:flex sm:flex-wrap justify-center font-inter">
					<template v-for="(item, index) in allProducts" :key="index">
						<CardsCardProduct :product="item" class="mb-10 w-64"/>
					</template>
				</div>
			</div>
		</div>
	</section>
</template> -->


<template>
	<div class="text-center bg-white">
        <h1 class="text-slate-700 font-bold text-3xl">Daftar Pelayanan Wisata</h1>
    </div>
	<section class="bg-white flex items-center justify-center px-6">   
		<div class="container">
			<div class="py-10">
				<div class="grid place-items-center text-center gap-6 mx-auto sm:flex sm:flex-wrap justify-center font-inter">
						<CardsCardProduct class="mb-10 w-64"/>	
				</div>
			</div>
		</div>
	</section>
</template>
