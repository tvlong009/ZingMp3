<?php

/**
 * @Project NUKEVIET-MUSIC
 * @Author Phan Tan Dung (phantandung92@gmail.com)
 * @Copyright (C) 2011 Freeware
 * @Createdate 26/01/2011 09:09 AM
 */

if( ! defined( 'NV_IS_MUSIC_ADMIN' ) ) die( 'Stop!!!' );

if( $nv_Request->isset_request( 'changeweight', 'post' ) )
{
	if( ! defined( 'NV_IS_AJAX' ) ) die( 'Wrong URL' );

	$id = $nv_Request->get_int( 'id', 'post', 0 );
	$new = $nv_Request->get_int( 'new', 'post', 0 );

	if( empty( $id ) ) die( "NO" );

	$query = "SELECT `id` FROM `" . NV_PREFIXLANG . "_" . $module_data . "_country` WHERE `id`!=" . $id . " ORDER BY `weight` ASC";
	$result = $db->sql_query( $query );
	$weight = 0;
	while( $row = $db->sql_fetchrow( $result ) )
	{
		$weight++;
		if( $weight == $new ) $weight++;
		$sql = "UPDATE `" . NV_PREFIXLANG . "_" . $module_data . "_country` SET `weight`=" . $weight . " WHERE `id`=" . $row['id'];
		$db->sql_query( $sql );
	}
	$sql = "UPDATE `" . NV_PREFIXLANG . "_" . $module_data . "_country` SET `weight`=" . $new . " WHERE `id`=" . $id;
	$db->sql_query( $sql );

	nv_del_moduleCache( $module_name );

	die( "OK" );
}
if( filter_text_input( 'ac', 'get', '' ) == 'del' )
{
	$id = $nv_Request->get_int( 'id', 'get', 0 );
	$sql = "DELETE FROM `" . NV_PREFIXLANG . "_" . $module_data . "_country` WHERE `id`=" . $id;
	$db->sql_query( $sql );
	nv_del_moduleCache( $module_name );
	die( "OK" );
}
// Page title collum
$page_title = $lang_module['manager_country'];

// List
$array_data = array();
$sql = "SELECT * FROM `" . NV_PREFIXLANG . "_" . $module_data . "_country` ORDER BY `weight` ASC";
$result = $db->sql_query( $sql );
$num = $db->sql_numrows( $result );
$i = 1;
while( $row = $db->sql_fetchrow( $result,2 ) )
{
	$list_weight = array();
	for( $j = 1; $j <= $num; $j++ )
	{
		$list_weight[$j] = array(
			"weight" => $j, //
			"title" => $j, //
			"selected" => ( $j == $row['weight'] ) ? " selected=\"selected\"" : "" //
		);
	} 
	$row['weight'] = $list_weight;
	$row['url_edit'] = NV_BASE_ADMINURL . "index.php?" . NV_NAME_VARIABLE . "=" . $module_name . "&amp;" . NV_OP_VARIABLE . "=" . $op . "&amp;id=" . $row['id'] . "#addeditarea";
	$row['class'] = ( $i % 2 == 0 ) ? " class=\"second\"" : "";
	$array_data[$row['id']] = $row ;
	$i++;
}

// Add - Edit
$id = $nv_Request->get_int( 'id', 'get', 0 );
$error = "";

if( $id )
{
	$sql = "SELECT * FROM `" . NV_PREFIXLANG . "_" . $module_data . "_country` WHERE `id`=" . $id;
	$result = $db->sql_query( $sql );
	$check_ok = $db->sql_numrows( $result );

	if( $check_ok != 1 )
	{
		nv_info_die( $lang_global['error_404_title'], $lang_global['error_404_title'], $lang_global['error_404_content'] );
	}

	$array_old = $array = $db->sql_fetchrow( $result,2 );

	$form_action = NV_BASE_ADMINURL . "index.php?" . NV_NAME_VARIABLE . "=" . $module_name . "&amp;" . NV_OP_VARIABLE . "=" . $op . "&amp;id=" . $id;
	$table_caption = $lang_module['cat_edit'];
}
else
{
	$form_action = NV_BASE_ADMINURL . "index.php?" . NV_NAME_VARIABLE . "=" . $module_name . "&amp;" . NV_OP_VARIABLE . "=" . $op;
	$table_caption = $lang_module['cat_add'];

	$array = array(
		"id" => 0, //
		"title" => "", //
		"addtime" => "", //
		"weight" => "", //
		"code" => "" //
	);
}

if( $nv_Request->isset_request( 'submit', 'post' ) )
{
	$array['id'] = $id;
	$array['title'] = filter_text_input( 'title', 'post', '', 1, 255 );
	$array['code'] = filter_text_input( 'code', 'post', '', 1 );

	if( empty( $array['title'] ) )
	{
		$error = $lang_module['error_title'];
	}
	else
	{
		if( empty( $id ) )
		{
			$sql = "SELECT `id` FROM `" . NV_PREFIXLANG . "_" . $module_data . "_country` WHERE `title`=" . $db->dbescape( $array['title'] );
			$result = $db->sql_query( $sql );
			list( $check_exist ) = $db->sql_fetchrow( $result );

			if( $check_exist )
			{
				$error = $lang_module['cat_error_exist'];
			}
			else
			{
				// Get new weight
				$sql = "SELECT MAX(`weight`) FROM `" . NV_PREFIXLANG . "_" . $module_data . "_country`";
				$result = $db->sql_query( $sql );
				list( $weight ) = $db->sql_fetchrow( $result );
				$new_weight = $weight + 1;

				// Insert into database
				$sql = "INSERT INTO `" . NV_PREFIXLANG . "_" . $module_data . "_country` VALUES (
					NULL, 
					" . $db->dbescape( $array['title'] ) . ",
					" . $db->dbescape( $array['code'] ) . ",
					" . $new_weight . ",
					".time()."
				)";

				if( $db->sql_query_insert_id( $sql ) )
				{
					$db->sql_freeresult();
					nv_del_moduleCache( $module_name );
					nv_insert_logs( NV_LANG_DATA, $module_name, $lang_module['cat_add'], $array['title'], $admin_info['userid'] );
					Header( "Location: " . NV_BASE_ADMINURL . "index.php?" . NV_NAME_VARIABLE . "=" . $module_name . "&" . NV_OP_VARIABLE . "=" . $op );
					exit();
				}
				else
				{
					$error = $lang_module['error_save'];
				}
			}
		}
		else
		{
			$sql = "SELECT `id` FROM `" . NV_PREFIXLANG . "_" . $module_data . "_country` WHERE `title`=" . $db->dbescape( $array['title'] ) . " AND `id`!=" . $id;
			$result = $db->sql_query( $sql );
			list( $check_exist ) = $db->sql_fetchrow( $result );

			if( $check_exist )
			{
				$error = $lang_module['cat_error_exist'];
			}
			else
			{
				$query = "UPDATE `" . NV_PREFIXLANG . "_" . $module_data . "_country` SET 
					`title`= " . $db->dbescape( $array['title'] ) . ",
					`code`= " . $db->dbescape( $array['code'] ) . "
				WHERE `id` =" . $id;
					
				if( $db->sql_query( $query ) )
				{
					$db->sql_freeresult();
					nv_del_moduleCache( $module_name );
					nv_insert_logs( NV_LANG_DATA, $module_name, $lang_module['cat_edit'], $array_old['title'] . "&nbsp;=&gt;&nbsp;" . $array['title'], $admin_info['userid'] );
					Header( "Location: " . NV_BASE_ADMINURL . "index.php?" . NV_NAME_VARIABLE . "=" . $module_name . "&" . NV_OP_VARIABLE . "=" . $op );
					exit();
				}
				else
				{
					$error = $lang_module['error_update'];
				}
			}
		}
	}
}

$xtpl = new XTemplate( "country.tpl", NV_ROOTDIR . "/themes/" . $global_config['module_theme'] . "/modules/" . $module_file );
$xtpl->assign( 'LANG', $lang_module );
$xtpl->assign( 'GLANG', $lang_global );
$xtpl->assign( 'TABLE_CAPTION', $table_caption );
$xtpl->assign( 'FORM_ACTION', $form_action );
$xtpl->assign( 'DATA', $array );

if( ! empty( $error ) )
{
	$xtpl->assign( 'ERROR', $error );
	$xtpl->parse( 'main.error' );
}

foreach( $array_data as $row )
{
	$numsong = "SELECT id FROM `" . NV_PREFIXLANG . "_" . $module_data . "` WHERE `cid`=" . $row['id'];
	$countrynumsong = $db->sql_numrows($db->sql_query($numsong));
	$row['numsong'] = $countrynumsong;
	$row['url'] = NV_BASE_ADMINURL . "index.php?" . NV_NAME_VARIABLE . "=" . $module_name . "&amp;" . NV_OP_VARIABLE . "=country_song&cid=" . $row['id'];
	$xtpl->assign( 'ROW', $row );

	foreach( $row['weight'] as $weight )
	{
		$xtpl->assign( 'WEIGHT', $weight );
		$xtpl->parse( 'main.row.weight' );
	}

	$xtpl->parse( 'main.row' );
}

$xtpl->parse( 'main' );
$contents = $xtpl->text( 'main' );

include ( NV_ROOTDIR . "/includes/header.php" );
echo nv_admin_theme( $contents );
include ( NV_ROOTDIR . "/includes/footer.php" );

?>