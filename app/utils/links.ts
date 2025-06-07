import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Главная',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Услуги',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Блог',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'Галерея',
  icon: 'i-lucide-mic',
  to: '/speaking'
}, {
  label: 'Контакты',
  icon: 'i-lucide-user',
  to: '/about'
}]
