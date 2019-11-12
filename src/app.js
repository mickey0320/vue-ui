import Vue from 'vue'

import Button from './button'
import ButtonGroup from './button-group'

Vue.component('y-button',Button)
Vue.component('y-button-group',ButtonGroup)

new Vue({
    el: '#app'
})