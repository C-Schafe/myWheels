---
title: Toast 消息弹框
---
# Toast 消息弹框

><font size="2"> 屏幕外滑入的消息弹框。</font>

## 自动关闭

><font size="2">`Toast` 组件默认开启自动关闭，可通过 `autoClose` 属性配置自动关闭的等待时间。</font>


<ClientOnly>
  <toast-demos1></toast-demos1>
</ClientOnly>

## 关闭按钮

><font size="2">配置 `closeButton` 属性可自定义关闭按钮的内容和回调函数。</font>


<ClientOnly>
  <toast-demos2></toast-demos2>
</ClientOnly>

## 四个方位

><font size="2">配置 `position` 属性可自定义消息弹框的出现位置，支持`top`、`bottom`、`left`、`right` 四个方位。</font>


<ClientOnly>
  <toast-demos3></toast-demos3>
</ClientOnly>

## 支持 `HTML`

><font size="2">配置 `enableHTML` 属性可自定义消息弹框的内容是否以`HTML` 展示，默认为不开启 `false` 。</font>


<ClientOnly>
  <toast-demos4></toast-demos4>
</ClientOnly>