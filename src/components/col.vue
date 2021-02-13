<template>
  <div :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
function validator(value){
  let status = true 
  Object.keys(value).forEach(key=>{
    if(!['span','offset'].includes(key)){status = false}
  })
  return status
}
export default {
  name:'ZCol',
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    },
    phone:{
      type:Object,
      validator
    },
    ipad:{
      type:Object,
      validator
    },
    narrowPc:{
      type:Object,
      validator
    },
    pc:{
      type:Object,
      validator
    },
    widePc:{
      type:Object,
      validator
    }
  },
  data(){
    return{
      gutter:0
    }
  },
  computed:{
    colClass(){
      return [
        'z-col',
        this.span && `z-col-span-${this.span}`,
        this.offset && `z-col-offset-${this.offset}`,
        ...this.createClass(this.phone,'phone-'),
        ...this.createClass(this.ipad,'ipad-'),
        ...this.createClass(this.narrowPc,'narrowPc-'),
        ...this.createClass(this.pc,'pc-'),
        ...this.createClass(this.widePc,'widePc-')
      ]
    },
    colStyle(){
      return {
        'padding': `0 ${this.gutter/2}px`
      }
    }
  },
  methods:{
    createClass(obj,str){
      if(!obj){return []}
      return [
        obj.span && `z-col-${str}span-${obj.span}`,
        obj.offset && `z-col-${str}offset-${obj.offset}`
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.z-col{
  min-height: 50px;
}
@for $i from 1 through 24{
  .z-col-span-#{$i}{width: ($i/24) * 100%;}
}
@for $i from 1 through 24{
  .z-col-offset-#{$i}{margin-left: ($i/24) * 100%;}
}
@media (max-width:576px)  {
  @for $i from 1 through 24{
    .z-col-phone-span-#{$i}{width: ($i/24) * 100%;}
  }
  @for $i from 1 through 24{
    .z-col-phone-offset-#{$i}{margin-left: ($i/24) * 100%;}
  }
}
@media (min-width:577px) and (max-width:768px)  {
  @for $i from 1 through 24{
    .z-col-ipad-span-#{$i}{width: ($i/24) * 100%;}
  }
  @for $i from 1 through 24{
    .z-col-ipad-offset-#{$i}{margin-left: ($i/24) * 100%;}
  }
}
@media (min-width:769px) and (max-width:992px)  {
  @for $i from 1 through 24{
    .z-col-narrowPc-span-#{$i}{width: ($i/24) * 100%;}
  }
  @for $i from 1 through 24{
    .z-col-narrowPc-offset-#{$i}{margin-left: ($i/24) * 100%;}
  }
}
@media (min-width:993px) and (max-width:1200px)  {
  @for $i from 1 through 24{
    .z-col-pc-span-#{$i}{width: ($i/24) * 100%;}
  }
  @for $i from 1 through 24{
    .z-col-pc-offset-#{$i}{margin-left: ($i/24) * 100%;}
  }
}
@media (min-width:1201px)  {
  @for $i from 1 through 24{
    .z-col-widePc-span-#{$i}{width: ($i/24) * 100%;}
  }
  @for $i from 1 through 24{
    .z-col-widePc-offset-#{$i}{margin-left: ($i/24) * 100%;}
  }
}
</style>