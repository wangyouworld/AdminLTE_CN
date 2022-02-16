---
layout: page
title: 主标题组件
---

> ##### 提醒！
> AdminLTE 使用所有 Bootstrap 4 组件。这是一个回顾 [Bootstrap 文档](https://getbootstrap.com/)的良好开端，通过它了解此文档未涵盖的各种组件。
{: .quote-orange .mt-0}


> ##### 提示！
> 在浏览示例页面时如果你想要复制组件，请右键单击该组件并选择“检查元素”它比从页面中获取 HTML 更快。
{: .quote-info}

主标题包含导航栏。导航栏结构与 Bootstrap 略有不同，因为它有 Bootstrap 不提供的组件。导航栏可以通过两种方式创建。这是常规导航栏的示例，接下来，我们将提供顶部导航布局的示例以及 LOGO。


<nav class="navbar navbar-expand navbar-white navbar-light ml-0">
  <!-- 左侧导航栏链接 -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="index3.html" class="nav-link">主页</a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link">联系</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        帮助
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">FAQ</a>
        <a class="dropdown-item" href="#">支持</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">联系</a>
      </div>
    </li>
  </ul>

  <!-- 搜索表单 -->
  <form class="form-inline ml-3">
    <div class="input-group input-group-sm">
      <input class="form-control form-control-navbar" type="search" placeholder="搜索" aria-label="Search">
      <div class="input-group-append">
        <button class="btn btn-navbar" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </form>

  <!-- 右侧导航栏链接 -->
  <ul class="navbar-nav ml-auto">
    <!-- 消息下拉菜单 -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-comments"></i>
        <span class="badge badge-danger navbar-badge">3</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" class="dropdown-item">
          <!-- 消息开始 -->
          <div class="media">
            <img src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="用户头像" class="img-size-50 mr-3 img-circle">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Brad Diesel
                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">有空的话就打电话给我...</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
            </div>
          </div>
          <!-- 消息结束 -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- 消息开始 -->
          <div class="media">
            <img src="{{ '/assets/img/user8-128x128.jpg' | prepend: site.baseurl }}" alt="用户头像" class="img-size-50 img-circle mr-3">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                John Pierce
                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">我收到你的消息了</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
            </div>
          </div>
          <!-- 消息结束 -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- 消息开始 -->
          <div class="media">
            <img src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="用户头像" class="img-size-50 img-circle mr-3">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Nora Silvester
                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">主题在这里</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
            </div>
          </div>
          <!-- 消息结束 -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-footer">查看所有消息</a>
      </div>
    </li>
    <!-- 通知下拉菜单 -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-bell"></i>
        <span class="badge badge-warning navbar-badge">15</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span class="dropdown-header">15 条通知</span>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-envelope mr-2"></i> 4 条新消息
          <span class="float-right text-muted text-sm">3 分钟前</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-users mr-2"></i> 8 个好友请求
          <span class="float-right text-muted text-sm">12 小时前</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-file mr-2"></i> 3 个新报告
          <span class="float-right text-muted text-sm">2 天前</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-footer">查看所有通知</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
          class="fas fa-th-large"></i></a>
    </li>
  </ul>
</nav>

```html
<!-- 导航栏 -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- 左侧导航栏链接 -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="index3.html" class="nav-link">主页</a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link">联系</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        帮助
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
        <a class="dropdown-item" href="#">FAQ</a>
        <a class="dropdown-item" href="#">支持</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">联系</a>
      </div>
    </li>
  </ul>

  <!-- 搜索表单 -->
  <form class="form-inline ml-3">
    <div class="input-group input-group-sm">
      <input class="form-control form-control-navbar" type="search" placeholder="搜索" aria-label="Search">
      <div class="input-group-append">
        <button class="btn btn-navbar" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </form>

  <!-- 右侧导航栏链接 -->
  <ul class="navbar-nav ml-auto">
    <!-- 消息下拉菜单 -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-comments"></i>
        <span class="badge badge-danger navbar-badge">3</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" class="dropdown-item">
          <!-- 消息开始 -->
          <div class="media">
            <img src="dist/img/user1-128x128.jpg" alt="用户头像" class="img-size-50 mr-3 img-circle">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Brad Diesel
                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">有空的话就打电话给我...</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
            </div>
          </div>
          <!-- 消息结束 -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- 消息开始 -->
          <div class="media">
            <img src="dist/img/user8-128x128.jpg" alt="用户头像" class="img-size-50 img-circle mr-3">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                John Pierce
                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">我收到你的消息了</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
            </div>
          </div>
          <!-- 消息结束 -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- 消息开始 -->
          <div class="media">
            <img src="dist/img/user3-128x128.jpg" alt="用户头像" class="img-size-50 img-circle mr-3">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Nora Silvester
                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">主题在这里</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
            </div>
          </div>
          <!-- 消息结束 -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-footer">查看所有消息</a>
      </div>
    </li>
    <!-- 通知下拉菜单 -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-bell"></i>
        <span class="badge badge-warning navbar-badge">15</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span class="dropdown-header">15 条通知</span>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-envelope mr-2"></i> 4 条新消息
          <span class="float-right text-muted text-sm">3 分钟前</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-users mr-2"></i> 8 个好友请求
          <span class="float-right text-muted text-sm">12 小时前</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-file mr-2"></i> 3 个新报告
          <span class="float-right text-muted text-sm">2 天前</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-footer">查看所有通知</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
          class="fas fa-th-large"></i></a>
    </li>
  </ul>
</nav>
<!-- /.navbar -->
```
{: .max-height-300}


#### 顶部导航布局 主标题示例

> ##### 提醒！
> 要使用此主标题而不是常规标题，必须将 `layout-top-nav` 类添加到 body 标签。
{: .quote-orange}

顶部导航栏示例可以在[演示页面](/AdminLTE/AdminLTE-3.x/pages/layout/top-nav.html)中找到。 


<nav class="navbar navbar-expand navbar-light navbar-white">
  <div class="container">
    <a href="index3.html" class="navbar-brand">
      <img src="{{ '/assets/img/AdminLTELogo.png' | prepend: site.baseurl }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8; max-height: 33px;">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    <!-- 左侧导航栏链接 -->
    <ul class="navbar-nav">
      <li class="nav-item">
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">主页</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">联系</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          帮助
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown3">
          <a class="dropdown-item" href="#">FAQ</a>
          <a class="dropdown-item" href="#">支持</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">联系</a>
        </div>
      </li>
    </ul>
    <!-- 搜索表单 -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="搜索" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    <!-- 右侧导航栏链接 -->
    <ul class="navbar-nav ml-auto">
      <!-- 消息下拉菜单 -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fas fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
       <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- 消息开始 -->
            <div class="media">
              <img src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="用户头像" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">有空的话就打电话给我...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
              </div>
            </div>
            <!-- 消息结束 -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- 消息开始 -->
            <div class="media">
              <img src="{{ '/assets/img/user8-128x128.jpg' | prepend: site.baseurl }}" alt="用户头像" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">我收到你的消息了</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
              </div>
            </div>
            <!-- 消息结束 -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- 消息开始 -->
            <div class="media">
              <img src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="用户头像" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">主题在这里</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
              </div>
            </div>
            <!-- 消息结束 -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">查看所有消息</a>
        </div>
      </li>
      <!-- 通知下拉菜单 -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-header">15 条通知</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 条新消息
            <span class="float-right text-muted text-sm">3 分钟前</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 个好友请求
            <span class="float-right text-muted text-sm">12 小时前</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 个新报告
            <span class="float-right text-muted text-sm">2 天前</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">查看所有通知</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
            class="fas fa-th-large"></i></a>
      </li>
    </ul>
  </div>
</nav>

```html
<!-- 导航栏 -->
<nav class="main-header navbar navbar-expand navbar-light navbar-white">
  <div class="container">
    <a href="index3.html" class="navbar-brand">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    <!-- 左侧导航栏链接 -->
    <ul class="navbar-nav">
      <li class="nav-item">
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">主页</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">联系</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          帮助
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
          <a class="dropdown-item" href="#">FAQ</a>
          <a class="dropdown-item" href="#">支持</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">联系</a>
        </div>
      </li>
    </ul>
    <!-- 搜索表单 -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="搜索" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    <!-- 右侧导航栏链接 -->
    <ul class="navbar-nav ml-auto">
      <!-- 消息下拉菜单 -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fas fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- 消息开始 -->
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="用户头像" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">有空的话就打电话给我...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
              </div>
            </div>
            <!-- 消息结束 -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- 消息开始 -->
            <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="用户头像" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">我收到你的消息了</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
              </div>
            </div>
            <!-- 消息结束 -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- 消息开始 -->
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="用户头像" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">主题在这里</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 小时前</p>
              </div>
            </div>
            <!-- 消息结束 -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">查看所有消息</a>
        </div>
      </li>
      <!-- 通知下拉菜单 -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-header">15 条通知</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 条新消息
            <span class="float-right text-muted text-sm">3 分钟前</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 个好友请求
            <span class="float-right text-muted text-sm">12 小时前</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 个新报告
            <span class="float-right text-muted text-sm">2 天前</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">查看所有通知</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
            class="fas fa-th-large"></i></a>
      </li>
    </ul>
  </div>
</nav>
<!-- /.navbar -->
```
{: .max-height-300}


> ##### 提示！
> 要获得更大的下拉菜单，你可以在 `.dropdown-menu` 类中添加 `.dropdown-menu-lg` 或 `.dropdown-menu-xl`。
> 你可以通过向 `.main-header` 中添加 `.dropdown-legacy` 来获得旧版下拉菜单的偏移量。
{: .quote-info}
