<template>
    <div class="sticky-wrapper" ref="stickyWrapper" :style="{height,left,width}">
        <div class="sticky-inner" :class="{sticky}" :style="{top}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "stick",
        props: {
            distance: {
                type: Number,
                default: 0,
            }
        },
        data(){
            return {
                sticky: false,
                left: undefined,
                top: undefined,
                width: undefined,
                height: undefined,
            }
        },
        mounted() {
            const top = this.getTop()

            window.addEventListener('scroll', () => {
                if (window.scrollY > top - this.distance) {
                    const {left, width,height} = this.$refs.stickyWrapper.getBoundingClientRect()
                    this.width = width + 'px'
                    this.height = height + 'px'
                    this.top = this.distance + 'px'
                    this.left = left + 'px'
                    this.sticky = true
                }else {
                    this.sticky = false
                    this.width = undefined
                    this.height = undefined
                    this.left = undefined
                    this.top = undefined
                }
            })
        },
        methods: {
            getTop(){
                const { top } = this.$refs.stickyWrapper.getBoundingClientRect()

                return top + window.scrollY
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sticky-wrapper{
        display: inline-flex;
        .sticky-inner{
        }
        .sticky{
            position: fixed;
        }
    }
</style>