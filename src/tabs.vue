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
            console.log(selected)
            eventBus.$emit('update:selected', selected)
        },

    }
</script>

<style lang="scss" scoped>

</style>