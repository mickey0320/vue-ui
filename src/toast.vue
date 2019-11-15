<template>
   <div class="toast">
       <slot v-if="!enableHtml"></slot>
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
            }
        },
        mounted() {
            if(this.isAutoClose){
                setTimeout(() => {
                    this.remove()
                }, this.duration * 1000)
            }
        },
        methods: {
            remove(){
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
    $toast-border-radius: 4px;
    $toast-bg: rgba(0,0,0,.75);
    .toast{
        font-size: $font-size;
        min-height: $toast-height;
        line-height: 1.8;
        background: $toast-bg;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        color: white;
        border-radius: $toast-border-radius;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        padding: 0 16px;
        .line{

        }
        .close{

        }
    }
</style>