<template>
    <div class="tabs-item" :class="tabItemActive" @click="onTabChange">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabsItem",
        inject:['eventBus'],
        props:{
            name: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                active: false
            }
        },
        created(){
            const { eventBus } = this
            eventBus.$on('update:selected', (name) => {
               if (name === this.name) {
                   this.active = true
               } else {
                   this.active = false
               }
            })
        },
        computed: {
            tabItemActive(){
                const classes = []
                if (this.active) {
                    classes.push('tab-item-active')
                }
                if (this.disabled) {
                    classes.push('tab-item-disabled')
                }

                return classes
            }
        },
        methods:{
            onTabChange(){
                const { eventBus,disabled } = this
                if (disabled) return
                eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../var";
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        display: flex;
        align-items: center;
        &.tab-item-active{
            color: $blue;
            font-weight: bold;
        }
        &.tab-item-disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>