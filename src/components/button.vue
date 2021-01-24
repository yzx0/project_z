<template>
  <button class="z-button">
    <z-icon v-if="icon" :name='icon'></z-icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  props:{
    icon:{
      type:String
    }
  },
  components:{
    'z-icon':Icon
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