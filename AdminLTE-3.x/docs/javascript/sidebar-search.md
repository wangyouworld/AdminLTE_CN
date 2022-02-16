---
layout: page
title: 侧边栏搜索插件
---

插件提供了搜索侧边栏菜单项的功能。 

##### 用法

该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }

通过将 `data-widget="sidebar-search"` 添加到侧边栏中来激活插件。你可以使用下面代码来快速实现。


###### jQuery
{: .text-bold }

jQuery API 提供了更具可自定义的选项，允许开发人员在展示前预先处理请求，在请求之后处理返回内容。 

```js
("[data-widget="sidebar-search"]").SidebarSearch(options)
```

##### HTML 代码
将代码放在 `div.user-panel` 标记后。
```html
<div class="form-inline">
  <div class="input-group" data-widget="sidebar-search">
    <input class="form-control form-control-sidebar" type="search" placeholder="搜索" aria-label="Search">
    <div class="input-group-append">
      <button class="btn btn-sidebar">
        <i class="fas fa-search fa-fw"></i>
      </button>
    </div>
  </div>
</div>
```

##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
| arrowSign | String | '->' | 菜单、路径之间的箭头符号。
| minLength | Number | 3 | 关键词搜索最小长度。
| maxResults | Number | 7 | 最大搜索结果数。
| highlightName | Boolean | TRUE | 是否突出显示菜单项名称。
| highlightPath | Boolean | FALSE  | 是否突出显示菜单项路径。
| highlightClass | String | 'text-light' | 突出展示类。
| notFoundText | String | '找不到元素！ | 找不到时响应内容。
{: .table .table-bordered .bg-light}


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|init | 初始化 SidebarSearch 插件，并注册所有可见的菜单项。
|toggle | 切换搜索下拉列表。
|close | 关闭搜索下拉列表。
|open | 打开搜索下拉列表。
|search | 触发搜索。
{: .table .table-bordered .bg-light}

示例： `$('[data-widget="sidebar-search"]').SidebarSearch('toggle')`
