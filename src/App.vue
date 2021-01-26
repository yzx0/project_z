<template>
  <div id="app">
    <div class="button">
      <ZButton>默认按钮</ZButton>
      <ZButton icon="setting" :loading='true' icon-position='left'>默认按钮</ZButton>
      <ZButton icon="setting" :loading='true' icon-position='right'>默认按钮</ZButton>
    </div>
  </div>
</template>

<script>
import ZButton from '@/components/button'
export default {
  name: 'App',
  components: {
    ZButton
  }
}
</script>

<style lang="scss">
.button{display: flex;.z-button{margin-right: 10px;}}
</style>
