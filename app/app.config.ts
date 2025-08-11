export default defineAppConfig({
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
    phone: '+7(926)255-25-12',
    booking: {
      label: 'Записаться на обучение',
      to: '/',
      color: 'primary'
    }
  },

  ui: {
    colors: {
      primary: 'orange',
      neutral: 'stone'
    },

    icons: {
      arrowUp: 'i-lucide-arrow-up',
      arrowDown: 'i-lucide-arrow-down',
      caution: 'i-lucide-circle-alert',
      copy: 'i-lucide-copy',
      copyCheck: 'i-lucide-copy-check',
      dark: 'i-lucide-moon',
      error: 'i-lucide-circle-x',
      eye: 'i-lucide-eye',
      eyeOff: 'i-lucide-eye-off',
      file: 'i-lucide-file-text',
      folder: 'i-lucide-folder',
      folderOpen: 'i-lucide-folder-open',
      hash: 'i-lucide-hash',
      info: 'i-lucide-info',
      light: 'i-lucide-sun',
      menu: 'i-lucide-menu',
      panelClose: 'i-lucide-panel-left-close',
      panelOpen: 'i-lucide-panel-left-open',
      reload: 'i-lucide-rotate-ccw',
      stop: 'i-lucide-square',
      success: 'i-lucide-circle-check',
      system: 'i-lucide-monitor',
      tip: 'i-lucide-lightbulb',
      warning: 'i-lucide-triangle-alert',
      arrowLeft: 'i-lucide-arrow-left',
      arrowRight: 'i-lucide-arrow-right',
      check: 'i-lucide-check',
      chevronDoubleLeft: 'i-lucide-chevrons-left',
      chevronDoubleRight: 'i-lucide-chevrons-right',
      chevronDown: 'i-lucide-chevron-down',
      chevronLeft: 'i-lucide-chevron-left',
      chevronRight: 'i-lucide-chevron-right',
      chevronUp: 'i-lucide-chevron-up',
      close: 'i-lucide-x',
      ellipsis: 'i-lucide-ellipsis',
      external: 'i-lucide-arrow-up-right',
      loading: 'i-lucide-loader-circle',
      minus: 'i-lucide-minus',
      plus: 'i-lucide-plus',
      search: 'i-lucide-search'
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
    credits: `Школамото.рф © 2013 - ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'simple-icons:whatsapp',
      'to': 'https://wa.me/79262552512',
      'target': '_blank',
      'aria-label': 'WhatsApp'
    }, {
      'icon': 'simple-icons:youtube',
      'to': 'https://www.youtube.com/channel/UC3UYzo4fmyeQVA5IYJo7jLw/videos',
      'target': '_blank',
      'aria-label': 'Youtube'
    },
    //         {
    //   'icon': 'simple-icons:instagram',
    //   'to': 'https://www.instagram.com/shkolamoto/',
    //   'target': '_blank',
    //   'aria-label': 'Instagram'
    // }, 
            {
      'icon': 'simple-icons:vk',
      'to': 'https://vk.com/shkolamoto_podolsk',
      'target': '_blank',
      'aria-label': 'VK'
    }]
  },

  seo: {
    siteName: 'Школамото.рф - Мотошкола в Подольске '
  }
})