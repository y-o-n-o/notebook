(self.webpackChunk=self.webpackChunk||[]).push([[379],{2949:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>r});var l=a(6252);const o=(0,l.Wm)("h1",{id:"个人配置"},[(0,l.Wm)("a",{class:"header-anchor",href:"#个人配置"},"#"),(0,l.Uk)(" 个人配置")],-1),p=(0,l.Uk)("可以直接从 "),e={href:"https://gist.github.com/y-o-n-o/174e256ef3663bb10c6d9e4fa303d67f",target:"_blank",rel:"noopener noreferrer"},t=(0,l.Uk)("gist"),c=(0,l.Uk)(" 获取配置文件"),D=(0,l.uE)('<h2 id="基础配置"><a class="header-anchor" href="#基础配置">#</a> 基础配置</h2><ul><li>设置 editor 的标签在空间不够时自动缩小，并且不显示关闭的小叉叉</li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;workbench.editor.pinnedTabSizing&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;shrink&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;">&quot;workbench.editor.tabSizing&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;shrink&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;">&quot;workbench.editor.tabCloseButton&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;off&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span></code></pre></div><ul><li>markdown preview 滚动时，markdown 文件不跟着滚动</li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;markdown.preview.scrollEditorWithPreview&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span></code></pre></div><h2 id="vim"><a class="header-anchor" href="#vim">#</a> Vim</h2><ul><li>不允许 Vim 插件覆盖 Ctrl 快捷键：</li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;vim.useCtrlKeys: false&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span></code></pre></div><ul><li>因为不覆盖 Ctrl 快捷键了， <code>&lt;C-n&gt;</code> 和 <code>&lt;C-p&gt;</code> 不再能用来切换 Intellisense 的补全。所以在 <code>keybindings.json</code> 加两个配置：</li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;key&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ctrl+j&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;command&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;selectNextSuggestion&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;when&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;suggestWidgetMultipleSuggestions &amp;&amp; suggestWidgetVisible &amp;&amp; textInputFocus&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;key&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ctrl+k&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;command&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;selectPrevSuggestion&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;when&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;suggestWidgetMultipleSuggestions &amp;&amp; suggestWidgetVisible &amp;&amp; textInputFocus&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre></div><ul><li>由于 <code>space</code> 用于 <code>which key</code>，把 <code>leaderkey</code> 设置为 <code>\\</code>，用到 <code>leaderkey</code> 的都改掉。</li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;vim.leader&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span></code></pre></div><ul><li>重映射超时时间改成 3s</li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;vim.timeout&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3000</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span></code></pre></div><ul><li>将 <code>j</code>/<code>k</code> 映射成 <code>gj</code>/<code>gk</code>， <ol><li>在 word wrap 时可以在行内切换，</li><li>不进入代码折叠区域。</li></ol></li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;j&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;after&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;j&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;k&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;after&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;k&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"></span></code></pre></div><h3 id="easy-motion"><a class="header-anchor" href="#easy-motion">#</a> Easy motion</h3><ul><li>启用</li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;vim.easymotion&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span></code></pre></div><ul><li>把快捷键前缀 <code>leader</code> + <code>leader</code> 改成 <code>g</code> + <code>s</code></li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;s&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot; &quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;after&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;s&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;s&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;j&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;after&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;j&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;s&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;k&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;after&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;k&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;s&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;w&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;after&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;w&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;g&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;s&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;b&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;after&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;leader&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;b&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"></span></code></pre></div><h3 id="which-key"><a class="header-anchor" href="#which-key">#</a> Which key</h3><ul><li>将 <code>&lt;space&gt;</code> 设置为 <code>whichkey</code> 的 <strong>leader key</strong></li></ul><div class="language-json ext-json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;before&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;&lt;space&gt;&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;commands&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;whichkey.show&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">},</span></span>\n<span class="line"></span></code></pre></div>',24),r={render:function(s,n){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[o,(0,l.Wm)("p",null,[p,(0,l.Wm)("a",e,[t,(0,l.Wm)(a)]),c]),D],64)}}},9275:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>l});const l={key:"v-60c267ea",path:"/vscode/settings.html",title:"个人配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础配置",slug:"基础配置",children:[]},{level:2,title:"Vim",slug:"vim",children:[{level:3,title:"Easy motion",slug:"easy-motion",children:[]},{level:3,title:"Which key",slug:"which-key",children:[]}]}],filePathRelative:"vscode/settings.md",git:{updatedTime:1622909061e3}}}}]);