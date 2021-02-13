<template>
  <div :class="rowClass" :style="{'margin': `0 ${-gutter/2}px`}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZRow',
  props:{
    gutter:{
      type:[Number,String]
    },
    align:{
      type:String,
      validator(val){
        return ['left','right','center'].includes(val)
      }
    }
  },
  mounted(){
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
  },
  computed:{
    rowClass(){
      return[
        'z-row',
        this.align && `align-${this.align}`
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .z-row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{justify-content: flex-start;}
    &.align-right{justify-content: flex-end;}
    &.align-center{justify-content: center;}
  }
</style>