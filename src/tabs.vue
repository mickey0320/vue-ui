<template>
   <div class="tabs">
       <slot></slot>
   </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "tabs",
        props:{
            selected:{
                type: String,
                required: true,
            },
            direction:{
                type: String,
                default: 'horizontal',
                validator(val){
                    return ['horizontal','vertical'].includes(val)
                }
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            return {
                eventBus: this.eventBus
            }
        },
        mounted(){
            const { eventBus, selected } = this
            const selectedComp = this._findActiveItem()
            eventBus.$on('update:selected', (selected) => {
                this.$emit('update:selected', selected)
            })
            eventBus.$emit('update:selected', selected, selectedComp)
        },
        methods: {
            _findActiveItem(){
                const headerComp = this.$children.find(child => child.$options.name === 'tabsHeader')
                const itemComp = headerComp.$children.find(child => child.name === this.selected)

                return itemComp
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>