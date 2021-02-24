<template>
  <div class="tab-nav" ref="nav">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>
<script>
export default {
  name:'ZTabNav',
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(name,vm)=>{
      if(vm){
        this.updateLinePosition(vm)
      }
    })
  },
  methods:{
    updateLinePosition (selectedVm) {
      let {width, left} = selectedVm.$el.getBoundingClientRect()
      let {left: left2} = this.$refs.nav.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - left2}px`
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/global';
  .tab-nav{
    display: flex;
    min-height: 50px;
    position: relative;
  }
  .action-wrapper{
    margin-left: auto;
  }
  .line{
    transition: all .3s;
    position: absolute;
    bottom: 0;
    display: block;
    height: 1px;
    background-color: $blue;
  }
</style>