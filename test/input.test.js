const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    describe('props',()=>{

        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })

        // it('存在.', () => {
        //     expect(Input).to.be.ok
        // })

        it('可以value', () => {
             vm = new Constructor({
                propsData: {
                    value: 'hello'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('hello')

        })

        it('可以disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('可以readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })

        it('可以设置error', () => {
            vm = new Constructor({
                propsData: {
                    error: "错误了"
                }
            }).$mount()
            const errorIcon = vm.$el.querySelector('use')
            expect(errorIcon.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('错误了')
        })
    })

    describe('事件', ()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })

        it('支持change/input/blur/focus事件', ()=>{
            ['change','input','blur','focus'].forEach((e)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on( e, callback)
                //触发事件
                let event = new Event(e)
                Object.defineProperty(
                    event, 'target', {
                        value: {value: 'hi'}, enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })


})