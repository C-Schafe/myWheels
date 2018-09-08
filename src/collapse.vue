<template>
    <div class="w-collapse">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "wheelsCollapse"
    }
</script>

<style lang="scss" scoped>
    $border-color: #ddd;
    $border-radius: 3px;
    .w-collapse {
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>