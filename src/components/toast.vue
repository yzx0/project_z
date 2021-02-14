<template>
  <div class="toast">
    <div class="toast-message" v-html="message"></div>
    <div class="toast-btn" @click="closeBtnClick">{{btnText}}</div>
    <!-- <slot></slot> -->
  </div>
</template>
自动关闭√
关闭自动关闭时，出现自动关闭按钮，按钮文本自定义，有回调
支持多行文字,
支持html
<script>
export default {
  name:'ZToast',
  props:{
    autoClose:{
      type:Boolean,
      default:true
    },
    duration:{
      type:[Number,String],
      default:3
    },
    message:{
      type:String,
      default:'toast'
    },
    btnText:{
      type:String,
      default:'关闭'
    },
    callback:{
      type:Function,
      default:(vm)=>console.log('执行回调',vm)
    }
  },
  mounted(){
    if(this.autoClose){
      setTimeout(() => {
        this.close()
      }, this.duration*1000);
    }
  },
  methods:{
    close(){
      this.$el.remove()
      this.$destroy()
    },
    closeBtnClick(){
      this.close()
      this.callback(this)
    }
  }
}
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast{
    max-width: 500px;
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    display: flex;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding-right:60px;
    position: fixed;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    .toast-message{
      padding: 10px 20px;
      border-right: 1px solid $border-color;
    }
    .toast-btn{
      cursor: pointer;
      height: 100%;
      width: 60px;
      position: absolute;
      right: 0;
      top: 0;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>