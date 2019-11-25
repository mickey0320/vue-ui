<template>
    <div class="cascader-items">
        <div class="parent">
            <div class="item" v-for="item in data" @click="onClickItem(item)">
                {{item.name}}
                <y-icon v-if="item.children" name="right"></y-icon>
            </div>

        </div>
        <div class="child" v-if="childrenData">
            <cascader-items
                    :data="childrenData"
                    :level="level + 1"
                    :selected="selected"
                    @update:selected="onUpdate">
            </cascader-items>
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
            },
            selected: {
                type: Array,
                default: () => []
            },
        },
        computed:{
            childrenData(){
                const currentItem = this.selected[this.level]
                if (currentItem && currentItem.children) {
                    return currentItem.children
                }
                return null
            }
        },
        methods:{
            onClickItem(item){
                const selectedCopy = JSON.parse(JSON.stringify(this.selected))
                selectedCopy.splice(this.level)
                selectedCopy[this.level] = item
                this.$emit('update:selected', selectedCopy)

            },
            onUpdate(selected){
               this.$emit('update:selected', selected)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cascader-items{
        display: flex;
        .parent{
            height: 200px;
            overflow: auto;
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