<template>
    <div class="w-collapse">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: "wheelsCollapse",
        props: {
            selected: {
                type: String
            },
            single: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            return {
                eventBus: this.eventBus
            }
        },
        mounted(){
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:selected',(name)=>{
                this.$emit('update:selected', name)
            })
            this.$children.forEach((vm)=>{
                vm.single = this.single
            })
        }
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