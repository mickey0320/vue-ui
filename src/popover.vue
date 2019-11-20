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
    .popover{
        display: inline-block;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        border: 1px solid green;
    }
</style>