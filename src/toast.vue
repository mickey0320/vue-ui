<template>
   <div class="toast">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "toast"
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-border-radius: 4px;
    $toast-bg: rgba(0,0,0,.75);
    .toast{
        font-size: $font-size;
        height: $toast-height;
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
    }
</style>