# [AdminLTE - Bootstrap 4 管理面板](https://adminlte.io)

[![npm version](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com/package/admin-lte)
[![Packagist](https://img.shields.io/packagist/v/almasaeed2010/adminlte.svg)](https://packagist.org/packages/almasaeed2010/adminlte)
[![cdn version](https://data.jsdelivr.com/v1/package/npm/admin-lte/badge)](https://www.jsdelivr.com/package/npm/admin-lte)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/ColorlibHQ/AdminLTE)
[![Discord Invite](https://img.shields.io/badge/discord-join%20now-green)](https://discord.gg/jfdvjwFqfz)

**AdminLTE** 是一个自响应式管理框架。基于 **[Bootstrap 4.6](https://getbootstrap.com/)** 框架以及 JS/jQuery 插件。
高度可定制且易于使用。适用于多种屏幕，小到移动设备大到台式机。

**在 [AdminLTE.io](/AdminLTE/AdminLTE-3.x/) 预览**

## 寻找高级模板？

AdminLTE.io 刚刚开通了一个高级模板网站，精选以确保最佳质量和最实惠的价格。
访问 <https://adminlte.io/premium> 了解更多信息。

!["AdminLTE 演示"](https://adminlte.io/AdminLTE3.png "AdminLTE 演示")

**AdminLTE** 所有的 JS、SCSS 和 HTML 文件均经过精心编码，并带有清晰的注释。
SCSS 已用于提高代码的可定制性。

## 快速开始
有多种方法安装 AdminLTE。

### 下载 & 更新日志：
始终建议从 GitHub 下载最新版本的 [AdminLTE 3](https://github.com/ColorlibHQ/AdminLTE/releases/latest)，以获取无错误和最新功能。\
访问[发布页面](https://github.com/ColorlibHQ/AdminLTE/releases)以查看更改日志。.\
历史版本是 [AdminLTE 2](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v2.4.18) / [AdminLTE 1](https://github.com/ColorlibHQ/AdminLTE/releases/tag/1.3.1).

## 稳定发布
### 从 [jsdelivr](https://www.jsdelivr.com/package/npm/admin-lte) CDN 获取：
_**重要说明**：在项目中使用的插件，你也需要添加 cdn 链接。_
```html
<script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>
```
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css">
```
### 使用命令行：
_**重要提示**：通过 NPM/Yarn 安装，至少需要 Node.js 14 或更高版本。_
#### 使用 npm
```bash
npm install admin-lte@^3.2 --save
```
#### 通过 Yarn
```bash
yarn add admin-lte@^3.2
```
#### 通过 Composer
```bash
composer require "almasaeed2010/adminlte=~3.2"
```
#### 通过 Git
```bash
git clone https://github.com/ColorlibHQ/AdminLTE.git
```

## 文档

请访问[在线文档](https://3vshej.cn/AdminLTE/)以获取最新的使用指南。
信息将在每周添加一次。

## 支持浏览器

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Vivaldi | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| 最近2个版本| 最近2个版本| 最近2个版本| 最近2个版本| 最近2个版本| 最近2个版本| 最近2个版本| 最近2个版本

## 亮模式 （只移除深色模式）
如果不使用也不需要深色模式，则可以只使用亮模式版本，这样的话文件会更小。

文件在 `./dist/css/alt/adminlte.light.css`


## 编译 dist 文件

要编译 dist 文件，你需要 Node.js/npm，克隆/下载仓库后：

1. `npm install` （安装 npm）
2. _可选：_ `npm run dev` （开发人员模式，支持实时演示、自动编译、浏览器同步）
3. `npm run production` （编译 css/js 文件）


## 贡献

请仔细阅读我们的[贡献准则](https://github.com/ColorlibHQ/AdminLTE/tree/master/.github/CONTRIBUTING.md)。其中包括开放问题的说明，编码标准和开发说明。

[编辑器配置](https://github.com/twbs/bootstrap/blob/main/.editorconfig)中的配置项，以方便在普通文本编辑器中使用。 了解更多信息，并在 <https://editorconfig.org/> 下载插件。


## 许可证

AdminLTE 是 [AdminLTE.io](https://adminlte.io) 的开源项目，通过 [MIT](http://opensource.org/licenses/MIT) 授权许可。
AdminLTE.io 保留在未来更改版本许可的权利。

## 图片来源

- [Pixeden](http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd)
- [Graphicsfuel](https://www.graphicsfuel.com/2013/02/13-high-resolution-blur-backgrounds/)
- [Pickaface](https://pickaface.net/)
- [Unsplash](https://unsplash.com/)
- [Uifaces](http://uifaces.com/)
