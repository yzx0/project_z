---
title: Popover
---
# Popover

## 效果
<br/>
<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>
## 使用方法
按钮为默认插槽
内容为具名插槽:popover-content
```vue
<z-popover position="top">
  <template slot="popover-content">
    <div>
      popover content popover content popover content popover content popover content popover content
    </div>
  </template>
  <z-button>top popover</z-button>
</z-popover>
<!-- hover触发 -->
<z-popover position="top" trigger="hover">
  <template slot="popover-content">
    <div>
      1
    </div>
  </template>
  <z-button>top popover</z-button>
</z-popover>
```
## 选项
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|position|位置|string|top/bottom/left/right|top|
|trigger|触发方式|string|click/hover|click|