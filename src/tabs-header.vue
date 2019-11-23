<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: "tabsHeader",
        inject: ['eventBus'],
        created(){
            this.eventBus.$on('update:selected', (name, selectedVm) => {
                const { left, width } = selectedVm.$el.getBoundingClientRect()
                const line = this.$refs.line
                line.style.left = `${left}px`
                line.style.width = `${width}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .tabs-header{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid #ddd;
        > .line{
            position: absolute;
            border-bottom: 2px solid $blue;
            bottom: 0;
            transition: all .5s;
        }
    }
</style>