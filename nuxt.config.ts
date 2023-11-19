// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  colorMode: {
    dataValue: "retro", // activate data-theme in <html> tag
  },
})
