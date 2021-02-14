import Toast from '@/components/toast'
export default{
  install(Vue){
    Vue.prototype.$toast = function(toastOptions){
      console.log(toastOptions);
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData:toastOptions
      })
      // vm.message = message
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}