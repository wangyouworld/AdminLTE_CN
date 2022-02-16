---
layout: page
title: 卡片刷新插件
---

卡片刷新插件提供将 Ajax 内容加载到卡片中的功能。 

##### 用法

该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }

通过向卡片添加带有 `data-card-widget="card-refresh"` 的按钮来激活插件，并提供所需的 `data-source="/内容 URL"` 选项。这样，插件将自动创建一个对设置 URL 的 GET 请求，并将返回的内容展示在卡片的 `.card-body` 部分。如果需要在渲染之前处理返回的内容，则应使用 jQuery API，该 API 提供了用于处理响应内容的钩子。 


###### jQuery
{: .text-bold }

jQuery API 提供了更具可自定义的选项，允许开发人员在展示前预先处理请求，在请求之后处理返回内容。 

```js
$('#my-card [data-card-widget="card-refresh"]').CardRefresh(options)
```

##### 选项
{: .mt-4}

|---
| 名称 | 类型 | 默认 | 说明
|-|-|-|-
| source | String | '' | 源URL。
| sourceSelector | String | '' | 要获取的选择器仅返回选择器内容。
| params | Object | {} | GET 请求参数（示例：{search_term: 'layout'}， 展示为 URL/?search_term=layout）
| trigger | String | `[data-card-widget="card-refresh"]` | 刷新按钮的 CSS 选择器
| content | String | `.card-body` | 展示内容的目标 CSS 选择器。该选择器应该在卡片中。
| loadInContent | Boolean | TRUE | 是否自动展示。
| loadOnInit | Boolean | TRUE | 是否在页面加载时的初始化插件。
| loadErrorTemplate | Boolean | TRUE | 发生 AJAX 错误时是否将 `errorTemplate` 附加到卡片上。
| responseType | String | '' | 响应类型（示例：'json' 或 'html'）
| overlayTemplate | String | TRUE | Ajax spinner 的 HTML 模板
| errorTemplate | String | `'<span class="text-danger"></span>'` | AJAX 错误消息 HTML 模板
| onLoadStart | Function | 匿名函数 | 在 ajax 请求之前调用
| onLoadDone | Function | 匿名函数 | 发出 ajax 请求后调用。 传递的 `response` 参数将保存服务器的响应内容。 
| onLoadFail | Function | 匿名函数 | 当 ajax 请求失败时调用。 `jqXHR`、`textStatus` 和 `errorThrown` 参数将被传递给函数。 
{: .table .table-bordered .bg-light}

##### 事件
{: .mt-4}

|---
| 事件类型 | 说明
|-|-
|loaded.lte.cardrefresh | 刷新卡片后触发。
|overlay.added.lte.cardrefresh | 在模板内容添加到卡片后触发。
|overlay.removed.lte.cardrefresh | 从卡片中移除后触发。
{: .table .table-bordered .bg-light}

示例： `$('#my-card [data-card-widget="card-refresh"]').on('loaded.lte.cardrefresh', handleLoadedEvent)`


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|load | 重新加载内容并运行 `onLoadStart` 和 `onLoadDone` 的钩子
{: .table .table-bordered .bg-light}

示例： `$('#my-card [data-card-widget="card-refresh"]').CardRefresh('load')`
