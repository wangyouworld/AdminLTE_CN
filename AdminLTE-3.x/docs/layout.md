---
layout: page
title: 布局
---

> ##### 提示！
> 如果你想从头开始，起始页是构建应用程序的好地方。
{: .quote-info .mt-0}

布局包括 4个主要部分：
- 包装器 `.wrapper`。包含整个网站的 div。
- 主标题 `.main-header`。 包含 LOGO 和导航栏。
- 侧边栏 `.sidebar-wrapper`。包含用户面板和侧边栏菜单。
- 内容 `.content-wrapper`。包含页面标题和内容。

#### 布局设置
{: .mt-4}

> ##### 注意！
> 你不能同时使用 boxbox-boxed 和 layout-navbar-fixed 或 layout-footer-fixed。其他任何东西都可以组合使用。
{: .quote-danger}

AdminLTE 3.0 提供了一组应用于布局的选项。这些类中的每一个都可以添加到 body 标签中以获得所需的效果。


- 固定侧边栏：使用 `.layout-fixed` 类来固定侧边栏。
- 固定导航栏：使用 `.layout-navbar-fixed` 类固定导航栏。
- 固定页脚：使用 `.layout-footer-fixed` 类固定页脚。
- 折叠侧边栏：使用 `.sidebar-collapse` 类在加载时折叠侧边栏。
- 盒式布局：使用 `.layout-boxed` 类来获得只有 1250px 的布局。
- 顶部导航：使用 `.layout-top-nav` 类移除侧边栏，并使链接位于顶部导航栏。


##### 响应式
你还可以使用以下类进行响应式更改
- 固定导航栏：
  - 使用 `.layout-*-navbar-fixed` 类固定导航栏。
  - 使用 `.layout-*-navbar-not-fixed` 类不固定导航栏。
- 固定页脚：
  - 使用 `.layout-*-footer-fixed` 类固定页脚。
  - 使用 `.layout-*-footer-not-fixed` 类不固定页脚。

> ##### 提示！
> 如果你想使用固定导航栏的锚点，则需要向隐藏的锚点添加 `.anchor`，例如 `<a id="testAnchor" class="anchor"></a>`。
{: .quote-info}


#### 色调

AdminLTE 3.0 提供了一组颜色，可应用于侧边栏（浅色和深色）和导航栏。你可以将任何可用的颜色与这些类前缀组合：

- `.navbar-*`
- `.sidebar-dark-*`
- `.sidebar-light-*`
- `.accent-*`

> ###### 新的
> 你可以在 AdminLTE 中使用覆盖链接/强调的颜色，也可以在 `body` 中添加 `.accent-*`。
{: .quote-info}

> ###### 提示
> 你可以将 `.navbar-*` 和 `.navbar-light` 或 `.navbar-dark` 一起使用。
{: .quote-info}

提供以下颜色：

##### 主题颜色
<div class="row">
  <div class="col-sm-4 col-lg-3 p-3 bg-primary"> 重要 (primary) / 蓝色 (blue)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-secondary"> 次要 (secondary)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-success"> 成功 (success) / 绿色 (green)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-info"> 信息 (info) / 青色 (cyan)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-warning"> 警告 (warning) / 黄色 (yellow)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-danger"> 危险 (danger) / 红色 (red)</div>
</div>

##### 黑色/白色细微差别
{: .mt-4}
<div class="row">
  <div class="col-sm-4 col-lg-3 p-3 bg-black"> 黑色 (black)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-gray-dark"> 深灰色 (gray-dark)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-gray"> 灰色 (gray)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-light"> 浅色 (light)</div>
</div>

##### 颜色
{: .mt-4}
<div class="row">
  <div class="col-sm-4 col-lg-3 p-3 bg-indigo"> 深紫色 (indigo)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-navy"> 深蓝色 (navy)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-purple"> 紫色 (purple)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-fuchsia"> 紫红色 (fuchsia)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-pink"> 粉色 (pink)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-maroon"> 褐红色 (maroon)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-orange"> 橙色 (orange)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-lime"> 绿色 (lime)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-teal"> 鸭翅绿 (teal)</div>
  <div class="col-sm-4 col-lg-3 p-3 bg-olive"> 橄榄色 (olive)</div>
</div>

> ##### 提示！
> 你甚至可以将这些颜色与 `.text-*` 、`.bg-*` 及其他一起使用。
{: .quote-info}


##### 自定义范围/开关
自定义范围色，你可以添加这个类:
- `.custom-range-*`

对于自定义颜色开关，你可以添加这个类:
- `.custom-switch-off-*` （用于自定义关闭）
- `.custom-switch-on-*` （用于自定义开启）

##### 提示框
你还可以在 `.toast` 旁边使用 `bg-*` 以获得漂亮的提示框。

##### 支持插件
你可以将以上所有颜色用于这些插件：
- Bootstrap Slider
  - `.slider-*` （在滑块上使用）
- iCheck-Bootstrap
  - `.icheck-*`