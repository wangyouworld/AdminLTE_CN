---
layout: page
title: 
---

# 为 AdminLTE 做贡献

始终**欢迎**你分享，也**推荐**你这么做！这是初学者的方法：[开源入门请单击此处](https://youtu.be/GbqSvJs-6W4)

1. 贡献要求：
    * 当你提交时，你同意给 AdminLTE.io 一个非独占许可。我们（AdminLTE.io）可以任意使用该贡献。
    * 如果您使用第三方提供的内容，则必须使用[开源许可证](http://opensource.org/licenses)对其进行适当许可。
    * 仅通过 Github 拉取请求接受贡献。
    * 最后，贡献的代码必须适用于所有支持的浏览器（请参阅上面的浏览器支持）。
2. 安装：
    * Fork 存储库（[这里是指南](https://help.github.com/articles/fork-a-repo/)）。
    * 克隆到你的电脑上

    ```bash
    git clone https://github.com/YOUR_USERNAME/AdminLTE.git
    ```
    * 创建新分支
3. 编译 dist 文件（开发）：
    * 要编译 dist 文件，你需要 Node.js 14 或更高版本的 npm（node 包管理器）
    * 删除 ./package-lock.json 文件
    * `npm install` （安装 npm）
    * `npm run dev` （开发者模式，自动编译，支持 browsersync 实时演示）
    * 仅在 ./build 文件夹或 package.json、./dist/js/demo.js、package-lock.json、./dist/js/pages/、./docs 及任何 html 文件中
    * 不要在 ./dist/css/、./dist/js/、./plugins 中修改，因为它们是编译过的并没有包含在 PR 中（拉取请求）
    * `npm run production` （在创建拉取请求之前编译 css/js 文件并测试所有页面都可以正常工作）
4. 创建拉取请求

## 在线一键设置

你可以使用 Gitpod（一个开源的在线 IDE免费且开源）或处理问题或管理 PR（拉取请求）。只需点击一下，就会自动启动工作区：

- 克隆 `AdminLTE` 仓库
- 安装依赖关系
- 执行 `npm run dev` 启动服务

[![打开 Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)
