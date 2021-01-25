<template>
  <button :class="[position,'z-button']">
    <z-icon v-if="icon" :name='icon'></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'
export default {
  props:{
    icon:{
      type:String
    },
    position:{
      type:String,
      default:'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
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
    padding: 0 1em;
    border-radius: 5px;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    height: $button-height;
    display: flex;
    align-items: center;
    justify-content: center;
    &.left{
      .icon{
        order: 1;
        margin-right: 0.1em;
      }
      .content{
        order:2;
      }
    }
    &.right{
      .icon{
        order: 2;
        margin-left: 0.1em;
      }
      .content{
        order:1;
      }
    }
  }
</style>