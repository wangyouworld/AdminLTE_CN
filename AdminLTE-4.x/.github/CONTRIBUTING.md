# 为 AdminLTE 做贡献

贡献永远都是**受欢迎、也鼓励大家来做的**！新手可以这样上手：[点这里开始接触开源](https://youtu.be/GbqSvJs-6W4)

1. 贡献要求：
    * 你做出贡献，即表示你同意授予 AdminLTE.io 一份非独占许可，允许我们（AdminLTE.io）在我们认为合适的任何场景下使用该贡献。
    * 如果你使用了第三方提供的内容，它必须采用合适的[开源](https://opensource.org/licenses)许可证授权。
    * 贡献只通过 GitHub pull request 接受。
    * 最后，贡献的代码必须在所有受支持的浏览器里都能正常工作（浏览器支持情况见上文）。
2. 安装：
    * Fork 这个仓库（[指南在这里](https://help.github.com/articles/fork-a-repo/)）。
    * 克隆到你自己的机器上

    ```bash
    git clone https://github.com/YOUR_USERNAME/AdminLTE.git
    ```
    * 从 `master` 创建一个新分支
3. 编译 dist 文件（开发）：
    * 要编译 dist 文件，你需要 Node.js 22.22.3+、24.16.0+ 或 26.3.0+，以及 npm 10+
    * `npm ci`（安装锁定版本的依赖树）
    * `npm run dev`（开发者模式，资源监听加 Astro 实时演示，地址是 http://localhost:3000）
    * 只在 `./src` 文件夹里做修改，或者在 `package.json` 里，以及其他对贡献来说必要的文件里
    * 不要在 `./dist/**` 里做修改，因为那里放的是编译产物，也不要把它包含进 PR（Pull Request）里
    * `npm test`（单元测试），然后 `npm run build` 和 `npm run test-browser` / `npm run test-a11y`（用 `npx playwright install chromium` 安装浏览器）
    * `npm run production`（创建 pull request 之前，跑 lint、单元测试、编译资源，并检查 gzip 体积预算）
4. 向 `master` 分支创建一个 pull request

## 在线一键配置，直接开始贡献

你可以使用 [Codespace](https://docs.github.com/en/codespaces) —— 一个对开源免费开放的在线 IDE，用来处理 issue 或提交 PR（Pull Request）。只要点一下，它就会启动一个工作区并自动：

- 克隆 `AdminLTE` 仓库。
- 用 [Codespace](https://docs.github.com/en/codespaces) 打开，或者 [![在 Gitpod 中打开](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)
- 安装依赖。
- 运行 `npm run dev` 启动服务器。
