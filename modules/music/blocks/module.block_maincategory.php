<?php

/**
 * @Project NUKEVIET-MUSIC
 * @Author Phan Tan Dung (phantandung92@gmail.com)
 * @copyright 2011 Freeware
 * @createdate 26/01/2011 09:17 AM
 */

if( ! defined( 'NV_IS_MOD_MUSIC' ) ) die( 'Stop!!!' );

global $lang_module, $module_data, $module_file, $module_info, $db, $module_name, $mainURL;

$xtpl = new XTemplate( "block_maincategory.tpl", NV_ROOTDIR . "/themes/" . $module_info['template'] . "/modules/" . $module_file );
$xtpl->assign( 'title', $lang_module['category'] );

$sql = "SELECT a.cid, b.title FROM `" . NV_PREFIXLANG . "_" . $module_data . "_main_category` AS a INNER JOIN `" . NV_PREFIXLANG . "_" . $module_data . "_category` AS b ON a.cid=b.id ORDER BY a.order ASC";
//print_r($sql);
//\\die('s');
$list = nv_db_cache( $sql, 'cid', $module_name );
//print_r($list);
//die('s');
foreach( $list as $row )
{
	$xtpl->assign( 'name', $row['title'] );
	$url = nv_url_rewrite($mainURL . "=search&amp;where=song&amp;q=" . urlencode( $row['title'] ) . "&amp;id=" . $row['cid'] . "&amp;type=category" ,true);
	//die($url);
	$xtpl->assign( 'url', $url);
	$xtpl->parse( 'main.loop' );
}

$xtpl->parse( 'main' );
$content = $xtpl->text( 'main' );

?>