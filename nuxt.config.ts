// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "vue3-carousel-nuxt",
    "@nuxtjs/seo",
  ],
});
