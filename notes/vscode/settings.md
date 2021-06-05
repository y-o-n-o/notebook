# 个人配置

可以直接从 [gist](https://gist.github.com/y-o-n-o/174e256ef3663bb10c6d9e4fa303d67f) 获取配置文件

## 基础配置

- 设置 editor 的标签在空间不够时自动缩小，并且不显示关闭的小叉叉
```json:no-line-numbers
"workbench.editor.pinnedTabSizing": "shrink",
"workbench.editor.tabSizing": "shrink",
"workbench.editor.tabCloseButton": "off",
```

- markdown preview 滚动时，markdown 文件不跟着滚动
```json:no-line-numbers
"markdown.preview.scrollEditorWithPreview": false,
```

## Vim

- 不允许 Vim 插件覆盖 Ctrl 快捷键：
```json:no-line-numbers
"vim.useCtrlKeys: false",
```

- 因为不覆盖 Ctrl 快捷键了， `<C-n>` 和 `<C-p>` 不再能用来切换 Intellisense 的补全。所以在 `keybindings.json` 加两个配置：
```json:no-line-numbers
{
    "key": "ctrl+j",
    "command": "selectNextSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
},
{
    "key": "ctrl+k",
    "command": "selectPrevSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
}
```

- 由于 `space` 用于 `which key`，把 `leaderkey` 设置为 `\`，用到 `leaderkey` 的都改掉。
```json:no-line-numbers
"vim.leader": "\\",
```

- 重映射超时时间改成 3s
```json:no-line-numbers
"vim.timeout": 3000,
```

- 将 `j`/`k` 映射成 `gj`/`gk`，
  1. 在 word wrap 时可以在行内切换，
  2. 不进入代码折叠区域。
```json:no-line-numbers
{
    "before": [
        "j"
    ],
    "after": [
        "g",
        "j"
    ]
},
{
    "before": [
        "k"
    ],
    "after": [
        "g",
        "k"
    ]
},
```

### Easy motion

- 启用
```json:no-line-numbers
"vim.easymotion": true,
```

- 把快捷键前缀 `leader` + `leader` 改成 `g` + `s`
```json:no-line-numbers
{
    "before": [
        "g",
        "s",
        " "
    ],
    "after": [
        "leader",
        "leader",
        "s"
    ]
},
{
    "before": [
        "g",
        "s",
        "j"
    ],
    "after": [
        "leader",
        "leader",
        "j"
    ]
},
{
    "before": [
        "g",
        "s",
        "k"
    ],
    "after": [
        "leader",
        "leader",
        "k"
    ]
},
{
    "before": [
        "g",
        "s",
        "w"
    ],
    "after": [
        "leader",
        "leader",
        "w"
    ]
},
{
    "before": [
        "g",
        "s",
        "b"
    ],
    "after": [
        "leader",
        "leader",
        "b"
    ]
},
```

### Which key

- 将 `<space>` 设置为 `whichkey` 的 **leader key**
```json:no-line-numbers
{
    "before": [
        "<space>"
    ],
    "commands": [
        "whichkey.show"
    ]
},
```
