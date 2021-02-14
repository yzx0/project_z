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
        console.log(`content我是${data}`)
        this.active = true
      }else{
        console.log(`content我不是${data}`)
        this.active = false
      }
    })
  } 
}
</script>
<style lang="scss">
  
</style>