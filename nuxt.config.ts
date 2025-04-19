// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ['~/assets/style/var.sass', '~/assets/style/main.css', '~/assets/style/iconfont.css'],
  modules: [
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/critters' // CSS内联优化
  ],

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      title: '呢喃ninc',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '呢喃ninc个人主页，一个专注于技术分享的个人主页' },
        { name: 'keywords', content: '呢喃ninc,呢喃ninc个人主页' },
        { name: 'author', content: 'n@ninc.top' },
        { name: 'copyright', content: 'ninc' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:title', content: '呢喃ninc个人主页' },
        { property: 'og:description', content: '呢喃ninc个人主页，一个专注于技术分享的个人主页' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // 预连接关键资源加快加载速度
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }
      ]
    },
    // 页面切换动画
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // Vite配置
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      }),
      tailwindcss() as any
    ],
    // 构建优化
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            'nuxt-vendor': ['nuxt/app']
          }
        }
      },
      // 压缩配置
      minify: 'terser',
      terserOptions: {
        // compress: {
        //   drop_console: process.env.NODE_ENV === 'production', // 生产环境移除console
        //   drop_debugger: process.env.NODE_ENV === 'production' // 生产环境移除debugger
        // }
      }
    }
  },

  // Nitro服务器配置
  nitro: {
    minify: true,
    compressPublicAssets: {
      gzip: true, // 启用gzip压缩
      brotli: true // 启用brotli压缩
    },
    routeRules: {
      // 静态资源缓存策略
      '/assets/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/fonts/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
          'Access-Control-Allow-Origin': '*',
          Vary: 'Accept-Encoding' // 支持不同编码格式
        }
      },
      '/fonts/*.woff2': {
        headers: { 'Content-Type': 'font/woff2; charset=utf-8' }
      },
      '/fonts/*.ttf': {
        headers: { 'Content-Type': 'font/ttf; charset=utf-8' }
      },
      '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/svg/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
    },
    prerender: {
      routes: ['/']
    }
  },

  // 实验性功能
  experimental: {
    treeshakeClientOnly: true, // tree shaking优化
    payloadExtraction: true, // 提取payload
    componentIslands: true, // 组件岛优化
    externalVue: true // 外部Vue
  },

  build: {
    transpile: []
  },

  // Critters模块配置
  critters: {
    config: {
      preload: 'swap', // 预加载其他样式资源
      inlineFonts: true, // 内联字体
      pruneSource: true, // 移除内联后的CSS源
      reduceInlineStyles: true // 减少重复内联样式
    }
  }
})
