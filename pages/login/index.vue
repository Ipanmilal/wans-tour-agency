<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center px-8"
  >
    <div
      class="max-w-screen-lg sm:m-4 bg-white shadow rounded-lg md:rounded-2xl flex justify-center flex-1"
    >
      <!-- {/* Left Section */} -->
      <div class="lg:w-1/2 xl:w-5/12 p-10 md:p-14">
        <div class="flex gap-x-2 justify-center">
          <!-- {/* Logo */} -->
          <!-- <img
            src="/assets/images/logowta.jpeg"
            width="38"
            height="38"
            alt="logo"
          /> -->
          <span class="text-3xl font-medium font-noto text-slate-800">
            Wans Tour Agency
          </span>
        </div>
        <div class="mt-6 flex flex-col items-center">
          <div v-if="isInvalid">
            <p class="text-red-500 text-sm">Email or Password Invalid</p>
          </div>
          <div class="w-full flex-1 mt-8">
            <form @submit.prevent="login" class="mx-auto max-w-xs">
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                required
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                required
                class="w-full mt-4 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <button
                type="submit"
                class="mt-10 tracking-wide font-semibold bg-blue-500 text-white-500 w-full py-4 rounded-lg hover:bg-h_primary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span class="ml-2 text-white font-bold"> Login </span>
              </button>
            </form>
          </div>
        </div>
        <div class="mt-20">
        <p class="mt-6">belum punya akun?<span class="ms-1 text-blue-500">klik disini</span></p>
        </div>
      </div>
      <!-- {/* Right Section */} -->
      <div class="flex-1 border-l text-center hidden lg:flex rounded-r-lg md:rounded-r-2xl">
        <img src="/assets/images/logowta.jpeg" class=" p-6"/> 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const isInvalid = ref(false);

const login = async () => {
  try {
    const user = await userStore.login(email.value, password.value);
    if (user.role=="admin") {
      router.push("/DashboardAdmin");
    }
    else {
      router.push("/")
    }
  } catch (error) {
    isInvalid.value = true;
    email.value = "";
    password.value = "";
  }
};
definePageMeta({
  layout: "auth",
})
</script>

<!-- Middleware/middleware.ts -->

<!-- nuxt.config.ts -->

<!-- plugins: [
    // ...
    { src: '~/plugins/middleware.ts', mode: 'client' }
  ], -->
