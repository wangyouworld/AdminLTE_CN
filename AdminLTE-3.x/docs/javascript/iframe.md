---
layout: page
title: 框架插件
---

框架插件提供了以标签方式在框架中打开侧边栏和导航栏的功能。

##### 使用标记
要使框架 100% 工作，你需要在 `.content-wrapper` 中使用以下标记：

```html
<div class="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
  <div class="nav navbar navbar-expand-lg navbar-white navbar-light border-bottom p-0">
    <a class="nav-link bg-danger" href="#" data-widget="iframe-close">关闭</a>
    <ul class="navbar-nav" role="tablist"></ul>
  </div>
  <div class="tab-content">
    <div class="tab-empty">
      <h2 class="display-4">这里什么也没有！点击左侧菜单打开一个。</h2>
    </div>
    <div class="tab-loading">
      <div>
        <h2 class="display-4">载入中…… <i class="fa fa-sync fa-spin"></i></h2>
      </div>
    </div>
  </div>
</div>
```

###### 使用默认 IFrame 标签进行标记
```html
<div class="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
  <div class="nav navbar navbar-expand navbar-white navbar-light border-bottom p-0">
    <div class="nav-item dropdown">
      <a class="nav-link bg-danger dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">关闭</a>
      <div class="dropdown-menu mt-0">
        <a class="dropdown-item" href="#" data-widget="iframe-close" data-type="all">Close All</a>
        <a class="dropdown-item" href="#" data-widget="iframe-close" data-type="all-other">Close All Other</a>
      </div>
    </div>
    <a class="nav-link bg-light" href="#" data-widget="iframe-scrollleft"><i class="fas fa-angle-double-left"></i></a>
    <ul class="navbar-nav overflow-hidden" role="tablist"><li class="nav-item active" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link active" data-toggle="row" id="tab-index-html" href="#panel-index-html" role="tab" aria-controls="panel-index-html" aria-selected="true">仪表盘 v1</a></li></ul>
    <a class="nav-link bg-light" href="#" data-widget="iframe-scrollright"><i class="fas fa-angle-double-right"></i></a>
    <a class="nav-link bg-light" href="#" data-widget="iframe-fullscreen"><i class="fas fa-expand"></i></a>
  </div>
  <div class="tab-content">
    <div class="tab-empty">
      <h2 class="display-4">这里什么也没有！点击左侧菜单打开一个。</h2>
    </div>
    <div class="tab-loading">
      <div>
        <h2 class="display-4">载入中…… <i class="fa fa-sync fa-spin"></i></h2>
      </div>
    </div>
    <div class="tab-pane fade" id="panel-index-html" role="tabpanel" aria-labelledby="tab-index-html"><iframe src="./index.html"></iframe></div>
  </div>
</div>
```

##### 用法
该插件可以作为 jQuery 插件或使用数据 API 激活。

###### 数据 API
{: .text-bold }
通过在 `data-widget="iframe"` 中添加 `.content-wrapper` 来激活插件。如果你需要 onCheck 和 onUncheck 方法，请使用 jQuery API。

###### jQuery
{: .text-bold }
jQuery API 提供了更多可自定义的选项，允许开发人员处理待办事项列表中的选中和取消选事件。
```js
$('.content-wrapper').IFrame({
  onTabClick(item) {
    return item
  },
  onTabChanged(item) {
    return item
  },
  onTabCreated(item) {
    return item
  },
  autoIframeMode: true,
  autoItemActive: true,
  autoShowNewTab: true,
  autoDarkMode: false,
  allowDuplicates: true,
  loadingScreen: 750,
  useNavbarItems: true
})
```


##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|onTabClick | Function | 匿名函数 | 处理标签单击事件。
|onTabChanged | Function | 匿名函数 | 处理标签切换事件。
|onTabCreated | Function | 匿名函数 | 处理标签创建事件。
|autoIframeMode | Boolean | true | 如果页面是通过框架加载的，是否将 `.iframe-mode` 添加到 `body` 中。
|autoItemActive | Boolean | true | 根据当前活动的框架，是否将侧边栏菜单项也设置活动状态。
|autoShowNewTab | Boolean | true | 是否自动显示创建的选项卡。
|autoDarkMode | Boolean | false | 是否在框架页面中自动启用暗模式。
|allowDuplicates | Boolean | true | 是否允许创建重复的标签/框架。
|allowReload | Boolean | true | 是否允许重新加载非重复标签/框架。
|loadingScreen | Boolean/Number | true | [true 或 false] 是否显示框架加载界面；[数字]设置加载界面延迟。
|useNavbarItems | Boolean | true | 一并打开导航栏菜单项，而不是只打开侧边栏菜单项。
|---
{: .table .table-bordered .bg-light}


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|createTab| 通过标题，链接和唯一名称创建选项卡。可用参数：标题 `String`，链接 `String`，唯一名称 `String`，自动打开 `Boolean / 可选`。
|openTabSidebar| 通过侧边栏菜单项创建选项卡。可用参数：项目 `String | jQuery Object`，自动打开 `Boolean / 可选`。
|switchTab| 通过框架选项卡标签实现切换。可用参数：项目 `String | jQuery Object`。
|removeActiveTab| 移除活动的框架。
{: .table .table-bordered .bg-light}

示例： `$('.content-wrapper').IFrame('createTab', 'Home', 'index.html, 'index', true)`
