<template>
  <svg class="z-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import './svg.js'
export default {
  name:'ZIcon',
  props:{
    name:{
      type:String
    }
  }
}
</script>
<style lang="scss" scoped>
  .z-icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>