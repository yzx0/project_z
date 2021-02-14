import Vue from 'vue'
import App from './App.vue'
import toast from './toast-plugin.js'
Vue.config.productionTip = false
Vue.use(toast)
new Vue({
  render: h => h(App),
}).$mount('#app')


// 单元测试
// import Button from '@/components/button'
// import chai from 'chai'
// import spies from 'chai-spies'
// const expect = chai.expect
// chai.use(spies)
// {
//   const ButtonConstruction = Vue.extend(Button)
//   const vm = new ButtonConstruction({
//     propsData:{
//       icon:'setting'
//     }
//   })
//   vm.$mount()
//   let use = vm.$el.querySelector('use')
//   expect(use.getAttribute('xlink:href')).to.eq('#i-setting')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const ButtonConstruction = Vue.extend(Button)
//   const vm = new ButtonConstruction({
//     propsData:{
//       icon:'setting',
//       loading:true
//     }
//   })
//   vm.$mount()
//   let use = vm.$el.querySelector('use')
//   expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const div = document.createElement(div)
//   document.body.appendChild(div)
//   const ButtonConstruction = Vue.extend(Button)
//   const vm = new ButtonConstruction({
//     propsData:{
//       icon:'setting',
//       loading:true
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   div.remove()
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const div = document.createElement(div)
//   document.body.appendChild(div)
//   const ButtonConstruction = Vue.extend(Button)
//   const vm = new ButtonConstruction({
//     propsData:{
//       icon:'setting',
//       iconPosition:'right'
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   div.remove()
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const ButtonConstruction = Vue.extend(Button)
//   const vm = new ButtonConstruction()
//   vm.$mount()
//   const spy = chai.spy(function(){})
//   vm.$on('click',spy)
//   vm.$el.click()
//   expect(spy).to.have.been.called()
//   vm.$el.remove()
//   vm.$destroy()
// }