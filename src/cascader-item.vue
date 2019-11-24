<template>
    <div class="cascader-item">
        <div class="parent">
            <div class="item" v-for="item in data" @click="showChildren(item)">{{item.name}}</div>
        </div>
        <div class="child" v-if="childrenData">
            <cascader-item :data="childrenData" :level="level + 1"></cascader-item>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cascaderItem",
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
    .cascader-item{
        display: flex;
    }
</style>