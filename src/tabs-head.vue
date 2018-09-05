<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
        <div class="line" ref="line"></div>
    </div>
</template>
<script>
    export default {
        name: "wheelsTabsHead",
        props: {},
        inject: ['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected', (name, item)=>{
                console.log(item);
                console.log(item.$el.getBoundingClientRect());
            })
        }

    }
</script>
<style lang="scss" scoped>
    $tabs-height: 40px;
    $line-color: blue;
    .tabs-head {
        height: $tabs-height;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid green;
        position: relative;
        > .actions-wrapper {
            margin-left: auto;
        }
        > .line {
            position: absolute;
            bottom:0;
            left:0;
            width: 50px;
            border: 3px solid $line-color;
        }
    }
</style>