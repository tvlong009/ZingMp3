<?php

/**
 * @Project NUKEVIET-MUSIC
 * @Author Phan Tan Dung (phantandung92@gmail.com)
 * @copyright 2011 Freeware
 * @createdate 26/01/2011 09:17 AM
 */

if( ! defined( 'NV_IS_MOD_MUSIC' ) ) die( 'Stop!!!' );

global $lang_module, $module_data, $module_file, $module_info, $mainURL, $db;

$xtpl = new XTemplate( "block_top_song.tpl", NV_ROOTDIR . "/themes/" . $module_info['template'] . "/modules/" . $module_file );
$xtpl->assign( 'LANG', $lang_module );

$sql = "SELECT a.id, a.ten, a.tenthat, a.casi, a.numview, b.ten AS singeralias, b.tenthat AS casithat FROM `" . NV_PREFIXLANG . "_" . $module_data . "` AS a LEFT JOIN `" . NV_PREFIXLANG . "_" . $module_data . "_singer` AS b ON a.casi=b.id WHERE a.active=1 ORDER BY a.numview DESC LIMIT 0,8";
$result = $db->sql_query( $sql );
$stt=1;
while( $row = $db->sql_fetchrow( $result ) )
{
	$singername = empty( $row['casithat'] ) ? $lang_module['unknow'] : $row['casithat'];
	$row['url_listen'] = $mainURL . "=listenone/" . $row['id'] . "/" . $row['ten'];
	$row['url_search_singer'] = $mainURL . "=search&amp;where=song&amp;q=" . urlencode( $singername ) . "&amp;id=" . $row['casi'] . "&amp;type=singer";
	$row['casithat'] = $singername;
	$xtpl->assign( 'thumb', $row['thumb'] );
	$xtpl->assign( 'ROW', $row );
	$xtpl->assign( 'STT', $stt );
	$xtpl->parse( 'main.loop' );
	$stt++;
}

$xtpl->parse( 'main' );
$content = $xtpl->text( 'main' );

?>