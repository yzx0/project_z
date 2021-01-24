<template>
  <button class="z-button">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
    分支测试
  </button>
</template>

<script>
export default {
  props:{
    icon:{
      type:String
    }
  }
}
</script>

<style lang="scss">
  .z-button{
    border: 1px solid $border-color;
    font-size: $font-size;
    color:$color;
  }
</style>