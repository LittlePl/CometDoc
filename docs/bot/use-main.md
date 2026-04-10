# 主要功能
玩家需**在QQ群中**，**发送指定的消息**来触发机器人。机器人被触发后将根据玩家发送的消息，执行一系列预设好的事件。以下是机器人目前支持的所有功能和使用方法：

## 添加白名单 <Badge type="info" text="入服必备" />
在群聊中发送`绑定<游戏名>`可将该游戏ID添加至服务器的白名单之中，其中`<游戏名>`更换为你自己的游戏名。
:::warning 注意
消息中不要附带额外的符号（如 `<>` `""` 等），且**游戏名需要区分大小写**。
:::
- 示例：

<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '绑定 Player00336699' },
    { userClass: 'user-1', text: '绑定成功：Player00336699' }
  ]" />
</ClientOnly> 

- 错误示例：
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '绑定“Player00336699”' },
    { userClass: 'user-2', text: '绑定游戏名：Player00336699' },
    { userClass: 'user-2', text: '绑定棍木' },
    { userClass: 'user-2', text: '绑定后面加上游戏名就可以了啊？' }
  ]" />
</ClientOnly> 

像这样你是不会得到任何回应的。

## 删除白名单
发送`解绑` `解除绑定` `删除绑定`可将自己绑定过的游戏ID从服务器白名单之中移除，以便于重新绑定。通常用于误绑定的情况。
- 示例：
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '删除绑定' },
    { userClass: 'user-1', text: '已删除你的白名单。' }
  ]" />
</ClientOnly> 

:::warning 注意
发送删除绑定命令时，您无需附带自己的游戏名。
:::

## 快捷查询绑定
发送`查询绑定`可查询自己的QQ号绑定了什么游戏名。需要自己的游戏名已绑定。
- 示例：
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '查询绑定' },
    { userClass: 'user-1', text: '这边查询到你的XboxID为：Player00336699' }
  ]" />
</ClientOnly> 

## 查询在线人数（查服）
发送`查服` `list` `李斯特`可获取主服务器（生存服务器）的玩家在线情况。
- 示例：

<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: 'list' },
    { userClass: 'user-1', text: '生存服务器目前有 6/20 个玩家在线：Snowball6049, YonderSoap8354, yingmen2961, PetersAnya, wanxiaojian, aiaiha123' }
  ]" />
</ClientOnly> 

:::tip
玩家触发此功能后，机器人会向游戏内的在线玩家发送有趣的提示。
:::

## 查询服务器信息
发送`服务器信息` `服务器`可查询主服务器的一些基本信息和服务器主机信息，如游戏版本、游戏TPS等。
- 示例：
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '服务器信息' },
    { userClass: 'user-1', text: '以下是生存服务器的一些信息：\n游戏版本：v1.21.132\n游戏协议：898\n服务器天气：晴天\n游戏时间：5794天\n服务端已运行：3.34小时\n平均TPS: 19.96\n平均MSPT: 49.90\n在线2人' }
  ]" />
</ClientOnly> 

## 查询服务器TPS与MSPT
发送`TPS`可查询主服务器的TPS与MSPT等信息。
- 示例：
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: 'TPS' },
    { userClass: 'user-1', text: '生存服务器TPS(tick/s)：\n实时TPS：20.00 \n平均TPS：19.87 \n生存服务器MSPT(ms)：\n实时MSPT：65 \n平均MSPT：50.04 \n在线1人' }
  ]" />
</ClientOnly>
<br>
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: 'TPS' },
    { userClass: 'user-1', text: '生存服务器TPS(tick/s)：\n实时TPS：8.58 \n平均TPS：18.74 \n生存服务器MSPT(ms)：\n实时MSPT：479 \n平均MSPT：97.09 \n在线19人' }
  ]" />
</ClientOnly> 

## 查询主机信息
发送`主机信息` `主机`可查询主机运行时间等信息。
- 示例：
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '主机' },
    { userClass: 'user-1', text: '服务器主机信息：\nCPU占用: 2.29%\nCPU核数：4\n内存占用: 4.62G/8.00G 57.75%\n主机已运行：275.95小时' }
  ]" />
</ClientOnly> 

## 注意事项
1. 在使用绑定命令时，无需关注XboxID有空格的问题，直接在命令后加上您的XboxID即可。

2. 若绑定过白名单的玩家离开了群聊，机器人会对该玩家进行解绑操作，也就是说玩家若想正常游玩服务器，必须保持在群聊中，否则将不能加入服务器。

<script setup>
import ChatBubble from '../../.vitepress/components/ChatBubble.vue';
</script>