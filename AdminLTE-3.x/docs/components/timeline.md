---
layout: page
title: 时间线组件
---

时间线组件通常用于显示事件历史记录。 你可以使用它来描述在特定时间段内发生的事。

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
        整个晚上，日军炮兵像在展览，随着装备轻重和时间推移加入我们视野之外的射场。
        五十毫米掷弹筒、七十毫米步炮、九十毫米迫击炮、七十五毫米山炮和野炮、一百零五毫米野炮和山炮，
        爆破弹在土层里爆炸，杀伤流弹在空中穿飞，
        烧夷弹让泥土粘在我们身上烧灼，照明弹让黎明提前到来，烟幕弹把黎明又拉回黑夜。
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

还有一个用于设置样式的附加类。 它使元素变暗，在大背景下突出显示。
你可以在 `.timeline` 中添加 `.timeline-inverse` 来使用它。

```html
<div class="timeline timeline-inverse">
  <!-- ... 项目 ... -->
</div>
```
