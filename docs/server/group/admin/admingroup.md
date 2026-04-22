<style>
  .vp-doc img {
    margin: 0;
  }
</style>

# 服务器管理组

## 简介与成员明细

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>陆上彗星管理组</template>
    <template #lead>
      我们是一个志趣相投的群体。服务器已稳定运营3年余，运营团队已合作4年余，主要成员均有运营服务器多年经验，可持续为服务器运行保驾护航。<br>
      为冒险家们带来快乐，是我们架设 Comet 陆上彗星云服务器群组的初衷。原班人马，倾力打造。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members />
</VPTeamPage>

:::tip
你还可以在以下地方找到我们：

- [Comet 服务器官网 - 玩家团体](https://www.mccomet.top/team.html#admin-group)
:::

## 服务器财务相关
[点我查看详情](/server/account.md)

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=2985143951&s=640',
    name: 'Yanda',
    title: 'liyanda0349',
    org: "服主",
    desc: "QQ:2985143951<br>邮箱:2985143951@qq.com"
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=2186840955&s=640',
    name: 'Kongtou',
    title: 'kongtou8211',
    org: "服主",
    desc: "QQ:2186840955<br>邮箱:2186840955@qq.com"
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=2112839310&s=640',
    name: 'YanziHa0',
    title: 'YanziHa0',
    org: "服主",
    desc: "QQ:2112839310"
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=2132704105&s=640',
    name: 'DanWeiXianYu',
    title: 'DanWeiXianYu',
    org: "服主",
    desc: "QQ:2132704105"
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=168897951&s=640',
    name: 'Yhrfi',
    title: 'Yhrfi1314',
    org: "服主",
    desc: "QQ:168897951"
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=2421583465&s=640',
    name: '无情兰剑',
    title: 'wuqinlanjian123',
    org: "管理员",
    desc: "QQ:2421583465"
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=939194395&s=640',
    name: 'FourWater',
    title: 'FourWater909633',
    org: "管理员",
    desc: "QQ:939194395"
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=1689492644&s=640',
    name: 'MerryGo',
    title: 'MysticalMite786',
    org: "白名单助理",
    desc: "QQ:1689492644"
  },
]
</script>