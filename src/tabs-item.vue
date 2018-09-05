<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "wheelsTabsItem",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                required: true
            },
            test: 'items发送的数据',
        },
        data(){
            return {
                active: false
            }
        },
        computed: {
            classes(){
                return {
                    active: this.active
                }
            }
        },
        inject: ['eventBus'],
        created(){
            this.eventBus.$on('update:selected', (name)=>{
                if( this.name === name ){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        },
        methods: {
            onClick(){
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item {
        border: 1px solid red;
        display: flex;
        align-items: center;
        padding: 0 1em;
        height: 100%;
        &.active {
            background-color: red;
        }
    }
</style>