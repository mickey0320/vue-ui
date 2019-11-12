<template>
    <button class="y-button" :class="`icon-${direction}`">
        <icon v-if="icon" class="icon" :name="icon"></icon>
        <span class="text">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        components:{Icon},
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
            }
        }
    }
</script>
<style lang="scss" scoped>
   .y-button{
       font-size: var(--font-size);
       height: var(--button-height);
       padding: 0 1em;
       border-radius: var(--button-radius);
       border: 1px solid var(--border-color);
       background: var(--button-bg);
       display: inline-flex;
       align-items: center;
       justify-content: center;
       vertical-align: middle;
       &:hover{
           border-color: var(--border-color-hover);
       }
       &:active{
            background: var(--button-active-bg);
       }
       &:focus{
           outline: none;
       }
       &.icon-right{
           > .text{ order:1;}
           > .icon{order:2;}
       }
   }
</style>