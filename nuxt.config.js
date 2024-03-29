export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    NUXT_ENV_GOOGLE_API_KEY: process.env.NUXT_ENV_GOOGLE_API_KEY,
  },
  privateRuntimeConfig: {
    NUXT_ENV_GOOGLE_API_KEY: process.env.NUXT_ENV_GOOGLE_API_KEY,
  },

  server: {
    port: 8000,
    // host: '0.0.0.0', // default: localhost,
    timing: false,
  },

  env: {
    NUXT_ENV_HOME_ADDRESS: process.env.NUXT_ENV_HOME_ADDRESS,
    NUXT_ENV_HOME_PHONE: process.env.NUXT_ENV_HOME_PHONE,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ferienhaus in Polen',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-google-maps.js', mode: 'client' },
    { src: '~/plugins/vue-image-lightbox.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
