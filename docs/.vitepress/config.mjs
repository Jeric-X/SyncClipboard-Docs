import { defineConfig } from 'vitepress'

const sections = [
  ['使用指南', 'User guide', [
    ['getting-started', '第一次同步', 'Your first sync'],
    ['desktop', '桌面客户端', 'Desktop clients'],
    ['android', 'Android 客户端', 'Android app'],
    ['mobile-tools', 'iOS 与其他移动工具', 'iOS and other mobile tools']
  ]],
  ['服务器', 'Servers', [
    ['server', 'SyncClipboard 服务器', 'SyncClipboard server'],
    ['storage', 'WebDAV 与 S3', 'WebDAV and S3']
  ]],
  ['开发参考', 'Reference', [
    ['protocol', '剪贴板协议', 'Clipboard protocol']
  ]]
]

function sidebar(english) {
  const prefix = english ? '/en/guide/' : '/guide/'
  return sections.map(([zh, en, pages]) => ({
    text: english ? en : zh,
    items: pages.map(([slug, zhTitle, enTitle]) => ({
      text: english ? enTitle : zhTitle,
      link: prefix + slug
    }))
  }))
}

export default defineConfig({
  title: 'SyncClipboard',
  description: 'SyncClipboard 桌面端、移动端和服务器使用文档',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '使用指南', link: '/guide/getting-started' },
          { text: '服务器', link: '/guide/server' }
        ],
        sidebar: sidebar(false),
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '外观',
        langMenuLabel: '切换语言'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'User guides for SyncClipboard desktop, mobile, and server.',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'Servers', link: '/en/guide/server' }
        ],
        sidebar: sidebar(true)
      }
    }
  },
  themeConfig: {
    logo: '/icon.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Jeric-X/SyncClipboard' }],
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => Array.from(new Intl.Segmenter('zh', { granularity: 'word' }).segment(text))
              .filter(part => part.isWordLike).map(part => part.segment)
          }
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '未找到结果', resetButtonTitle: '清除搜索',
                displayDetails: '显示详细信息', backButtonTitle: '返回',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    }
  }
})
