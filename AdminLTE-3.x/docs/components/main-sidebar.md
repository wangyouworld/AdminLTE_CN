---
layout: page
title: 主侧边栏组件
---

左侧页面中使用的侧边栏提供了示例。创建侧边栏： 

```html
<!-- 主侧边栏容器 -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- 品牌 Logo -->
  <a href="index3.html" class="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
         style="opacity: .8">
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  <!-- 侧边栏 -->
  <div class="sidebar">
    <!-- 侧边栏用户面板（可选） -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="用户图片">
      </div>
      <div class="info">
        <a href="#" class="d-block">Alexander Pierce</a>
      </div>
    </div>

    <!-- 侧边栏菜单 -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
        <!-- 使用 .nav-icon 类将图标添加到链接
             可以使用 font-awesome 或其他字体库 -->
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              起始页
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p>活动页面</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>非活动页面</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-th"></i>
            <p>
              示例链接
              <span class="right badge badge-danger">新</span>
            </p>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
```
{: .max-height-300}


#### 备用 Logo

你可以使用两个 LOGO 图像，而不是带有文字的 LOGO，只需要将标记更改为：

```html
<a href="#" class="brand-link logo-switch">
  <img src="dist/img/logo-xs.png" alt="AdminLTE 文档 小 LOGO" class="brand-image-xl logo-xs">
  <img src="dist/img/logo-xl.png" alt="AdminLTE 文档 大 LOGO" class="brand-image-xs logo-xl" style="left: 12px">
</a>
```
> v3.0 文档中的示例。

根据上面的示例，你可以将 `.logo-xs` 上的 `.brand-image-xl` 替换为 `.brand-image-xs`，或者将 `.logo-xl` 替换为 `.brand-image-xl` 以更改 LOGO 的大小。

#### 带有品牌的按钮

你可以将按钮菜单放置在品牌内，只需将品牌链接代码替换为以下代码即可：

```html
<div class="brand-link d-flex justify-content-between align-items-center">
  <a class="brand-link" href="index3.html">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3">
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  <a class="pushmenu" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
</div>
```

#### 侧边栏中搜索表单

你可以在 user-panel 或 nav-sidebar 上添加以下代码：

```html
<form class="form-inline">
  <div class="input-group">
    <input class="form-control form-control-sidebar" type="search" placeholder="搜索" aria-label="Search">
    <div class="input-group-append">
      <button class="btn btn-sidebar" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</form>
```
{: .max-height-300}


#### 侧边栏自定义区域

你可以在侧边栏中添加自定义区域，以在菜单项下方显示其他按钮或文本。

只需要简单的在 `div.sidebar` 之后添加以下代码：

```html
<div class="sidebar-custom">
  <a href="#" class="btn btn-link"><i class="fas fa-cogs"></i></a>
  <a href="#" class="btn btn-secondary hide-on-collapse pos-right">帮助</a>
</div>
```

> ##### 注意！
> 仅在使用 `.layout-fixed` 时才管用。
{: .quote-warning}


#### 其他类

##### 侧边栏

- `.sidebar-no-expand` 禁用悬停/获得焦点时自动展开

##### 导航栏

- `.nav-child-indent` 子级缩进
- `.nav-compact` 紧凑侧边栏
- `.nav-flat` 平面导航式
- `.nav-legacy` 传统 v2 导航样式
- `.nav-collapse-hide-child` 隐藏折叠子菜单


> ##### 提示！
> 你可以在 `.nav-sidebar` 或 `.brand-link` 上使用 `.text-sm` 以获得较小的字体。
{: .quote-info}

有关侧边栏 JS 部分的更多信息，请访问[PushMenu 插件页面](/AdminLTE/AdminLTE-3.x/docs/javascript/push-menu.html)。
