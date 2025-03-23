export const routes = {
  articles: {
    path: '/articles',
  },
  attachments: {
    path: '/attachments',
  },
  categories: {
    path: '/categories',
  },
  dashboard: {
    path: '/dashboard',
  },
  login: {
    path: '/login',
  },
  members: {
    path: '/members',
  },
  pages: {
    path: '/pages',
  },
  passwordRecovery: {
    path: '/password-recovery',
  },
  settings: {
    path: '/settings',
    panels: {
      global: 'global',
      client: 'client',
      languages: 'language',
      maintenance: 'maintenance',
    },
  },
  tags: {
    path: '/tags',
  },
  users: {
    path: '/users',
  },
  menu: {
    path: '/menu',
  },
  messages: {
    path: '/messages',
  },
  translations: {
    path: '/translations',
  },
  profile: {
    path: '/profile',
  },
} as const;
