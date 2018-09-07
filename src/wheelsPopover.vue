<template>
    <div class="popover" @click="onClick" ref="popover">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper">
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
        data(){
            return {
                visible: false
            }
        },
        methods: {
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.top = window.scrollY + top + 'px'
                this.$refs.contentWrapper.style.left = window.scrollX + left + 'px'
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
    }
    .contentWrapper {
        position: absolute;
        transform: translateY(-100%);
    }

</style>