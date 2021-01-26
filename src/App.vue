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
  </div>
</template>

<script>
import Button from '@/components/button'
import ButtonGroup from '@/components/button-group'
export default {
  name: 'App',
  components: {
    'z-button':Button,
    'z-button-group':ButtonGroup
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
.button{display: flex;&>.z-button{margin-right: 10px;}}
</style>
