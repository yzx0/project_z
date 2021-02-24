---
title: 快速上手
---

# 快速上手

本章节待完善

## 安装

请参考 [安装](../install/) 章节


## Hello World

```javascript
import {Button} from 'project_z-1-1'
import 'project_z-1-1/dist/projectz.css'
import 'project_z-1-1/src/svg.js'

new Vue({
  el: '#app',
  components: {
    'z-button':Button
  }
})
```