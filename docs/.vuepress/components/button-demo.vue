<template>
  <div>
    <z-button>默认按钮</z-button>
    <z-button icon="setting">默认按钮</z-button>
    <z-button icon="setting" :loading="true">默认按钮</z-button>
    <z-button iconPosition="right" icon="setting">默认按钮</z-button>
    <!-- 按钮组 -->
    <z-button-group style="margin-top:1em;">
      <z-button>默认按钮</z-button>
      <z-button icon="setting">默认按钮</z-button>
      <z-button icon="setting" :loading="true">默认按钮</z-button>
      <z-button iconPosition="right" icon="setting">默认按钮</z-button>
    </z-button-group>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/components/button-group'
import Button from '../../../src/components/button'
export default {
  components:{
    'z-button':Button,
    'z-button-group':ButtonGroup,
  }
}
</script>