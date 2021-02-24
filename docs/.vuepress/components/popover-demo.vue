<template>
<div class="popover-demo">
  <!-- 点击触发 -->
  <div>
    <z-popover position="top">
      <template slot="popover-content">
        <div>
          popover content popover content popover content popover content popover content popover content
        </div>
      </template>
      <z-button>top popover</z-button>
    </z-popover>
    <div style="overflow:hidden;display:inline;">
      <z-popover position="right">
        <template slot="popover-content">
          <div>
            popover content popover content popover content popover content popover content popover content
          </div>
        </template>
        <z-button>right popover</z-button>
      </z-popover>
    </div>
      <z-popover position="bottom">
      <template slot="popover-content">
        <div>
          popover content popover content popover content popover content popover content popover content
        </div>
      </template>
      <z-button>bottom popover</z-button>
    </z-popover>    
    <z-popover position="left">
      <template slot="popover-content">
        <div>
          popover content popover content popover content popover content popover content popover content
        </div>
      </template>
      <z-button>left popover</z-button>
    </z-popover>
    </div>
    <!-- hover触发 -->
    <div>
      <z-popover position="top" trigger="hover">
        <template slot="popover-content">
          <div>
            1
          </div>
        </template>
        <z-button>top popover</z-button>
      </z-popover>
      <z-popover position="bottom" trigger="hover">
        <template slot="popover-content">
          <div>
            1
          </div>
        </template>
        <z-button>bottom popover</z-button>
      </z-popover>
      <z-popover position="left" trigger="hover">
        <template slot="popover-content">
          <div>
            1
          </div>
        </template>
        <z-button>left popover</z-button>
      </z-popover>
      <z-popover position="right" trigger="hover">
        <template slot="popover-content">
          <div>
            1
          </div>
        </template>
        <z-button>right popover</z-button>
      </z-popover>
    </div> 
</div>
</template>
<script>
import Popover from '../../../src/components/popover'
import Button from '../../../src/components/button'

export default {
  components:{
    'z-button':Button,
    'z-popover':Popover,
  }
}
</script>
<style lang="scss" scoped>
.popover-demo{
  > div{
    margin-bottom: 15px;
  }
}
</style>