---
layout: page
title: 插件
---
AdminLTE 为以下插件提供了颜色样式和附加功能。

### Bootstrap 滑块

你可以使用以下类覆盖 Bootstrap 滑块轨道颜色：

- `.slider-*`

示例：

```html
<div class="slider-red">
  <input type="text" value="" class="slider form-control" data-slider...>
</div>
```

你还可以使用以下类来更改滑块的布局：

- `.slider-vertical`
- `.slider-horizontal`

示例：

```html
<div class="slider-red">
  <input type="text" value="" class="slider slider-vertical form-control" data-slider...>
</div>
```


### iCheck Bootstrap

你可以覆盖 iCheck 复选框/单选框的的颜色，添加以下类：

- `.icheck-*`

示例：

```html
<div class="icheck-primary">
  <input type="checkbox" id="checkbox1">
  <label for="checkbox1">
    Checkbox Label
  </label>
</div>
```


### Pace

你可以覆盖所有 pace 的主题颜色，加载所需的主题，然后将以下类之一添加到 `body` 中：

- `.pace-*`
  - barber-shop
  - flat-top
  - minimal
- `.pace-big-counter-*`
  - big-counter
- `.pace-bounce-*`
  - bounce
- `pace-center-atom-*`
  - center-atom
- `pace-center-circle-*`
  - center-circle
- `pace-center-radar-*`
  - center-radar
- `pace-center-simple-*`
  - center-simple
- `pace-corner-indicator-*`
  - corner-indicator
- `.pace-flash-*`
  - flash
- `.pace-fill-left-*`
  - fill-left
- `.pace-loading-bar-*`
  - loading-bar
- `.pace-material-*`
  - material
- `.pace-mac-osx-*`
  - mac-osx

示例： `<body class="pace-success">`


### SweetAlert

在你使用 SweetAlert 时，如果你在 AdminLTE CSS 之前加载了 SweetAlert CSS，那么任何图标的颜色都会更改为 AdminLTE 的默认颜色。


### Toastr

在你使用 Toastr 时，如果你在 AdminLTE CSS 之前加载了 Toastr CSS，那么背景颜色会更改为 AdminLTE 的默认颜色。
