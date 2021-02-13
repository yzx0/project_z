<template>
  <div :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
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
      type:Object
    },
    ipad:{
      type:Object
    },
    narrowPc:{
      type:Object
    },
    pc:{
      type:Object
    },
    widePc:{
      type:Object
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
        `z-col-span-${this.span}`,
        this.offset && `z-col-offset-${this.offset}`,
        this.phone && this.phone.span && `z-col-phone-span-${this.phone.span}`,
        this.phone && this.phone.offset && `z-col-phone-offset-${this.phone.offset}`,
        this.ipad && this.ipad.span && `z-col-ipad-span-${this.ipad.span}`,
        this.ipad && this.ipad.offset && `z-col-ipad-offset-${this.ipad.offset}`, 
        this.narrowPc && this.narrowPc.span && `z-col-narrowPc-span-${this.narrowPc.span}`,
        this.narrowPc && this.narrowPc.offset && `z-col-narrowPc-offset-${this.narrowPc.offset}`,
        this.pc && this.pc.span && `z-col-pc-span-${this.pc.span}`,
        this.pc && this.pc.offset && `z-col-pc-offset-${this.pc.offset}`, 
        this.widePc && this.widePc.span && `z-col-widePc-span-${this.widePc.span}`,
        this.widePc && this.widePc.offset && `z-col-widePc-offset-${this.widePc.offset}`
      ]
    },
    colStyle(){
      return {
        'padding': `0 ${this.gutter/2}px`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.z-col{
  width: 100%;
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