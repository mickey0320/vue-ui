<template>
    <div class="y-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    @import "./var";
    .y-button-group{
        display: inline-flex;
        > .y-button {
            &:not(:first-child){
                margin-left: -1px;
            }
            border-radius: 0;
            &:first-child{
                border-top-left-radius: $button-radius;
                border-bottom-left-radius: $button-radius;
            }
            &:last-child{
                border-top-right-radius: $button-radius;
                border-bottom-right-radius: $button-radius;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>