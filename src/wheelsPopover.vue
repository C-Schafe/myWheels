<template>
    <div class="popover" ref="popover" :position="position" :trigger="trigger">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper"
             :class="classes">
            <slot name="content" :close="close"></slot>
        </div>
        <span class="triggerWrapper" ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "wheelsPopover",
        props: {
          position: {
              type: String,
              default: 'top',
              validator(value){
                  return ['top', 'right', 'left', 'bottom'].indexOf(value) >= 0;
              }
          },
          trigger: {
              type: String,
              default: 'click',
              validator(value){
                  return ['click', 'hover'].indexOf(value) >= 0;
              }
          }
        },
        data(){
            return {
                visible: false
            }
        },
        mounted(){
            if(this.trigger === 'click'){
                this.$refs.popover.addEventListener('click', this.onClick)
            }else{
                this.$refs.popover.addEventListener('mouseenter', this.show)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed(){
            if(this.trigger === 'click'){
                this.$refs.popover.removeEventListener('click', this.onClick)
            }else{
                this.$refs.popover.removeEventListener('mouseenter', this.show)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        computed: {
          classes(){
              return {
                  [`position-${this.position}`]: true
              }
          }
        },
        methods: {
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                let x = {
                    top: {
                        top: window.scrollY + top,
                        left: window.scrollX + left
                    },
                    bottom: {
                        top: window.scrollY + top + height,
                        left: window.scrollX + left
                    },
                    left: {
                        top: window.scrollY + top + (height - height2)/2,
                        left: window.scrollX + left
                    },
                    right: {
                        top: window.scrollY + top + (height - height2)/2,
                        left: window.scrollX + left + width
                    }
                }
                    this.$refs.contentWrapper.style.top = x[this.position].top + 'px'
                    this.$refs.contentWrapper.style.left = x[this.position].left + 'px'
            },
            onClickDocument(e){
                if ( this.$refs.popover &&
                    (this.$refs.popover === e.target ||
                        this.$refs.popover.contains(e.target))) {
                    console.log('点击的是popover什么都不做');
                    return
                }
                if ( this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target ||
                        this.$refs.contentWrapper.contains(e.target))) {
                    console.log('点击的是气泡什么都不做');
                    return
                }
                console.log('document关闭气泡');
                this.close()
            },
            show(){
                this.visible = true
                this.$nextTick(()=> {
                    console.log('按钮显示气泡');
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close(){
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
                console.log("关闭监听器");
            },
            onClick(e){
                if(this.$refs.triggerWrapper.contains(e.target)){
                    if(this.visible === true){
                        this.close()
                    }else{
                        this.show()
                        console.log('按钮关闭气泡');
                    }
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .popover {
        position: relative;
        display: inline-block;
        vertical-align: top;
        > .triggerWrapper {
            display: inline-block;
        }
    }
    .contentWrapper.position-top {
        position: absolute;
        transform: translateY(-100%);
        border: 1px solid #000;
        border-radius: 5px;
        margin-top: -10px;
        padding: .5em 1em;
        filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
        background-color: #fff;
        max-width: 20em;
        word-break: break-all;
        &:before, &:after {
            content: '';
            border: 10px solid transparent;
            position: absolute;
            left: 10px;
            border-bottom: none;
        }
        &:before {
            border-top-color: #000;
            top: 100%;
        }
        &:after {
            border-top-color: #fff;
            top: calc(100% - 1px);
        }
    }
    .contentWrapper.position-bottom {
        position: absolute;
        border: 1px solid #000;
        border-radius: 5px;
        padding: .5em 1em;
        filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
        background-color: #fff;
        max-width: 20em;
        word-break: break-all;
        margin-top: 10px;
        &:before, &:after {
            content: '';
            border: 10px solid transparent;
            position: absolute;
            left: 10px;
            border-top: none;
        }
        &:before {
            border-bottom-color: #000;
            bottom: 100%;
        }
        &:after {
            border-bottom-color: #fff;
            bottom: calc(100% - 1px);
        }

    }
    .contentWrapper.position-left {
        position: absolute;
        transform: translateX(-100%);
        border: 1px solid #000;
        border-radius: 5px;
        padding: .5em 1em;
        filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
        background-color: #fff;
        max-width: 20em;
        word-break: break-all;
        margin-left: -10px;
        &:before, &:after {
            content: '';
            border: 10px solid transparent;
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            border-right: none;
        }
        &:before {
            border-left-color: #000;
            left: 100%;
        }
        &:after {
            border-left-color: #fff;
            left: calc(100% - 1px);
        }

    }
    .contentWrapper.position-right {
        position: absolute;
        border: 1px solid #000;
        border-radius: 5px;
        padding: .5em 1em;
        filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
        background-color: #fff;
        max-width: 20em;
        word-break: break-all;
        margin-left: 10px;
        &:before, &:after {
            content: '';
            border: 10px solid transparent;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-left: none;
        }
        &:before {
            border-right-color: #000;
            left: -10px;
        }
        &:after {
            border-right-color: #fff;
            left: -9px;
        }
    }

</style>