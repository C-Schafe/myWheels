<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "wheelsTabsPane",
        inject: ['eventBus'],
        props: {
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
                    active: this.active
                }
            }
        },
        created(){
            this.eventBus.$on('update:selected', (name)=>{
                if( this.name === name ){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-pane {

        &.active {

        }
    }
</style>