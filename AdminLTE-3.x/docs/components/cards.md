---
layout: page
title: 卡片组件
---

在此模板中，卡片组件是使用最广泛的。你可以将其用于显示图表、文本块等。有许多不同的样式，我们将在下面进行介绍。

##### 默认卡片标记
{: .text-bold .text-dark .mt-5}


<div class="card">
  <div class="card-header">
    <h3 class="card-title">默认卡片示例</h3>
    <div class="card-tools">
      <span class="badge badge-primary">标签</span>
    </div>
  </div>
  <div class="card-body">
    这里是卡片内容
  </div>
  <div class="card-footer">
    这里是卡片底部
  </div>
</div>

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">默认卡片示例</h3>
    <div class="card-tools">
      <!-- 按钮，标签和其他东西都可以放在这里！ -->
      <!-- 例如，这里是个标签 -->
      <span class="badge badge-primary">标签</span>
    </div>
    <!-- /.card-tools -->
  </div>
  <!-- /.card-header -->
  <div class="card-body">
    这里是卡片内容
  </div>
  <!-- /.card-body -->
  <div class="card-footer">
    这里是卡片底部
  </div>
  <!-- /.card-footer -->
</div>
<!-- /.card -->
```
{: .max-height-300}

##### 卡片样式
{: .text-bold .text-dark .mt-5}

你可以通过添加相关类来更改卡片的样式。

###### 默认
{: .text-bold .text-dark}

<div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">默认卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">主要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-secondary">
      <div class="card-header">
        <h3 class="card-title">次要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-success">
      <div class="card-header">
        <h3 class="card-title">成功卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">信息卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-warning">
      <div class="card-header">
        <h3 class="card-title">警告卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-danger">
      <div class="card-header">
        <h3 class="card-title">危险卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-dark">
      <div class="card-header">
        <h3 class="card-title">暗色卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>

```html
<div class="card">...</div>
<div class="card card-primary">...</div>
<div class="card card-secondary">...</div>
<div class="card card-success">...</div>
<div class="card card-info">...</div>
<div class="card card-warning">...</div>
<div class="card card-danger">...</div>
<div class="card card-dark">...</div>
```

###### 轮廓
{: .text-bold .text-dark}

<div class="row">
  <div class="col-sm-3">
    <div class="card card-outline card-primary">
      <div class="card-header">
        <h3 class="card-title">主要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-outline card-secondary">
      <div class="card-header">
        <h3 class="card-title">次要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-outline card-success">
      <div class="card-header">
        <h3 class="card-title">成功卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-outline card-info">
      <div class="card-header">
        <h3 class="card-title">信息卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <div class="card card-outline card-warning">
      <div class="card-header">
        <h3 class="card-title">警告卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-outline card-danger">
      <div class="card-header">
        <h3 class="card-title">危险卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card card-outline card-dark">
      <div class="card-header">
        <h3 class="card-title">暗色卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-outline card-primary">...</div>
<div class="card card-outline card-secondary">...</div>
<div class="card card-outline card-success">...</div>
<div class="card card-outline card-info">...</div>
<div class="card card-outline card-warning">...</div>
<div class="card card-outline card-danger">...</div>
<div class="card card-outline card-dark">...</div>
```


###### 背景色
{: .text-bold .text-dark}

<div class="row">
  <div class="col-sm-3">
    <div class="card bg-primary">
      <div class="card-header">
        <h3 class="card-title">主要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-secondary">
      <div class="card-header">
        <h3 class="card-title">次要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-success">
      <div class="card-header">
        <h3 class="card-title">成功卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-info">
      <div class="card-header">
        <h3 class="card-title">信息卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <div class="card bg-warning">
      <div class="card-header">
        <h3 class="card-title">警告卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-danger">
      <div class="card-header">
        <h3 class="card-title">危险卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-dark">
      <div class="card-header">
        <h3 class="card-title">暗色卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>

```html
<div class="card bg-primary">...</div>
<div class="card bg-secondary">...</div>
<div class="card bg-success">...</div>
<div class="card bg-info">...</div>
<div class="card bg-warning">...</div>
<div class="card bg-danger">...</div>
<div class="card bg-dark">...</div>
```


###### 渐变背景色
{: .text-bold .text-dark}

<div class="row">
  <div class="col-sm-3">
    <div class="card bg-gradient-primary">
      <div class="card-header">
        <h3 class="card-title">主要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-gradient-secondary">
      <div class="card-header">
        <h3 class="card-title">次要卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-gradient-success">
      <div class="card-header">
        <h3 class="card-title">成功卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-gradient-info">
      <div class="card-header">
        <h3 class="card-title">信息卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <div class="card bg-gradient-warning">
      <div class="card-header">
        <h3 class="card-title">警告卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-gradient-danger">
      <div class="card-header">
        <h3 class="card-title">危险卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card bg-gradient-dark">
      <div class="card-header">
        <h3 class="card-title">暗色卡片示例</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="card-footer">
        这里是卡片底部
      </div>
    </div>
  </div>
</div>

```html
<div class="card bg-gradient-primary">...</div>
<div class="card bg-gradient-secondary">...</div>
<div class="card bg-gradient-success">...</div>
<div class="card bg-gradient-info">...</div>
<div class="card bg-gradient-warning">...</div>
<div class="card bg-gradient-danger">...</div>
<div class="card bg-gradient-dark">...</div>
```


##### 卡片工具
{: .text-bold .text-dark .mt-5}

卡片可以包含用于部署特定事件或提供简单信息的工具。以下示例在卡片标题中使用了多个 AdminLTE 组件。

AdminLTE data-card-widget 属性为卡片提供折叠或移除的功能。按钮位于卡片标题的工具中。 

```html
<div class="card card-primary">
  <div class="card-header">
    <h3 class="card-title">卡片工具</h3>

    <div class="card-tools">
      <!-- 点击后会使卡片最大化 -->
      <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
      <!-- 点击后会使卡片折叠 -->
      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
      <!-- 点击后会移除卡片 -->
      <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
    </div>
    <!-- /.card-tools -->
  </div>
  <!-- /.card-header -->
  <div class="card-body">
    这里是卡片内容
  </div>
  <!-- /.card-body -->
</div>
<!-- /.card -->
```
{: .max-height-300}


##### 载入效果
{: .text-bold .text-dark .mt-5}

要模拟加载状态，只需将此代码放在 `.card` 结束标记之前。 

```html
<div class="overlay">
  <i class="fas fa-2x fa-sync-alt fa-spin"></i>
</div>
```

<div class="row">
  <div class="col-md-3">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-outline card-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card bg-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card bg-gradient-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
</div>


你也可以使用暗色加载样式，像这个代码中将 `.dark` 添加到 `.overlay` 中。

```html
<div class="overlay dark">
  <i class="fas fa-2x fa-sync-alt fa-spin"></i>
</div>
```

<div class="row">
  <div class="col-md-3">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态（暗色）</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay dark">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-outline card-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态（暗色）</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay dark">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card bg-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态（暗色）</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay dark">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card bg-gradient-primary">
      <div class="card-header">
        <h3 class="card-title">载入状态（暗色）</h3>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
      <div class="overlay dark">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
</div>
