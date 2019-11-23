<template>
   <div class="collapse-item">
      <div class="title" @click="onToggle">
         {{title}}
      </div>
       <div class="content" v-if="visible">
           <slot></slot>
       </div>
   </div>
</template>

<script>
    export default {
        name: "collapse-item",
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
            },
            name: {
                type: String,
            }
        },
        data() {
           return {
               visible: false,
           }
        },
        created(){
            this.eventBus.$on('update:selected', (selected) => {
               if(selected.includes(this.name)){
                   this.visible = true
               }else {
                   this.visible = false
               }
            })
        },
        methods: {
            onToggle() {
                if (!this.visible) {
                   this.eventBus.$emit('update:addSelected', this.name)
                } else{
                    this.eventBus.$emit('update:removeSelected', this.name)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .collapse-item{
        > .title{
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            border: 1px solid $border-color;
            margin: -1px;
            margin-bottom: 0;
        }
        &:first-child{
            > .title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .content{
            padding: 0 8px;
        }
    }
</style>