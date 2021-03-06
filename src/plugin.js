import Toast from './toast'

let currentToast

export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            console.log(message);
            console.log(toastOptions);
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

function createToast({Vue, message, propsData, onClose}){
    console.log('createToast执行');
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on("close", onClose)
    document.body.appendChild(toast.$el)
    console.log(toast.$el);
    return toast
}