<template>
  <div class="toast">
    <p>{{message}}</p>
    <!-- <slot></slot> -->
  </div>
</template>
<script>
export default {
  name:'ZToast',
  data(){
    return {
      message:''
    }
  }
}
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast{
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    display: flex;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    position: fixed;
    top:0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>