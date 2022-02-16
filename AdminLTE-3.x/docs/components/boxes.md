---
layout: page
title: 框组件
---

有两种类型的框，信息框和小框。两个框均用于显示统计摘要。 

##### 信息框
{: .text-bold .text-dark .mt-4}

<div class="row">
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box">
      <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">消息</span>
        <span class="info-box-number">1,410</span>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box bg-success">
      <span class="info-box-icon"><i class="far fa-flag"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">书签</span>
        <span class="info-box-number">410</span>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box bg-gradient-warning">
      <span class="info-box-icon"><i class="far fa-copy"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">上传</span>
        <span class="info-box-number">13,648</span>
      </div>
    </div>
  </div>
</div>

<div class="row" markdown="1">
```html
<div class="info-box">
  <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">消息</span>
    <span class="info-box-number">1,410</span>
  </div>
</div>
```
{: .col-md-4 .col-sm-6 .col-12}
```html
<div class="info-box bg-success">
  <span class="info-box-icon"><i class="far fa-flag"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">书签</span>
    <span class="info-box-number">410</span>
  </div>
</div>
```
{: .col-md-4 .col-sm-6 .col-12}
```html
<div class="info-box bg-gradient-warning">
  <span class="info-box-icon"><i class="far fa-copy"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">上传</span>
    <span class="info-box-number">13,648</span>
  </div>
</div>
```
{: .col-md-4 .col-sm-6 .col-12}
</div>

> ##### 注意！
> 要将内容换行，请在 info-box-text 中添加 text-wrap 类。
> 要截断文本并显示...，请在 info-box-content 中添加 text-truncate 类。（在这里你应该添加工具提示以显示整个内容）
{: .quote-danger}

##### 带进度条的信息框
{: .text-bold .text-dark .mt-4}

<div class="row">
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box">
      <span class="info-box-icon bg-info"><i class="far fa-bookmark"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">书签</span>
        <span class="info-box-number">41,410</span>
        <div class="progress">
          <div class="progress-bar bg-info" style="width: 70%"></div>
        </div>
        <span class="progress-description">
          30 天增加 70%
        </span>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box bg-success">
      <span class="info-box-icon"><i class="far fa-thumbs-up"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">喜欢</span>
        <span class="info-box-number">41,410</span>
        <div class="progress">
          <div class="progress-bar" style="width: 70%"></div>
        </div>
        <span class="progress-description">
          30 天增加 70%
        </span>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box bg-gradient-warning">
      <span class="info-box-icon"><i class="far fa-calendar-alt"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">事件</span>
        <span class="info-box-number">41,410</span>
        <div class="progress">
          <div class="progress-bar" style="width: 70%"></div>
        </div>
        <span class="progress-description">
          30 天增加 70%
        </span>
      </div>
    </div>
  </div>
</div>

<div class="row" markdown="1">
```html
<div class="info-box">
  <span class="info-box-icon bg-info"><i class="far fa-bookmark"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">书签</span>
    <span class="info-box-number">41,410</span>
    <div class="progress">
      <div class="progress-bar bg-info" style="width: 70%"></div>
    </div>
    <span class="progress-description">
      30 天增加 70%
    </span>
  </div>
</div>
```
{: .col-md-4 .col-sm-6 .col-12 .max-height-300}
```html
<div class="info-box bg-success">
  <span class="info-box-icon"><i class="far fa-thumbs-up"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">喜欢</span>
    <span class="info-box-number">41,410</span>
    <div class="progress">
      <div class="progress-bar" style="width: 70%"></div>
    </div>
    <span class="progress-description">
      30 天增加 70%
    </span>
  </div>
</div>
```
{: .col-md-4 .col-sm-6 .col-12 .max-height-300}
```html
<div class="info-box bg-gradient-warning">
  <span class="info-box-icon"><i class="far fa-calendar-alt"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">事件</span>
    <span class="info-box-number">41,410</span>
    <div class="progress">
      <div class="progress-bar" style="width: 70%"></div>
    </div>
    <span class="progress-description">
      30 天增加 70%
    </span>
  </div>
</div>
```
{: .col-md-4 .col-sm-6 .col-12 .max-height-300}
</div>


##### 小框
{: .text-bold .text-dark .mt-4}

<div class="row">
  <div class="col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="small-box bg-info">
      <div class="inner">
        <h3>150</h3>
        <p>新订单</p>
      </div>
      <div class="icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <a href="#" class="small-box-footer">
        更多信息 <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="small-box bg-gradient-success">
      <div class="inner">
        <h3>44</h3>
        <p>用户注册</p>
      </div>
      <div class="icon">
        <i class="fas fa-user-plus"></i>
      </div>
      <a href="#" class="small-box-footer">
        更多信息 <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
</div>

<div class="row" markdown="1">
```html
<div class="small-box bg-info">
  <div class="inner">
    <h3>150</h3>
    <p>新订单</p>
  </div>
  <div class="icon">
    <i class="fas fa-shopping-cart"></i>
  </div>
  <a href="#" class="small-box-footer">
    更多信息 <i class="fas fa-arrow-circle-right"></i>
  </a>
</div>
```
{: .col-md-4 .col-sm-6 .col-12 .max-height-300}
```html
<div class="small-box bg-gradient-success">
  <div class="inner">
    <h3>44</h3>
    <p>用户注册</p>
  </div>
  <div class="icon">
    <i class="fas fa-user-plus"></i>
  </div>
  <a href="#" class="small-box-footer">
    更多信息 <i class="fas fa-arrow-circle-right"></i>
  </a>
</div>
```
{: .col-md-4 .col-sm-6 .col-12 .max-height-300}
</div>



##### 载入效果
{: .text-bold .text-dark .mt-5}

要模拟加载状态，只需将此代码放在 `.info-box` / `.small-box` 结束标记之前。 

> ##### 提示！
> 对于信息框，建议使用 `.fa-2x`；对于小框，建议使用 `.fa-3x`，以获取合适尺寸的加载图标，<br>如本文档中的示例。 
{: .quote-info}

```html
<div class="overlay">
  <i class="fas fa-2x fa-sync-alt fa-spin"></i>
</div>
```

<div class="row">
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box clearfix">
      <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">消息</span>
        <span class="info-box-number">1,410</span>
      </div>
      <div class="overlay">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box">
      <span class="info-box-icon bg-info"><i class="far fa-bookmark"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">书签</span>
        <span class="info-box-number">41,410</span>
        <div class="progress">
          <div class="progress-bar bg-info" style="width: 70%"></div>
        </div>
        <span class="progress-description">
          30 天增加 70%
        </span>
      </div>
      <div class="overlay">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="small-box bg-info">
      <div class="inner">
        <h3>150</h3>
        <p>新订单</p>
      </div>
      <div class="icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <a href="#" class="small-box-footer">
        更多信息 <i class="fas fa-arrow-circle-right"></i>
      </a>
      <div class="overlay">
        <i class="fas fa-3x fa-sync-alt fa-spin"></i>
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
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box clearfix">
      <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">消息</span>
        <span class="info-box-number">1,410</span>
      </div>
      <div class="overlay dark">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-sm-6 col-12">
    <div class="info-box">
      <span class="info-box-icon bg-info"><i class="far fa-bookmark"></i></span>
      <div class="info-box-content">
        <span class="info-box-text">书签</span>
        <span class="info-box-number">41,410</span>
        <div class="progress">
          <div class="progress-bar bg-info" style="width: 70%"></div>
        </div>
        <span class="progress-description">
          30 天增加 70%
        </span>
      </div>
      <div class="overlay dark">
        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="small-box bg-info">
      <div class="inner">
        <h3>150</h3>
        <p>新订单</p>
      </div>
      <div class="icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <a href="#" class="small-box-footer">
        更多信息 <i class="fas fa-arrow-circle-right"></i>
      </a>
      <div class="overlay dark">
        <i class="fas fa-3x fa-sync-alt fa-spin"></i>
      </div>
    </div>
  </div>
</div>
