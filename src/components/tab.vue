<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props:{
    selected:{
      type:[Number,String],
      required:true
    }
  },
  data(){
    return{
      eventBus:new Vue()
    }
  },
  provide(){
    return{
      eventBus:this.eventBus
    }
  },
  mounted(){
    console.log()
    this.$children.forEach(vm => {
      if(vm.$options.name === 'ZTabNav'){
        vm.$children.forEach(childVm=>{
          if(childVm.name && childVm.name === this.selected){
            this.eventBus.$emit('update:selected',this.selected,childVm)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss">
  
</style>