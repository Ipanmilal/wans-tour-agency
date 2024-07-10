<template>
    <section>
        <Header />

        <slot />

        <Footer />
    </section>
</template>

<script>
import Header from '~/components/header/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
/* Add any additional styles here */
</style>