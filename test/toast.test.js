const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.be.exist
    })

    describe('props', ()=>{

        it('可以设置autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close', ()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                vm.$destroy()
            })
        })
        it('可以设置closeButton', () => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: "关了吧",
                        callback
                    }
                }
            }).$mount()
            let close = vm.$el.querySelector('.close')
            expect(close.textContent.trim()).to.eq("关了吧")
            close.click()
            expect(callback).to.have.been.called
        })
        it('可以设置enableHTML', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('可以设置position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'top'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.eq(true)

        })
    })


})