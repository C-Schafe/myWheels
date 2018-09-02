import Toast from './toast'

export default {
    install(Vue, options){
        Vue.prototype.$toast = function (message, toastOptions) {
            console.log('这里是plugin.js');
            let Constructor = Vue.extend(Toast)
            console.log(toastOptions.closeButton.callback);
            let toast = new Constructor({
                propsData: toastOptions
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}