---
title: Grid 布局
---
# Grid 布局

><font size="2">实现一个栅格化的布局系统，基于行（row）和列（col）来定义每一个格子，以保证页面的每个区域能够有序地排布起来。</font>

## 基础布局


><font size="2"> `<w-row>` 定义行，`<w-col>` 定义列，通过 `span` 属性控制每一格的跨度。</font>


<ClientOnly>
  <grid-demos1></grid-demos1>
</ClientOnly>


## 设置间隔


><font size="2">设置 `<w-row>` 标签上的 `gutter` 属性可自定义 `<w-col>` 之间的间隙，默认单位为 `px` 。</font>


<ClientOnly>
  <grid-demos2></grid-demos2>
</ClientOnly>


## 设置偏移


><font size="2">设置 `<w-col>` 标签上的 `offset` 属性可自定义某个 `<w-col>` 左边偏移的格子数。</font>


<ClientOnly>
  <grid-demos3></grid-demos3>
</ClientOnly>

## 响应式布局


><font size="2">参照了 `Bootstrap` 的 响应式设计，预设了五个响应尺寸：`phone`、`ipad`、`narrow-pc`、`pc` 和 `large-pc`，其中 `phone` 为默认尺寸。</font>


<ClientOnly>
  <grid-demos4></grid-demos4>
</ClientOnly>