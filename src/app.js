import Vue from 'vue'
import Button from './button'
import Icon from './svg'
import ButtonGroup from './button-group'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)

new Vue({
    el:"#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false
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


