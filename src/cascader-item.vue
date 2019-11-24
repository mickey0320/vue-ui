<template>
    <div class="cascader-items">
        <div class="parent">
            <div class="item" v-for="item in data" @click="showChildren(item)">
                {{item.name}}
                <y-icon v-if="item.children" name="right"></y-icon>
            </div>

        </div>
        <div class="child" v-if="childrenData">
            <cascader-items :data="childrenData" :level="level + 1"></cascader-items>
        </div>
    </div>
</template>

<script>
    import icon from './icon'
    export default {
        name: "cascaderItems",
        components:{
            yIcon: icon,
        },
        props: {
            data: {
                type: Array,
            },
            level: {
                type: Number,
                default: 0,
            }
        },
        data(){
            return {
                curItem: {},
            }
        },
        computed:{
            childrenData(){
                return this.curItem.children
            }
        },
        methods:{
           showChildren(item){
               this.curItem = item
           }
        }
    }
</script>

<style lang="scss" scoped>
    .cascader-items{
        display: flex;
        .parent{
            .item{
                padding: 0 30px 0 20px;
                height: 34px;
                line-height: 34px;
                &:hover{
                    background: #f5f7fa;
                }
            }
        }
        .child{
            border-left: 1px solid #e4e7ed;
        }
    }
</style>