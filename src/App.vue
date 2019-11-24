<template>
    <div >
       <y-cascader :data="data" :selected.sync="selectedCascader"></y-cascader>
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

    import {data} from './data'

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
                data,
                selectedCascader: []
            }
        },
    }
</script>

<style lang="scss" scoped>
    .line{
        margin: 10px 0;
    }
</style>