<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-popover trigger="click">
            <w-button>点击触发</w-button>
            <template slot="content">
                这是点击触发的内容
            </template>
        </w-popover>
        <w-popover trigger="hover">
            <w-button>悬浮触发</w-button>
            <template slot="content">
                这是悬浮触发的内容
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
                          这是点击触发的内容
                      </template>
                    </w-popover>

                    <w-popover trigger="hover">
                      <w-button>悬浮触发</w-button>
                      <template slot="content">
                          这是悬浮触发的内容
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