<template>
    <div class="popover" @click="onClick" ref="popover" :position="position">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper"
             :class="classes">
            <slot name="content"></slot>
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
          }
        },
        data(){
            return {
                visible: false
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
                if(this.position === 'top'){
                    let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.top = window.scrollY + top + 'px'
                    this.$refs.contentWrapper.style.left = window.scrollX + left + 'px'
                }else if(this.position === 'bottom'){
                    let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.top = window.scrollY + top + height +'px'
                    this.$refs.contentWrapper.style.left = window.scrollX + left + 'px'
                }else if(this.position === 'left'){
                    let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                    let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.top = window.scrollY + top + (height - height2)/2 +  'px'
                    this.$refs.contentWrapper.style.left = window.scrollX + left + 'px'
                }else if(this.position === 'right'){
                    let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                    let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.top = window.scrollY + top + (height - height2)/2 +  'px'
                    this.$refs.contentWrapper.style.left = window.scrollX + left + width + 'px'
                }

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
        }
        &:before {
            border-right-color: #000;
            left: -20px;
        }
        &:after {
            border-right-color: #fff;
            left: -19px;
        }
    }

</style>