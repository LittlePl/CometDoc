---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Comet 文档站"
  text: "服务器知识库"
  tagline: 这里是服务器的知识库，记载着服务器的各个方面。
  actions:
    - theme: brand
      text: 进入正文
      link: /server/index.md
    - theme: alt
      text: 服务器规则
      link: /admin/rules
    - theme: alt
      text: 官网
      link: https://www.mccomet.top/

features:
  - icon: ➡️
    title: 进一步了解服务器
    details: 了解服务器的详细信息，包括服务器的运行情况、功能、规则等。
    link: /server/
  - icon: 🔧
    title: 服务器功能指南
    details: 了解服务器的详细功能，包括插件、命令等，并学会使用。
    link: /manual/plugins/menu
  - icon: 📚
    title: 服务器档案馆
    details: 珍藏服务器发展历程，记录重大活动、玩家贡献与历史瞬间，传承服务器文化。
    link: /archive/activity/cdk
  - icon: ⚖️
    title: 查阅管理条例
    details: 了解 Comet 服务器如何规定并打击一系列违规行为，有利于自己正常游玩并适当维权。
    link: /admin/rules
---

## 我们的支持者

<SponsorList :sponsors="mySponsors" />

<style>
  :root {
    --vp-home-hero-name-color: #2c4a8b;
  }
</style>

<script setup>
  import SponsorList from '../.vitepress/components/SponsorList.vue'

  // 这里定义你的赞助者数据，你也可以把它抽离到一个单独的 ts/json 文件中引入
  const mySponsors = [
    {
      name: '鸡蛋',
      avatar: 'https://q.qlogo.cn/g?b=qq&nk=3529336723&s=160',
      message: '坚持，创造奇迹'
    },
    {
      name: 'HereIsSoil',
      avatar: 'https://q.qlogo.cn/g?b=qq&nk=3958656941&s=160',
      message: '助服务器长命百岁'
    },
    {
      name: 'BarterMoss63052',
      avatar: 'https://q.qlogo.cn/g?b=qq&nk=2044298043&s=160',
      message: '请输入文本'
    }
  ]
</script>