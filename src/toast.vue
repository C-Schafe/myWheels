<template>
    <div class="toast" ref="wrapper">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name: "wheelsToast",
        props: {
            autoClose: {
                type: Boolean,
                default: false
            },
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
                default(){
                    return {
                        text: "关闭",
                        callback: undefined
                    }
                }
            },
            enableHTML: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback()
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(()=>{
                this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
            })
        }
    }
</script>
<style lang="scss" scoped>
    $toast-min-height: 40px;
    $font-size: 16px;
    $toast-bg: rgba(0,0,0, .75);
    .toast {
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        position: fixed;
        top: 0;
        left: 50%;
        display: flex;
        align-items: center;
        padding: 0 .5em;
        background-color: $toast-bg;
        color: #fff;
        border-radius: 3px;
        transform: translateX(-50%);
        .close {
            flex-shrink: 0;
        }
        .line {
            border-left: 1px solid #fff;
            height: 100%;
            margin: 0 .5em;
        }
    }
</style>