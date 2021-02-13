<template>
  <div class="sider" :style="{width:`${this.width}px`}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZSider',
  props:{
    width:{
      type:[Number,String],
      default:200
    }
  }
}
</script>
<style lang="scss" scoped>
  .sider{}
</style>