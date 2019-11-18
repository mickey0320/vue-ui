<template>
    <div class="tabs-item" :class="tabItemActive" @click="onTabChange">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        inject:['eventBus'],
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
                return this.active ? 'tab-item-active': ''
            }
        },
        methods:{
            onTabChange(){
                const { eventBus } = this
                eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        &.tab-item-active{
            background: red;
        }
    }
</style>