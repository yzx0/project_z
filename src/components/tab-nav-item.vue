<template>
  <div class="tab-nav-item" :class="navItemClass" @click="navItemClick">
    <div class="line"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZTabNavItem',
  inject:['eventBus'],
  props:{
    name:{
      type:[Number,String],
      required:true
    },
    disable:{
      type:Boolean,
      default:false
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
        this.active = true
      }else{
        this.active = false
      }
    })
  },
  destroyed(){
    this.eventBus.$off()
  },
  computed:{
    navItemClass(){
      return {
        active:this.active,
        disable:this.disable
      }
    }
  },
  methods:{
    navItemClick(){
      if(this.disable){return}
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>
<style lang="scss">
@import '../styles/global';
  .tab-nav-item{
    cursor: pointer;
    padding: 0 1em;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 1s;
    &.active{
      color: $blue;
    }
    &.disable{
      cursor: not-allowed;
      color: $disable-color;
    }
  }
</style>