<template>
  <div class="popover" ref="popover">
    <div @click.stop class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="popover-content"></slot>
    </div>
    <div @click.stop="slotBtnClick">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'ZPopover',
  data(){
    return{
      visible:false
    }
  },
  methods:{
    slotBtnClick(){
      this.visible ? this.closeContent() : this.showContent()
    },
    showContent(){
      this.visible = true
      this.$nextTick(()=>{
        const {top,left} = this.$el.getBoundingClientRect()
        const {contentWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        contentWrapper.style.left = `${left + window.scrollX}px`  
        contentWrapper.style.top = `${top + window.scrollY}px`  
      })
      document.addEventListener('click',this.documentClickHandle)
    },
    closeContent(){
      this.visible = false
      document.removeEventListener('click',this.documentClickHandle)
    },
    documentClickHandle(){
      console.log('document 关闭')
      this.closeContent()
    }
  }
}
</script>
<style lang="scss" scoped>
  .popover{
    position: relative;
    display: inline-block;
  }
  .content-wrapper{
    border: 1px solid;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
  }
</style>