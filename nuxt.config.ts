// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ["@/assets/global.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/seo",
    "shadcn-nuxt",
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  tailwindcss: {
    cssPath: "@/assets/global.css",
  },
  colorMode: {
    classSuffix: "",
  },
  i18n: {
    locales: [
      { code: "cs", name: "Czech" },
      { code: "de", name: "German" },
      { code: "en", name: "English" },
      { code: "en_US", name: "English (US)" },
      { code: "es", name: "Spanish" },
      { code: "fr", name: "French" },
      { code: "nl", name: "Dutch" },
      { code: "pt_BR", name: "Portuguese (Brazil)" },
      { code: "ru", name: "Russian" },
      { code: "sv", name: "Swedish" },
      { code: "zh_Hans", name: "Chinese (Simplified)" },
      { code: "zh_Hant", name: "Chinese (Traditional)" },
    ],
  },
  site: {
    url: 'https://irisshaders.dev',
    name: 'Iris',
    description: 'The Iris Project',
  },
  ogImage: {
    enabled: true
  },
  sitemap: {
    enabled: true
  },
  robots: {
    enabled: true
  },
  seoExperiments: {
    enabled: true
  },
  schemaOrg: {
    enabled: true
  },
  linkChecker: {
    enabled: true
  }
});
