<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: "wheelsTabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal', 'vertical'].indexOf(value) >= 0;
                }
            }
        },
        methods: {

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
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'wheelsTabsHead'){
                    vm.$children.forEach((vmChild)=>{
                        if(vmChild.$options.name === 'wheelsTabsItem' && vmChild.name === this.selected){
                            this.eventBus.$emit('update:selected', this.selected, vmChild)
                        }
                    })
                }
            })
        }
    }
</script>
<style lang="scss" scoped>

</style>