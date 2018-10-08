<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-popover position="left">
            <w-button>点击触发</w-button>
            <template slot="content">
                左边
            </template>
        </w-popover>
        <w-popover position="top">
            <w-button>点击触发</w-button>
            <template slot="content">
                上面
            </template>
        </w-popover>
        <w-popover position="bottom">
            <w-button>点击触发</w-button>
            <template slot="content">
                下面
            </template>
        </w-popover>
        <w-popover position="right">
            <w-button>点击触发</w-button>
            <template slot="content">
                右边
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
                    <w-popover position="left">
                      <w-button>点击触发</w-button>
                      <template slot="content">
                          左边
                      </template>
                    </w-popover>
                    <w-popover position="top">
                      <w-button>点击触发</w-button>
                      <template slot="content">
                          上面
                      </template>
                    </w-popover>
                    <w-popover position="bottom">
                      <w-button>点击触发</w-button>
                      <template slot="content">
                          下面
                      </template>
                    </w-popover>
                    <w-popover position="right">
                      <w-button>点击触发</w-button>
                      <template slot="content">
                          右边
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