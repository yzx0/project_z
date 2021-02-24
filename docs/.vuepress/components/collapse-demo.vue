<template>
  <div>
    <z-collapse :single="true" @select="select" :defaultSelect="collapseArr">
      <z-collapse-item title="1" name="1" >collapse1</z-collapse-item>
      <z-collapse-item title="2" name="2">collapse2</z-collapse-item>
      <z-collapse-item title="3" name="3">collapse3</z-collapse-item>
    </z-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/components/collapse'
import CollapseItem from '../../../src/components/collapse-item'
export default {
  components:{
    'z-collapse':Collapse,
    'z-collapse-item':CollapseItem
  },
  data(){
    return{
      collapseArr:['2']
    }
  }
}
</script>