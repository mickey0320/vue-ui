<template>
   <div class="collapse-item">
      <div class="title" @click="xx">
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
        props: {
            title: {
                type: String,
            }
        },
        data() {
           return {
               visible: false,
           }
        },
        methods: {
            xx() {
                this.visible = !this.visible
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #ddd;
    $border-radius: 4px;
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