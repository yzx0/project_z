<template>
  <div id="app">
    <div class="button">
      <z-button>默认按钮</z-button>
      <z-button @click="loading1 = !loading1" icon="setting" :loading='loading1' icon-position='left'>默认按钮</z-button>
      <z-button @click="loading2 = !loading2" icon="setting" :loading='loading2' icon-position='right'>默认按钮</z-button>
      <z-button-group>
        <z-button icon="left" icon-position='left'>上一页</z-button>
        <z-button>更多</z-button>
        <z-button icon="right" icon-position='right'>下一页</z-button>
      </z-button-group>
    </div>
    <z-input value="张三" @input="inputEvent" @focus="focusEvent" @blur="blurEvent" @change="changeEvent"></z-input>
    <z-input value="张三" :disabled="true"></z-input>
    <z-input value="张三" :readonly="true"></z-input>
    <z-input value="张三" error="密码输入错误"></z-input>
    <div>
      <z-input v-model="msg" ></z-input>
      <p>{{msg}}</p>
    </div>
    <div style="border:1px solid">
      <z-row gutter="20">
        <z-col :phone="{span:12}" :ipad="{span:12}" :narrow-pc="{span:8}" :pc="{span:18}" :wide-pc="{span:2}"><div class="test-box">1</div></z-col>
        <z-col :phone="{span:12}" :ipad="{span:12}" :pc="{span:6}" :wide-pc="{span:22}"><div class="test-box">2</div></z-col>
        <z-col :phone="{span:12}" :ipad="{span:12}" :narrow-pc="{span:8}" :pc="{span:18}" :wide-pc="{span:2}"><div class="test-box">1</div></z-col>
        <z-col :phone="{span:12}" :ipad="{span:12}" :pc="{span:6}" :wide-pc="{span:22}"><div class="test-box">2</div></z-col>
      </z-row>
      <z-row gutter="20">
        <z-col span="8"><div class="test-box">1</div></z-col>
        <z-col span="8"><div class="test-box">2</div></z-col>
        <z-col span="8"><div class="test-box">3</div></z-col>
      </z-row>
      <z-row gutter="20">
        <z-col span="6"><div class="test-box">1</div></z-col>
        <z-col span="6"><div class="test-box">2</div></z-col>
        <z-col span="6"><div class="test-box">3</div></z-col>
        <z-col span="6"><div class="test-box">4</div></z-col>
      </z-row>
      <z-row>
        <z-col span="8">
          <z-row align="right">
            <z-col>
              <div class="logo-wrapper" style="display:inline">
                <img style="height:50%" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
              </div>
            </z-col>
          </z-row>
        </z-col>
        <z-col span="16">
          <z-row align="right">
            <z-col>1</z-col>
            <z-col>2</z-col>
          </z-row>
        </z-col>
      </z-row>
    </div>
    <z-layout style="height:100vh;margin:0;">
      <z-sider class="test" width="200">sider</z-sider>
      <z-layout>
        <z-header class="test">header</z-header>
        <z-content class="test">content</z-content>
        <z-footer class="test">footer</z-footer>
      </z-layout>
    </z-layout>
    <z-button @click="showToast('top')">show toast top</z-button>
    <z-button @click="showToast('center')">show toast center</z-button>
    <z-button @click="showToast('bottom')">show toast bottom</z-button>
    <z-tab :selected="selectedTab">
      <z-tab-nav>
        <template slot="action">
          <z-button>action</z-button>
        </template>
        <z-nav-item name="tab1"><z-icon name="setting"></z-icon>tab1</z-nav-item>
        <z-nav-item name="tab2" :disable="true">tab2</z-nav-item>
        <z-nav-item name="tab3">tab3</z-nav-item>
      </z-tab-nav>
      <z-tab-content>
        <z-content-item name="tab1">content1</z-content-item>
        <z-content-item name="tab2">content2</z-content-item>
        <z-content-item name="tab3">content3</z-content-item>
      </z-tab-content>
    </z-tab>
    <z-popover position="top">
      <template slot="popover-content">
        <div>
          popover content popover content popover content popover content popover content popover content
        </div>
      </template>
      <z-button>top popover</z-button>
    </z-popover>
    <div style="overflow:hidden;display:inline;" @click="xxx">
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
        <z-popover position="top">
      <template slot="popover-content">
        <div>
          1
        </div>
      </template>
      <z-button>top popover</z-button>
    </z-popover>
  </div>
</template>

<script>
import Button from '@/components/button'
import ButtonGroup from '@/components/button-group'
import Input from '@/components/input'
import Row from '@/components/row'
import Col from '@/components/col'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Content from '@/components/content'
import Footer from '@/components/footer'
import Sider from '@/components/sider'
import Tab from '@/components/tab'
import TabNav from '@/components/tab-nav'
import TabNavItem from '@/components/tab-nav-item'
import TabContent from '@/components/tab-content'
import TabContentItem from '@/components/tab-content-item'
import Popover from '@/components/popover'
import Icon from '@/icon'

export default {
  name: 'App',
  components: {
    'z-button':Button,
    'z-button-group':ButtonGroup,
    'z-input':Input,
    'z-row':Row,
    'z-col':Col,
    'z-layout':Layout,
    'z-header':Header,
    'z-content':Content,
    'z-footer':Footer,
    'z-sider':Sider,
    'z-tab':Tab,
    'z-tab-nav':TabNav,
    'z-nav-item':TabNavItem,
    'z-tab-content':TabContent,
    'z-content-item':TabContentItem,
    'z-icon':Icon,
    'z-popover':Popover,
  },
  data(){
    return{
      loading1:false,
      loading2:false,
      msg:'v-model',
      selectedTab:'tab3'
    }
  },
  methods:{
    xxx(){console.log('appPoppverClick')},
    showToast(position){
      this.$toast({message:parseInt(Math.random()*100),position,enableHtml:true,duration:999,btnText:'嘻嘻',callback:this.closeCallback})
    },
    closeCallback(e){
      console.log(e,'app的toast回调')
    },
    inputEvent(e){
      console.log('input:',e)
    },
    focusEvent(e){
      console.log('focus:',e)
    },
    blurEvent(e){
      console.log('blur:',e)
    },
    changeEvent(e){
      console.log('change:',e)
    }
  }
}
</script>

<style lang="scss">
#app{margin: 0;padding: 0;}
#app>*{margin: 20px;}
.button{display: flex;&>.z-button{margin-right: 10px;}}
.test-box{border:1px solid red;height: 50px;}
.test{border: 1px solid;}
</style>

