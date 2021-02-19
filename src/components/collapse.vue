<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'collapse',
  props:{
    single:{
      type:Boolean,
      default:false
    },
    defaultSelect:{
      type:Array
    }
  },
  data(){
    return{
      eventBus:new Vue(),
      selectArr:[]
    }
  },
  mounted(){
    this.eventBus.$emit('select',JSON.parse(JSON.stringify(this.defaultSelect)))
    this.eventBus.$on('open',name=>{
      let selectArrCopy
      if(this.single){
        selectArrCopy = [name]
      }else{
        this.selectArr.push(name)
        selectArrCopy = JSON.parse(JSON.stringify(this.selectArr))
      }
      this.eventBus.$emit('select',selectArrCopy)
      this.$emit('select',selectArrCopy)
    })
    this.eventBus.$on('close',name=>{
      let selectArrCopy
      if(this.single){
        selectArrCopy = [name]
      }else{
        let index = this.selectArr.indexOf(name)
        this.selectArr.splice(index,1)
        selectArrCopy = JSON.parse(JSON.stringify(this.selectArr))
      }
      this.eventBus.$emit('select',selectArrCopy)
      this.$emit('select',selectArrCopy)
    })
  },
  provide(){
    return{
      eventBus:this.eventBus
    }
  },
}
</script>
<style lang="scss" scoped>
  .collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>