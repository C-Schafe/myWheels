<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-button @click="showToast">点我</w-button>
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
                    <w-button @click="showToast">点我</w-button>

            methods:{
                showToast(){
                    this.$toast('这是我的博客：<a href="https://www.jianshu.com/u/c2e786a7a188" target="_blank">Blog</a>', {
                        autoClose: 5,
                        closeButton: {
                            text: "好的",
                            callback: ()=>{}
                        },
                        enableHTML: true
                    })
                }
            }
                `.replace(/^ {8}/gm, '').trim(),
                selected: '1'
            }
        },
        methods:{
            showToast(){
                this.$toast('这是我的博客：<a href="https://www.jianshu.com/u/c2e786a7a188" target="_blank">Blog</a>', {
                    autoClose: 5,
                    closeButton: {
                        text: "好的",
                        callback: ()=>{}
                    },
                    enableHTML: true
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