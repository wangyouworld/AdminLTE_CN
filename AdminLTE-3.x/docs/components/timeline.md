---
layout: page
title: 时间线组件
---

时间线组件通常用于显示事件历史记录。
你可以使用它来描述在特定时间段内发生的事。

##### 默认

```html
<!-- 该组件的主节点 -->
<div class="timeline">
  <!-- 时间线时间标签 -->
  <div class="time-label">
    <span class="bg-green">2019年8月23日</span>
  </div>
  <div>
  <!-- 每个时间线项目对应左侧刻度上的一个图标 -->
    <i class="fas fa-envelope bg-blue"></i>
    <!-- 时间线项目 -->
    <div class="timeline-item">
    <!-- 时间 -->
      <span class="time"><i class="fas fa-clock"></i> 12:05</span>
      <!-- 头部。可选 -->
      <h3 class="timeline-header"><a href="#">支持团队</a> 给你发了一封邮件</h3>
      <!-- Body -->
      <div class="timeline-body">
        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
        weebly ning heekya handango imeem plugg dopplr jibjab, movity
        jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
        quora plaxo ideeli hulu weebly balihoo...
      </div>
      <!-- 放置其他控件。可选 -->
      <div class="timeline-footer">
        <a class="btn btn-primary btn-sm">查看更多</a>
        <a class="btn btn-danger btn-sm">删除</a>
      </div>
    </div>
  </div>
  <!-- 最后一个图标表示事件已完成 -->
  <div>
    <i class="fas fa-clock bg-gray"></i>
  </div>
</div>
```
{: .max-height-300}

##### 附加样式

还有一个用于设置样式的附加类。
它使元素变暗，在大背景下突出显示。
你可以在 `.timeline` 中添加 `.timeline-inverse` 来使用它。

```html
<div class="timeline timeline-inverse">
  <!-- ... 项目 ... -->
</div>
```
