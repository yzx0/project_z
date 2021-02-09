<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZButtonGroup',
  mounted(){
    for (const item of this.$el.children) {
      let name = item.nodeName.toLowerCase()
      if(name !== 'button'){
        console.warn(`z-button-group的直接子元素为z-button,但是你使用了${name}`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .z-button-group{
    display: flex;
    align-items: center;
    >.z-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child{
        border-radius: $border-radius 0 0 $border-radius;
      }
      &:last-child{
        border-radius: 0 $border-radius $border-radius 0;
      }
      &:hover{
        position: relative;
        z-index: 9;
      }
    }
  }
</style>