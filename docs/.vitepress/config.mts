import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dibit",
  description: "Curated Website Links",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: "Beginner's Guide 📘", link: '/beginners-guide' },
          { text: 'Android 📱', link: '/android' },
          { text: 'Software 💾', link: '/software' },
          { text: 'Useful 🔧', link: '/useful' },
          { text: 'Games 🎮', link: '/games' },
          { text: 'Developer 👨‍💻 ', link: '/developer' },
          { text: "Unsafe ⚠️", link: '/unsafe' }

        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'telegram', link: 'https://github.com/vuejs/vitepress' }

    ]
  }
})
