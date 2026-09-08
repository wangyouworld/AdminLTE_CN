# AdminLTE 无障碍访问声明

## 概述

AdminLTE 4 在开发时就考虑到了无障碍访问，目标是要达到 **WCAG 2.1 AA** 级别。这份文档如实说明了哪些功能已经做好了、哪些做了一半、哪些还在计划中——这样你就能清楚知道自己拿到的是什么，以及你自己的应用还需要补上哪些。

> **重要提醒：** 模板永远只是一个起点。演示页面里用了无障碍的标记，并不代表你自己的应用就合规了——你自己构建的页面还是得自己负责去测试。

## ✅ 已实现的功能

### 标记层面（演示页面）

- 应用外壳上用了语义化的地标结构（`<nav>`、`<main>`、`<aside>`、`<footer>`）——不是列表的 `.nav` 容器会自动加上 `role="navigation"`（详见 #6038）
- 每个页面只有一个 `<h1>`（就是内容头部里的页面标题）
- 面包屑导航用 `<nav aria-label="breadcrumb">` 包起来了，并带上了 `aria-current="page"`
- 所有纯图标的控件（卡片工具按钮、顶栏切换、侧边栏切换）都加了 `aria-label`
- 表单输入框都绑了 `<label>` 元素（设计上以占位符为主的地方，label 是视觉隐藏的；v2 登录页用的是浮动标签）
- 表格表头都带了 `scope` 属性
- 声明了 `lang="en"`，页面标题有描述性，还加了 `meta name="color-scheme"`

### 行为层面（`accessibility.ts` 和组件）

- **实时区域公告**（WCAG 4.1.3）—— 一个统一的 `#live-region` 礼貌区域，对外暴露了 `announce()` 方法；插入到 DOM 中的 alert 会被自动朗读出来
- **跳转链接**——可以跳过导航直接到主要内容，只注入一次，Turbo 页面切换时会复用（WCAG 2.4.1）
- **树形菜单状态暴露**——侧边栏的子菜单切换按钮带有 `aria-expanded`，由 Treeview 组件负责保持同步
- **模态框焦点恢复**——在 `show.bs.modal` 时记下触发元素，关闭时把焦点还回去（如果那个元素已经从文档中消失了就跳过）
- **按 Escape** 可以关闭展开的下拉菜单；Bootstrap 自带的模态框键盘处理保持不变
- **方向键导航**在菜单和下拉列表中可用——但只有在焦点确实在菜单项上时才生效；不会去拦截输入框、文本域、下拉选择框或 contenteditable 元素里的键盘操作
- **减少动效**——系统开了 `prefers-reduced-motion` 时会禁用平滑滚动并缩短动画时长；CSS 里也支持 `prefers-contrast: more` 的样式
- **防止主题闪烁**，并通过 Bootstrap 的颜色模式支持深色模式，同时尊重系统的 `prefers-color-scheme` 设置（#6043）
- **表单错误标识**（WCAG 3.3.1/3.3.2）——校验错误会生成一个 `invalid-feedback` 节点，通过 `aria-describedby` 关联到输入框（会追加到已有描述后面，而不是覆盖），并且会以断言方式朗读出来

### 明确不做的事情

- **不搞全局焦点循环。** 我们故意*没有*在页面边缘圈住焦点——因为在文档边界上循环 Tab 本身就会违反 WCAG 2.1.2（禁止键盘陷阱）。焦点锁定只用在模态框内部。

## ⚠️ 部分完成 / 已知缺陷

这些都是已知且已记录的限制——欢迎提交 PR 来改进：

- **Treeview 和 push-menu 没有专门的键盘交互模式**，只支持普通的 Tab/Enter 链接操作（没有 roving tabindex，树内也不支持 Home/End 键）。`aria-expanded` 是由 JS 动态加上去的；没有 JS 的静态标记里不会有这个属性。
- **拖拽示例（看板、可排序仪表盘卡片）没有键盘替代操作。** SortableJS 本身没提供这个功能；这些示例请仅当作视觉参考（WCAG 2.5.7 的缺口）。
- **触摸目标大小没有全局强制规定。** 卡片工具按钮比 44×44 px 要小；`_accessibility.scss` 里提供了一个按需启用的 `.touch-target` 工具类。
- **颜色对比度不保证对所有 Bootstrap 颜色工具类的组合都达标**——毕竟组合方式太多了。`accessibilityUtils.checkColorContrast()` 这个辅助方法（支持 `rgb()` 和十六进制）可以帮你验证自己的组合。
- **CI 里目前还没有跑无障碍自动化测试**（axe/pa11y 的集成已在计划中）。这份文档里的说明都是手动验证的，反映的是当前时间点的情况。

## 🔧 JavaScript API

```typescript
import { initAccessibility, accessibilityUtils } from 'admin-lte'

const accessibility = initAccessibility({
  announcements: true,      // 实时区域 + 自动警报通知
  skipLinks: true,          // 注入跳转链接
  focusManagement: true,    // 模式聚焦恢复，Escape 处理
  keyboardNavigation: true, // 菜单方向键导航
  reducedMotion: true       // 尊重 prefers-reduced-motion
})

accessibility.announce('数据保存成功', 'polite')
accessibility.focusElement('#error-summary')
accessibility.trapFocus(customDialogElement) // 给非 Bootstrap 的对话框用

// 颜色对比度检测（支持 rgb() 和十六进制）
accessibilityUtils.checkColorContrast('#000000', '#ffffff') // { ratio: 21, passes: true }
```

这个模块由 `adminlte.js` 自动初始化。所有 document 级别的事件监听器都是绑定在 Turbo 生命周期信号上的，所以 Hotwired Turbo 页面切换既不会造成监听器泄露，也不会重复注入节点。

## 🧪 如何测试你的页面

- **自动化测试：** [axe-core](https://github.com/dequelabs/axe-core)、[WAVE](https://wave.webaim.org/)、Lighthouse 无障碍审计
- **键盘测试：** 只用 Tab/Shift+Tab/Enter/Escape 键走完整个流程；确认焦点始终可见且没有被卡住的地方
- **屏幕阅读器：** [NVDA](https://www.nvaccess.org/)（Windows，免费）、VoiceOver（macOS/iOS）、JAWS
- **缩放：** 在 200% 缩放和 320px 视口宽度下检查布局是否正常
- **动效：** 在系统里开启“减少动效”，确认动画确实变柔和了

## 🗺️ 后续计划

- 在 CI 里对构建好的演示页面跑 axe/pa11y 检查
- 为侧边栏树形菜单添加键盘交互模式（roving tabindex）
- 在静态演示标记里也加上 `aria-expanded`/`aria-controls`（而不只是靠 JS 动态生成）
- 对所有内置颜色变体做对比度审计并形成文档
- RTL（从右到左）布局的无障碍审查

## 📚 参考资源

- [WCAG 2.1 指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA 创作实践指南](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
