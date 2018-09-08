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
                type: Array
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
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            this.eventBus.$on('update:addSelected',(name)=>{
                if(this.single){
                    selectedCopy = [name]
                    this.$emit('update:selected', selectedCopy)
                }else{
                    selectedCopy.push(name)
                    this.$emit('update:selected', selectedCopy)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
            })
            this.eventBus.$on('update:removeSelected',(name)=>{
                if(this.single){
                    selectedCopy = []
                    this.$emit('update:selected', selectedCopy)
                }else{
                    let index = selectedCopy.indexOf(name)
                    selectedCopy.splice(index, 1)
                    this.$emit('update:selected', selectedCopy)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
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