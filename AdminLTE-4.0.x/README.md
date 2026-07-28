# [AdminLTE - Bootstrap 5 管理后台](https://adminlte.io)

[![npm version](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com/package/admin-lte)
[![Packagist](https://img.shields.io/packagist/v/almasaeed2010/adminlte.svg)](https://packagist.org/packages/almasaeed2010/adminlte)
[![cdn version](https://data.jsdelivr.com/v1/package/npm/admin-lte/badge)](https://www.jsdelivr.com/package/npm/admin-lte)
[![Discord Invite](https://img.shields.io/badge/discord-join%20now-green)](https://discord.gg/jfdvjwFqfz)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1277b36b-08f3-43fa-826a-4b4d24614b3c/deploy-status)](https://app.netlify.com/sites/adminlte-v4/deploys)

**AdminLTE** 是一个自响应式管理框架。基于 **[Bootstrap 5](https://getbootstrap.com/)** 框架和 JavaScript 插件。
高度可定制且易于使用。适用于多种屏幕，小到移动设备大到台式机。

## v4.0.0 新增内容

v4 系列的第一个稳定版本——基于 Bootstrap 5.3 完全重写，不再依赖 jQuery。主要亮点：

**18 个新的演示页面**

- 应用程序：日历（FullCalendar）、看板（SortableJS）、聊天、文件管理器、项目、邮箱（收件箱/阅读/写信）
- 表单：向导（4 步流程，含验证）
- 表格：数据表格（Tabulator — 无 jQuery）
- 页面：个人资料、设置、发票、定价、常见问题
- 错误页面：404、500、维护中

**文档全面翻新**

- 新增页面：快速开始、自定义与主题、RTL 支持、从 v3 迁移、布局结构、实用方案、部署与性能、推荐集成、JavaScript 插件概览
- 重写了介绍页面，包含四种标注清晰的安装方式（CDN / npm / 源码 / Composer）
- 常见问题页面重构为自定义页面，包含大标题、实时搜索、分类标签和涵盖六大主题共 19 个问题的折叠面板
- 拆分侧边栏导航：仪表盘演示和文档各自拥有独立的导航，文档条目不再混杂在实时预览中
- 所有文档页面采用适合阅读的排版，包括受限行宽、优化标题节奏、样式化的参考表格、信息提示框和胶囊内联代码

**六个问题修复**

- 自动颜色模式图标改用 `bi-circle-half`（#6028）
- `table-head-fixed` 支持深色模式（#6026）
- 全屏图标切换改为使用 `.d-none`，而非内联 `display`，使其适用于任何图标库（#6021）
- 使用 `fixed-header` 时侧边栏（包括品牌区）保持固定不动（#6020）
- `index2.html` 上的饼图在浏览器缩放时不再闪烁（#6019）
- 颜色模式切换开关现在默认显示在顶栏中，并支持 localStorage 持久化存储（#6010）

**主要依赖升级**

- ESLint 9 → 10, TypeScript 5.9 → 6, Stylelint 16 → 17
- Astro 6.0 → 6.3，autoprefixer / postcss / rollup / sass / terser 更新
- Bootstrap 5.3.8，CI 中使用 Node 22 LTS
- 移除了废弃的 `eslint-plugin-import`、`eslint-config-xo*` 以及旧版 `.eslintrc.json`
- 通过 npm `overrides` 配置了 `yaml` 和 `stylelint-config-twbs-bootstrap`，使 `npm install` 无需 `--legacy-peer-deps` 即可运行，且报告 **0 个漏洞**

**自 v3 以来的破坏性变更**

- 类名重命名：`.wrapper` → `.app-wrapper`、`.main-header` → `.app-header`、`.main-sidebar` → `.app-sidebar`、`.content-wrapper` → `.app-main`
- 数据属性：`data-toggle` → `data-bs-toggle`、`data-widget="pushmenu"` → `data-lte-toggle="sidebar"`、`data-widget="treeview"` → `data-lte-toggle="treeview"`
- 深色模式：body 类 `.dark-mode` → `data-bs-theme="dark"` 属性（Bootstrap 5.3 原生支持）
- 不再需要 jQuery；插件使用原生 TypeScript

请参阅专门的[从 v3 迁移](https://adminlte.io/themes/v4/docs/migration.html)指南和 [CHANGELOG.md](CHANGELOG.md) 以获取完整列表。

**安装：**
```bash
npm install admin-lte@4.0.0
```

## 寻找高级模板？

AdminLTE.io 刚刚开通了一个高级模板网站，精选以确保最佳质量和最实惠的价格。
访问 <https://adminlte.io/premium> 了解更多信息。

!["AdminLTE 展示"](https://adminlte.io/AdminLTE3.png "AdminLTE 展示")

**AdminLTE** 所有的 JS、SCSS 和 HTML 文件均经过精心编码，并带有清晰的注释。
SCSS 已用于提高代码的可定制性。

## 快速开始

### 开发指南

开始使用 AdminLTE 进行开发的步骤：

1. **安装依赖项**：执行 `npm install`
2. **启动开发服务器**：运行 `npm start` *(自动在浏览器打开 http://localhost:3000)*
3. **开始编码！** 文件修改后将自动编译并刷新页面

### 生产环境构建

构建生产版本的流程：

1. **完整生产构建**：执行 `npm run production` *(包含代码校验与优化)*
2. **快速构建**：运行 `npm run build` *(适用于开发/测试的快速构建)*

### 可用脚本命令

- `npm start` - 启动带文件监听的开发服务器
- `npm run build` - 构建开发环境所需资源
- `npm run production` - 执行完整生产构建（含代码校验与 bundlewatch 检查）
- `npm run lint` - 运行所有校验器（JS/CSS/文档/lockfile）
- `npm run css` - 仅构建 CSS 文件
- `npm run js` - 仅构建 JavaScript 文件

## 浏览器兼容性

AdminLTE 支持所有现代浏览器，基于最新的 Bootstrap 5.3.8：
- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 平台兼容性

AdminLTE v4 构建脚本支持跨平台运行：
- **Windows** - 命令 提示符/PowerShell/Git Bash
- **macOS** - 终端/iTerm2
- **Linux** - Bash/Zsh 及其他 Unix shell 环境

所有 npm 脚本均使用跨平台工具，确保在不同操作系统上表现一致。

## 安全与生产部署

### 重要安全提示

AdminLTE 是一款**用户界面模板**——在进行生产部署时，请遵循以下关键准则：

**部署内容：**
- 仅包含编译后的生产资源：`dist/js/adminlte.min.js` 和 `dist/css/adminlte.min.css`
- 应用中特定文件

**不应部署的内容：**
- `node_modules/` 目录
- 演示/示例 HTML 文件（index.html、index2.html、index3.html 等）
- 源文件（`src/` 目录）
- 开发配置文件

**CVE-2021-36471 警告：**
此 CVE 信息存在争议，并不代表 AdminLTE 存在漏洞。它指的是在开发人员错误地将示例文件部署到生产环境时，演示页面能够被访问到。AdminLTE 4 版本明确区分了开发演示内容和生产资源。有关详细信息，请参阅 [SECURITY.md](SECURITY.md) 文件。

**生产版本：**
```bash
npm run production  # 在 dist/ 目录中构建优化后的资产文件
```

有关详细的安全指南、认证要求以及最佳实践，请参阅 [SECURITY.md](SECURITY.md)。

## 赞助

通过成为赞助者或捐赠者来支持 AdminLTE 的开发工作。

<p align="center">
  <a href="https://github.com/sponsors/danny007in">
    <img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor on GitHub" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.paypal.me/daniel007in">
    <img src="https://img.shields.io/static/v1?label=Donate&message=%E2%9D%A4&logo=PayPal&color=%2300457C" alt="Donate via PayPal" />
  </a>
</p>

## 我们的赞助者

<p align="center">
  <a href="https://github.com/spizzo14"><img src="https://unavatar.io/github/spizzo14?fallback=https%3A%2F%2Fraw.githubusercontent.com%2FJamesIves%2Fgithub-sponsors-readme-action%2Fdev%2F.github%2Fassets%2Fplaceholder.png" width="50" height="50" alt="User avatar: spizzo14" loading="lazy" /></a>&nbsp;&nbsp;
  <a href="https://github.com/tomhappyblock"><img src="https://unavatar.io/github/tomhappyblock?fallback=https%3A%2F%2Fraw.githubusercontent.com%2FJamesIves%2Fgithub-sponsors-readme-action%2Fdev%2F.github%2Fassets%2Fplaceholder.png" width="50" height="50" alt="User avatar: tomhappyblock" loading="lazy" /></a>&nbsp;&nbsp;
  <a href="https://github.com/stefanmorderca"><img src="https://unavatar.io/github/stefanmorderca?fallback=https%3A%2F%2Fraw.githubusercontent.com%2FJamesIves%2Fgithub-sponsors-readme-action%2Fdev%2F.github%2Fassets%2Fplaceholder.png" width="50" height="50" alt="User avatar: stefanmorderca" loading="lazy" /></a>&nbsp;&nbsp;
  <a href="https://github.com/tito10047"><img src="https://unavatar.io/github/tito10047?fallback=https%3A%2F%2Fraw.githubusercontent.com%2FJamesIves%2Fgithub-sponsors-readme-action%2Fdev%2F.github%2Fassets%2Fplaceholder.png" width="50" height="50" alt="User avatar: tito10047" loading="lazy" /></a>&nbsp;&nbsp;
  <a href="https://github.com/sitchi"><img src="https://unavatar.io/github/sitchi?fallback=https%3A%2F%2Fraw.githubusercontent.com%2FJamesIves%2Fgithub-sponsors-readme-action%2Fdev%2F.github%2Fassets%2Fplaceholder.png" width="50" height="50" alt="User avatar: sitchi" loading="lazy" /></a>&nbsp;&nbsp;
  <a href="https://github.com/npreee"><img src="https://unavatar.io/github/npreee?fallback=https%3A%2F%2Fraw.githubusercontent.com%2FJamesIves%2Fgithub-sponsors-readme-action%2Fdev%2F.github%2Fassets%2Fplaceholder.png" width="50" height="50" alt="User avatar: npreee" loading="lazy" /></a>&nbsp;&nbsp;
  <a href="https://github.com/isaacmorais"><img src="https://unavatar.io/github/isaacmorais?fallback=https%3A%2F%2Fraw.githubusercontent.com%2FJamesIves%2Fgithub-sponsors-readme-action%2Fdev%2F.github%2Fassets%2Fplaceholder.png" width="50" height="50" alt="User avatar: isaacmorais" loading="lazy" /></a>&nbsp;&nbsp;
</p>

<p align="center">
  <a href="https://github.com/sponsors/danny007in">你的虚拟形象在这里吗？请成为赞助商吧</a>
</p>

## 贡献

- 非常欢迎。
- 更多参考资料请查看 [AdminLTE v4 贡献指南](https://github.com/ColorlibHQ/AdminLTE#contributing)
- 首先，您需要具备一些 NodeJS 基础知识。
- 了解 Github。
- 安装 NodeJS LTS 版本。
- 将此仓库克隆到本地并切换到 `master` 分支。
- 进入克隆的文件夹。
- 在 cli/bash 中运行 `npm install`，它将从 `package.json` 安装依赖。
- 安装完成后，请运行 `npm start`
- 太棒了，请将您的修改通过PR提交到`master`分支。


## 许可证

AdminLTE 是一个开源项目，由 [AdminLTE.io](https://adminlte.io) 授权，许可协议使用 [MIT](https://opensource.org/licenses/MIT)。
AdminLTE.io 保留在未来更改许可的权利。

## 图片来源

- [Pixeden](http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd)
- [Graphicsfuel](https://www.graphicsfuel.com/2013/02/13-high-resolution-blur-backgrounds/)
- [Pickaface](https://pickaface.net/)
- [Unsplash](https://unsplash.com/)
- [Uifaces](http://uifaces.com/)
- [Unavatar](https://unavatar.io/)