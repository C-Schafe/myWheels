import Vue from 'vue'
import Button from './button'
import Icon from './svg'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)

new Vue({
    el:"#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})