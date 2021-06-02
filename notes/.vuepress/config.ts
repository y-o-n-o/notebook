import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    // ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'Yono\'s Notebook' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Yono\'s Notebook' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '笔记本',
      description: 'Notes about web and game development.',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Notebook',
      description: 'Notes about web and game development.',
    },
  },

  themeConfig: {
    logo: '/images/logo.png',

    // repo: 'y-o-n-o/notebook',

    // docsDir: 'notes',

    contributors: false,

    // theme-level locales config
    locales: {
      // Chinese locale config
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们肿么到这来了？',
        ],
        backToHome: '返回首页',

        // other
        openInNewWindow: '在新窗口打开'
      },

      // English locale config
      '/en/': {
        // navbar
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        selectLanguageAriaLabel: 'Lauguage',
      },
    },

    themePlugins: {
      git: isProd,
    },
  },

  plugins: [
    // only enable shiki plugin in production mode
    [
      '@vuepress/plugin-shiki',
      isProd
        ? {
          theme: 'dark-plus',
        }
        : false,
    ],
  ],
})