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
$cid = $nv_Request->get_int( 'cid', 'get', 0 );
$content="";
$xtpl = new XTemplate( "top_country.tpl", NV_ROOTDIR . "/themes/" . $module_info['template'] . "/modules/" . $module_name );
$xtpl->assign( 'LANG', $lang_module );
$i=1; $arrray_abc = array (0=>'a',1=>'b',2=>'c');
$sql = "SELECT * FROM `" . NV_PREFIXLANG . "_" . $module_name . "_country` WHERE `id`=" .$cid;
//die($sql);
$row = $db->sql_fetchrow($db->sql_query($sql,2));
//print_r($list);die();

	$row_temp = array();
	$sql = "SELECT a.id, a.ten, a.tenthat, a.casi, a.numview, b.thumb, b.ten   AS singeralias, b.tenthat AS casithat FROM `" . NV_PREFIXLANG . "_" . $module_name . "` AS a LEFT JOIN `" . NV_PREFIXLANG . "_" . $module_name . "_singer` AS b ON a.casi=b.id WHERE a.active=1 AND a.cid=".$cid."  ORDER BY a.numview DESC LIMIT 0,10";
//	die($sql);
	$result = $db->sql_query( $sql );

	$stt=1;
	if($stt=1)
	while( $row_temp = $db->sql_fetchrow($result) )
	{
		$singername = empty( $row_temp['casithat'] ) ? $lang_module['unknow'] : $row_temp['casithat'];
	
		$row_temp['url_listen'] = $mainURL . "music/listenone/" . $row_temp['id'] . "/" . $row_temp['ten']."/";
		$row_temp['url_search_singer'] = $mainURL . "=search&amp;where=song&amp;q=" . urlencode( $singername ) . "&amp;id=" . $row_temp['casi'] . "&amp;type=singer";
		$row_temp['casithat'] = $singername;

		$xtpl->assign( 'STT',  sprintf('%02d',$stt));
		if($stt==1)
		{$singername = empty( $row_temp['casithat'] ) ? $lang_module['unknow'] : $row_temp['casithat'];
	
		$row_temp['url_listen'] = $mainURL . "music/listenone/" . $row_temp['id'] . "/" . $row_temp['ten']."/";
		$row_temp['url_search_singer'] = $mainURL . "=search&amp;where=song&amp;q=" . urlencode( $singername ) . "&amp;id=" . $row_temp['casi'] . "&amp;type=singer";
		$row_temp['casithat'] = $singername;
		$xtpl->assign( 'ROW', $row_temp );
		$xtpl->assign( 'STT',  sprintf('%02d',$stt));
			
			$xtpl->parse( 'main.top' );		
		}
		elseif($stt>1)
		{
		$singername = empty( $row_temp['casithat'] ) ? $lang_module['unknow'] : $row_temp['casithat'];
		$row_temp['url_listen'] = $mainURL . "music/listenone/" . $row_temp['id'] . "/" . $row_temp['ten']."/";
		$row_temp['url_search_singer'] = $mainURL . "=search&amp;where=song&amp;q=" . urlencode( $singername ) . "&amp;id=" . $row_temp['casi'] . "&amp;type=singer";
		$row_temp['casithat'] = $singername;
		$xtpl->assign( 'ROW', $row_temp );
		$xtpl->assign( 'STT',  sprintf('%02d',$stt));
		
		$xtpl->parse( 'main.loop' );
		}
		$stt++;
	}
$xtpl->parse( 'main' );
$contents = $xtpl->text( 'main' );

include ( NV_ROOTDIR . "/includes/header.php" );
echo nv_site_theme( $contents );
include ( NV_ROOTDIR . "/includes/footer.php" );

?>