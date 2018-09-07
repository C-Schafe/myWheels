const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/wheelsPopover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

    it('存在.', () => {
        expect(Popover).to.be.exist
    })

    it('可以设置position.', (done) => {
        Vue.component('w-popover', Popover)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <w-popover positon="top" ref="a">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <button>点我</button>
            </w-popover>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(()=>{
            vm.$el.querySelector('button').click()
            setTimeout(()=>{
                expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-top')).to.be.true
                done()
            })
        })

    })

})