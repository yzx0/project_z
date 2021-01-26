<template>
  <div id="app">
    <div class="button">
      <ZButton>默认按钮</ZButton>
      <ZButton @click="loading1 = !loading1" icon="setting" :loading='loading1' icon-position='left'>默认按钮</ZButton>
      <ZButton @click="loading2 = !loading2" icon="setting" :loading='loading2' icon-position='right'>默认按钮</ZButton>
    </div>
  </div>
</template>

<script>
import ZButton from '@/components/button'
export default {
  name: 'App',
  components: {
    ZButton
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
.button{display: flex;.z-button{margin-right: 10px;}}
</style>
