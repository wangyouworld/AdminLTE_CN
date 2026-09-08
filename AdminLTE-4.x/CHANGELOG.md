# 更新日志

AdminLTE 的所有显著变更都将记录在此文件中。

格式基于 [记录变更日志](https://keepachangelog.com/en/1.0.0/)，
本项目遵循 [语义化版本控制](https://semver.org/spec/v2.0.0.html)。

## [未发布]

## [4.1.0] - 2026-07-02

### 新增

- **npm 上提供了 ESM 格式包和 TypeScript 类型声明：** `dist/js/adminlte.esm.js`（以及 `.min` 压缩版）和 UMD 格式一起发布，生成的 `.d.ts` 类型声明文件放在 `dist/js/types/` 下，`package.json` 里也加上了 `module`、`types` 和完整的 `exports` 映射（包括 `sass`/`style` 条件和 `./dist/*` + `./src/scss/*` 子路径）。现在可以直接用 `import { PushMenu } from "admin-lte"`，在 Vite 或 webpack 里原生就能解析，开箱即用带类型检查——以前这个包只发布了一个压缩过的 UMD 文件，完全没有类型定义。
- **组件生命周期 API（Bootstrap 风格）：** 现在每个 JS 组件都有 `getInstance(element)`、`getOrCreateInstance(element, config?)` 和 `dispose()` 方法，底层基于每个元素一个的 WeakMap 注册表来管理（实例会随着元素一起被垃圾回收——对 Turbo 友好）。数据 API 现在用的是 **委托的 document 级事件监听**，所以页面加载后插入的内容（AJAX 局部更新、Turbo Frames）里的切换控件不用重新初始化就能直接工作。`PushMenu` 终于也可以通过 `PushMenu.getInstance(sidebar)` 来用编程方式控制了。
- **包里内置了 `ColorMode` 模块：** 浅色/深色/自动切换器（配置保存在 `lte-theme` 里，能感知系统偏好，支持 `[data-bs-theme-value]` 数据 API，还会触发 `changed.lte.color-mode` 事件）现在已经集成到 `adminlte.js` 里了。应用不再需要把演示版里的内联脚本复制过来了；演示页面现在用的就是内置模块。只有那一段防止主题闪烁的小脚本还保留在 `<head>` 里内联——这是有意为之的。
- **`bootstrap` 被声明为对等依赖**——因为 Sass 源码里会导入它，所以只要 `npm install admin-lte` 之后（npm 会自动装上对等依赖），`@use "admin-lte/src/scss/adminlte"` 就能直接用了。同时文档里也说明了 Sass 加载路径的配置方法。
- **新增了演示页面：** 一个空白的**起始页**（这是 v3 时代呼声最高但 v4 一直没加的页面）、一个专门的 **ApexCharts** 图表页（展示了六种图表类型），还有一个**用户**管理页面（带搜索功能的通讯录表格、添加用户和删除确认弹窗、分页）。这些全都从侧边栏可以进去。
- **测试基础：** 一套 vitest + happy-dom 单元测试（共 30 个测试，覆盖组件生命周期、卡片/Treeview/PushMenu 行为、ColorMode 和滑动动画），已经集成到 `npm run production` 里了；另外还有 `npm run test-a11y`——对几个关键的构建后演示页面跑 axe-core 检查，如果发现严重/关键级别的 WCAG 违规项就会失败，并且专门配了一个 GitHub workflow 来跑。

### 已修复

- **新加的 axe 检查跑出来的第一批问题，已经在源头修复了：** 面包屑链接现在用了颜色更深的链接色（Bootstrap 默认的蓝色在内容头部的灰色背景上对比度只有 4.26:1——低于 WCAG AA 要求的 4.5:1），直聊消息面板现在可以用键盘聚焦了（加了 `tabindex="0"` 和 `role="log"`），还有那些浅色脚注文字现在用的是 `text-body-secondary`，而不是之前对比度不达标的 `text-secondary`。

### 变更

- **组件事件大改（行为有变化）：** 现在所有插件事件都改成了冒泡的 `CustomEvent`，在组件的根元素上触发（比如卡片、导航项、侧边栏）——以前大部分事件是不冒泡的，而且卡片事件是在你点击的那个元素上触发的，点到了 `<i>` 图标上就在图标上触发。带动画的操作现在有了可取消的"前置"事件（`collapse`/`expand`/`remove.lte.card-widget`、`expand`/`collapse.lte.treeview`、`open`/`collapse.lte.push-menu`），对应的"后置"事件（`collapsed`、`expanded`、`removed`、`opened`……）现在是在动画完成后才触发，而不是动画开始时。如果你之前是在卡片工具按钮本身上监听卡片事件的，现在要改到卡片上或 `document` 上监听。
- **文档样式从生产环境 CSS 中分离出来了：** 文档和 FAQ 的样式现在单独编译成 `adminlte-docs.css`，只在文档页面加载。配合 4.0.4 版本的去重优化，`adminlte.min.css` 压缩后降到了大约 40.4 KB（4.0.3 是 46.7 KB）；bundlewatch 的预算也相应收紧了一些。
- **替换掉了那份复制的 Bootstrap 变量文件：** 原来那份有 1766 行的 `_bootstrap-variables.scss` 拷贝（每次 Bootstrap 发新版都得手动同步一遍）已经被删掉了；AdminLTE 实际做的约 10 处改动现在放在一个很小的 `_bootstrap-overrides.scss` 里，在 Bootstrap 自己的变量之前加载。编译出来的 CSS 和之前完全一样，一个字节都不差。
- **Sass 废弃警告策略调整：** 构建时不再静默所有警告（`--quiet`），现在只静默依赖包里的警告和已知的 `@import` 废弃警告（`--quiet-deps --silence-deprecation=import`），这样 AdminLTE 自己代码里新出现的废弃警告就能在构建时暴露出来。所有已废弃的全局内置函数（如 `map-get`、`map-keys`）都已经迁移到了 `sass:map` 模块。至于全面迁移到 `@use` 模块系统，我们有意推迟到 Bootstrap 自己用上模块系统 Sass 再说（也就是 Bootstrap 6）——因为 Bootstrap 5 的 partial 文件是围绕 `@import` 的共享全局命名空间设计的，没法用 `@use` 单独加载。
- 重写了颜色模式的文档页面，改成以内置的 `ColorMode` 模块为核心来讲（之前那个可复制的脚本里用的 storage key 是过时的）；`tsconfig.json` 里也删掉了那个无效的 `"root": true` 配置项。

## [4.0.4] - 2026-07-02

### 新增

- **新增了忘记密码示例页面** —— 两个登录页自 4.0.0 以来就一直链着 `forgot-password.html`，但这个页面压根不存在（所有部署的演示里都是死链）。现在终于补上了，并且在侧边栏的 Examples › Version 1 下面可以找到。
- **Treeview 现在会向辅助技术暴露状态了：** 子菜单的切换链接现在带有 `aria-expanded` 属性，初始化时就会打上，并且在展开/收起时保持同步更新。

### 已修复

- **npm 打包方式改了：** 现在包是基于 `files` 白名单来打包的，而不是用 `.npmignore` 黑名单。零散的本地文件不会再不小心混进压缩包里了（4.0.2 就曾经因为这种方式把一个未跟踪的工作文件给打包进去了），而且演示和文档的 HTML 文件——SECURITY.md 里明确说了不要部署到生产环境——现在也不会发布到 npm 上了。解压后的体积从 12.7 MB 降到了 9.0 MB（文件数从 177 个减到了 95 个）。同时还声明了 `engines: node >= 20`。
- **CSS 包里文档站点的样式被打了两份：** `_docs.scss` 同时被 `adminlte.scss` 和 `parts/_core.scss` 导入了，而 Sass 的 `@import` 会重复输出——四个发布版样式表里每个都多了大约 23 KB 的冗余代码。
- **无障碍模块的键盘处理：**
  - 删除了文档边缘的 Tab 循环——这东西实际上是一个页面级的键盘陷阱（违反了 WCAG 2.1.2），导致纯键盘用户 Tab 到页面边缘后就卡住了，永远没法切到浏览器本身的功能栏上
  - 方向键不再在 input、textarea、select 或 contenteditable 元素里被拦截了（以前在导航栏搜索框里打字，焦点会莫名其妙被拉到菜单里去），而且菜单的方向键导航现在只在焦点确实在菜单项上时才会生效
  - 模态框焦点恢复现在改在 `show.bs.modal` 事件发生时记录触发元素（之前是在 `shown` 事件里记录的，那时存到的是模态框内部的元素，所以关掉模态框后焦点就掉到了 `<body>` 上）；现在也会尊重 `[autofocus]` 属性了
- **Hotwired Turbo 不再重复注入 DOM 节点了：** 跳转链接、`#live-region` 和侧边栏遮罩，在恢复的 `<body>` 快照里如果已经有了，现在会复用——之前每次页面切换都会多复制一份出来，越积越多。
- **卡片组件：** `remove()` 现在在动画结束后是真的把卡片从 DOM 里移除了（之前只是隐藏掉，所以里面隐藏的表单字段还在提交）；在动画执行过程中点击折叠切换按钮，现在会反向播放动画，而不是直接没反应；组件事件现在是在切换按钮本身上触发的，而不是点到的那个 `<i>` 图标上；`minimize()` 现在会清理掉自己加的内联样式。
- **滑动动画现在可以取消了：** 快速反复切换 treeview 或卡片时，不会再因为过期的动画定时器在半路把样式清掉，导致显示状态不同步了。
- **Treeview 的手风琴模式判断逻辑有 bug：** 它之前是把每个已打开的项拿去和父级 `<ul>` 做比较（永远为 false），所以在一个已经打开的项上调用 `open()` 反而会把自身的菜单给收起来。
- **PushMenu** 现在是通过 `matchMedia` 来监听实际的断点跨越事件来响应视口变化的——移动端 URL 栏或键盘弹出导致的视口变化、以及在同一边上宽度变化但没跨断点的情况，不会再自动把用户手动收起的侧边栏又展开了；默认断点（991.98）现在和 CSS 的约定保持一致，修复了 992px 上差一个像素的问题。
- **Callout 变体** 引用了两个根本没定义过的自定义属性，导致 callout 里的链接和内联代码颜色一直没变过来；用户菜单的底部用的是 `--bs-light-bg`，但 Bootstrap 5.3 里压根没这个变量（现在改成了 `--bs-tertiary-bg`）。
- **演示页面：** Bootstrap JS CDN 版本从 5.3.7 更新到了 5.3.8，和编译用的 CSS 版本保持一致；删掉了那个失效的导航栏搜索按钮（`data-widget="navbar-search"` 在 v4 里根本没有实现）；现在每个页面都只有一个 `<h1>`（之前页面标题用的是 `<h3>`）；面包屑都包在 `<nav aria-label="breadcrumb">` 里了；所有纯图标按钮（卡片工具、顶栏切换）都加了 `aria-label`；登录/注册页面的表单有了真正的 `<label>` 和 `<main>` 地标；把过时的 "Google+" 文案也更新了。

### 变更

- **ACCESSIBILITY-COMPLIANCE.md 被重写为一份准确的无障碍声明** —— 说明了哪些功能已经实现了、哪些还不完整（如 treeview 键盘交互模式、拖拽替代方案、触摸目标尺寸），以及后续计划有哪些 —— 替换掉了之前那份什么都打勾的 WCAG 清单（那更多是一种愿景而非实际情况）。演示页面的 meta 描述也同步更新了。
- **bundlewatch 的预算重新调整了：** CSS 预算收紧了一些（从 46 kB 降到 44 kB，min+gzip），把文档样式去重省下来的空间锁定住；JS 预算从 5.8 kB 提到了 6.5 kB，主要是为了容纳上面那些行为修复。

## [4.0.3] - 2026-07-01

### 新增

- **Hotwired Turbo / Turbo Drive 支持：** 现在插件会在 `turbo:load` 事件发生时重新初始化，所以 PushMenu、TreeView 和其他 JS 组件在 Turbo 替换 `<body>` 进行应用内导航后依然能正常工作（之前点完第一个链接后它们就全挂了）。每次初始化周期都用了一个 `AbortController`，它的 signal 会在 `turbo:before-render` 时被中止，这样 `window` 和 `document` 级别的事件监听器在重新初始化之前会被清理掉，不会每次导航都叠加累积。（#563, #5890 —— 由 @MarkDaleman 在 #6058 中诊断并制作了原型）

### 已修复

- **全屏状态同步：** 全屏图标和 `maximized`/`minimized` 事件现在是由原生的 `fullscreenchange` 事件来驱动的，而不再是靠调用请求/退出全屏的方法时手动更新。如果全屏请求被拒绝了（比如权限策略限制、缺少 `allowfullscreen` 属性、或者用户手势失效），界面不会再乱切换状态了；而且用户用 `ESC` 或 `F11` 退出全屏时，状态也能保持同步。（基于 @webgo-oss 在 #6055 中的反馈）
- **无障碍修复：** 表单输入框如果既没有 `id` 也没有 `name`，现在会获得一个稳定的、自动生成的错误消息 id，而不会再挤在一个共用的 `-error` id 上，并且每次重新校验时都会挂上一个新的“孤儿”错误节点。（#6055，由 @webgo-oss 反馈）

### 已更新

- 所有依赖都升级到了最新版本，其中包括四个大版本更新——**Astro 6 → 7**（顺带拉进来了 Vite 8）、**@astrojs/mdx 6 → 7**、**eslint-plugin-astro 1 → 2** 和 **eslint-plugin-unicorn 68 → 69**——此外还有 ESLint、Prettier、Stylelint、PostCSS、Rollup 和 typescript-eslint 也一并更新了。源码本身不需要做任何改动；完整的 `npm run production` 构建流程（lint + Astro 构建 + bundlewatch）全部通过，`npm audit` 也依然是 **0 个漏洞**。（代替了 Dependabot 发的 #6065–#6074 那批 PR）

## [4.0.2] - 2026-06-11

### 已修复

- **#6048:** `npm run production` 现在不会再跑失败了——之前那个只在开发时用的 `scripts/social-preview.mjs` 脚本在从源码构建时会触发 9 个 ESLint 报错。现在这个脚本已经改到能通过 lint 检查了。（由 @lfiorini 反馈）

### 安全

- 加固了社交预览脚本里的静态文件服务器，防止路径遍历攻击和错误详情泄露（CodeQL 告警 #87–#92）。这个脚本只用于开发环境，不会包含在 npm 包里。

## [4.0.1] - 2026-06-11

### 新增

- **官方框架集成正式发布** —— AdminLTE 4 现在以一等包的形式支持四个主流技术栈，由 ColorlibHQ 官方维护：
  - [adminlte-vue](https://github.com/ColorlibHQ/adminlte-vue) — Vue 3 & Nuxt，45+ 个带类型的组件、composables、SSR 安全的主题化、⌘K 命令面板
  - [adminlte-react](https://github.com/ColorlibHQ/adminlte-react) — React & Next.js（支持 App Router / RSC），30+ 个带类型的组件、深色模式、⌘K 命令面板
  - [adminlte-django](https://github.com/ColorlibHQ/adminlte-django) — 配置驱动的侧边栏菜单、33+ 个组件、主题化的 `django.contrib.admin`、`{{ form }}` 渲染器
  - [adminlte-laravel](https://github.com/ColorlibHQ/adminlte-laravel) — Blade 集成，Vite 开箱即用
- 社交预览图生成脚本（`scripts/social-preview.mjs`，仅开发环境使用——不包含在 npm 包里）。

### 已修复

- **#6043:** 存储的颜色模式现在会在首次绘制之前就应用上——深色模式下刷新页面时，不会再闪一下浅色模式了。（由 @bsshreesha 反馈）
- **#6044:** 邮箱收件箱列表里的长标题/预览文字现在会被截断，而不会溢出容器了。（由 @Oscurlo 反馈）
- **#6038:** `accessibility.js` 不再会给 `<ul>` 或 `<ol>` 元素强行加上 `role="navigation"` 了——之前这么做破坏了列表本身的语义，还导致 Lighthouse 无障碍审计不通过。（由 @lfiorini 反馈）

### 已更新

- 所有依赖都升到了最新版；通过 npm overrides 把 `axios` 固定住了，解决了它带来的一个间接依赖安全告警。`npm audit` 依然保持 **0 个漏洞**。

## [4.0.0] - 2026-05-19

### 新增

- **18 个新的演示页面**，大幅扩展了页面目录：
  - **应用程序：** 日历（FullCalendar 6，拖拽排期）、看板（SortableJS，列间拖拽）、聊天（全屏对话应用）、文件管理器（网格 + 列表视图，文件夹树）、项目（带状态、进度、团队头像的列表）
  - **邮箱：** 收件箱、阅读邮件、写信——三栏工作流，包含文件夹和标签
  - **表单：** 表单向导（4 步骤，带每一步的校验 + 最后的信息回顾汇总）
  - **表格：** 数据表格——基于 Tabulator 6 的无 jQuery 实现
  - **页面：** 个人资料（标签页切换的活动/时间线/设置）、设置（账户/通知/安全/账单/危险区域）、发票（打印就绪，含总额计算）、定价（3 档套餐 + 对比表 + 计费切换）、常见问题（数据驱动的折叠面板）
  - **错误页面：** 404、500、维护中
- **推荐集成文档页面**（`docs/integrations.html`）——提供 Flatpickr、Tom Select、noUiSlider、Pickr、IMask、Dropzone、FilePond、Quill、EasyMDE、Toast UI Editor、ApexCharts、Chart.js、Tabulator、FullCalendar、SortableJS、GLightbox 的复制粘贴安装代码片段，以及图标库对比。AdminLTE 不内置这些库——该页面展示了如何将它们引入项目。
- **默认顶栏中可见的颜色模式切换开关**（#6010）——亮色/深色/自动下拉菜单，支持 localStorage 持久化存储和 `prefers-color-scheme` 集成。全局 JS 逻辑已包含在 `_scripts.astro` 中，因此该开关在所有演示页面上自动生效。

### 变更

- **表单部分重构：** 将 623 行的 `forms/general.html` 拆分为三个专注的页面——`forms/elements.html`（输入框、选择框、复选框/单选框/开关、范围滑块、浮动标签）、`forms/layout.html`（水平布局、内联布局、尺寸、宽度）和 `forms/validation.html`（Bootstrap 原生验证 + 工具提示变体）。

### 已修复

- **#6028:** 颜色模式“自动”图标现已正常渲染。下拉菜单之前使用了 `bi-circle-fill-half-stroke`（这是 FontAwesome 的类名）；现已替换为正确的 Bootstrap Icons 类 `bi-circle-half`。
- **#6026:** `.table-head-fixed` 现在支持深色模式。将硬编码的 `background-color: $white` 替换为 `var(--bs-body-bg)`，使固定表头能够跟随当前颜色方案。
- **#6021:** 全屏按钮点击后不再发生位移。该插件之前直接设置 `iconMaximize.style.display = 'block'`，覆盖了图标库默认的 display 值（在 FontAwesome 上是可见的）。现在改为切换 Bootstrap 的 `.d-none` 工具类。标记已相应更新。
- **#6020:** 使用 `.fixed-header` 时，侧边栏（包括品牌区）现在保持固定不动。新增配套规则，在 `sidebar-expand-*` 断点处将侧边栏设置为粘性定位，使菜单拥有自己的滚动条，而不再随页面滚动。
- **#6019:** `index2.html` 上的饼图在浏览器缩放时不再闪烁。通过显式固定 `height: 350`，打破了 ApexCharts ResizeObserver 的反馈循环（该问题在 Edge 浏览器上最为明显）。

### 已更新

- **Bootstrap 变量与 5.3.4 同步：**
  - 新增缺失的 null 变量：`$btn-close-filter`、`$carousel-control-icon-filter`
  - 使用内联注释标记了在 5.3.4 中已弃用的变量：`$btn-close-white-filter`、`$carousel-dark-indicator-active-bg`、`$carousel-dark-caption-color`、`$carousel-dark-control-icon-filter`
  - 记录了有意覆盖 `$modal-content-color` 的说明（null 与 Bootstrap 的 `var(--bs-body-color)` 对比）
- **所有依赖项更新至最新版本，包括主版本更新：**
  - eslint: 9.39.4 → 10.4.0
  - typescript: 5.9.3 → 6.0.3（移除了 `baseUrl`，设置了 `moduleResolution: "bundler"` 以清除弃用警告）
  - stylelint: 16.26.1 → 17.11.1
  - eslint-plugin-unicorn: 62 → 64
  - astro: 6.0.0 → 6.3.3
  - autoprefixer: 10.4.27 → 10.5.0
  - postcss: 8.5.8 → 8.5.14
  - rollup: 4.59.0 → 4.60.4
  - sass: 1.97.3 → 1.99.0
  - terser: 5.46.0 → 5.47.1
  - bundlewatch: 0.4.1 → 0.4.2, fs-extra: 11.3.4 → 11.3.5, prettier: 3.8.1 → 3.8.3
- **ESLint 配置扁平化：** 移除了旧版的 `.eslintrc.json`（自 ESLint 9 起已被忽略），以及仅被其引用的三个依赖项：`eslint-plugin-import`、`eslint-config-xo`、`eslint-config-xo-typescript`。显式添加了 `@eslint/js`、`globals` 和 `typescript-eslint` 作为依赖（自 ESLint 10 起，这些依赖不再被传递解析，因此需要显式声明）。
- **通过 npm overrides 固定 `stylelint-config-twbs-bootstrap` 的 peer 依赖**，使其在上游版本发布之前就能接受 stylelint 17。这消除了在 `npm install` 时使用 `--legacy-peer-deps` 的需要。
- **安全：** 通过 overrides 将 `yaml` 固定为 `^2.9.0`，以清除通过 `@astrojs/check` 引入的仅限开发环境的堆栈溢出漏洞链。`npm audit` 现在报告 **0 个漏洞**。

## [4.0.0-rc7] - 2026-03-10

### 新增

- **无悬停侧边栏：** 新增 `sidebar-without-hover` body 类，可防止折叠后的迷你侧边栏在悬停时展开 (#5837)
  - 新增演示页面位于 `layout/collapsed-sidebar-without-hover.html`
- **JavaScript 文档：** 为所有 JS 组件添加了文档页面
  - 包括 Layout、Card Widget、Direct Chat、Fullscreen 和 Accessibility 模块
  - 更新了 PushMenu 文档，包含配置选项和响应式行为
  - 所有 7 个 JS 组件现已在侧边栏导航中完整文档化
- **可访问性模块：** 具备 WCAG 2.1 AA 合规功能（跳过链接、焦点管理、键盘导航、减少动画、实时通告）
- **打印布局修复：** 打印时侧边栏和主内容现在均可显示 (#5996)

### 变更

- **侧边栏持久化：** `enablePersistence` 现在默认为 `false`（之前为 `true`）。如需启用，请在 `.app-sidebar` 上设置 `data-enable-persistence="true"`。**破坏性变更**
- **布局插件重构：** 采用单一 Layout 实例，带有持久的 hold-transition 计时器，并在调整窗口大小时进行适当的清理 (#5956)
- **PushMenu 插件重构：** 采用单一 PushMenu 实例，具备正确的响应式逻辑、从 data 属性读取配置，以及移动端感知的状态管理 (#5954)
- **登录/注册框：** 宽度从 360px 增加至 400px (#5963)

### 已修复

- **修复固定页脚与固定布局搭配使用：** 现在当同时使用 `.fixed-footer` 和 `.layout-fixed` 时，页脚会固定在底部 (#5805)
- **移动端侧边栏滚动链式传递：** 添加了 `overscroll-behavior: contain`，以防止在移动设备上滚动侧边栏时页面同时滚动 (#5864)
- **加载时侧边栏闪烁问题：** 通过布局重构解决，修复了重复初始化和损坏的 hold-transition 计时器 (#5952)
- **Bootstrap 模态框的 Escape 键：** 当 Bootstrap 模态框打开时，可访问性模块不再拦截 Escape 键 (#5993)
- **分页边框圆角：** 修复了 `_bootstrap-variables.scss` 中 `calc()` 的语法，使其匹配 Bootstrap 5.3 的格式 (#5951)
- **持续时间为 0 时的 slideUp/slideDown：** 为零或接近零的动画持续时间添加了提前返回保护 (#5964)
- **构建中的 TypeScript 注释：** 在 tsconfig.json 中添加了 `removeComments: true`，以减小未压缩包的大小 (#5953)

### 已更新

- **依赖项更新：** 将所有软件包更新至最新的服务器兼容版本
  - astro: 5.x → 6.0.0
  - @astrojs/mdx: 4.x → 5.0.0
  - @astrojs/check: 0.9.6 → 0.9.7
  - @rollup/plugin-typescript: 12.3.0 → 12.3.1
  - @typescript-eslint/eslint-plugin: 8.48.1 → 8.50.0
  - @typescript-eslint/parser: 8.48.1 → 8.50.0
  - autoprefixer: 10.4.22 → 10.4.23
  - eslint: 9.39.1 → 9.39.4
  - postcss: 8.5.7 → 8.5.8
  - rollup: 4.53.3 → 4.59.0
  - sass: 1.94.2 → 1.97.3
  - terser: 5.44.1 → 5.44.3
  - typescript: 5.9.2 → 5.9.3
- **Bundlewatch:** 更新 adminlte.js 的大小限制为 5.2 kB

## [4.0.0-rc6] - 2025-12-08

### 安全

- **修复了 4 个安全漏洞：** 解决了所有 npm 审计中的安全问题
  - 修复了 Astro 服务器岛屿中高严重级别的反射型 XSS 漏洞
  - 修复了通过 Astro 中的 url.pathname 实现的中等严重级别的身份验证绕过漏洞
  - 修复了 Astro Cloudflare 适配器 /_image 端点中的中等严重级别的存储型 XSS 漏洞
  - 修复了 mdast-util-to-hast 中未对类属性进行清理的中等严重级别漏洞
  - 所有漏洞均已通过更新至 Astro 5.16.4 及以上版本得以解决

### 新增

- **侧边栏状态保存功能：** 新增功能，可保存侧边栏收起/展开状态
  - 现在，侧边栏状态在页面刷新时仍能保持不变，通过使用 localStorage 实现
  - 可通过 `enablePersistence` 选项进行配置（默认值：`true`）
  - 采用安全的服务器端渲染实现方式，并进行了适当的环境检查
  - 对移动设备友好：在小屏幕上不会恢复状态（会遵循响应式断点）
  - 对私有浏览模式提供优雅的错误处理
  - 存储键：`lte.sidebar.state`

### 变更

- **GitHub Actions：** 将所有工作流更新为使用 Node.js 22 版本（从之前的 Node.js 18 版本升级而来）
  - Node.js 18 于 2025 年 4 月 30 日达到生命周期结束期
  - Node.js 22 是当前的活跃长期支持版本（将持续支持至 2027 年 4 月）
  - 在所有工作流中将 `setup-node` 操作从 v3 升级到 v4
  - 将 CodeQL 操作从 v2 升级到 v3
  - 在 codeql.yml 中添加 `FORCE_COLOR： 2` 环境变量以保持一致性

### 已修复

- **发布流程：** 在 release.yml 中修正了 zip 命令
  - 将 `-d` 标志更正为 `-r` 以实现递归目录压缩
  - 修正了发布成果文件中的文件名不一致问题
- **嵌套卡片展开图标：** 解决了 #5909 问题，即嵌套折叠的卡片不会显示展开图标
  - 更新了 CSS 选择器，使用直接子元素（>）范围来定位卡片状态图标
  - 嵌套卡片的折叠/展开图标现在能够独立正确显示
  - 卡片主体/页脚的显示规则现在仅影响直接子元素，而不影响嵌套卡片
- **卡片组件 JavaScript：** 解决了嵌套卡片的折叠/展开影响子卡片的问题
  - 添加了 `:scope >` 选择器，仅针对直接的卡片主体/页脚子元素
  - 防止父卡片的折叠影响嵌套卡片的动画效果

### 已更新

- **依赖项更新：** 已更新 15+ 软件包至最新版本
  - @astrojs/check: 0.9.5 → 0.9.6
  - @astrojs/mdx: 4.3.9 → 4.3.12
  - @rollup/plugin-typescript: 12.1.3 → 12.3.0
  - @typescript-eslint/eslint-plugin: 8.46.2 → 8.48.1
  - @typescript-eslint/parser: 8.46.2 → 8.48.1
  - astro: 5.15.6 → 5.16.4 （包含安全修复）
  - autoprefixer: 10.4.21 → 10.4.22
  - eslint: 9.39.0 → 9.39.1
  - eslint-plugin-astro: 1.4.0 → 1.5.0
  - nodemon: 3.1.10 → 3.1.11
  - prettier: 3.5.3 → 3.7.4
  - rimraf: 6.1.0 → 6.1.2
  - rollup: 4.52.4 → 4.53.3
  - sass: 1.93.2 → 1.94.2
  - stylelint: 16.25.0 → 16.26.1
  - terser: 5.44.0 → 5.44.1

## [4.0.0-rc5] - 2025-10-14

### 已更新
- **依赖项更新：** 已将 17+ 软件包更新至最新版本，以提升安全性与性能。
  - @astrojs/mdx: 4.3.0 → 4.3.7
  - @typescript-eslint/eslint-plugin: 8.36.0 → 8.46.1
  - @typescript-eslint/parser: 8.36.0 → 8.46.1
  - astro: 5.11.0 → 5.14.4
  - bootstrap: 5.3.7 → 5.3.8
  - concurrently: 9.2.0 → 9.2.1
  - cross-env: 7.0.3 → 10.1.0 (major 版本)
  - eslint: 9.30.1 → 9.37.0
  - eslint-config-xo: 0.47.0 → 0.49.0
  - eslint-config-xo-typescript: 8.0.1 → 9.0.0 (major 版本)
  - eslint-plugin-unicorn: 59.0.1 → 61.0.2
  - fs-extra: 11.3.0 → 11.3.2
  - rollup: 4.44.2 → 4.52.4
  - sass: 1.89.2 → 1.93.2
  - stylelint: 16.21.1 → 16.25.0
  - terser: 5.43.1 → 5.44.0
  - typescript: 5.8.3 → 5.9.3

### 已修复
- **安全漏洞：** 解决了 2 个安全问题
  - 修复了 axios 中的高严重性拒绝服务漏洞（已更新至 0.30.2 及以上版本）
  - 修复了 form-data 随机函数中的严重漏洞（已更新至 4.0.4 及以上版本）

### 移除
- **已弃用文件：** 移除 `.eslintignore` 文件
  - ESLint 的忽略规则现已在 `eslint.config.js` 文件中正确设置
  - 在 ESLint 9.x 版本中消除了弃用警告

## [4.0.0-rc4] - 2025-07-10

### 已更新
- **依赖项：** 8 个包已更新至最新版本
  - @rollup/plugin-typescript: 12.1.3 → 12.1.4
  - @typescript-eslint/eslint-plugin: 8.35.1 → 8.36.0
  - @typescript-eslint/parser: 8.35.1 → 8.36.0
  - astro: 5.10.0 → 5.11.0
  - eslint: 9.30.0 → 9.30.1
  - prettier: 3.5.3 → 3.6.2
  - rollup: 4.44.0 → 4.44.2
  - stylelint: 16.21.0 → 16.21.1

### 已修复
- **Windows 构建兼容性：** 修复了 npm 脚本，通过将 Unix 特定的 shell 命令替换为 `shx` 来实现跨平台工作
  - 更新了 `copy-assets` 脚本以使用 `shx mkdir` 和 `shx cp` 命令
  - 更新了 `flatten-build` 脚本以使用 `shx cp` 和 `shx rm` 命令  
  - 添加 `shx` 包作为开发依赖项，以支持跨平台 shell 命令
  - 解决了 Windows 系统上“命令语法不正确”的构建失败问题
- **TeamViewer 模态框兼容性：** 修复了远程桌面兼容性的模态框渐变动画
  - 更新了可访问性 CSS，使用 `transition: none` 和 `opacity: 1` 而不是 `display: block`
  - 在确保模态框在 TeamViewer 会话中正常工作的同时，保持 WCAG 2.1 AA 合规性
  - 为减速模式下的模态对话框添加了特定的转换覆盖
- **移动侧边栏滚动：** 修复了在移动设备上滚动时侧边栏意外关闭的问题
  - 更新了触摸事件处理以区分点击和滚动手势
  - 为移动视口添加了侧边栏包装器的正确溢出属性
  - 在触摸设备上滚动操作期间，侧边栏现在保持打开状态
  - 解决了在移动浏览器上在侧边栏中滚动会立即关闭侧边栏的问题
- **图像路径解析：** 通过在 HTML 中使用相对路径修复了移动图像加载问题
  - **根本原因：** 像 `/assets/img/user.jpg` 这样的绝对路径在移动设备上导致 404 错误
  - **解决方案：** 根据页面位置在 Astro 组件中生成相对图像路径
  - **结果：** 图像现在在所有设备和部署场景中都能正确加载

## [4.0.0-rc3] - 2025-06-24

### 生产部署与跨平台兼容性

此版本解决了关键的生产部署问题，并确保了开发和生产环境在不同部署场景下的一致行为。

### 🚀 **生产部署修复**

#### **路径解析系统**
- **智能路径解析：** 对所有资产实施了智能相对路径计算
  - CSS/JS 路径根据页面深度自动调整（例如，根目录为 `./css/`，子页面为 `../css/`）
  - 图像路径在运行时动态更正，适用于任何部署结构
  - 无缝适用于根目录部署、子文件夹部署和 CDN 托管

#### **RTL CSS 处理修复**
- **PostCSS 配置：** 修复了 `rtlcss` 插件对 LTR 构建的干扰
  - `rtlcss` 现在只在 RTL 特定的构建期间运行（`NODE_ENV=RTL`）
  - 防止在标准生产构建中自动翻转左/右属性
  - 为从右到左语言支持维护独立的 `.rtl.css` 文件

#### **图像加载解析**
- **运行时图像路径修复：** 添加了智能图像路径校正脚本
  - 从工作的 CSS/JS 路径检测部署上下文
  - 自动将绝对图像路径（`/assets/img/...`）转换为相对路径
  - 确保图像无论部署子文件夹结构如何都能正确加载

### 🎨 **UI/导航改进**

#### **侧边栏导航修复**
- **徽章与箭头定位：** 解决了侧边栏布局问题
  - 修复了导航徽章与文本元素重叠的问题
  - 恢复了可展开菜单项的 V 形箭头指示器
  - 纠正了侧边栏导航中的间距和视觉层次
  - 为所有布局添加了 `sidebar-open` 类以实现一致的样式

#### **跨设备一致性**
- **全宽导航链接：** 增强了可点击区域
  - 设置 `.sidebar-menu .nav-link { width: 100%; }` 以获得更好的用户体验
  - 确保徽章和箭头在最右侧正确对齐
  - 在所有屏幕尺寸和设备上保持适当的间距

### 📦 **CDN 和依赖项**

#### **更新到最新稳定版本**
- **Bootstrap：** v5.3.3 → v5.3.7（最新稳定版）
- **Bootstrap 图标：** v1.11.3 → v1.13.1（最新版，含新图标）
- **OverlayScrollbars：** v2.10.1 → v2.11.0（性能改进）
- **PopperJS：** v2.11.8（确认最新 - 无需更改）

#### **完整性属性移除**
- **无 SRI CDN 加载：** 从所有 CDN 资源中删除了 `integrity` 属性
  - 防止“无法找到有效的摘要”控制台错误
  - 允许 CDN 提供商更新文件而不破坏现有链接
  - 保持 `crossorigin="anonymous"` 以确保安全性，同时移除脆弱的 SRI 检查

### 🛠️ **构建系统增强**

#### **开发与生产环境对等**
- **统一资产管道：** 开发和生产现在都使用相同的资产解析
  - 开发将新的 CSS/JS 复制到 `src/html/public/` 用于热重载
  - 生产将 CSS/JS 构建到 `dist/css/` 和 `dist/js/`，然后展平结构
  - 智能路径解析确保在两个环境中的一致行为

#### **Git 仓库清理**
- **生产构建分发：** 将完整的 `dist/` 文件夹添加到仓库
  - 提供即时部署的即用型生产文件
  - 简化了通过 jsDelivr 进行的分发和 CDN 访问
  - 无需 Node.js 构建环境即可直接下载

### 🐛 **关键错误修复**

#### **控制台错误已消除**
- **SortableJS 加载：** 修复了 SortableJS 的 CDN 完整性不匹配问题
- **资产路径错误：** 解决了子文件夹部署中图像的 404 错误
- **ESLint 合规性：** 修复了 `prefer-global-this` 和 `prefer-string-slice` linting 问题

#### **跨浏览器兼容性**
- **现代浏览器支持：** 更新所有 CDN 引用以使用稳定的版本化 URL
- **旧版浏览器回退：** 在利用现代功能的同时保持兼容性
- **触摸设备优化：** 增强了触摸目标尺寸和导航

### 📊 **性能与可靠性**

#### **包分析**
- **大小优化：** 所有包监视检查均通过更新的阈值
- **加载性能：** 通过优化的资产交付，初始页面加载更快
- **运行时性能：** 路径解析脚本开销极小（执行时间 <1ms）

#### **部署多功能性**
- **FTP 部署：** 完全支持传统的 FTP/SFTP 部署工作流程
- **静态托管：** 兼容 GitHub Pages、Netlify、Vercel、Cloudflare Pages
- **子文件夹部署：** 部署到 `/themes/v4/` 或类似路径时无缝工作
- **CDN 集成：** 已准备好与内容分发网络集成

### 🎯 **质量保证**

#### **测试覆盖率**
- **开发环境：** `npm run dev` - 所有功能均已验证正常工作
- **生产构建：** `npm run production` - 37 个页面成功构建，0 个错误
- **静态服务：** `python3 -m http.server` - 完整功能已确认
- **子文件夹部署：** 已使用各种部署路径和结构进行测试

#### **代码检查和标准**
- **零拼写错误：** 完全符合 ESLint 和 StyleLint 规则
- **代码一致性：** 所有 JavaScript 和 CSS 文件统一的代码风格
- **最佳实践：** 具有适当浏览器兼容性的现代 ES2022+ 模式

### 🚀 **部署指南**

#### **快速开始**
```bash
# 生产环境构建
npm run production

# 通过 FTP 部署（上传整个 dist/ 文件夹内容）
# 或者在本地提供服务进行测试
cd dist && python3 -m http.server 8080
```

#### **部署场景**
1. **根目录部署：** 将 `dist/` 内容上传到 `public_html/` 或等效目录
2. **子文件夹部署：** 将 `dist/` 内容上传到 `public_html/admin/` 或类似目录
3. **静态主机部署：** 在您的托管平台中将构建目录指向 `dist/`
4. **CDN 集成：** 将资产上传到 CDN 并根据需要更新路径

### 📋 **迁移说明**

#### **从 4.0.0-rc2 到 4.0.0-rc3**

**自动更新（无需操作）：**
- 路径解析在所有部署场景中自动工作
- 图像加载已修复，无需任何 HTML 更改
- 侧边栏导航显示正确，具有适当的间距和指示器
- 所有 CDN 资源加载无控制台错误

**推荐操作：**
- 移除您可能已实现的任何手动路径修复
- 更新您的部署过程以使用新的 `dist/` 结构
- 在您的特定部署环境中验证图像加载
- 测试开发 (`npm run dev`) 和生产构建

**重大更改：**
- 无 - 此版本完全向后兼容现有 HTML 和 CSS

---

## [4.0.0-rc2] - 2025-06-20

### ES2022 现代化与可访问性合规性

此版本将 AdminLTE 现代化到 ES2022 标准，并实现了全面的 WCAG 2.1 AA 可访问性合规性，使其成为最易访问的管理模板之一。

### JavaScript 与构建系统

#### 🚀 **ES2022 升级**
- **TypeScript 目标：** 从 ES6 升级到 ES2022
  - 启用现代 JavaScript 功能：可选链、空值合并、类字段
  - 通过原生现代浏览器优化提高性能
  - 更好的 Tree-shaking 和更小的包大小
- **浏览器支持：** 更新 `.browserslistrc` 以实现 ES2022 兼容性
  - Chrome ≥97, Firefox ≥104, Safari ≥15.4, Edge ≥97
  - 移除对 Internet Explorer 的支持（已终止服务）
- **构建配置：** 增强了 Rollup 配置
  - 原生 ES2022 模块输出
  - 改进了源映射生成
  - TypeScript 集成优化

### ♿ **可访问性功能**

#### **WCAG 2.1 AA 合规性实现**
- **新可访问性模块：** 完整的 `AccessibilityManager` 类 (`src/ts/accessibility.ts`)
  - 自动生成和管理跳过链接
  - 用于动态内容公告的 ARIA 实时区域
  - 增强的焦点管理和键盘导航
  - 屏幕阅读器兼容性（JAWS、NVDA、VoiceOver）
  - 带有可访问错误处理的表单验证

#### **核心可访问性功能：**
- **跳过导航：** 自动跳过链接到主要内容、导航和关键部分
- **焦点管理：** 
  - 增强的焦点指示器符合对比度要求
  - 模态框和下拉菜单的焦点陷阱
  - 逻辑制表符顺序管理
- **键盘导航：**
  - 所有交互式元素的完整键盘可访问性
  - 菜单和树视图的箭头键导航
  - 模态框/下拉菜单关闭的 Escape 键处理
- **屏幕阅读器支持：**
  - 适当的 ARIA 标签、角色和属性
  - 动态内容的实时区域公告
  - 带有地标的语义化 HTML 结构
- **表单可访问性：**
  - 自动错误识别和公告
  - 必填字段指示器
  - 适当的标签关联

#### **响应式设计与偏好设置：**
- **减少动画：** 尊重 `prefers-reduced-motion`，适用于有前庭疾病的用户
- **高对比度：** 增强对高对比度模式的支持
- **触摸目标：** 最小 44×44 像素触摸目标 (WCAG 2.5.8)
- **颜色对比度：** 所有颜色组合都满足 4.5:1 的对比度要求

### 🎨 **可访问性样式**

#### **新样式表：** `src/scss/_accessibility.scss`
- **跳过链接样式：** 在聚焦前视觉隐藏，正确定位
- **增强焦点指示器：** 3px 轮廓，高对比度颜色
- **屏幕阅读器工具：** `.sr-only` 和 `.sr-only-focusable` 类
- **触摸目标大小：** 确保最小触摸目标大小的实用工具
- **可访问颜色调色板：** 预定义的符合对比度要求的颜色
- **打印可访问性：** 增强的打印样式，带有可见 URL 和边框

### 🏗️ **组件改进**

#### **增强组件：**
- **头部组件：** 改进了带有可访问性功能的元标签
  - 配色方案支持（`light`/`dark`）
  - 用于浏览器 UI 的主题颜色元标签
  - 增强的视口配置
  - 可访问性描述更新
- **导航组件：** 
  - 正确的 ARIA 角色和标签
  - 语义化导航地标
  - 键盘导航支持
  - 屏幕阅读器公告

### 📚 **文档与合规性**

#### **已添加：**
- **`ACCESSIBILITY-COMPLIANCE.md`：** 综合文档
  - 开发者实施指南
  - 测试程序和工具
  - 浏览器和辅助技术兼容性
  - 可访问性功能的 API 文档
  - 使用示例和最佳实践

#### **API 参考：**
```javascript
// 初始化可访问性功能
const a11y = initAccessibility({
  announcements: true,      // 启用实时公告
  skipLinks: true,         // 添加跳过导航链接
  focusManagement: true,   // 增强焦点管理
  keyboardNavigation: true, // 完整的键盘支持
  reducedMotion: true      // 尊重动画偏好设置
});

// 公共方法
a11y.announce('内容已更新', 'polite');
a11y.focusElement('#main-content');
a11y.trapFocus(modalElement);
a11y.addLandmarks();
```

### 🔧 **技术改进**

#### **构建系统：**
- **零拼写错误：** 所有 CSS 和 JavaScript 都通过严格的 Linting 规则
- **捆绑包影响：** 大小增加最小（可访问性功能总共约 23KB）
- **性能：** 可访问性功能的初始化时间 <5ms
- **集成：** 与现有 AdminLTE 架构无缝集成

#### **浏览器兼容性：**
- **现代浏览器：** 目标浏览器中完全支持 ES2022
- **辅助技术：** 已使用主流屏幕阅读器进行测试
- **移动支持：** 增强了触摸和移动可访问性
- **旧版优雅降级：** 较旧浏览器仍保留核心功能

### 🐛 **错误修复**

#### **布局问题：**
- **侧边栏组件：** 修复了损坏的导航结构
- **头部导航：** 解决了 Astro 组件中的解析错误
- **CSS 编译：** 修复了 SASS 弃用警告和属性顺序问题
- **焦点指示器：** 修正了轮廓和焦点环实现

#### **Linting 合规性：**
- **CSS：** 修复了可访问性样式中 72+ 个 StyleLint 违规
- **JavaScript：** 解决了数字分隔符和函数作用域的 ESLint 违规
- **TypeScript：** 修复了现代语法导致的编译错误

### 📊 **性能指标**

#### **包大小：**
- **CSS:** ~357KB （包含所有可访问性功能）
- **JavaScript:** ~47KB （包含 AccessibilityManager）
- **Gzipped Impact:** 完整的可访问性套件额外增加 <10KB

#### **Lighthouse 评分：**
- **可访问性：** 100%（符合 WCAG 2.1 AA）
- **性能：** 保持现有性能水平
- **最佳实践：** 通过现代 JavaScript 模式得到改进

### 🎯 **标准合规性**

#### **已满足 WCAG 2.1 AA 要求：**
- **1. 可感知：** 文本替代、语义结构、颜色对比度
- **2. 可操作：** 键盘可访问性、无癫痫触发、充足时间
- **3. 可理解：** 可读内容、可预测功能、输入辅助
- **4. 健壮性：** 有效标记、辅助技术兼容性

#### **其他标准：**
- **508 条款：** 美国联邦可访问性要求
- **EN 301 549：** 欧洲可访问性标准
- **ADA 合规性：** 美国残疾人法案要求

### 🚀 **迁移指南**

#### **从 4.0.0-rc1 到 4.0.0-rc2：**

**自动功能（无需操作）：**
- 可访问性功能自动初始化
- 跳过链接自动为键盘用户显示
- 焦点管理开箱即用
- 屏幕阅读器公告默认启用

**可选增强：**
```html
<!-- 添加无障碍功能到表单 -->
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="email" class="form-label">邮箱 <span class="required-indicator">*</span></label>
    <input type="email" class="form-control" id="email" required>
    <div class="invalid-feedback" role="alert"></div>
  </div>
</form>

<!-- 使用易于识别的颜色类别 -->
<div class="alert alert-success text-accessible-success">发送消息</div>
```

**对于开发者：**
- 包含可访问性工具：`import { accessibilityUtils } from './adminlte.js'`
- 使用新的 CSS 类：`.sr-only`、`.touch-target`、`.text-accessible-*`
- 使用屏幕阅读器和键盘导航进行测试

---

## [4.0.0-rc1] - 2025-06-20

### 主要现代化发布

此版本代表了 AdminLTE 代码库的彻底现代化，使其符合最新的工具、依赖项和最佳实践。

### 基础设施与工具

#### 已添加
- **新的 npm 脚本，提供更好的开发者体验：**
  - `npm start` - 快速启动开发服务器
  - `npm run build` - 方便的开发构建命令
  - 增强的 `npm run production`，集成 bundlewatch

#### 已更改  
- **升级到 ES 模块：** 在 package.json 中添加 `"type": "module"`
- **ESLint 现代化：** 完全升级到 ESLint v9，采用新的扁平配置格式
  - 从 `.eslintrc.json` 迁移到现代 `eslint.config.js`
  - 将所有 ESLint 插件更新到最新版本
  - 通过自动化修复解决了 700 多个 linting 问题
- **Astro 配置：** 添加 `output: 'static'` 以实现正确的静态站点生成
- **构建优化：** 增强了 Rollup 和 PostCSS 对 ES 模块的配置

### 依赖项

#### 已更新
- **主要版本升级：**
  - `astro`: 4.15.12 → 5.10.0
  - `eslint`: 8.57.1 → 9.29.0
  - `@typescript-eslint/eslint-plugin`: 7.18.0 → 8.34.1
  - `@typescript-eslint/parser`: 7.18.0 → 8.34.1
  - `eslint-config-xo`: 0.44.0 → 0.47.0
  - `eslint-config-xo-typescript`: 4.0.0 → 8.0.1
  - `eslint-plugin-astro`: 0.34.0 → 1.3.1
  - `eslint-plugin-unicorn`: 52.0.0 → 59.0.1
  - `stylelint-config-twbs-bootstrap`: 15.1.0 → 16.1.0

- **次要/补丁更新（50 多个包）：**
  - `bootstrap`: 5.3.3 → 5.3.7
  - `sass`: 1.78.0 → 1.89.2
  - `typescript`: 5.6.2 → 5.8.3
  - `prettier`: 3.3.3 → 3.5.3
  - 还有更多...

### 安全与质量

#### 已修复
- **解决了所有 npm 安全漏洞**（剩余 0 个漏洞）
- **更新了 browserslist 数据库**到最新的浏览器兼容性数据
- **修复了 SASS 和其他构建工具的所有弃用警告**

#### 已改进
- **代码质量：** JavaScript、TypeScript、CSS 和 Astro 文件中零 linting 错误
- **捆绑包优化：** 所有资产都通过 bundlewatch 大小阈值
- **构建可靠性：** 完整的生产构建管道端到端工作

### 代码清理

#### 已移除
- **技术债务清理：**
  - 删除了未完成的 TODO 注释和死代码
  - 清理了未使用的变量和导入
  - 统一了所有文件的代码格式

#### 已修复
- 不同规则集之间的 **ESLint 配置冲突**
- ES 模块中 JSON 导入的 **模块导入问题**
- 构建工具中的 **循环依赖警告**

### 开发体验

#### 已增强
- 通过优化的监视任务实现**更快的开发启动**
- 通过抑制非关键警告实现**更干净的构建输出**
- 借助现代 linting 工具实现**更好的错误报告**
- 通过一致的命名约定实现**改进的脚本组织**

### 浏览器与平台支持

#### 已维护
- **完全兼容 Bootstrap 5.3.7**
- 通过更新 browserslist 实现**现代浏览器支持**
- 使用 Astro 5.x 进行**静态站点生成**
- **RTL（从右到左）语言支持**

---

## 以前的版本

### [4.0.0-beta3] 及更早版本
- 具有先前依赖集的老版本
- 有关早期版本的详细更改，请参阅 git 历史记录

---

## 迁移指南

### 从 4.0.0-beta3 到 4.0.0-rc1

**对于用户：**
- 编译后的 CSS/JS 输出中没有重大更改
- 所有现有 HTML 模板保持完全兼容
- CDN 链接和包导入与以前一样工作

**对于开发者：**
- 如果您使用的是自定义 npm 脚本，请更新它们
- 新的 `npm start` 命令取代了手动 `npm run dev`
- ESLint 配置现在位于 `eslint.config.js` 中（旧的 `.eslintrc.json` 已删除）
- 构建过程现在需要 Node.js ES 模块支持

**推荐操作：**
1. 运行 `npm install` 以获取最新依赖项
2. 使用 `npm start` 进行开发
3. 使用 `npm run production` 进行生产构建
4. 检查任何自定义 ESLint 配置的兼容性 