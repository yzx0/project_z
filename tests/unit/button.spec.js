import chai,{ expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Button from '../../src/components/button.vue'
import sinon from 'sinon'
chai.use(sinonChai)
describe('button.vue',()=>{
  it('按钮组件存在',()=>{
    expect(Button).to.exist
  })
  it('可以设置icon',()=>{
    const wrapper = mount(Button,{
      propsData:{
        icon:'setting'
      }
    })
    const el = wrapper.vm.$el
    expect(el.querySelector('use').getAttribute('xlink:href')).to.eq('#i-setting')
  })
  it('可以设置loading',()=>{
    const wrapper = mount(Button,{
      propsData:{
        icon:'setting',
        loading:true
      }
    })
    const els = wrapper.vm.$el.querySelectorAll('use')
    expect(els.length).to.eq(1)
    expect(els[0].getAttribute('xlink:href')).to.eq('#i-loading')
  })
  it('icon默认在左边',()=>{
    const wrapper = mount(Button, {
      propsData: {
        icon: 'setting',
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('left')).to.eq(true)
  })
  it('可以通过iconPosition改变icon位置',()=>{
    const wrapper = mount(Button,{
      propsData:{
        icon:'setting',
        iconPosition:'right'
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('right')).to.eq(true)
  })
  it('点击按钮出发 click事件',()=>{
    const wrapper = mount(Button,{
      propsData:{
        icon:'setting',
        iconPosition:'right'
      }
    })
    const vm = wrapper.vm
    const spy = sinon.spy()
    vm.$on('click',spy)
    vm.$el.click()
    expect(spy).to.be.called
  })
})