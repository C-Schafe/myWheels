<template>
    <div class="col" :class="colClass" :style="colStyle">
            <slot></slot>
    </div>
</template>
<script>

    function  validator(value){
            let keys = Object.keys(value)
            let valid = true
            keys.forEach((key)=>{
                if(!['span', 'offset'].includes(key)){
                    valid = false
                }
            })
            return valid
        }

    export default {
        name: "wheelsCol",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            phone: { type: Object, validator,},
            ipad: { type: Object, validator,},
            narrowPc: { type: Object, validator,},
            pc: { type: Object, validator,},
            largePc: { type: Object, validator,}
        },
        data(){
            return {
                gutter:0
            }
        },
        methods: {
            createClasses(obj, str=""){
                if(!obj) {return []}
                let array = []
                if(obj.span){
                    array.push(`col-${str}${obj.span}`)
                }
                if(obj.offset){
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colStyle(){
                return {
                    paddingLeft: this.gutter/2+'px',
                    paddingRight: this.gutter/2+'px'
                }
            },
            colClass(){
                let {span, offset, ipad, narrowPc, pc, largePc} = this
                let createClasses = this.createClasses
                return [
                    ...createClasses({span, offset}),
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrowPc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(largePc, 'largePc-')

                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
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
        @media (min-width: 577px){
            $class: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px){
            $class: col-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1200px){
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1600px){
            $class: col-largePc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-largePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

    }
</style>