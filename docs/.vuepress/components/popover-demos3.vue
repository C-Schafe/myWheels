<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-popover trigger="click">
            <w-button>点击触发</w-button>
            <template slot="content">
                这是我的博客：<a href="https://www.jianshu.com/u/c2e786a7a188" target="_blank">Blog</a>
            </template>
        </w-popover>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import Popover from '../../../src/wheelsPopover'

    export default {
        components: {
            'w-popover': Popover,
            'w-button': Button
        },
        data(){
            return {
                content:`
                    <w-popover trigger="click">
                      <w-button>点击触发</w-button>
                      <template slot="content">
                          这是我的博客：<a href="https://www.jianshu.com/u/c2e786a7a188" target="_blank">Blog</a>
                      </template>
                    </w-popover>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

</style>