<template>
  <div id="app">
    <div class="button">
      <ZButton>hi</ZButton>
      <ZButton icon="setting" position='left'>hi</ZButton>
      <ZButton icon="loading" position='right'>hi</ZButton>
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
