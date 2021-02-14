import Toast from '@/components/toast'
let currentToast
export default{
  install(Vue){
    Vue.prototype.$toast = function(toastOptions){
      if(currentToast){
        currentToast.close()
        currentToast = null
      }
      const Constructor = Vue.extend(Toast)
      currentToast = new Constructor({
        propsData:toastOptions
      })
      currentToast.$mount()
      document.body.appendChild(currentToast.$el)
    }
  }
}