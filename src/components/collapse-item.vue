<template>
  <div class="collapse-item">
    <div class="title" @click="titleClick">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'collapse-item',
  props:{
    title:{
      type:String,
      require:true
    },
    name:{
      type:String,
      require:true
    }
  },
  inject:['eventBus'],
  data(){
    return{
      open:false,
      single:false
    }
  },
  mounted(){
    this.eventBus.$on('select',names =>{
      if(names.includes(this.name)){
        this.openCollapse()
      }else{
        this.closeCollapse()
      }
    })
  },
  methods:{
    closeCollapse(){
      this.open = false
    },
    openCollapse(){
      this.open = true
    },
    titleClick(){
      if(this.open){
        this.eventBus.$emit('close',this.name)
      }else{
        this.eventBus.$emit('open',this.name)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/global';
.collapse-item{
  >*{padding: 10px;}
  .title{
    cursor: pointer;
    font-size: $font-size;
    color: $color;
    border-bottom: 1px solid $border-color;
  }
  &:not(:last-child){
    .content{border-bottom: 1px solid $border-color;}
  }
  &:last-child{
    .title{
      border-bottom: none;
    }
    .content{
      border-top:1px solid $border-color;
    }
  }
}
</style>