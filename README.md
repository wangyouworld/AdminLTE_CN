# 欢迎使用 AdminLTE 文档！

> * 翻译采用第三方翻译工具和人工复核的方式进行。
> * 尽可能的信、达、雅； 但由于英文水平有限，翻译内容会偏离原内容。
> * 目前已经完成，AdminLTE-2.3.11、2.4.x、3.x 翻译工作。

----------

你可以直接在[发布页][1]下载文档。目录结构与[官方][2]提供的一致。
也可以直接在[演示页][3]查看。

----------
当然，你也可以参与其中（请邮件：ramble **AT** 3vshej.cn）：

#【3.x】
该版本有很大变化，因此，PHP 处理程序也做了很大调整。
但**字典格式与 2.x 一样**。

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
| run_path | 运行目录 |
| dict_file | 字典文件名 |
| ext_file | 待处理的文件扩展名 |
| ignore_path | 忽略的目录 |

```php
// 设置永不超时
set_time_limit(0);

// 判断是否 CLI 方式
$is_cli = substr(php_sapi_name(), 0, 3) == 'cli' ? TRUE : FALSE;

// 非 CLI 方式下 发送头
if (!$is_cli) header("Content-type: text/html; charset=utf-8");

// 定义任务配置
$jobs_list = [
    'HTML' => ['run_path' => './', 'dict_file' => './dict.txt', 'ext_file' => '.html', 'ignore_path' => '/docs,/plugins'],
    'JS' => ['run_path' => './', 'dict_file' => './dict_js.txt', 'ext_file' => '.js', 'ignore_path' => '/docs,/plugins,/build'],
    'docs_md' => ['run_path' => './', 'dict_file' => './docs_md_dict.txt', 'ext_file' => '.md', 'ignore_path' => ''],
    'docs_html' => ['run_path' => './docs/', 'dict_file' => './docs_dict.txt', 'ext_file' => '.html', 'ignore_path' => ''],
    'docs_yml' => ['run_path' => './docs/', 'dict_file' => './docs_yml_dict.txt', 'ext_file' => '.yml', 'ignore_path' => ''],
];

// 初始化类
$trans = new Transer(['ignore_path' => 'docs,plugins']);

$command = $is_cli ? (isset($argv[1]) ? $argv[1] : '') : (isset($_GET['command']) ? $_GET['command'] : '');
if (empty($command)) die("需要额外参数 backup、start、restore、debug。浏览器使用请传递 command 参数。");

foreach ($jobs_list as $param) {
    // 设置任务参数
    $trans->setConf($param);

    // 开始执行
    // 参数有 backup start restore debug
    $res = $trans->startRun($command, $param['run_path']);

    if ($res['status']) {
        echo implode('', $res['log']);
    } else {
        echo $res['msg'];
    }
    echo $trans->BR.$trans->BR;
}
```

GET 方式：
为项目目录绑定域名，并通过域名访问：
```html
/bat_trans.php?command=start
```

命令行方式：
需要 PHP 环境，建议 <=7.1，并加入环境变量。
```bash
cd /d E:\stay_check_lte3\lte3\AdminLTE\AdminLTE-3.x
php bat_trans.php start>trans.log
```

| 参数 | 说明 |
| ------ | ------ |
| start | 执行替换操作 |
| backup | 执行替换并备份源文件 |
| restore | 还原备份的文件 |
| debug | 调试 |


- AdminLTE 3 文档使用了 Ruby jekyll

如果有需要本地配置的，参见 [Ruby jekyll 安装][4]。

- ionicframework CSS 使用了国内源

ionicframework 替换为了 bootcss。
在 dict.txt 中搜索 ionicframework.com 以进行移除。（**移除所在奇数行与偶数行**）

- google 字典使用了本地数据

在 dict.txt 中搜索 googleapis.com 以进行移除。（**移除所在奇数行与偶数行**）

- 演示页面、文档某些链接替换到了本地文件

- 表格、日历、编辑器插件直接使用本地语言


  [1]: https://github.com/wangyouworld/AdminLTE_CN/releases
  [2]: https://adminlte.io/
  [3]: https://3vshej.cn/AdminLTE/
  [4]: https://ramble.3vshej.cn/ruby-jekyll-install