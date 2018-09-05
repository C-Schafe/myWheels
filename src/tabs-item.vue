<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
            }
        },
        data(){
            return {
                active: false
            }
        },
        computed: {
            classes(){
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        inject: ['eventBus'],
        created(){
            if(this.eventBus){
                this.eventBus.$on('update:selected', (name)=>{
                    this.active = this.name === name;
                })
            }
        },
        methods: {
            onClick(){
                this.$emit('click')
                if(this.disabled){ return }
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item {
        display: flex;
        align-items: center;
        padding: 0 1em;
        height: 100%;
        cursor: pointer;
        &.active {
            color: blue;
        }
        &.disabled {
            cursor: not-allowed;
            color: #e1e1e1;
        }
    }
</style>