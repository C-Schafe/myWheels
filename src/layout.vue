<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data(){
          return {
              layoutClass: {
                  hasSider: false
              }
          }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "wheelsSider"){
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>