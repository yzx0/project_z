<template>
  <div id="app">
    <div class="button">
      <z-button>默认按钮</z-button>
      <z-button @click="loading1 = !loading1" icon="setting" :loading='loading1' icon-position='left'>默认按钮</z-button>
      <z-button @click="loading2 = !loading2" icon="setting" :loading='loading2' icon-position='right'>默认按钮</z-button>
      <z-button-group>
        <z-button icon="left" icon-position='left'>上一页</z-button>
        <z-button>更多</z-button>
        <z-button icon="right" icon-position='right'>下一页</z-button>
      </z-button-group>
    </div>
    <z-input value="张三"></z-input>
    <z-input value="张三" :disabled="true"></z-input>
    <z-input value="张三" :readonly="true"></z-input>
    <z-input value="张三" error="密码输入错误"></z-input>
  </div>
</template>

<script>
import Button from '@/components/button'
import ButtonGroup from '@/components/button-group'
import Input from '@/components/input'
export default {
  name: 'App',
  components: {
    'z-button':Button,
    'z-button-group':ButtonGroup,
    'z-input':Input
  },
  data(){
    return{
      loading1:false,
      loading2:false
    }
  }
}
</script>

<style lang="scss">
#app>*{margin: 20px;}
.button{display: flex;&>.z-button{margin-right: 10px;}}
</style>

