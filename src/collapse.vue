<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "collapse",
        data(){
            return {
               eventBus: new Vue()
            }
        },
        props: {
            // 值为true时,可以同时展开多个collapse-item
            multiple: {
                type: Boolean,
                default: false,
            },
            selected: {
                type: Array,
            }
        },
        provide(){
            return {
                eventBus: this.eventBus,
            }
        },
        created(){
            this.eventBus.$on('update:selected', (selected) => {
               this.$emit('update:selected', selected)
            })
            this.eventBus.$on('update:addSelected', (name) => {
                let selectedClone = JSON.parse(JSON.stringify(this.selected))
                if(!this.multiple){
                    selectedClone = []
                }
                selectedClone.push(name)
                this.eventBus.$emit('update:selected', selectedClone)
            })
            this.eventBus.$on('update:removeSelected', (name) => {
                const index = this.selected.indexOf(name)
                this.selected.splice(index, 1)
                this.eventBus.$emit('update:selected', this.selected)
            })
        },
        mounted(){
            this.eventBus.$emit('update:selected', this.selected)
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .collapse{
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>