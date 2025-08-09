// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxthq/studio',
  ],

  runtimeConfig: {
    // Приватные переменные (доступны только на сервере)
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailTo: process.env.EMAIL_TO,
    emailFrom: process.env.EMAIL_FROM,
  },
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'Школамото.рф', // default fallback title
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },

  studio: {
    gitInfo: {
      name: 'moto',  // Например, 'my-nuxt-project'
      owner: 'extremedv',  // Например, 'yourusername'
      url: 'https://github.com/ExtremeDV/moto'  // Например, 'https://github.com/yourusername/my-nuxt-project'
    }
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

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
  },
})
