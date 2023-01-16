const { defineConfig } = require('@vue/cli-service')

module.exports = {
  pwa : {
    workboxOptions :{
      runtimeCaching:[{
        urlPattern: /\.png$/,
        handler: 'CacheFirst',
        options:{
          cacheName:'png-cache',
          expiration:{
            maxEntries: 10, // 최대로 캐싱할 패일 갯수
            maxAgeSeconds: 60*60*24*365 // 캐싱된 파일 저장기한
          }
        }
      },
      {
        urlPattern: /\.json$/,
        handler:'StaleWhileRevaildate',
        options:{
          cacheName:'json-cache',
          cacheableREsponse:{
            statuses:[200]
          }
        }
      }]
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
})
