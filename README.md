# 欢迎使用 AdminLTE 文档！

> * 翻译采用第三方翻译工具和人工复核的方式进行。
> * 尽可能的信、达、雅； 但由于英文水平有限，翻译内容会偏离原内容。
> * 目前已经完成，AdminLTE-2.3.11、2.4.x、3.1、4.0.x 翻译工作

----------

你可以直接在[发布页][1]下载文档。目录结构与[官方][2]提供的一致。
也可以直接在[演示页][3]查看。

----------
当然，你也可以参与其中（请邮件：ramble **AT** 3vshej.cn）：

# 【4.0.x】
基于 Bootstrap 5，该版本使用 astro 管理页面和文档。但**字典格式与 2.x 一样**。

| 字典文件名 | 说明     |
| ------ |--------|
| astro_dict.txt | 示例页面 |
| md_dict.txt | readme.md 文件 |
| mdx_dict.txt| 使用文档  |

- AdminLTE 4 文档使用了 astro

如果有需要本地配置的，参见 [astro 教程][5]。

使用时很简单，只需要使用以下命令：

```bash
# 安装依赖包
npm install

# 执行翻译
php bat_trans.php -c=start

# 调试运行
npm run dev

# 打包发布
npm run compile
```

- 已知不同于官方的内容

链接外部的 JS、CSS，均修改为本地引用。
如果你不想使用，可以在 astro_dict.txt 中删除相关项。

# 【3.x】
该版本有很大变化，因此，PHP 处理程序也做了很大调整。但**字典格式与 2.x 一样**。

| 字典文件名 | 说明 |
| ------ | ------ |
| dict.txt | 示例页面 |
| dict_js.txt | 示例页面的JS文件 |
| docs_dict.txt | HTML 模板文档页面 |
| docs_md_dict.txt | 文档 md 文件 |
| docs_yml_dict.txt | 文档 yml 配置文件 |

替换时，对字典从长到短排序，并依次替换。
对于单词，只是一个单词，单词的替换规则，是**完全匹配**，注意是**完全匹配**。

- 将各种类型字典进行了拆分

| 字典文件名 | 说明 |
| ------ | ------ |
| dict.txt | 示例页面 |
| dict_js.txt | 示例页面的JS文件 |
| docs_dict.txt | HTML 模板文档页面 |
| docs_md_dict.txt | 文档 md 文件 |
| docs_yml_dict.txt | 文档 yml 配置文件 |


- bat_trans.php 支持命令行和任务配置

| 参数 | 说明 |
| ------ | ------ |
| runPath | 运行目录 |
| dictFile | 字典文件名 |
| extFile | 待处理的文件扩展名 |
| ignorePath | 忽略的目录 |

GET 方式：
为项目目录绑定域名，并通过域名访问：
```html
/bat_trans.php?command=start
```

命令行方式：
需要 PHP 环境，建议 <=7.1，并加入环境变量。

命令行示例：

php bat_trans.php -c=执行方式 -t=[类型] -f=[文件]

```bash
cd /d E:\stay_check_lte3\lte3\AdminLTE\AdminLTE-3.x
php bat_trans.php -c=start>trans.log
```

| -c 参数 | 说明 |
| ------ | ------ |
|backup | 运行并备份|
|start |  执行任务|
|restore| 还原更改，backup 后使用|
|test |   测试替换|
|debug |  调试输出|
|help |   帮助|

-t 参数
处理类型：传递，则仅对该类型文件翻译，值有：html、js、docs_md、docs_html、docs_yml。

-f 参数：
文件名：传递，则仅对该文件翻译。

- AdminLTE 3 文档使用了 Ruby jekyll

如果有需要本地配置的，参见 [Ruby jekyll 安装][4]。

- 已知不同于官方的内容

文档链接地址，谷歌字体使用本地，及插件使用中文展示、其他版本文档地址等。
如果你不需要这些，在字典中删除相应项，并重新生成，即可。

**dict.txt**

/AdminLTE/AdminLTE-3.x/docs

/AdminLTE/AdminLTE-3.x/dist/css/google.css

/AdminLTE/AdminLTE-3.x/plugins/datatables/Chinese.json

jsgrid/i18n/jsgrid-zh-cn.js

/plugins/fullcalendar/locales/zh-cn.js

**docs_dict.txt**

/AdminLTE/AdminLTE-3.x/dist/css/google.css

/AdminLTE/AdminLTE-2.4/

/AdminLTE/AdminLTE-2.3.11/

**/dist/css/AdminLTE.min.css**

文件改名为：adminlte.min.css


生成你的文档时，更新 docs/_config.yml，如：

baseurl: /AdminLTE/AdminLTE-3.x/docs

url: https://3vshej.cn


# 【2.x】
项目中：
bat_trans.php 为处理 html文件的程序。
dict.txt 为其字典文件。
同理，bat_trans_js.php 为处理 js文件的程序，js_dict.txt 为字典文件。

字典文件规则很简单，**奇数行**为源内容，**偶数行**为翻译的内容。程序执行方式很简单，只将，**奇数行**内容替换为**偶数行**内容。

举例：
```html
<title>AdminLTE 2 | Dashboard</title>
<title>AdminLTE 2 | 仪表盘</title>
```
像这种形式，程序会先搜索是否存在内容，存在则替换，不存在，判断下一个。
找到，
```html
<title>AdminLTE 2 | Dashboard</title>
```
直接替换为
```html
<title>AdminLTE 2 | 仪表盘</title>
```

对于单词，只是一个单词，那么，你编辑词典时，要注意了，这个单词，要向后放，否则会造成，某些特殊项被替换掉。另外，对于单词的替换规则，是**完全匹配**，注意是**完全匹配**。

同理，js 文件的替换也是这样。不同处是筛选的文件类型不同，使用的字典文件不同。



好了，就这些。

----------

你可以在本项目分支中找到，也可以直接访问地址：

https://gitee.com/3Vshej/AdminLTE_CN/releases

或者，线上查看：
http://3vshej.cn/AdminLTE/

----------

对了，如果你使用 Apache，执行程序时，你需要修改 Apache 配置项，增加或编辑，
```html
Timeout  86400
```

即，超时时间为 1天。


[1]: https://github.com/wangyouworld/AdminLTE_CN/releases
[2]: https://adminlte.io/
[3]: https://3vshej.cn/AdminLTE/
[4]: https://ramble.3vshej.cn/ruby-jekyll-install
[5]: https://docs.astro.build/zh-cn/getting-started/
