---
layout: page
title: Toasts 插件
---

Toasts 插件提供了简单的功能，可以轻松创建 bootstrap toast。

##### 用法
该插件可以作为 jQuery 插件激活。

###### jQuery
{: .text-bold }
jQuery API 提供了更多可自定义的选项，允许开发人员处理待办事项列表中的选中和取消选事件。 
```js
$(document).Toasts('create', {
  title: 'Toast 标题',
  body: 'Lorem ipsum dolor 坐在沙发上，坐立不安。'
})
```


##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|position | String | Position.TOP_RIGHT | toast 位置，可用选项：`topRight`、`topLeft`、`bottomRight` 和 `bottomLeft`
|fixed | Boolean | true | 是否固定 toast 容器。
|autohide | Boolean | false | 是否自动隐藏 toast
|autoremove | Boolean | true | 关闭后是否自动移除 toast 
|delay | Integer | 1000 | 自动隐藏延迟时间
|fade | Boolean | true | 是否淡化 toast
|icon | String | null | 图标类 （例如 `fas fa-exclamation-triangle`）
|image | String | null | 图片地址
|imageAlt | String | null | 图片 alt
|imageHeight | String | '25px' | toast 图片大小
|title | String | null | toast 标题
|subtitle | String | null | toast 子标题
|close | Boolean | true | 是否在 toast 上添加关闭按钮
|body | String | null | toast 内容
|class | String | null | toast 的附加类
|---
{: .table .table-bordered .bg-light}


##### 事件
{: .mt-4}
所有事件都发送到 `body`。

|---
| 事件类型 | 说明
|-|-
|init.lte.toasts | 构造函数完成后触发
|created.lte.toasts | 创建时触发
|removed.lte.toasts | 移除时触发
{: .table .table-bordered .bg-light}

示例： `$('body').on('created.lte.toast', handleCreateEvent)`


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|create | 创建 toast
{: .table .table-bordered .bg-light}

示例： `$(document).Toasts('create', {title: 'Toast 标题'})`
