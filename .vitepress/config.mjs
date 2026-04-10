import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "Comet 服务器文档站",
  description: "Powered by VitePress",
  lastUpdated: true,
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/server-logo.png',
    outline: [2, 3],
    
    outlineTitle: "页面导航",
    lastUpdated: {
      text: '最后更新于'
    },
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    footer: {
      copyright:"Copyright © 2023-2026 Comet 陆上彗星管理组"
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '简介', link: '/server/index.md' },
      { text: '常用功能', items:[
        { text: '服务器菜单', link: '/plugins/menu' },
        { text: '绑定与白名单', link: '/bot/use-main' },
        { text: '玩家传送', link: '/plugins/tp' },
        { text: '联盟系统', link: '/plugins/union' },
        { text: '自动整理', link: '/plugins/autoclean' },
        { text: '移动光源', link: '/plugins/dynamiclights' },
        { text: '通用货币', link: '/plugins/ucs' },
      ]},
      { text: '活动', items:[
        { text: '兑换码活动', link: '/activity/cdk/index.md' },
        { text: 'Kongtouの靶场', link: '/activity/shootrange.md' },
        { text: '撕逼大会', link: '/activity/sibipvp' },
        { text: 'Special Week', link: '/activity/spweek/index.md' },
      ] },
      { text: '服规', items:[
        { text: '玩家守则', link: '/admin/rules' },
        { text: '黑名单违规介绍', link: '/admin/server-rules' },
        { text: '违规处理', link: '/admin/manage' },
        { text: '举报与申诉', link: '/admin/report' },
      ] }
    ],

    sidebar: [
      {
        text: '服务器总览',
        collapsed: false,
        items: [
          { text: '服务器介绍', link: '/server/index.md'},
          { text: '群组服务器', collapsed: true, items: [
            { text: 'Comet 生存服务器', link: '/server/subs/main' },
            { text: 'Comet 模组服务器', link: '/server/subs/mod' },
            { text: 'Comet 空岛服务器', link: '/server/subs/is' },
            { text: 'Comet 枪战服务器', collapsed: true, items: [
              { text: '服务器特色介绍', link: '/server/subs/cge' },
              { text: '基本游戏元素', link: '/server/subs/cge/cge-elements' },
              { text: '基本游戏流程', link: '/server/subs/cge/cge-step' },
              { text: '服务器物资详情', link: '/server/subs/cge/cge-objects' },
              { text: '其他内容', collapsed: true, items: [
                { text: '制作人员名单', link: '/server/subs/cge/cge-creator' },
                { text: '地图详情', link: '/server/subs/cge/cge-maps' },
                { text: '特色游戏玩法介绍', link: '/server/subs/cge/cge-special' },
                { text: '场景所用音乐详情', link: '/server/subs/cge/cge-music' },
                { text: '广播播音员溯源', link: '/server/subs/cge/cge-speaker' }
              ] },
              { text: '常见问题', link: '/server/subs/cge/cge-support' },
              { text: '防无聊忠告', link: '/server/subs/cge/cge-warn' }
            ] },
            { text: 'Comet Java 私服', link: '/server/subs/java' }
          ] },
          { text: 'QQ群', link: '/server/qqgroup.md' },
          { text: '服务器资源包', link: '/server/resources.md' },
          { text: '服务器插件概览', link: '/server/plugins.md' },
          { text: '服务器备份系统', link: '/server/backup.md' },
          { text: '服务器官方组织', collapsed: true, items: [
            { text: '服务器管理组', link: '/server/group/admingroup.md' },
            { text: 'Comet 创作者团队', collapsed: true, items: [
              { text: '简介', link: '/server/group/creator/index.md' },
              { text: '成员招募活动', link: '/server/group/creator/creator-recruit.md' },
            ] },
            { text: '服务器税收组', link: '/server/group/taxgroup.md' },
          ] },
          { text: '服务器财务相关', link: '/server/account.md' },
          { text: '服务器相关链接', link: '/server/link.md' },
          { text: '常见问题', collapsed: true, items: [
            { text: '进不去服务器', link: '/server/help/wt.md' },
            { text: '服务器制度问题', link: '/server/help/sv.md' },
            { text: '网站无法访问解决方案', link: '/server/help/wangzhan.md' },
          ] },
        ]
      },
      {
        text: '游戏实用功能指南',
        collapsed: true,
        items: [
          { text: '服务器菜单', link: '/plugins/menu' },
          { text: '传送系统', link: '/plugins/tp' },
          { text: '联盟系统', link: '/plugins/union' },
          { text: '商店系统', link: '/plugins/shop' },
          { text: '经济管理', link: '/plugins/economy' },
          { text: '物流系统', link: '/plugins/express' },
          { text: '拍卖系统', link: '/plugins/auction' },
          { text: '悬赏系统', link: '/plugins/bounty' },
          { text: '寻仇系统', link: '/plugins/findplayer' },
          { text: '单挑系统', link: '/plugins/duel' },
          { text: '自动整理', link: '/plugins/autoclean' },
          { text: '自动钓鱼', link: '/plugins/autofishing' },
          { text: '通用货币', link: '/plugins/ucs' },
          { text: '移动光源', link: '/plugins/dynamiclights' },
          { text: '死亡掉落经济机制', link: '/plugins/ddm' },
          { text: '刷矿机', link: '/plugins/is-mining' },
          { text: '聊天消息样式', link: '/plugins/chat' },
          { text: '个性化图标', link: '/plugins/icon' }
        ]
      },
      {
        text: '服务器活动',
        collapsed: true,
        items: [
          {
            text: '兑换码', collapsed: true, items: [
              { text: '简介', link: '/activity/cdk/index.md' },
              { text: '往期兑换码汇总', collapsed: true, items: [
                  { text: '第一期', link: '/activity/cdk/cdk-01' },
                  { text: '第二期', link: '/activity/cdk/cdk-02' },
                  { text: '第三期', link: '/activity/cdk/cdk-03' },
                  { text: '第四期', link: '/activity/cdk/cdk-04' },
                  { text: '第五期', link: '/activity/cdk/cdk-05' },
                  { text: '第六期', link: '/activity/cdk/cdk-06' },
                  { text: '第七期', link: '/activity/cdk/cdk-07' },
                  { text: '第八期', link: '/activity/cdk/cdk-08' },
                  { text: '第九期', link: '/activity/cdk/cdk-09' },
                  { text: '第十期', link: '/activity/cdk/cdk-10' },
                  { text: '第十一期', link: '/activity/cdk/cdk-11' },
                  { text: '第十二期', link: '/activity/cdk/cdk-12' },
                  { text: '第十三期', link: '/activity/cdk/cdk-13' },
                  { text: '第十四期', link: '/activity/cdk/cdk-14' },
              ] },
              { text: '旧版兑换码', link: '/activity/cdk/cdk-old' },
              { text: '玩家贡献兑换码', collapsed: true, items: [
                { text: '简介', link: '/activity/cdk/cdk-playersum/index.md' },
                { text: '玩家贡献1', link: '/activity/cdk/cdk-playersum/cdk-player-01' },
                { text: '玩家贡献2', link: '/activity/cdk/cdk-playersum/cdk-player-02' },
              ] }
            ]
          },
          { text: 'Kongtouの靶场', link: '/activity/shootrange.md' },
          { text: '撕逼大会', link: '/activity/sibipvp' },
          { text: 'Special Week', link: '/activity/spweek/index.md' },
        ]
      },
      {
        text: '服务器机器人',
        collapsed: true,
        items: [
          { text: '简介', link: '/bot/index.md' },
          { text: '主要功能', link: '/bot/use-main' },
          { text: '更多功能', link: '/bot/use-others' }
        ]
      },
      {
        text: '服务器管理层',
        collapsed: true,
        items: [
          { text: '玩家守则', link: '/admin/rules' },
          { text: '管理员守则', link: '/admin/admin-rules' },
          { text: '黑名单违规介绍', link: '/admin/server-rules' },
          { text: '违规处理', link: '/admin/manage' },
          { text: '举报与申诉', link: '/admin/report' },
          { text: '玩家遗产处理规则', link: '/admin/playerleave' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'bilibili', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'web', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭搜索",
            }
          }
        }
      }
    }
  }
})
