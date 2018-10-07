<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-row>
            <w-col span="12" class="grid-demo">12</w-col>
            <w-col span="12" class="grid-demo">12</w-col>
        </w-row>
        <w-row>
            <w-col span="6" class="grid-demo">6</w-col>
            <w-col span="6" class="grid-demo">6</w-col>
            <w-col span="6" class="grid-demo">6</w-col>
            <w-col span="6" class="grid-demo">6</w-col>
        </w-row>
        <w-row>
            <w-col span="3" class="grid-demo">3</w-col>
            <w-col span="3" class="grid-demo">3</w-col>
            <w-col span="3" class="grid-demo">3</w-col>
            <w-col span="3" class="grid-demo">3</w-col>
            <w-col span="3" class="grid-demo">3</w-col>
            <w-col span="3" class="grid-demo">3</w-col>
            <w-col span="3" class="grid-demo">3</w-col>
            <w-col span="3" class="grid-demo">3</w-col>
        </w-row>
        <w-row>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
            <w-col span="2" class="grid-demo">2</w-col>
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
                    <w-row>
                        <w-col span="12" class="grid-demo">12</w-col>
                        <w-col span="12" class="grid-demo">12</w-col>
                    </w-row>
                    <w-row>
                        <w-col span="6" class="grid-demo">6</w-col>
                        <w-col span="6" class="grid-demo">6</w-col>
                        <w-col span="6" class="grid-demo">6</w-col>
                        <w-col span="6" class="grid-demo">6</w-col>
                    </w-row>
                    <w-row>
                        <w-col span="3" class="grid-demo">3</w-col>
                        <w-col span="3" class="grid-demo">3</w-col>
                        <w-col span="3" class="grid-demo">3</w-col>
                        <w-col span="3" class="grid-demo">3</w-col>
                        <w-col span="3" class="grid-demo">3</w-col>
                        <w-col span="3" class="grid-demo">3</w-col>
                        <w-col span="3" class="grid-demo">3</w-col>
                        <w-col span="3" class="grid-demo">3</w-col>
                    </w-row>
                    <w-row>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                        <w-col span="2" class="grid-demo">2</w-col>
                    </w-row>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        margin: 10px 0;
    }
    .grid-demo {
        background-color: #3eaf7c;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        &:nth-child(2n+1) {
            background-color: #4bc78e;
        }
    }
</style>