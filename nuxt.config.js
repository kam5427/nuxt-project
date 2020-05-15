
const isDev = process.env.NODE_ENV !== 'production'

export default {
  generate: {
   routes: [
       '/category/chekovaya-lenta-80',
       '/category/chekovaya-lenta-57',
       '/category/chekovaya-lenta-44',
       '/category/chekovaya-lenta-bankomatov',
       '/category/termoetiketki-standart',
       '/category/termoetiketki-top',
       '/category/termoetiketki-eco',
       '/category/termotransfernye-etiketki-plg',
       '/category/bumaga-formatnya',
       '/category/strejch-plenka',
       '/category/klejkaya-lenta-skotch',
       '/category/etiket-pistolety',
       '/category/etiket-lenta',
       '/category/ribbony-wax-vosk',
       '/category/ribbony-wax-vosk-premium',
       '/category/ribbony-wax-rezin',
       '/category/ribbony-smolyanaya',
       '/category/ribbony-tsvetnye',
       '/category/product/chekovaya-lenta-57-12-15',
       '/category/product/chekovaya-lenta-57-12-16',
       '/category/product/chekovaya-lenta-57-12-17',
       '/category/product/chekovaya-lenta-57-12-18',
       '/category/product/chekovaya-lenta-57-12-19',
       '/category/product/chekovaya-lenta-57-12-20',
       '/category/product/chekovaya-lenta-57-12-22-5',
       '/category/product/chekovaya-lenta-57-12-24',
       '/category/product/chekovaya-lenta-57-12-25',
       '/category/product/chekovaya-lenta-57-12-30',
       '/category/product/chekovaya-lenta-57-12-32',
       '/category/product/chekovaya-lenta-57-12-40',
       '/category/product/chekovaya-lenta-57-12-80',
       '/category/product/chekovaya-lenta-80-12-21',
       '/category/product/chekovaya-lenta-80-12-40',
       '/category/product/chekovaya-lenta-80-12-50',
       '/category/product/chekovaya-lenta-80-18-50',
       '/category/product/chekovaya-lenta-80-12-55',
       '/category/product/chekovaya-lenta-80-12-60',
       '/category/product/chekovaya-lenta-80-12-70',
       '/category/product/chekovaya-lenta-80-18-70',
       '/category/product/chekovaya-lenta-80-12-74',
       '/category/product/chekovaya-lenta-80-12-80',
       '/category/product/chekovaya-lenta-44-12-18',
       '/category/product/chekovaya-lenta-44-12-22-5',
       '/category/product/chekovaya-lenta-44-12-24',
       '/category/product/chekovaya-lenta-44-12-27',
       '/category/product/chekovaya-lenta-44-12-38',
       '/category/product/lenta-dlya-bankomatov-80-12-80d',
       '/category/product/lenta-dlya-bankomatov-80-18-80d',
       '/category/product/lenta-dlya-bankomatov-80-18-120d',
       '/category/product/lenta-dlya-bankomatov-80-25-120d',
       '/category/product/lenta-dlya-bankomatov-80-25-130d',
       '/category/product/lenta-dlya-bankomatov-80-25-180d-vnutr',
       '/category/product/lenta-dlya-bankomatov-80-18-150d',
       '/category/product/lenta-dlya-bankomatov-80-25-150d',
       '/category/product/lenta-dlya-bankomatov-80-18-150d-vnutr',
       '/category/product/lenta-dlya-bankomatov-80-25-150d-vnutr',
       '/category/product/lenta-dlya-bankomatov-80-18-180d',
       '/category/product/lenta-dlya-bankomatov-80-18-180d-vnutr',
       '/category/product/lenta-dlya-bankomatov-80-25-180d',
       '/category/product/lenta-dlya-bankomatov-80-18-200d',
       '/category/product/lenta-dlya-bankomatov-80-18-210d-vnutr',
       '/category/product/lenta-dlya-bankomatov-80-25-200d',
       '/category/product/lenta-dlya-bankomatov-80-25-200d-vnutr',
       '/category/product/termoetiketki-eco-30-20-1800',
       '/category/product/termoetiketki-eco-30-20-2000',
       '/category/product/termoetiketki-eco-43-25-1000',
       '/category/product/termoetiketki-eco-47-25-1000',
       '/category/product/termoetiketki-eco-47-25-2000',
       '/category/product/termoetiketki-eco-58-30-700',
       '/category/product/termoetiketki-eco-58-30-720',
       '/category/product/termoetiketki-eco-58-30-900',
       '/category/product/termoetiketki-eco-58-30-5000',
       '/category/product/termoetiketki-eco-58-40-550',
       '/category/product/termoetiketki-eco-58-40-580',
       '/category/product/termoetiketki-eco-58-40-620',
       '/category/product/termoetiketki-eco-58-40-700',
       '/category/product/termoetiketki-eco-58-40-3000',
       '/category/product/termoetiketki-eco-58-60-400',
       '/category/product/termoetiketki-eco-58-60-450',
       '/category/product/termoetiketki-eco-58-60-500',
       '/category/product/termoetiketki-eco-58-60-40-3000',
       '/category/product/termoetiketki-eco-58-60-76-3000',
       '/category/product/termoetiketki-top-30-20-2000',
       '/category/product/termoetiketki-top-58-30-900',
       '/category/product/termoetiketki-top-58-40-550',
       '/category/product/termoetiketki-top-58-60-500',
       '/category/product/termoetiketki-eco-75-120-300',
       '/category/product/termoetiketki-eco-16-80-500',
       '/category/product/termoetiketki-eco-17-100-500',
       '/category/product/termoetiketki-eco-20-10-1000',
       '/category/product/termoetiketki-eco-20-80-500',
       '/category/product/termoetiketki-eco-22-10-1000',
       '/category/product/termoetiketki-eco-24-15-1000',
       '/category/product/termoetiketki-eco-25-16-1000',
       '/category/product/termoetiketki-eco-25-50-500',
       '/category/product/termoetiketki-eco-25-56-500',
       '/category/product/termoetiketki-eco-30-15-1000',
       '/category/product/termoetiketki-eco-31-61-500',
       '/category/product/termoetiketki-eco-36-30-500',
       '/category/product/termoetiketki-eco-37-70-500',
       '/category/product/termoetiketki-eco-40-40-500',
       '/category/product/termoetiketki-eco-45-65-500',
       '/category/product/termoetiketki-eco-45-70-500',
       '/category/product/termoetiketki-eco-45-80-500',
       '/category/product/termoetiketki-eco-45-125-500',
       '/category/product/termoetiketki-eco-50-20-500',
       '/category/product/termoetiketki-eco-50-30-500',
       '/category/product/termoetiketki-eco-50-40-500',
       '/category/product/termoetiketki-eco-50-70-500',
       '/category/product/termoetiketki-eco-100-150-300',
       '/category/product/termoetiketki-eco-50-100-500',
       '/category/product/termoetiketki-eco-50-150-500',
       '/category/product/termotransfernye-etiketki-plg-30-20-2000',
       '/category/product/termotransfernye-etiketki-plg-43-25-1000',
       '/category/product/termotransfernye-etiketki-plg-58-30-700',
       '/category/product/termotransfernye-etiketki-plg-58-30-900',
       '/category/product/termotransfernye-etiketki-plg-58-40-550',
       '/category/product/termotransfernye-etiketki-plg-58-40-700',
       '/category/product/termotransfernye-etiketki-plg-58-40-2500',
       '/category/product/termotransfernye-etiketki-plg-58-60-400',
       '/category/product/termotransfernye-etiketki-plg-58-60-500',
       '/category/product/A4-500-votocopy',
       '/category/product/A4-500-globulus',
       '/category/product/A4-500-ipe65',
       '/category/product/A4-500-svetocopy',
       '/category/product/A4-500-svetocopy-premium',
       '/category/product/A4-500-snegurochka',
       '/category/product/A4-500-ballet-classic',
       '/category/product/A3-500-svetocopy',
       '/category/product/A3-500-votocopy',
       '/category/product/strejch-plenka-pervichka-1',
       '/category/product/strejch-plenka-pervichka-1-5',
       '/category/product/strejch-plenka-pervichka-1-8',
       '/category/product/strejch-plenka-pervichka-2',
       '/category/product/strejch-plenka-vtorichka-1',
       '/category/product/strejch-plenka-vtorichka-1-5',
       '/category/product/strejch-plenka-vtorichka-1-8',
       '/category/product/strejch-plenka-vtorichka-2',
       '/category/product/strejch-plenka-dlya-12',
       '/category/product/strejch-plenka-dlya-15',
       '/category/product/klejkaya-lenta-skotch-48-40-50',
       '/category/product/klejkaya-lenta-skotch-48-45-50',
       '/category/product/klejkaya-lenta-skotch-48-40-60',
       '/category/product/klejkaya-lenta-skotch-48-45-60',
       '/category/product/klejkaya-lenta-skotch-48-40-100',
       '/category/product/klejkaya-lenta-skotch-48-45-100',
       '/category/product/klejkaya-lenta-skotch-48-40-120',
       '/category/product/klejkaya-lenta-skotch-48-45-120',
       '/category/product/klejkaya-lenta-skotch-48-40-150',
       '/category/product/klejkaya-lenta-skotch-48-45-150',
       '/category/product/klejkaya-lenta-skotch-75-45-66',
       '/category/product/klejkaya-lenta-skotch-75-45-100',
       '/category/product/klejkaya-lenta-skotch-48-45-50-krasnyj',
       '/category/product/klejkaya-lenta-skotch-48-45-50-sinij',
       '/category/product/klejkaya-lenta-skotch-48-45-50-zheltaya',
       '/category/product/klejkaya-lenta-skotch-48-45-50-zelenaya',
       '/category/product/klejkaya-lenta-skotch-48-40-60-korichnevaya',
       '/category/product/klejkaya-lenta-skotch-48-45-66-korichnevaya',
       '/category/product/klejkaya-lenta-skotch-48-40-120-korichnevaya',
       '/category/product/klejkaya-lenta-skotch-48-45-120-korichnevaya',
       '/category/product/etiket-pistolet-mx5500',
       '/category/product/etiket-pistolet-mx2612',
       '/category/product/etiket-pistolet-mx2616',
       '/category/product/etiket-lenta-21-12-750',
       '/category/product/etiket-lenta-21-12-750-belaya',
       '/category/product/ribbon-wax-out-40mm300m-40mm',
       '/category/product/ribbon-wax-out-40mm450m-40mm',
       '/category/product/ribbon-wax-out-50mm300m-50mm',
       '/category/product/ribbon-wax-in-50mm360m-50mm',
       '/category/product/ribbon-wax-out-60mm300m-60mm',
       '/category/product/ribbon-wax-in-60mm360m-60mm',
       '/category/product/ribbon-wax-out-60mm360m-60mm',
       '/category/product/ribbon-wax-in-60mm450m-60mm',
       '/category/product/ribbon-wax-out-60mm450m-60mm',
       '/category/product/ribbon-wax-out-60mm480m-60mm',
       '/category/product/ribbon-wax-in-70mm360m-70mm',
       '/category/product/ribbon-wax-out-70mm360m-70mm',
       '/category/product/ribbon-wax-out-70mm450m-70mm',
       '/category/product/ribbon-wax-out-80mm300m-80mm',
       '/category/product/ribbon-wax-out-80mm450m-80mm',
       '/category/product/ribbon-wax-out-100mm300m-100mm',
       '/category/product/ribbon-wax-out-100mm450m-100mm',
       '/category/product/ribbon-wax-out-110mm300m-110mm',
       '/category/product/ribbon-wax-in-110mm300m-110mm',
       '/category/product/ribbon-wax-in-110mm360m-110mm',
       '/category/product/ribbon-wax-out-110mm360m-110mm',
       '/category/product/ribbon-wax-out-110mm450m-110mm',
       '/category/product/ribbon-wax-in-110mm450m-110mm',
       '/category/product/ribbon-wax-out-110mm74m-110mm',
       '/category/product/ribbon-wax-out-110mm110m-110mm',
       '/category/product/ribbon-wax-out-57mm74m-57mm',
       '/category/product/ribbon-wax-out-57mm74m-110mm',
       '/category/product/ribbon-wax-out-64mm74m-110mm'
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
