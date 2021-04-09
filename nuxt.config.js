import axios from 'axios'

export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat' }
    ]
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue',
      'axios'
    ]
  },
  router: {
    base: '/work/vue-blogFish/'
  },

  generate: {
    routes() {
      return axios.get('https://blog-nuxt-b1552-default-rtdb.firebaseio.com/posts.json').then(res => {  
        const postsArray = []
        for (let key in res.data) {
            postsArray.push( { ...res.data[key], id: key } )
        }
        
        return postsArray.map(post => {
          return '/blog/' + post.id
        })
      })
     }
  }
}
