<template>
    <div class="cascader">
        <div class="cascader-trigger" @click="show">

        </div>
        <div class="cascader-content" v-show="visible">
            <cascader-item
                    :data="data"
                    :selected="selected"
                    @update:selected="onUpdate">

            </cascader-item>
        </div>
    </div>
</template>

<script>
    import cascaderItem from './cascader-item';
    export default {
        name: "cascader",
        props: {
            data: {
                type: Array,
            },
            selected: {
                type: Array,
                default: () => []
            }
        },
        data(){
            return {
                visible: false,
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cascader{
        position: relative;
        .cascader-trigger{
            width: 300px;
            border: 1px solid red;
            height: 30px;
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