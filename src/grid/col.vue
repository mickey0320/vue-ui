<template>
    <div class="col" :class="getColClasses()" :style="colStyle">
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
            },
            ipad: {
                type: Object,
            },
            narrowPc: {
                type: Object,
            },
            pc: {
                type: Object,
            },
            widePc: {
                type: Object,
            }
        },
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: `${this.gutter / 2}px`,
                    paddingRight: `${this.gutter / 2}px`,
                }
            }
        },
        methods: {
            getClass(prefix, prop = prefix) {
                const result = []
                result.push(`col-${prefix}-${this[prop].span}`)
                if (this[prop].offset){
                    result.push(`col-offset-${prefix}-${this[prop].offset}`)
                }

                return result
            },
            getColClasses() {
                const styles = []
                if (this.span) {
                    styles.push(`col-${this.span}`)
                }
                if (this.offset) {
                    styles.push(`col-offset-${this.offset}`)
                }
                this.ipad && styles.push(...this.getClass('ipad'))
                this.narrowPc && styles.push(...this.getClass('narrow-pc', 'narrowPc'))
                this.pc && styles.push(...this.getClass('pc'))
                this.widePc && styles.push(...this.getClass('wide-pc', 'widePc'))

                return styles

            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        box-sizing: border-box;
        $prefix: col-;
        @for $i from 1 through 24 {
            &.#{$prefix}#{$i} {
                width: ($i / 24) * 100%;
            }
        }
        $prefix: offset-;
        @for $i from 1 through 24 {
            &.#{$prefix}#{$i} {
                margin-left: ($i / 24) * 100%;
            }
        }
        @media (min-width: 577px) {
            $prefix: col-ipad-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    width: ($i / 24) * 100%;
                }
            }
            $prefix: offset-ipad-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    margin-left: ($i / 24) * 100%;
                }
            }
        }
        @media (min-width: 799px) {
            $prefix: col-narrow-pc-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    width: ($i / 24) * 100%;
                }
            }
            $prefix: offset-narrow-pc-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    margin-left: ($i / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $prefix: col-pc-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    width: ($i / 24) * 100%;
                }
            }
            $prefix: offset-pc-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    margin-left: ($i / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $prefix: col-wide-pc-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    width: ($i / 24) * 100%;
                }
            }
            $prefix: offset-wide-pc-;
            @for $i from 1 through 24 {
                &.#{$prefix}#{$i} {
                    margin-left: ($i / 24) * 100%;
                }
            }
        }
    }
</style>