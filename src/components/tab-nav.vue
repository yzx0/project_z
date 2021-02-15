<template>
  <div class="tab-nav">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .tab-nav{
    display: flex;
  }
  .action-wrapper{
    margin-left: auto;
  }
</style>