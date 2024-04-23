import { defineConfig } from 'vitepress'
import latex3 from '../src/LaTeX-Expl3.tmLanguage.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "whuthesis", // 左上角的 title
  description: "LaTeX Thesis Template for Wuhan University",
  srcDir: 'src',
  base: "/whuthesis-wiki/",
  themeConfig: {
    search: {
      provider: 'local',
    },
    logo : '/logo.png',  // 左上角的 logo
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: '文档指南',
        items:[
          { text: '前言', link: '/guide/front/' },
          { text: '后记', link: '/guide/back/' }
        ]
      },
      { text: '模板下载', link: 'https://github.com/xkwxdyy/whuthesis/releases/latest' },
      {
        text: '开发',
        items: [
          { text: 'API', link: '/API/' },
          { text: 'log', link: '/develop-log/' },
          { text: '参与开发', link: 'https://github.com/xkwxdyy/whuthesis/pulls'}
        ]
      },
      {
        text: '反馈',
        items: [
          { text: 'QQ Group', link: 'https://qm.qq.com/q/CfnenqgAE0'},
          { text: 'GitHub issue', link: 'https://github.com/xkwxdyy/whuthesis/issues'},
          { text: 'Email', link: 'mailto:kangweixia_xdyy@163.com' }
        ]
      },
      { text: '捐赠', link: '/donation'}
    ],

    sidebar:{
      // 指南的侧边栏
      '/guide/front/':[
        {
          text: '前言',
          items:[
            {
              text: '使用之前'
            }
          ]
        },
      ],
      '/guide/back/':[
        {
          text: '后记',
          items:[
            {
              text: '致谢',
              link: '/guide/back/acknowledgements'
            }
          ]
        }
      ],
      // 开发 log 的侧边栏
      '/develop-log': [
        {
          text: '开发 log',
          link: '/develop-log/',
          collapsed: false,
          items:[
            {
              text: '开发杂记',
              link: '/develop-log/daily',
              collapsed: false
            }
          ]
        },
        {
          text: '库的开发', 
          link: '/develop-log/library/', 
          collapsed: false 
        },
      ],
      // API 的侧边栏
      '/API':[
        {
          text: 'API',
          link: '/API/',
          collapsed: false
        }
      ],
    },

    socialLinks: [
      { 
        // github
        icon: {
          svg: '<svg t="1712726854986" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5244" width="200" height="200"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#707070" p-id="5245"></path></svg>'
        },
        link: 'https://github.com/xkwxdyy' },
      { 
        // gitee
        icon: {
          svg: '<svg t="1712725831592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4228" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4229"></path></svg>'
        }, 
        link: 'https://gitee.com/xkwxdyy' 
      },
      {
        // bilibili
        icon: {
          svg: '<svg t="1712726577258" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5224" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="5225"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="5226"></path></svg>'
        },
        link: 'https://space.bilibili.com/354480732'
      }
    ],

    footer: {
      message: 'Released under the <a href="https://www.latex-project.org/lppl/lppl-1-3c/">LaTeX project public license (LPPL), version 1.3c</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/xkwxdyy">夏大鱼羊</a>'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    externalLinkIcon: true,
  },

  markdown: {
    // https://github.com/vuejs/vitepress/issues/3779#issuecomment-2049650973
    // > That language is not fully compatible with Shiki types. But if it works you can use // @ts-ignore or // @ts-expect-error above that line.
    // @ts-ignore
    languages: [latex3]
  }
})
