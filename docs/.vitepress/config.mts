import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "whuthesis", // 左上角的 title
  description: "LaTeX Thesis Template for Wuhan University",
  srcDir: 'src',
  base: "/whuthesis-wiki/",
  themeConfig: {
    logo : '/logo.png',  // 左上角的 logo
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档指南', link: '/introduction/' },
      { text: '模板下载', link: 'https://github.com/xkwxdyy/whuthesis/releases/latest' },
      { text: '开发 log', link: '/develop-log/' },
      {
        text: '反馈',
        items: [
          { text: 'QQ Group', link: 'https://qm.qq.com/q/CfnenqgAE0'},
          { text: 'GitHub issue', link: 'https://github.com/xkwxdyy/whuthesis/issues'},
          { text: 'Email', link: 'mailto:kangweixia_xdyy@163.com' }
        ]
      },
      { text: '捐赠与打赏', link: '/introduction/donation'}
    ],

    sidebar: [
      {
        text: '介绍',
        link: '/introduction/',
        items: [
          { text: '捐赠与打赏', link: '/introduction/donation' },
        ]
      },
      {
        text: '开发 log',
        link: '/develop-log/',
        items: [
          { text: '库的开发', link: '/develop-log/library/', collapsed: false },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: false
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xkwxdyy/whuthesis' },
    ],

    footer: {
      message: 'Released under the LPPL-1.3c License.',
      copyright: 'Copyright © 2024-present Kangwei Xia'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    externalLinkIcon: true
  }
})
