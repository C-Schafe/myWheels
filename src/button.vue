<template>
    <button class="w-button louis" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
        <w-icon v-if="loading" class="loading icon" name="loading"></w-icon>
        <div class="layout">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from  './icon'
    export default {
        name:"WheelsButton",
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
    $font-size: 14px;
    $padding: 6px .9em;
    $border: #999;
    $button-bg: #fff;
    $button-hover-border: #666;
    $button-active-border: #a2a2a2;
    $button-active-bg: #e1e1e1;
    $button-focus-color: #333;
    $button-border-radius: 4px;
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
    .w-button {
        font-size: $font-size;
        padding: $padding;
        border: 1px solid $border;
        background-color: $button-bg;
        border-radius: $button-border-radius;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $button-hover-border;
        }
        &:active {
            border-color: $button-active-border;
            background-color: $button-active-bg;
        }
        &:focus {
            color: $button-focus-color;
        }
        & > .icon {
            order:1; margin-right: .3em
        }
        & > .layout {
            order:2
        }
        &.icon-right > .icon {
            order:2; margin-right:0; margin-left: .3em
        }
        &.icon-right > .layout {
            order:1
        }
        .loading {
            animation: spin 1.5s infinite linear;
        }
    }
</style>