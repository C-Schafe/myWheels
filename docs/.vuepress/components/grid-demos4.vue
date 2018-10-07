<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-row>
            <w-col span="8" :ipad="{span:6}" :narrow-pc="{span:5}" :pc="{span:3}" :large-pc="{span:1}">
                <div class="demo"></div>
            </w-col>
            <w-col span="4" :ipad="{span:6}" :narrow-pc="{span:6}" :pc="{span:8}" :large-pc="{span:11}">
                <div class="demo"></div>
            </w-col>
            <w-col span="4" :ipad="{span:6}" :narrow-pc="{span:8}" :pc="{span:10}" :large-pc="{span:11}">
                <div class="demo"></div>
            </w-col>
            <w-col span="8" :ipad="{span:6}" :narrow-pc="{span:5}" :pc="{span:3}" :large-pc="{span:1}">
                <div class="demo"></div>
            </w-col>
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
                        <w-col span="8" :ipad="{span:6}" :narrow-pc="{span:5}" :pc="{span:3}" :large-pc="{span:1}">
                          <div class="demo"></div>
                        </w-col>
                        <w-col span="4" :ipad="{span:6}" :narrow-pc="{span:6}" :pc="{span:8}" :large-pc="{span:11}">
                          <div class="demo"></div>
                        </w-col>
                        <w-col span="4" :ipad="{span:6}" :narrow-pc="{span:8}" :pc="{span:10}" :large-pc="{span:11}">
                          <div class="demo"></div>
                        </w-col>
                        <w-col span="8" :ipad="{span:6}" :narrow-pc="{span:5}" :pc="{span:3}" :large-pc="{span:1}">
                          <div class="demo"></div>
                        </w-col>
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
    .col {
        &:nth-child(2n+1)>.demo {
            background-color: #3a9364;
        }
    }
    .demo {
        background-color: #3eaf7c;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
    }
</style>