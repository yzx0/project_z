---
title: Collapse
---
# Collapse

## 效果
<br/>
<collapse-demo></collapse-demo>

## 使用方法
```vue
data(){
  return{
    collapseArr:['2']
  }
}
<z-collapse :single="true" @select="select" :defaultSelect="collapseArr">
  <z-collapse-item title="1" name="1" >collapse1</z-collapse-item>
  <z-collapse-item title="2" name="2">collapse2</z-collapse-item>
  <z-collapse-item title="3" name="3">collapse3</z-collapse-item>
</z-collapse>
```
## 选项
collapse
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|single|每次只打开一个item|bool|true/false|false|
|defaultSelect|默认打开的item|array|-|-|
collapse-item
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|title|标题|string|-|-|
|name|item的唯一标识|string|-|-|
