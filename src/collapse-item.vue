<template>
    <div class="w-collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wheelsCollapseItem",
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                open: false
            }
        },
        methods: {
            toggle(){
                if(this.open === false){
                    this.eventBus.$emit('update:addSelected', this.name)
                }else{
                    this.eventBus.$emit('update:removeSelected', this.name)
                }
            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(names)=>{
                if(names.indexOf(this.name)>=0){
                    this.open = true
                }else{
                    this.open = false
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    $item-border-color: #000;
    $border-radius: 3px;
    .w-collapse-item {
        //border: 1px solid $item-border-color;
        //border-radius: $border-radius;
        margin-top: -1px;
        &:first-child {
            .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
                margin-bottom: -1px;
            }
        }
        .title {
            border: 1px solid $item-border-color;
            margin-left: -1px;
            margin-right: -1px;
            background-color: #fafafa;
            padding: 0 14px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }
        .content {
            color: #a2a2a2;
            padding: 0 14px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }


    }
</style>