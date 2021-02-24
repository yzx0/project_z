---
title: Toast
---
# Toast
## 效果
<br/>
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

## 使用方法
```vue
import Vue from 'vue'
import toast from '../../../src/toast-plugin.js'
Vue.use(toast)

<z-button @click="$toast({message:'message',btnText:'关闭',position:'top'})">上方弹出</z-button>
<z-button @click="$toast({message:'message',btnText:'关闭'})">中间弹出</z-button>
<z-button @click="$toast({message:'message',btnText:'关闭',position:'bottom'})">下方弹出</z-button>
```
## 选项
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|autoClose|自动关闭|bool|true/false|true|
|duration|弹窗展示时间|number/string|-|3|
|message|弹窗内容|number/string|-|toast|
|btnText|关闭按钮内容|number/string|-|关闭|
|callback|关闭按钮回调|function|-|-|
|enableHtml|弹窗内容是否识别html|bool|-|false|
|position|弹窗位置|string|top/bottom/center|center|