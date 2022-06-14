/** vuepress 的 sidebar 有 数组 和 对象两种手动化语法。 auto: 全局自动化 */

//[局部全局配置]  【路由映射： [('' | '/') : '*/README.md', (config.md) : 'config.html', ('/guide/README.md') : '/guide/']】
const sidebar = [
  //可以省略 .md 拓展名，同时以 / 结尾的路径将会被视为 */README.md
  '',
  '/about',
  /**
   * - '/xxx' : 与 *.md 的 title 字段关联
   * - [链接路径（/xxx.md）、链接文字]
   */
  {
    title: 'CSS',   // 必要的
    path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: true, // true: 可折叠。false: 不可折叠
    sidebarDepth: 1,    // 可选的, 默认值是 1 【要显示 h3标题，必须要有 h2标题】
    children: [
      '/css/a',
      '/css/b',
      '/css/c',
    ]
  },
]

// sidebar: {
//   //按照路径层级来配置
//   '/css/': [ //多级路由
//     '',
//     'a',
//     'b',
//     'c'
//   ],
//   '/': [ //根路由。【注：VuePress 采用正则匹配的形式来寻找路由，所以一般 / 根路由写在最后面】
//     '',
//     '/about'
//   ]
// },

// sidebar: 'auto', //自动生成侧边栏
//侧边栏标题锚链接的提取程度：【0 禁止 | 1 提取 h2 标题 | 2 提取 h2\h3 标题】
// sidebarDepth: 2,


module.exports = sidebar;