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
    .y-button-group{
        display: inline-flex;
        > .y-button {
            &:not(:first-child){
                margin-left: -1px;
            }
            border-radius: 0;
            &:first-child{
                border-top-left-radius: var(--button-radius);
                border-bottom-left-radius: var(--button-radius);
            }
            &:last-child{
                border-top-right-radius: var(--button-radius);
                border-bottom-right-radius: var(--button-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>