// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseurl: process.env.SUPABASE_URL,
    secretkey: process.env.SUPABASE_SECRET_KEYS
  },
  modules: ["@nuxt/ui", "@pinia/nuxt"]
  
})