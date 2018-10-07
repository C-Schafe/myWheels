---
title: 快速上手
---
# 快速上手

><font size="2"> 本节将介绍如何在项目中使用 `wheels UI` 。</font>

## 使用 vue-cli@3

以 `vue-cli` 为例介绍如何在项目中使用 `wheels UI` 的组件，你可以用它们快速地实现常见的组件效果。

`vue-cli` 的详细搭建步骤参考官网 [Vue CLI3](https://cli.vuejs.org/)

## 安装 `Wheels UI`

安装步骤参考 [安装](../install/install.md) 一节

## 引入 `Wheels UI`

><font size="2"> `main.js` 文件中按所需组件名引入 `wheels UI` 中的组件，组件名参考 `组件` 章节。</font>

```
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'WheelsUI'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```

## 使用 `Wheels UI` 的组件

><font size="2"> `main.js` 文件中按所需组件名引入 `wheels UI` 中的组件，组件名参考 `组件` 章节。</font>

```
//template 内容
<w-button>Hello World!</w-button>

//script 内容
import {Button} from 'WheelsUI'
/*样式需要手动引入*/
import 'WheelsUI/dist/index.css'  

export default {
  name: 'app',
  components: {
      'w-button': Button
  }
}
```