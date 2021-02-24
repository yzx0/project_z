  
const path = require('path')
module.exports = {
  base: '/project_z/',
  title: 'ZUI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button/',
          '/components/grid/',
          '/components/tabs/',
          '/components/input/',
          '/components/layout/',
          '/components/toast/',
          '/components/popover/',
          '/components/collapse/',
        ]
      },
    ]
  },
  sass:{
    includePaths: [path.join(__dirname, '../../src/styles')]
  }
}