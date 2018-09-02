import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-sider', Sider)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-toast', Toast)
Vue.use(plugin)

new Vue({
    el:"#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: ''
    },
    methods:{
        showToast1(){
            console.log('这里是methods');
            this.$toast('您的信息已发送 !', {
                autoClose: false,
                autoCloseDelay: 5,
                closeButton: {
                    text: "关闭吧",
                    callback: ()=>{
                        console.log("这里是closeButton的callback1");
                    }
                },
                enableHTML: false,
                position: 'top'
            })
        },
        showToast2(){
            this.$toast('您的信息已发送 !', {
                position: 'middle'
            })
        },
        showToast3(){
            this.$toast('您的信息已发送 !', {
                position: 'bottom'
            })
        }
    }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq("#i-settings")
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq("#i-loading")
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            iconPosition: "right"
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector("svg")
    console.log(svg)
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("2")
    vm.$el.remove()
    vm.$destroy()
}
//mock
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})

    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}


