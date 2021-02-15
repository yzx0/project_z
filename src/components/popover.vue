<template>
  <div class="popover" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="popover-content"></slot>
    </div>
    <div @click="slotBtnClick" ref="slotBtn">
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
    setContentPosition(){
      const {top,left} = this.$el.getBoundingClientRect()
      const {contentWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      contentWrapper.style.left = `${left + window.scrollX}px`  
      contentWrapper.style.top = `${top + window.scrollY}px`  
    },
    showContent(){
      this.visible = true
      this.$nextTick(()=>{
        this.setContentPosition()
      })
      document.addEventListener('click',this.documentClickHandle)
    },
    closeContent(){
      console.log('关闭')
      this.visible = false
      document.removeEventListener('click',this.documentClickHandle)
    },
    documentClickHandle(e){
      if((this.$refs.slotBtn && this.$refs.slotBtn.contains(e.target)) 
      || (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))){
        return
      }
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