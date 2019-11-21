import Vue from 'vue'

import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHeader from './tabs-header'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPanel from './tabs-panel'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.use(Plugin)

Vue.component('y-button',Button)
Vue.component('y-button-group',ButtonGroup)
Vue.component('y-input',Input)
Vue.component('y-tabs',Tabs)
Vue.component('y-tabs-header',TabsHeader)
Vue.component('y-tabs-item',TabsItem)
Vue.component('y-tabs-body',TabsBody)
Vue.component('y-tabs-panel',TabsPanel)
Vue.component('y-popover',Popover)
Vue.component('y-collapse',Collapse)
Vue.component('y-collapse-item',CollapseItem)


new Vue({
    el: '#app',
    created(){

    },
    data(){
        return {
            selectedTab: 'item2'
        }
    },
    methods:{
    }
})