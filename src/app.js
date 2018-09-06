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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './wheelsPopover'

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
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-pane', TabsPane)
Vue.component('w-popover', Popover)

new Vue({
    el:"#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '',
        selectedTab: 'tab3'
    },
    methods:{
        showToast(){
            console.log('这里是methods');
            this.$toast('您的信息已发送 !', {
                autoClose: 3,
                closeButton: {
                    text: "关闭吧",
                    callback: ()=>{
                        console.log("这里是closeButton的callback1");
                    }
                },
                enableHTML: false,
                position: 'top'
            })
        }

    }
})

//单元测试
/*
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

*/
