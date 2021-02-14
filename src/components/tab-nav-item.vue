<template>
  <div class="tab-nav-item" @click="eventBus.$emit('update:selected',name)">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject:['eventBus'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      active:false
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',(data)=>{
      if(data === this.name){
        console.log(`nav我是${data}`)
        this.active = true
      }else{
        console.log(`nav我不是${data}`)
        this.active = false
      }
    })
  }
}
</script>
<style lang="scss">
  .tab-nav-item{
    padding: 0 2em;
  }
</style>