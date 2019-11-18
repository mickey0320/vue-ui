<template>
    <div class="tabs-header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-header"
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-header{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
    }
</style>