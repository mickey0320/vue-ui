<template>
    <div class="wrapper" :class="{error:error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        />
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="error-msg">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: "YInput",
        components:{icon: Icon},
        props:{
            value: {
                type: String,
            },
            disabled:{
                type: Boolean,
                default: false,
            },
            readonly:{
                type: Boolean,
                default: false,
            },
            error:{
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .wrapper{
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child){margin-right: .5em; }
        > input{
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $border-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly]{
                border-color: #ccc;
                color: #ccc;
                cursor: not-allowed;
            }
        }
        &.error{
            > input{
                border-color: $red;
            }
            .icon-error{
                fill: $red;
            }
            .icon-msg{
                color: $red;
            }
        }
    }
</style>