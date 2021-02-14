import toast from '@/components/toast'
export default{
  install(Vue){
    Vue.prototype.$toast = function(message){
      const Constructor = Vue.extend(toast)
      const vm = new Constructor()
      vm.$mount()
      vm.message = message
      document.body.appendChild(vm.$el)
      console.log('toast')
    }
  }
}