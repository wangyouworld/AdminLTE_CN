---
layout: page
title: 卡片小部件插件
---

卡片小部件插件提供了折叠、展示和移除卡片的功能。 

### 用法

该插件可以作为 jQuery 插件或使用数据 API 激活。 

#### 数据 API

该插件提供了两个 data-api 属性。任何使用以下属性之一的元素都应放在 `.card-tools` div 中，该元素通常在卡片头部。有关[卡片 HTML 结构](/AdminLTE/AdminLTE-3.x/docs/components/cards.html)的更多信息，请访问卡片组件文档 

##### `data-card-widget="collapse"`

将此属性附加到按钮上，在点击按钮后将折叠/展开卡片。 

<div class="row">
  <div class="col-12 col-md-4">
     <div class="card">
      <div class="card-header">
        <h3 class="card-title">可折叠卡片示例</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
        </div>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
    </div>
  </div>
  <div class="col-12 col-md-8" markdown="1">
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">可折叠卡片示例</h3>
    <div class="card-tools">
      <!-- 折叠按钮 -->
      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
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
  </div>
</div>

##### `data-card-widget="remove"`

将此属性附加到按钮上，在点击按钮后将移除卡片。 

<div class="row">
  <div class="col-12 col-md-4">
     <div class="card">
      <div class="card-header">
        <h3 class="card-title">移除卡片示例</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
    </div>
  </div>
  <div class="col-12 col-md-8" markdown="1">
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">移除卡片示例</h3>
    <div class="card-tools">
      <!-- 移除按钮 -->
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
  </div>
</div>

##### `data-card-widget="maximize"`

将此属性附加到按钮上，在点击按钮后将最大化/最小化卡片。 

<div class="row">
  <div class="col-12 col-md-4">
     <div class="card">
      <div class="card-header">
        <h3 class="card-title">最大化卡片示例</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
        </div>
      </div>
      <div class="card-body">
        这里是卡片内容
      </div>
    </div>
  </div>
  <div class="col-12 col-md-8" markdown="1">
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">最大化卡片示例</h3>
    <div class="card-tools">
      <!-- 最大化按钮 -->
      <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
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
  </div>
</div>


###### jQuery
{: .text-bold }
要使用 jQuery 激活任何按钮，则必须提供 removeTrigger 和 crashTrigger 选项。否则，插件将默认使用 `data-card-widget` 的选择器。 

```js
$('#my-card').CardWidget(options)
```

##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|animationSpeed | Number | 300 | 上下滑动动画速度，以毫秒为单位。
|collapseTrigger | String | `[data-card-widget="collapse"]` | 负责折叠元素的 jQuery 选择器。
|removeTrigger | String | `[data-card-widget="remove"]` | 负责移除元素的 jQuery 选择器。
|maximizeTrigger | String | `[data-card-widget="maximize"]` | 负责最大化元素的 jQuery 选择器。
{: .table .table-bordered .bg-light}

> ##### 提示！
> 你可以通过数据属性使用任何选项，像这样。
> ```html
> <button type="button" class="btn btn-tool" data-card-widget="collapse" data-animation-speed="1000"><i class="fas fa-minus"></i></button>
> ```
{: .quote-info}

##### 事件
{: .mt-4}

|---
| 事件类型 | 说明
|-|-
|expanded.lte.cardwidget | 卡片展开后触发。
|collapsed.lte.cardwidget | 卡片折叠后触发。
|maximized.lte.cardwidget | 卡片最大化后触发。
|minimized.lte.cardwidget | 卡片最小化后触发。
|removed.lte.cardwidget | 卡片移除后触发。
{: .table .table-bordered .bg-light}

示例： `$('#my-card').on('expanded.lte.cardwidget', handleExpandedEvent)`


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|collapse | 折叠卡片
|expand | 展开卡片
|remove | 移除卡片
|toggle | 在展开和折叠卡片之间相互切换
|maximize | 最大化卡片
|minimize | 最小化卡片
|toggleMaximize | 在最大化和最小化卡片之间相互切换
{: .table .table-bordered .bg-light}

示例： `$('#my-card-widget').CardWidget('toggle')` 或 `$('#my-card').CardWidget('toggle')`
