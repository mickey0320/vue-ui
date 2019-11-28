import Toast from './toast/toast'

function createToast(Vue, message, options, onClose){
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
        propsData: options
    })
    vm.$slots.default = [message]
    vm.$on('close', onClose)
    vm.$mount()
    document.body.appendChild(vm.$el)

    return vm
}

let currentToast = null

export default {
    install(Vue){
        Vue.prototype.$toast = function (message, options) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast(Vue, message, options, () => {
                currentToast = null
            })
        }
    }
}