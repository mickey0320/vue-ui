<template>
    <button class="y-button" :class="`icon-${direction}`">
        <y-icon v-if="icon && !loading" class="icon" :name="icon"></y-icon>
        <y-icon v-if="loading" class="loading" name="loading"></y-icon>
        <span class="text">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    import YIcon from './icon'
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
    @keyframes spin {
       0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
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
           > .loading{order:2;}
       }
       .loading{
           animation: spin 2s infinite linear;
       }
   }
</style>