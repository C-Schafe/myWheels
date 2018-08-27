<template>
    <button class="w-button">按钮</button>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .w-button {
        font-size: var(--font-size);
        padding: var(--padding);
        border: 1px solid var(--border);
        background-color: var(--button-bg);
        border-radius: var(--button-border-radius);
        &:hover {
            border-color: var(--button-hover-border);
        }
        &:active {
            border-color: var(--button-active-border);
            background-color: var(--button-active-bg);
        }
        &:focus {
            color: var(--button-focus-color);
        }
    }

</style>