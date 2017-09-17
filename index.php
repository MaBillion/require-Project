<?php
// 总结归纳一下, 无论页面有没有数据, 都可以将其划定为有数据
// 如果没有将其设置为 /
// 那么路径就可以归纳为三种情况
// 1> 只有一个 /
// 2> / 后只有一个名字
// 3> / 后有两个名字

// 改良上面的代码
$pathInfoExists = array_key_exists('PATH_INFO', $_SERVER);
if ( $pathInfoExists ) {
	$path_info = $_SERVER[ 'PATH_INFO' ];
} else {
	$path_info = '/';
}

// 开始之前应该将开始的 / 移除 substr
$path_info = substr($path_info, 1);

// 使用 类似于 split 的方法将其 分割( explode )
$path_infos = explode('/', $path_info);
// 结果有三种情况
// [ '' ]
// [ '名字' ]
// [ '名字', '名字' ]

// 判断字符串的长度使用 strlen()
if ( strlen($path_infos[ 0 ]) == 0 ) {
	// 第一种情况, 即没有输入任何路径, 默认显示的是主页
	$path = 'index';
	$filename = 'index';
} elseif ( count($path_infos) == 2 ) {
	// 输入的是两个名字
	$path = $path_infos[ 0 ];
	$filename = $path_infos[ 1 ];
} else {
	// 输入的一个名字, 显示 index 下的对应页面
	$path = 'index';
	$filename = $path_infos[ 0 ];
}

include( './views/' . $path . '/' . $filename . '.html' );

?>