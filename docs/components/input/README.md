---
title: Input
---
# Input

## 效果
<br/>
<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

## 使用方法
```vue
  <z-input value="张三" @input="inputEvent" @focus="focusEvent" @blur="blurEvent" @change="changeEvent"></z-input>
  <z-input value="张三" :disabled="true"></z-input>
  <z-input value="张三" :readonly="true"></z-input>
  <z-input value="张三" error="密码输入错误"></z-input>
  <div>
    <z-input v-model="name"></z-input>
    <p>{{name}}</p>
  </div>
```
## 选项
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|value|输入框的值|number/string|-|-|
|input/focus/blur/change|事件名|function|-|-|