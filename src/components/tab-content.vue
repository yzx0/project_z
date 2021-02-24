<template>
  <div class="tab-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ZTabContent'
}
</script>
<style lang="scss">
  .tab-content{
    padding: 1em;
  }
</style>