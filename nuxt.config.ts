// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  ssr: true,

  colorMode: {
    preference: 'dark', // Устанавливаем темную тему по умолчанию
    fallback: 'dark',   // Резервный вариант, если предпочтение не определено
  },
  
  app: {
    head: {
      title: 'Школамото.рф', // default fallback title
      htmlAttrs: {
        lang: 'ru',
      }
    }
  },
  
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
