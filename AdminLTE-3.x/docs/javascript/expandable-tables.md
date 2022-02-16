---
layout: page
title: 可扩展表格插件
---

可扩展表格插件提供了创建可展开表格的简单功能。 

##### 示例代码
```html
<table class="table table-bordered table-hover">
  <tbody>
    <tr data-widget="expandable-table" aria-expanded="false">
      <td>183</td>
    </tr>
    <tr class="expandable-body">
      <td>
        <p>
          <!-- 这是可展开的表体 -->
        </p>
      </td>
    </tr>
    <tr data-widget="expandable-table" aria-expanded="true">
      <td>219</td>
    </tr>
    <tr class="expandable-body">
      <td>
        <p>
          <!-- 这是可展开的表体 -->
        </p>
      </td>
    </tr>
    <tr data-widget="expandable-table" aria-expanded="true">
      <td>657</td>
    </tr>
    <tr class="expandable-body">
      <td>
        <p>
          <!-- 这是可展开的表体 -->
        </p>
      </td>
    </tr>
  </tbody>
</table>
```
{: .max-height-300}


> ##### 提示！
> 你可以通过在表行中设置` aria-expanded="false"`/` aria-expanded="true"` 来折叠/展开内容。
{: .quote-info}


##### 用法
该插件可以作为 jQuery 插件或使用数据 API 激活。 

###### 数据 API
{: .text-bold }
添加 `data-widget="expandable-table"` 到表行以激活插件，及在下面新表行中使用 `.expandable-body` 类。
```html
<tr data-widget="expandable-table" aria-expanded="true">
  <td>657</td>
</tr>
<tr class="expandable-body">
  <td>
    <p>
    </p>
  </td>
</tr>
``` 

> ##### 提示！
> 你必须在表体中使用 `div` 或 `p` 标签，才能实现滑动效果。
{: .quote-info}


###### jQuery
{: .text-bold }
jQuery API 提供了更多可定制的选项，允许开发人员切换表行的可见状态。 
```js
$('#expandable-table-header-row').ExpandableTable('toggleRow')
```


##### 方法
{: .mt-4}

|---
| 方法 | 说明
|-|-
|toggleRow | 在折叠/展开表体间切换。
{: .table .table-bordered .bg-light}

示例： `$('#expandable-table-header-row').ExpandableTable('toggleRow')`


##### 事件
{: .mt-4}

|---
| 事件类型 | 说明
|-|-
|expanded.lte.expandableTable | 在展开表体时触发。
|collapsed.lte.expandableTable | 在折叠表体时触发。
{: .table .table-bordered .bg-light}

示例： `$('#expandable-table-header-row').on('expanded.lte.expandableTable', handleToggledEvent)`
