<template>
   <div class="toast" :class="toastPosition">
       <span class="text" v-if="!enableHtml"><slot></slot></span>
       <div v-else v-html="$slots.default[0]"></div>
       <span class="close" @click="onClose">{{closeButton.text}}</span>
   </div>
</template>

<script>
    export default {
        name: "toast",
        props:{
            isAutoClose:{
                type: Boolean,
                default: true
            },
            duration: {
                type: Number,
                default: 2
            },
            closeButton:{
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        close(){

                        }
                    }
                }
            },
            enableHtml:{
                type: Boolean,
                default: false
            },
            position:{
                type: String,
                default: 'top',
                validator(val){
                    return ['top','middle','bottom'].includes(val)
                }
            }
        },
        computed:{
            toastPosition(){
                return `toast-${this.position}`
            }
        },
        mounted() {
            if(this.isAutoClose){
                setTimeout(() => {
                    this.close()
                }, this.duration * 1000)
            }
        },
        methods: {
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onClose() {
                this.close()
                this.closeButton.close()
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-width: 320px;
    $toast-border-radius: 4px;
    $toast-bg: rgba(0,0,0,.75);
    .toast{
        font-size: $font-size;
        min-height: $toast-height;
        max-width: $toast-width;
        line-height: 1.8;
        background: $toast-bg;
        position: absolute;
        left: 50%;
        display: flex;
        color: white;
        border-radius: $toast-border-radius;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        padding: 0 16px;
        .text{
            display: flex;
            align-items: center;
            padding: 8px 0;
        }
        .close{
            position: relative;
            margin-left: 10px;
            padding-left: 10px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            &::before{
                content: '';
                width: 1px;
                position: absolute;
                left: 0;
                top:0;
                bottom: 0;
                background-color: #666;
            }
        }
        &.toast-top{
            top: 0;
            transform: translateX(-50%);
        }
        &.toast-middle{
            top: 50%;
            
            transform: (-50%,-50%);
        }
        &.toast-bottom{
            bottom: 0;
            transform: translateX(-50%);
        }
    }
</style>