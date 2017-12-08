# 欢迎使用 AdminLTE 文档！

> * 翻译采用第三方翻译工具和人工复核的方式进行。
> * 目前已经完成，AdminLTE-2.3.11、2.4.2 翻译工作。

----------
当然，你也可以参与其中：

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

https://github.com/wangyouworld/AdminLTE_CN/releases

或者，线上查看：
http://3vshej.cn/AdminLTE/

----------

对了，如果你使用 Apache，执行程序时，你需要修改 Apache 配置项，增加或编辑，
```html
Timeout  86400
```

即，超时时间为 1天。
