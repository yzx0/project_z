---
title: Layout
---
# Layout

## 效果
<br/>
<layout-demo></layout-demo>

## 使用方法
```vue
<z-layout style="height:100vh;margin:0;">
  <z-header style="height:50px;background:lightskyblue;">header</z-header>
  <z-content style="background:deepskyblue;">content</z-content>
  <z-footer style="height:50px;background:lightskyblue;">footer</z-footer>
</z-layout>   
```
## 效果
<br/>
<layout-demo2></layout-demo2>

## 使用方法
```vue
<z-layout style="height:100vh;margin:0;">
  <z-layout>
    <z-header style="height:50px;background:lightskyblue;">header</z-header>
    <z-layout>
      <z-sider style="background:cornflowerblue;" width="200">sider</z-sider>
      <z-content style="background:deepskyblue;">content</z-content>
    </z-layout>
    <z-footer style="height:50px;background:lightskyblue;">footer</z-footer>
  </z-layout>
</z-layout> 
```
## 效果
<br/>
<layout-demo3></layout-demo3>

## 使用方法
```vue
<z-layout style="height:100vh;margin:0;">
  <z-sider style="background:cornflowerblue;" width="300">sider</z-sider>
  <z-layout>
    <z-header style="height:50px;background:lightskyblue;">header</z-header>
    <z-content style="background:deepskyblue;">content</z-content>
    <z-footer style="height:50px;background:lightskyblue;">footer</z-footer>
  </z-layout>
</z-layout> 
```
## 选项
sider
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|width|side的宽度|number/string|-|200|