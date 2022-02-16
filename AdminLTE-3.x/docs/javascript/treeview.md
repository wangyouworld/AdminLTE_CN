---
layout: page
title: Treeview 插件
---

Treeview 插件将嵌套列表转换为树形视图，可在其中扩展子菜单。 

##### 用法
该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }

将 `data-widget="treeview"` 添加到任何 `ul` 或 `ol` 元素以激活插件。 

```html
<ul data-widget="treeview">
  <li><a href="#">一级</a></li>
  <li class="nav-item">
    <a class="nav-link" href="#">多级</a>
    <ul class="nav-treeview">
      <li><a href="#">二级</a></li>
    </ul>
  </li>
</ul>
```

###### jQuery
{: .text-bold }
```js
$('ul').Treeview(options)
```

##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|animationSpeed | Number | 300 | 上下滑动动画速度，以毫秒为单位。
|accordion | Boolean | TRUE | 展开菜单时是否折叠打开的菜单。
|trigger | String | `[data-widget="treeview"] .nav-link` |  响应展开或折叠菜单元素的选择器。 
|expandSidebar | Boolean | FALSE | 是否在菜单上展开侧边栏。
|sidebarButtonSelector | String | `[data-widget="pushmenu"]` | 侧边栏按钮选择器。
{: .table .table-bordered .bg-light}

> ##### 提示！
> 你可以通过数据属性使用任何选项，像这样。
> ```html
> <ul data-widget="treeview" data-accordion="false">...</ul>
> ```
{: .quote-info}

> ##### 重要！
> 如果你想在主侧边中使用多个 treeview， 
> 那么，你需要向 treeview 中添加 ID 标记。
> ```html
> <ul data-widget="treeview" id="someIdNameOrSo" data-accordion="false">...</ul>
> ```
{: .quote-danger}

##### 事件
{: .mt-4}

|---
| 事件类型 | 说明
|-|-
|expanded.lte.treeview | 子菜单展开后触发。
|collapsed.lte.treeview | 子菜单折叠后触发。
|load.lte.treeview | 数据 API 初始化插件后触发。
{: .table .table-bordered .bg-light}

示例： `$('ul').on('expanded.lte.treeview', handleExpandedEvent)`

