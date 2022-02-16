---
layout: page
title: 聊天插件
---

聊天插件为聊天组件提供了简单的功能。 

##### 用法
该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }
将 `data-widget="chat-pane-toggle"` 添加到按钮上以激活插件。 
```html
<button class="btn btn-primary" data-widget="chat-pane-toggle">切换聊天面板</button>
``` 

###### jQuery
{: .text-bold }
jQuery API 提供了更多可定制的选项，允许开发人员展开/折叠聊天面板。 
```js
$('#chat-pane-toggle').DirectChat('toggle')
```


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|toggle | 切换隐藏或显示聊天面板。
{: .table .table-bordered .bg-light}

示例： `$('#chat-pane-toggle').DirectChat('toggle')`


##### 事件
{: .mt-4}

|---
| 事件类型 | 说明
|-|-
|toggled.lte.directchat | 切换聊天联系人面板后触发。
{: .table .table-bordered .bg-light}

示例： `$('#toggle-button').on('toggled.lte.directchat', handleToggledEvent)`
