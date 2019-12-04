<template>
    <div class="col" :class="[colClass]" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "yCol",
        props: {
            span: {
                type: [Number, String],
            },
            offset: {
                type: [Number, String],
                default: 0,
            }
        },
        data(){
            return {
                gutter: 0,
            }
        },
        computed:{
            colClass(){
                return [`col-${this.span}`,`offset-${this.offset}`]
            },
            colStyle(){
                return {
                    paddingLeft: `${this.gutter/2}px`,
                    paddingRight: `${this.gutter/2}px`,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        box-sizing: border-box;
        $prefix: col-;
        @for $i from 1 through 24{
            &.#{$prefix}#{$i}{
                width: ($i / 24) * 100%;
            }
        }
        $prefix: offset-;
        @for $i from 1 through 24{
            &.#{$prefix}#{$i}{
                margin-left: ($i / 24) * 100%;
            }
        }
    }
</style>