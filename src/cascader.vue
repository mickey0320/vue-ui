<template>
    <div class="cascader">
        <div class="cascader-trigger">

        </div>
        <div class="cascader-content">
            <cascader-item :data="data"></cascader-item>
        </div>
    </div>
</template>

<script>
    import cascaderItem from './cascader-item';
    export default {
        name: "cascader",
        props: {
            data: Array,
        },
        components:{
            cascaderItem,
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
        }
    }
</style>