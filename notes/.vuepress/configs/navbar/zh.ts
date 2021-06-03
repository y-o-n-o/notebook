import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '游戏引擎',
    children: [
      {
        text: 'Unreal',
        children: [
          '/unreal/tips/',
        ],
      },
    ],
  },
  {
    text: '日常工具',
    children: [
      {
        text: 'VSCode',
        link: '/vscode/',
      },
    ],
  },
]