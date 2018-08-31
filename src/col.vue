<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]" ></div>
</template>
<script>
    export default {
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 50px;
        background-color: #666;
        border: 1px solid red;

        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n}{
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>