<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 mx-auto">
        <Placeholder class="h-48" />
            <h1>Berhasil Menambahkan Data</h1>   
            <div class="flex justify-center gap-4 mt-8">
            <button class="w-[60px] h-[30px] bg-blue-600">Yes</button> <button class="w-[60px] h-[30px] bg-red-500">No</button>
            </div>
      </div>
    </UModal>
  </div>
</template>

