<template>
    <div class="popover">
        <div class="content-wrapper" :class="positionClass" ref="contentWrapper" v-show="visible">
            <slot name="content"></slot>
        </div>
        <div class="operate-wrapper"  ref="operateWrapper" @click="onAction">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(val){
                   return ['top','right','bottom','left'].includes(val)
                }
            }
        },
        data() {
            return {
                visible: false,
            }
        },
        computed:{
            positionClass(){
                return `popover-${this.position}`
            }
        },
        methods: {
            addDocEvent(){
                this.docEvent = (e) => {
                    if(this.$refs.contentWrapper.contains(e.target)){
                        console.log('点击的是content，不关闭')
                        return
                    }
                    this.close()
                }
                console.log('添加doc事件');
                document.addEventListener('click', this.docEvent)
            },
            close(){
                this.visible = false
                console.log('移除doc事件');
                document.removeEventListener('click', this.docEvent)
            },
            appendToBody(){
               const contentWrapper = this.$refs.contentWrapper
                document.body.appendChild(contentWrapper)
            },
            setPosition(target){
                const contentWrapper = this.$refs.contentWrapper
                const { scrollLeft, scrollTop } = document.documentElement
                const { left, top, height,width } = target.getBoundingClientRect()
                const { height: targetH } = contentWrapper.getBoundingClientRect()
                const positionMap = {
                    top: {
                        left:scrollLeft + left,
                        top: scrollTop + top
                    },
                    bottom:{
                        left: scrollLeft + left,
                        top: scrollTop + top + height,
                    },
                    left: {
                        left:scrollLeft + left,
                        top:scrollTop + top + (height - targetH)/2,
                    },
                    right: {
                        left:scrollLeft + left + width,
                        top:scrollTop + top + (height - targetH)/2,
                    }
                }
                contentWrapper.style.left = `${positionMap[this.position].left}px`
                contentWrapper.style.top = `${positionMap[this.position].top}px`
            },
            onAction(e){
                if (!this.visible) {
                    this.visible = true
                    this.$nextTick(() => {
                        this.appendToBody()
                        this.setPosition(e.target)
                    })
                    setTimeout(() => {
                        this.addDocEvent()
                    })
                } else {
                    this.close()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $content-border-color: #333;
    $content-border-radius: 4px;
    .popover{
        display: inline-block;
        position: relative;
        .operate-wrapper{
            display: inline-flex;
        }
    }
    .content-wrapper{
        position: absolute;
        /*box-shadow: 0 0 3px rgba(0,0,0,.5);*/
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
        background: #fff;
        border: 1px solid $content-border-color;
        border-radius: $content-border-radius;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &:before,&:after{
            content: '';
            display: block;
            position: absolute;
            border: 10px solid transparent;
        }
        &.popover-top{
            transform: translateY(-100%);
            margin-top: -10px;
            &:before,&:after{
                left: 10px;
                transform: translateY(100%);
            }
            &:before{
                bottom: 0;
                border-top-color: #000;
            }
            &:after{
                bottom: 1px;
                border-top-color: #fff;
            }
        }
        &.popover-bottom{
            margin-top: 10px;
            transform: translateY(0);
            &:before,&:after{
              left: 10px;
              transform: translateY(-100%);
          }
            &:before{
                border-bottom-color: #000;
                top: 0;
            }
            &:after{
                top: 1px;
                border-bottom-color: #fff;
            }
        }
        &.popover-left{
            margin-left: -10px;
            transform: translateX(-100%);
            &:before,&:after{
                right: 0;
                top: 50%;
                transform: translate(100%,-50%);
            }
            &:before{
                border-left-color: #000;
            }
            &:after{
                border-left-color: #fff;
                right: 1px;
            }
        }
        &.popover-right{
            margin-left: 10px;
            &:before,&:after{
                left: 0;
                top: 50%;
                transform: translate(-100%,-50%);
            }
            &:before{
                border-right-color: #000;
            }
            &:after{
                border-right-color: #fff;
                left: 1px;
            }
        }
    }
</style>