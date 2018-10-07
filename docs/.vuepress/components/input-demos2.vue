<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-input v-model="message"></w-input>
        <p style="margin-top: 0">您输入的内容是：{{message}}</p>
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
                    // template 内容
                    <w-input v-model="message"></w-input>
                    <p style="margin-top: 0">您输入的内容是：{{message}}</p>

                    // data 内容
                    data：{
                        message: '请尝试改变输入框的内容'
                    }
                `.replace(/ {8}/gm, '').trim(),
                message: '请尝试改变输入框的内容'
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