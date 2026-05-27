# 服务器资源包
## 简介
资源包可以为服务器提供很多东西，同时不改变游戏的任何玩法，包括但不限于文本层次（译名层次）、音频层次（背景音乐、可播放的录音）和材质层次（通常我们不会去修改）。这些内容会根据服务器的需要被服务器自行调用，并让玩家能在游戏内直观地感受到。

Comet 生存服务器配备有译名修正资源包、独家唱片包、背景音乐包等资源包。通过这个服务器基础，你可以其他玩家共享媒体资源，并且能够举办更丰富的活动，甚至多整点儿活。

<div align="center">
	<img src="https://www.helloimg.com/i/2026/04/06/69d32a3498af1.png" width="500x" alt="服务器资源包"/>
</div>

## 资源包列表
Comet 陆上彗星服务器拥有以下资源包：
::: tip 提示
点击卡片可以查看资源包详情和更新日志。
:::
<ResourceMeta
	name="Comet 译名修正资源包"
	icon="https://cdn.ipfsscan.io/weibo/thumbnail/008EsglKly1id5akbx98lj30u00u0dif.jpg"
	tip="适配 1.26.10"
	createdAt="2022-02-16"
	size="1.4"
	desc="Comet 服务器的译名修正资源包，用于修正游戏内的译名问题。"
/>
<ResourceMeta
	name="Comet 服务器唱片包"
	icon="https://cdn.ipfsscan.io/weibo/thumbnail/008EsglKly1id5akc32cwj30u00u0q5p.jpg"
	tip="2025-3-3 | 第十二次更新"
	createdAt="2022-02-16"
	size="41.6"
	desc="Comet 服务器的唱片包，用于修改游戏内的唱片资源和唱片材质。"
	link="./resources/musicdisc"
/>
<ResourceMeta
	name="Comet 环境资源包"
	icon="https://cdn.ipfsscan.io/weibo/thumbnail/008EsglKly1id5akbscquj30u00u0gq2.jpg"
	createdAt="2022-08-13"
	size="8.0"
	desc="此资源包用于向服务器添加或修改游戏中的音频或材质。"
/>
<ResourceMeta
	name="Comet 死亡播报资源包"
	icon="https://cdn.ipfsscan.io/weibo/thumbnail/008EsglKly1id5akbx98lj30u00u0dif.jpg"
	createdAt="2024-03-30"
	size="0.1"
	desc="用于修改游戏内的死亡提示内容，使其变得更生动趣味。"
/>
<ResourceMeta
	name="Comet 声优包"
	icon="https://cdn.ipfsscan.io/weibo/thumbnail/008EsglKly1id5apf8gu7j30u00u0wij.jpg"
	createdAt="2023-06-16"
	size="1.6"
	desc="用于向服务器提供一些音频资源，供一些特色设施使用。"
/>

## 服务器资源包通用情景
:::tip
以下情况都是服务器端的设置，玩家端的设置不会影响到服务器端的资源包。
:::

### 配备了资源包的服务器
配备了资源包的服务器，玩家在连接至服务器时，会遇到一个弹窗通知，**提示是否要下载资源包再加入。**

### 仅利用资源包为玩家提供媒体资源的服务器
对于仅利用资源包为玩家提供媒体资源的服务器，如 Comet 生存服务器，通常不会要求玩家强制下载。

如果玩家不想使用服务器资源包，但却在加入服务器时下载了资源包，可以打开游戏设置，找到`存储`设置，下载的资源包都在`缓存数据`中存着，删除这些资源包即可。

### 必须依赖资源包才能正常运行的服务器
对于必须依赖资源包才能正常运行的**模组服务器**，例如 Comet 枪战服务器，则需要在连接服务器的时候必须下载资源包。这类服务器提供的资源包，可能会对游戏界面和玩法的修改相当的多，以至于玩家使用自己资源包的体验会受到影响。

### 部分服务器会禁用玩家自己的资源包
部分服务器也会在让玩家使用服务器资源包的同时暂时禁用玩家自己的资源包。通常来说服务器这么做的目的，一方面是因为服务器不想让玩家因为使用了自己的资源包而使实际游戏体验不符合预期，另一方面是防止玩家使用自己的特制资源包，通过修改材质，从而达到作弊的目的。

## 常见问题
#### Q：在连接服务器并下载服务器资源包的时候，进度条一直卡着不动。

- A：这种情况是服务器端出问题了，联系管理员重启服务器，然后重新连接服务器即可。

<script setup>
	import ResourceMeta from '../../.vitepress/components/ResourceMeta.vue';
</script>