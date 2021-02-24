---
title: Grid
---
# Grid

## 24网格
### 预览 
<br/>
<ClientOnly>
  <gride-demo></gride-demo>
</ClientOnly>

## 使用方法
```vue
  <div class="gride-demo">
    <z-row class="row-demo">
      <z-col span="24"><div class="test-box">24</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="12"><div class="test-box">12</div></z-col>
      <z-col span="12"><div class="test-box">12</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="8"><div class="test-box">8</div></z-col>
      <z-col span="8"><div class="test-box">8</div></z-col>
      <z-col span="8"><div class="test-box">8</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
    </z-row>
  </div>
  // 测试样式
  <style lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .row-demo{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .test-box{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      background-color: #f0f0f0;
      height: 50px;
      border: 1px solid #aaa;
    }
  </style>
```

## 设置gutter
gutter是每个col之间的间隙
### 预览 
<ClientOnly>
  <gride-demo2></gride-demo2>
</ClientOnly>

## 使用方法
```vue
  <div class="gride-demo">
    <z-row gutter="20" class="row-demo">
      <z-col span="24"><div class="test-box">24</div></z-col>
    </z-row>
    <z-row gutter="20" class="row-demo">
      <z-col span="12"><div class="test-box">12</div></z-col>
      <z-col span="12"><div class="test-box">12</div></z-col>
    </z-row>
    <z-row gutter="20" class="row-demo">
      <z-col span="8"><div class="test-box">8</div></z-col>
      <z-col span="8"><div class="test-box">8</div></z-col>
      <z-col span="8"><div class="test-box">8</div></z-col>
    </z-row>
    <z-row gutter="20" class="row-demo">
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
    </z-row>
  </div>
  // 测试样式
  <style lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .row-demo{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .test-box{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      background-color: #f0f0f0;
      height: 50px;
      border: 1px solid #aaa;
    }
  </style>
```

## 设置offset
### 预览 
<ClientOnly>
  <gride-demo3></gride-demo3>
</ClientOnly>

## 使用方法
```vue
  <div class="gride-demo">
    <z-row class="row-demo">
      <z-col span="20" offset="4"><div class="test-box">20</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="8"><div class="test-box">8</div></z-col>
      <z-col span="8" offset="8"><div class="test-box">8</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="6" offset="2"><div class="test-box">6</div></z-col>
      <z-col span="6" offset="2"><div class="test-box">6</div></z-col>
      <z-col span="6" offset="2"><div class="test-box">6</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="4"><div class="test-box">4</div></z-col>
      <z-col span="4" offset="6"><div class="test-box">4</div></z-col>
      <z-col span="4" offset="6"><div class="test-box">4</div></z-col>
    </z-row>
  </div>
  // 测试样式
  <style lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .row-demo{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .test-box{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      background-color: #f0f0f0;
      height: 50px;
      border: 1px solid #aaa;
    }
  </style>
```

## 设置响应式
### 预览 
<br/>
<ClientOnly>
  <gride-demo4></gride-demo4>
</ClientOnly>

## 使用方法
```vue
  <div class="gride-demo">
    <z-row class="row-demo">
      <z-col span="24" ><div class="test-box">24</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="12" :phone="{span:24}"><div class="test-box">12</div></z-col>
      <z-col span="12" :phone="{span:24}"><div class="test-box">12</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col :phone="{span:12}" :ipad="{span:12}" :narrow-pc="{span:8}" :pc="{span:18}" :wide-pc="{span:2}"><div class="test-box">1</div></z-col>
      <z-col :phone="{span:12}" :ipad="{span:12}" :pc="{span:6}" :wide-pc="{span:22}"><div class="test-box">2</div></z-col>
    </z-row>
  </div>
  // 测试样式
  <style lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .row-demo{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .test-box{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      background-color: #f0f0f0;
      height: 50px;
      border: 1px solid #aaa;
    }
  </style>
```

## 选项
### row
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|gutter|设置间距|number/string|-|-|
|align|col的位置|number/string|left/right/center|-|
### col
|参数|说明|类型|可选值|默认值
|---|---|---|---|---|---|
|span|col占的宽度|number/string|-|-|
|offset|col的偏移量|number/string|-|-|
|phone|屏幕<=576px|object|span/offset|-|
|ipad|577px<=屏幕<=768px|object|span/offset|-|
|narrowPc|769px<=屏幕<=992px|object|span/offset|-|
|pc|993px<=屏幕<=1200px|object|span/offset|-|
|widePc|屏幕<=1201px|object|span/offset|-|

## 注意
如果发现col自动换行了，请设置:
```
  *{
    box-sizing: border-box;
  }
```