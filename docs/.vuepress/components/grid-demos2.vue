<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-row gutter="10">
            <w-col span="12"><div class="demo">12</div></w-col>
            <w-col span="12"><div class="demo">12</div></w-col>
        </w-row>
        <w-row gutter="10">
            <w-col span="6"><div class="demo">6</div></w-col>
            <w-col span="6"><div class="demo">6</div></w-col>
            <w-col span="6"><div class="demo">6</div></w-col>
            <w-col span="6"><div class="demo">6</div></w-col>
        </w-row>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'

    export default {
        components: {
            'w-row': Row,
            'w-col': Col
        },
        data(){
            return {
                content:`
                    <w-row gutter="10">
                        <w-col span="12"><div class="demo">12</div></w-col>
                        <w-col span="12"><div class="demo">12</div></w-col>
                    </w-row>
                    <w-row gutter="10">
                        <w-col span="6"><div class="demo">6</div></w-col>
                        <w-col span="6"><div class="demo">6</div></w-col>
                        <w-col span="6"><div class="demo">6</div></w-col>
                        <w-col span="6"><div class="demo">6</div></w-col>
                    </w-row>
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