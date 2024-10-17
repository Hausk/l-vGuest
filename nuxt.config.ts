export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-swiper'
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: [400, 500, 600, 700]
      }
    ]
  },
  tailwindcss: {
    editorSupport: true
  }
})
