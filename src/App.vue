<template>
    <div>
<!--        {{data && data[4] && data[4].children}}-->
<!--       <y-cascader-->
<!--               :data.sync="data"-->
<!--               :selected.sync="selectedCascader"-->
<!--                :loadData="loadData">-->
<!--       </y-cascader>-->
<!--        <y-table-->
<!--                :data="tableData"-->
<!--                :columns="columns"-->
<!--                :bordered="true"-->
<!--                :loading="loading"-->
<!--                :height="400"-->
<!--                :order-by.sync="orderBy"-->
<!--                @update:orderBy="request"-->
<!--                :selected.sync="tableSelected"></y-table>-->
<!--        <y-button icon="settings">按钮</y-button>-->
        <div class="grid-container">
          <y-row>
              <y-col span="24" :ipad="{span:12}" :pc="{span:8}">
                  <div>col</div>
              </y-col>
              <y-col span="24" :ipad="{span:12}" :pc="{span:8}">
                  <div>col</div>
              </y-col>
              <y-col span="24" :ipad="{span:12}" :pc="{span:8}">
                  <div>col</div>
              </y-col>
              <y-col span="24" :ipad="{span:12}" :pc="{span:8}">
                  <div>col</div>
              </y-col>
              <y-col span="24" :ipad="{span:12}" :pc="{span:8}">
                  <div>col</div>
              </y-col>
              <y-col span="24" :ipad="{span:12}" :pc="{span:8}">
                  <div>col</div>
              </y-col>
          </y-row>
        </div>

    </div>

</template>

<script>
    import Row from './grid/row'
    import Col from './grid/col'
    import Button from './button/button'
    import ButtonGroup from './button/button-group'
    import Input from './input/input'
    import Tabs from './tabs/tabs'
    import TabsHeader from './tabs/tabs-header'
    import TabsItem from './tabs/tabs-item'
    import TabsBody from './tabs/tabs-body'
    import TabsPanel from './tabs/tabs-panel'
    import Popover from './popover/popover'
    import Collapse from './collapse/collapse'
    import CollapseItem from './collapse/collapse-item'
    import Cascader from './cascader/cascader'
    import Table from './table/table'
    import Sticky from './sticky/sticky'

    import {data as dbData} from './db'
    import { tableData, columns} from './tableData'

    export default {
        name: "App.vue",
        components: {
            yRow: Row,
            yCol: Col,
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
                loading: false,
                orderBy: {
                    name: 'asc',
                    age: true,
                    score: true,
                }
            }
        },
        methods:{
            loadData({id}, cb){
                setTimeout(()=>{
                    const result = dbData.filter(item => item.parent_id === id)
                    cb(result)
                },500)
            },
            request() {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                }, 1000)
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
    .span{
        border: 1px solid green;
    }
    .grid-container{
       div{
           border: 1px solid green;
       }
    }
</style>