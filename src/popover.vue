<template>
    <div class="popover">
        <div class="content-wrapper" ref="contentWrapper" v-show="visible">
            <slot name="content"></slot>
        </div>
        <div class="operate-wrapper" ref="operateWrapper" @click="onAction">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popover",
        data() {
            return {
                visible: false,
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
                const { left, top } = target.getBoundingClientRect()
                contentWrapper.style.left = `${scrollLeft + left}px`
                contentWrapper.style.top = `${scrollTop + top}px`
            },
            onAction(e){
                if (!this.visible) {
                    this.visible = true
                    this.appendToBody()
                    this.setPosition(e.target)
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
    }
    .content-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        margin-top: -10px;
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
            left: 10px;
            transform: translateY(100%);
            border: 10px solid transparent;
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
</style>