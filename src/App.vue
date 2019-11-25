<template>
    <div >
        {{data}}
       <y-cascader
               :data.sync="data"
               :selected.sync="selectedCascader"
                :loadData="loadData">
       </y-cascader>
    </div>

</template>

<script>
    import Button from './button'
    import ButtonGroup from './button-group'
    import Input from './input'
    import Tabs from './tabs'
    import TabsHeader from './tabs-header'
    import TabsItem from './tabs-item'
    import TabsBody from './tabs-body'
    import TabsPanel from './tabs-panel'
    import Popover from './popover'
    import Collapse from './collapse'
    import CollapseItem from './collapse-item'
    import Cascader from './cascader'

    import {data as dbData} from './db'

    export default {
        name: "App.vue",
        components: {
            yButton: Button,
            yButtonGroup: ButtonGroup,
            yInput: Input,
            yTabs: Tabs,
            yTabsItem: TabsItem,
            yTabsHeader: TabsHeader,
            yTabsBody: TabsBody,
            yTabsPanel: TabsPanel,
            yPopover: Popover,
            yCollapse: Collapse,
            yCollapseItem: CollapseItem,
            yCascader: Cascader,
        },
        data(){
            return {
                selectedTab: 'item3',
                selected: ['item3'],
                data:[],
                selectedCascader: []
            }
        },
        methods:{
            loadData({id}, cb){
                const result = dbData.filter(item => item.parent_id === id)
                cb(result)
            }
        },
        created(){
            this.loadData({id:0}, (result)=>{
               this.data = result
            })
        }
    }
</script>

<style lang="scss" scoped>
    .line{
        margin: 10px 0;
    }
</style>