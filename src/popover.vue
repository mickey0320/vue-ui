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
            onAction(){
                if (!this.visible) {
                    this.visible = true
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
        .content-wrapper{
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(-100%);
            border: 1px solid green;
        }
    }
</style>