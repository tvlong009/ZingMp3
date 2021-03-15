<?php

/* *
* @Project NUKEVIET-MUSIC
* @Author Phan Tan Dung (phantandung92@gmail.com)
* @Copyright (C) 2011 Freeware
* @Createdate 26/01/2011 10:12 AM
*/

if( ! defined( 'NV_MAINFILE' ) ) die( 'Stop!!!' );

if( ! nv_function_exists( 'nv_music_country_block' ) )
{
	function nv_music_country_block( $block_config )
	{
		global $module_array_cat, $module_info, $lang_module, $site_mods, $db, $module_name, $my_head,$db;
		$module = $block_config['module'];
		$data = $site_mods[$module]['module_data'];
		$file = $site_mods[$module]['module_file'];
		
		$block_config['number_day'] = 7 ;
		$publtime = NV_CURRENTTIME - $block_config['number_day'] * 86400;		
		$ctime = time ();
		
		$xtpl = new XTemplate( "block_top_country.tpl", NV_ROOTDIR . "/themes/" . $module_info['template'] . "/modules/" . $file );
		$xtpl->assign( 'LANG', $lang_module );
		$i=1; $arrray_abc = array (0=>'a',1=>'b',2=>'c');
		$sql = "SELECT * FROM `" . NV_PREFIXLANG . "_" . $data . "_country`";
		$list = nv_db_cache( $sql, 'id' );
		foreach( $list as $row )
		{
			$sql = "SELECT a.id, a.ten, a.tenthat, a.casi, a.numview, b.ten AS singeralias, b.tenthat AS casithat FROM `" . NV_PREFIXLANG . "_" . $data . "` AS a LEFT JOIN `" . NV_PREFIXLANG . "_" . $data . "_singer` AS b ON a.casi=b.id WHERE a.active=1 AND a.cid=".$row['id']." AND ( `dt` >=  ".$publtime." ) ORDER BY a.numview DESC LIMIT 0,10";
			$result = $db->sql_query( $sql );
			$stt=1;
			while( $row_temp = $db->sql_fetchrow( $result ) )
			{
				$singername = empty( $row_temp['casithat'] ) ? $lang_module['unknow'] : $row_temp['casithat'];
			
				$row_temp['url_listen'] = $mainURL . "music/listenone/" . $row_temp['id'] . "/" . $row_temp['ten']."/";
				$row_temp['url_search_singer'] = $mainURL . "=search&amp;where=song&amp;q=" . urlencode( $singername ) . "&amp;id=" . $row_temp['casi'] . "&amp;type=singer";
				$row_temp['casithat'] = $singername;
				
				$xtpl->assign( 'ROW', $row_temp );
				$xtpl->assign( 'STT',  sprintf('%02d',$stt));
				$xtpl->parse( 'main.ltap.loop' );
				$stt++;
			}
			$row['active'] = ($i==1)? 'active-1' : '';
			$row['abc'] = $arrray_abc[$i-1];
			$xtpl->assign( 'TAB', $row );
			$xtpl->parse( 'main.tab' );
			$xtpl->parse( 'main.ltap' );
			$i++;
		}
		$xtpl->parse( 'main' );
		return $xtpl->text( 'main' );

	}
}

if( defined( 'NV_SYSTEM' ) )
{
	global $site_mods, $module_name, $global_array_cat, $module_array_cat;
	$module = $block_config['module'];
	if( isset( $site_mods[$module] ) )
	{
		$content = nv_music_country_block( $block_config );
	}
}

?>