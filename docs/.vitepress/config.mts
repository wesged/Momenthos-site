import { defineConfig } from 'vitepress'

// GitHub Pages serves a project repo at https://<user>.github.io/<repo>/.
// Change `base` to '/' if you move to a custom domain.
const base = '/Momenthos-site/'

export default defineConfig({
  base,
  lang: 'en-US',
  title: 'Momenthos',
  description: 'A private journal for family moments on iPhone and iPad.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}icon.png` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap',
      },
    ],
  ],
  themeConfig: {
    logo: '/icon.png',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Support', link: '/support' },
      { text: 'Privacy', link: '/privacy' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Basics',
          items: [
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'Capturing moments', link: '/guide/capturing-moments' },
            { text: 'Quick capture', link: '/guide/quick-capture' },
          ],
        },
        {
          text: 'Your library',
          items: [
            { text: 'Today and Timeline', link: '/guide/today-and-timeline' },
            { text: 'Threads', link: '/guide/threads' },
            { text: 'Reflect', link: '/guide/reflect' },
            { text: 'People, tags and shelves', link: '/guide/organizing' },
          ],
        },
        {
          text: 'Sharing and backup',
          items: [
            { text: 'Sending a package', link: '/guide/packages' },
            { text: 'Family shelves', link: '/guide/family-shelves' },
            { text: 'Backup and import', link: '/guide/backup-and-import' },
            { text: 'Reminders', link: '/guide/reminders' },
          ],
        },
      ],
    },
    search: { provider: 'local' },
    footer: {
      message: '<a href="/Momenthos-site/privacy">Privacy Policy</a> · <a href="/Momenthos-site/support">Support</a>',
      copyright: '© 2026 Wesley Geddes',
    },
  },
})
