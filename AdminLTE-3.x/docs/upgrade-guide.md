---
layout: page
title: 升级指南
---

#### 从 v2.4.x 迁移

将 AdminLTE v2.4.x 迁移到 v3.0 的第一步是将 Bootstrap 3 基础代码升级到 Bootstrap 4，这里的<a href="https://getbootstrap.com/docs/4.4/migration/">完整说明</a>，在你升级代码后要更新的标记。

#### CSS / JS 文件

在 AdminLTE v3.0 中 Bootstrap 4 已完全包含在 AdminLTE 的 CSS 文件中。因此你不需要加载 Bootstrap CSS 文件 `bootstrap(.min).css`，但是你需要 Bootstrap JS 文件 `bootstrap(.min).js`。

##### 主标题

主标题中最大的更改是将 Logo 移到了主侧边栏，它现在可以切换颜色，以下是所有更改：

1. Logo
  - `<a href="index2.html" class="logo">` 移动并重建到 `.brand-link` 到 `.main-sidebar` 中
2. 头部/导航
  - `<header class="main-header">` & `<nav class="navbar navbar-static-top">` 合并为 `<nav class="main-header navbar navbar-expand navbar-white navbar-light">`
3. 侧边栏切换/左导航栏
  - `<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button"><span class="sr-only">切换导航</span></a>` 替换为 `<ul class="navbar-nav"><li class="nav-item"><a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a></li></ul>`
3. 右导航栏
  - `<div class="navbar-custom-menu">` & `<ul class="nav navbar-nav">` 合并为 `<ul class="navbar-nav ml-auto">`

##### 主侧边栏

就像上面的更改一样，主侧边栏现在包含 Logo，并且侧边栏现在切换颜色，这里有所有更改：

1. 主侧边栏颜色
  - `<aside class="main-sidebar">` 替换为 `<aside class="main-sidebar sidebar-dark-primary">`
2. Logo/品牌链接
  - `<a href="index3.html" class="brand-link"><img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"><span class="brand-text font-weight-light">AdminLTE 3</span></a>` 替换旧 Logo
3. 侧边栏
  - `<section class="sidebar">` 替换为 `<div class="sidebar">`
4. 用户面板
  - `<div class="user-panel"><div class="pull-left image"><img src="dist/img/user2-160x160.jpg" class="img-circle" alt="用户图片"></div><div class="pull-left info"><p>Alexander Pierce</p><a href="#"><i class="fa fa-circle text-success"></i> 在线</a></div></div>` 替换为 `<div class="user-panel mt-3 pb-3 mb-3 d-flex"><div class="image"><img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="用户图片"></div><div class="info"><a href="#" class="d-block">Alexander Pierce</a></div></div>`
5. 侧边栏菜单
  - `<nav class="mt-2">` 现在 `<ul class="sidebar-menu" data-widget="tree">`
  - `<ul class="sidebar-menu" data-widget="tree">` 替换为 `<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">`
  - `<li class="header">` 替换为 `<li class="nav-header">`
  - `<li>` 需要新类 `.nav-item`
  - `<li> <a>` 需要新类 `.nav-link`
  - `<li> <a> <i>` 需要新类 `.nav-icon`
  - `<li> <a> <span>` 替换为 `<p>`
  - `<span class="pull-right-container">` 已移除
  - `<i class="fa fa-angle-left pull-right"></i>` 替换为 `<i class="right fas fa-angle-left"></i>`
  - `<small class="label pull-right bg-green">新</small>` 替换为 `<span class="right badge badge-danger">新</span>`
  - `<li> <ul class="treeview-menu">` 替换为 `<ul class="nav nav-treeview">`


<div class="row">
  <div class="col-md-6" markdown="1">
旧的示例
```html
<li>
  <a href="pages/widgets.html">
    <i class="fa fa-th"></i> <span>小部件</span>
    <span class="pull-right-container">
      <small class="label pull-right bg-green">新</small>
    </span>
  </a>
</li>
```
  </div>
  <div class="col-md-6" markdown="1">
新的示例
```html
<li class="nav-item">
  <a href="pages/widgets.html" class="nav-link">
    <i class="nav-icon fas fa-th"></i>
    <p>
      小部件
      <span class="right badge badge-danger">新</span>
    </p>
  </a>
</li>
```
  </div>
</div>

<div class="row">
  <div class="col-md-6" markdown="1">
旧的示例（带菜单）
```html
<li class="treeview">
  <a href="#">
    <i class="fa fa-dashboard"></i> <span>仪表盘</span>
    <span class="pull-right-container">
      <i class="fa fa-angle-left pull-right"></i>
    </span>
  </a>
  <ul class="treeview-menu">
    <li class="active"><a href="index.html">
      <i class="fa fa-circle-o"></i> 仪表盘 v1</a>
    </li>
  </ul>
</li>
```
  </div>
  <div class="col-md-6" markdown="1">
新的示例（带菜单）
```html
<li class="nav-item">
  <a href="#" class="nav-link">
    <i class="nav-icon fas fa-tachometer-alt"></i>
    <p>
      仪表盘
      <i class="right fas fa-angle-left"></i>
    </p>
  </a>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="index.html" class="nav-link active">
        <i class="far fa-circle nav-icon"></i>
        <p>仪表盘 v1</p>
      </a>
    </li>
  </ul>
</li>
```
  </div>
</div>

##### 内容标题

内容标题中最大的更改是 AdminLTE 现在在这里使用 `.container-fluid`， `.row` 和 `.col-*` 以及更改了面包屑标记，以下全部更改：

- `<section class="content-header">` 替换为 `<div class="content-header">`
- `<div class="container-fluid">` 添加到 `<div class="content-header">`
- `<h1>` & `<ol class="breadcrumb">` 重建为 `<div class="row">` & `<div class="col-sm-6">`
- `<h1>` 替换为 `<h1 class="m-0 text-dark">`
- `<ol class="breadcrumb">` 需要新类 `.float-sm-right`
- `<ol class="breadcrumb"> <li>` 需要新类 `.breadcrumb-item`


<div class="row">
  <div class="col-md-6" markdown="1">
旧的内容标题标记
```html
<section class="content-header">
  <h1>
    仪表盘
    <small>控制面板</small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
    <li class="active">仪表盘</li>
  </ol>
</section>
```
  </div>
  <div class="col-md-6" markdown="1">
新的内容标题标记
```html
<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1 class="m-0 text-dark">
          仪表盘
          <small>控制面板</small>
        </h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="#">主页</a></li>
          <li class="breadcrumb-item active">仪表盘 v1</li>
        </ol>
      </div>
    </div>
  </div>
</div>
```
  </div>
</div>

##### 内容

内容没有变化，我们只将 `<section class="content container-fluid">` 拆分为两个元素：

- `<section class="content">`
- `<div class="container-fluid">`

##### 底部

页脚只对右侧的 div 做了一点小小的更改。

- `<div class="pull-right hidden-xs">` 修改为 `<div class="float-right d-none d-sm-inline">`

##### 杂项

这里是自 v3.0 以来其他 CSS/HTML 的小变化：

- `.label` 重命名为 `.badge`

##### JavaScript 插件

这里是自 v3.0 以来其他 JavaScript 的小变化：

- `data-toggle="*"` 重命名为 `data-widget="*"` 而不是 CardWidget 项目
  - 对于 CardWidget，现在是 `data-card-widget="*"`
