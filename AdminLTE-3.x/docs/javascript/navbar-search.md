---
layout: page
title: 导航栏搜索插件
---

导航栏搜索插件提供了搜索功能。 

##### 用法

该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }

将 `data-widget="navbar-search"` 添加到标题内的 `.navbar-search-block` 来激活插件。你可以使用下面的 HTML 代码快速开始。

###### jQuery
{: .text-bold }

jQuery API 提供了更具可自定义的选项，允许开发人员在展示前预先处理请求，在请求之后处理返回内容。 

```js
("[data-widget="navbar-search"]").SiteSearch(options)
```

##### HTML 代码
将此 HTML 标记放在标题内。
```html
<a data-widget="navbar-search" href="#" role="button">
  <i class="fas fa-search"></i>
</a>
<div class="navbar-search-block">
  <form class="form-inline">
    <div class="input-group input-group-sm">
      <input class="form-control form-control-navbar" type="search" placeholder="搜索" aria-label="Search">
      <div class="input-group-append">
        <button class="btn btn-navbar" type="submit">
          <i class="fas fa-search"></i>
        </button>
        <button class="btn btn-navbar" type="button" data-widget="navbar-search">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </form>
</div>
```

或者，也可以使用以下标记将搜索按钮作为 nav-item 放置在导航栏中：
```html
<li class="nav-item">
  <a class="nav-link" data-widget="navbar-search" href="#" role="button">
    <i class="fas fa-search"></i>
  </a>
  <div class="navbar-search-block">
    <form class="form-inline">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="搜索" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
          <button class="btn btn-navbar" type="button" data-widget="navbar-search">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</li>
```

##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
| resetOnClose | Boolean | false | 关闭/隐藏时重置输入。
|target | String | `.navbar-search-block` | 将 navbar-search-block 定义为可处理个 navbar-search-blocks。
{: .table .table-bordered .bg-light}


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|toggle | 切换搜索块。
|close | 关闭搜索块。
|open | 打开搜索块。
{: .table .table-bordered .bg-light}

示例： `$('[data-widget="navbar-search"]').SiteSearch('toggle')`
