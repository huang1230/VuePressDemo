/**配置文件的入口文件，也可以是 YML 或 toml。 */
const path = require('path');
const moment = require('moment');

const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
  host: 'localhost', // ip
  port: '8099', //端口号
  base: '/', //默认路径 
  //页面标题
  title: 'mpass 平台使用手册',
  //描述 meta
  description: '该技术文档是针对于市民云开发的 mpass 平台编写的一个用户使用手册，其中包含项目的运行概述、使用方法及相关解释。',
  head: [
    // 设置 favor.ico，docs/.vuepress/public 下
    [
      'link', { rel: 'icon', href: '/images/logo.png' }
    ]
  ],
  plugins: [
    [
      //时间戳插件
      '@vuepress/last-updated',
      {
        //如果你在多语言模式下运行，你还可以使用第二个参数 lang 为不同语言生成时间字符串。
        transformer: (timestamp, lang) => {
          //默认情况下，vuepress 根据浏览器的url（xx/zh-cn/xxx） 来判断是否显示中文，否则的话就使用 moment.locale() 方法传入对应的参数来显示语言。
          console.log(moment);
          moment.locale('zh-cn'); //中文：【en 英文】
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ],
  //themeConfig 的大部分配置都可以在具体 .md 文件中使用 YAML Front Matter 语法来进行局部配置
  themeConfig: {
    //导航栏的 Logo 图片
    logo: '/images/logo.png',
    navbar: true, //是否禁用导航栏
    //导航栏
    nav: nav,
    //侧边栏 
    sidebar: sidebar,
    //显示所有页面的标题链接，true: 永远显示 h2/h3 标题链接，false: 只有在当前路由高亮时才显示所有标题链接
    displayAllHeaders: false,
    //规定 当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值是否会实时更新
    activeHeaderLinks: true,
    lastUpdated: '更新时间'
    //最后更新时间的前缀，由于 lastUpdated 是基于 git 的, 所以你只能在一个基于 git 的项目中启用它。此外，由于使用的时间戳来自 git commit，因此它将仅在给定页的第一次提交之后显示，并且仅在该页面后续提交更改时更新。
  },
  configureWebpack: {
    //路径别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './public/')
      }
    }
  },
}