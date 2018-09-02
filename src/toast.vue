<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" :class="toastClasses">
            <slot v-if="!enableHTML"></slot>
            <div v-else v-html="$slots.default[0]"></div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "wheelsToast",
        props: {
            autoClose: {
                type: [ Boolean, Number],
                validator(value){
                    return value === true || typeof value === 'number';
                },
                default: false
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
                    this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
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
    @keyframes fade-in {
        0%{opacity: 0}
        100%{opacity: 1}
    }
    @keyframes slide-up {
        0%{transform: translateY(100%)}
        100%{transform: translateY(0)}
    }
    @keyframes slide-down {
        0%{transform: translateY(-100%)}
        100%{transform: translateY(0)}
    }
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
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
    .toast {
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        padding: 0 .5em;
        background-color: $toast-bg;
        color: #fff;
        border-radius: 5px;
        .close {
            flex-shrink: 0;
        }
        .line {
            border-left: 1px solid #fff;
            height: 100%;
            margin: 0 .5em;
        }
        &.position-top {
            animation: slide-down 300ms;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        &.position-middle {
            animation: fade-in 300ms;
        }
        &.position-bottom {
            animation: slide-up 300ms;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
</style>