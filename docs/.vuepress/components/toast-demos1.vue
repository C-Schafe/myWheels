<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-button @click="$toast('谁动了我的代码 ？', {autoClose: 3})">点我</w-button>
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
                    <w-button @click="$toast('谁动了我的代码 ？', {autoClose: 3})">点我</w-button>
                `.replace(/ {8}/gm, '').trim(),
                selected: '1'
            }
        },
        methods:{
            showToast(){
                this.$toast('谁动了我的代码 ？', {
                    autoClose: 3
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