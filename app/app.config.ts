export default defineAppConfig({
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  global: {
    picture: {
      dark: '/images/fox.png',
      light: '/images/fox.png',
      alt: 'Fox picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'info.polyakovva@gmail.com',
    available: true,
    address_class: 'г. Подольск, ул. Литейная, д. 34/2',
    address_area: 'г. Подольск, мкр. Кутузово, ул. Станционная, д. 21 (площадка ГАИ)',
    phone: '8(926)255-25-12',
    booking: {
      label: 'Записаться на обучение',
      to: '/',
      color: 'primary'
    }
  },
  toaster: {
    position: 'top-right' as const,
    expand: true,
    duration: 5000
  },
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'stone'
    },

    icons: {
      dark: 'i-lucide-moon',
      light: 'i-lucide-sun'
    }
  },

  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © 2013 - ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-nuxtdotjs',
      'to': 'https://nuxt.com',
      'target': '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/invite/ps2h6QT',
      'target': '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/nuxt_js',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt/ui',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  }
})