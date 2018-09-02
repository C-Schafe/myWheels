<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
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
            },
            position: {
                type: String,
                default: 'top'
            }
        },
        computed: {
          toastClasses(){
              return {
                  [`position-${this.position}`]:true
              }
          }
        },
        methods: {
            close(){
                this.$el.remove();
                this.$emit('close');
                this.$destroy()
            },
            onClickClose(){
                this.close();
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback()
                }
            },
            updateStyle(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
                })
            },
            executeAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            }
        },
        mounted(){
            this.executeAutoClose()
            this.updateStyle()
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
        &.position-top {
            top: 0;
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
        &.position-bottom {
            bottom: 0;
        }
    }
</style>