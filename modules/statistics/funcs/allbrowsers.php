<?php

/**
 * @Project NUKEVIET 3.4
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2012 VINADES.,JSC. All rights reserved
 * @Createdate Thu, 25 Oct 2012 00:00:00 GMT
 */

if(!defined('NV_IS_MOD_STATISTICS'))die('Stop!!!');$page_title=$lang_module['browser'];$key_words=$module_info['keywords'];$mod_title=$lang_module['browser'];$sql="SELECT COUNT(*), MAX(`c_count`) FROM `".NV_COUNTER_TABLE."` WHERE `c_type`='browser' AND `c_count`!=0";$result=$db->sql_query($sql);list($all_page,$max)=$db->sql_fetchrow($result);if($all_page){$page=$nv_Request->get_int('page','get',0);$per_page=50;$base_url=NV_BASE_SITEURL."index.php?".NV_LANG_VARIABLE."=".NV_LANG_DATA."&amp;".NV_NAME_VARIABLE."=".$module_name."&amp;".NV_OP_VARIABLE."=allbrowsers";$sql="SELECT `c_val`,`c_count`, `last_update` FROM `".NV_COUNTER_TABLE."` WHERE `c_type`='browser' AND `c_count`!=0 ORDER BY `c_count` DESC LIMIT ".$page.",".$per_page;$result=$db->sql_query($sql);$browsers_list=array();while(list($browser,$count,$last_visit)=$db->sql_fetchrow($result)){$last_visit=!empty($last_visit)?nv_date("l, d F Y H:i",$last_visit):"";$browsers_list[$browser]=array($count,$last_visit);}if(!empty($browsers_list)){$cts=array();$cts['thead']=array($lang_module['browser'],$lang_module['hits'],$lang_module['last_visit']);$cts['rows']=$browsers_list;$cts['max']=$max;$cts['generate_page']=nv_generate_page($base_url,$all_page,$per_page,$page);}}$contents=call_user_func("allbrowsers");include(NV_ROOTDIR."/includes/header.php");echo nv_site_theme($contents);include(NV_ROOTDIR."/includes/footer.php");

?>