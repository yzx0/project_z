<template>
  <div :class="['z-col',`z-col-span-${span}`,offset && `z-col-offset-${offset}`]"
    :style="{'padding': `0 ${gutter/2}px`}"
  >
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
    }
  },
  data(){
    return{
      gutter:0
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
</style>