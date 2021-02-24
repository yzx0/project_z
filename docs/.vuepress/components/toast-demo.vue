<template>
  <div>
    <z-button @click="$toast({message:'message',btnText:'关闭',position:'top'})">上方弹出</z-button>
    <z-button @click="$toast({message:'message',btnText:'关闭'})">中间弹出</z-button>
    <z-button @click="$toast({message:'message',btnText:'关闭',position:'bottom'})">下方弹出</z-button>
  </div>
</template>
<script>
import Vue from 'vue'
import toast from '../../../src/toast-plugin.js'
import Button from '../../../src/components/button'
Vue.use(toast)
export default {
  components:{
    'z-button':Button
  },
}
</script>