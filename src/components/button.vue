<template>
  <button :class="[iconPosition,'z-button']" @click="$emit('click')">
    <z-icon v-if="icon && !loading" :name='icon' class="icon"></z-icon>
    <z-icon v-if="loading" name='loading' class="icon loading"></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
// 点击切换loading状态 
// button-group
import Icon from './icon'
export default {
  props:{
    icon:{
      type:String
    },
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
    },
    loading:{
      type:Boolean
    }
  },
  components:{
    'z-icon':Icon
  }
}
</script>

<style lang="scss">
  @keyframes loading {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .z-button{
    border: 1px solid $border-color;
    font-size: $font-size;
    color:$color;
    padding: 0 1em;
    border-radius: $border-radius;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    height: $button-height;
    display: flex;
    align-items: center;
    justify-content: center;
    .loading{
      animation-name: loading;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    &.left{
      .icon{
        order: 1;
        margin-right: 0.2em;
      }
      .content{
        order:2;
      }
    }
    &.right{
      .icon{
        order: 2;
        margin-left: 0.2em;
      }
      .content{
        order:1;
      }
    }
    &:hover{
      transition: all .3s;
      border-color: $border-color-hover;
    }
    &:active{
      background-color: $button-active-bg;
    }
  }
</style>