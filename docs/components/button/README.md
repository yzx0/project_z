---
title: Button
---
# Button

## 效果
<br/>
<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

## 使用方法
```vue
<z-button>默认按钮</z-button>
<z-button icon="setting">默认按钮</z-button>
<z-button icon="setting" :loading="true">默认按钮</z-button>
<z-button iconPosition="right" icon="setting">默认按钮</z-button>
<!-- 按钮组 -->
<z-button-group>
  <z-button>默认按钮</z-button>
  <z-button icon="setting">默认按钮</z-button>
  <z-button icon="setting" :loading="true">默认按钮</z-button>
  <z-button iconPosition="right" icon="setting">默认按钮</z-button>
</z-button-group>
```
## 选项
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|icon|图标|string|-|-|
|loading|loading状态|bool|true/false|-|
|iconPosition|图标位置|string|left/right|left|