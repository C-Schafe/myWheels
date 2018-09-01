<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "wheelsToast"
    }
</script>
<style lang="scss" scoped>
    $toast-height: 40px;
    $font-size: 16px;
    $toast-bg: rgba(0,0,0, .75);
    .toast {
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        position: fixed;
        top: 0;
        left: 50%;
        display: flex;
        align-items: center;
        padding: 0 .5em;
        background-color: $toast-bg;
        color: #fff;
    }
</style>