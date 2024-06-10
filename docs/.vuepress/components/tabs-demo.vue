<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>
    <w-tabs :selected="selected">
      <w-tabs-head>
        <w-tabs-item name="1">Tab 1</w-tabs-item>
        <w-tabs-item name="2">Tab 2</w-tabs-item>
        <w-tabs-item name="3">Tab 3</w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="1">content 1</w-tabs-pane>
        <w-tabs-pane name="2">content 2</w-tabs-pane>
        <w-tabs-pane name="3">content 3</w-tabs-pane>
      </w-tabs-body>
    </w-tabs>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import tabs from '../../../src/tabs'
import tabsHead from '../../../src/tabs-head'
import tabsBody from '../../../src/tabs-body'
import tabsItem from '../../../src/tabs-item'
import tabsPane from '../../../src/tabs-pane'

export default {
  components: {
    'w-tabs': tabs,
    'w-tabs-head': tabsHead,
    'w-tabs-body': tabsBody,
    'w-tabs-item': tabsItem,
    'w-tabs-pane': tabsPane,
  },
  data() {
    return {
      content: `
        <w-tabs :selected="selected">
            <w-tabs-head>
              <w-tabs-item name="1">Tab 1</w-tabs-item>
              <w-tabs-item name="2">Tab 2</w-tabs-item>
              <w-tabs-item name="3">Tab 3</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
              <w-tabs-pane name="1">content 1</w-tabs-pane>
              <w-tabs-pane name="2">content 2</w-tabs-pane>
              <w-tabs-pane name="3">content 3</w-tabs-pane>
            </w-tabs-body>
        </w-tabs>
      `.replace(/ {8}/gm, '').trim(),
      selected: '1'
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
</style>