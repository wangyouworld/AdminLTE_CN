---
layout: page
title: 控制侧边栏组件
---

控制侧边栏是右边的侧边栏。它可以用于多种目的，并且非常易于创建。侧边栏附带两种不同的显示/隐藏样式。第一个允许侧边栏在内容上滑动。第二个推送内容以便为侧边栏腾出空间。可以通过 [JavaScript 选项](/AdminLTE/AdminLTE-3.x/docs/javascript/control-sidebar.html)设置这两种方法。 

将以下代码放在 `.wrapper` div 中。我更喜欢将其放在页脚之后。

##### 固定控制侧边栏
{: .text-bold .text-dark}

通过将 `.control-sidebar-push` 添加到 `body` 中，这将会固定侧边栏，而不是覆盖内容。
通过添加 `.control-sidebar-push-slide` 到 `body` 中 ，将会显示过渡效果将内容推开。

##### 暗色侧边栏标记
{: .text-bold .text-dark}

```html
  <!-- 控制侧边栏 -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- 控制侧边栏内容在这里 -->
    <div class="p-3">
      <!-- 侧边栏的内容在这里 -->
    </div>
  </aside>
  <!-- /.control-sidebar -->
```

##### 亮色侧边栏标记
{: .text-bold .text-dark .mt-5}

```html
  <!-- 控制侧边栏 -->
  <aside class="control-sidebar control-sidebar-light">
    <!-- 控制侧边栏内容在这里 -->
    <div class="p-3">
      <!-- 侧边栏的内容在这里 -->
    </div>
  </aside>
  <!-- /.control-sidebar -->
```

##### 控制侧边栏切换标记
{: .text-bold .text-dark .mt-5}

创建侧边栏后，你需要一个按钮来打开/关闭它。通过将 data-toggle="control-sidebar" 属性添加到任何按钮，它将自动充当切换按钮。 

```html
<a class="nav-link" data-widget="control-sidebar" href="#">切换控制侧边栏</a>
```
