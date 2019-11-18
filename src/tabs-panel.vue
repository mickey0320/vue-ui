<template>
    <div class="tabs-panel" :class="tabPanelActive" v-show="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabsPanel",
        inject: ['eventBus'],
        props:{
            name: {
                type: String
            }
        },
        data(){
            return {
                active: false
            }
        },
        computed: {
            tabPanelActive(){
                return this.active ? 'tab-panel-active' : ''
            }
        },
        created() {
            const { eventBus} = this
            eventBus.$on('update:selected', (name) => {
                if (name === this.name) {
                    this.active = true
                } else {
                    this.active = false
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-panel{
        padding: 8px;
        &.tab-panel-active{
        }
    }
</style>