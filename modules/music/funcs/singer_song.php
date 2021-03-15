<?php

/**
 * @Project NUKEVIET-MUSIC
 * @Author Phan Tan Dung (phantandung92@gmail.com)
 * @Copyright (C) 2011 Freeware
 * @Createdate 26/01/2011 10:12 AM
 */

if( ! defined( 'NV_IS_MOD_MUSIC' ) ) die( 'Stop!!!' );

$page_title = $lang_module['listen_playlist'] . NV_TITLEBAR_DEFIS . $module_info['custom_title'];
$key_words = $module_info['keywords'];
$description = $setting['description'];
$casiid = $nv_Request->get_int( 'casiid', 'get', 0 );
$content="";
$xtpl = new XTemplate( "singer_song.tpl", NV_ROOTDIR . "/themes/" . $module_info['template'] . "/modules/" . $module_name );
$xtpl->assign( 'LANG', $lang_module );
	$row_temp = array();
	$sql = "SELECT a.id, a.ten, a.tenthat, a.casi, a.numview, b.ten AS singeralias, b.tenthat AS casithat FROM `" . NV_PREFIXLANG . "_" . $module_name . "` AS a LEFT JOIN `" . NV_PREFIXLANG . "_" . $module_name . "_singer` AS b ON a.casi=b.id WHERE a.active=1 AND b.id=".$casiid."  ORDER BY a.numview DESC LIMIT 0,10";
	$result = $db->sql_query( $sql );

	$stt=1;
	while( $row_temp = $db->sql_fetchrow($result) )
	{
		$singername = empty( $row_temp['casithat'] ) ? $lang_module['unknow'] : $row_temp['casithat'];
	
		$row_temp['url_listen'] = "music/listenone/" . $row_temp['id'] . "/" . $row_temp['ten']."/";
		$row_temp['url_search_singer'] = $mainURL . "=search&amp;where=song&amp;q=" . urlencode( $singername ) . "&amp;id=" . $row_temp['casi'] . "&amp;type=singer";
		$row_temp['casithat'] = $singername;
		
		$xtpl->assign( 'ROW', $row_temp );
		$xtpl->assign( 'STT',  sprintf('%02d',$stt));
		$xtpl->parse( 'main.loop' );
		$stt++;
	}
$xtpl->parse( 'main' );
$contents = $xtpl->text( 'main' );

include ( NV_ROOTDIR . "/includes/header.php" );
echo nv_site_theme( $contents );
include ( NV_ROOTDIR . "/includes/footer.php" );

?>