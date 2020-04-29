---
layout: page
title: 布局插件
---

如果 CSS 无法重置内容的高度或宽度，则布局插件会管理布局。

##### 用法
该插件会在窗口加载时自动激活。

##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|scrollbarTheme | Boolean | `os-theme-light` | 侧边栏固定时滚动条使用的主题
|scrollbarAutoHide | Boolean | `l` | 滚动条自动隐藏触发器
|---
{: .table .table-bordered .bg-light}

> ##### 提示！
> 你可以通过数据属性使用任何选项，像这样。
> ```html
> <body data-scrollbar-auto-hide="n">...</body>
> ```
{: .quote-info}

##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|fixLayoutHeight | 固定内容/控制侧边栏高度并激活侧边栏/控制侧边栏的 OverlayScrollbars
{: .table .table-bordered .bg-light}

示例： `$('body').Layout('fixLayoutHeight')`
