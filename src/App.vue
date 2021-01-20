<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ZButton>hi</ZButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ZButton from '@/components/button'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ZButton
  }
}
</script>

<style lang="scss">
*{margin: 0;padding: 0;box-sizing: border-box;}
*::before,*::after{margin: 0;padding: 0;box-sizing: border-box;}
a{color: inherit;text-decoration: none;}
ul,li{list-style: none;}
</style>
