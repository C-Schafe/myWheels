<template>
    <div class="wrapper" :class="{'error':error}">
        <input :value="value" :disabled="disabled" :readonly="readonly"
               :error="error"
               @change="$emit('change', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @input="$emit('input', $event.target.value)"
        >
        <template v-if="error">
            <icon class="errorIcon" name="error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        name:"wheelsInput",
        components: {Icon},
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
                default: ""
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    .wrapper{
        margin:20px 0;
        font-size: $font-size;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &.error .errorIcon{
            fill: #f44b3e;
        }
        &.error .errorMessage{
            color: #f44b3e;
        }
        > :not(:last-child){margin-right: .5em}
        > input{
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled]{
                border-color: #333;
                color: #333;
                cursor: not-allowed;
            }
            &[readonly]{
                border-color: #333;
                color: #333;
            }

        }
    }
</style>