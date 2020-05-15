
const isDev = process.env.NODE_ENV !== 'production'

export default {
  generate: {
   routes: [
     '/category/chekovaya-lenta-80',
     '/category/chekovaya-lenta-57',
     '/category/chekovaya-lenta-44',
     '/category/chekovaya-lenta',
     '/category/termoetiketki',
     '/category/termoetiketki-top',
     '/category/termoetiketki-eco',
     '/category/product/57-12-15',
     '/category/product/57-12-16',
     '/category/product/57-12-17',
     '/category/product/57-12-18',
     '/category/product/57-12-19',
     '/category/product/57-12-20',
     '/category/product/57-12-22-5',
     '/category/product/57-12-24',
     '/category/product/57-12-25',
     '/category/product/57-12-30',
     '/category/product/57-12-32',
     '/category/product/57-12-40',
     '/category/product/57-12-80',
     '/category/product/80-12-21',
     '/category/product/80-12-46',
     '/category/product/80-12-50',
     '/category/product/80-12-55',
     '/category/product/80-12-60',
     '/category/product/80-12-70',
     '/category/product/80-12-74',
     '/category/product/80-12-80',
     '/category/product/44-12-18',
     '/category/product/44-12-24',
     '/category/product/44-12-27',
     '/category/product/44-12-38',
     '/category/product/80-12-80d',
     '/category/product/80-18-120d',
     '/category/product/80-25-120d',
     '/category/product/80-18-150d',
     '/category/product/80-25-150d',
     '/category/product/80-18-180d',
     '/category/product/80-25-180d',
     '/category/product/80-18-200d',
     '/category/product/80-25-200d',
     '/category/product/30-20-1800',
     '/category/product/30-20-2000',
     '/category/product/43-25-1000',
     '/category/product/47-25-1000',
     '/category/product/47-25-2000',
     '/category/product/58-30-700',
     '/category/product/58-30-900',
     '/category/product/58-30-5000',
     '/category/product/58-40-550',
     '/category/product/58-40-580',
     '/category/product/58-40-620',
     '/category/product/58-40-700',
     '/category/product/58-40-3000',
     '/category/product/58-60-400',
     '/category/product/58-60-450',
     '/category/product/58-60-500',
     '/category/product/58-60-40-3000',
     '/category/product/58-60-76-3000',
     '/category/product/top-30-20-2000',
     '/category/product/top-58-30-900',
     '/category/product/top-58-40-550',
     '/category/product/top-58-60-500',
     '/category/product/75-120-300',
     '/category/product/50-30-500',
     '/category/product/50-40-500',
     '/category/product/100-150-300',
     '/category/product/50-100-500',
   ]
 },
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),

  head: {
      htmlAttrs: {
          lang: 'ru',
      },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js"},

      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"},

      { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" },

      { src: "//code-ya.jivosite.com/widget/qCk4SjkMHv"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  rootDir: __dirname,
  serverMiddleware: [
  ],
  router: {
    prefetchLinks: true
  },

  loading: { color: '#727fdb' },

  css: [

  ],

  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/vee-validate' }
  ],

  buildModules: [
      ['@nuxtjs/google-analytics', {
          id: 'UA-167437375-1'
      }]
  ],

  modules: [
      'nuxt-material-design-icons-iconfont',
      [
          '@nuxtjs/yandex-metrika',
          {
              id: '63353137',
              webvisor: true
          }
      ],
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/redirect-module'
    ],
    redirect: [

    ],
    robots: {
        UserAgent: '*',
        Disallow: ['/success', '/cart', '/payment'],
        Sitemap: 'https://termolent.ru/sitemap.xml'
    },
   sitemap: {
       hostname: 'https://termolent.ru',
       exclude: [
           '/success',
           '/cart',
           '/payment'
       ],
       defaults: {
           changefreq: 'daily',
           priority: 1,
           lastmod: new Date()
       }
   },
  render: {
    resourceHints: false,
    etag: false,
    static: {
      etag: false
    }
  },

  build: {
      transpile: [
          'vuex-persist',
          'vee-validate/dist/rules'
      ],
    splitChunks: {
     layouts: true,
     pages: true,
     commons: true
   },

    extend (config, ctx) {
    }
  }
}
