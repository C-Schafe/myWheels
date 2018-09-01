const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.be.ok
    })

    it('可以设置span', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 2
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-2')).to.eq(true)
        vm.$destroy()
    })

    it('可以设置offset', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 3
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-3')).to.eq(true)
        vm.$destroy()
    })

    it('可以设置ipad', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-2')).to.eq(true)
        expect(element.classList.contains('offset-ipad-3')).to.eq(true)
        vm.$destroy()
    })

    it('可以设置narrowPc', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrowPc-2')).to.eq(true)
        expect(element.classList.contains('offset-narrowPc-3')).to.eq(true)
        vm.$destroy()
    })

    it('可以设置pc', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-2')).to.eq(true)
        expect(element.classList.contains('offset-pc-3')).to.eq(true)
        vm.$destroy()
    })

    it('可以设置largePc', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                largePc: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-largePc-2')).to.eq(true)
        expect(element.classList.contains('offset-largePc-3')).to.eq(true)
        vm.$destroy()
    })
})