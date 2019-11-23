<template>
    <div >
        <y-button>按钮</y-button>
       <div class="line">
           <y-button-group>
               <y-button>左边</y-button>
               <y-button>中间的按钮</y-button>
               <y-button>右边</y-button>
           </y-button-group>
       </div>
        <div class="line">
            <y-input></y-input>
        </div>
        <div class="line">
            <y-tabs :selected="selectedTab">
                <y-tabs-header>
                    <y-tabs-item name="item1">综艺</y-tabs-item>
                    <y-tabs-item name="item2">体育</y-tabs-item>
                    <y-tabs-item name="item3">财经新闻</y-tabs-item>
                    <y-tabs-item name="item4" disabled>电视剧</y-tabs-item>
                </y-tabs-header>
                <y-tabs-body>
                    <y-tabs-panel name="item1">
                        这是项目一的内容
                    </y-tabs-panel>
                    <y-tabs-panel name="item2">
                        这是项目二的内容
                    </y-tabs-panel>
                    <y-tabs-panel name="item3">
                        这是项目三的内容
                    </y-tabs-panel>
                    <y-tabs-panel name="item4">
                        这是项目四的内容
                    </y-tabs-panel>
                </y-tabs-body>
            </y-tabs>
        </div>
        <div class="line">
            <y-popover>
                <span slot="content">这是弹出内容这是弹出内容这是弹出内容这是弹出内容这是弹出内容这是弹出内容这是弹出内容这是弹出内容</span>
                <button>popover</button>
            </y-popover>
            <y-popover position="bottom">
                <span slot="content">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                <button>popover</button>
            </y-popover>
            <y-popover position="left">
                <span slot="content">aaaaaaaaaaa</span>
                <button>popover</button>
            </y-popover>
            <y-popover position="right">
                <span slot="content">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                <button>popover</button>
            </y-popover>
        </div>
        <div class="line">
            <y-collapse :selected.sync="selected" multiple>
                <y-collapse-item title="标题1" name="name1">这里是内容1</y-collapse-item>
                <y-collapse-item title="标题2" name="name2">这里是内容2</y-collapse-item>
                <y-collapse-item title="标题3" name="name3">这里是内容3</y-collapse-item>
            </y-collapse>
        </div>
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
        },
        data(){
            return {
                selectedTab: 'item3',
                selected: ['item3'],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .line{
        margin: 10px 0;
    }
</style>