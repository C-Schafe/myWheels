<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-collapse :selected="[1]">
            <w-collapse-item name="1" title="标题一">内容一</w-collapse-item>
            <w-collapse-item name="2" title="标题二">内容二</w-collapse-item>
            <w-collapse-item name="3" title="标题三">内容三</w-collapse-item>
        </w-collapse>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import collapse from '../../../src/collapse'
    import collapseItem from '../../../src/collapse-item'

    export default {
        components: {
            'w-collapse': collapse,
            'w-collapse-item': collapseItem
        },
        data(){
            return {
                content:`
            <w-collapse :selected="[1]">
                <w-collapse-item name="1" title="标题一">内容一</w-collapse-item>
                <w-collapse-item name="2" title="标题二">内容二</w-collapse-item>
                <w-collapse-item name="3" title="标题三">内容三</w-collapse-item>
            </w-collapse>
                `.replace(/^ {8}/gm, '').trim(),
                selected: '1'
            }
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
</style>