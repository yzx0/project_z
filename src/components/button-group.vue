<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .z-button-group{
    display: flex;
    align-items: center;
    >.z-button{
      border-radius: 0;
      &:first-child{
        border-radius: $border-radius 0 0 $border-radius;
      }
      &:last-child{
        border-radius: 0 $border-radius $border-radius 0;
      }
    }
  }
</style>