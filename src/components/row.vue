<template>
  <div class="z-row" :style="{'margin': `0 ${-gutter/2}px`}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZRow',
  props:{
    gutter:{
      type:[Number,String]
    }
  },
  mounted(){
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
  .z-row{
    display: flex;
  }
</style>