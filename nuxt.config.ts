import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },

  modules: [],

  css: ['~/assets/css/main.css'],

  components: {
    dirs: [
      { path: '~/components', pathPrefix: false },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'ClearVault — Digital Services Through Discord',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'ClearVault is a Discord-based digital storefront for Cheap Game Accounts',
        },
        { name: 'theme-color', content: '#070c12' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'ClearVault' },
        { property: 'og:title', content: 'ClearVault — Digital Products Through Discord' },
        { property: 'og:description', content: 'ClearVault is a Discord-based digital storefront for Cheap Game Accounts' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'ClearVault — Digital Products Through Discord' },
        { name: 'twitter:description', content: 'ClearVault is a Discord-based digital storefront for Cheap Game Accounts' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Space+Grotesk:wght@300..700&family=Space+Mono:wght@400;700&display=swap',
        },
      ],
    },
  },

  typescript: {
    strict: true,
  },
})
