export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/color-mode', 'nuxt-icon']
})