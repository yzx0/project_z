<template>
  <div class="test-input">
    <z-input value="张三" @input="inputEvent" @focus="focusEvent" @blur="blurEvent" @change="changeEvent"></z-input>
    <z-input value="张三" :disabled="true"></z-input>
    <z-input value="张三" :readonly="true"></z-input>
    <z-input value="张三" error="密码输入错误"></z-input>
    <div>
      <z-input v-model="name"></z-input>
      <p>{{name}}</p>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/components/input'
export default {
  components:{
    'z-input':Input
  },
  data(){
    return{
      name:'v-model'
    }
  },
  methods: {
    blurEvent(){},
    changeEvent(){},
    focusEvent(){},
    inputEvent(){}
  }
}
</script>

<style lang="scss" scoped>
.test-input{
  >*{
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
</style>