<template>
    <div class="toast-wrapper" :class="toastPosition">
        <div class="toast">
            <span class="text" v-if="!enableHtml"><slot></slot></span>
            <div v-else v-html="$slots.default[0]"></div>
            <span class="close" @click="onClose">{{closeButton.text}}</span>
        </div>
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
                return `toast-wrapper-${this.position}`
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
                this.$emit('close')
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
    @keyframes fade-in {
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
    @keyframes fade-in-top {
        0%{opacity: 0; transform: translateY(-100%);}
        100%{opacity: 1; transform: translateY(0);}
    }
    @keyframes fade-in-bottom {
        0%{opacity: 0; transform: translateY(100%);}
        100%{opacity: 1; transform: translateY(0%);}
    }
    $font-size: 14px;
    $toast-height: 40px;
    $toast-width: 320px;
    $toast-border-radius: 4px;
    $toast-bg: rgba(0,0,0,.75);
    .toast-wrapper{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        &.toast-wrapper-top{
            top: 0;
            > .toast{
                animation: fade-in-top 1s;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        &.toast-wrapper-middle{
            top: 50%;
            transform: translate(-50%,-50%);
        }
        &.toast-wrapper-bottom{
            bottom: 0;
            > .toast{
                animation: fade-in-bottom 1s;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }

    .toast{
        animation: fade-in 1s;
        font-size: $font-size;
        color: white;
        max-width: $toast-width;
        line-height: 1.8;
        background: $toast-bg;
        display: flex;
        padding: 0 16px;
        border-radius: $toast-border-radius;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        .text{
            display: flex;
            align-items: center;
            padding: 4px 0;
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
    }
</style>