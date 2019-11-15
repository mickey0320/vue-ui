import Vue from 'vue'

import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Plugin from './plugin'

Vue.use(Plugin)

Vue.component('y-button',Button)
Vue.component('y-button-group',ButtonGroup)
Vue.component('y-input',Input)

new Vue({
    el: '#app',
    created(){
        this.$toast('这这这这是这这这是',{
            isAutoClose: false,
        })
    }
})