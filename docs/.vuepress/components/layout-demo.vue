<template>
    <div>
        <p>
            <strong>预览</strong>
        </p>
        <w-layout>
            <w-header><div class="header-demo demo">header</div></w-header>
            <w-content><div class="content-demo demo">content</div></w-content>
            <w-footer><div class="footer-demo demo">footer</div></w-footer>
        </w-layout>
        <p></p>
        <w-layout>
            <w-header><div class="header-demo demo">header</div></w-header>
            <w-layout>
                <w-sider><div class="sider-demo demo">sider</div></w-sider>
                <w-content><div class="content-demo demo">content</div></w-content>
            </w-layout>
            <w-footer><div class="footer-demo demo">footer</div></w-footer>
        </w-layout>
        <p></p>
        <w-layout>
            <w-sider><div class="sider-demo2 demo">sider</div></w-sider>
            <w-layout>
                <w-header><div class="header-demo demo">header</div></w-header>
                <w-layout>
                    <w-sider><div class="sider-demo demo">sider</div></w-sider>
                    <w-content><div class="content-demo demo">content</div></w-content>
                </w-layout>
                <w-footer><div class="footer-demo demo">footer</div></w-footer>
            </w-layout>
        </w-layout>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Sider from '../../../src/sider'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'

    export default {
        components: {
            'w-layout': Layout,
            'w-header': Header,
            'w-sider': Sider,
            'w-content': Content,
            'w-footer': Footer
        },
        data(){
            return {
                content:`

                    <w-layout>
                      <w-header><div class="header-demo demo">header</div></w-header>
                      <w-content><div class="content-demo demo">content</div></w-content>
                      <w-footer><div class="footer-demo demo">footer</div></w-footer>
                    </w-layout>

                    <w-layout>
                      <w-header><div class="header-demo demo">header</div></w-header>
                      <w-layout>
                          <w-sider><div class="sider-demo demo">sider</div></w-sider>
                          <w-content><div class="content-demo demo">content</div></w-content>
                      </w-layout>
                      <w-footer><div class="footer-demo demo">footer</div></w-footer>
                    </w-layout>

                    <w-layout>
                      <w-sider><div class="sider-demo2 demo">sider</div></w-sider>
                      <w-layout>
                        <w-header><div class="header-demo demo">header</div></w-header>
                        <w-layout>
                          <w-sider><div class="sider-demo demo">sider</div></w-sider>
                          <w-content><div class="content-demo demo">content</div></w-content>
                        </w-layout>
                          <w-footer><div class="footer-demo demo">footer</div></w-footer>
                      </w-layout>
                    </w-layout>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .demo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-demo,.footer-demo {
        background-color: #46ac7b;
        height: 50px;
    }
    .content-demo {
        background-color: #4abf8a;
        height: 150px;
    }
    .sider-demo {
        background-color: #4cd19a;
        height: 150px;
        width: 100px;
    }
    .sider-demo2 {
        height: 100%;
        background-color: #5ee9a6;
        width: 150px;
    }
</style>