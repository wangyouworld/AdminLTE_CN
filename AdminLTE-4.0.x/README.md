# [AdminLTE - Bootstrap 5 管理面板](https://adminlte.io)

[![npm version](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com/package/admin-lte)
[![Packagist](https://img.shields.io/packagist/v/almasaeed2010/adminlte.svg)](https://packagist.org/packages/almasaeed2010/adminlte)
[![cdn version](https://data.jsdelivr.com/v1/package/npm/admin-lte/badge)](https://www.jsdelivr.com/package/npm/admin-lte)
[![Discord Invite](https://img.shields.io/badge/discord-join%20now-green)](https://discord.gg/jfdvjwFqfz)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1277b36b-08f3-43fa-826a-4b4d24614b3c/deploy-status)](https://app.netlify.com/sites/adminlte-v4/deploys)

**AdminLTE** 是一个自响应式管理框架。基于 **[Bootstrap 5](https://getbootstrap.com/)** 框架和 JavaScript 插件。
高度可定制且易于使用。适用于多种屏幕，小到移动设备大到台式机。

## v4.0.0-rc3 版本更新内容

**生产环境部署与跨平台兼容性** - 该版本修复了关键的生产环境部署问题：

- **修复生产构建** - 解决了所有部署场景下的 CSS/JS 路径问题、侧边栏导航及图片加载异常
- **智能路径解析** - 自动计算相对路径，完美支持根目录部署、子目录部署及 CDN 托管  
- **RTL样式修复** - 消除了 rtlcss 对标准 LTR 生产构建的干扰
- **依赖项更新** - Bootstrap 5.3.7、Bootstrap Icons 1.13.1、OverlayScrollbars 2.11.0
- **零控制台报错** - 修复所有 CDN 完整性校验不匹配及运行时问题
- **FTP/静态托管就绪** - 完美兼容传统托管与现代静态平台

**核心改进：**
- ✅ 开发环境与生产环境表现完全一致
- ✅ 图片/CSS/JavaScript 在任何部署结构下均可正确加载  
- ✅ 侧边栏导航正常显示徽章与箭头指示器
- ✅ 所有 CDN 资源加载无控制台报错
- ✅ 代码库包含完整生产构建版本，部署更便捷

完整变更详见[更新日志](CHANGELOG.md)

## 寻找高级模板？

AdminLTE.io 刚刚开通了一个高级模板网站，精选以确保最佳质量和最实惠的价格。
访问 <https://adminlte.io/premium> 了解更多信息。

!["预览 AdminLTE"](https://adminlte.io/AdminLTE3.png "预览 AdminLTE")

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

AdminLTE基于最新版 Bootstrap 5.3.7 支持所有现代浏览器：
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

## 贡献

- 非常欢迎
- 其他参考资料请查看 [AdminLTE v4 贡献指南](https://github.com/ColorlibHQ/AdminLTE#contributing)
- 首先，你应该对 NodeJS 有一些了解
- Github 知识
- 安装 NodeJS LTS 版本
- 将代码克隆你的计算机并更改为 `master` 分支
- 进入克隆后的文件夹
- 在 cli/bash 中运行 `npm install`，它会从 `package.json` 中安装依赖
- 安装完成后，请运行 `npm start`
- 太棒了，请将您的修改通过PR提交到`master`分支。

## 赞助

通过成为赞助商来支持 AdminLTE 开发。
通过 [Github 赞助](https://github.com/sponsors/danny007in) 或者使用
[PayPal](https://www.paypal.me/daniel007in)

## 许可证

AdminLTE 是一个开源项目，由 [AdminLTE.io](https://adminlte.io) 授权，许可协议使用 [MIT](https://opensource.org/licenses/MIT)。
AdminLTE.io 保留在未来更改许可的权利。

## 图片来源

- [Pixeden](http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd)
- [Graphicsfuel](https://www.graphicsfuel.com/2013/02/13-high-resolution-blur-backgrounds/)
- [Pickaface](https://pickaface.net/)
- [Unsplash](https://unsplash.com/)
- [Uifaces](http://uifaces.com/)
