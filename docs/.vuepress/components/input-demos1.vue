<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-input value="wheels UI是个组件库" disabled></w-input>
        <w-input value="wheels UI是个UI组件库" readonly="true"></w-input>
        <w-input value="我的回答正确吗？" error="错误"></w-input>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'w-input': Input
        },
        data(){
            return {
                content:`
                    <w-input value="wheels UI是个组件库" disabled></w-input>
                    <w-input value="wheels UI是个UI组件库" readonly="true"></w-input>
                    <w-input value="我的回答正确吗？" error="错误"></w-input>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .row {
        margin: 10px 0;
    }
    .demo {
        background-color: #3eaf7c;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
    }
</style>