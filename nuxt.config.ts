// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css', '~/assets/iconfont/iconfont.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  content: {
    highlight: {
      theme: {
        default: 'material-palenight',
        dark: 'github-dark'
      }
    }
  },
  runtimeConfig: {
    public: {
      EXAMPLE_NUXT_URL: process.env.EXAMPLE_NUXT_URL
    }
  }
})
