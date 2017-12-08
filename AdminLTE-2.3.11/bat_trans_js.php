<?php
/*
 * 通过字典对AdminLTE文档进行替换操作
 * 字典文件，建议使用标签替换方式，而不是使用英文替换方式，因为，仅词句方式 容易造成 HTML 替换异常
 * 字典文档，奇数行为源内容，偶数行为目标内容
 * 即将奇数行翻译为偶数行的内容
 *
 *
 * === Calendar 类问题，它只是简单的词，但要翻译，并且，标签中还包含这个词 ===
 * === 似乎现在的翻译是按行翻译的，那么，整行匹配到才会替换。 ===
 * === 但某些特殊的东西，并不是按行来匹配的，而是按段，即行中的少部分或者大部分 ===

 * 1、完全相似 ，则按行替换
 * 2、像这种如何替换 <a href="widgets.html">
 * 3、使用 strip_tags  过滤掉 HTML 标签？
 * TODO 2017-07-20 周四 最后确定方案
 * ==== 这样，使用2种方式替换，一种部分匹配，可全文替换形式 ====
 * ==== 一种全字匹配，按行全字匹配替换 ====
 * === 优先使用全字匹配，之后，使用按行匹配 ===
 * === 全字匹配先strip_tags后，再匹配？ ===
 *
 * 示例：
 * 1、<small>Preview page</small>
 * 2、<small>$$DATA$$</small>
 * 3、strip_tags
 * 4、结果是否与匹配词相同，相同则替换
 * 不相同，按行匹配方案处理匹配
*/

set_time_limit(0);
$runtime = startRunTime();
header("Content-type: text/html; charset=utf-8");
$lock_file = './js.lock'; // 锁文件名
$dict_file = './js_dict.txt'; // 字典文件
$ext_file = '.js'; // 待处理文件扩展名

if (is_file($lock_file)) die("内容已经生成，重新生成，你需要删除 <b>{$lock_file}</b> 文件！");

if (!is_file($dict_file)) die("<b>{$file}</b> 字典文件不存在！");

$dict = file($dict_file);
if (empty($dict))  die("<b>{$dict_file}</b> 字典文件内容为空！");
// restoreFile(dirname(__FILE__));
// die();
$filelist = treeFile(dirname(__FILE__), TRUE, $ext_file);

$dict = parserDict($dict);

/*
echo '<pre>';
print_r($dict);
echo '</pre>';
die();
*/

$yes = $no = $not_found = 0;

echo '<hr />文件数：'.count($filelist).'<br />';
foreach ($filelist as $file) {
    $t = oper($file, $dict, FALSE);
    // $t = -100;
    echo $file;
    if ($t > 0) {
        $yes += 1;
        echo " 【成功】 [{$t}s]";
    } else if ($t == 0) {
        $not_found += 1;
        echo " [".getErr($t).']';
    } else {
        $no += 1;
        echo " 【<b>失败</b> 】 [".getErr($t).']';
    }
    echo '<br />';
}
file_put_contents($lock_file, '');
$endtime = runTime($runtime);
echo <<<EOT
<hr />
成功数：{$yes}，失败数：{$no}，未找到：{$not_found}<br />
总耗时：{$endtime}s。
EOT;

/*
* 解析文件
* @param array $tmp 待解析 file() 后的数据
* @return array
*/
function parserDict($tmp) {
    $tmp = array_map('rtrim', $tmp);
    $list = ARRAY();

    foreach ($tmp as $key => $val) {
        $ikey = ($key == 0) ? 0 : $key-1;
        if ($key == 0) {
            $list[$ikey] = ARRAY('id' => $val, 'val' => $tmp[$key+1]);
        } else {
            if ($key % 2 == 0) {
                $list[$ikey] = ARRAY('id' => $val, 'val' => $tmp[$key+1]);
            }
        }
    }

    foreach ($list as $key => $val) {
        // 移除相同内容的项
        if ($val['id'] == $val['val']) unset($list[$key]);
    }

    return $list;
}

/*
 * 恢复文件
 * @param string $dir 待恢复目录
 * @param string $ext 待恢复的源扩展名
 * @return float 用时
*/
function restoreFile($dir='', $ext='.html') {
    $s = startRunTime();
    $s_ext = '.althtml';
    if ($ext == '.js') $s_ext = '.altjs';
    $s_ext_len = strlen($s_ext);
    $list = treeFile($dir, TRUE, $s_ext);
    foreach ($list as $file) {
        $newfile = substr($file, 0, strlen($file) - $s_ext_len).$ext;
        if (!rename($file, $newfile)) return -10;
    }
    return runTime($s);
}

/*
* 返回指定目录下的文件
* @param string $dir 目录名
* @param boolean $rec 是否递归
* @param string 筛选扩展名 多个扩展名使用,号分隔
* @return array
*/
function treeFile($dir='', $rec=FALSE, $ext='') {
    $list = ARRAY();
    $dir = ($dir == '') ? dirname(__FILE__) : $dir;
    if (!is_dir($dir)) return ARRAY();

    $link = opendir($dir);
    while (FALSE !== ($file = readdir($link))) {
        if ($file != '.' && $file != '..') {
            $path = $dir.DIRECTORY_SEPARATOR.$file;
            if ($rec && is_dir($path)) {
                $list = array_merge($list, treeFile($path, $rec, $ext));
            } else {

                if (!empty($ext)) {
                    $extArr = explode(',', $ext);
                    if (in_array(strrchr($file, '.'), $extArr)) $list[] = $path;
                } else {
                    $list[] = $path;
                }
            }
        }
    }
    closedir($link);
    return $list;
}

function getErr($id=0) {
    $dict = ARRAY(
        '0' => ARRAY('id' => '0', 'name' => '未找到'),
        '-1' => ARRAY('id' => '-1', 'name' => '待处理文件不存在'),
        '-2' => ARRAY('id' => '-2', 'name' => '待处理文件不可读'),
        '-3' => ARRAY('id' => '-3', 'name' => '读取文件失败'),
        '-4' => ARRAY('id' => '-4', 'name' => '备份文件失败'),
        '-5' => ARRAY('id' => '-5', 'name' => '删除备份时失败'),
        '-6' => ARRAY('id' => '-6', 'name' => '写入文件失败'),
        '-10' => ARRAY('id' => '-10', 'name' => '无法恢复文件'),
        '-100' => ARRAY('id' => '-100', 'name' => '功能临时关闭'),

    );
    return isset($dict[$id]['id']) ? $dict[$id]['name'] : $id.' 未定义错误';
}

/*
* 执行替换处理
* @param string $file 文件名
* @param array $dict 待替换列表 id val 形式
* @param boolean 是否备份源文件
* return float 执行时间 -1 表示失败
*/
function oper($file, $dict, $backup = FALSE) {


    $start = startRunTime();
    if (!is_file($file)) return -1;
    if (!is_readable($file)) return -2;

    $fileinfo = file($file);
    $fileinfo = array_map('rtrim', $fileinfo);
    if (empty($fileinfo)) return -3;

    $ext = strrchr($file, '.');
    $s_ext = '.althtml';
    if ($ext == '.js') $s_ext = '.altjs';

    if ($backup) {
        $newfile = substr($file, 0, strlen($file) - strlen($ext)).$s_ext;
        if (!copy($file, $newfile)) return -4;
    }

    $num = 0;
    $newFile = ARRAY();
    $isFind = FALSE;
    foreach ($fileinfo as $key => $li) {
        $newFile[$key] = $li.PHP_EOL;

        foreach ($dict as $val) {
            if (stripos($li, $val['id']) === FALSE) continue;
            $isFind = TRUE;

            // 判断是否是单词
            if (!ctype_alpha($val['id'])) {
                // 标准内容替换
                $li = str_ireplace($val['id'], $val['val'], $li);
                // &LT; 内容转换 用于 源代码时
                $val['id'] = str_ireplace('<', '&LT;', $val['id']);
                $val['val'] = str_ireplace('<', '&LT;', $val['val']);
                // 再次替换
                $li = str_ireplace($val['id'], $val['val'], $li);
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
    return runTime($start);
}

/*
 * 运行时间计时
 * @return float
*/
function startRunTime() {
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
function runTime($start, $s=4) {
    $mtime2 = explode(" ", microtime());
    $endtime = $mtime2[1] + $mtime2[0];
    return round($endtime - $start, $s);
}
?>
