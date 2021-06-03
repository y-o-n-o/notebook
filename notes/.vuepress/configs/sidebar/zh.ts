import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/unreal/': [
    {
      isGroup: true,
      text: 'Unreal Engine',
      children: [
        {
          isGroup: true,
          text: 'Tips',
          children: [
            '/unreal/tips/standalone-debug.md',
          ],
        },
      ],
    },
  ],
  '/vscode/': [
    {
      isGroup: true,
      text: 'VSCode',
      children: [
        '/vscode/settings.md',
      ],
    },
  ],
}