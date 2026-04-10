---
next: 
  text: 'Comet 创作者团队'
  link: 'server/group/creator'
---

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
      服务器已稳定运营3年余，运营团队已合作4年余，主要成员均有运营服务器多年经验，可持续为服务器运行保驾护航。<br>
      为冒险家们带来快乐，是我们架设 Comet 陆上彗星云服务器群组的初衷。原班人马，倾力打造。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members />
</VPTeamPage>

:::tip
你还可以在以下地方找到我们：

- [Comet 服务器官网 - 玩家团体](https://www.mccomet.top/team.html#admin-group)
:::

## 管理层财务报表
:::info
**我们是完全的公益服务器。**我们承诺玩家赞助的金额会全款用在服务器上，因此如果屏幕前的您有能力的话可以向我们考虑[赞助](https://www.mccomet.top/donate.html)，以支持服务器运营。在此感谢您。
:::
### 服务器财务明细
为保证服务器的赞助记录是公开透明的，我们公开了财务报表，任何玩家都可查看。您可在这里查看服务器资金的用途等：

[https://www.kdocs.cn/l/ctLdxYDpCWw1](https://www.kdocs.cn/l/ctLdxYDpCWw1)

### 服主缴费台账
服务器管理层的所有服主会在每个月第二周的周末开始统一缴纳服务器月租，由 **@Yanda** 负责统筹，并在每月结束之前为服务器续费。

以下是我们的缴费台账，您可在此可查询各个服主每月的缴费情况：

[https://web.wps.cn/wo/sl/v33AdR9J?app_id=aC4VuRQqHF4GsSczIoaov](https://web.wps.cn/wo/sl/v33AdR9J?app_id=aC4VuRQqHF4GsSczIoaov)

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