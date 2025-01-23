import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  app: {
    head: {
      title: 'NuxtVerse - совеременный и быстрый блог на Nuxt.js',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      allowedHosts: ['8862ed107ce7.vps.myjino.ru'],
    },
  },
});