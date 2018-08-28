<template>
    <button class="w-button" :class="{[`${iconPositon}`]: true}">
        <svg class="icon" v-if="icon" >
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: ['icon','iconPositon']
    }
</script>
<style lang="scss">
    .w-button {
        font-size: var(--font-size);
        padding: var(--padding);
        border: 1px solid var(--border);
        background-color: var(--button-bg);
        border-radius: var(--button-border-radius);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
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
        & > .icon {
            order:1; margin-right: .3em
        }
        & > .content {
            order:2
        }
        &.icon-right > .icon {
            order:2; margin-right:0; margin-left: .3em
        }
        &.icon-right > .content {
            order:1
        }
    }

</style>