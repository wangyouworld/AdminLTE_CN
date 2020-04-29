<?php
/*
 * 通过字典对 AdminLTE 文档进行替换操作
 * 字典文件，建议使用标签替换方式，而不是使用英文替换方式，因为，仅词句方式 容易造成 HTML 替换异常
 * 字典文档，奇数行为源内容，偶数行为目标内容
 * 即将奇数行翻译为偶数行的内容
 *
 * @author		wangyouworld
 * @copyright	Copyright (c) 2020, 3Vshej
 * @link		https://3vshej.cn/
 * @since		Version 2.0
*/
class Transer {

    public $BR; // 换行符
    public $dict_file; // 字典文件
    public $ext_file; // 待处理的扩展名，多个用,分隔
    public $ignore_path; // 忽略的目录，多个用,分隔
    public $backup_ext; // 备份扩展名
    public $lock_file; // 锁文件
    public $base_dir; // 运行目录

    /*
    * 类初始化
    * @param array $param 参数数组
    * @param string || array $dict_file 字典文件或配置项
    * @param string $ext_file 待处理的扩展名
    * @param string $ignore_path 忽略的目录
    * @return boolean
    */
    public function __construct($param='') {
        $this->BR = substr(php_sapi_name(), 0, 3) == 'cli' ? PHP_EOL : '<BR />';
        $this->setConf($param);
        $this->base_dir = __DIR__;
        return TRUE;
    }

    /*
     * 设置配置信息
     * @param array $param 参数数组
     * @param string || array $dict_file 字典文件或配置项
     * @param string $ext_file 待处理的扩展名
     * @param string $ignore_path 忽略的目录
     * @return boolean
    */
    public function setConf($param) {

        $this->dict_file = isset($param['dict_file']) ? $param['dict_file'] : './dict.txt'; // 字典文件
        $this->ext_file = isset($param['ext_file']) ? $param['ext_file'] : '.html'; // 待处理的扩展名，多个用,分隔
        $this->ignore_path = isset($param['ignore_path']) ? $param['ignore_path'] : ''; // 忽略的目录，多个用,分隔

        $this->backup_ext = '.bak'; // 备份文件扩展名
        $this->lock_file = $this->dict_file.'.lock'; // 锁文件名

        $this->ext_file = !is_array($this->ext_file) ? explode(',', $this->ext_file) : ($this->ext_file ? $this->ext_file : []);
        $this->ignore_path = !is_array($this->ignore_path) ? explode(',', $this->ignore_path) : ($this->ignore_path ? $this->ignore_path : []);
        return TRUE;

    }

    /*
     * 运行时间计时
     * @return float
    */
    public function startRunTime() {
        $mtime1 = explode(" ", microtime());
        $startTime = $mtime1[1] + $mtime1[0];
        return $startTime;
    }

    /**
     * 获取运行时间
     * @param float $start 计时开始时间
     * @param int $s 保留小数位
     * @return float 单位秒
     */
    public function runTime($start, $s=4) {
        $mtime2 = explode(" ", microtime());
        $endtime = $mtime2[1] + $mtime2[0];
        return round($endtime - $start, $s);
    }

    /*
    * 解析文件
    * @param array $tmp 待解析 file() 后的数据
    * @return array
    */
    public function parserDict($tmp) {
        $tmp = array_map('rtrim', $tmp);
        $list = ARRAY();

        foreach ($tmp as $key => $val) {
            $ikey = ($key == 0) ? 0 : $key-1;
            if ($key == 0) {
                if (empty($val)) continue;
                $list[$ikey] = ARRAY('id' => $val, 'val' => isset($tmp[$key+1]) ? $tmp[$key+1] : '', 'len' => strlen($val));
            } else {
                if ($key % 2 == 0) {
                    $list[$ikey] = ARRAY('id' => $val, 'val' => $tmp[$key+1], 'len' => strlen($val));
                }
            }
        }

        $check = [];
        $new_list = [];
        $log = [];
        foreach ($list as $key => $val) {
            $md5 = '_'.md5($val['id']);
            if (!isset($check[$md5])) {
                $new_list[] = $val;
            } else {
                $log[] = htmlentities($val['id']).' 存在重复的项。'.$this->BR;
            }

        }
        if (!empty($log)) return ['status' => FALSE, 'msg' => '存在重复的项', 'log' => $log];
        if (empty($list)) return ['status' => FALSE, 'msg' => '字典文件内容是空的'];

        return ['status' => TRUE, 'msg' => '字典解析成功', 'list' => $list];
    }

    /*
     * 判断给定目录是否在忽略目录中
     * @param string $path 源路径
     * @param string $ignore_path 忽略的路径
     * @return boolean
    */
    public function isIgnorePath($path, $ignore_path) {
        // 目录标准化处理
        $path = str_replace(['/', chr(92)], DIRECTORY_SEPARATOR, $path);
        $path = str_replace($this->base_dir, '', $path);

        // 判断最后一字符是否为目录分隔符
        if (in_array(substr($path, -1), ['/', chr(92)])) $path = substr($path, 0, strlen($path)-1);

        $ignore_path = !is_array($ignore_path) ? explode(',', $ignore_path) : ($ignore_path ? $ignore_path : []);
        if (empty($path) || empty($ignore_path)) return FALSE;

        $path_len = strlen($path);

        foreach ($ignore_path as $k => $v) {
            if (empty($v)) continue;

            // 目录标准化处理
            $v = str_replace(['/', chr(92)], DIRECTORY_SEPARATOR, $v);

            // 判断最后一字符是否为目录分隔符
            if (in_array(substr($v, -1), ['/', chr(92)])) $v = substr($v, 0, strlen($v)-1);

            $len = strlen($v);
            if (strlen($len) > $path_len) return FALSE;
            if ($path == $v) return TRUE;
        }
        return FALSE;

    }

    /*
    * 返回指定目录下的文件
    * @param string $dir 目录名
    * @param boolean $rec 是否递归
    * @param string $ext 筛选扩展名 多个扩展名使用,号分隔
    * @param string $ignore_path 忽略的目录 多个用,分隔
    * @return array
    */
    public function treeFile($dir='', $rec=FALSE, $ext='', $ignore_path='') {
        $list = ARRAY();
        $dir = ($dir == '') ? dirname(__FILE__) : $dir;
        if (!is_dir($dir)) return ARRAY();

        $link = opendir($dir);
        while (FALSE !== ($file = readdir($link))) {
            if ($file != '.' && $file != '..') {
                $path = $dir.DIRECTORY_SEPARATOR.$file;

                if ($rec && is_dir($path)) {
                    // 判断忽略的目录
                    if ($this->isIgnorePath($path, $ignore_path)) continue;
                    $list = array_merge($list, $this->treeFile($path, $rec, $ext, $ignore_path));
                } else {

                    if (!empty($ext)) {
                        if (in_array(strrchr($file, '.'), $ext)) $list[] = $path;
                    } else {
                        $list[] = $path;
                    }
                }
            }
        }
        closedir($link);
        return $list;
    }

    /*
     * 恢复文件
     * @param string $dir 待恢复目录
     * @param string $ignore_path 忽略的目录
     * @return float 用时
    */
    public function restoreFile($dir='', $ignore_path='') {
        $runtime = $this->startRunTime();
        $list = $this->treeFile($dir, TRUE, [$this->backup_ext], $ignore_path);

        $log = [];

        $yes = $no = 0;
        $base_dir_len = strlen(__DIR__);

        $log [] = $this->BR.$this->BR.'文件数：'.count($list).$this->BR;
        foreach ($list as $file) {

            $ext = strrchr($file, '.');
            if ($ext != $this->backup_ext) continue;
            $len = strlen($ext);
            $newfile = substr($file, 0, strlen($file)-$len);

            $log [] = substr($file, $base_dir_len);

            if (rename($file, $newfile)) {
                $yes += 1;
                $log [] = " [成功] [{$t}s]";
            } else {
                $no += 1;
                $log [] = " [失败] [".$this->getErr(-10).']';
            }

            $log [] = $this->BR;

        }

        $endtime = $this->runTime($runtime);
        $log [] = <<<EOT
        {$this->BR}{$this->BR}
        成功数：{$yes}，失败数：{$no}，{$this->BR}
        总耗时：{$endtime}s。
EOT;

        return ['status' => TRUE, 'msg' => '恢复完成', 'log' => $log];
    }

    /*
     * 二维数组排序
     * @param array $array 二维数组
     * @param string $key 键名
     * @param string $order 排序方式
     * return array
    */
    public function arraySort($array, $key, $order="asc") {

        $arr_nums=$arr=array();
        foreach($array as $k=>$v) {
            $arr_nums[$k]=$v[$key];
        }

        if ($order=='asc') {
            asort($arr_nums);
        } else {
            arsort($arr_nums);
        }

        foreach($arr_nums as $k => $v) $arr[$k] = $array[$k];

        return $arr;

    }

    /*
     * 获取错误代码的消息内容
     * @param int $id 错误代码
     * @return string
    */
    public function getErr($id=0) {
        $dict = ARRAY(
            '0' => ARRAY('id' => '0', 'name' => '未找到'),
            '-1' => ARRAY('id' => '-1', 'name' => '待处理文件不存在'),
            '-2' => ARRAY('id' => '-2', 'name' => '待处理文件不可读'),
            '-3' => ARRAY('id' => '-3', 'name' => '读取文件失败'),
            '-4' => ARRAY('id' => '-4', 'name' => '备份文件失败'),
            '-5' => ARRAY('id' => '-5', 'name' => '删除备份时失败'),
            '-6' => ARRAY('id' => '-6', 'name' => '写入文件失败'),
            '-10' => ARRAY('id' => '-10', 'name' => '无法恢复文件'),
            '-11' => ARRAY('id' => '-11', 'name' => '字典文件是空的'),
            '-100' => ARRAY('id' => '-100', 'name' => '功能临时关闭'),

        );
        return isset($dict[$id]['id']) ? $dict[$id]['name'] : $id.' 未定义错误';
    }

    /*
    * 执行替换处理
    * @param string $file 文件名
    * @param array $dict 待替换列表 id val 形式
    * @param boolean 是否备份源文件
    * @return float 执行时间 -1 表示失败
    */
    public function oper($file, $dict, $backup = FALSE) {
        $start = $this->startRunTime();
        if (empty($dict)) return -11;
        if (!is_file($file)) return -1;
        if (!is_readable($file)) return -2;

        $fileinfo = file($file);
        $fileinfo = array_map('rtrim', $fileinfo);
        if (empty($fileinfo)) return -3;

        $ext = strrchr($file, '.');
        $s_ext = '.bak';

        // 判断是否需要备份源文件
        if ($backup) {
            $newfile = $file.$s_ext;
            if (!copy($file, $newfile)) return -4;
        }

        $num = 0;
        $newFile = ARRAY();
        $isFind = FALSE;
        foreach ($fileinfo as $key => $li) {
            $newFile[$key] = $li.PHP_EOL;

            foreach ($dict as $val) {
                if (strlen($val['id']) > strlen($li) || stripos($li, $val['id']) === FALSE) continue;
                $isFind = TRUE;

                // 判断是否是单词
                if (!ctype_alpha($val['id'])) {
                    // 标准内容替换
                    $li = str_replace($val['id'], $val['val'], $li);
                    // &LT; 内容转换 用于 源代码时
                    $val['id'] = str_ireplace('<', '&LT;', $val['id']);
                    $val['val'] = str_ireplace('<', '&LT;', $val['val']);
                    // 再次替换
                    $li = str_replace($val['id'], $val['val'], $li);
                    $newFile[$key] = $li.PHP_EOL;
                    $num += 1;

                } else {
                    // 没找到空格，是普通词
                    // 则完整匹配才行

                    if ($val['id'] == trim($li)) {
                        $newFile[$key] = $val['val'].PHP_EOL;
                    }

                    $num += 1;
                }

            }

        }

        if ($isFind) {
            $res = file_put_contents($file, $newFile);
            if ($res === FALSE) {
                if ($backup) {
                    if (!unlink($file)) return -5;
                }
                return -6;
            }
        } else {
            return 0;
        }
        return $this->runTime($start);

    }

    /*
     * 开始执行任务
     * @param string $command 命令 backup start restore debug
     * @param string $run_path 操作目录 为空使用当前
     * @return array
    */
    public function startRun($command='start', $run_path='') {
        $log = [];
        $runtime = $this->startRunTime();
        // 自定义操作路径
        $run_path = empty($run_path) ? __DIR__ : realpath($run_path);
        $base_dir_len = strlen($run_path);

        if (is_file($this->lock_file)) return ['status' => FALSE, 'msg' => "内容已经生成，重新生成，你需要删除 {$this->lock_file} 文件！"];

        if (!is_file($this->dict_file)) return ['status' => FALSE, 'msg' => "{$this->dict_file} 字典文件不存在！"];

        $dict = file($this->dict_file);
        if (empty($dict))  return ['status' => FALSE, 'msg' => "{$this->dict_file} 字典文件内容为空！"];

        // 数据还原
        if ($command == 'restore') return $this->restoreFile($run_path, $this->ignore_path);

        // 获取目录下指定文件
        $filelist = $this->treeFile($run_path, TRUE, $this->ext_file, $this->ignore_path);

        // 解析字典
        $dict = $this->parserDict($dict);
        if (!$dict['status']) return $dict;
        $dict = $dict['list'];

        // 字典按长度从大到小排序
        $dict = $this->arraySort($dict, 'len', $order="desc");

        // 调试
        if ($command == 'debug') {
            $i = 0;
            foreach ($dict as $v) {
                $i += 1;
                $log[] = $i.' - '.$v['len'].$this->BR;
                $log[] = htmlentities($v['id']).$this->BR.htmlentities($v['val']).$this->BR.$this->BR;
            }

            return ['status' => TRUE, 'msg' => '测试数据展示', 'log' => $log];

        }

        $yes = $no = $not_found = 0;
        $log [] = $this->BR.$this->BR.'文件数：'.count($filelist).$this->BR;
        foreach ($filelist as $file) {
            // 判断是否备份源文件
            $t = $this->oper($file, $dict, $command == 'backup' ? TRUE : FALSE);

            $log [] = substr($file, $base_dir_len);
            if ($t > 0) {
                $yes += 1;
                $log [] = " [成功] [{$t}s]";
            } else if ($t == 0) {
                $not_found += 1;
                $log [] = " [".$this->getErr($t).']';
            } else {
                $no += 1;
                $log [] = " [失败] [".$this->getErr($t).']';
            }
            $log [] = $this->BR;
        }
        file_put_contents($this->lock_file, '');
        $endtime = $this->runTime($runtime);
        $log [] = <<<EOT
        {$this->BR}{$this->BR}
        成功数：{$yes}，失败数：{$no}，未找到：{$not_found}{$this->BR}
        总耗时：{$endtime}s。
EOT;

        return ['status' => TRUE, 'msg' => '执行成功', 'log' => $log];

    }
}

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

?>