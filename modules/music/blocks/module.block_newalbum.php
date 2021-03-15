<?php

/**
 * @Project NUKEVIET-MUSIC
 * @Author Phan Tan Dung (phantandung92@gmail.com)
 * @copyright 2011
 * @createdate 26/01/2011 09:17 AM
 */

if( ! defined( 'NV_IS_MOD_MUSIC' ) ) die( 'Stop!!!' );

global $lang_module, $module_data, $module_file, $module_info, $mainURL, $db;

$xtpl = new XTemplate( "block_newalbum.tpl", NV_ROOTDIR . "/themes/" . $module_info['template'] . "/modules/" . $module_file );
$xtpl->assign( 'LANG', $lang_module );

$result = $db->sql_query( "SELECT a.*, b.ten AS singeralias, b.tenthat AS singername FROM `" . NV_PREFIXLANG . "_" . $module_data . "_album` AS a LEFT JOIN `" . NV_PREFIXLANG . "_" . $module_data . "_singer` AS b ON a.casi=b.id ORDER BY a.id DESC LIMIT 0,8" );
$a=0;
while( $song = $db->sql_fetchrow( $result ) )
{
	$singername = $song['singername'] ? $song['singername'] : $lang_module['unknow'];

	$xtpl->assign( 'url_search_singer', $mainURL . "=search&amp;where=album&amp;q=" . urlencode( $singername ) . "&amp;id=" . $song['casi'] . "&amp;type=singer" );
	$xtpl->assign( 'url_listen', $mainURL . "=listenlist/" . $song['id'] . "/" . $song['name'] );
	$xtpl->assign( 'name', $song['tname'] );
	$xtpl->assign( 'singer', $singername );
	$xtpl->assign( 'view', $song['numview'] );
	$xtpl->assign( 'img', $song['thumb'] );
		$xtpl->assign( 'a', $a );
	$xtpl->parse( 'main.loop' );
	$xtpl->parse( 'main.loop1' );
	$a++;

}

$xtpl->parse( 'main' );
$content = $xtpl->text( 'main' );

?>