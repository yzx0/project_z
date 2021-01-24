<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props:{
    name:{
      type:String
    }
  }
}
</script>
<style lang="scss">
  
</style>