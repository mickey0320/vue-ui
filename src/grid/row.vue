<template>
    <div class="row" ref="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "yRow",
        props: {
            gutter: {
                type: [Number, String],
            }
        },
        computed:{
            rowStyle(){
                return {
                    marginLeft: `-${this.gutter/2}px`,
                    marginRight: `-${this.gutter/2}px`,
                }
            }
        },
        mounted() {
            this.$children.forEach(child => {
                child.gutter = this.gutter
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
    }
</style>