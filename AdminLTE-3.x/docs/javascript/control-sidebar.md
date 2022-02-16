---
layout: page
title: 控制侧边栏插件
---

右侧的控制侧边栏组件是 AdminLTE 布局的一部分。 

##### 用法
该插件可以作为 jQuery 插件或使用数据 API 激活。要激活插件，你必须首先将 HTML 标记添加到布局中，然后创建如下所示的切换按钮。 

###### HTML 标记
{: .text-bold }
```html
<!-- 控制侧边栏 -->
<aside class="control-sidebar control-sidebar-dark">
  <!-- 控制侧边栏内容在这里 -->
</aside>
<!-- /.control-sidebar -->
```

###### 数据 API
{: .text-bold }
将 `data-widget="control-sidebar"` 添加到任何按钮或元素上以激活插件。

```html
<a href="#" data-widget="control-sidebar">切换控制侧边栏</a>
```

###### jQuery
{: .text-bold }
与其他 AdminLTE 插件一样，你可以通过运行以下 jQuery 示例来激活切换按钮。 
```js
$("#my-toggle-button").ControlSidebar('toggle');
```

##### 选项

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|controlsidebarSlide | Boolean | TRUE | 侧边栏是滑出，还是将内容推出以为其留出空间
|scrollbarTheme | Boolean | `os-theme-light` | 侧边栏固定时滚动条使用的主题。
|scrollbarAutoHide | Boolean | `l` | 滚动条自动隐藏触发器。
|target | String | `.control-sidebar` | 可以处理多个控制侧边栏。
|animationSpeed | Boolean | `300` | 设置动画/过渡速度（等于 scss 的过渡速度）。
{: .table .table-bordered .bg-light}

> ##### 提示！
> 你可以通过设置的数据属性使用任何选项，像这样的，启用 768px 宽度的自动折叠侧边栏。
> ```html
> <a href="#" data-widget="control-sidebar" data-controlsidebar-slide="false">切换控制侧边栏</a>
> ```
{: .quote-info}

##### 事件
{: .mt-4}

|---
| 事件类型 | 说明
|-|-
|expanded.lte.controlsidebar | 在控制侧边栏展开后触发
|collapsed.lte.controlsidebar | 在控制侧边栏折叠后触发
|collapsed-done.lte.controlsidebar | 侧边栏完全折叠时触发。
{: .table .table-bordered .bg-light}

示例： `$('#toggle-button').on('expanded.lte.controlsidebar', handleExpandedEvent)`


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|collapse | 折叠侧边栏
|show | 显示侧边栏
|toggle | 切换侧边栏折叠/展开状态
{: .table .table-bordered .bg-light}

示例： `$('#toggle-button').ControlSidebar('toggle')`
