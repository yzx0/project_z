<template>
  <div>
    <z-tab :selected="selectedTab">
      <z-tab-nav>
        <template slot="action">
          <z-button>action</z-button>
        </template>
        <z-nav-item name="tab1"><z-icon name="setting" class="icon"></z-icon>tab1</z-nav-item>
        <z-nav-item name="tab2" :disable="true">tab2</z-nav-item>
        <z-nav-item name="tab3">tab3</z-nav-item>
      </z-tab-nav>
      <z-tab-content>
        <z-content-item name="tab1">content1</z-content-item>
        <z-content-item name="tab2">content2</z-content-item>
        <z-content-item name="tab3">content3</z-content-item>
      </z-tab-content>
    </z-tab>
  </div>
</template>

<script>
import Button from '../../../src/components/button'
import Tab from '../../../src/components/tab'
import TabNav from '../../../src/components/tab-nav'
import TabNavItem from '../../../src/components/tab-nav-item'
import TabContent from '../../../src/components/tab-content'
import TabContentItem from '../../../src/components/tab-content-item'
import Icon from '../../../src/icon'
export default {
  components:{
    'z-button':Button,
    'z-icon':Icon,
    'z-tab':Tab,
    'z-tab-nav':TabNav,
    'z-nav-item':TabNavItem,
    'z-tab-content':TabContent,
    'z-content-item':TabContentItem,
  },
  data(){
    return{
      selectedTab:'tab1',
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon{
    margin-right: 0.5em;
  }
</style>