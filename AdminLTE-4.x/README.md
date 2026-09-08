# [AdminLTE — Bootstrap 5 管理后台](https://adminlte.io)

[![npm 版本](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com/package/admin-lte)
[![Packagist](https://img.shields.io/packagist/v/almasaeed2010/adminlte.svg)](https://packagist.org/packages/almasaeed2010/adminlte)
[![CDN 版本](https://data.jsdelivr.com/v1/package/npm/admin-lte/badge)](https://www.jsdelivr.com/package/npm/admin-lte)
[![许可证: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Discord 邀请](https://img.shields.io/badge/discord-加入-green)](https://discord.gg/jfdvjwFqfz)
[![Netlify 状态](https://api.netlify.com/api/v1/badges/1277b36b-08f3-43fa-826a-4b4d24614b3c/deploy-status)](https://app.netlify.com/sites/adminlte-v4/deploys)

**AdminLTE** 是最受欢迎的开源管理后台模板——完全响应式，
基于 **[Bootstrap 5.3](https://getbootstrap.com/)** 构建，使用原生 JavaScript（无 jQuery），
高度可定制，并且开箱即用。从小屏手机到大屏桌面都能完美适配，
采用 MIT 许可证。

**[在线演示](https://adminlte.io/themes/v4/)** ·
**[文档](https://adminlte.io/themes/v4/docs/introduction.html)** ·
**[框架版本](#framework-editions)** ·
**[付费模板](#premium-templates)**

<p align="center">
  <a href="https://adminlte.io/themes/v4/">
    <img alt="AdminLTE 4 仪表盘 — 浅色模式" src=".github/assets/dashboard-light.png" width="49%">
  </a>
  <a href="https://adminlte.io/themes/v4/">
    <img alt="AdminLTE 4 仪表盘 — 深色模式" src=".github/assets/dashboard-dark.png" width="49%">
  </a>
</p>

## 框架版本

同样的 AdminLTE 4 仪表盘，以官方集成的方式提供给你最熟悉的框架——
你现在看到的是 **HTML / Bootstrap** 核心版本：

<!-- ADMINLTE-ECOSYSTEM:START -->
<div align="center">
  <a href="https://github.com/ColorlibHQ/AdminLTE"><img height="36" alt="HTML" src="https://img.shields.io/badge/HTML-0D6EFD?style=for-the-badge&logo=html5&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-react"><img height="36" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-react"><img height="36" alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-vue"><img height="36" alt="Vue" src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-vue"><img height="36" alt="Nuxt" src="https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-angular"><img height="36" alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-laravel"><img height="36" alt="Laravel" src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-symfony"><img height="36" alt="Symfony" src="https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-django"><img height="36" alt="Django" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-aspnet"><img height="36" alt="ASP.NET" src="https://img.shields.io/badge/ASP.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white"></a>
  <a href="https://github.com/ColorlibHQ/adminlte-drupal"><img height="36" alt="Drupal" src="https://img.shields.io/badge/Drupal-0678BE?style=for-the-badge&logo=drupal&logoColor=white"></a>
  <a href="https://docs.adminlte.io"><img height="36" alt="Docs" src="https://img.shields.io/badge/Docs-adminlte.io-0EA5E9?style=for-the-badge&logo=readthedocs&logoColor=white"></a>
</div>
<!-- ADMINLTE-ECOSYSTEM:END -->

| 版本 | 仓库 | 在线演示 | 安装 |
|---|---|---|---|
| **HTML / Bootstrap**（本仓库） | [AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | [themes/v4](https://adminlte.io/themes/v4/) | `npm install admin-lte` |
| **React & Next.js** —— 30+ 个带类型组件，支持 RSC，⌘K 命令面板 | [adminlte-react](https://github.com/ColorlibHQ/adminlte-react) | [themes/next-react](https://adminlte.io/themes/next-react/) | 见仓库 |
| **Vue 3 & Nuxt** —— 45+ 个带类型组件，composables，SSR 安全的主题化 | [adminlte-vue](https://github.com/ColorlibHQ/adminlte-vue) | [themes/vue-nuxt](https://adminlte.io/themes/vue-nuxt/) | 见仓库 |
| **Laravel** —— Blade 组件，配置驱动菜单，认证脚手架 | [adminlte-laravel](https://github.com/ColorlibHQ/adminlte-laravel) | [laravel.adminlte.io](https://laravel.adminlte.io/) | `composer require colorlibhq/adminlte-laravel` |
| **Django** —— 可复用应用，菜单过滤管道，主题化的后台 | [adminlte-django](https://github.com/ColorlibHQ/adminlte-django) | [django.adminlte.io](https://django.adminlte.io/) | `pip install django-adminlte4` |
| **Symfony** —— Twig 组件，AssetMapper，配置驱动菜单，EasyAdmin 主题 | [adminlte-symfony](https://github.com/ColorlibHQ/adminlte-symfony) | 见仓库 | `composer require colorlibhq/adminlte-symfony` |
| **Angular 22** —— 44 个独立 signal 组件，深色模式，⌘K 命令面板 | [adminlte-angular](https://github.com/ColorlibHQ/adminlte-angular) | 见仓库 | `npm i @adminlte/angular` |
| **ASP.NET Core (.NET 10)** —— Blazor 组件 + MVC/Razor Pages 的 Tag Helpers | [adminlte-aspnet](https://github.com/ColorlibHQ/adminlte-aspnet) | 见仓库 | `dotnet add package ColorlibHQ.AdminLTE.AspNetCore` |
| **Drupal** —— Drupal 10.3+/11 的管理主题，主题化的后台界面 | [adminlte-drupal](https://github.com/ColorlibHQ/adminlte-drupal) | 见仓库 | 见仓库 |
| **文档** —— 每个版本的指南、组件和 API 参考 | [docs.adminlte.io](https://docs.adminlte.io) | [docs.adminlte.io](https://docs.adminlte.io) | — |

每个版本都包含了完整的 AdminLTE 4 设计——
Bootstrap 5.3、深色模式、RTL——并针对各自技术栈提供了地道的集成方式（组件、路由、认证、主题化）。

## 快速开始

**CDN** —— 无需构建步骤：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4/dist/css/adminlte.min.css">
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4/dist/js/adminlte.min.js"></script>
```

**npm:**

```bash
npm install admin-lte@4
```

**Composer:**

```bash
composer require almasaeed2010/adminlte
```

然后从[快速上手指南](https://adminlte.io/themes/v4/docs/introduction.html)开始，
或者直接复制一个演示页面来用。

### 开发 AdminLTE 本身

1. **安装依赖：** `npm install`
2. **启动开发服务器：** `npm start` *（打开 http://localhost:3000，带热重载）*
3. **构建：** `npm run build`——或者 `npm run production` 跑完整的 lint + 优化 + bundlewatch 流程

<details>
<summary>所有 npm 脚本</summary>

- `npm start` —— 开发服务器，带文件监听
- `npm run build` —— 构建所有开发环境资源
- `npm run production` —— 完整的生产环境构建，含 lint 和 bundlewatch
- `npm run lint` —— 运行所有代码检查工具（JS、CSS、文档、lockfile）
- `npm run css` —— 仅构建 CSS
- `npm run js` —— 仅构建 JavaScript

</details>

## v4 版本新特性

v4 系列是在 Bootstrap 5.3 上完全重写的，**不再依赖 jQuery**：
新增了 18 个演示页面（日历、看板、聊天、文件管理器、邮箱、表单向导、Tabulator 数据表格等等），
文档也全面翻新了，依赖也做了大版本升级。
完整细节请查看[更新日志](CHANGELOG.md)。

<details>
<summary>亮点一览</summary>

**18 个新的演示页面**

- 应用：日历（FullCalendar）、看板（SortableJS）、聊天、文件管理器、项目、邮箱（收件箱/阅读/写信）
- 表单：表单向导（4 步带校验）
- 表格：数据表格（Tabulator——无 jQuery）
- 页面：个人资料、设置、发票、定价、常见问题
- 错误页面：404、500、维护中

**文档全面翻新**

- 新增页面：快速开始、自定义与主题、RTL 支持、从 v3 迁移、布局结构、实用方案、部署与性能、推荐集成、JavaScript 插件概览
- 重写了介绍页面，包含四种标注清晰的安装方式（CDN / npm / 源码 / Composer）
- 常见问题页面重新做了，带横幅、实时搜索、分类标签和 19 个问题的折叠面板
- 侧边栏导航拆开了：仪表盘演示和文档各用各的导航

**主要依赖升级**

- ESLint 10、TypeScript 6、Stylelint 17、Astro 6.3、Bootstrap 5.3.8，CI 用 Node 22 LTS
- `npm install` 跑完干干净净，**0 个漏洞**

</details>

<details>
<summary>从 v3 升级的破坏性变更</summary>

- 类名重命名：`.wrapper` → `.app-wrapper`、`.main-header` → `.app-header`、`.main-sidebar` → `.app-sidebar`、`.content-wrapper` → `.app-main`
- 数据属性：`data-toggle` → `data-bs-toggle`、`data-widget="pushmenu"` → `data-lte-toggle="sidebar"`、`data-widget="treeview"` → `data-lte-toggle="treeview"`
- 深色模式：`<body>` 上的 `.dark-mode` 类 → `data-bs-theme="dark"` 属性（Bootstrap 5.3 原生支持）
- 不再需要 jQuery；插件使用原生 TypeScript

详见专门的[从 v3 迁移指南](https://adminlte.io/themes/v4/docs/migration.html)。

</details>

## 付费模板

AdminLTE 永远免费且开源。当项目需要更多功能时——
比如现成的应用页面、框架原生代码库、专属支持——
我们的团队在 **[adminlte.io/premium](https://adminlte.io/premium)** 精心挑选了付费仪表盘，
其中包含针对 AdminLTE 所集成的同一批技术栈构建的版本：

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/admindek-html/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">
        <img src=".github/assets/premium/admindek.png" alt="Admindek —— 功能丰富的 Bootstrap 5 仪表盘，带深色模式" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/admindek-html/?utm_source=github&utm_medium=readme&utm_campaign=adminlte"><strong>Admindek</strong></a>
      <br>
      <sub>从 AdminLTE 自然进阶的选择：Bootstrap 5 + 原生 JS，100+ 组件，深色/浅色模式，RTL，10 种配色预设。<br>
      也有 <a href="https://dashboardpack.com/theme-details/admindek-dashboard-laravel/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">Laravel</a> ·
      <a href="https://dashboardpack.com/theme-details/admindek-nextjs/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">Next.js</a> ·
      <a href="https://dashboardpack.com/theme-details/admindek-dashboard-angular/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">Angular</a> 版本</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/apex-dashboard-nextjs/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">
        <img src=".github/assets/premium/apex.png" alt="Apex Dashboard —— 支持 Next.js、Laravel、Django 和 Angular 的管理模板" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/apex-dashboard-nextjs/?utm_source=github&utm_medium=readme&utm_campaign=adminlte"><strong>Apex Dashboard</strong></a>
      <br>
      <sub>5 种仪表盘变体，20+ 应用页面，125+ 路由，完整的增删改查——用你后端的原生技术栈。<br>
      支持 <a href="https://dashboardpack.com/theme-details/apex-dashboard-nextjs/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">Next.js</a> ·
      <a href="https://dashboardpack.com/theme-details/apex-dashboard-laravel/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">Laravel</a> ·
      <a href="https://dashboardpack.com/theme-details/apex-dashboard-django/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">Django</a> ·
      <a href="https://dashboardpack.com/theme-details/apex-dashboard-angular/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">Angular</a></sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/zenith-dashboard-django/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">
        <img src=".github/assets/premium/zenith.png" alt="Zenith —— 极致简约的管理仪表盘，Django 版" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/zenith-dashboard-django/?utm_source=github&utm_medium=readme&utm_campaign=adminlte"><strong>Zenith Dashboard —— Django 版</strong></a>
      <br>
      <sub>无彩色、极致简约的设计，以开箱即用的 Django 项目形式提供：50+ 页面，6 种仪表盘，实时主题定制器。</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/haze-dashboard-nuxt/?utm_source=github&utm_medium=readme&utm_campaign=adminlte">
        <img src=".github/assets/premium/haze.png" alt="Haze —— Nuxt 4 管理仪表盘，92+ 页面和 5 种仪表盘" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/haze-dashboard-nuxt/?utm_source=github&utm_medium=readme&utm_campaign=adminlte"><strong>Haze —— Nuxt 版</strong></a>
      <br>
      <sub>Nuxt 4 + Nuxt UI v4 + Tailwind CSS v4。92+ 页面，7 种布局，5 种仪表盘，RTL，国际化，Mock API 层。</sub>
    </td>
  </tr>
</table>

<p align="center">
  <a href="https://adminlte.io/premium"><strong>查看所有付费模板 →</strong></a>
</p>

## 浏览器与平台支持

AdminLTE 通过 Bootstrap 5.3.8 支持所有现代浏览器的最新版本（Chrome、Firefox、Safari、Edge）。
构建脚本跨平台运行——Windows（CMD、PowerShell、Git Bash）
、macOS 和 Linux——全程使用跨平台的 npm 工具。

## 安全与生产部署

AdminLTE 是一个 **UI 模板**。部署时只放编译好的生产环境资源文件
（`dist/js/adminlte.min.js`、`dist/css/adminlte.min.css`）和你自己的应用文件——
千万不要把 `node_modules/`、演示 HTML 页面或 `src/` 目录部署上去。

> **关于 CVE-2021-36471：** 这个 CVE 是**有争议的**，
> 并不代表 AdminLTE 本身存在漏洞——它指的是当示例文件被错误地部署到生产环境时，
> 演示页面可以被访问到。
> AdminLTE v4 已经将开发用的演示页面和生产环境资源清晰地区分开了。

详细指南、认证要求和最佳实践，
请查看 [SECURITY.md](SECURITY.md)。

## 赞助

通过成为赞助者或捐赠者来支持 AdminLTE 的开发。

<p align="center">
  <a href="https://github.com/sponsors/danny007in">
    <img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="在 GitHub 上赞助" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.paypal.me/daniel007in">
    <img src="https://img.shields.io/static/v1?label=Donate&message=%E2%9D%A4&logo=PayPal&color=%2300457C" alt="通过 PayPal 捐赠" />
  </a>
</p>

### 我们的赞助者

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
  <a href="https://github.com/sponsors/danny007in">您的头像在这里？成为赞助者</a>
</p>

## 贡献

非常欢迎贡献代码：

1. 安装 [Node.js](https://nodejs.org/)（LTS 版本），然后克隆本仓库（`master` 分支）。
2. 执行 `npm install`，然后 `npm start` 启动开发服务器。
3. 做出你的修改（提交前记得跑 `npm run lint`），然后向 `master` 分支提交 PR。

## 许可证

AdminLTE 是 [AdminLTE.io](https://adminlte.io) 的一个开源项目，
采用 [MIT](https://opensource.org/licenses/MIT) 许可证。
AdminLTE.io 保留更改未来版本许可证的权利。

## 图片来源

[Pixeden](http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd),
[Graphicsfuel](https://www.graphicsfuel.com/2013/02/13-high-resolution-blur-backgrounds/),
[Pickaface](https://pickaface.net/),
[Unsplash](https://unsplash.com/),
[Uifaces](http://uifaces.com/),
[Unavatar](https://unavatar.io/)
