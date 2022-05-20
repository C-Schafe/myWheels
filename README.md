# 这是我的Vue轮子

[![Build Status](https://www.travis-ci.org/C-Schafe/myWheels.svg?branch=master)](https://www.travis-ci.org/C-Schafe/myWheels)

**作者**：louis

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用

1.CSS 部分

使用本框架前, 请在CSS中开启border-box

```
*,*::before,*::after{box-sizing: border-box}
```
IE8及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
```
:root {
  --font-size: 14px;
  --padding: 6px .9em;
  --border: #999;
  --button-bg: #fff;
  --button-hover-border: #666;
  --button-active-border: #a2a2a2;
  --button-active-bg: #e1e1e1;
  --button-focus-color: #333;
  --button-border-radius: 4px;
}
```
IE 15 及以上浏览器都支持此样式。

2. 安装 wheels
```
npm install --save louis-test-1
```
3. 引入 wheels
```
import {Button, ButtonGroup, Icon} from 'louis-test-1'
import 'louis-test-1/dist/index.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'w-button': Button
  }
}
```

