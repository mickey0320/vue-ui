<template>
    <div >
<!--        {{data && data[4] && data[4].children}}-->
<!--       <y-cascader-->
<!--               :data.sync="data"-->
<!--               :selected.sync="selectedCascader"-->
<!--                :loadData="loadData">-->
<!--       </y-cascader>-->
<!--        {{tableSelected}}-->
<!--        <div style="height: 100px;border: 1px solid red;"></div>-->
<!--        <y-table-->
<!--                :data="tableData"-->
<!--                :columns="columns"-->
<!--                :bordered="true"-->
<!--                :selected.sync="tableSelected"></y-table>-->


        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>

        <div style="width: 100px; margin-left:100px;">
            <y-sticky :distance="50">
                <div style="background: gray;">这里是头部</div>
            </y-sticky>
        </div>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
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
    import Table from './table'
    import Sticky from './sticky'

    import {data as dbData} from './db'
    import { tableData, columns} from './tableData'

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
            YTable: Table,
            YSticky: Sticky,
        },
        data(){
            return {
                selectedTab: 'item3',
                selected: ['item3'],
                data:[],
                selectedCascader: [],
                tableData,
                columns,
                tableSelected: [],
            }
        },
        methods:{
            loadData({id}, cb){
                setTimeout(()=>{
                    const result = dbData.filter(item => item.parent_id === id)
                    cb(result)
                },500)
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