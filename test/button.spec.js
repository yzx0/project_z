import {expect} from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '../src/components/button.vue'
{
  // const ButtonConstruction = Vue.extend(Button)
  // const vm = new ButtonConstruction({
  //   propsData:{
  //     icon:'setting'
  //   }
  // })
  // vm.$mount()
  // let use = vm.$el.querySelector('use')
  // expect(use.getAttribute('xlink:href')).to.eq('#i-setting')
  // vm.$el.remove()
  // vm.$destroy()
  let button = shallowMount(Button)
  expect(button).to.exist
}
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