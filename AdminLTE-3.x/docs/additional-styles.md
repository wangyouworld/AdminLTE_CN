---
layout: page
title: 附加样式/自定义皮肤
---

如果要创建其他样式，例如按钮、背景实用程序或公司的特定颜色，则可以使用 SCSS 模板轻松创建自己的 AdminLTE 子版本。

在示例中，我们创建了一个 `.btn-custom-color` 自定义按钮类，该按钮类具有额外的按钮样式，以及一个名为 `.my-custom-style` 的自定义类。

```scss
// Bootstrap
// ---------------------------------------------------
@import '~bootstrap/scss/functions';
@import '~admin-lte/build/scss/bootstrap-variables';

// 自定义主题颜色开始
$custom-color: #00FF00;
$theme-colors: map-merge((
    'custom-color': $custom-color,
), $theme-colors);
// 自定义主题颜色结束

// 变量和混合
// ---------------------------------------------------
@import '~admin-lte/build/scss/variables';
@import '~admin-lte/build/scss/variables-alt';
@import '~admin-lte/build/scss/mixins';

@import '~bootstrap/scss/bootstrap';

@import '~admin-lte/build/scss/parts/core';
@import '~admin-lte/build/scss/parts/components';
@import '~admin-lte/build/scss/parts/extra-components';
@import '~admin-lte/build/scss/parts/pages';
@import '~admin-lte/build/scss/parts/plugins';
@import '~admin-lte/build/scss/parts/miscellaneous';

// 自定义样式开始
.my-custom-style {
  background-color: $custom-color;
  padding: .5rem 0;
}
// 自定义样式结束
```
{: .max-height-300}

你还可以使用 SCSS 模板在 AdminLTE 之上创建皮肤。

在示例中，我们创建了一个名为 `.btn-custom-color` 的自定义类，并带有额外的按钮样式。

```scss
// Bootstrap
// ---------------------------------------------------
@import '~bootstrap/scss/functions';
@import '~admin-lte/build/scss/bootstrap-variables';
@import '~bootstrap/scss/mixins';

$custom-color: #00FF00;

.btn-custom-color {
    @include button-variant($custom-color, $custom-color);
}
```


> ##### 注意！
> 这些示例是原始的 SCSS 模板，你需要 SCSS -> CSS 构建脚本才能将 SCSS 编译为 CSS！
{: .quote-warning}
