<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-button @click="showToastTop">上面</w-button>
        <w-button @click="showToastMiddle">中间</w-button>
        <w-button @click="showToastBottom">下面</w-button>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import plugin from '../../../src/plugin'
    import button from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default {
        components: {
            'w-button': button
        },
        data(){
            return {
                content:`
            <w-button @click="showToastTop">上面</w-button>
            <w-button @click="showToastMiddle">中间</w-button>
            <w-button @click="showToastBottom">下面</w-button>

            methods:{
                showToastTop(){
                    this.$toast(' 你快乐吗 ?', {
                        autoClose: 5,
                        closeButton: {
                            text: "我很快乐",
                            callback: ()=>{}
                        },
                        position: 'top'
                    })
                },
                showToastMiddle(){
                    this.$toast(' 你快乐吗 ?', {
                        autoClose: 5,
                        closeButton: {
                            text: "我很快乐",
                            callback: ()=>{}
                        },
                        position: 'middle'
                    })
                },
                showToastBottom(){
                    this.$toast(' 你快乐吗 ?', {
                        autoClose: 5,
                        closeButton: {
                            text: "我很快乐",
                            callback: ()=>{}
                        },
                        position: 'bottom'
                    })
                }
            }
                `.replace(/^ {8}/gm, '').trim(),
                selected: '1'
            }
        },
        methods:{
            showToastTop(){
                this.$toast(' 你快乐吗 ?', {
                    autoClose: 5,
                    closeButton: {
                        text: "我很快乐",
                        callback: ()=>{}
                    },
                    position: 'top'
                })
            },
            showToastMiddle(){
                this.$toast(' 你快乐吗 ?', {
                    autoClose: 5,
                    closeButton: {
                        text: "我很快乐",
                        callback: ()=>{}
                    },
                    position: 'middle'
                })
            },
            showToastBottom(){
                this.$toast(' 你快乐吗 ?', {
                    autoClose: 5,
                    closeButton: {
                        text: "我很快乐",
                        callback: ()=>{}
                    },
                    position: 'bottom'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
</style>