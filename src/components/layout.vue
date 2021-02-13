<template>
  <div :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZLayout',
  mounted(){
    console.log(this.$children[0].$options.name);
    this.$children.forEach(vm=>{
      if(vm.$options.name === 'ZSider'){
        this.layoutClass[0]['has-sider'] = true
      }
    })
  },
  data() {
    return {
      layoutClass:[
        {'has-sider':false},
        'layout'
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
  .layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.has-sider{flex-direction: row;}
  }
</style>