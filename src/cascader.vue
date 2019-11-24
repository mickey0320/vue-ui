<template>
    <div class="cascader">
        <div class="cascader-item" v-for="item in list">
            {{item.name}}
            <cascader v-if="item.children" :list="item.children"></cascader>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cascader",
        props: {
            list: Array,
        }
    }
</script>

<style lang="scss" scoped>
    .cascader-item{
        padding: 10px;
        border: 1px solid red;
    }
</style>