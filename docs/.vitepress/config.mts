import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Voice Art",
  description: "Voice Art Official (Docs & Guides & Trials)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/FluentColorChat20.svg',
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '如有建议或反馈，请通过 <a href="mailto:ned@ptodo.top">邮件</a> 或 <a href="https://github.com/你的用户名/voice-art/issues">GitHub Issues</a> 联系我',
      copyright: 'Copyright © 2024-present | <a href="/legal/tos">用户协议</a> | <a href="/legal/privacy-policy">隐私政策</a>'
    }
  }
})
