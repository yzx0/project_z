<template>
  <div>
    <z-layout style="height:100vh;margin:0;">
      <z-layout>
        <z-header style="height:50px;background:lightskyblue;">header</z-header>
        <z-layout>
          <z-sider style="background:cornflowerblue;">sider</z-sider>
          <z-content style="background:deepskyblue;">content</z-content>
        </z-layout>
        <z-footer style="height:50px;background:lightskyblue;">footer</z-footer>
      </z-layout>
    </z-layout>  
  </div>
</template>
<script>
import Layout from '../../../src/components/layout'
import Header from '../../../src/components/header'
import Content from '../../../src/components/content'
import Footer from '../../../src/components/footer'
import Sider from '../../../src/components/sider'
export default {
  components:{
    'z-layout':Layout,
    'z-header':Header,
    'z-content':Content,
    'z-footer':Footer,
    'z-sider':Sider,
  }
}
</script>
<style lang="scss" scoped>
// .test{border: 1px solid;}
</style>