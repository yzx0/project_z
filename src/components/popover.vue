<template>
  <div :class="['popover',`trigger-${trigger}`]" ref="popover"  @click="popoverClick" @mouseenter="popoverMouseenter" @mouseleave="popoverMouseleave">
    <div :class="['content-wrapper',`position-${position}`]" ref="contentWrapper" v-if="visible">
      <slot name="popover-content"></slot>
    </div>
    <div ref="slotBtn">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'ZPopover',
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','left','right'].includes(value)
      }
    },
    trigger:{
      type:String,
      default:'click',
      validator(value){
        return ['click','hover'].includes(value)
      }
    }
  },
  data(){
    return{
      visible:false
    }
  },
  methods:{
    popoverMouseenter(){
      if(this.trigger !== 'hover'){return}
      this.showContent()
    },
    popoverMouseleave(){
      if(this.trigger !== 'hover'){return}
      this.closeContent()
    },
    popoverClick(){
      if(this.trigger !== 'click'){return}
      this.visible ? this.closeContent() : this.showContent()
    },
    setContentPosition(){
      const {contentWrapper,slotBtn} = this.$refs
      document.body.appendChild(contentWrapper)
      const {height:contentHeight,width:contentWidth} = contentWrapper.getBoundingClientRect()
      const {top,right,bottom,left,height,width} = slotBtn.getBoundingClientRect()
      let position = {
        top:{
          left:left + window.scrollX - (contentWidth-width)/2,
          top:top + window.scrollY - contentHeight
        },
        bottom:{
          left:left + window.scrollX - (contentWidth-width)/2,
          top:bottom + window.scrollY
        },
        left:{
          left:left + window.scrollX - contentWidth,
          top:top + window.scrollY - (contentHeight-height)/2
        },
        right:{
          left:right + window.scrollX,
          top:top + window.scrollY - (contentHeight-height)/2
        },
      }
      contentWrapper.style.top = `${position[this.position].top}px`  
      contentWrapper.style.left = `${position[this.position].left}px`  
    },
    showContent(){
      this.visible = true
      this.$nextTick(()=>{
        this.setContentPosition()
      })
      if(this.trigger === 'click'){
        document.addEventListener('click',this.documentClickHandle)
      }
    },
    closeContent(){
      this.visible = false
      if(this.trigger === 'click'){
        document.removeEventListener('click',this.documentClickHandle)
      }
    },
    documentClickHandle(e){
      if((this.$refs.slotBtn && this.$refs.slotBtn.contains(e.target)) 
      || (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))){return}
      this.closeContent()
    }
  }
}
</script>
<style lang="scss" scoped>
  .popover{
    display: inline-block;
  }
  .content-wrapper{
    background-color: #fff;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 10px;
    position: absolute;
    max-width: 200px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-15px);
      &::before{
        border-top-color: $border-color;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
      &::after{
        border-top-color:#fff;
        top: 100%;
        left: 50%;
        transform: translate(-50%,-1px);
      }
    }
    &.position-bottom{
      transform: translateY(15px);
      &::before{
        border-bottom-color: $border-color;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
      &::after{
        border-bottom-color:#fff;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%,1px);
      }
    }
    &.position-left{
      transform: translateX(-15px);
      &::before{
        border-left-color: $border-color;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after{
        border-left-color:#fff;
        left: 100%;
        top: 50%;
        transform: translate(-1px,-50%);
      }
    }
    &.position-right{
      transform: translateX(15px);
      &::before{
        border-right-color: $border-color;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after{
        border-right-color:#fff;
        right: 100%;
        top: 50%;
        transform: translate(1px,-50%);
      }
    }
  }
</style>