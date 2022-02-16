---
layout: page
title: 丝带组件
---

丝带组件是一种在任何内容上方显示信息的简便方法。`.ribbon-warpper` 必须位于具有 _position:relative;_ 的元素内。在此文档页面中，我们将丝带放在 `<div class="position-relative p-3 bg-gray" style="height: 180px"></div>` 中，也可以将其放置在卡片、表格、行等元素上。

丝带组件有三种大小，以显示更多文本或更大的字体，默认值（`.ribbon-wrapper`），大号（`.ribbon-wrapper` 和 `.ribbon-lg`），超大号（`.ribbon-wrapper` 和 `.ribbon-xl`）。

##### 标记示例 
{: .text-bold .text-dark .mt-5}

<div class="position-relative p-3 bg-gray" style="height: 180px">
  <div class="ribbon-wrapper">
    <div class="ribbon bg-primary">
      丝带
    </div>
  </div>
  默认丝带 <br />
  <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
</div>

```html
<div class="ribbon-wrapper">
  <div class="ribbon bg-primary">
    丝带
  </div>
</div>
```
{: .max-height-300}

##### 不同大小的丝带
{: .text-bold .text-dark .mt-5}

<div class="row">
  <div class="col-sm-4">
    <div class="position-relative p-3 bg-gray" style="height: 180px">
      <div class="ribbon-wrapper">
        <div class="ribbon bg-primary">
          丝带
        </div>
      </div>
      默认丝带 <br />
      <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="position-relative p-3 bg-gray" style="height: 180px">
      <div class="ribbon-wrapper ribbon-lg">
        <div class="ribbon bg-info">
          大号丝带
        </div>
      </div>
      大号丝带 <br />
      <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="position-relative p-3 bg-gray" style="height: 180px">
      <div class="ribbon-wrapper ribbon-xl">
        <div class="ribbon bg-secondary">
          超大号丝带
        </div>
      </div>
      超大号丝带 <br />
      <small>.ribbon-wrapper.ribbon-xl .ribbon</small>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4" markdown="1">
```html
  <div class="ribbon-wrapper">
    <div class="ribbon bg-primary">
      丝带
    </div>
  </div>
```
  </div>
  <div class="col-sm-4" markdown="1">
```html
  <div class="ribbon-wrapper ribbon-lg">
    <div class="ribbon bg-info">
      大号丝带
    </div>
  </div>
```
  </div>
  <div class="col-sm-4" markdown="1">
```html
  <div class="ribbon-wrapper ribbon-xl">
    <div class="ribbon bg-secondary">
      超大号丝带
    </div>
  </div>
```
  </div>
</div>

##### 不同字号的丝带
{: .text-bold .text-dark .mt-5}

<div class="row">
  <div class="col-sm-4">
    <div class="position-relative p-3 bg-gray" style="height: 180px">
      <div class="ribbon-wrapper ribbon-lg">
        <div class="ribbon bg-success text-lg">
          丝带
        </div>
      </div>
      大号丝带 <br /> 的大文本 <br />
      <small>.ribbon-wrapper.ribbon-lg .ribbon.text-lg</small>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="position-relative p-3 bg-gray" style="height: 180px">
      <div class="ribbon-wrapper ribbon-xl">
        <div class="ribbon bg-warning text-lg">
          丝带
        </div>
      </div>
      超大号丝带 <br /> 的大文本 <br />
      <small>.ribbon-wrapper.ribbon-xl .ribbon.text-lg</small>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="position-relative p-3 bg-gray" style="height: 180px">
      <div class="ribbon-wrapper ribbon-xl">
        <div class="ribbon bg-danger text-xl">
          丝带
        </div>
      </div>
      超大号丝带 <br /> 的超大文本 <br />
      <small>.ribbon-wrapper.ribbon-xl .ribbon.text-xl</small>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4" markdown="1">
```html
<div class="ribbon-wrapper ribbon-lg">
  <div class="ribbon bg-success text-lg">
    丝带
  </div>
</div>
```
  </div>
  <div class="col-sm-4" markdown="1">
```html
<div class="ribbon-wrapper ribbon-xl">
  <div class="ribbon bg-warning text-lg">
    丝带
  </div>
</div>
```
  </div>
  <div class="col-sm-4" markdown="1">
```html
<div class="ribbon-wrapper ribbon-xl">
  <div class="ribbon bg-danger text-xl">
    丝带
  </div>
</div>
```
  </div>
</div>

##### 图片示例代码
{: .text-bold .text-dark .mt-5}

```html
<div class="position-relative">
  <img src="../../dist/img/photo1.png" alt="照片 1" class="img-fluid">
  <div class="ribbon-wrapper ribbon-lg">
    <div class="ribbon bg-success text-lg">
      丝带
    </div>
  </div>
</div>
```
