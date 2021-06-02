import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '引擎',
    children: [
      {
        text: 'Unreal',
        children: [
          '/unreal/tips/',
        ],
      },
    ],
  },
]