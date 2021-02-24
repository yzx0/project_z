---
title: Tabs
---
# Tabs
## 效果
<br/>
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

## 使用方法

```vue
data(){
  return{
    collapseArr:['1']
  }
}

<z-tab :selected="selectedTab">
  <z-tab-nav>
    <template slot="action">
      <z-button>action</z-button>
    </template>
    <z-nav-item name="tab1"><z-icon name="setting" class="icon"></z-icon>tab1</z-nav-item>
    <z-nav-item name="tab2" :disable="true">tab2</z-nav-item>
    <z-nav-item name="tab3">tab3</z-nav-item>
  </z-tab-nav>
  <z-tab-content>
    <z-content-item name="tab1">content1</z-content-item>
    <z-content-item name="tab2">content2</z-content-item>
    <z-content-item name="tab3">content3</z-content-item>
  </z-tab-content>
</z-tab>

.icon{
  margin-right: 0.5em;
}
```
## 选项
### tab
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|selected|默认选中的tab，必传项|number/string|-|-|
### nav-item
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|name|nav-item的唯一标识，必传项|number/string|-|-|
|disable|禁止选择|bool|true/false|false|
### content-item
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|name|content-item的唯一标识，必传项|number/string|-|-|
### tab-nav
可以加入一个具名插槽，来实现在tab-nav右边添加按钮
插槽名:action

```vue
<z-tab-nav>
  <template slot="action">
    <z-button>action</z-button>
  </template>
</z-tab-nav>
```