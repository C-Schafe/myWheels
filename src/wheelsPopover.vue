<template>
    <div class="popover" @click.stop="xxx">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
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
                    console.log(e.target);
                    if(e.target === this.$refs.contentWrapper){ return }
                    if(this.visible === true){
                        console.log('按钮显示气泡');
                        console.log('监听document');
                        setTimeout(()=>{
                            let eventHandler = ()=>{
                                console.log('document关闭气泡');
                                this.visible = false
                                document.removeEventListener('click', eventHandler)
                                console.log('关闭document监听器');
                            }
                            document.addEventListener('click', eventHandler)
                        })
                    }else{
                        console.log('按钮关闭气泡');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover {
        position: relative;
        > .contentWrapper {
            position: absolute;
            top: -100%;
            left: 0;
        }
    }

</style>