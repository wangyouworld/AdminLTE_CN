---
layout: page
title: 待办事项列表插件
---

该插件为待办事项列表组件提供了简单的功能。 

##### 用法
该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }
通过向 ul 元素添加 `data-widget="todo-list"` 来激活插件。如果你需要提供 onCheck 和 onUncheck 方法，请使用 jQuery API。 

###### jQuery
{: .text-bold }
jQuery API 提供了更多可自定义的选项，允许开发人员处理待办事项列表中的选中和取消选事件。 
```js
$('#my-todo-list').TodoList({
  onCheck: function(checkbox) {
    // 选中复选框后执行的操作
  },
  onUnCheck: function(checkbox) {
    // 取消选中复选框后执行的操作
  }
})
```


##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
|onCheck | Function | 匿名函数 | 处理复选框 onCheck 事件。该复选框作为参数传递给函数。
|onUnCheck | Function | 匿名函数 | 处理复选框 onUnCheck 事件。该复选框作为参数传递给函数。
|---
{: .table .table-bordered .bg-light}
