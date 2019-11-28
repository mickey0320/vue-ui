<template>
    <div class="cascader">
        <div class="cascader-trigger" @click="show">
            <span>{{value}}</span>
        </div>
        <div class="cascader-content" v-show="visible">
            <cascader-item
                    :data="data"
                    :selected="selected"
                    @update:selected="onUpdate"
                    :loadData="loadData">

            </cascader-item>
        </div>
    </div>
</template>

<script>
    import cascaderItem from '../cascader/cascader-item';
    export default {
        name: "cascader",
        props: {
            data: {
                type: Array,
            },
            selected: {
                type: Array,
                default: () => []
            },
            loadData: {
                type: Function,
            }
        },
        data(){
            return {
                visible: false,
            }
        },
        computed:{
            value(){
                return this.selected.map(item => item.name).join('/')
            }
        },
        components:{
            cascaderItem,
        },
        methods: {
            show(){
               this.visible = true
            },
            onUpdate(selected){
                this.$emit('update:selected', selected)
                const currentItem = selected[selected.length - 1]
                this.loadData(currentItem, (result) => {
                    const clickedItem = this.findItem(currentItem.id,this.data)
                    if(clickedItem){
                        clickedItem.children = result
                    }
                    const dataClone = JSON.parse(JSON.stringify(this.data))
                    this.$emit('update:data', dataClone)
                })
            },
            findItem(id, data){
               const _findItem = (data, id) => {
                   if(!data || !data.length) return null;
                   for(let item of data){
                       if(item.id === id){
                           return item;
                       }
                   }
                   let targetItem = null
                   for(let item of data){
                       if(item.children){
                           targetItem = _findItem(item.children, id)
                           if(targetItem) {
                               return targetItem;
                           }
                       }
                   }
                   return null;
               }
               return _findItem(data, id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../var";
    .cascader{
        font-size: $font-size;
        position: relative;
        .cascader-trigger{
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            height: 30px;
            min-width: 100px;
            display: inline-flex;
            align-items: center;
        }
        .cascader-content{
            position: absolute;
            top: 100%;
            border: 1px solid #e4e7ed;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            background: #fff;
        }
    }
</style>