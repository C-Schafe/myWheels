<template>
    <div class="popover" @click.stop="xxx">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper" @click.stop>
            <slot name="content"></slot>
        </div>
        <div class="triggerWrapper" ref="triggerWrapper">
            <slot></slot>
        </div>
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
            xxx(e){
                this.visible = !this.visible
                this.$nextTick(()=>{
                    console.log(this.$refs.contentWrapper);
                    document.body.appendChild(this.$refs.contentWrapper)
                    console.log(this.$refs.triggerWrapper.getBoundingClientRect());
                    let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.top = window.scrollY + top + 'px'
                    this.$refs.contentWrapper.style.left = window.scrollX + left + 'px'
                    if(this.visible === true){
                        //console.log('按钮显示气泡');
                        //console.log('监听document');
                        setTimeout(()=>{
                            let eventHandler = ()=>{
                                //console.log('document关闭气泡');
                                this.visible = false
                                document.removeEventListener('click', eventHandler)
                                //console.log('关闭document监听器');
                            }
                            document.addEventListener('click', eventHandler)
                        })
                    }else{
                        //console.log('按钮关闭气泡');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover {
        position: relative;

    }
    .contentWrapper {
        position: absolute;
        transform: translateY(-100%);
    }

</style>