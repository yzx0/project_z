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
    this.eventBus.$emit('update:selected',this.selected)
  }
}
</script>
<style lang="scss">
  
</style>