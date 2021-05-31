<?php

/**
 * 通过字典对 AdminLTE 文档进行替换操作
 * <p>字典文件，建议使用标签替换方式，而不是使用英文替换方式，因为，仅词句方式 容易造成 HTML 替换异常</p>
 * <p>字典文档，奇数行为源内容，偶数行为目标内容</p>
 * <p>即将奇数行翻译为偶数行的内容</p>
 * @author     wangyouworld
 * @copyright  Copyright (c) 2021, 3Vshej
 * @link       https://3vshej.cn/
 * @version    2.4
 */
class Trans
{

    /**
     * 未找到
     */
    const ERR_NOT_FOUND = '-99';

    /**
     * 待处理文件不存在
     */
    const ERR_FILE_NOT_FOUND = '-1';

    /**
     * 待处理文件不可读
     */
    const ERR_FILE_NOT_READONLY = '-2';

    /**
     * 读取文件失败
     */
    const ERR_FILE_READ = '-3';

    /**
     * 备份文件失败
     */
    const ERR_FILE_BACKUP = '-4';

    /**
     * 删除备份时失败
     */
    const ERR_FILE_DEL_BACKUP = '-5';

    /**
     * 写入文件失败
     */
    const ERR_FILE_WRITE = '-6';

    /**
     * 无法恢复文件
     */
    const ERR_FILE_RESTORE = '-10';

    /**
     * 无法恢复文件
     */
    const ERR_FILE_EMPTY_DICT = '-11';

    /**
     * 测试跳过
     */
    const FILE_SKIP = '-100';

    /**
     * 换行符
     */
    public $BR;

    /**
     * 字典文件
     */
    public $dictFile;

    /**
     * 待处理的扩展名，多个用,分隔
     */
    public $extFile;

    /**
     * 忽略的目录，多个用,分隔
     */
    public $ignorePath;

    /**
     * 备份扩展名
     */
    public $backupExt;

    /**
     * 锁文件
     */
    public $lockFile;

    /**
     * 运行目录
     */
    public $baseDir;

    /**
     * 是否 CLI
     */
    public $isCli;

    /**
     * 类初始化
     * <p>$param 参数有：<p>
     * <p>dictFile   字典文件地址<p>
     * <p>extFile    待处理的扩展名，多个用,分隔<p>
     * <p>ignorePath 忽略的目录，多个用,分隔<p>
     * @param array $param 参数数组（或字典文件地址）
     * @return boolean
     */
    public function __construct($param = [])
    {
        $this->isCli = substr(php_sapi_name(), 0, 3) == 'cli';
        $this->BR    = $this->isCli ? PHP_EOL : '<BR />';
        $this->setConf($param);
        $this->baseDir = __DIR__;

        return true;
    }

    /**
     * 填充文件名
     * <p>前缀是 .，则地址前加当前路径</p>
     * @param string $fileName 文件地址
     * @return string 文件名
     */
    public function fillFileName($fileName = '')
    {
        if (empty($fileName)) {
            return '';
        }
        if (substr($fileName, 0, 1) == '.') {
            return $this->baseDir.substr($fileName, 1);
        }

        return $this->baseDir.$fileName;
    }

    /**
     * 设置配置信息
     * @param array $param 参数数组
     * @return boolean
     */
    public function setConf($param)
    {
        $this->dictFile   = isset($param['dictFile']) ? $param['dictFile'] : './dict.txt'; // 字典文件
        $this->extFile    = isset($param['extFile']) ? $param['extFile'] : '.html';        // 待处理的扩展名，多个用,分隔
        $this->ignorePath = isset($param['ignorePath']) ? $param['ignorePath'] : '';       // 忽略的目录，多个用,分隔
        $this->dictFile   = $this->fillFileName($this->dictFile);
        $this->backupExt  = '.bak';                  // 备份文件扩展名
        $this->lockFile   = $this->dictFile.'.lock'; // 锁文件名
        $this->extFile    = ! is_array($this->extFile) ? explode(
            ',',
            $this->extFile
        ) : ($this->extFile ?: []);
        $this->ignorePath = ! is_array($this->ignorePath) ? explode(
            ',',
            $this->ignorePath
        ) : ($this->ignorePath ?: []);

        return true;
    }

    /**
     * 运行时间计时
     * @return float
     */
    public function startRunTime()
    {
        $mtime1 = explode(" ", microtime());

        return $mtime1[1] + $mtime1[0];
    }

    /**
     * 获取运行时间
     * @param float $start 计时开始时间
     * @param int $s 保留小数位
     * @return float 单位秒
     */
    public function runTime($start, $s = 4)
    {
        $mtime2  = explode(" ", microtime());
        $endTime = $mtime2[1] + $mtime2[0];

        return round($endTime - $start, $s);
    }

    /**
     * 解析文件
     * @param string|array $dictFile 字典文件名或内容
     * @param string $method 生成摘要方式
     * @return array
     */
    public function parserDict($dictFile = '', $method = 'crc32')
    {
        static $dictList;
        $fileMd5 = '_'.hash($method, 'dict');
        if ( ! is_array($dictFile)) {
            $fileMd5 = '_'.hash($method, $dictFile);
            if (isset($dictList[$fileMd5])) {
                return $dictList[$fileMd5];
            }
            $tmp = file($dictFile);
            if ( ! $tmp) {
                return ['status' => false, 'msg' => "{$dictFile} 字典文件内容为空！"];
            }
        } else {
            if (isset($dictList[$fileMd5])) {
                return $dictList[$fileMd5];
            }
            $tmp = &$dictFile;
        }
        $tmp  = array_map('rtrim', $tmp);
        $list = [];
        foreach ($tmp as $key => $val) {
            $ikey = ($key == 0) ? 0 : $key - 1;
            if ($key == 0) {
                if (empty($val)) {
                    continue;
                }
                $list[$ikey] = [
                    'id'  => $val,
                    'val' => isset($tmp[$key + 1]) ? $tmp[$key + 1] : '',
                    'len' => strlen($val),
                ];
            } else {
                if ($key % 2 == 0) {
                    $list[$ikey] = [
                        'id'  => $val,
                        'val' => $tmp[$key + 1],
                        'len' => strlen($val),
                    ];
                }
            }
        }
        $check = $newList = $log = [];
        foreach ($list as $val) {
            $md5 = '_'.hash($method, $val['id']);
            if ( ! isset($check[$md5])) {
                $newList[] = $val;
            } else {
                $log[] = htmlentities($val['id']).' 存在重复的项。'.$this->BR;
            }
        }
        if ( ! empty($log)) {
            return ['status' => false, 'msg' => '存在重复的项', 'log' => $log];
        }
        if (empty($list)) {
            return ['status' => false, 'msg' => '字典文件内容是空的'];
        }
        // 字典按长度从大到小排序
        $list               = $this->arraySort($list, 'len', "desc");
        $dictList[$fileMd5] = [
            'status' => true,
            'msg'    => '字典解析成功',
            'list'   => $list,
        ];

        return $dictList[$fileMd5];
    }

    /**
     * 判断给定目录是否在忽略目录中
     * @param string $path 源路径
     * @param string $ignorePath 忽略的路径
     * @return boolean
     */
    public function isIgnorePath($path, $ignorePath)
    {
        // 目录标准化处理
        $path = str_replace(['/', chr(92)], DIRECTORY_SEPARATOR, $path);
        $path = str_replace($this->baseDir, '', $path);
        // 判断最后一字符是否为目录分隔符
        if (in_array(substr($path, -1), ['/', chr(92)])) {
            $path = substr($path, 0, strlen($path) - 1);
        }
        $ignorePath = ! is_array($ignorePath) ? explode(
            ',',
            $ignorePath
        ) : ($ignorePath ?: []);
        if (empty($path) || empty($ignorePath)) {
            return false;
        }
        $pathLen = strlen($path);
        foreach ($ignorePath as $v) {
            if (empty($v)) {
                continue;
            }
            // 目录标准化处理
            $v = str_replace(['/', chr(92)], DIRECTORY_SEPARATOR, $v);
            // 判断最后一字符是否为目录分隔符
            if (in_array(substr($v, -1), ['/', chr(92)])) {
                $v = substr($v, 0, strlen($v) - 1);
            }
            $len = strlen($v);
            if (strlen($len) > $pathLen) {
                return false;
            }
            if ($path == $v) {
                return true;
            }
        }

        return false;
    }

    /**
     * 返回指定目录下的文件
     * @param string $dir 目录名
     * @param boolean $rec 是否递归
     * @param string $ext 筛选扩展名 多个扩展名使用,号分隔
     * @param string $ignorePath 忽略的目录 多个用,分隔
     * @return array
     */
    public function treeFile(
        $dir = '',
        $rec = false,
        $ext = '',
        $ignorePath = ''
    ) {
        $list = [];
        $dir  = ($dir == '') ? dirname(__FILE__) : $dir;
        if ( ! is_dir($dir)) {
            return [];
        }
        $link = opendir($dir);
        while (false !== ($file = readdir($link))) {
            if ($file != '.' && $file != '..') {
                $path = $dir.DIRECTORY_SEPARATOR.$file;
                if ($rec && is_dir($path)) {
                    // 判断忽略的目录
                    if ($this->isIgnorePath($path, $ignorePath)) {
                        continue;
                    }
                    $list = array_merge(
                        $list,
                        $this->treeFile($path, $rec, $ext, $ignorePath)
                    );
                } else {
                    if ( ! empty($ext)) {
                        if (in_array(strrchr($file, '.'), (array) $ext)) {
                            $list[] = $path;
                        }
                    } else {
                        $list[] = $path;
                    }
                }
            }
        }
        closedir($link);

        return $list;
    }

    /**
     * 恢复文件
     * @param string $dir 待恢复目录
     * @param string $ignorePath 忽略的目录
     * @param string $fileName 待恢复文件
     * @return array 用时
     */
    public function restoreFile($dir = '', $ignorePath = '', $fileName = '')
    {
        $runtime = $this->startRunTime();
        if ($fileName) {
            $list = [realpath($dir.DIRECTORY_SEPARATOR.$fileName.$this->backupExt)];
        } else {
            $list = $this->treeFile(
                $dir,
                true,
                [$this->backupExt],
                $ignorePath
            );
        }
        $log        = [];
        $yes        = $no = 0;
        $baseDirLen = strlen(__DIR__);
        $log[]      = $this->BR.$this->BR.'文件数：'.count($list).$this->BR;
        foreach ($list as $file) {
            $aTime = $this->startRunTime();
            $ext   = strrchr($file, '.');
            if ($ext != $this->backupExt) {
                continue;
            }
            $len     = strlen($ext);
            $newFile = substr($file, 0, strlen($file) - $len);
            $log[]   = substr($file, $baseDirLen);
            $bTime   = $this->runTime($aTime);
            if (rename($file, $newFile)) {
                $yes   += 1;
                $log[] = " [成功] [{$bTime}s]";
            } else {
                $no    += 1;
                $log[] = " [失败] [".$this->getErr(self::ERR_FILE_RESTORE).']';
            }
            $log[] = $this->BR;
        }
        $endTime = $this->runTime($runtime);
        $log[]   = <<<EOT
        {$this->BR}{$this->BR}
        成功数：{$yes}，失败数：{$no}，{$this->BR}
        总耗时：{$endTime}s。
EOT;

        return ['status' => true, 'msg' => '恢复完成', 'log' => $log];
    }

    /**
     * 二维数组排序
     * @param array $array 二维数组
     * @param string $key 键名
     * @param string $order 排序方式
     * @return array
     */
    public function arraySort($array, $key, $order = "asc")
    {
        $arrNums = $arr = [];
        foreach ($array as $k => $v) {
            $arrNums[$k] = $v[$key];
        }
        if ($order == 'asc') {
            asort($arrNums);
        } else {
            arsort($arrNums);
        }
        foreach ($arrNums as $k => $v) {
            $arr[$k] = $array[$k];
        }

        return $arr;
    }

    /**
     * 获取错误代码的消息内容
     * @param int $errCode 错误代码
     * @return string
     */
    public function getErr($errCode = 0)
    {
        $dict = [
            self::ERR_NOT_FOUND         => [
                'id'   => self::ERR_NOT_FOUND,
                'name' => '未找到',
            ],
            self::ERR_FILE_NOT_FOUND    => [
                'id'   => self::ERR_FILE_NOT_FOUND,
                'name' => '待处理文件不存在',
            ],
            self::ERR_FILE_NOT_READONLY => [
                'id'   => self::ERR_FILE_NOT_READONLY,
                'name' => '待处理文件不可读',
            ],
            self::ERR_FILE_READ         => [
                'id'   => self::ERR_FILE_READ,
                'name' => '读取文件失败',
            ],
            self::ERR_FILE_BACKUP       => [
                'id'   => self::ERR_FILE_BACKUP,
                'name' => '备份文件失败',
            ],
            self::ERR_FILE_DEL_BACKUP   => [
                'id'   => self::ERR_FILE_DEL_BACKUP,
                'name' => '删除备份时失败',
            ],
            self::ERR_FILE_WRITE        => [
                'id'   => self::ERR_FILE_WRITE,
                'name' => '写入文件失败',
            ],
            self::ERR_FILE_RESTORE      => [
                'id'   => self::ERR_FILE_RESTORE,
                'name' => '无法恢复文件',
            ],
            self::ERR_FILE_EMPTY_DICT   => [
                'id'   => self::ERR_FILE_EMPTY_DICT,
                'name' => '字典文件是空的',
            ],
            self::FILE_SKIP             => [
                'id'   => self::FILE_SKIP,
                'name' => '测试跳过',
            ],
        ];

        return isset($dict[$errCode]['id']) ? $dict[$errCode]['name'] : $errCode.' 未定义错误';
    }

    /**
     * 执行替换处理
     * @param string $file 文件名
     * @param array $dict 待替换列表 id val 形式
     * @param boolean $backup 是否备份源文件
     * @return float 处理状态 小于 0 失败，否则为执行时间
     */
    public function execute($file, $dict, $backup = false)
    {
        $start = $this->startRunTime();
        if (empty($dict)) {
            return self::ERR_FILE_EMPTY_DICT;
        }
        if ( ! is_file($file)) {
            return self::ERR_FILE_NOT_FOUND;
        }
        if ( ! is_readable($file)) {
            return self::ERR_FILE_NOT_READONLY;
        }
        /**
         * 文件内容数组
         */
        $fileInfo = file($file);
        if ( ! $fileInfo) {
            return self::ERR_FILE_READ;
        }
        // 判断是否需要备份源文件
        if ($backup) {
            if ( ! copy($file, $file.$this->backupExt)) {
                return self::ERR_FILE_BACKUP;
            }
        }
        /**
         * 处理次数
         */
        $processNum = 0;
        /**
         * 新文件内容
         */
        $newFileList = [];
        /**
         * 是否找到项
         */
        $isFind = false;
        foreach ($fileInfo as $key => $li) {
            $newFileList[$key] = $li;
            foreach ($dict as $val) {
                // 字典大于内容长度，则跳过
                if (strlen($val['id']) > strlen($li)) {
                    continue;
                }
                // 未找到
                if (strpos($li, $val['id']) === false) {
                    continue;
                }
                $processNum += 1;
                $isFind     = true;
                // 判断是否是单词
                if ( ! ctype_alpha($val['id'])) {
                    // 标准内容替换
                    $li = str_replace($val['id'], $val['val'], $li);
                    // &LT; 内容转换 用于 源代码时
                    $val['id']  = str_ireplace('<', '&LT;', $val['id']);
                    $val['val'] = str_ireplace('<', '&LT;', $val['val']);
                    // 再次替换
                    $li = str_replace($val['id'], $val['val'], $li);
                } else {
                    // 完整匹配才行
                    if ($val['id'] == trim($li)) {
                        $li = str_replace(
                            $val['id'],
                            $val['val'],
                            $li
                        );
                    }
                }
                $newFileList[$key] = $li;
            }
        }
        if ($isFind) {
            try {
                $res = file_put_contents($file, $newFileList);
            } catch (Exception $e) {
                return self::ERR_FILE_WRITE;
            }
            if ($res === false) {
                if ($backup) {
                    if ( ! unlink($file.$this->backupExt)) {
                        return self::ERR_FILE_DEL_BACKUP;
                    }
                }

                return self::ERR_FILE_WRITE;
            }
        } else {
            return self::ERR_NOT_FOUND;
        }

        return $this->runTime($start);
    }

    /**
     * 返回支持的命令列表
     * @param string $command 命名名
     * @return array|string
     */
    public function getCommandList($command = '')
    {
        static $dict;
        if (is_null($dict)) {
            $dict = [
                'backup'  => '运行并备份',
                'start'   => '执行任务',
                'restore' => '还原更改，backup 后使用',
                'test'    => '测试替换',
                'debug'   => '调试输出',
                'help'    => '帮助',
            ];
        }

        return isset($dict[$command]) ? $dict[$command] : $dict;
    }

    /**
     *  验证命令是否被支持
     * @param string $command
     * @return array
     */
    public function checkCommand($command = '')
    {
        if (is_array($this->getCommandList($command))) {
            return ['status' => false, 'msg' => "不支持【{$command}】该操作"];
        }

        return ['status' => true, 'msg' => "支持【{$command}】操作"];
    }

    /**
     * 返回可打印形式的命令使用说明
     * @param string $split 分隔符，默认 \t
     * @return string
     */
    public function getPrintCommandStr($split = "\t")
    {
        $print = [];
        foreach ($this->getCommandList() as $key => $val) {
            $print[] = "{$key}{$split}{$val}";
        }

        return implode($this->BR, $print);
    }

    /**
     * 开始执行任务
     * @param string $command 命令
     * @param string $runPath 操作目录 为空使用当前
     * @param string $fileName 文件名，存在，则仅处理该文件
     * @return array status true 成功
     */
    public function run($command = 'start', $runPath = '', $fileName = '')
    {
        $log     = [];
        $runtime = $this->startRunTime();
        // 自定义操作路径
        $runPath    = empty($runPath) ? __DIR__ : realpath($runPath);
        $baseDirLen = strlen($runPath);
        if ( ! $fileName && is_file($this->lockFile)) {
            return ['status' => false, 'msg' => "内容已经生成！重新生成，你需要删除 {$this->lockFile} 文件！"];
        }
        // 数据还原
        if ($command == 'restore') {
            return $this->restoreFile($runPath, $this->ignorePath, $fileName);
        }
        // 解析字典
        $dict = $this->parserDict($this->dictFile);
        if ( ! $dict['status']) {
            return $dict;
        }
        $dict = $dict['list'];
        if ($fileName) {
            $fileList = [realpath($runPath.DIRECTORY_SEPARATOR.$fileName)];
        } else {
            // 获取目录下指定文件
            $fileList = $this->treeFile(
                $runPath,
                true,
                $this->extFile,
                $this->ignorePath
            );
        }
        // 调试
        if ($command == 'debug') {
            $i     = 0;
            $log[] = "{$runPath}{$this->BR}";
            foreach ($dict as $v) {
                $i     += 1;
                $log[] = $i.' - 长度：'.$v['len'].$this->BR;
                $log[] = htmlentities($v['id']).$this->BR.htmlentities(
                        $v['val']
                    ).$this->BR.$this->BR;
            }
            $endTime = $this->runTime($runtime);
            $log[]   = "耗时：{$endTime}s。";

            return ['status' => true, 'msg' => '测试数据展示', 'log' => $log];
        }
        $yes     = $no = $notFoundNum = 0;
        $fileSum = count($fileList);
        $log[]   = $this->BR.$this->BR.'文件数：'.count($fileList).$this->BR;
        foreach ($fileList as $line => $file) {
            $line += 1;
            echo substr($file, $baseDirLen), "[{$line}/{$fileSum}]", $this->BR;
            /**
             * 执行状态
             */
            $executeStatus = 0;
            // 判断是否备份源文件
            if ($command != 'test') {
                $executeStatus = $this->execute(
                    $file,
                    $dict,
                    $command == 'backup'
                );
            }
            $log[] = substr($file, $baseDirLen);
            if ($executeStatus > 0) {
                $yes   += 1;
                $log[] = " [成功] [{$executeStatus}s]";
            } else {
                if ($executeStatus == self::ERR_NOT_FOUND) {
                    $notFoundNum += 1;
                    $log[]       = " [".$this->getErr($executeStatus).']';
                } else {
                    $no    += 1;
                    $log[] = " [失败] [".$this->getErr($executeStatus).']';
                }
            }
            $log[] = $this->BR;
        }
        try {
            file_put_contents($this->lockFile, '');
        } catch (Exception $e) {
            return ['status' => false, 'msg' => $e->getMessage()];
        }
        $endTime = $this->runTime($runtime);
        $log[]   = <<<EOT
        {$this->BR}{$this->BR}
        成功数：{$yes}，失败数：{$no}，未找到：{$notFoundNum}{$this->BR}
        总耗时：{$endTime}s。
EOT;

        return ['status' => true, 'msg' => '执行成功', 'log' => $log];
    }

    /**
     * 获取命令行、浏览器参数
     * <p>-c --command 执行命令</p>
     * <p>-f --type 类型</p>
     * <p>-f --file 使用文件</p>
     * @return array
     */
    public function parseCommandParam()
    {
        if ($this->isCli) {
            $tmp = getOpt('c:t::f::', ['command:', 'type::', 'file::']);
        } else {
            $tmp = $_GET;
        }

        return [
            'command' => isset($tmp['c']) ? $tmp['c']
                : (isset($tmp['command']) ? $tmp['command'] : ''),
            'type'    => isset($tmp['t']) ? $tmp['t']
                : (isset($tmp['type']) ? $tmp['type'] : ''),
            'file'    => isset($tmp['f']) ? $tmp['f']
                : (isset($tmp['file']) ? $tmp['file'] : ''),
        ];
    }

}

// 定义任务配置
$jobsList = [
    // 翻译 HTML 信息
    'html'      => [
        'runPath'    => './',
        'dictFile'   => './dict.txt',
        'extFile'    => '.html',
        'ignorePath' => '/docs,/plugins',
    ],
    // 翻译 JS 信息
    'js'        => [
        'runPath'    => './',
        'dictFile'   => './dict_js.txt',
        'extFile'    => '.js',
        'ignorePath' => '/docs,/plugins,/build',
    ],
    // 翻译 文档 信息
    'docs_md'   => [
        'runPath'    => './',
        'dictFile'   => './docs_md_dict.txt',
        'extFile'    => '.md',
        'ignorePath' => '',
    ],
    // 翻译 文档页面 信息
    'docs_html' => [
        'runPath'    => './docs/',
        'dictFile'   => './docs_dict.txt',
        'extFile'    => '.html',
        'ignorePath' => '',
    ],
    // 翻译 文档 yml 信息
    'docs_yml'  => [
        'runPath'    => './docs/',
        'dictFile'   => './docs_yml_dict.txt',
        'extFile'    => '.yml',
        'ignorePath' => '',
    ],
];
$jobsKeys = implode('、', array_keys($jobsList));
// 设置永不超时
set_time_limit(0);
// 初始化类
$trans = new Trans(['ignorePath' => 'build,plugins']);
// 非 CLI 方式下 发送头
if ( ! $trans->isCli) {
    header("Content-type: text/html; charset=utf-8");
}
/**
 * 当前执行命令
 */
$inputParam     = $trans->parseCommandParam();
$command        = $inputParam['command'];
$commandListStr = implode('|', array_keys($trans->getCommandList()));
$commandLineStr = $trans->getPrintCommandStr();
if ( ! $command || $command == 'help') {
    echo <<<EOT
需要额外参数，浏览器使用请传递 command 参数。{$trans->BR}
命令行示例：{$trans->BR}
php bat_trans.php -c=<backup|start|restore|test|debug|help> -t=[类型] -f=[文件]{$trans->BR}

浏览器请求示例：{$trans->BR}
http://localhost/bat_trans.php?command=<{$commandListStr}>&type=[类型]&file=[文件名]{$trans->BR}

参数说明：{$trans->BR}
{$commandLineStr}

类型：传递，则仅对该类型文件翻译，值有：{$jobsKeys}。

文件：传递，则仅对该文件翻译。

EOT;
    exit(0);
}
$res = $trans->checkCommand($command);
if ( ! $res['status']) {
    echo $res['msg'], $trans->BR;
    exit(0);
}
$baseDir = dirname(__FILE__);
$runtime = $trans->startRunTime();
foreach ($jobsList as $jobType => $param) {
    echo '开始处理 ', $jobType, '文件……', $trans->BR;
    // 设置任务参数
    $trans->setConf($param);
    if ($inputParam['type']) {
        if ($inputParam['type'] == $jobType) {
            $res = $trans->run(
                $command,
                $param['runPath'],
                $inputParam['file']
            );
            if ($res['status']) {
                echo implode('', $res['log']);
            } else {
                echo $res['msg'];
            }
            echo $trans->BR, $trans->BR;
            break;
        }
    } else {
        $res = $trans->run($command, $param['runPath']);
        if ($res['status']) {
            echo implode('', $res['log']);
        } else {
            echo $res['msg'];
        }
        echo $trans->BR, $trans->BR;
    }
}
$endTime = $trans->runTime($runtime);
echo "累计耗时：{$endTime}s。", $trans->BR;
