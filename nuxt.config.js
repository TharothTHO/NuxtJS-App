export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtJS-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/vuetify',
  ],
  router: {
    middleware: ['auth']
  },
  googleFonts: {
    families: {
      Hubballi: [300,500,700],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/content', 
    /* '@nuxtjs-extra/ant-design-vue',
    [
      '@nuxtjs-extra/ant-design-vue',
      {
        style: 'css', // available options: 'css', 'less'
        useDayJs: false, // replace moment.js with day.js internally within 'ant-design-vue' for reducing package size
      },
    ], */
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyASArjn_76ZNbLHYEywmqY5e43cOidmxsc",
          authDomain: "my-blogs-post-e9e54.firebaseapp.com",
          projectId: "my-blogs-post-e9e54",
          storageBucket: "my-blogs-post-e9e54.appspot.com",
          messagingSenderId: "473350580098",
          appId: "1:473350580098:web:1c01da07c41b9c383ed19b"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          }
        }
      }
    ]
  ],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
     },
   },
  }
}
