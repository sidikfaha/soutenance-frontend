const path = require("path")

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/index.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:8000/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      config.resolve.alias['img'] = path.join(__dirname, 'assets/images')
      config.resolve.alias['scss'] = path.join(__dirname, 'assets/scss')
      config.resolve.alias['comp'] = path.join(__dirname, 'components')
    }
  }
}
