<?php

/**
 * @Project NUKEVIET-MUSIC
 * @Author Phan Tan Dung (phantandung92@gmail.com)
 * @copyright 2011 Freeware
 * @createdate 26/01/2011 09:17 AM
 */

if( ! defined( 'NV_IS_MOD_MUSIC' ) ) die( 'Stop!!!' );

global $lang_module, $module_data, $module_file, $module_info, $db, $module_name, $mainURL;

$xtpl = new XTemplate( "block_maincategoryvideo.tpl", NV_ROOTDIR . "/themes/" . $module_info['template'] . "/modules/" . $module_file );
$xtpl->assign( 'title', $lang_module['category'] );

$sql = "SELECT title,id FROM `" . NV_PREFIXLANG . "_" . $module_data . "_video_category` ORDER BY id ASC";
//print_r($sql);
//\\die('s');
$list = nv_db_cache( $sql, 'cid', $module_name );

foreach( $list as $row )
{
	$xtpl->assign( 'name', $row['title'] );
	$xtpl->assign( 'url', $mainURL . "=search&amp;where=video&amp;q=" . urlencode( $row['title'] ) . "&amp;id=" . $row['id'] . "&amp;type=category" );
	$xtpl->parse( 'main.loop' );
}

$xtpl->parse( 'main' );
$content = $xtpl->text( 'main' );

?>