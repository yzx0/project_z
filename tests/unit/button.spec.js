import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '../../src/components/button.vue'

describe('button.vue',()=>{
  it('按钮组件存在',()=>{
    const button = shallowMount(Button)
    expect(button).to.exist
  })
})