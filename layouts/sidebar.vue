<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
    <HeaderAdmin />
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/SideBar/sidebar.vue'
import HeaderAdmin from '~/components/header/HeaderAdmin.vue'
</script>

<style scoped>
/* Optional: Additional styling */
</style>
