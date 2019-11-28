<template>
    <button class="y-button" :class="`icon-${direction}`" @click="$emit('click')">
        <y-icon v-if="icon && !loading" class="icon" :name="icon"></y-icon>
        <y-icon v-if="loading" class="loading" name="loading"></y-icon>
        <span class="text">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    import YIcon from '../icon/icon'
    export default {
        components:{YIcon},
        props:{
            icon:{
                type: String
            },
            direction:{
                type: String,
                default: 'left',
                validator(val){
                   return val === 'left' || val === 'right'
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../var";
    @keyframes spin {
       0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
   .y-button{
       font-size: $font-size;
       height: $button-height;
       padding: 0 1em;
       border-radius: $button-radius;
       border: 1px solid $border-color;
       background: $button-bg;
       display: inline-flex;
       align-items: center;
       justify-content: center;
       vertical-align: middle;
       &:hover{
           border-color: $border-color-hover;
       }
       &:active{
            background: $button-active-bg;
       }
       &:focus{
           outline: none;
       }
       &.icon-right{
           > .text{ order:1;}
           > .icon{order:2;}
           > .loading{order:2;}
       }
       .loading{
           animation: spin 2s infinite linear;
       }
   }
</style>