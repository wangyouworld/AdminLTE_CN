---
layout: page
title: Push Menu 插件
---

PushMenu 插件控制主侧边栏的切换按钮。 

##### 用法
该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }
将 `data-widget="pushmenu"` 添加到按钮上以激活插件。 
```html
<button class="btn btn-primary" data-widget="pushmenu">切换侧边栏</button>
```

###### jQuery
{: .text-bold }
```js
$('.sidebar-toggle-btn').PushMenu(options)
```

##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|autoCollapseSize | Boolean/Number | FALSE | 屏幕宽度（以像素为单位）触发自动折叠侧边栏
|enableRemember | Boolean | FALSE | 记住侧边栏状态并在页面刷新后进行设置。
|noTransitionAfterReload | Boolean | TRUE | 刷新页面后保持转换。
|animationSpeed | Boolean | `300` | 设置动画/过渡速度（等于 scss 的过渡速度）。
{: .table .table-bordered .bg-light}

> ##### 提示！
> 你可以通过设置的数据属性使用任何选项，像这样的，启用 768px 宽度的自动折叠侧边栏。
> ```html
> <button class="btn btn-primary" data-widget="pushmenu" data-auto-collapse-size="768">切换侧边栏</button>
> ```
{: .quote-info}


##### 事件
{: .mt-4}

|---
| 事件类型 | 说明
|-|-
|collapsed.lte.pushmenu | 侧边栏折叠时触发。
|collapsed-done.lte.pushmenu | 侧边栏完全折叠时触发。
|shown.lte.pushmenu | 侧边栏显示时触发。
{: .table .table-bordered .bg-light}

示例： `$(document).on('shown.lte.pushmenu', handleExpandedEvent)`


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|toggle | 折叠/展开侧边栏。
|collapse | 折叠侧边栏菜单。
|expand | 展开侧边栏菜单。
{: .table .table-bordered .bg-light}

示例： `$('[data-widget="pushmenu"]').PushMenu('toggle')`
