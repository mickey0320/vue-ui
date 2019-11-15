import Toast from './toast'

export default {
    install(Vue){
        Vue.prototype.$toast = function (message) {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor()
            vm.$slots.default = [message]
            vm.$mount()
            document.body.appendChild(vm.$el)
        }
    }
}