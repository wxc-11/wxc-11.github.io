export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true
  },
  pages: false,
  modules: [],
  css: [
    '@/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  compatibilityDate: '2026-04-07',
  app: {
    baseURL: '/'
  }
})