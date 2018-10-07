<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <div class="button-wrapper">
            <w-button icon="settings">设置</w-button>
            <w-button icon="loading" loading>加载中</w-button>
            <w-button icon="thumb-up">点赞</w-button>
            <w-button icon="download">下载</w-button>
        </div>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'

    export default {
        components: {
            'w-button': Button
        },
        data(){
            return {
                content:`
                    <w-button icon="settings">设置</w-button>
                    <w-button icon="loading">加载中</w-button>
                    <w-button icon="thumb-up">点赞</w-button>
                    <w-button icon="download">下载</w-button>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .button-wrapper {
        display: flex;
        align-items: center;
        button {
            margin-left: 10px;
        }
    }
</style>