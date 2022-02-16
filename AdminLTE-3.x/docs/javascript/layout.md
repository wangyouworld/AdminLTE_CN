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
|scrollbarTheme | String | `os-theme-light` | 滚动条主题
|scrollbarAutoHide | String | `l` | 滚动条自动隐藏
|panelAutoHeight | Boolean\|Numeric | true | 面板高度修正（`true` = 默认值，在加载/调整大小时修正；数字 = 加载/调整大小时修正）
|panelAutoHeightMode | String | `min-height` | 面板高度模式（`min-height` =设置 `最小高度` 属性到 content-wrapper；`height` = 设置指定`高度`到 content-wrapper）
|preloadDuration | Integer | 200 | 预加载器持续时间（以毫秒为单位）
|loginRegisterAutoHeight | Boolean\|Integer | true | 登录和注册高度修正（`true` = 仅载入时修正；整数 = 基于指定时间间隔修正）
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
|fixLoginRegisterHeight | 修复登录和注册 body 高度
{: .table .table-bordered .bg-light}

示例： `$('body').Layout('fixLayoutHeight')`
