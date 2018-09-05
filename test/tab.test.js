const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

     it('接受selected', (done) => {
         const div = document.createElement('div')
         document.body.appendChild(div)
         div.innerHTML = `
            <w-tabs selected="tab1">
                <w-tabs-head>
                    <w-tabs-item  name="tab1">标签一</w-tabs-item>
                    <w-tabs-item  name="tab2">
                        <w-icon name="settings"></w-icon>
                        标签二
                    </w-tabs-item>
                    <w-tabs-item  name="tab3">标签三</w-tabs-item>
                    <template slot="actions">
                        <w-button>设置</w-button>
                    </template>
                </w-tabs-head>
                <w-tabs-body>
                    <w-tabs-pane name="tab1">这里是标签1的内容</w-tabs-pane>
                    <w-tabs-pane name="tab2">这里是标签2的内容</w-tabs-pane>
                    <w-tabs-pane name="tab3">这里是标签3的内容</w-tabs-pane>
                </w-tabs-body>
            </w-tabs>
         `
         let vm = new Vue({
             el: div
         })
         vm.$nextTick(()=>{
             let activeItem = vm.$el.querySelector('.tabs-item[data-name="tab1"]')
             expect(activeItem.classList.contains('active')).to.be.true
             done()
         })
     })

    it('接受name', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
               name: "xxx"
            }
        }).$mount()
       expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })

    it('接受disabled', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        //expect(vm.$el.classList.contains('disabled')).to.be.true;
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })

})