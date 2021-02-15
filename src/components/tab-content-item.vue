<template>
  <div class="tab-content-item" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZTabContentItem',
  inject:['eventBus'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      active:false
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',(data)=>{
      if(data === this.name){
        this.active = true
      }else{
        this.active = false
      }
    })
  } 
}
</script>
<style lang="scss">
  
</style>