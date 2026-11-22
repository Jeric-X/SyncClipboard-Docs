import { defineConfig } from 'vitepress'

function sidebar(english) {
  const prefix = english ? '/en/' : '/'
  const page = (path, zh, en) => ({ text: english ? en : zh, link: prefix + path })
  return [
    page('guide/getting-started', '开始同步', 'Start syncing'),
    {
      text: english ? 'Desktop clients' : '桌面客户端',
      items: [
        page('desktop/', '下载与安装', 'Download and install'),
        page('desktop/sync/accounts', '同步账号', 'Sync accounts'),
        page('desktop/history', '历史记录', 'History'),
        page('desktop/builtin-server', '内置服务器', 'Built-in server')
      ]
    },
    page('mobile/', '移动端', 'Mobile clients'),
    page('server/', '服务端', 'Server'),
    page('api', 'API', 'API'),
    page('community', '社区项目', 'Community projects')
  ]
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
