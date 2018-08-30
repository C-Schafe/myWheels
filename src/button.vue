<template>
    <button class="w-button louis" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
        <w-icon v-if="loading" class="loading icon" name="loading"></w-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from  './icon'
    export default {
        name:"w-button",
        components: {
            'w-icon': Icon
        },
        //props: ['icon', 'iconPosition']
        props: {
            icon:{},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
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
        .loading {
            animation: spin 1.5s infinite linear;
        }
    }
</style>