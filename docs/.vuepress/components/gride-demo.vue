<template>
  <div class="gride-demo">
    <z-row class="row-demo">
      <z-col span="24"><div class="test-box">24</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="12"><div class="test-box">12</div></z-col>
      <z-col span="12"><div class="test-box">12</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="8"><div class="test-box">8</div></z-col>
      <z-col span="8"><div class="test-box">8</div></z-col>
      <z-col span="8"><div class="test-box">8</div></z-col>
    </z-row>
    <z-row class="row-demo">
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
      <z-col span="6"><div class="test-box">6</div></z-col>
    </z-row>
  </div>
</template>
<script>
import Row from '../../../src/components/row'
import Col from '../../../src/components/col'
export default {
  components:{
    ZRow:Row,
    ZCol:Col
  }
}
</script>
<style lang="scss" scoped>
.gride-demo{
  box-sizing: border-box;
}
*{
  box-sizing: border-box;
}
.row-demo{
  margin-top: 10px;
  margin-bottom: 10px;
}
.test-box{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  background-color: #f0f0f0;
  height: 50px;
  border: 1px solid #aaa;
}
</style>