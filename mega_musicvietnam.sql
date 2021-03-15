-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2014 at 04:31 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mega_musicvietnam`
--

-- --------------------------------------------------------

--
-- Table structure for table `nv3_authors`
--

CREATE TABLE IF NOT EXISTS `nv3_authors` (
  `admin_id` mediumint(8) unsigned NOT NULL,
  `editor` varchar(100) NOT NULL,
  `lev` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `files_level` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `addtime` int(11) NOT NULL DEFAULT '0',
  `edittime` int(11) NOT NULL DEFAULT '0',
  `is_suspend` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `susp_reason` mediumtext NOT NULL,
  `check_num` varchar(40) NOT NULL,
  `last_login` int(11) unsigned NOT NULL DEFAULT '0',
  `last_ip` varchar(45) NOT NULL,
  `last_agent` varchar(255) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_authors`
--

INSERT INTO `nv3_authors` (`admin_id`, `editor`, `lev`, `files_level`, `position`, `addtime`, `edittime`, `is_suspend`, `susp_reason`, `check_num`, `last_login`, `last_ip`, `last_agent`) VALUES
(1, 'ckeditor', 1, 'adobe,archives,audio,documents,flash,images,real,video|1|1|1', 'Administrator', 0, 0, 0, '', '8958b0a2f4f52ea309d4baa1af8c0b4efa957d0a', 1395371367, '117.1.177.87', 'Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_authors_config`
--

CREATE TABLE IF NOT EXISTS `nv3_authors_config` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `keyname` varchar(32) DEFAULT NULL,
  `mask` tinyint(4) NOT NULL DEFAULT '0',
  `begintime` int(11) DEFAULT NULL,
  `endtime` int(11) DEFAULT NULL,
  `notice` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `keyname` (`keyname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_banip`
--

CREATE TABLE IF NOT EXISTS `nv3_banip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(32) DEFAULT NULL,
  `mask` tinyint(4) NOT NULL DEFAULT '0',
  `area` tinyint(3) NOT NULL,
  `begintime` int(11) DEFAULT NULL,
  `endtime` int(11) DEFAULT NULL,
  `notice` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ip` (`ip`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_banners_click`
--

CREATE TABLE IF NOT EXISTS `nv3_banners_click` (
  `bid` mediumint(8) NOT NULL DEFAULT '0',
  `click_time` int(11) unsigned NOT NULL DEFAULT '0',
  `click_day` int(2) NOT NULL,
  `click_ip` varchar(15) NOT NULL,
  `click_country` varchar(10) NOT NULL,
  `click_browse_key` varchar(100) NOT NULL,
  `click_browse_name` varchar(100) NOT NULL,
  `click_os_key` varchar(100) NOT NULL,
  `click_os_name` varchar(100) NOT NULL,
  `click_ref` varchar(255) NOT NULL,
  KEY `bid` (`bid`),
  KEY `click_day` (`click_day`),
  KEY `click_ip` (`click_ip`),
  KEY `click_country` (`click_country`),
  KEY `click_browse_key` (`click_browse_key`),
  KEY `click_os_key` (`click_os_key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_banners_clients`
--

CREATE TABLE IF NOT EXISTS `nv3_banners_clients` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(60) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `reg_time` int(11) unsigned NOT NULL DEFAULT '0',
  `full_name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `website` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `yim` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `fax` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `check_num` varchar(40) NOT NULL,
  `last_login` int(11) unsigned NOT NULL DEFAULT '0',
  `last_ip` varchar(15) NOT NULL,
  `last_agent` varchar(255) NOT NULL,
  `uploadtype` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`),
  UNIQUE KEY `email` (`email`),
  KEY `full_name` (`full_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_banners_plans`
--

CREATE TABLE IF NOT EXISTS `nv3_banners_plans` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `blang` char(2) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `form` varchar(100) NOT NULL,
  `width` smallint(4) unsigned NOT NULL DEFAULT '0',
  `height` smallint(4) unsigned NOT NULL DEFAULT '0',
  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `title` (`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `nv3_banners_plans`
--

INSERT INTO `nv3_banners_plans` (`id`, `blang`, `title`, `description`, `form`, `width`, `height`, `act`) VALUES
(1, '', 'Quang cao giua trang', '', 'sequential', 510, 100, 1),
(2, '', 'Quang cao trai', '', 'sequential', 190, 500, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_banners_rows`
--

CREATE TABLE IF NOT EXISTS `nv3_banners_rows` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `pid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `clid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `file_name` varchar(255) NOT NULL,
  `file_ext` varchar(100) NOT NULL,
  `file_mime` varchar(100) NOT NULL,
  `width` int(4) unsigned NOT NULL DEFAULT '0',
  `height` int(4) unsigned NOT NULL DEFAULT '0',
  `file_alt` varchar(255) NOT NULL,
  `click_url` varchar(255) NOT NULL,
  `file_name_tmp` varchar(255) NOT NULL,
  `file_alt_tmp` varchar(255) NOT NULL,
  `click_url_tmp` varchar(255) NOT NULL,
  `add_time` int(11) unsigned NOT NULL DEFAULT '0',
  `publ_time` int(11) unsigned NOT NULL DEFAULT '0',
  `exp_time` int(11) unsigned NOT NULL DEFAULT '0',
  `hits_total` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `weight` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`),
  KEY `clid` (`clid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `nv3_banners_rows`
--

INSERT INTO `nv3_banners_rows` (`id`, `title`, `pid`, `clid`, `file_name`, `file_ext`, `file_mime`, `width`, `height`, `file_alt`, `click_url`, `file_name_tmp`, `file_alt_tmp`, `click_url_tmp`, `add_time`, `publ_time`, `exp_time`, `hits_total`, `act`, `weight`) VALUES
(1, 'Bo ngoai giao', 2, 0, 'bongoaigiao.jpg', 'jpg', 'image/jpeg', 160, 54, '', 'http://www.mofa.gov.vn', '', '', '', 1394790732, 1394790732, 0, 0, 1, 1),
(2, 'vinades', 2, 0, 'vinades.jpg', 'jpg', 'image/jpeg', 190, 454, '', 'http://vinades.vn', '', '', '', 1394790732, 1394790732, 0, 0, 1, 2),
(3, 'Quang cao giua trang', 1, 0, 'webnhanh_vn.gif', 'gif', 'image/gif', 510, 65, '', 'http://webnhanh.vn', '', '', '', 1394790732, 1394790732, 0, 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_config`
--

CREATE TABLE IF NOT EXISTS `nv3_config` (
  `lang` char(3) NOT NULL DEFAULT 'sys',
  `module` varchar(25) NOT NULL DEFAULT 'global',
  `config_name` varchar(30) NOT NULL DEFAULT '',
  `config_value` mediumtext NOT NULL,
  UNIQUE KEY `lang` (`lang`,`module`,`config_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_config`
--

INSERT INTO `nv3_config` (`lang`, `module`, `config_name`, `config_value`) VALUES
('sys', 'global', 'closed_site', '0'),
('sys', 'global', 'site_keywords', 'NukeViet, portal, mysql, php'),
('sys', 'global', 'site_phone', ''),
('sys', 'global', 'site_lang', 'vi'),
('sys', 'global', 'admin_theme', 'admin_full'),
('sys', 'global', 'date_pattern', 'l, d-m-Y'),
('sys', 'global', 'time_pattern', 'H&#x3A;i'),
('sys', 'global', 'block_admin_ip', '0'),
('sys', 'global', 'admfirewall', '0'),
('sys', 'global', 'online_upd', '1'),
('sys', 'global', 'statistic', '1'),
('sys', 'global', 'dump_autobackup', '1'),
('sys', 'global', 'dump_backup_ext', 'gz'),
('sys', 'global', 'dump_backup_day', '30'),
('sys', 'global', 'gfx_chk', '3'),
('sys', 'global', 'file_allowed_ext', 'adobe,archives,audio,documents,flash,images,real,video'),
('sys', 'global', 'forbid_extensions', 'php'),
('sys', 'global', 'forbid_mimes', ''),
('sys', 'global', 'nv_max_size', '209715200'),
('sys', 'global', 'upload_checking_mode', 'strong'),
('sys', 'global', 'upload_logo', 'images/logo.png'),
('sys', 'global', 'str_referer_blocker', '0'),
('sys', 'global', 'getloadavg', '0'),
('sys', 'global', 'mailer_mode', ''),
('sys', 'global', 'smtp_host', 'smtp.gmail.com'),
('sys', 'global', 'smtp_ssl', '1'),
('sys', 'global', 'smtp_port', '465'),
('sys', 'global', 'smtp_username', 'user@gmail.com'),
('sys', 'global', 'smtp_password', 'userpass'),
('sys', 'global', 'allowuserreg', '1'),
('sys', 'global', 'allowuserlogin', '1'),
('sys', 'global', 'allowloginchange', '0'),
('sys', 'global', 'allowquestion', '1'),
('sys', 'global', 'allowuserpublic', '0'),
('sys', 'global', 'useactivate', '2'),
('sys', 'global', 'allowmailchange', '1'),
('sys', 'global', 'allow_sitelangs', 'vi'),
('sys', 'global', 'allow_adminlangs', 'en,vi'),
('sys', 'global', 'read_type', '0'),
('sys', 'global', 'is_url_rewrite', '0'),
('sys', 'global', 'rewrite_optional', '1'),
('sys', 'global', 'rewrite_endurl', '/'),
('sys', 'global', 'rewrite_exturl', '.html'),
('sys', 'global', 'autocheckupdate', '1'),
('sys', 'global', 'autologomod', ''),
('sys', 'global', 'autologosize1', '50'),
('sys', 'global', 'autologosize2', '40'),
('sys', 'global', 'autologosize3', '30'),
('sys', 'global', 'autoupdatetime', '24'),
('sys', 'global', 'gzip_method', '1'),
('sys', 'global', 'is_user_forum', '0'),
('sys', 'global', 'openid_mode', '1'),
('sys', 'global', 'authors_detail_main', '0'),
('sys', 'global', 'spadmin_add_admin', '1'),
('sys', 'global', 'openid_servers', 'yahoo,google,myopenid'),
('sys', 'global', 'optActive', '0'),
('sys', 'global', 'timestamp', '11'),
('sys', 'global', 'googleAnalyticsID', ''),
('sys', 'global', 'googleAnalyticsSetDomainName', '0'),
('sys', 'global', 'searchEngineUniqueID', ''),
('sys', 'global', 'captcha_type', '0'),
('sys', 'global', 'revision', '1929'),
('sys', 'global', 'version', '3.4.02'),
('sys', 'global', 'whoviewuser', '2'),
('vi', 'global', 'site_name', 'Mega_music'),
('vi', 'global', 'site_logo', 'images/logo_2.png'),
('vi', 'global', 'site_description', 'NukeViet CMS 3.x Developed by VINADES.,JSC'),
('vi', 'global', 'site_keywords', ''),
('vi', 'global', 'site_theme', 'music'),
('vi', 'global', 'site_home_module', 'music'),
('vi', 'global', 'switch_mobi_des', '1'),
('vi', 'global', 'disable_site_content', 'Vì lý do kỹ thuật website tạm ngưng hoạt động. Thành thật xin lỗi các bạn vì sự bất tiện này!'),
('vi', 'news', 'indexfile', 'viewcat_main_right'),
('vi', 'news', 'per_page', '20'),
('vi', 'news', 'st_links', '10'),
('vi', 'news', 'auto_postcomm', '1'),
('vi', 'news', 'homewidth', '500'),
('vi', 'news', 'homeheight', '500'),
('vi', 'news', 'blockwidth', '500'),
('vi', 'news', 'blockheight', '500'),
('vi', 'news', 'imagefull', '460'),
('vi', 'news', 'setcomm', '2'),
('vi', 'news', 'copyright', 'Chú ý&#x3A; Việc đăng lại bài viết trên ở website hoặc các phương tiện truyền thông khác mà không ghi rõ nguồn http&#x3A;&#x002F;&#x002F;nukeviet.vn là vi phạm bản quyền'),
('vi', 'news', 'showhometext', '1'),
('vi', 'news', 'activecomm', '1'),
('vi', 'news', 'emailcomm', '1'),
('vi', 'news', 'timecheckstatus', '0'),
('vi', 'news', 'config_source', '0'),
('sys', 'global', 'site_email', 'admin@yahoo.com'),
('sys', 'global', 'error_send_email', 'admin@yahoo.com'),
('sys', 'global', 'my_domains', 'demo.vinagon.com,localhost'),
('sys', 'global', 'cookie_prefix', 'nv3c_R79i6'),
('sys', 'global', 'session_prefix', 'nv3s_Ccajkl'),
('sys', 'global', 'site_timezone', 'byCountry'),
('sys', 'global', 'statistics_timezone', 'Asia/Bangkok'),
('sys', 'global', 'proxy_blocker', '0'),
('sys', 'global', 'lang_multi', '0'),
('sys', 'global', 'lang_geo', '0'),
('sys', 'global', 'ftp_server', 'http&#x3A;&#x002F;&#x002F;mp3.zing.vn&#x002F;'),
('sys', 'global', 'ftp_port', '21'),
('sys', 'global', 'ftp_user_name', 'admin'),
('sys', 'global', 'ftp_user_pass', '123456'),
('sys', 'global', 'ftp_path', '&#x002F;'),
('sys', 'global', 'ftp_check_login', '3'),
('vi', 'news', 'module_logo', 'images/wb0pggm81_1.png'),
('vi', 'news', 'structure_upload', 'Ym'),
('vi', 'articles', 'home_view', 'view_home_all'),
('vi', 'articles', 'home_view_type', 'view_home_gird'),
('vi', 'articles', 'order', 'dateup'),
('vi', 'articles', 'homewidth', '100'),
('vi', 'articles', 'homeheight', '100'),
('vi', 'articles', 'per_page', '30'),
('vi', 'articles', 'per_row', '2'),
('vi', 'articles', 'active_hometext', '1'),
('vi', 'articles', 'active_comment', '1'),
('vi', 'articles', 'comment_auto', '1');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_cronjobs`
--

CREATE TABLE IF NOT EXISTS `nv3_cronjobs` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `start_time` int(11) unsigned NOT NULL DEFAULT '0',
  `interval` int(11) unsigned NOT NULL DEFAULT '0',
  `run_file` varchar(255) NOT NULL,
  `run_func` varchar(255) NOT NULL,
  `params` varchar(255) NOT NULL,
  `del` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `is_sys` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `last_time` int(11) unsigned NOT NULL DEFAULT '0',
  `last_result` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `vi_cron_name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `is_sys` (`is_sys`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `nv3_cronjobs`
--

INSERT INTO `nv3_cronjobs` (`id`, `start_time`, `interval`, `run_file`, `run_func`, `params`, `del`, `is_sys`, `act`, `last_time`, `last_result`, `vi_cron_name`) VALUES
(1, 1394790732, 5, 'online_expired_del.php', 'cron_online_expired_del', '', 0, 1, 1, 1395372493, 1, 'Xóa các dòng ghi trạng thái online đã cũ trong CSDL'),
(2, 1394790732, 1440, 'dump_autobackup.php', 'cron_dump_autobackup', '', 0, 1, 1, 1395309147, 1, 'Tự động lưu CSDL'),
(3, 1394790732, 60, 'temp_download_destroy.php', 'cron_auto_del_temp_download', '', 0, 1, 1, 1395370338, 1, 'Xóa các file tạm trong thư mục tmp'),
(4, 1394790732, 30, 'ip_logs_destroy.php', 'cron_del_ip_logs', '', 0, 1, 1, 1395372223, 1, 'Xóa IP log files Xóa các file logo truy cập'),
(5, 1394790732, 1440, 'error_log_destroy.php', 'cron_auto_del_error_log', '', 0, 1, 1, 1395309147, 1, 'Xóa các file error_log quá hạn'),
(6, 1394790732, 360, 'error_log_sendmail.php', 'cron_auto_sendmail_error_log', '', 0, 1, 0, 0, 0, 'Gửi email các thông báo lỗi cho admin'),
(7, 1394790732, 60, 'ref_expired_del.php', 'cron_ref_expired_del', '', 0, 1, 1, 1395370338, 1, 'Xóa các referer quá hạn'),
(8, 1394790732, 1440, 'siteDiagnostic_update.php', 'cron_siteDiagnostic_update', '', 0, 1, 1, 1395309147, 1, 'Cập nhật đánh giá site từ các máy chủ tìm kiếm'),
(9, 1394790732, 60, 'check_version.php', 'cron_auto_check_version', '', 0, 1, 1, 1395370650, 1, 'Kiểm tra phiên bản NukeViet');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_groups`
--

CREATE TABLE IF NOT EXISTS `nv3_groups` (
  `group_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `add_time` int(11) NOT NULL,
  `exp_time` int(11) NOT NULL,
  `users` mediumtext NOT NULL,
  `public` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `weight` int(11) unsigned NOT NULL DEFAULT '0',
  `act` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `title` (`title`),
  KEY `exp_time` (`exp_time`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_ipcountry`
--

CREATE TABLE IF NOT EXISTS `nv3_ipcountry` (
  `ip_from` int(11) unsigned NOT NULL,
  `ip_to` int(11) unsigned NOT NULL,
  `country` char(2) NOT NULL,
  `ip_file` smallint(5) unsigned NOT NULL,
  `time` int(11) NOT NULL DEFAULT '0',
  UNIQUE KEY `ip_from` (`ip_from`,`ip_to`),
  KEY `ip_file` (`ip_file`),
  KEY `country` (`country`),
  KEY `time` (`time`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_ipcountry`
--

INSERT INTO `nv3_ipcountry` (`ip_from`, `ip_to`, `country`, `ip_file`, `time`) VALUES
(2130706432, 2130771967, 'ZZ', 127, 1394790778),
(1962999808, 1963065343, 'VN', 117, 1395143987),
(1121714176, 1121779711, 'US', 66, 1395193861),
(1168834560, 1168900095, 'US', 69, 1395222165),
(1934491648, 1934622719, 'VN', 115, 1395316931),
(1907032064, 1907097599, 'VN', 113, 1395319238),
(1963130880, 1963196415, 'VN', 117, 1395325688),
(1934098432, 1934622719, 'VN', 115, 1395327782),
(1953906688, 1953923071, 'VN', 116, 1395370774);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_language`
--

CREATE TABLE IF NOT EXISTS `nv3_language` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `idfile` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `lang_key` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filelang` (`idfile`,`lang_key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_language_file`
--

CREATE TABLE IF NOT EXISTS `nv3_language_file` (
  `idfile` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `module` varchar(50) NOT NULL,
  `admin_file` varchar(255) NOT NULL DEFAULT '0',
  `langtype` varchar(50) NOT NULL,
  PRIMARY KEY (`idfile`),
  UNIQUE KEY `module` (`module`,`admin_file`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_logs`
--

CREATE TABLE IF NOT EXISTS `nv3_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lang` varchar(10) NOT NULL,
  `module_name` varchar(150) NOT NULL,
  `name_key` varchar(255) NOT NULL,
  `note_action` text NOT NULL,
  `link_acess` varchar(255) NOT NULL,
  `userid` int(11) NOT NULL,
  `log_time` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=315 ;

--
-- Dumping data for table `nv3_logs`
--

INSERT INTO `nv3_logs` (`id`, `lang`, `module_name`, `name_key`, `note_action`, `link_acess`, `userid`, `log_time`) VALUES
(1, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1394790782),
(2, 'vi', 'modules', 'Cài đặt gói Module + Block', 'module-music-3-4-02.zip', 'module-music-3-4-02.zip', 1, 1394791386),
(3, 'vi', 'modules', 'Thiết lập module mới music"', '', '', 1, 1394791399),
(4, 'vi', 'modules', 'Sửa module &ldquo;music&rdquo;', '', '', 1, 1394791410),
(5, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/7e4149a9_21.jpg', 'uploads/music/thumb/7e4149a9_21.jpg', 1, 1394791465),
(6, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/1b03ea82b35e244e353228d6417cd53c_1380765906.jpg', 'uploads/music/thumb/1b03ea82b35e244e353228d6417cd53c_1380765906.jpg', 1, 1394791516),
(7, 'vi', 'upload', 'Upload file', 'uploads/music/authorthumb/032b2cc936860b03048302d991c3498f_1386577348.jpg', 'uploads/music/authorthumb/032b2cc936860b03048302d991c3498f_1386577348.jpg', 1, 1394791613),
(8, 'vi', 'music', 'Thêm thể loại clip', 'Vpop', 'Vpop', 1, 1394791651),
(9, 'vi', 'music', 'Add song f-rom mp3.zing.vn', 'List song', 'List song', 1, 1394791832),
(10, 'vi', 'music', 'Thêm thể loại bài hát', 'Nhạc trẻ', 'Nhạc trẻ', 1, 1394791904),
(11, 'vi', 'music', 'Add song f-rom mp3.zing.vn', 'List song', 'List song', 1, 1394791934),
(12, 'vi', 'music', 'Add song f-rom mp3.zing.vn', 'List song', 'List song', 1, 1394792068),
(13, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1394792146),
(14, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1394795639),
(15, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1394847554),
(16, 'vi', 'music', 'Add song f-rom mp3.zing.vn', 'List song', 'List song', 1, 1394848510),
(17, 'vi', 'music', 'Add song f-rom nhaccuatui', 'List song', 'List song', 1, 1394848630),
(18, 'vi', 'music', 'Add song f-rom nhaccuatui', 'List song', 'List song', 1, 1394848912),
(19, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1394849208),
(20, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1394849423),
(21, 'vi', 'music', 'Add song f-rom mp3.zing.vn', 'List song', 'List song', 1, 1394849576),
(22, 'vi', 'music', 'Add song f-rom nhaccuatui', 'List song', 'List song', 1, 1394849639),
(23, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1394850078),
(24, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1394850356),
(25, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1394851697),
(26, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/e2358dc9ba8b5b5e9bc0476dea165e9d_1373258860.jpg', 'uploads/music/singerthumb/e2358dc9ba8b5b5e9bc0476dea165e9d_1373258860.jpg', 1, 1394851874),
(27, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/808b957cc2881147b5ece9c430ad0877_1390188872.jpg', 'uploads/music/singerthumb/808b957cc2881147b5ece9c430ad0877_1390188872.jpg', 1, 1394851955),
(28, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/2d18d7a77341a041945b542400cf9009_1383669082.jpg', 'uploads/music/singerthumb/2d18d7a77341a041945b542400cf9009_1383669082.jpg', 1, 1394852000),
(29, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/ad7bc863acc50ad3b747c51c2f85b431_1373259706.jpg', 'uploads/music/singerthumb/ad7bc863acc50ad3b747c51c2f85b431_1373259706.jpg', 1, 1394852058),
(30, 'vi', 'upload', 'Upload file', 'uploads/music/authorthumb/fdec5f5c0b06310830d2c392a14d6b71_1392779490.jpg', 'uploads/music/authorthumb/fdec5f5c0b06310830d2c392a14d6b71_1392779490.jpg', 1, 1394853353),
(31, 'vi', 'upload', 'Upload file', 'uploads/music/authorthumb/93efec9378b1cc8d0b35c6ff683db47b_1376989156.jpg', 'uploads/music/authorthumb/93efec9378b1cc8d0b35c6ff683db47b_1376989156.jpg', 1, 1394853405),
(32, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/13947931565_658_120x120.jpg', 'uploads/music/thumb/13947931565_658_120x120.jpg', 1, 1394853617),
(33, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/137999335012_5870_120x120.jpg', 'uploads/music/thumb/137999335012_5870_120x120.jpg', 1, 1394853761),
(34, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/trotyeu.png', 'uploads/music/clipthumb/trotyeu.png', 1, 1394854794),
(35, 'vi', 'themes', 'Thiết lập layout theme: "default"', '', '', 1, 1394855353),
(36, 'vi', 'themes', 'Sửa block', 'Name : global block gift', 'Name : global block gift', 1, 1394855412),
(37, 'vi', 'themes', 'Sửa block', 'Name : global block gift', 'Name : global block gift', 1, 1394855495),
(38, 'vi', 'themes', 'Sửa block', 'Name : global block gift', 'Name : global block gift', 1, 1394855540),
(39, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1394855606),
(40, 'vi', 'themes', 'Kích hoạt theme: "music"', '', '', 1, 1394855622),
(41, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1394980203),
(42, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1394981833),
(43, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395018856),
(44, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395018930),
(45, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395018950),
(46, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395020452),
(47, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395020546),
(48, 'vi', 'upload', 'Upload file', 'images/logo_1.png', 'images/logo_1.png', 1, 1395026235),
(49, 'vi', 'themes', 'Thêm block', 'Name : Tìm kiếm', 'Name : Tìm kiếm', 1, 1395026428),
(50, 'vi', 'themes', 'Thêm block', 'Name : Đăng nhập, đăng ký', 'Name : Đăng nhập, đăng ký', 1, 1395027470),
(51, 'vi', 'themes', 'Thêm block', 'Name : Menu site', 'Name : Menu site', 1, 1395027974),
(52, 'vi', 'themes', 'Thêm block', 'Name : Tin mới', 'Name : Tin mới', 1, 1395028934),
(53, 'vi', 'themes', 'Sửa block', 'Name : Tin mới', 'Name : Tin mới', 1, 1395029053),
(54, 'vi', 'themes', 'Thêm block', 'Name : Tin mới', 'Name : Tin mới', 1, 1395029098),
(55, 'vi', 'themes', 'Thêm block', 'Name : Hot album slider', 'Name : Hot album slider', 1, 1395029595),
(56, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/b42da9895c6a0f1397ebd17d11d9a5bbbbf3d1ef_640_293.jpg', 'uploads/music/thumb/b42da9895c6a0f1397ebd17d11d9a5bbbbf3d1ef_640_293.jpg', 1, 1395031056),
(57, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/531e8204868fd.png', 'uploads/music/thumb/531e8204868fd.png', 1, 1395031282),
(58, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/531eb4e54343c.png', 'uploads/music/thumb/531eb4e54343c.png', 1, 1395033125),
(59, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/1394791111517_org.png', 'uploads/music/thumb/1394791111517_org.png', 1, 1395033194),
(60, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/1394612566976_org.png', 'uploads/music/thumb/1394612566976_org.png', 1, 1395033447),
(61, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/1394783908275_org.png', 'uploads/music/thumb/1394783908275_org.png', 1, 1395033594),
(62, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/1394089761852.png', 'uploads/music/thumb/1394089761852.png', 1, 1395034035),
(63, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/1394591844646.png', 'uploads/music/thumb/1394591844646.png', 1, 1395034128),
(64, 'vi', 'upload', 'Upload file', 'uploads/music/thumb/1485911_562645727150932_509505901_o.jpg', 'uploads/music/thumb/1485911_562645727150932_509505901_o.jpg', 1, 1395034476),
(65, 'vi', 'themes', 'Thêm block', 'Name : HOT Playlist', 'Name : HOT Playlist', 1, 1395034839),
(66, 'vi', 'themes', 'Sửa block', 'Name : HOT PLAYLIST', 'Name : HOT PLAYLIST', 1, 1395035085),
(67, 'vi', 'themes', 'Sửa block', 'Name : HOT PLAYLIST', 'Name : HOT PLAYLIST', 1, 1395035138),
(68, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395035704),
(69, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395035823),
(70, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395036157),
(71, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395036189),
(72, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395036342),
(73, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395036600),
(74, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395036646),
(75, 'vi', 'users', 'log_add_user', 'userid 2', 'userid 2', 1, 1395036718),
(76, 'vi', 'login', '[admin] thoát khỏi tài khoản quản trị', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395036725),
(77, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395036870),
(78, 'vi', 'themes', 'Kích hoạt theme: "default"', '', '', 1, 1395038702),
(79, 'vi', 'themes', 'Sửa block', 'Name : global block gift', 'Name : global block gift', 1, 1395038745),
(80, 'vi', 'themes', 'Sửa block', 'Name : global menu theme default', 'Name : global menu theme default', 1, 1395038767),
(81, 'vi', 'login', '[admin] thoát khỏi tài khoản quản trị', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395039014),
(82, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395039080),
(83, 'vi', 'login', '[admin] thoát khỏi tài khoản quản trị', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395039738),
(84, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395039906),
(85, 'vi', 'themes', 'Kích hoạt theme: "music"', '', '', 1, 1395039939),
(86, 'vi', 'themes', 'Kích hoạt theme: "default"', '', '', 1, 1395040280),
(87, 'vi', 'themes', 'Kích hoạt theme: "default"', '', '', 1, 1395040281),
(88, 'vi', 'themes', 'Kích hoạt theme: "music"', '', '', 1, 1395040421),
(89, 'vi', 'themes', 'Thêm block', 'Name : Video HOT', 'Name : Video HOT', 1, 1395040876),
(90, 'vi', 'themes', 'Thêm block', 'Name : Rating song', 'Name : Rating song', 1, 1395041128),
(91, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395041278),
(92, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395041304),
(93, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395041328),
(94, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395041368),
(95, 'vi', 'login', '[admin] thoát khỏi tài khoản quản trị', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395041593),
(96, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395041833),
(97, 'vi', 'upload', 'Upload file', 'images/wb0pggm81.png', 'images/wb0pggm81.png', 1, 1395041857),
(98, 'vi', 'upload', 'Upload file', 'images/wb0pggm81_1.png', 'images/wb0pggm81_1.png', 1, 1395042005),
(99, 'vi', 'login', '[admin] thoát khỏi tài khoản quản trị', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395042034),
(100, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395042123),
(101, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395042148),
(102, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395042200),
(103, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395042321),
(104, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395042375),
(105, 'vi', 'themes', 'Sửa block', 'Name : Rating song', 'Name : Rating song', 1, 1395042489),
(106, 'vi', 'music', 'Sửa thể loại bài hát', 'Nhạc trẻ&nbsp;=&gt;&nbsp;Cô đơn', 'Nhạc trẻ&nbsp;=&gt;&nbsp;Cô đơn', 1, 1395042599),
(107, 'vi', 'music', 'Sửa thể loại bài hát', 'Cô đơn&nbsp;=&gt;&nbsp;Vui', 'Cô đơn&nbsp;=&gt;&nbsp;Vui', 1, 1395042623),
(108, 'vi', 'music', 'Thêm thể loại bài hát', 'Buồn', 'Buồn', 1, 1395042630),
(109, 'vi', 'music', 'Thêm thể loại bài hát', 'Đang Yêu', 'Đang Yêu', 1, 1395042637),
(110, 'vi', 'music', 'Sửa thể loại bài hát', 'Đang Yêu&nbsp;=&gt;&nbsp;Đang yêu', 'Đang Yêu&nbsp;=&gt;&nbsp;Đang yêu', 1, 1395042646),
(111, 'vi', 'music', 'Thêm thể loại bài hát', 'Thất tình', 'Thất tình', 1, 1395042654),
(112, 'vi', 'music', 'Thêm thể loại bài hát', 'Thư giãn', 'Thư giãn', 1, 1395042660),
(113, 'vi', 'themes', 'Thêm block', 'Name : Cảm xúc', 'Name : Cảm xúc', 1, 1395042750),
(114, 'vi', 'themes', 'Sửa block', 'Name : Cảm xúc', 'Name : Cảm xúc', 1, 1395042783),
(115, 'vi', 'themes', 'Thêm block', 'Name : module block mainalbum', 'Name : module block mainalbum', 1, 1395044885),
(116, 'vi', 'themes', 'Sửa block', 'Name : module block mainalbum', 'Name : module block mainalbum', 1, 1395045396),
(117, 'vi', 'themes', 'Sửa block', 'Name : module block mainalbum', 'Name : module block mainalbum', 1, 1395047459),
(118, 'vi', 'themes', 'Thêm block', 'Name : module block rating song', 'Name : module block rating song', 1, 1395047961),
(119, 'vi', 'themes', 'Sửa block', 'Name : module block rating song', 'Name : module block rating song', 1, 1395050596),
(120, 'vi', 'themes', 'Thêm block', 'Name : Bảng xếp hạng', 'Name : Bảng xếp hạng', 1, 1395050783),
(121, 'vi', 'themes', 'Sửa block', 'Name : Bảng xếp hạng', 'Name : Bảng xếp hạng', 1, 1395051744),
(122, 'vi', 'themes', 'Thêm block', 'Name : module block mainalbum', 'Name : module block mainalbum', 1, 1395052228),
(123, 'vi', 'themes', 'Sửa block', 'Name : Bảng xếp hạng', 'Name : Bảng xếp hạng', 1, 1395052460),
(124, 'vi', 'themes', 'Sửa block', 'Name : Bảng xếp hạng', 'Name : Bảng xếp hạng', 1, 1395052481),
(125, 'vi', 'themes', 'Sửa block', 'Name : Bảng xếp hạng', 'Name : Bảng xếp hạng', 1, 1395052495),
(126, 'vi', 'themes', 'Sửa block', 'Name : module block mainalbum', 'Name : module block mainalbum', 1, 1395052523),
(127, 'vi', 'themes', 'Sửa block', 'Name : module block mainalbum', 'Name : module block mainalbum', 1, 1395052714),
(128, 'vi', 'themes', 'Sửa block', 'Name : module block mainalbum', 'Name : module block mainalbum', 1, 1395052741),
(129, 'vi', 'music', 'Sửa thể loại bài hát', 'Vui&nbsp;=&gt;&nbsp;Pop Việt', 'Vui&nbsp;=&gt;&nbsp;Pop Việt', 1, 1395055846),
(130, 'vi', 'music', 'Sửa thể loại bài hát', 'Buồn&nbsp;=&gt;&nbsp;Rock Việt', 'Buồn&nbsp;=&gt;&nbsp;Rock Việt', 1, 1395055862),
(131, 'vi', 'music', 'Sửa thể loại bài hát', 'Đang yêu&nbsp;=&gt;&nbsp;Rap Việt', 'Đang yêu&nbsp;=&gt;&nbsp;Rap Việt', 1, 1395055889),
(132, 'vi', 'music', 'Sửa thể loại bài hát', 'Thất tình&nbsp;=&gt;&nbsp;Nhạc Trịnh', 'Thất tình&nbsp;=&gt;&nbsp;Nhạc Trịnh', 1, 1395055903),
(133, 'vi', 'music', 'Sửa thể loại bài hát', 'Thư giãn&nbsp;=&gt;&nbsp;Pop Nhật', 'Thư giãn&nbsp;=&gt;&nbsp;Pop Nhật', 1, 1395055916),
(134, 'vi', 'music', 'Thêm thể loại bài hát', 'Nhạc Truyền Thống', 'Nhạc Truyền Thống', 1, 1395055940),
(135, 'vi', 'music', 'Thêm thể loại bài hát', 'Rap &#x002F; Hip Hop', 'Rap &#x002F; Hip Hop', 1, 1395055950),
(136, 'vi', 'music', 'Thêm thể loại bài hát', 'Nhạc Thiếu Nhi', 'Nhạc Thiếu Nhi', 1, 1395055959),
(137, 'vi', 'music', 'Thêm thể loại bài hát', 'Rock', 'Rock', 1, 1395055968),
(138, 'vi', 'music', 'Thêm thể loại bài hát', 'Nhạc Phim', 'Nhạc Phim', 1, 1395055976),
(139, 'vi', 'music', 'Thêm thể loại bài hát', 'Nhạc Dance', 'Nhạc Dance', 1, 1395055984),
(140, 'vi', 'music', 'Thêm thể loại bài hát', 'Nhạc Không Lời', 'Nhạc Không Lời', 1, 1395055994),
(141, 'vi', 'music', 'Thêm thể loại bài hát', 'Quốc Gia Khác', 'Quốc Gia Khác', 1, 1395056002),
(142, 'vi', 'music', 'Thêm thể loại bài hát', 'Nhạc Trữ Tình', 'Nhạc Trữ Tình', 1, 1395056017),
(143, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395056480),
(144, 'vi', 'themes', 'Thêm block', 'Name : Thể loại Video', 'Name : Thể loại Video', 1, 1395057681),
(145, 'vi', 'themes', 'Sửa block', 'Name : Thể loại Video', 'Name : Thể loại Video', 1, 1395057897),
(146, 'vi', 'music', 'Thêm thể loại clip', 'Kpop', 'Kpop', 1, 1395058326),
(147, 'vi', 'music', 'Thêm thể loại clip', 'Jpop', 'Jpop', 1, 1395058334),
(148, 'vi', 'music', 'Sửa thể loại clip', 'Vpop&nbsp;=&gt;&nbsp;Việt Nam', 'Vpop&nbsp;=&gt;&nbsp;Việt Nam', 1, 1395058832),
(149, 'vi', 'music', 'Sửa thể loại clip', 'Kpop&nbsp;=&gt;&nbsp;Âu Mỹ', 'Kpop&nbsp;=&gt;&nbsp;Âu Mỹ', 1, 1395058847),
(150, 'vi', 'music', 'Sửa thể loại clip', 'Jpop&nbsp;=&gt;&nbsp;Hàn Quốc', 'Jpop&nbsp;=&gt;&nbsp;Hàn Quốc', 1, 1395058862),
(151, 'vi', 'music', 'Thêm thể loại clip', 'Nhật Bản', 'Nhật Bản', 1, 1395058897),
(152, 'vi', 'music', 'Thêm thể loại clip', 'Hoa Ngữ', 'Hoa Ngữ', 1, 1395058904),
(153, 'vi', 'music', 'Thêm thể loại clip', 'Hòa Tấu', 'Hòa Tấu', 1, 1395058910),
(154, 'vi', 'music', 'Thêm thể loại clip', 'Nhạc Trữ Tình', 'Nhạc Trữ Tình', 1, 1395058944),
(155, 'vi', 'music', 'Thêm thể loại clip', 'Nhạc Quê Hương', 'Nhạc Quê Hương', 1, 1395058957),
(156, 'vi', 'music', 'Thêm thể loại clip', 'Nhạc Cách Mạng', 'Nhạc Cách Mạng', 1, 1395058973),
(157, 'vi', 'music', 'Thêm thể loại clip', 'Nhạc Thiếu Nhi', 'Nhạc Thiếu Nhi', 1, 1395059004),
(158, 'vi', 'music', 'Thêm thể loại clip', 'Rock Việt', 'Rock Việt', 1, 1395059052),
(159, 'vi', 'music', 'Thêm thể loại clip', 'Rap Việt', 'Rap Việt', 1, 1395059061),
(160, 'vi', 'music', 'Thêm thể loại clip', 'Electronic &#x002F; Dance', 'Electronic &#x002F; Dance', 1, 1395059083),
(161, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/capture.png', 'uploads/music/clipthumb/capture.png', 1, 1395059269),
(162, 'vi', 'music', 'Thêm thể loại clip', 'AudioPhile', 'AudioPhile', 1, 1395059404),
(163, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395064547),
(164, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395064615),
(165, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395064676),
(166, 'vi', 'music', 'Thêm thể loại bài hát', 'Hàn Quốc', 'Hàn Quốc', 1, 1395064909),
(167, 'vi', 'music', 'Thêm thể loại bài hát', 'Âu Mỹ', 'Âu Mỹ', 1, 1395064930),
(168, 'vi', 'music', 'Sửa thể loại bài hát', 'Việt Nam&nbsp;=&gt;&nbsp;Việt Nam', 'Việt Nam&nbsp;=&gt;&nbsp;Việt Nam', 1, 1395065167),
(169, 'vi', 'music', 'Sửa thể loại bài hát', 'Việt Nam&nbsp;=&gt;&nbsp;Việt Nam', 'Việt Nam&nbsp;=&gt;&nbsp;Việt Nam', 1, 1395065179),
(170, 'vi', 'music', 'Thêm thể loại bài hát', 'sad', 'sad', 1, 1395065188),
(171, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395066516),
(172, 'vi', 'themes', 'Sửa block', 'Name : Bảng xếp hạng', 'Name : Bảng xếp hạng', 1, 1395067605),
(173, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395068590),
(174, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395069734),
(175, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:127.0.0.1', ' Client IP:127.0.0.1', 0, 1395104158),
(176, 'vi', 'themes', 'Sửa block', 'Name : Bài hát HOT', 'Name : Bài hát HOT', 1, 1395104419),
(177, 'vi', 'themes', 'Thêm block', 'Name : New song', 'Name : New song', 1, 1395107117),
(178, 'vi', 'themes', 'Thêm block', 'Name : Music BLOG', 'Name : Music BLOG', 1, 1395107984),
(179, 'vi', 'themes', 'Sửa block', 'Name : Music BLOG', 'Name : Music BLOG', 1, 1395108685),
(180, 'vi', 'themes', 'Sửa block', 'Name : Nhạc mới', 'Name : Nhạc mới', 1, 1395108835),
(181, 'vi', 'themes', 'Sửa block', 'Name : Nhạc HOT', 'Name : Nhạc HOT', 1, 1395108944),
(182, 'vi', 'themes', 'Sửa block', 'Name : Thể loại Video', 'Name : Thể loại Video', 1, 1395108968),
(183, 'vi', 'themes', 'Sửa block', 'Name : Thể loại Video', 'Name : Thể loại Video', 1, 1395109051),
(184, 'vi', 'themes', 'Sửa block', 'Name : Thể loại MP3', 'Name : Thể loại MP3', 1, 1395109148),
(185, 'vi', 'themes', 'Sửa block', 'Name : BXH Bài Hát', 'Name : BXH Bài Hát', 1, 1395109256),
(186, 'vi', 'themes', 'Sửa block', 'Name : BXH Bài Hát', 'Name : BXH Bài Hát', 1, 1395109276),
(187, 'vi', 'themes', 'Thêm block', 'Name : Menu footer', 'Name : Menu footer', 1, 1395110032),
(188, 'vi', 'themes', 'Thêm block', 'Name : Menu footer', 'Name : Menu footer', 1, 1395110075),
(189, 'vi', 'themes', 'Thêm block', 'Name : Xem trên Menu footer', 'Name : Xem trên Menu footer', 1, 1395110485),
(190, 'vi', 'themes', 'Thêm block', 'Name : Dịch Vụ', 'Name : Dịch Vụ', 1, 1395110619),
(191, 'vi', 'themes', 'Thêm block', 'Name : FOOTER SITE', 'Name : FOOTER SITE', 1, 1395111063),
(192, 'vi', 'themes', 'Thêm block', 'Name : facebook', 'Name : facebook', 1, 1395111579),
(193, 'vi', 'themes', 'Sửa block', 'Name : Nhạc mới', 'Name : Nhạc mới', 1, 1395113848),
(194, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395115095),
(195, 'vi', 'themes', 'Sửa block', 'Name : Album HOT', 'Name : Album HOT', 1, 1395125077),
(196, 'vi', 'themes', 'Sửa block', 'Name : New album slider', 'Name : New album slider', 1, 1395125169),
(197, 'vi', 'themes', 'Sửa block', 'Name : Album HOT', 'Name : Album HOT', 1, 1395125222),
(198, 'vi', 'themes', 'Thêm block', 'Name : Bài hát cùng thể loại', 'Name : Bài hát cùng thể loại', 1, 1395131047),
(199, 'vi', 'themes', 'Sửa block', 'Name : Bài hát cùng thể loại', 'Name : Bài hát cùng thể loại', 1, 1395131205),
(200, 'vi', 'themes', 'Sửa block', 'Name : Bài hát cùng thể loại', 'Name : Bài hát cùng thể loại', 1, 1395131309),
(201, 'vi', 'themes', 'Thêm block', 'Name : Bài hát cùng album', 'Name : Bài hát cùng album', 1, 1395131466),
(202, 'vi', 'themes', 'Thêm block', 'Name : Bài hát cùng ca sĩ thể hiện', 'Name : Bài hát cùng ca sĩ thể hiện', 1, 1395132609),
(203, 'vi', 'themes', 'Thêm block', 'Name : Quà tặng', 'Name : Quà tặng', 1, 1395132668),
(204, 'vi', 'menu', 'De-lete menu item', 'Item ID  23', 'Item ID  23', 1, 1395137208),
(205, 'vi', 'menu', 'De-lete menu item', 'Item ID  24', 'Item ID  24', 1, 1395137216),
(206, 'vi', 'news', 'log_del_blockcat', 'block_catid 2', 'block_catid 2', 1, 1395194942),
(207, 'vi', 'news', 'log_edit_blockcat', 'blockid 1', 'blockid 1', 1, 1395194969),
(208, 'vi', 'news', 'Xóa Chuyên mục và các bài viết', 'Tuyển dụng', 'Tuyển dụng', 1, 1395194980),
(209, 'vi', 'news', 'Xóa Chuyên mục và các bài viết', 'Đối tác', 'Đối tác', 1, 1395194985),
(210, 'vi', 'news', 'Xóa Chuyên mục và các bài viết', 'Sản phẩm', 'Sản phẩm', 1, 1395194989),
(211, 'vi', 'news', 'Xóa Bài viết', ' Mã nguồn mở NukeViet giành giải ba Nhân tài đất Việt 2011', ' Mã nguồn mở NukeViet giành giải ba Nhân tài đất Việt 2011', 1, 1395195011),
(212, 'vi', 'news', 'Xóa Bài viết', ' Webnhanh.vn - website dịch vụ chuyên nghiệp cho NukeViet chính thức ra mắt', ' Webnhanh.vn - website dịch vụ chuyên nghiệp cho NukeViet chính thức ra mắt', 1, 1395195013),
(213, 'vi', 'news', 'Xóa Bài viết', ' Thư mời hợp tác liên kết quảng cáo và cung cấp hosting thử nghiệm', ' Thư mời hợp tác liên kết quảng cáo và cung cấp hosting thử nghiệm', 1, 1395195014),
(214, 'vi', 'news', 'Xóa Bài viết', ' Công bố dự án NukeViet 3.0 sau 1 tháng ra mắt VINADES.,JSC', ' Công bố dự án NukeViet 3.0 sau 1 tháng ra mắt VINADES.,JSC', 1, 1395195016),
(215, 'vi', 'news', 'log_del_source', 'Báo Hà Nội Mới', 'Báo Hà Nội Mới', 1, 1395195044),
(216, 'vi', 'news', 'log_del_source', 'VINADES.,JSC', 'VINADES.,JSC', 1, 1395195045),
(217, 'vi', 'news', 'log_del_source', 'NukeViet', 'NukeViet', 1, 1395195045),
(218, 'vi', 'news', 'log_del_source', 'Báo điện tử Dân Trí', 'Báo điện tử Dân Trí', 1, 1395195046),
(219, 'vi', 'upload', 'Upload file', 'uploads/news/2014_03/1-12504.jpg', 'uploads/news/2014_03/1-12504.jpg', 1, 1395195113),
(220, 'vi', 'news', 'Sửa bài viết', 'Trịnh Thăng Bình cố gắng níu kéo dù bị Lại Hương Thảo phản bội', 'Trịnh Thăng Bình cố gắng níu kéo dù bị Lại Hương Thảo phản bội', 1, 1395195147),
(221, 'vi', 'upload', 'Upload file', 'uploads/news/2014_03/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg', 'uploads/news/2014_03/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg', 1, 1395195251),
(222, 'vi', 'news', 'Thêm bài viết', 'HyunA &#40;4Minute&#41; &quot;hứng đá&quot; vì cảnh khoe ngực', 'HyunA &#40;4Minute&#41; &quot;hứng đá&quot; vì cảnh khoe ngực', 1, 1395195297),
(223, 'vi', 'upload', 'Upload file', 'uploads/news/2014_03/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg', 'uploads/news/2014_03/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg', 1, 1395195437),
(224, 'vi', 'news', 'Thêm bài viết', 'Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &quot;báng bổ&quot;', 'Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &quot;báng bổ&quot;', 1, 1395195463),
(225, 'vi', 'upload', 'Upload file', 'uploads/news/2014_03/img_2549-97780.jpg', 'uploads/news/2014_03/img_2549-97780.jpg', 1, 1395195531),
(226, 'vi', 'news', 'Thêm bài viết', 'Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng', 'Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng', 1, 1395195568),
(227, 'vi', 'upload', 'Upload file', 'uploads/news/2014_03/ht-28829-16e81.jpg', 'uploads/news/2014_03/ht-28829-16e81.jpg', 1, 1395195816),
(228, 'vi', 'news', 'Thêm bài viết', 'Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng', 'Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng', 1, 1395195845),
(229, 'vi', 'themes', 'Thêm block', 'Name : Quà tặng âm nhạc ngoài trang chủ', 'Name : Quà tặng âm nhạc ngoài trang chủ', 1, 1395196344),
(230, 'vi', 'upload', 'Upload file', 'uploads/music/ads/cutcaster-photo-100179376-four-music-equalizer-web-banners.png', 'uploads/music/ads/cutcaster-photo-100179376-four-music-equalizer-web-banners.png', 1, 1395197128),
(231, 'vi', 'login', '[admin] thoát khỏi tài khoản quản trị', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395199566),
(232, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395200505),
(233, 'vi', 'themes', 'Sửa block', 'Name : Tìm kiếm', 'Name : Tìm kiếm', 1, 1395200579),
(234, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395201711),
(235, 'vi', 'themes', 'Thêm block', 'Name : menu site', 'Name : menu site', 1, 1395212982),
(236, 'vi', 'themes', 'Sửa block', 'Name : menu site', 'Name : menu site', 1, 1395213243),
(237, 'vi', 'themes', 'Sửa block', 'Name : menu site', 'Name : menu site', 1, 1395213296),
(238, 'vi', 'themes', 'Sửa block', 'Name : Thể loại MP3', 'Name : Thể loại MP3', 1, 1395214398),
(239, 'vi', 'themes', 'Sửa block', 'Name : Thể loại Video', 'Name : Thể loại Video', 1, 1395214416),
(240, 'vi', 'themes', 'Thêm block', 'Name : Facebook', 'Name : Facebook', 1, 1395215389),
(241, 'vi', 'music', 'Add song f-rom mp3.zing.vn', 'List song', 'List song', 1, 1395215996),
(242, 'vi', 'music', 'Add song f-rom mp3.zing.vn', 'List song', 'List song', 1, 1395216012),
(243, 'vi', 'music', 'Thêm nhạc từ nhac.vui.vn', 'List song', 'List song', 1, 1395216134),
(244, 'vi', 'music', 'Thêm nhạc từ nhac.vui.vn', 'List song', 'List song', 1, 1395216159),
(245, 'vi', 'music', 'Add song f-rom nhacso.net', 'List song', 'List song', 1, 1395216209),
(246, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/emlaai.png', 'uploads/music/clipthumb/emlaai.png', 1, 1395216978),
(247, 'vi', 'modules', 'Thiết lập module mới forum"', '', '', 1, 1395217311),
(248, 'vi', 'modules', 'Sửa module &ldquo;forum&rdquo;', '', '', 1, 1395217314),
(249, 'vi', 'themes', 'Thêm block', 'Name : Upload', 'Name : Upload', 1, 1395219616),
(250, 'vi', 'login', '[admin] thoát khỏi tài khoản quản trị', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395220545),
(251, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395220646),
(252, 'vi', 'themes', 'Sửa block', 'Name : Facebook', 'Name : Facebook', 1, 1395220799),
(253, 'vi', 'themes', 'Sửa block', 'Name : Facebook', 'Name : Facebook', 1, 1395220831),
(254, 'vi', 'upload', 'Upload file', 'images/logo_2.png', 'images/logo_2.png', 1, 1395221372),
(255, 'vi', 'modules', 'Thiết lập module mới articles"', '', '', 1, 1395221787),
(256, 'vi', 'modules', 'Sửa module &ldquo;articles&rdquo;', '', '', 1, 1395221790),
(257, 'vi', 'articles', 'Thêm bài mới', 'Tuyển Dụng', 'Tuyển Dụng', 1, 1395221872),
(258, 'vi', 'about', 'De-lete about', 'ID:  2', 'ID:  2', 1, 1395221879),
(259, 'vi', 'about', 'Edit about', 'ID:  1', 'ID:  1', 1, 1395221906),
(260, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395221975),
(261, 'vi', 'articles', 'Thêm bài mới', 'Chính sách riêng tư', 'Chính sách riêng tư', 1, 1395222039),
(262, 'vi', 'articles', 'Thêm bài mới', 'Điều khoản sử dụng', 'Điều khoản sử dụng', 1, 1395222149),
(263, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/tunayvesau.jpg', 'uploads/music/clipthumb/tunayvesau.jpg', 1, 1395223651),
(264, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/timyeu.jpg', 'uploads/music/clipthumb/timyeu.jpg', 1, 1395224004),
(265, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/bikipcuagai.jpg', 'uploads/music/clipthumb/bikipcuagai.jpg', 1, 1395224362),
(266, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/minhyeunhaudi.jpg', 'uploads/music/clipthumb/minhyeunhaudi.jpg', 1, 1395224708),
(267, 'vi', 'upload', 'Upload file', 'uploads/music/clipthumb/bientinh.jpg', 'uploads/music/clipthumb/bientinh.jpg', 1, 1395224936),
(268, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395279918),
(269, 'vi', 'music', 'Thêm thể loại bài hát', 'demo', 'demo', 1, 1395304092),
(270, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395306210),
(271, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395309452),
(272, 'vi', 'themes', 'Sửa block', 'Name : Nhạc mới', 'Name : Nhạc mới', 1, 1395311135),
(273, 'vi', 'themes', 'Sửa block', 'Name : Thể loại MP3', 'Name : Thể loại MP3', 1, 1395311154),
(274, 'vi', 'themes', 'Sửa block', 'Name : Thể loại Video', 'Name : Thể loại Video', 1, 1395311167),
(275, 'vi', 'themes', 'Sửa block', 'Name : Tìm kiếm', 'Name : Tìm kiếm', 1, 1395311176),
(276, 'vi', 'themes', 'Sửa block', 'Name : Bài hát cùng thể loại', 'Name : Bài hát cùng thể loại', 1, 1395311190),
(277, 'vi', 'themes', 'Sửa block', 'Name : Bài hát cùng album', 'Name : Bài hát cùng album', 1, 1395311205),
(278, 'vi', 'themes', 'Sửa block', 'Name : Bài hát cùng ca sĩ thể hiện', 'Name : Bài hát cùng ca sĩ thể hiện', 1, 1395311227),
(279, 'vi', 'themes', 'Sửa block', 'Name : Upload', 'Name : Upload', 1, 1395311239),
(280, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395314433),
(281, 'vi', 'users', 'log_edit_user', 'userid 1', 'userid 1', 1, 1395314456),
(282, 'vi', 'themes', 'Thiết lập layout theme: "music"', '', '', 1, 1395314503),
(283, 'vi', 'themes', 'Sửa block', 'Name : Nhạc mới', 'Name : Nhạc mới', 1, 1395314523),
(284, 'vi', 'themes', 'Sửa block', 'Name : Bài hát cùng thể loại', 'Name : Bài hát cùng thể loại', 1, 1395314548),
(285, 'vi', 'themes', 'Sửa block', 'Name : menu site', 'Name : menu site', 1, 1395314660),
(286, 'vi', 'themes', 'Sửa block', 'Name : BXH Bài Hát', 'Name : BXH Bài Hát', 1, 1395314673),
(287, 'vi', 'themes', 'Sửa block', 'Name : Facebook', 'Name : Facebook', 1, 1395314680),
(288, 'vi', 'themes', 'Sửa block', 'Name : Menu footer', 'Name : Menu footer', 1, 1395314691),
(289, 'vi', 'themes', 'Sửa block', 'Name : Menu footer', 'Name : Menu footer', 1, 1395314715),
(290, 'vi', 'themes', 'Sửa block', 'Name : Xem trên Menu footer', 'Name : Xem trên Menu footer', 1, 1395314727),
(291, 'vi', 'themes', 'Sửa block', 'Name : FOOTER SITE', 'Name : FOOTER SITE', 1, 1395314740),
(292, 'vi', 'themes', 'Sửa block', 'Name : Đăng nhập, đăng ký', 'Name : Đăng nhập, đăng ký', 1, 1395314755),
(293, 'vi', 'themes', 'Sửa block', 'Name : menu site', 'Name : menu site', 1, 1395314766),
(294, 'vi', 'themes', 'Sửa block', 'Name : Music BLOG', 'Name : Music BLOG', 1, 1395314777),
(295, 'vi', 'themes', 'Sửa block', 'Name : Tin mới', 'Name : Tin mới', 1, 1395314793),
(296, 'vi', 'upload', 'Upload file', 'uploads/music/ads/487922_330691810365272_1505486174_n.jpg', 'uploads/music/ads/487922_330691810365272_1505486174_n.jpg', 1, 1395315937),
(297, 'vi', 'upload', 'Upload file', 'uploads/music/ads/1395281249-liena-300250-7.swf', 'uploads/music/ads/1395281249-liena-300250-7.swf', 1, 1395316547),
(298, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395369640),
(299, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/f3ccdd27d2000e3f9255a7e3e2c48800_1300333297.jpg', 'uploads/music/singerthumb/f3ccdd27d2000e3f9255a7e3e2c48800_1300333297.jpg', 1, 1395370653),
(300, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/e9f46f968c158fdbda86a394b1cf9903_1292581786.jpg', 'uploads/music/singerthumb/e9f46f968c158fdbda86a394b1cf9903_1292581786.jpg', 1, 1395370779),
(301, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/ad7bc863acc50ad3b747c51c2f85b431_1378461448.jpg', 'uploads/music/singerthumb/ad7bc863acc50ad3b747c51c2f85b431_1378461448.jpg', 1, 1395370850),
(302, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/885aac931f9b0cf4b242041673aea6e0_1369988099.jpg', 'uploads/music/singerthumb/885aac931f9b0cf4b242041673aea6e0_1369988099.jpg', 1, 1395370887),
(303, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/4e2b0ef28ab651d398a1883c71dbfaf4_1371203800.jpg', 'uploads/music/singerthumb/4e2b0ef28ab651d398a1883c71dbfaf4_1371203800.jpg', 1, 1395370926),
(304, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/1b03ea82b35e244e353228d6417cd53c_1380765906.jpg', 'uploads/music/singerthumb/1b03ea82b35e244e353228d6417cd53c_1380765906.jpg', 1, 1395370953),
(305, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/8ca3496940e6e3497c8aa7da1db7b788_1373365849.jpg', 'uploads/music/singerthumb/8ca3496940e6e3497c8aa7da1db7b788_1373365849.jpg', 1, 1395370984),
(306, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/4864e650e84562ba9fc77d879bd164c2_1392224809.jpg', 'uploads/music/singerthumb/4864e650e84562ba9fc77d879bd164c2_1392224809.jpg', 1, 1395371030),
(307, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/a0ab8112abab50b3de78d440a15e211e_1371293203.jpg', 'uploads/music/singerthumb/a0ab8112abab50b3de78d440a15e211e_1371293203.jpg', 1, 1395371067),
(308, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/73853c4742e70a9cab7e779c922ea7cd_1370016346.png', 'uploads/music/singerthumb/73853c4742e70a9cab7e779c922ea7cd_1370016346.png', 1, 1395371121),
(309, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/150840b5b5849fc50cfd4902cc102d99_1343638478.jpg', 'uploads/music/singerthumb/150840b5b5849fc50cfd4902cc102d99_1343638478.jpg', 1, 1395371167),
(310, 'vi', 'upload', 'Upload file', 'uploads/music/singerthumb/a260f97c9c737d7b147004fec82ab940_1389407478.jpg', 'uploads/music/singerthumb/a260f97c9c737d7b147004fec82ab940_1389407478.jpg', 1, 1395371191),
(311, 'vi', 'login', '[megacode] Đăng nhập thất bại', ' Client IP:117.3.102.76', ' Client IP:117.3.102.76', 0, 1395371333),
(312, 'vi', 'login', '[admin] Đăng nhập', ' Client IP:117.1.177.87', ' Client IP:117.1.177.87', 0, 1395371367),
(313, 'vi', 'modules', 'Sửa module &ldquo;articles&rdquo;', '', '', 1, 1395371394),
(314, 'vi', 'webtools', 'Dọn dẹp hệ thống', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 'clearcache, clearsession, clearfiletemp, clearerrorlogs, clearip_logs', 1, 1395372281);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_sessions`
--

CREATE TABLE IF NOT EXISTS `nv3_sessions` (
  `session_id` varchar(50) DEFAULT NULL,
  `uid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `full_name` varchar(100) NOT NULL,
  `onl_time` int(11) unsigned NOT NULL DEFAULT '0',
  UNIQUE KEY `session_id` (`session_id`),
  KEY `onl_time` (`onl_time`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_sessions`
--

INSERT INTO `nv3_sessions` (`session_id`, `uid`, `full_name`, `onl_time`) VALUES
('889f2cb6dafebdd73105dc8321dace4d1934514578', 0, 'guest', 1395372580);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_setup`
--

CREATE TABLE IF NOT EXISTS `nv3_setup` (
  `lang` char(2) NOT NULL,
  `module` varchar(50) NOT NULL,
  `tables` varchar(255) NOT NULL,
  `version` varchar(100) NOT NULL,
  `setup_time` int(11) unsigned NOT NULL DEFAULT '0',
  UNIQUE KEY `lang` (`lang`,`module`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_setup_language`
--

CREATE TABLE IF NOT EXISTS `nv3_setup_language` (
  `lang` char(2) NOT NULL,
  `setup` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`lang`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_setup_language`
--

INSERT INTO `nv3_setup_language` (`lang`, `setup`) VALUES
('vi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_setup_modules`
--

CREATE TABLE IF NOT EXISTS `nv3_setup_modules` (
  `title` varchar(55) NOT NULL,
  `is_sysmod` tinyint(1) NOT NULL DEFAULT '0',
  `virtual` tinyint(1) NOT NULL DEFAULT '0',
  `module_file` varchar(50) NOT NULL DEFAULT '',
  `module_data` varchar(55) NOT NULL DEFAULT '',
  `mod_version` varchar(50) NOT NULL,
  `addtime` int(11) NOT NULL DEFAULT '0',
  `author` text NOT NULL,
  `note` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`title`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_setup_modules`
--

INSERT INTO `nv3_setup_modules` (`title`, `is_sysmod`, `virtual`, `module_file`, `module_data`, `mod_version`, `addtime`, `author`, `note`) VALUES
('about', 0, 1, 'about', 'about', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('banners', 1, 0, 'banners', 'banners', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('contact', 0, 1, 'contact', 'contact', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('news', 0, 1, 'news', 'news', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('voting', 0, 0, 'voting', 'voting', '3.1.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('forum', 0, 0, 'forum', 'forum', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('search', 1, 0, 'search', 'search', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('users', 1, 0, 'users', 'users', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('download', 0, 1, 'download', 'download', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('weblinks', 0, 1, 'weblinks', 'weblinks', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('statistics', 0, 0, 'statistics', 'statistics', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('faq', 0, 1, 'faq', 'faq', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('menu', 0, 1, 'menu', 'menu', '3.1.00 1273225635', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('rss', 1, 0, 'rss', 'rss', '3.0.01 1287532800', 1394790732, 'VINADES (contact@vinades.vn)', ''),
('music', 0, 1, 'music', 'music', '3.4.02 1363478400', 1394791396, 'PHAN TAN DUNG (phantandung92@gmail.com)', ''),
('articles', 0, 1, 'articles', 'articles', '3.1.0 1306128643', 1395221784, 'VINADES (contact@vinades.vn)', '');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_users`
--

CREATE TABLE IF NOT EXISTS `nv3_users` (
  `userid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL DEFAULT '',
  `md5username` char(32) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `full_name` varchar(255) NOT NULL DEFAULT '',
  `gender` char(1) NOT NULL,
  `photo` varchar(255) NOT NULL DEFAULT '',
  `birthday` int(11) NOT NULL,
  `sig` text,
  `regdate` int(11) NOT NULL DEFAULT '0',
  `website` varchar(255) NOT NULL DEFAULT '',
  `location` varchar(255) NOT NULL,
  `yim` varchar(100) NOT NULL DEFAULT '',
  `telephone` varchar(100) NOT NULL DEFAULT '',
  `fax` varchar(100) NOT NULL DEFAULT '',
  `mobile` varchar(100) NOT NULL DEFAULT '',
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL DEFAULT '',
  `passlostkey` varchar(40) NOT NULL DEFAULT '',
  `view_mail` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `remember` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `in_groups` varchar(255) NOT NULL DEFAULT '',
  `active` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `checknum` varchar(40) NOT NULL DEFAULT '',
  `last_login` int(11) unsigned NOT NULL DEFAULT '0',
  `last_ip` varchar(45) NOT NULL DEFAULT '',
  `last_agent` varchar(255) NOT NULL DEFAULT '',
  `last_openid` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `md5username` (`md5username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `nv3_users`
--

INSERT INTO `nv3_users` (`userid`, `username`, `md5username`, `password`, `email`, `full_name`, `gender`, `photo`, `birthday`, `sig`, `regdate`, `website`, `location`, `yim`, `telephone`, `fax`, `mobile`, `question`, `answer`, `passlostkey`, `view_mail`, `remember`, `in_groups`, `active`, `checknum`, `last_login`, `last_ip`, `last_agent`, `last_openid`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'e10adc3949ba59abbe56e057f20f883e', 'admin@yahoo.com', 'admin', '', '', 0, '', 1394790775, '', '', '', '', '', '', 'ban la ai', 'nam', '', 0, 1, '', 1, '', 1394790775, '', '', ''),
(2, 'chuayeuai', 'be858af074ebfbb6bc8deec88868e008', '53a61675759fe7f610e39c706ac0a9bbc771313b', 'chuayeuai.info@yahoo.com', '', '', '', 0, '', 1395036718, '', '', '', '', '', '', 'ban la ai', 'nam', '', 0, 1, '', 1, '73ca649c34f5ebd3d1053f209cb86468358f230e', 1395199591, '117.1.177.87', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0', '');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_users_config`
--

CREATE TABLE IF NOT EXISTS `nv3_users_config` (
  `config` varchar(100) NOT NULL,
  `content` mediumtext NOT NULL,
  `edit_time` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`config`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_users_config`
--

INSERT INTO `nv3_users_config` (`config`, `content`, `edit_time`) VALUES
('registertype', '1', 1394790732),
('deny_email', 'yoursite.com|mysite.com|localhost|xxx', 1394790732),
('deny_name', 'anonimo|anonymous|god|linux|nobody|operator|root', 1394790732),
('siteterms_vi', '<p> Để trở thành thành viên, bạn phải cam kết đồng ý với các điều khoản dưới đây. Chúng tôi có thể thay đổi lại những điều khoản này vào bất cứ lúc nào và chúng tôi sẽ cố gắng thông báo đến bạn kịp thời.<br  /> <br  /> Bạn cam kết không gửi bất cứ bài viết có nội dung lừa đảo, thô tục, thiếu văn hoá; vu khống, khiêu khích, đe doạ người khác; liên quan đến các vấn đề tình dục hay bất cứ nội dung nào vi phạm luật pháp của quốc gia mà bạn đang sống, luật pháp của quốc gia nơi đặt máy chủ của website này hay luật pháp quốc tế. Nếu vẫn cố tình vi phạm, ngay lập tức bạn sẽ bị cấm tham gia vào website. Địa chỉ IP của tất cả các bài viết đều được ghi nhận lại để bảo vệ các điều khoản cam kết này trong trường hợp bạn không tuân thủ.<br  /> <br  /> Bạn đồng ý rằng website có quyền gỡ bỏ, sửa, di chuyển hoặc khoá bất kỳ bài viết nào trong website vào bất cứ lúc nào tuỳ theo nhu cầu công việc.<br  /> <br  /> Đăng ký làm thành viên của chúng tôi, bạn cũng phải đồng ý rằng, bất kỳ thông tin cá nhân nào mà bạn cung cấp đều được lưu trữ trong cơ sở dữ liệu của hệ thống. Mặc dù những thông tin này sẽ không được cung cấp cho bất kỳ người thứ ba nào khác mà không được sự đồng ý của bạn, chúng tôi không chịu trách nhiệm về việc những thông tin cá nhân này của bạn bị lộ ra bên ngoài từ những kẻ phá hoại có ý đồ xấu tấn công vào cơ sở dữ liệu của hệ thống.</p>', 1274757129);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_users_openid`
--

CREATE TABLE IF NOT EXISTS `nv3_users_openid` (
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `openid` varchar(255) NOT NULL DEFAULT '',
  `opid` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`opid`),
  KEY `userid` (`userid`),
  KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_users_openid`
--

INSERT INTO `nv3_users_openid` (`userid`, `openid`, `opid`, `email`) VALUES
(3, 'https://www.google.com/accounts/o8/id?id=AItOawlO6QEXHGCyHel2EaholYqHD6lNiywJKUc', '1540a275401b4fc0d222ebd8f4d8d6b8112fc676', '82minh@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_users_question`
--

CREATE TABLE IF NOT EXISTS `nv3_users_question` (
  `qid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `lang` char(2) NOT NULL DEFAULT '',
  `weight` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `add_time` int(11) unsigned NOT NULL DEFAULT '0',
  `edit_time` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`qid`),
  UNIQUE KEY `title` (`title`,`lang`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `nv3_users_question`
--

INSERT INTO `nv3_users_question` (`qid`, `title`, `lang`, `weight`, `add_time`, `edit_time`) VALUES
(1, 'Bạn thích môn thể thao nào nhất', 'vi', 1, 1274840238, 1274840238),
(2, 'Món ăn mà bạn yêu thích', 'vi', 2, 1274840250, 1274840250),
(3, 'Thần tượng điện ảnh của bạn', 'vi', 3, 1274840257, 1274840257),
(4, 'Bạn thích nhạc sỹ nào nhất', 'vi', 4, 1274840264, 1274840264),
(5, 'Quê ngoại của bạn ở đâu', 'vi', 5, 1274840270, 1274840270),
(6, 'Tên cuốn sách &quot;gối đầu giường&quot;', 'vi', 6, 1274840278, 1274840278),
(7, 'Ngày lễ mà bạn luôn mong đợi', 'vi', 7, 1274840285, 1274840285);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_users_reg`
--

CREATE TABLE IF NOT EXISTS `nv3_users_reg` (
  `userid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL DEFAULT '',
  `md5username` char(32) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `full_name` varchar(255) NOT NULL DEFAULT '',
  `regdate` int(11) unsigned NOT NULL DEFAULT '0',
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL DEFAULT '',
  `checknum` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `login` (`username`),
  UNIQUE KEY `md5username` (`md5username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_about`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_about` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `bodytext` mediumtext NOT NULL,
  `keywords` mediumtext NOT NULL,
  `weight` smallint(4) NOT NULL DEFAULT '0',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `add_time` int(11) NOT NULL DEFAULT '0',
  `edit_time` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `alias` (`alias`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `nv3_vi_about`
--

INSERT INTO `nv3_vi_about` (`id`, `title`, `alias`, `bodytext`, `keywords`, `weight`, `admin_id`, `add_time`, `edit_time`, `status`) VALUES
(1, 'Thư viện mã nguồn Megacode', 'Thu-vien-ma-nguon-Megacode', '<p> <a href="http://megacode.vn"><strong>Megacode.vn</strong></a>&nbsp;là thư viện mã nguồn dành cho cộng đồng coder do <strong><a href="http://vinagon.com">Vinagon</a>&nbsp;</strong>phát triển vào&nbsp;giữa&nbsp;năm 2013. <strong><a href="http://megacode.vn">Megacode.vn&nbsp;</a></strong>mong muốn tạo dựng một thư viện mã nguồn lớn nhất Việt Nam.</p><p> Với các mã nguồn dưới dạng core và tài liệu kỹ thuật thực hành chuyên sâu <a href="http://megacode.vn"><strong>Megacode </strong></a>sẽ đem đến cho những ai yêu thích lập trình cũng như các coder, sinh viên CNTT có được kiến thức và nền tảng để tạo dựng lên những phần mềm, website xứng tầm thế giới.</p><p> Giao diện đơn giản gọn nhẹ không cồng kềnh, hệ thống tìm kiếm thông minh <a href="http://megacode.vn"><strong>Megacode.vn</strong></a> tự hào là website của Việt đầu tiên cung ứng dịch vụ này.</p><p style="text-align:center"> <img alt="" src="http://megacode.vn/media/megacode.vn.png" style="height:328px; width:500px" /></p><p> Các thành viên tham gia <strong><a href="http://megacode.vn">Megacode.vn</a> </strong>cần phải có một tài khoản và chấp hành theo đúng <strong><a href="http://megacode.vn/thong-tin/quy-dinh-chung.html">quy định</a></strong> của <strong><a href="http://megacode.vn">megacode.vn</a>. </strong>Thành viên mới sẽ&nbsp;được tặng <strong>Mega </strong>để làm vốn tích&nbsp;luỹ và có thể sử dụng số <strong>Mega</strong> đó để download file. Khi download file của người khác thành viên sẽ bị trừ <strong>Mega</strong>, số Mega bị trừ chính là số mega của file download.</p><p> Để tạo dựng thư viện chúng tôi bắt buộc các thành viên phải upload file lên để tích lũy <strong>Mega</strong><strong>. </strong>Ngoài việc upload file thành viên có thể&nbsp;nạp thẻ để đổi lấy <strong>Mega</strong> với chi phí cực thấp (đó chính là phí để duy trì và hỗ trợ các bạn sử dụng code).</p><p> <strong><a href="http://megacode.vn">Megacode.vn</a>&nbsp;</strong>có&nbsp;đội ngũ kỹ&nbsp;thuật luôn sẵn sàng hỗ trợ trực tuyến từ 8h sáng&nbsp;đến 22h&nbsp;đêm. Khi thành viên upload file chúng tôi&nbsp;đều có sự kiểm duyệt và các file sẽ&nbsp;được chức thực, được kiểm thử&nbsp;để cho các bạn an tâm lấy code mà không sợ code&nbsp;đó ko chạy hay là code có virult, shell.</p><p> Trên <strong><a href="http://megacode.vn">Megacode.vn</a>&nbsp;</strong>không hỗ trợ&nbsp;hay phát tán các phần mềm,&nbsp;website các code&nbsp;ăn cắp (vi phạm bản quyền).&nbsp;Đề nghị các bạn thông báo giúp chúng tôi nếu phát hiện&nbsp;ra sai phạm, chúng tôi sẽ xử lý nghiêm thành viên đó&nbsp;và hỗ trợ cơ quan pháp luật xử lý vi phạm này (khi có yêu cầu).</p><p> Chúng tôi hoạt động với phương châm <strong><em>&quot;tất cả vì cộng đồng&quot;.</em></strong></p>', 'thế hệ,hoàn toàn,phát triển,tài chính,nhân lực,thời gian,kết quả,sử dụng,cho phép,uyển chuyển,công nghệ,tận dụng,thành tựu,đảm bảo,nền tảng,có nghĩa,phụ thuộc,quá trình,có thể,tự lập,đồng nghĩa', 1, 1, 1275320174, 1395221906, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_articles`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_articles` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `homefileimg` varchar(255) NOT NULL,
  `hometext` text NOT NULL,
  `bodytext` mediumtext NOT NULL,
  `keywords` mediumtext NOT NULL,
  `author` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `link_active` smallint(2) NOT NULL DEFAULT '0',
  `link_redirect` text NOT NULL,
  `weight` smallint(4) NOT NULL DEFAULT '0',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `add_time` int(11) NOT NULL DEFAULT '0',
  `edit_time` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `comment` int(8) NOT NULL DEFAULT '0',
  `view` int(8) NOT NULL DEFAULT '0',
  `inhome` tinyint(2) NOT NULL DEFAULT '0',
  `allow_comment` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `alias` (`alias`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `nv3_vi_articles`
--

INSERT INTO `nv3_vi_articles` (`id`, `title`, `alias`, `homefileimg`, `hometext`, `bodytext`, `keywords`, `author`, `source`, `link_active`, `link_redirect`, `weight`, `admin_id`, `add_time`, `edit_time`, `status`, `comment`, `view`, `inhome`, `allow_comment`) VALUES
(1, 'Tuyển Dụng', 'Tuyen-Dung', '', 'Thông báo tuyển dụng tháng 3 năm 2014', '<div style="line-height:1.6"> <div class="page-header"> <h2> Thông báo tuyển dụng tháng 3 năm 2014</h2> </div> <div class="content-box"> <div class="content-page"> <div style="line-height:1.6"> <div class="content-box"> <div class="content-page"> <p> Nhằm mục đích mở rộng, phát triển đội ngũ kỹ thuật cho <a href="http://megacode.vn">Megacode </a>và các dự án khác của <a href="http://vinagon.com">Vinagon</a>, Vinagon cơ quan chủ quản của Megacode thông báo tuyển dụng &nbsp;tháng 03 năm 2014.</p> <p> <strong>Đối tượng: (Thực tập sinh học việc)</strong></p> <p> 1. Sinh viên năm cuối có nhu cầu học việc, thực tập sinh: <strong>10</strong> người</p> <p> 2. Người chưa có kinh nghiệm, mới tốt nghiệp ra trường có nhu cầu học việc:<strong> 10</strong> người</p> <p> 3. Kinh doanh phần mềm, website : <strong>05 Người</strong></p> <p> <strong>Yêu cầu kỹ năng:</strong></p> <p> - Am hiểu và đam mê về công nghệ thông tin - công nghệ phần mềm, ham học hỏi, cần cù chăm chỉ.</p> <p> - Biết tối thiểu 1 ngôn ngữ lập trình + 1 hệ quản trị CSDL ( PHP, VB, C#, HTML, CSS, JAVA ....) (MYSQL, MS SQL SERVER)</p> <p> - Tốt nghiệp trung cấp trở lên lĩnh vực công nghệ thông tin hoặc có liên quan đến CNTT.</p> <p> <strong>Công việc:</strong></p> <p> - Hỗ trợ kỹ thuật cho các thành viên trên Megacode.</p> <p> - Xây dựng các giao diện, module, component, block cho các mã nguồn mở: Joomla, Drupal, Magento, Wordpress, Nukeviet...</p> <p> - Phát triển các ứng dụng trên .NET, Java Mobile ...<br  /> - Tham gia phát triển các hệ thống phần mềm trên nền mã nguồn mở và các hệ thống dựa trên ngôn ngữ PHP, Javascript phát triển websites system và Web-Based Applications<br  /> - Xây dựng và lập trình các ứng dụng web<br  /> - Xây dựng và quản lý các ứng dụng web mới dựa trên nền tảng hiện tại<br  /> - Theo sát quy trình phát triển từ ý tưởng, triển khai, testing và đưa vào ứng dụng<br  /> - Phối hợp chặt chẽ với nhóm thiết kế để tạo tính tương thích của coding và giao diện<br  /> - Chuyển PSD sang Template (theo quy trình của công ty)</p> <p> <strong>Quyền lợi được hưởng:</strong></p> <p> <strong>- </strong>Có kinh nghiệm làm việc, có cơ hội được tham gia các dự án thực tế, có cơ hội làm việc trong môi trường chuyên nghiệp.</p> <p> - Thực tập sinh sẽ được nhận chính thức vào làm nhân viên nếu trong thời gian thực tập làm được công việc đáp ứng yêu cầu đề ra.</p> <p> - Thưởng các ngày lễ tết.</p> <p> - Mức lương cho kinh doanh thỏa thuận ( 3tr - 7tr ).</p> <p> - Đóng bảo hiểm khi là nhân viên chính thức.</p> <p> <strong>Hồ sơ bao gồm:</strong></p> <p> - 1 bộ hồ sơ đầy đủ bao gồm: SYLL, CV nêu rõ kinh nghiệm và quá trình làm việc, các bằng cấp (nếu là sinh viên photo thẻ sinh viên)...</p> <p> - Gửi hồ sơ qua email: <a href="mailto:info@vinagon.com">info@vinagon.com</a>; ghi rõ nội dung và đính kèm hồ sơ liên quan.</p> <p> - Bắt đầu nhận hồ sơ từ ngày <strong>21-02-2014 </strong>đến hết ngày <strong>30-03-2014</strong></p> <p> <strong>Thời gian làm việc:</strong></p> <p> - Các ngày trong tuần giờ hành chính, nghỉ chiều thứ 7 và chủ nhật.</p> <p> <strong>Nơi làm việc:</strong></p> <p> <a href="http://vinagon.com"><strong>Công ty TNHH Công Nghệ Số Rồng Việt - VinaGon</strong></a><br  /> VP Hà Nội: Số 5, Ngách 56, ngõ 139, Tam Trinh, Mai Động, Hoàng Mai, Hà Nội<br  /> Email: <a href="mailto:info@vinagon.com">info@vinagon.com</a> | Website: www.vinagon.com | Điện thoại: (+844) 6. 32.979.36; Hotline: <strong><span style="color:rgb(255, 0, 0)">0903 218 933</span></strong></p> </div> </div> </div> </div> </div></div>', '', '', '', 0, '', 1, 0, 1395221872, 1395221872, 1, 0, 5, 1, 1),
(2, 'Chính sách riêng tư', 'Chinh-sach-rieng-tu', '', 'Quy định chung', '<div class="content-box"> <div class="content-page"> <p> <strong>Điều 1: Thông tin tài khoản</strong><br  /> <br  /> Mọi người dùng khi đăng ký tham gia trên&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a> phải đăng ký tài khoản và khai báo trung thực thông tin cá nhân chính xác theo form đăng ký của&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>. Những tên tài khoản có dạng tên sau đây không được sử dụng trong rao vặt và hỏi đáp :&nbsp;<strong>webmaster, admin, tên của các chính trị gia Việt Nam, tên theo kiểu chữ số, ký tự lạ</strong>.<br  /> Khi tham gia đăng ký và kích hoạt tài khoản trên&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>&nbsp;bạn chấp nhận tuân thủ theo mọi quy định của&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a><br  /> <br  /> <strong>Điều 2: Quyền và nghĩa vụ thành viên</strong><br  /> <br  /> Thành viên có quyền Upload file lên&nbsp; <strong><a href="http://megacode.vn/">megacode.vn</a>&nbsp;</strong> trong giới hạn của Megacode.<br  /> <br  /> Thành viên có quyền sửa, xóa file của mình trên&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a><br  /> <br  /> Mọi người dùng có quyền bình luận, bình chọn các files upload trên&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a><br  /> &nbsp;&nbsp;&nbsp;<br  /> Thành viên chịu trách nhiệm các thông tin, File của mình đã upload lên&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>&nbsp;theo như quy chế đăng tin như sau:&nbsp;<br  /> <br  /> 1. Người đăng tin phải Upload file đúng mục tin, ảnh liên quan đến nội dung thông tin, tin ghi có dấu, đúng chính tả, viết hoa đầu dòng, tiêu đề và nội dung tin không sử dụng ký tự đặc biệt: &quot; !@#$%^&amp;*()&quot; , đầy đủ thông tin theo các tiêu chí của&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>&nbsp;đưa ra. Thông tin phù hợp với luật pháp, thuần phong mỹ tục của Việt Nam.<br  /> <br  /> 2. Người Upload file phải đăng tên, địa chỉ, điện thoại, email, YM, skype (nếu có) của bản thân . Tuyệt đối không được sử dụng thông tin các nhân của người khác để Upload, mang tính bêu xấu, quấy rối. Nếu cố tình vi phạm sẽ trực tiếp chịu trách nhiệm trước pháp luật vì hành động này của mình. VD: dùng một tài khoản đăng nhiều tin với nhiều tên khác nhau. Đối với trường hợp một thành viên đăng ký nhiều user khác nhau cùng 1 địa chỉ IP với mục đích đăng file spam, khi chúng tôi kiểm tra thì tất cả những user đó bị khóa mà không cần thông báo trước.<br  /> <br  /> 3. Với các tin file có nội dung giống nhau (có liên quan về mặt nội dung. ), thì chỉ được đăng tối đa 1 file vào 1 mục phù hợp , trong 1 ngày. Tiêu đề của file đăng lên phải là thông tin về file đó, không được đăng thông tin kiểu spam tràn lan. Về việc UP, tự reply để thông tin lên đầu, Mỗi ngày có thể up nhiều lần, tuy nhiên không được up 2 tin giống nhau liên tiếp trong vòng 30 phút.<br  /> <br  /> 4. Người Upload File phải có trách nhiệm làm đúng những gì đã cam kết với khách hàng sử dụng&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>, nếu người dùng phàn nàn về File và chứng minh được đó là lỗi của người Upload (vi phạm bản quyền) , thì người Upload phải có trách nhiệm đền bù đúng tổn thất thực tế cho người dùng (người bị vi phạm). Megacode sẽ cung cấp thông tin đầy đủ cho các cơ quan có thẩm quyền để xử lý vi phạm trên.<br  /> <br  /> 6.&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>&nbsp;được toàn quyền sử dụng đăng popup thông qua từ khóa trên google dẫn tới File upload.<br  /> <br  /> <strong>Điều 3: Cấm Upload files:</strong><br  /> <br  /> Upload những file vi phạm bản quyền, file có nội dung vi phạm Pháp luật Việt Nam.<br  /> <br  /> Đối với những File vi phạm quy định Upload trên&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>. Chúng tôi có quyền loại bỏ mà không cần báo trước:&nbsp;<br  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Có quyền xoá tất cả thông tin thành viên hoặc bài viết có nội dung vi phạm những điều trên.&nbsp;<br  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Có quyền xoá, loại bỏ những thành viên mà người sử dụng thông báo có hành vi gian trá, lừa đảo, Upload file có nội dung không đúng, phá hoại hay kích động.&nbsp;<br  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Không&nbsp; chịu trách nhiệm và không bảo đảm tính chính xác của những thông tin mà thành viên và người sử dụng đăng lên.&nbsp;<br  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Không chịu bất cứ trách nhiệm nào liên quan giữa sự trao đổi mua bán và hợp tác của các thành viên và người sử dụng trên website.<br  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Có quyền giới hạn các chức năng, quyền hạn sử dụng của người sử dụng trên website.<br  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Không&nbsp; chịu trách nhiệm trước Pháp Luật về các nội dung người sử dụng đăng tải.<br  /> <br  /> <strong>Điều 4. Các trường hợp công bố thông tin tài khoản.</strong><br  /> <br  /> Chúng tôi có thể công bố thông tin về tài khoản khi chúng tôi tin chắc rằng, việc công bố thông tin đó là thực sự cần thiết để:<br  /> <br  /> Bảo vệ quyền lợi, tài sản hoặc sự an toàn cho&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>, những người của chúng tôi hoặc những người khác, để điều tra hoặc ngăn ngừa các hành động phạm pháp, hoặc vi phạm các điều khoản yêu cầu khi đăng ký tài khoản của&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>.<br  /> <br  /> Theo yêu cầu của pháp luật, phải cung cấp thông tin cho các cơ quan chức năng.<br  /> <br  /> Chúng tôi có quyền thay đổi một hay nhiều điều khoản có trong quy định này mà không cần giải thích lý do và cũng không cần thông báo trước. Người sử dụng có trách nhiệm phải xem thường xuyên bảng quy định và điều lệ này để sử dụng&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>&nbsp;hiệu quả hơn.<br  /> <br  /> Nếu người đăng tin vi phạm 1 trong các điều nêu trên chúng tôi có thể xóa bỏ File vi phạm, nếu tiếp tục lặp lại thì toàn bộ tin của thành viên sẽ bị xóa, nếu thành viên cố tình lập nhiều tài khoản để đăng quảng cáo cho một tổ chức, doanh nghiệp thì toàn bộ thông tin của tổ chức, doanh nghiệp đó sẽ bị xóa trên&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>&nbsp;bất kỳ lúc nào mà không cần sự đồng ý của bất kỳ bên nào, và sẽ không cần thông báo về việc này. Chúng tôi sẽ không chịu trách nhiệm về bất kỳ tổn thất, hay tranh chấp liên quan đến việc xóa thông tin vi phạm nội quy trên&nbsp;&nbsp;<a href="http://megacode.vn/"><strong>megacode.vn</strong></a>.<br  /> <br  /> Mọi quy định trên cũng vì mục đích tạo ra một môi trường mua bán bình đẳng, an toàn và thuận tiện cho tất cả người sử dụng. Kính mong quý khách chấp hành đúng.</p> </div></div>', '', '', '', 0, '', 2, 0, 1395222039, 1395222039, 1, 0, 1, 1, 1),
(3, 'Điều khoản sử dụng', 'Dieu-khoan-su-dung', '', 'Cách thức nạp Mega cho TV Megacode', '<div class="content-box"> <div class="content-page"> <p> <a href="http://megacode.vn/" style="margin: 0px; padding: 0px; color: rgb(0, 101, 149); text-decoration: none; font-family: Arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 16px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);"><strong>Megacode.vn</strong></a><span style="background-color:rgb(255, 255, 255); color:rgb(79, 79, 79); font-family:arial; font-size:12px"> thư viện mã nguồn dành cho cộng đồng coder</span><strong> </strong></p> <p> <strong>Megacode có 3 cách để bạn tích lũy MEGA.</strong></p> <p> <strong>Cách 1: </strong>Upload file mã nguồn để đổi lấy mega; bạn đăng nhập tài khoản và truy cập phần upload file <a href="http://megacode.vn/files/post.html">http://megacode.vn/files/post.html</a></p> <p> <strong>Cách 2</strong>: Nạp thẻ cào điện thoại, game; bạn đăng nhập tài khoản và truy cập phần nạp Mega <a href="http://megacode.vn/files/addmega.html">http://megacode.vn/files/addmega.html</a>&nbsp;<span style="color:rgb(165, 42, 42)"><strong>(1 mega = 2.000 đ )</strong></span></p> <p> <strong>Cách 3: </strong>Nạp Mega bằng cách chuyển tiền qua tài khoản ngân hàng với mệnh giá <strong>200.000 đ </strong>trở lên.</p> <p> <span style="color:rgb(178, 34, 34)"><strong>GIÁ</strong></span>&nbsp;<span style="color:rgb(178, 34, 34)"><strong>KHUYẾN MẠI ( 1 mega = 1.800 đ&nbsp;)</strong></span></p> <p> * Ngân hàng <strong><em>Vietcombank</em>: Ngân hàng thương mại cổ phần Ngoại thương Việt Nam</strong> - <strong>Chi nhánh Hà Nội</strong></p> <p> * Số TK: <strong>0011004001014</strong></p> <p> * CTK: <strong>PHUNG CONG DINH</strong></p> <p> Mọi thắc mắc xin liên hệ <a href="http://megacode.vn/contact.html">http://megacode.vn/contact.html</a></p> <p style="text-align:center"> <img alt="" src="http://megacode.vn/media/megacode.vn.png" style="height:328px; width:500px" /></p> </div></div>&nbsp;', '', '', '', 0, '', 3, 0, 1395222149, 1395222149, 1, 0, 6, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_articles_block`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_articles_block` (
  `bid` int(11) unsigned NOT NULL,
  `id` int(11) unsigned NOT NULL,
  `weight` int(11) unsigned NOT NULL,
  UNIQUE KEY `bid` (`bid`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_articles_block_cat`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_articles_block_cat` (
  `bid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `adddefault` tinyint(4) NOT NULL DEFAULT '0',
  `number` mediumint(4) NOT NULL DEFAULT '10',
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `weight` smallint(4) NOT NULL DEFAULT '0',
  `keywords` mediumtext NOT NULL,
  `add_time` int(11) NOT NULL DEFAULT '0',
  `edit_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`bid`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `alias` (`alias`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_articles_comment`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_articles_comment` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL DEFAULT '0',
  `post_time` int(11) NOT NULL DEFAULT '0',
  `post_name` varchar(200) NOT NULL,
  `post_email` varchar(100) NOT NULL,
  `post_ip` varchar(50) NOT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '0',
  `content` text NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_blocks_groups`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_blocks_groups` (
  `bid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `theme` varchar(55) NOT NULL,
  `module` varchar(55) NOT NULL,
  `file_name` varchar(55) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `template` varchar(55) DEFAULT NULL,
  `position` varchar(55) DEFAULT NULL,
  `exp_time` int(11) DEFAULT '0',
  `active` tinyint(4) DEFAULT '0',
  `groups_view` varchar(255) DEFAULT '',
  `all_func` tinyint(4) NOT NULL DEFAULT '0',
  `weight` int(11) NOT NULL DEFAULT '0',
  `config` text,
  PRIMARY KEY (`bid`),
  KEY `theme` (`theme`),
  KEY `module` (`module`),
  KEY `position` (`position`),
  KEY `exp_time` (`exp_time`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=52 ;

--
-- Dumping data for table `nv3_vi_blocks_groups`
--

INSERT INTO `nv3_vi_blocks_groups` (`bid`, `theme`, `module`, `file_name`, `title`, `link`, `template`, `position`, `exp_time`, `active`, `groups_view`, `all_func`, `weight`, `config`) VALUES
(1, 'default', 'news', 'global.block_category.php', 'Menu', '', '', '[LEFT]', 0, 1, '0', 0, 1, 'a:1:{s:12:"title_length";i:25;}'),
(2, 'default', 'music', 'module.block_hot_playlist.php', 'global block gift', '', '', '[LEFT]', 0, 1, '0', 0, 2, ''),
(3, 'default', 'banners', 'global.banners.php', 'Quảng cáo trái', '', '', '[LEFT]', 0, 1, '0', 1, 3, 'a:1:{s:12:"idplanbanner";i:2;}'),
(4, 'default', 'about', 'global.about.php', 'Giới thiệu', '', 'orange', '[RIGHT]', 0, 1, '0', 1, 1, ''),
(5, 'default', 'users', 'global.login.php', 'Đăng nhập thành viên', '', '', '[RIGHT]', 0, 1, '0', 1, 2, ''),
(6, 'default', 'voting', 'global.voting_random.php', 'Thăm dò ý kiến', '', '', '[RIGHT]', 0, 1, '0', 1, 3, ''),
(7, 'default', 'news', 'module.block_headline.php', 'Tin nổi bật', '', 'no_title', '[TOP]', 0, 1, '0', 0, 1, ''),
(8, 'default', 'banners', 'global.banners.php', 'Quảng cáo giữa trang', '', 'no_title', '[TOP]', 0, 1, '0', 1, 2, 'a:1:{s:12:"idplanbanner";i:1;}'),
(9, 'modern', 'news', 'module.block_newscenter.php', 'Tin mới', '', 'no_title', '[HEADER]', 0, 1, '0', 0, 1, ''),
(10, 'modern', 'about', 'global.about.php', 'Giới thiệu', '', 'no_title_html', '[RIGHT]', 0, 1, '0', 1, 1, ''),
(11, 'modern', 'users', 'global.login.php', 'Đăng nhập', '', '', '[RIGHT]', 0, 1, '0', 1, 2, ''),
(12, 'modern', 'voting', 'global.voting_random.php', 'Thăm dò ý kiến', '', '', '[RIGHT]', 0, 1, '0', 1, 3, ''),
(13, 'modern', 'statistics', 'global.counter.php', 'Bộ đếm', '', '', '[RIGHT]', 0, 1, '0', 1, 4, ''),
(14, 'modern', 'news', 'module.block_newsright.php', 'News Right', '', 'no_title', '[RIGHT]', 0, 1, '0', 0, 5, ''),
(15, 'modern', 'banners', 'global.banners.php', 'Quảng cáo top banner', '', 'no_title', '[TOPADV]', 0, 1, '0', 1, 1, 'a:1:{s:12:"idplanbanner";i:1;}'),
(16, 'modern', 'menu', 'global.menu_theme_modern.php', 'global menu theme modern', '', 'no_title', '[MENU_SITE]', 0, 1, '0', 1, 1, ''),
(17, 'default', 'music', 'global.block_music_menu.php', 'global menu theme default', '', 'no_title', '[MENU_SITE]', 0, 1, '0', 1, 1, ''),
(18, 'modern', 'global', 'global.html.php', 'footer site', '', 'no_title', '[FOOTER_SITE]', 0, 1, '0', 1, 1, 'a:1:{s:11:"htmlcontent";s:274:"© Copyright NukeViet 3. All right reserved.<br  />Xây dựng trên nền tảng <a href="http://nukeviet.vn/" title="Mã nguồn mở NukeViet">Mã nguồn mở NukeViet</a>. <a href="http://vinades.vn/" title="Thiết kế web">Thiết kế website</a> bởi VINADES.,JSC";}'),
(19, 'default', 'global', 'global.html.php', 'footer site', '', 'no_title', '[FOOTER_SITE]', 0, 1, '0', 1, 1, 'a:1:{s:11:"htmlcontent";s:231:"<p class="footer"> © Copyright NukeViet 3. All right reserved.</p><p> Powered by <a href="http://nukeviet.vn/" title="NukeViet CMS">NukeViet CMS</a>. Design by <a href="http://vinades.vn/" title="VINADES.,JSC">VINADES.,JSC</a></p>";}'),
(20, 'mobile_nukeviet', 'menu', 'global.menu_theme_default.php', 'global menu theme default', '', 'no_title', '[MENU_SITE]', 0, 1, '0', 1, 1, ''),
(21, 'music', 'music', 'module.block_search.php', 'Tìm kiếm', '', 'no_title', '[SEARCH]', 0, 1, '0', 0, 1, ''),
(22, 'music', 'users', 'global.login.php', 'Đăng nhập, đăng ký', '', 'no_title', '[LOGIN]', 0, 1, '0', 1, 1, ''),
(25, 'music', 'news', 'global.block_tophits.php', 'Tin mới', '', 'news', '[NEWS]', 0, 1, '0', 1, 1, 'a:2:{s:10:"number_day";i:3650;s:6:"numrow";i:10;}'),
(26, 'music', 'music', 'module.block_newalbum.php', 'New album slider', '', 'no_title', '[SLIDER]', 0, 1, '0', 0, 1, ''),
(27, 'music', 'music', 'module.block_hotalbum.php', 'Album HOT', '', 'blog', '[PLAYLIST]', 0, 1, '0', 0, 1, ''),
(28, 'music', 'music', 'module.block_top_video.php', 'Video HOT', '', 'hotplaylist', '[VIDEO]', 0, 1, '0', 0, 1, ''),
(30, 'music', 'music', 'module.block_maincategory.php', 'Thể loại MP3', '', 'theloai', '[REAL]', 0, 1, '0', 0, 1, ''),
(33, 'music', 'music', 'global.block_country.php', 'BXH Bài Hát', '', 'bxh', '[BXH]', 0, 1, '0', 1, 1, ''),
(35, 'music', 'music', 'module.block_maincategoryvideo.php', 'Thể loại Video', '', 'theloai', '[REAL]', 0, 1, '0', 0, 2, ''),
(36, 'music', 'music', 'module.block_newsong.php', 'Nhạc mới', '', 'blog', '[MUSICNEW]', 0, 1, '0', 0, 1, ''),
(37, 'music', 'news', 'global.block_groups.php', 'Music BLOG', '', 'blog', '[NEWSMUSIC]', 0, 1, '0', 1, 1, 'a:2:{s:7:"blockid";i:1;s:6:"numrow";i:5;}'),
(38, 'music', 'menu', 'global.menu_style.php', 'Menu footer', '', 'no_title', '[FOOTER]', 0, 1, '0', 1, 1, 'a:4:{s:4:"type";i:9;s:6:"menuid";i:1;s:10:"is_viewdes";i:0;s:12:"title_length";i:20;}'),
(39, 'music', 'menu', 'global.menu_style.php', 'Menu footer', '', 'no_title', '[FOOTER]', 0, 1, '0', 1, 2, 'a:4:{s:4:"type";i:9;s:6:"menuid";i:2;s:10:"is_viewdes";i:0;s:12:"title_length";i:20;}'),
(40, 'music', 'menu', 'global.menu_style.php', 'Xem trên Menu footer', '', 'no_title', '[FOOTER]', 0, 1, '0', 1, 3, 'a:4:{s:4:"type";i:9;s:6:"menuid";i:3;s:10:"is_viewdes";i:0;s:12:"title_length";i:20;}'),
(41, 'music', 'menu', 'global.menu_style.php', 'Dịch Vụ', '', 'no_title', '[FOOTER]', 0, 1, '0', 1, 4, 'a:4:{s:4:"type";i:9;s:6:"menuid";i:4;s:10:"is_viewdes";i:0;s:12:"title_length";i:20;}'),
(42, 'music', 'global', 'global.html.php', 'FOOTER SITE', '', 'no_title', '[FOOTER]', 0, 1, '0', 1, 5, 'a:1:{s:11:"htmlcontent";s:245:"<p class="text-copyright"> Copyright © <a href="#">Megacode</a>.Megacode.vn - Thư viện mã nguồn chia sẻ, tải file cho cộng đồng <a href="#">VINAGON</a>. Địa chỉ: Số 38 Hàng Bè, Hàng Bạc, Hoàn Kiếm, Hà Nội. .</p>";}'),
(44, 'music', 'music', 'module.block_same_category.php', 'Bài hát cùng thể loại', '', 'cungtheloai', '[SONG]', 0, 1, '0', 0, 1, ''),
(45, 'music', 'music', 'module.block_samealbum.php', 'Bài hát cùng album', '', 'cungtheloai', '[SONG]', 0, 1, '0', 0, 2, ''),
(46, 'music', 'music', 'module.block_samesinger.php', 'Bài hát cùng ca sĩ thể hiện', '', 'cungtheloai', '[SONG]', 0, 1, '0', 0, 3, ''),
(47, 'music', 'music', 'global.block_gift.php', 'Quà tặng', '', 'cungtheloai', '[SONG]', 0, 1, '0', 1, 4, ''),
(49, 'music', 'menu', 'global.menu_style.php', 'menu site', '', 'no_title', '[MENU_SITE]', 0, 1, '0', 1, 1, 'a:4:{s:4:"type";i:10;s:6:"menuid";i:5;s:10:"is_viewdes";i:0;s:12:"title_length";i:20;}'),
(50, 'music', 'global', 'global.facebook_like.php', 'Facebook', '', 'no_title', '[FACE_BOOK]', 0, 1, '0', 1, 1, 'a:6:{s:6:"nickfb";s:10:"megacodevn";s:5:"width";i:325;s:6:"height";i:500;s:5:"faces";s:4:"true";s:6:"stream";s:5:"false";s:6:"header";s:4:"true";}'),
(51, 'music', 'music', 'module.block_upload.php', 'Upload', '', 'no_title', '[UPLOAD]', 0, 1, '0', 0, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_blocks_weight`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_blocks_weight` (
  `bid` int(11) NOT NULL DEFAULT '0',
  `func_id` int(11) NOT NULL DEFAULT '0',
  `weight` int(11) NOT NULL DEFAULT '0',
  UNIQUE KEY `bid` (`bid`,`func_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_blocks_weight`
--

INSERT INTO `nv3_vi_blocks_weight` (`bid`, `func_id`, `weight`) VALUES
(1, 5, 1),
(1, 6, 1),
(1, 7, 1),
(1, 13, 1),
(1, 15, 1),
(1, 16, 1),
(3, 2, 2),
(3, 36, 2),
(3, 39, 2),
(3, 42, 2),
(3, 43, 2),
(3, 27, 2),
(3, 5, 3),
(3, 6, 3),
(3, 7, 3),
(3, 13, 3),
(3, 15, 3),
(3, 16, 3),
(3, 47, 2),
(3, 46, 2),
(3, 28, 2),
(3, 29, 2),
(3, 30, 2),
(3, 31, 2),
(3, 32, 2),
(3, 33, 2),
(3, 34, 2),
(3, 17, 2),
(3, 25, 2),
(3, 24, 2),
(3, 23, 2),
(3, 22, 2),
(3, 21, 2),
(3, 20, 2),
(3, 19, 2),
(3, 18, 2),
(3, 26, 2),
(4, 2, 1),
(4, 36, 1),
(4, 39, 1),
(4, 42, 1),
(4, 43, 1),
(4, 27, 1),
(4, 5, 1),
(4, 6, 1),
(4, 7, 1),
(4, 13, 1),
(4, 15, 1),
(4, 16, 1),
(4, 47, 1),
(4, 46, 1),
(4, 28, 1),
(4, 29, 1),
(4, 30, 1),
(4, 31, 1),
(4, 32, 1),
(4, 33, 1),
(4, 34, 1),
(4, 17, 1),
(4, 25, 1),
(4, 24, 1),
(4, 23, 1),
(4, 22, 1),
(4, 21, 1),
(4, 20, 1),
(4, 19, 1),
(4, 18, 1),
(4, 26, 1),
(5, 2, 2),
(5, 36, 2),
(5, 39, 2),
(5, 42, 2),
(5, 43, 2),
(5, 27, 2),
(5, 5, 2),
(5, 6, 2),
(5, 7, 2),
(5, 13, 2),
(5, 15, 2),
(5, 16, 2),
(5, 47, 2),
(5, 46, 2),
(5, 28, 2),
(5, 29, 2),
(5, 30, 2),
(5, 31, 2),
(5, 32, 2),
(5, 33, 2),
(5, 34, 2),
(5, 17, 2),
(5, 25, 2),
(5, 24, 2),
(5, 23, 2),
(5, 22, 2),
(5, 21, 2),
(5, 20, 2),
(5, 19, 2),
(5, 18, 2),
(5, 26, 2),
(6, 2, 3),
(6, 36, 3),
(6, 39, 3),
(6, 42, 3),
(6, 43, 3),
(6, 27, 3),
(6, 5, 3),
(6, 6, 3),
(6, 7, 3),
(6, 13, 3),
(6, 15, 3),
(6, 16, 3),
(6, 47, 3),
(6, 46, 3),
(6, 28, 3),
(6, 29, 3),
(6, 30, 3),
(6, 31, 3),
(6, 32, 3),
(6, 33, 3),
(6, 34, 3),
(6, 17, 3),
(6, 25, 3),
(6, 24, 3),
(6, 23, 3),
(6, 22, 3),
(6, 21, 3),
(6, 20, 3),
(6, 19, 3),
(6, 18, 3),
(6, 26, 3),
(7, 7, 1),
(8, 2, 1),
(8, 36, 1),
(8, 39, 1),
(8, 42, 1),
(8, 43, 1),
(8, 27, 1),
(8, 5, 1),
(8, 6, 1),
(8, 7, 2),
(8, 13, 1),
(8, 15, 1),
(8, 16, 1),
(8, 47, 1),
(8, 46, 1),
(8, 28, 1),
(8, 29, 1),
(8, 30, 1),
(8, 31, 1),
(8, 32, 1),
(8, 33, 1),
(8, 34, 1),
(8, 17, 1),
(8, 25, 1),
(8, 24, 1),
(8, 23, 1),
(8, 22, 1),
(8, 21, 1),
(8, 20, 1),
(8, 19, 1),
(8, 18, 1),
(8, 26, 1),
(9, 7, 1),
(10, 2, 1),
(10, 36, 1),
(10, 39, 1),
(10, 42, 1),
(10, 43, 1),
(10, 27, 1),
(10, 5, 1),
(10, 6, 1),
(10, 7, 1),
(10, 13, 1),
(10, 15, 1),
(10, 16, 1),
(10, 47, 1),
(10, 46, 1),
(10, 28, 1),
(10, 29, 1),
(10, 30, 1),
(10, 31, 1),
(10, 32, 1),
(10, 33, 1),
(10, 34, 1),
(10, 17, 1),
(10, 25, 1),
(10, 24, 1),
(10, 23, 1),
(10, 22, 1),
(10, 21, 1),
(10, 20, 1),
(10, 19, 1),
(10, 18, 1),
(10, 26, 1),
(11, 2, 2),
(11, 36, 2),
(11, 39, 2),
(11, 42, 2),
(11, 43, 2),
(11, 27, 2),
(11, 5, 2),
(11, 6, 2),
(11, 7, 2),
(11, 13, 2),
(11, 15, 2),
(11, 16, 2),
(11, 47, 2),
(11, 46, 2),
(11, 28, 2),
(11, 29, 2),
(11, 30, 2),
(11, 31, 2),
(11, 32, 2),
(11, 33, 2),
(11, 34, 2),
(11, 17, 2),
(11, 25, 2),
(11, 24, 2),
(11, 23, 2),
(11, 22, 2),
(11, 21, 2),
(11, 20, 2),
(11, 19, 2),
(11, 18, 2),
(11, 26, 2),
(12, 2, 3),
(12, 36, 3),
(12, 39, 3),
(12, 42, 3),
(12, 43, 3),
(12, 27, 3),
(12, 5, 3),
(12, 6, 3),
(12, 7, 3),
(12, 13, 3),
(12, 15, 3),
(12, 16, 3),
(12, 47, 3),
(12, 46, 3),
(12, 28, 3),
(12, 29, 3),
(12, 30, 3),
(12, 31, 3),
(12, 32, 3),
(12, 33, 3),
(12, 34, 3),
(12, 17, 3),
(12, 25, 3),
(12, 24, 3),
(12, 23, 3),
(12, 22, 3),
(12, 21, 3),
(12, 20, 3),
(12, 19, 3),
(12, 18, 3),
(12, 26, 3),
(13, 2, 4),
(13, 36, 4),
(13, 39, 4),
(13, 42, 4),
(13, 43, 4),
(13, 27, 4),
(13, 5, 4),
(13, 6, 4),
(13, 7, 4),
(13, 13, 4),
(13, 15, 4),
(13, 16, 4),
(13, 47, 4),
(13, 46, 4),
(13, 28, 4),
(13, 29, 4),
(13, 30, 4),
(13, 31, 4),
(13, 32, 4),
(13, 33, 4),
(13, 34, 4),
(13, 17, 4),
(13, 25, 4),
(13, 24, 4),
(13, 23, 4),
(13, 22, 4),
(13, 21, 4),
(13, 20, 4),
(13, 19, 4),
(13, 18, 4),
(13, 26, 4),
(14, 5, 5),
(14, 6, 5),
(14, 7, 5),
(14, 13, 5),
(14, 15, 5),
(14, 16, 5),
(15, 2, 1),
(15, 36, 1),
(15, 39, 1),
(15, 42, 1),
(15, 43, 1),
(15, 27, 1),
(15, 5, 1),
(15, 6, 1),
(15, 7, 1),
(15, 13, 1),
(15, 15, 1),
(15, 16, 1),
(15, 47, 1),
(15, 46, 1),
(15, 28, 1),
(15, 29, 1),
(15, 30, 1),
(15, 31, 1),
(15, 32, 1),
(15, 33, 1),
(15, 34, 1),
(15, 17, 1),
(15, 25, 1),
(15, 24, 1),
(15, 23, 1),
(15, 22, 1),
(15, 21, 1),
(15, 20, 1),
(15, 19, 1),
(15, 18, 1),
(15, 26, 1),
(16, 2, 1),
(16, 36, 1),
(16, 39, 1),
(16, 42, 1),
(16, 43, 1),
(16, 27, 1),
(16, 5, 1),
(16, 6, 1),
(16, 7, 1),
(16, 13, 1),
(16, 15, 1),
(16, 16, 1),
(16, 47, 1),
(16, 46, 1),
(16, 33, 1),
(16, 32, 1),
(16, 30, 1),
(16, 29, 1),
(16, 31, 1),
(16, 28, 1),
(16, 34, 1),
(16, 24, 1),
(16, 20, 1),
(16, 21, 1),
(16, 26, 1),
(16, 23, 1),
(16, 18, 1),
(16, 25, 1),
(16, 17, 1),
(16, 22, 1),
(16, 19, 1),
(17, 2, 1),
(17, 36, 1),
(17, 39, 1),
(17, 42, 1),
(17, 43, 1),
(17, 27, 1),
(17, 5, 1),
(17, 6, 1),
(17, 7, 1),
(17, 13, 1),
(17, 15, 1),
(17, 16, 1),
(17, 47, 1),
(17, 46, 1),
(17, 33, 1),
(17, 32, 1),
(17, 30, 1),
(17, 29, 1),
(17, 31, 1),
(17, 28, 1),
(17, 34, 1),
(17, 24, 1),
(17, 20, 1),
(17, 21, 1),
(17, 26, 1),
(17, 23, 1),
(17, 18, 1),
(17, 25, 1),
(17, 17, 1),
(17, 22, 1),
(17, 19, 1),
(18, 2, 1),
(18, 36, 1),
(18, 39, 1),
(18, 42, 1),
(18, 43, 1),
(18, 27, 1),
(18, 5, 1),
(18, 6, 1),
(18, 7, 1),
(18, 13, 1),
(18, 15, 1),
(18, 16, 1),
(18, 47, 1),
(18, 46, 1),
(18, 33, 1),
(18, 32, 1),
(18, 30, 1),
(18, 29, 1),
(18, 31, 1),
(18, 28, 1),
(18, 34, 1),
(18, 24, 1),
(18, 20, 1),
(18, 21, 1),
(18, 26, 1),
(18, 23, 1),
(18, 18, 1),
(18, 25, 1),
(18, 17, 1),
(18, 22, 1),
(18, 19, 1),
(19, 2, 1),
(19, 36, 1),
(19, 39, 1),
(19, 42, 1),
(19, 43, 1),
(19, 27, 1),
(19, 5, 1),
(19, 6, 1),
(19, 7, 1),
(19, 13, 1),
(19, 15, 1),
(19, 16, 1),
(19, 47, 1),
(19, 46, 1),
(19, 33, 1),
(19, 32, 1),
(19, 30, 1),
(19, 29, 1),
(19, 31, 1),
(19, 28, 1),
(19, 34, 1),
(19, 24, 1),
(19, 20, 1),
(19, 21, 1),
(19, 26, 1),
(19, 23, 1),
(19, 18, 1),
(19, 25, 1),
(19, 17, 1),
(19, 22, 1),
(19, 19, 1),
(19, 48, 1),
(3, 48, 2),
(17, 48, 1),
(4, 48, 1),
(5, 48, 2),
(6, 48, 3),
(8, 48, 1),
(18, 48, 1),
(16, 48, 1),
(10, 48, 1),
(11, 48, 2),
(12, 48, 3),
(13, 48, 4),
(15, 48, 1),
(20, 2, 1),
(20, 36, 1),
(20, 39, 1),
(20, 42, 1),
(20, 43, 1),
(20, 27, 1),
(20, 5, 1),
(20, 6, 1),
(20, 7, 1),
(20, 13, 1),
(20, 15, 1),
(20, 16, 1),
(20, 47, 1),
(20, 46, 1),
(20, 33, 1),
(20, 32, 1),
(20, 30, 1),
(20, 29, 1),
(20, 31, 1),
(20, 28, 1),
(20, 34, 1),
(20, 48, 1),
(20, 24, 1),
(20, 20, 1),
(20, 21, 1),
(20, 26, 1),
(20, 23, 1),
(20, 18, 1),
(20, 25, 1),
(20, 17, 1),
(20, 22, 1),
(20, 19, 1),
(16, 35, 1),
(10, 35, 1),
(11, 35, 2),
(12, 35, 3),
(13, 35, 4),
(15, 35, 1),
(18, 35, 1),
(17, 35, 1),
(19, 35, 1),
(3, 35, 2),
(4, 35, 1),
(5, 35, 2),
(6, 35, 3),
(8, 35, 1),
(20, 35, 1),
(16, 50, 1),
(10, 50, 1),
(11, 50, 2),
(12, 50, 3),
(13, 50, 4),
(15, 50, 1),
(18, 50, 1),
(17, 50, 1),
(19, 50, 1),
(3, 50, 2),
(4, 50, 1),
(5, 50, 2),
(6, 50, 3),
(8, 50, 1),
(20, 50, 1),
(19, 65, 1),
(19, 63, 1),
(19, 62, 1),
(19, 70, 1),
(19, 67, 1),
(19, 53, 1),
(19, 74, 1),
(19, 56, 1),
(19, 64, 1),
(19, 54, 1),
(19, 79, 1),
(19, 77, 1),
(19, 75, 1),
(19, 71, 1),
(19, 60, 1),
(19, 66, 1),
(19, 61, 1),
(19, 59, 1),
(2, 65, 1),
(2, 63, 1),
(2, 62, 1),
(2, 70, 1),
(2, 67, 1),
(2, 53, 1),
(2, 74, 1),
(2, 56, 1),
(2, 64, 1),
(2, 54, 1),
(2, 79, 1),
(2, 77, 1),
(2, 75, 1),
(2, 71, 1),
(2, 60, 1),
(2, 66, 1),
(2, 61, 1),
(2, 59, 1),
(3, 65, 2),
(3, 63, 2),
(3, 62, 2),
(3, 70, 2),
(3, 67, 2),
(3, 53, 2),
(3, 74, 2),
(3, 56, 2),
(3, 64, 2),
(3, 54, 2),
(3, 79, 2),
(3, 77, 2),
(3, 75, 2),
(3, 71, 2),
(3, 60, 2),
(3, 66, 2),
(3, 61, 2),
(3, 59, 2),
(17, 65, 1),
(17, 63, 1),
(17, 62, 1),
(17, 70, 1),
(17, 67, 1),
(17, 53, 1),
(17, 74, 1),
(17, 56, 1),
(17, 64, 1),
(17, 54, 1),
(17, 79, 1),
(17, 77, 1),
(17, 75, 1),
(17, 71, 1),
(17, 60, 1),
(17, 66, 1),
(17, 61, 1),
(17, 59, 1),
(4, 65, 1),
(4, 63, 1),
(4, 62, 1),
(4, 70, 1),
(4, 67, 1),
(4, 53, 1),
(4, 74, 1),
(4, 56, 1),
(4, 64, 1),
(4, 54, 1),
(4, 79, 1),
(4, 77, 1),
(4, 75, 1),
(4, 71, 1),
(4, 60, 1),
(4, 66, 1),
(4, 61, 1),
(4, 59, 1),
(5, 65, 2),
(5, 63, 2),
(5, 62, 2),
(5, 70, 2),
(5, 67, 2),
(5, 53, 2),
(5, 74, 2),
(5, 56, 2),
(5, 64, 2),
(5, 54, 2),
(5, 79, 2),
(5, 77, 2),
(5, 75, 2),
(5, 71, 2),
(5, 60, 2),
(5, 66, 2),
(5, 61, 2),
(5, 59, 2),
(6, 65, 3),
(6, 63, 3),
(6, 62, 3),
(6, 70, 3),
(6, 67, 3),
(6, 53, 3),
(6, 74, 3),
(6, 56, 3),
(6, 64, 3),
(6, 54, 3),
(6, 79, 3),
(6, 77, 3),
(6, 75, 3),
(6, 71, 3),
(6, 60, 3),
(6, 66, 3),
(6, 61, 3),
(6, 59, 3),
(8, 65, 1),
(8, 63, 1),
(8, 62, 1),
(8, 70, 1),
(8, 67, 1),
(8, 53, 1),
(8, 74, 1),
(8, 56, 1),
(8, 64, 1),
(8, 54, 1),
(8, 79, 1),
(8, 77, 1),
(8, 75, 1),
(8, 71, 1),
(8, 60, 1),
(8, 66, 1),
(8, 61, 1),
(8, 59, 1),
(20, 65, 1),
(20, 63, 1),
(20, 62, 1),
(20, 70, 1),
(20, 67, 1),
(20, 53, 1),
(20, 74, 1),
(20, 56, 1),
(20, 64, 1),
(20, 54, 1),
(20, 79, 1),
(20, 77, 1),
(20, 75, 1),
(20, 71, 1),
(20, 60, 1),
(20, 66, 1),
(20, 61, 1),
(20, 59, 1),
(18, 65, 1),
(18, 63, 1),
(18, 62, 1),
(18, 70, 1),
(18, 67, 1),
(18, 53, 1),
(18, 74, 1),
(18, 56, 1),
(18, 64, 1),
(18, 54, 1),
(18, 79, 1),
(18, 77, 1),
(18, 75, 1),
(18, 71, 1),
(18, 60, 1),
(18, 66, 1),
(18, 61, 1),
(18, 59, 1),
(16, 65, 1),
(16, 63, 1),
(16, 62, 1),
(16, 70, 1),
(16, 67, 1),
(16, 53, 1),
(16, 74, 1),
(16, 56, 1),
(16, 64, 1),
(16, 54, 1),
(16, 79, 1),
(16, 77, 1),
(16, 75, 1),
(16, 71, 1),
(16, 60, 1),
(16, 66, 1),
(16, 61, 1),
(16, 59, 1),
(10, 65, 1),
(10, 63, 1),
(10, 62, 1),
(10, 70, 1),
(10, 67, 1),
(10, 53, 1),
(10, 74, 1),
(10, 56, 1),
(10, 64, 1),
(10, 54, 1),
(10, 79, 1),
(10, 77, 1),
(10, 75, 1),
(10, 71, 1),
(10, 60, 1),
(10, 66, 1),
(10, 61, 1),
(10, 59, 1),
(11, 65, 2),
(11, 63, 2),
(11, 62, 2),
(11, 70, 2),
(11, 67, 2),
(11, 53, 2),
(11, 74, 2),
(11, 56, 2),
(11, 64, 2),
(11, 54, 2),
(11, 79, 2),
(11, 77, 2),
(11, 75, 2),
(11, 71, 2),
(11, 60, 2),
(11, 66, 2),
(11, 61, 2),
(11, 59, 2),
(12, 65, 3),
(12, 63, 3),
(12, 62, 3),
(12, 70, 3),
(12, 67, 3),
(12, 53, 3),
(12, 74, 3),
(12, 56, 3),
(12, 64, 3),
(12, 54, 3),
(12, 79, 3),
(12, 77, 3),
(12, 75, 3),
(12, 71, 3),
(12, 60, 3),
(12, 66, 3),
(12, 61, 3),
(12, 59, 3),
(13, 65, 4),
(13, 63, 4),
(13, 62, 4),
(13, 70, 4),
(13, 67, 4),
(13, 53, 4),
(13, 74, 4),
(13, 56, 4),
(13, 64, 4),
(13, 54, 4),
(13, 79, 4),
(13, 77, 4),
(13, 75, 4),
(13, 71, 4),
(13, 60, 4),
(13, 66, 4),
(13, 61, 4),
(13, 59, 4),
(15, 65, 1),
(15, 63, 1),
(15, 62, 1),
(15, 70, 1),
(15, 67, 1),
(15, 53, 1),
(15, 74, 1),
(15, 56, 1),
(15, 64, 1),
(15, 54, 1),
(15, 79, 1),
(15, 77, 1),
(15, 75, 1),
(15, 71, 1),
(15, 60, 1),
(15, 66, 1),
(15, 61, 1),
(15, 59, 1),
(21, 65, 1),
(22, 2, 1),
(22, 36, 1),
(22, 39, 1),
(22, 42, 1),
(22, 43, 1),
(22, 27, 1),
(22, 65, 1),
(22, 63, 1),
(22, 62, 1),
(22, 70, 1),
(22, 67, 1),
(22, 53, 1),
(22, 74, 1),
(22, 56, 1),
(22, 64, 1),
(22, 54, 1),
(22, 79, 1),
(22, 77, 1),
(22, 75, 1),
(22, 71, 1),
(22, 60, 1),
(22, 66, 1),
(22, 61, 1),
(22, 59, 1),
(22, 5, 1),
(22, 6, 1),
(22, 7, 1),
(22, 13, 1),
(22, 15, 1),
(22, 16, 1),
(22, 51, 1),
(22, 47, 1),
(22, 46, 1),
(22, 33, 1),
(22, 32, 1),
(22, 30, 1),
(22, 29, 1),
(22, 31, 1),
(22, 28, 1),
(22, 34, 1),
(22, 48, 1),
(22, 24, 1),
(22, 50, 1),
(22, 20, 1),
(22, 21, 1),
(22, 26, 1),
(22, 23, 1),
(22, 18, 1),
(22, 25, 1),
(22, 17, 1),
(22, 22, 1),
(22, 19, 1),
(22, 35, 1),
(25, 2, 1),
(25, 36, 1),
(25, 39, 1),
(25, 42, 1),
(25, 43, 1),
(25, 27, 1),
(25, 65, 1),
(25, 63, 1),
(25, 62, 1),
(25, 70, 1),
(25, 67, 1),
(25, 53, 1),
(25, 74, 1),
(25, 56, 1),
(25, 64, 1),
(25, 54, 1),
(25, 79, 1),
(25, 77, 1),
(25, 75, 1),
(25, 71, 1),
(25, 60, 1),
(25, 66, 1),
(25, 61, 1),
(25, 59, 1),
(25, 5, 1),
(25, 6, 1),
(25, 7, 1),
(25, 13, 1),
(25, 15, 1),
(25, 16, 1),
(25, 51, 1),
(25, 47, 1),
(25, 46, 1),
(25, 33, 1),
(25, 32, 1),
(25, 30, 1),
(25, 29, 1),
(25, 31, 1),
(25, 28, 1),
(25, 34, 1),
(25, 48, 1),
(25, 24, 1),
(25, 50, 1),
(25, 20, 1),
(25, 21, 1),
(25, 26, 1),
(25, 23, 1),
(25, 18, 1),
(25, 25, 1),
(25, 17, 1),
(25, 22, 1),
(25, 19, 1),
(25, 35, 1),
(26, 65, 1),
(27, 65, 1),
(30, 65, 1),
(17, 51, 1),
(28, 65, 1),
(33, 65, 1),
(35, 65, 2),
(36, 65, 1),
(37, 2, 1),
(37, 36, 1),
(37, 39, 1),
(37, 42, 1),
(37, 43, 1),
(37, 27, 1),
(37, 65, 1),
(37, 63, 1),
(37, 62, 1),
(37, 70, 1),
(37, 67, 1),
(37, 53, 1),
(37, 74, 1),
(37, 56, 1),
(37, 64, 1),
(37, 54, 1),
(37, 79, 1),
(37, 77, 1),
(37, 75, 1),
(37, 71, 1),
(37, 60, 1),
(37, 66, 1),
(37, 61, 1),
(37, 59, 1),
(37, 5, 1),
(37, 6, 1),
(37, 7, 1),
(37, 13, 1),
(37, 15, 1),
(37, 16, 1),
(37, 51, 1),
(37, 47, 1),
(37, 46, 1),
(37, 33, 1),
(37, 32, 1),
(37, 30, 1),
(37, 29, 1),
(37, 31, 1),
(37, 28, 1),
(37, 34, 1),
(37, 48, 1),
(37, 24, 1),
(37, 50, 1),
(37, 20, 1),
(37, 21, 1),
(37, 26, 1),
(37, 23, 1),
(37, 18, 1),
(37, 25, 1),
(37, 17, 1),
(37, 22, 1),
(37, 19, 1),
(37, 35, 1),
(33, 2, 1),
(33, 36, 1),
(33, 39, 1),
(33, 42, 1),
(33, 43, 1),
(33, 27, 1),
(33, 63, 1),
(33, 62, 1),
(33, 70, 1),
(33, 67, 1),
(33, 53, 1),
(33, 74, 1),
(33, 56, 1),
(33, 64, 1),
(33, 54, 1),
(33, 79, 1),
(33, 77, 1),
(33, 75, 1),
(33, 71, 1),
(33, 60, 1),
(33, 66, 1),
(33, 61, 1),
(33, 59, 1),
(33, 5, 1),
(33, 6, 1),
(33, 7, 1),
(33, 13, 1),
(33, 15, 1),
(33, 16, 1),
(33, 51, 1),
(33, 47, 1),
(33, 46, 1),
(33, 33, 1),
(33, 32, 1),
(33, 30, 1),
(33, 29, 1),
(33, 31, 1),
(33, 28, 1),
(33, 34, 1),
(33, 48, 1),
(33, 24, 1),
(33, 50, 1),
(33, 20, 1),
(33, 21, 1),
(33, 26, 1),
(33, 23, 1),
(33, 18, 1),
(33, 25, 1),
(33, 17, 1),
(33, 22, 1),
(33, 19, 1),
(33, 35, 1),
(38, 2, 1),
(38, 36, 1),
(38, 39, 1),
(38, 42, 1),
(38, 43, 1),
(38, 27, 1),
(38, 65, 1),
(38, 63, 1),
(38, 62, 1),
(38, 70, 1),
(38, 67, 1),
(38, 53, 1),
(38, 74, 1),
(38, 56, 1),
(38, 64, 1),
(38, 54, 1),
(38, 79, 1),
(38, 77, 1),
(38, 75, 1),
(38, 71, 1),
(38, 60, 1),
(38, 66, 1),
(38, 61, 1),
(38, 59, 1),
(38, 5, 1),
(38, 6, 1),
(38, 7, 1),
(38, 13, 1),
(38, 15, 1),
(38, 16, 1),
(38, 51, 1),
(38, 47, 1),
(38, 46, 1),
(38, 33, 1),
(38, 32, 1),
(38, 30, 1),
(38, 29, 1),
(38, 31, 1),
(38, 28, 1),
(38, 34, 1),
(38, 48, 1),
(38, 24, 1),
(38, 50, 1),
(38, 20, 1),
(38, 21, 1),
(38, 26, 1),
(38, 23, 1),
(38, 18, 1),
(38, 25, 1),
(38, 17, 1),
(38, 22, 1),
(38, 19, 1),
(38, 35, 1),
(39, 2, 2),
(39, 36, 2),
(39, 39, 2),
(39, 42, 2),
(39, 43, 2),
(39, 27, 2),
(39, 65, 2),
(39, 63, 2),
(39, 62, 2),
(39, 70, 2),
(39, 67, 2),
(39, 53, 2),
(39, 74, 2),
(39, 56, 2),
(39, 64, 2),
(39, 54, 2),
(39, 79, 2),
(39, 77, 2),
(39, 75, 2),
(39, 71, 2),
(39, 60, 2),
(39, 66, 2),
(39, 61, 2),
(39, 59, 2),
(39, 5, 2),
(39, 6, 2),
(39, 7, 2),
(39, 13, 2),
(39, 15, 2),
(39, 16, 2),
(39, 51, 2),
(39, 47, 2),
(39, 46, 2),
(39, 33, 2),
(39, 32, 2),
(39, 30, 2),
(39, 29, 2),
(39, 31, 2),
(39, 28, 2),
(39, 34, 2),
(39, 48, 2),
(39, 24, 2),
(39, 50, 2),
(39, 20, 2),
(39, 21, 2),
(39, 26, 2),
(39, 23, 2),
(39, 18, 2),
(39, 25, 2),
(39, 17, 2),
(39, 22, 2),
(39, 19, 2),
(39, 35, 2),
(40, 2, 3),
(40, 36, 3),
(40, 39, 3),
(40, 42, 3),
(40, 43, 3),
(40, 27, 3),
(40, 65, 3),
(40, 63, 3),
(40, 62, 3),
(40, 70, 3),
(40, 67, 3),
(40, 53, 3),
(40, 74, 3),
(40, 56, 3),
(40, 64, 3),
(40, 54, 3),
(40, 79, 3),
(40, 77, 3),
(40, 75, 3),
(40, 71, 3),
(40, 60, 3),
(40, 66, 3),
(40, 61, 3),
(40, 59, 3),
(40, 5, 3),
(40, 6, 3),
(40, 7, 3),
(40, 13, 3),
(40, 15, 3),
(40, 16, 3),
(40, 51, 3),
(40, 47, 3),
(40, 46, 3),
(40, 33, 3),
(40, 32, 3),
(40, 30, 3),
(40, 29, 3),
(40, 31, 3),
(40, 28, 3),
(40, 34, 3),
(40, 48, 3),
(40, 24, 3),
(40, 50, 3),
(40, 20, 3),
(40, 21, 3),
(40, 26, 3),
(40, 23, 3),
(40, 18, 3),
(40, 25, 3),
(40, 17, 3),
(40, 22, 3),
(40, 19, 3),
(40, 35, 3),
(41, 2, 4),
(41, 36, 4),
(41, 39, 4),
(41, 42, 4),
(41, 43, 4),
(41, 27, 4),
(41, 65, 4),
(41, 63, 4),
(41, 62, 4),
(41, 70, 4),
(41, 67, 4),
(41, 53, 4),
(41, 74, 4),
(41, 56, 4),
(41, 64, 4),
(41, 54, 4),
(41, 79, 4),
(41, 77, 4),
(41, 75, 4),
(41, 71, 4),
(41, 60, 4),
(41, 66, 4),
(41, 61, 4),
(41, 59, 4),
(41, 5, 4),
(41, 6, 4),
(41, 7, 4),
(41, 13, 4),
(41, 15, 4),
(41, 16, 4),
(41, 51, 4),
(41, 47, 4),
(41, 46, 4),
(41, 33, 4),
(41, 32, 4),
(41, 30, 4),
(41, 29, 4),
(41, 31, 4),
(41, 28, 4),
(41, 34, 4),
(41, 48, 4),
(41, 24, 4),
(41, 50, 4),
(41, 20, 4),
(41, 21, 4),
(41, 26, 4),
(41, 23, 4),
(41, 18, 4),
(41, 25, 4),
(41, 17, 4),
(41, 22, 4),
(41, 19, 4),
(41, 35, 4),
(42, 2, 5),
(42, 36, 5),
(42, 39, 5),
(42, 42, 5),
(42, 43, 5),
(42, 27, 5),
(42, 65, 5),
(42, 63, 5),
(42, 62, 5),
(42, 70, 5),
(42, 67, 5),
(42, 53, 5),
(42, 74, 5),
(42, 56, 5),
(42, 64, 5),
(42, 54, 5),
(42, 79, 5),
(42, 77, 5),
(42, 75, 5),
(42, 71, 5),
(42, 60, 5),
(42, 66, 5),
(42, 61, 5),
(42, 59, 5),
(42, 5, 5),
(42, 6, 5),
(42, 7, 5),
(42, 13, 5),
(42, 15, 5),
(42, 16, 5),
(42, 51, 5),
(42, 47, 5),
(42, 46, 5),
(42, 33, 5),
(42, 32, 5),
(42, 30, 5),
(42, 29, 5),
(42, 31, 5),
(42, 28, 5),
(42, 34, 5),
(42, 48, 5),
(42, 24, 5),
(42, 50, 5),
(42, 20, 5),
(42, 21, 5),
(42, 26, 5),
(42, 23, 5),
(42, 18, 5),
(42, 25, 5),
(42, 17, 5),
(42, 22, 5),
(42, 19, 5),
(42, 35, 5),
(36, 63, 1),
(36, 62, 1),
(36, 70, 1),
(36, 67, 1),
(36, 53, 1),
(36, 74, 1),
(36, 56, 1),
(36, 64, 1),
(36, 54, 1),
(36, 79, 1),
(36, 77, 1),
(36, 75, 1),
(36, 71, 1),
(36, 60, 1),
(36, 66, 1),
(36, 61, 1),
(36, 59, 1),
(44, 65, 1),
(44, 63, 1),
(44, 62, 1),
(44, 70, 1),
(44, 67, 1),
(44, 53, 1),
(44, 74, 1),
(44, 56, 1),
(44, 64, 1),
(44, 54, 1),
(44, 79, 1),
(44, 77, 1),
(44, 75, 1),
(44, 71, 1),
(44, 60, 1),
(44, 66, 1),
(44, 61, 1),
(44, 59, 1),
(45, 65, 2),
(45, 63, 2),
(45, 62, 2),
(45, 70, 2),
(45, 67, 2),
(45, 53, 2),
(45, 74, 2),
(45, 56, 2),
(45, 64, 2),
(45, 54, 2),
(45, 79, 2),
(45, 77, 2),
(45, 75, 2),
(45, 71, 2),
(45, 60, 2),
(45, 66, 2),
(45, 61, 2),
(45, 59, 2),
(46, 65, 3),
(46, 63, 3),
(46, 62, 3),
(46, 70, 3),
(46, 67, 3),
(46, 53, 3),
(46, 74, 3),
(46, 56, 3),
(46, 64, 3),
(46, 54, 3),
(46, 79, 3),
(46, 77, 3),
(46, 75, 3),
(46, 71, 3),
(46, 60, 3),
(46, 66, 3),
(46, 61, 3),
(46, 59, 3),
(47, 2, 1),
(47, 36, 1),
(47, 39, 1),
(47, 42, 1),
(47, 43, 1),
(47, 27, 1),
(47, 65, 4),
(47, 63, 4),
(47, 62, 4),
(47, 70, 4),
(47, 67, 4),
(47, 53, 4),
(47, 74, 4),
(47, 56, 4),
(47, 64, 4),
(47, 54, 4),
(47, 79, 4),
(47, 77, 4),
(47, 75, 4),
(47, 71, 4),
(47, 60, 4),
(47, 66, 4),
(47, 61, 4),
(47, 59, 4),
(47, 5, 1),
(47, 6, 1),
(47, 7, 1),
(47, 13, 1),
(47, 15, 1),
(47, 16, 1),
(47, 51, 1),
(47, 47, 1),
(47, 46, 1),
(47, 33, 1),
(47, 32, 1),
(47, 30, 1),
(47, 29, 1),
(47, 31, 1),
(47, 28, 1),
(47, 34, 1),
(47, 48, 1),
(47, 24, 1),
(47, 50, 1),
(47, 20, 1),
(47, 21, 1),
(47, 26, 1),
(47, 23, 1),
(47, 18, 1),
(47, 25, 1),
(47, 17, 1),
(47, 22, 1),
(47, 19, 1),
(47, 35, 1),
(21, 63, 1),
(21, 62, 1),
(21, 70, 1),
(21, 67, 1),
(21, 53, 1),
(21, 74, 1),
(21, 56, 1),
(21, 64, 1),
(21, 54, 1),
(21, 79, 1),
(21, 77, 1),
(21, 75, 1),
(21, 71, 1),
(21, 60, 1),
(21, 66, 1),
(21, 61, 1),
(21, 59, 1),
(49, 2, 1),
(49, 36, 1),
(49, 39, 1),
(49, 42, 1),
(49, 43, 1),
(49, 27, 1),
(49, 65, 1),
(49, 63, 1),
(49, 62, 1),
(49, 70, 1),
(49, 67, 1),
(49, 53, 1),
(49, 74, 1),
(49, 56, 1),
(49, 64, 1),
(49, 54, 1),
(49, 79, 1),
(49, 77, 1),
(49, 75, 1),
(49, 71, 1),
(49, 60, 1),
(49, 66, 1),
(49, 61, 1),
(49, 59, 1),
(49, 5, 1),
(49, 6, 1),
(49, 7, 1),
(49, 13, 1),
(49, 15, 1),
(49, 16, 1),
(49, 51, 1),
(49, 47, 1),
(49, 46, 1),
(49, 33, 1),
(49, 32, 1),
(49, 30, 1),
(49, 29, 1),
(49, 31, 1),
(49, 28, 1),
(49, 34, 1),
(49, 48, 1),
(49, 24, 1),
(49, 50, 1),
(49, 20, 1),
(49, 21, 1),
(49, 26, 1),
(49, 23, 1),
(49, 18, 1),
(49, 25, 1),
(49, 17, 1),
(49, 22, 1),
(49, 19, 1),
(49, 35, 1),
(30, 63, 1),
(30, 62, 1),
(30, 70, 1),
(30, 67, 1),
(30, 53, 1),
(30, 74, 1),
(30, 56, 1),
(30, 64, 1),
(30, 54, 1),
(30, 79, 1),
(30, 77, 1),
(30, 75, 1),
(30, 71, 1),
(30, 60, 1),
(30, 66, 1),
(30, 61, 1),
(30, 59, 1),
(35, 63, 2),
(35, 62, 2),
(35, 70, 2),
(35, 67, 2),
(35, 53, 2),
(35, 74, 2),
(35, 56, 2),
(35, 64, 2),
(35, 54, 2),
(35, 79, 2),
(35, 77, 2),
(35, 75, 2),
(35, 71, 2),
(35, 60, 2),
(35, 66, 2),
(35, 61, 2),
(35, 59, 2),
(50, 2, 1),
(50, 36, 1),
(50, 39, 1),
(50, 42, 1),
(50, 43, 1),
(50, 27, 1),
(50, 65, 1),
(50, 63, 1),
(50, 62, 1),
(50, 70, 1),
(50, 67, 1),
(50, 53, 1),
(50, 74, 1),
(50, 56, 1),
(50, 64, 1),
(50, 54, 1),
(50, 79, 1),
(50, 77, 1),
(50, 75, 1),
(50, 71, 1),
(50, 60, 1),
(50, 66, 1),
(50, 61, 1),
(50, 59, 1),
(50, 5, 1),
(50, 6, 1),
(50, 7, 1),
(50, 13, 1),
(50, 15, 1),
(50, 16, 1),
(50, 51, 1),
(50, 47, 1),
(50, 46, 1),
(50, 33, 1),
(50, 32, 1),
(50, 30, 1),
(50, 29, 1),
(50, 31, 1),
(50, 28, 1),
(50, 34, 1),
(50, 48, 1),
(50, 24, 1),
(50, 50, 1),
(50, 20, 1),
(50, 21, 1),
(50, 26, 1),
(50, 23, 1),
(50, 18, 1),
(50, 25, 1),
(50, 17, 1),
(50, 22, 1),
(50, 19, 1),
(50, 35, 1),
(19, 80, 1),
(3, 80, 1),
(17, 80, 1),
(4, 80, 1),
(5, 80, 2),
(6, 80, 3),
(8, 80, 1),
(20, 80, 1),
(18, 80, 1),
(16, 80, 1),
(10, 80, 1),
(11, 80, 2),
(12, 80, 3),
(13, 80, 4),
(15, 80, 1),
(33, 80, 1),
(50, 80, 1),
(38, 80, 1),
(39, 80, 2),
(40, 80, 3),
(41, 80, 4),
(42, 80, 5),
(22, 80, 1),
(49, 80, 1),
(37, 80, 1),
(25, 80, 1),
(47, 80, 1),
(51, 65, 1),
(51, 63, 1),
(51, 62, 1),
(51, 70, 1),
(51, 67, 1),
(51, 53, 1),
(51, 74, 1),
(51, 56, 1),
(51, 64, 1),
(51, 54, 1),
(51, 79, 1),
(51, 77, 1),
(51, 75, 1),
(51, 71, 1),
(51, 60, 1),
(51, 66, 1),
(51, 61, 1),
(51, 59, 1),
(19, 85, 1),
(19, 83, 1),
(3, 85, 1),
(3, 83, 1),
(17, 85, 1),
(17, 83, 1),
(4, 85, 1),
(4, 83, 1),
(5, 85, 2),
(5, 83, 2),
(6, 85, 3),
(6, 83, 3),
(8, 85, 1),
(8, 83, 1),
(20, 85, 1),
(20, 83, 1),
(18, 85, 1),
(18, 83, 1),
(16, 85, 1),
(16, 83, 1),
(10, 85, 1),
(10, 83, 1),
(11, 85, 2),
(11, 83, 2),
(12, 85, 3),
(12, 83, 3),
(13, 85, 4),
(13, 83, 4),
(15, 85, 1),
(15, 83, 1),
(33, 85, 1),
(33, 83, 1),
(50, 85, 1),
(50, 83, 1),
(38, 85, 1),
(38, 83, 1),
(39, 85, 2),
(39, 83, 2),
(40, 85, 3),
(40, 83, 3),
(41, 85, 4),
(41, 83, 4),
(42, 85, 5),
(42, 83, 5),
(22, 85, 1),
(22, 83, 1),
(49, 85, 1),
(49, 83, 1),
(37, 85, 1),
(37, 83, 1),
(25, 85, 1),
(25, 83, 1),
(47, 85, 1),
(47, 83, 1),
(19, 87, 1),
(3, 87, 1),
(17, 87, 1),
(4, 87, 1),
(5, 87, 2),
(6, 87, 3),
(8, 87, 1),
(20, 87, 1),
(18, 87, 1),
(16, 87, 1),
(10, 87, 1),
(11, 87, 2),
(12, 87, 3),
(13, 87, 4),
(15, 87, 1),
(33, 87, 1),
(50, 87, 1),
(38, 87, 1),
(39, 87, 2),
(40, 87, 3),
(41, 87, 4),
(42, 87, 5),
(22, 87, 1),
(49, 87, 1),
(37, 87, 1),
(25, 87, 1),
(47, 87, 1),
(36, 88, 1),
(36, 87, 1),
(30, 88, 1),
(30, 87, 1),
(35, 88, 2),
(35, 87, 2),
(21, 88, 1),
(21, 87, 1),
(44, 88, 1),
(44, 87, 2),
(45, 88, 2),
(45, 87, 3),
(46, 88, 3),
(46, 87, 4),
(51, 88, 1),
(51, 87, 1),
(49, 88, 1),
(33, 88, 1),
(50, 88, 1),
(38, 88, 1),
(39, 88, 2),
(40, 88, 3),
(42, 88, 4),
(22, 88, 1),
(37, 88, 1),
(25, 88, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_contact_rows`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_contact_rows` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `fax` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `note` mediumtext NOT NULL,
  `admins` mediumtext NOT NULL,
  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `full_name` (`full_name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `nv3_vi_contact_rows`
--

INSERT INTO `nv3_vi_contact_rows` (`id`, `full_name`, `phone`, `fax`, `email`, `note`, `admins`, `act`) VALUES
(1, 'Webmaster', '', '', '', '', '1/1/1/0;', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_contact_send`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_contact_send` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `cid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `send_time` int(11) unsigned NOT NULL DEFAULT '0',
  `sender_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `sender_name` varchar(100) NOT NULL,
  `sender_email` varchar(100) NOT NULL,
  `sender_phone` varchar(255) NOT NULL,
  `sender_ip` varchar(15) NOT NULL,
  `is_read` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `is_reply` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `reply_content` mediumtext NOT NULL,
  `reply_time` int(11) unsigned NOT NULL DEFAULT '0',
  `reply_aid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `sender_name` (`sender_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_counter`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_counter` (
  `c_type` varchar(100) NOT NULL,
  `c_val` varchar(100) NOT NULL,
  `c_count` int(11) unsigned NOT NULL DEFAULT '0',
  `last_update` int(11) NOT NULL DEFAULT '0',
  UNIQUE KEY `c_type` (`c_type`,`c_val`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_counter`
--

INSERT INTO `nv3_vi_counter` (`c_type`, `c_val`, `c_count`, `last_update`) VALUES
('c_time', 'start', 0, 0),
('c_time', 'last', 1395371675, 0),
('total', 'hits', 31, 1395371675),
('year', '2009', 0, 0),
('year', '2010', 0, 0),
('year', '2011', 0, 0),
('year', '2012', 0, 0),
('year', '2013', 0, 0),
('year', '2014', 31, 1395371675),
('year', '2015', 0, 0),
('year', '2016', 0, 0),
('year', '2017', 0, 0),
('year', '2018', 0, 0),
('year', '2019', 0, 0),
('year', '2020', 0, 0),
('month', 'Jan', 0, 0),
('month', 'Feb', 0, 0),
('month', 'Mar', 31, 1395371675),
('month', 'Apr', 0, 0),
('month', 'May', 0, 0),
('month', 'Jun', 0, 0),
('month', 'Jul', 0, 0),
('month', 'Aug', 0, 0),
('month', 'Sep', 0, 0),
('month', 'Oct', 0, 0),
('month', 'Nov', 0, 0),
('month', 'Dec', 0, 0),
('day', '01', 0, 0),
('day', '02', 0, 0),
('day', '03', 0, 0),
('day', '04', 0, 0),
('day', '05', 0, 0),
('day', '06', 0, 0),
('day', '07', 0, 0),
('day', '08', 0, 0),
('day', '09', 0, 0),
('day', '10', 0, 0),
('day', '11', 0, 0),
('day', '12', 0, 0),
('day', '13', 0, 0),
('day', '14', 1, 1394790788),
('day', '15', 1, 1394847518),
('day', '16', 1, 1394978706),
('day', '17', 3, 1395045936),
('day', '18', 2, 1395143987),
('day', '19', 5, 1395222160),
('day', '20', 9, 1395327782),
('day', '21', 9, 1395371675),
('day', '22', 0, 0),
('day', '23', 0, 0),
('day', '24', 0, 0),
('day', '25', 0, 0),
('day', '26', 0, 0),
('day', '27', 0, 0),
('day', '28', 0, 0),
('day', '29', 0, 0),
('day', '30', 0, 0),
('day', '31', 0, 0),
('dayofweek', 'Sunday', 1, 1394978706),
('dayofweek', 'Monday', 3, 1395045936),
('dayofweek', 'Tuesday', 2, 1395143987),
('dayofweek', 'Wednesday', 5, 1395222160),
('dayofweek', 'Thursday', 9, 1395327782),
('dayofweek', 'Friday', 10, 1395371675),
('dayofweek', 'Saturday', 1, 1394847518),
('hour', '00', 0, 0),
('hour', '01', 0, 0),
('hour', '02', 0, 0),
('hour', '03', 0, 0),
('hour', '04', 0, 0),
('hour', '05', 0, 0),
('hour', '06', 0, 0),
('hour', '07', 0, 1395104065),
('hour', '08', 5, 1395365594),
('hour', '09', 2, 1395370774),
('hour', '10', 2, 1395371675),
('hour', '11', 0, 0),
('hour', '12', 0, 0),
('hour', '13', 0, 1395297093),
('hour', '14', 0, 1395040202),
('hour', '15', 0, 1395045936),
('hour', '16', 0, 1395222160),
('hour', '17', 0, 1395311270),
('hour', '18', 0, 1395314367),
('hour', '19', 0, 1395319238),
('hour', '20', 0, 1395322959),
('hour', '21', 0, 1395325688),
('hour', '22', 0, 1395327782),
('hour', '23', 0, 0),
('bot', 'Alexa', 0, 0),
('bot', 'AltaVista Scooter', 0, 0),
('bot', 'Altavista Mercator', 0, 0),
('bot', 'Altavista Search', 0, 0),
('bot', 'Aport.ru Bot', 0, 0),
('bot', 'Ask Jeeves', 0, 0),
('bot', 'Baidu', 0, 0),
('bot', 'Exabot', 0, 0),
('bot', 'FAST Enterprise', 0, 0),
('bot', 'FAST WebCrawler', 0, 0),
('bot', 'Francis', 0, 0),
('bot', 'Gigablast', 0, 0),
('bot', 'Google AdsBot', 0, 0),
('bot', 'Google Adsense', 0, 0),
('bot', 'Google Bot', 0, 0),
('bot', 'Google Desktop', 0, 0),
('bot', 'Google Feedfetcher', 0, 0),
('bot', 'Heise IT-Markt', 0, 0),
('bot', 'Heritrix', 0, 0),
('bot', 'IBM Research', 0, 0),
('bot', 'ICCrawler - ICjobs', 0, 0),
('bot', 'Ichiro', 0, 0),
('bot', 'InfoSeek Spider', 0, 0),
('bot', 'Lycos.com Bot', 0, 0),
('bot', 'MSN Bot', 0, 0),
('bot', 'MSN Bot Media', 0, 0),
('bot', 'MSN Bot News', 0, 0),
('bot', 'MSN NewsBlogs', 0, 0),
('bot', 'Majestic-12', 0, 0),
('bot', 'Metager', 0, 0),
('bot', 'NG-Search', 0, 0),
('bot', 'Nutch Bot', 0, 0),
('bot', 'NutchCVS', 0, 0),
('bot', 'OmniExplorer', 0, 0),
('bot', 'Online Link Validator', 0, 0),
('bot', 'Open-source Web Search', 0, 0),
('bot', 'Psbot', 0, 0),
('bot', 'Rambler', 0, 0),
('bot', 'SEO Crawler', 0, 0),
('bot', 'SEOSearch', 0, 0),
('bot', 'Seekport', 0, 0),
('bot', 'Sensis', 0, 0),
('bot', 'Seoma', 0, 0),
('bot', 'Snappy', 0, 0),
('bot', 'Steeler', 0, 0),
('bot', 'Synoo', 0, 0),
('bot', 'Telekom', 0, 0),
('bot', 'TurnitinBot', 0, 0),
('bot', 'Vietnamese Search', 0, 0),
('bot', 'Voyager', 0, 0),
('bot', 'W3 Sitesearch', 0, 0),
('bot', 'W3C Linkcheck', 0, 0),
('bot', 'W3C Validator', 0, 0),
('bot', 'WiseNut', 0, 0),
('bot', 'YaCy', 0, 0),
('bot', 'Yahoo Bot', 0, 0),
('bot', 'Yahoo MMCrawler', 0, 0),
('bot', 'Yahoo Slurp', 0, 0),
('bot', 'YahooSeeker', 0, 0),
('bot', 'Yandex', 0, 0),
('bot', 'Yandex Blog', 0, 0),
('bot', 'Yandex Direct Bot', 0, 0),
('bot', 'Yandex Something', 0, 0),
('browser', 'netcaptor', 0, 0),
('browser', 'opera', 0, 0),
('browser', 'aol', 0, 0),
('browser', 'aol2', 0, 0),
('browser', 'mosaic', 0, 0),
('browser', 'k-meleon', 0, 0),
('browser', 'konqueror', 0, 0),
('browser', 'avantbrowser', 0, 0),
('browser', 'avantgo', 0, 0),
('browser', 'proxomitron', 0, 0),
('browser', 'chrome', 9, 1395371675),
('browser', 'safari', 0, 0),
('browser', 'lynx', 0, 0),
('browser', 'links', 0, 0),
('browser', 'galeon', 0, 0),
('browser', 'abrowse', 0, 0),
('browser', 'amaya', 0, 0),
('browser', 'ant', 0, 0),
('browser', 'aweb', 0, 0),
('browser', 'beonex', 0, 0),
('browser', 'blazer', 0, 0),
('browser', 'camino', 0, 0),
('browser', 'chimera', 0, 0),
('browser', 'columbus', 0, 0),
('browser', 'crazybrowser', 0, 0),
('browser', 'curl', 0, 0),
('browser', 'deepnet', 0, 0),
('browser', 'dillo', 0, 0),
('browser', 'doris', 0, 0),
('browser', 'elinks', 0, 0),
('browser', 'epiphany', 0, 0),
('browser', 'ibrowse', 0, 0),
('browser', 'icab', 0, 0),
('browser', 'ice', 0, 0),
('browser', 'isilox', 0, 0),
('browser', 'lotus', 0, 0),
('browser', 'lunascape', 0, 0),
('browser', 'maxthon', 0, 0),
('browser', 'mbrowser', 0, 0),
('browser', 'multibrowser', 0, 0),
('browser', 'nautilus', 0, 0),
('browser', 'netfront', 0, 0),
('browser', 'netpositive', 0, 0),
('browser', 'omniweb', 0, 0),
('browser', 'oregano', 0, 0),
('browser', 'phaseout', 0, 0),
('browser', 'plink', 0, 0),
('browser', 'phoenix', 0, 0),
('browser', 'shiira', 0, 0),
('browser', 'sleipnir', 0, 0),
('browser', 'slimbrowser', 0, 0),
('browser', 'staroffice', 0, 0),
('browser', 'sunrise', 0, 0),
('browser', 'voyager', 0, 0),
('browser', 'w3m', 0, 0),
('browser', 'webtv', 0, 0),
('browser', 'xiino', 0, 0),
('browser', 'explorer', 0, 0),
('browser', 'firefox', 18, 1395367447),
('browser', 'netscape', 0, 0),
('browser', 'netscape2', 0, 0),
('browser', 'mozilla', 0, 0),
('browser', 'mozilla2', 0, 0),
('browser', 'firebird', 0, 0),
('browser', 'Mobile', 0, 0),
('browser', 'Unknown', 4, 1395222160),
('os', 'windows7', 16, 1395370774),
('os', 'windowsvista', 0, 0),
('os', 'windows2003', 0, 0),
('os', 'windowsxp', 0, 0),
('os', 'windowsxp2', 6, 1395371675),
('os', 'windows2k', 0, 0),
('os', 'windows95', 0, 0),
('os', 'windowsce', 0, 0),
('os', 'windowsme', 0, 0),
('os', 'windowsme2', 0, 0),
('os', 'windowsnt', 0, 0),
('os', 'windowsnt2', 3, 1395371172),
('os', 'windows98', 0, 0),
('os', 'windows', 0, 0),
('os', 'linux', 0, 0),
('os', 'linux2', 0, 0),
('os', 'linux3', 0, 0),
('os', 'macosx', 2, 1395297093),
('os', 'macppc', 0, 0),
('os', 'mac', 0, 0),
('os', 'amiga', 0, 0),
('os', 'beos', 0, 0),
('os', 'freebsd', 0, 0),
('os', 'freebsd2', 0, 0),
('os', 'irix', 0, 0),
('os', 'netbsd', 0, 0),
('os', 'netbsd2', 0, 0),
('os', 'os2', 0, 0),
('os', 'os22', 0, 0),
('os', 'openbsd', 0, 0),
('os', 'openbsd2', 0, 0),
('os', 'palm', 0, 0),
('os', 'palm2', 0, 0),
('os', 'Unspecified', 4, 1395222160),
('country', 'AD', 0, 0),
('country', 'AE', 0, 0),
('country', 'AF', 0, 0),
('country', 'AG', 0, 0),
('country', 'AI', 0, 0),
('country', 'AL', 0, 0),
('country', 'AM', 0, 0),
('country', 'AN', 0, 0),
('country', 'AO', 0, 0),
('country', 'AQ', 0, 0),
('country', 'AR', 0, 0),
('country', 'AS', 0, 0),
('country', 'AT', 0, 0),
('country', 'AU', 0, 0),
('country', 'AW', 0, 0),
('country', 'AZ', 0, 0),
('country', 'BA', 0, 0),
('country', 'BB', 0, 0),
('country', 'BD', 0, 0),
('country', 'BE', 0, 0),
('country', 'BF', 0, 0),
('country', 'BG', 0, 0),
('country', 'BH', 0, 0),
('country', 'BI', 0, 0),
('country', 'BJ', 0, 0),
('country', 'BM', 0, 0),
('country', 'BN', 0, 0),
('country', 'BO', 0, 0),
('country', 'BR', 0, 0),
('country', 'BS', 0, 0),
('country', 'BT', 0, 0),
('country', 'BW', 0, 0),
('country', 'BY', 0, 0),
('country', 'BZ', 0, 0),
('country', 'CA', 0, 0),
('country', 'CD', 0, 0),
('country', 'CF', 0, 0),
('country', 'CG', 0, 0),
('country', 'CH', 0, 0),
('country', 'CI', 0, 0),
('country', 'CK', 0, 0),
('country', 'CL', 0, 0),
('country', 'CM', 0, 0),
('country', 'CN', 0, 0),
('country', 'CO', 0, 0),
('country', 'CR', 0, 0),
('country', 'CS', 0, 0),
('country', 'CU', 0, 0),
('country', 'CV', 0, 0),
('country', 'CY', 0, 0),
('country', 'CZ', 0, 0),
('country', 'DE', 0, 0),
('country', 'DJ', 0, 0),
('country', 'DK', 0, 0),
('country', 'DM', 0, 0),
('country', 'DO', 0, 0),
('country', 'DZ', 0, 0),
('country', 'EC', 0, 0),
('country', 'EE', 0, 0),
('country', 'EG', 0, 0),
('country', 'ER', 0, 0),
('country', 'ES', 0, 0),
('country', 'ET', 0, 0),
('country', 'EU', 0, 0),
('country', 'FI', 0, 0),
('country', 'FJ', 0, 0),
('country', 'FK', 0, 0),
('country', 'FM', 0, 0),
('country', 'FO', 0, 0),
('country', 'FR', 0, 0),
('country', 'GA', 0, 0),
('country', 'GB', 0, 0),
('country', 'GD', 0, 0),
('country', 'GE', 0, 0),
('country', 'GF', 0, 0),
('country', 'GH', 0, 0),
('country', 'GI', 0, 0),
('country', 'GL', 0, 0),
('country', 'GM', 0, 0),
('country', 'GN', 0, 0),
('country', 'GP', 0, 0),
('country', 'GQ', 0, 0),
('country', 'GR', 0, 0),
('country', 'GS', 0, 0),
('country', 'GT', 0, 0),
('country', 'GU', 0, 0),
('country', 'GW', 0, 0),
('country', 'GY', 0, 0),
('country', 'HK', 0, 0),
('country', 'HN', 0, 0),
('country', 'HR', 0, 0),
('country', 'HT', 0, 0),
('country', 'HU', 0, 0),
('country', 'ID', 0, 0),
('country', 'IE', 0, 0),
('country', 'IL', 0, 0),
('country', 'IN', 0, 0),
('country', 'IO', 0, 0),
('country', 'IQ', 0, 0),
('country', 'IR', 0, 0),
('country', 'IS', 0, 0),
('country', 'IT', 0, 0),
('country', 'JM', 0, 0),
('country', 'JO', 0, 0),
('country', 'JP', 0, 0),
('country', 'KE', 0, 0),
('country', 'KG', 0, 0),
('country', 'KH', 0, 0),
('country', 'KI', 0, 0),
('country', 'KM', 0, 0),
('country', 'KN', 0, 0),
('country', 'KR', 0, 0),
('country', 'KW', 0, 0),
('country', 'KY', 0, 0),
('country', 'KZ', 0, 0),
('country', 'LA', 0, 0),
('country', 'LB', 0, 0),
('country', 'LC', 0, 0),
('country', 'LI', 0, 0),
('country', 'LK', 0, 0),
('country', 'LR', 0, 0),
('country', 'LS', 0, 0),
('country', 'LT', 0, 0),
('country', 'LU', 0, 0),
('country', 'LV', 0, 0),
('country', 'LY', 0, 0),
('country', 'MA', 0, 0),
('country', 'MC', 0, 0),
('country', 'MD', 0, 0),
('country', 'MG', 0, 0),
('country', 'MH', 0, 0),
('country', 'MK', 0, 0),
('country', 'ML', 0, 0),
('country', 'MM', 0, 0),
('country', 'MN', 0, 0),
('country', 'MO', 0, 0),
('country', 'MP', 0, 0),
('country', 'MQ', 0, 0),
('country', 'MR', 0, 0),
('country', 'MT', 0, 0),
('country', 'MU', 0, 0),
('country', 'MV', 0, 0),
('country', 'MW', 0, 0),
('country', 'MX', 0, 0),
('country', 'MY', 0, 0),
('country', 'MZ', 0, 0),
('country', 'NA', 0, 0),
('country', 'NC', 0, 0),
('country', 'NE', 0, 0),
('country', 'NF', 0, 0),
('country', 'NG', 0, 0),
('country', 'NI', 0, 0),
('country', 'NL', 0, 0),
('country', 'NO', 0, 0),
('country', 'NP', 0, 0),
('country', 'NR', 0, 0),
('country', 'NU', 0, 0),
('country', 'NZ', 0, 0),
('country', 'OM', 0, 0),
('country', 'PA', 0, 0),
('country', 'PE', 0, 0),
('country', 'PF', 0, 0),
('country', 'PG', 0, 0),
('country', 'PH', 0, 0),
('country', 'PK', 0, 0),
('country', 'PL', 0, 0),
('country', 'PR', 0, 0),
('country', 'PS', 0, 0),
('country', 'PT', 0, 0),
('country', 'PW', 0, 0),
('country', 'PY', 0, 0),
('country', 'QA', 0, 0),
('country', 'RE', 0, 0),
('country', 'RO', 0, 0),
('country', 'RU', 0, 0),
('country', 'RW', 0, 0),
('country', 'SA', 0, 0),
('country', 'SB', 0, 0),
('country', 'SC', 0, 0),
('country', 'SD', 0, 0),
('country', 'SE', 0, 0),
('country', 'SG', 0, 0),
('country', 'SI', 0, 0),
('country', 'SK', 0, 0),
('country', 'SL', 0, 0),
('country', 'SM', 0, 0),
('country', 'SN', 0, 0),
('country', 'SO', 0, 0),
('country', 'SR', 0, 0),
('country', 'ST', 0, 0),
('country', 'SV', 0, 0),
('country', 'SY', 0, 0),
('country', 'SZ', 0, 0),
('country', 'TD', 0, 0),
('country', 'TF', 0, 0),
('country', 'TG', 0, 0),
('country', 'TH', 0, 0),
('country', 'TJ', 0, 0),
('country', 'TK', 0, 0),
('country', 'TL', 0, 0),
('country', 'TM', 0, 0),
('country', 'TN', 0, 0),
('country', 'TO', 0, 0),
('country', 'TR', 0, 0),
('country', 'TT', 0, 0),
('country', 'TV', 0, 0),
('country', 'TW', 0, 0),
('country', 'TZ', 0, 0),
('country', 'UA', 0, 0),
('country', 'UG', 0, 0),
('country', 'US', 4, 1395222160),
('country', 'UY', 0, 0),
('country', 'UZ', 0, 0),
('country', 'VA', 0, 0),
('country', 'VC', 0, 0),
('country', 'VE', 0, 0),
('country', 'VG', 0, 0),
('country', 'VI', 0, 0),
('country', 'VN', 20, 1395371675),
('country', 'VU', 0, 0),
('country', 'WS', 0, 0),
('country', 'YE', 0, 0),
('country', 'YT', 0, 0),
('country', 'YU', 0, 0),
('country', 'ZA', 0, 0),
('country', 'ZM', 0, 0),
('country', 'ZW', 0, 0),
('country', 'ZZ', 7, 1395104065),
('country', 'unkown', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_menu_menu`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_menu_menu` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `menu_item` mediumtext NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `nv3_vi_menu_menu`
--

INSERT INTO `nv3_vi_menu_menu` (`id`, `title`, `menu_item`, `description`) VALUES
(1, 'IMUSIC', '1,2,3,4,5', ''),
(2, 'Liên kết Website', '6,7,8,9,10', ''),
(3, 'Xem trên', '11,12,13,14,15', ''),
(4, 'Dịch Vụ', '16,17', ''),
(5, 'MENU SITE', '18,19,20,21,22,28,27,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62', '');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_menu_rows`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_menu_rows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parentid` int(11) unsigned NOT NULL,
  `mid` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL,
  `link` text NOT NULL,
  `note` varchar(255) NOT NULL DEFAULT '',
  `weight` int(11) NOT NULL,
  `order` int(11) NOT NULL DEFAULT '0',
  `lev` int(11) NOT NULL DEFAULT '0',
  `subitem` mediumtext NOT NULL,
  `who_view` tinyint(2) NOT NULL DEFAULT '0',
  `groups_view` varchar(255) NOT NULL,
  `module_name` varchar(255) NOT NULL DEFAULT '',
  `op` varchar(255) NOT NULL DEFAULT '',
  `target` tinyint(4) NOT NULL DEFAULT '0',
  `css` varchar(255) NOT NULL DEFAULT '',
  `active_type` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=63 ;

--
-- Dumping data for table `nv3_vi_menu_rows`
--

INSERT INTO `nv3_vi_menu_rows` (`id`, `parentid`, `mid`, `title`, `link`, `note`, `weight`, `order`, `lev`, `subitem`, `who_view`, `groups_view`, `module_name`, `op`, `target`, `css`, `active_type`, `status`) VALUES
(1, 0, 1, 'IMUSIC', '#', '', 1, 1, 0, '2,3,4,5', 0, '', '0', '', 1, '', 0, 1),
(2, 1, 1, 'Giới thiệu', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;about', '', 1, 2, 1, '', 0, '', 'about', '', 1, '', 0, 1),
(3, 1, 1, 'Tuyển dụng', '&#x002F;musicvietnam&#x002F;vi&#x002F;articles&#x002F;Tuyen-Dung-1&#x002F;', '', 2, 3, 1, '', 0, '', '0', '', 1, '', 0, 1),
(4, 1, 1, 'Chính sách riêng tư', '&#x002F;musicvietnam&#x002F;vi&#x002F;articles&#x002F;Chinh-sach-rieng-tu-2&#x002F;', '', 3, 4, 1, '', 0, '', '0', '', 1, '', 0, 1),
(5, 1, 1, 'Điều khoản sử dụng', '&#x002F;musicvietnam&#x002F;vi&#x002F;articles&#x002F;Dieu-khoan-su-dung-3&#x002F;', '', 4, 5, 1, '', 0, '', '0', '', 1, '', 0, 1),
(6, 0, 2, 'Liên kết', '#', '', 1, 1, 0, '7,8,9,10', 0, '', '0', '', 1, '', 0, 1),
(7, 6, 2, 'Megacode', 'http&#x3A;&#x002F;&#x002F;megacode.vn&#x002F;', '', 1, 2, 1, '', 0, '', '0', '', 1, '', 0, 1),
(8, 6, 2, 'Vinagon', 'http&#x3A;&#x002F;&#x002F;vinagon.com&#x002F;', '', 2, 3, 1, '', 0, '', '0', '', 1, '', 0, 1),
(9, 6, 2, 'Matran', 'matran.vn', '', 3, 4, 1, '', 0, '', '0', '', 1, '', 0, 1),
(10, 6, 2, 'Cuoi360', '#', '', 4, 5, 1, '', 0, '', '0', '', 1, '', 0, 1),
(11, 0, 3, 'Xem trên', '#', '', 1, 1, 0, '12,13,14,15', 0, '', '0', '', 1, '', 0, 1),
(12, 11, 3, 'Google+', '#', '', 1, 2, 1, '', 0, '', '0', '', 1, '', 0, 1),
(13, 11, 3, 'Twitter', '#', '', 2, 3, 1, '', 0, '', '0', '', 1, '', 0, 1),
(14, 11, 3, 'Youtube', '#', '', 3, 4, 1, '', 0, '', '0', '', 1, '', 0, 1),
(15, 11, 3, 'Facebook', '#', '', 4, 5, 1, '', 0, '', '0', '', 1, '', 0, 1),
(16, 0, 4, 'Dịch Vụ', '#', '', 1, 1, 0, '17', 0, '', '0', '', 1, '', 0, 1),
(17, 16, 4, 'Quà tặng âm nhạc', '&#x002F;musicvietnam&#x002F;vi&#x002F;music&#x002F;gift&#x002F;', '', 1, 2, 1, '', 0, '', '0', '', 1, '', 0, 1),
(18, 0, 5, 'NHẠC', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music', '', 1, 1, 0, '22', 0, '', 'music', '', 1, '', 0, 1),
(19, 0, 5, 'VIDEO', '&#x002F;musicvietnam&#x002F;vi&#x002F;music&#x002F;video&#x002F;', '', 2, 16, 0, '40', 0, '', '0', '', 1, '', 0, 1),
(20, 0, 5, 'PLAYLIST CỦA BẠN', '&#x002F;musicvietnam&#x002F;vi&#x002F;music&#x002F;creatalbum.html', '', 5, 42, 0, '', 0, '', '0', '', 1, '', 0, 1),
(21, 0, 5, 'BÀI HÁT CỦA BẠN', '&#x002F;musicvietnam&#x002F;vi&#x002F;music&#x002F;managersong.html', '', 6, 43, 0, '', 0, '', '0', '', 1, '', 0, 1),
(22, 18, 5, 'Thể loại Mp3', '#', '', 1, 2, 1, '28,27,29,30,31,32,33,34,35,36,37,38,39', 0, '', '0', '', 1, '', 0, 1),
(28, 22, 5, 'Pop Việt', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Pop+Việt&amp;id&#x3D;1&amp;type&#x3D;category', '', 2, 4, 2, '', 0, '', '0', '', 1, '', 0, 1),
(27, 22, 5, 'Rock Việt', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Rock+Vi&#x25;E1&#x25;BB&#x25;87t&amp;id&#x3D;2&amp;type&#x3D;category', '', 1, 3, 2, '', 0, '', '0', '', 1, '', 0, 1),
(25, 0, 5, 'NGHỆ SĨ', '#', '', 3, 32, 0, '59', 0, '', '0', '', 1, '', 0, 1),
(26, 0, 5, 'BẢNG XẾP HẠNG', '#', '', 4, 37, 0, '58', 0, '', '0', '', 1, '', 0, 1),
(29, 22, 5, 'Rap Việt', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Rap+Việt&amp;id&#x3D;3&amp;type&#x3D;category', '', 3, 5, 2, '', 0, '', '0', '', 1, '', 0, 1),
(30, 22, 5, 'Pop Nhật', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Pop+Nhật&amp;id&#x3D;5&amp;type&#x3D;category', '', 4, 6, 2, '', 0, '', '0', '', 1, '', 0, 1),
(31, 22, 5, 'Nhạc Truyền Thống', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Nhạc+Truyền+Thống&amp;id&#x3D;6&amp;type&#x3D;category', '', 5, 7, 2, '', 0, '', '0', '', 1, '', 0, 1),
(32, 22, 5, 'Rap &#x002F; Hip Hop', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Rap+&#x25;26&#x25;23x002F&#x25;3B+Hip+Hop&amp;id&#x3D;7&amp;type&#x3D;category', '', 6, 8, 2, '', 0, '', '0', '', 1, '', 0, 1),
(33, 22, 5, 'Nhạc Thiếu Nhi', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Nhạc+Thiếu+Nhi&amp;id&#x3D;8&amp;type&#x3D;category', '', 7, 9, 2, '', 0, '', '0', '', 1, '', 0, 1),
(34, 22, 5, 'Rock', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Rock&amp;id&#x3D;9&amp;type&#x3D;category', '', 8, 10, 2, '', 0, '', '0', '', 1, '', 0, 1),
(35, 22, 5, 'Nhạc Phim', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Nhạc+Phim&amp;id&#x3D;10&amp;type&#x3D;category', '', 9, 11, 2, '', 0, '', '0', '', 1, '', 0, 1),
(36, 22, 5, 'Nhạc Dance', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Nhạc+Dance&amp;id&#x3D;11&amp;type&#x3D;category', '', 10, 12, 2, '', 0, '', '0', '', 1, '', 0, 1),
(37, 22, 5, 'Nhạc Không Lời', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Nhạc+Không+Lời&amp;id&#x3D;12&amp;type&#x3D;category', '', 11, 13, 2, '', 0, '', '0', '', 1, '', 0, 1),
(38, 22, 5, 'Quốc Gia Khác', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Quốc+Gia+Khác&amp;id&#x3D;13&amp;type&#x3D;category', '', 12, 14, 2, '', 0, '', '0', '', 1, '', 0, 1),
(39, 22, 5, 'Nhạc Trữ Tình', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;song&amp;q&#x3D;Nhạc+Trữ+Tình&amp;id&#x3D;14&amp;type&#x3D;category', '', 13, 15, 2, '', 0, '', '0', '', 1, '', 0, 1),
(40, 19, 5, 'Thể loại Video', '#', '', 1, 17, 1, '41,42,43,44,45,46,47,48,49,50,51,52,53,54', 0, '', '0', '', 1, '', 0, 1),
(41, 40, 5, 'Việt Nam', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Việt+Nam&amp;id&#x3D;1&amp;type&#x3D;category', '', 1, 18, 2, '', 0, '', '0', '', 1, '', 0, 1),
(42, 40, 5, 'Âu Mỹ', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Âu+Mỹ&amp;id&#x3D;2&amp;type&#x3D;category', '', 2, 19, 2, '', 0, '', '0', '', 1, '', 0, 1),
(43, 40, 5, 'Hàn Quốc', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Hàn+Quốc&amp;id&#x3D;3&amp;type&#x3D;category', '', 3, 20, 2, '', 0, '', '0', '', 1, '', 0, 1),
(44, 40, 5, 'Nhật Bản', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Nhật+Bản&amp;id&#x3D;4&amp;type&#x3D;category', '', 4, 21, 2, '', 0, '', '0', '', 1, '', 0, 1),
(45, 40, 5, 'Hoa Ngữ', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Hoa+Ngữ&amp;id&#x3D;5&amp;type&#x3D;category', '', 5, 22, 2, '', 0, '', '0', '', 1, '', 0, 1),
(46, 40, 5, 'Hòa Tấu', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Hòa+Tấu&amp;id&#x3D;6&amp;type&#x3D;category', '', 6, 23, 2, '', 0, '', '0', '', 1, '', 0, 1),
(47, 40, 5, 'Nhạc Trữ Tình', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Nhạc+Trữ+Tình&amp;id&#x3D;7&amp;type&#x3D;category', '', 7, 24, 2, '', 0, '', '0', '', 1, '', 0, 1),
(48, 40, 5, 'Nhạc Quê Hương', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Nhạc+Quê+Hương&amp;id&#x3D;8&amp;type&#x3D;category', '', 8, 25, 2, '', 0, '', '0', '', 1, '', 0, 1),
(49, 40, 5, 'Nhạc Cách Mạng', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Nhạc+Cách+Mạng&amp;id&#x3D;9&amp;type&#x3D;category', '', 9, 26, 2, '', 0, '', '0', '', 1, '', 0, 1),
(50, 40, 5, 'Nhạc Thiếu Nhi', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Nhạc+Thiếu+Nhi&amp;id&#x3D;10&amp;type&#x3D;category', '', 10, 27, 2, '', 0, '', '0', '', 1, '', 0, 1),
(51, 40, 5, 'Rock Việt', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Rock+Việt&amp;id&#x3D;11&amp;type&#x3D;category', '', 11, 28, 2, '', 0, '', '0', '', 1, '', 0, 1),
(52, 40, 5, 'Rap Việt', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Rock+Việt&amp;id&#x3D;11&amp;type&#x3D;category', '', 12, 29, 2, '', 0, '', '0', '', 1, '', 0, 1),
(53, 40, 5, 'Electronic &#x002F; Dance', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;Electronic+&#x25;26&#x25;23x002F&#x25;3B+Dance&amp;id&#x3D;13&amp;type&#x3D;category', '', 13, 30, 2, '', 0, '', '0', '', 1, '', 0, 1),
(54, 40, 5, 'AudioPhile', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;search&amp;whe-re&#x3D;video&amp;q&#x3D;AudioPhile&amp;id&#x3D;14&amp;type&#x3D;category', '', 14, 31, 2, '', 0, '', '0', '', 1, '', 0, 1),
(55, 58, 5, 'Việt Nam', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;top_country&amp;cid&#x3D;1', '', 1, 39, 2, '', 0, '', '0', '', 1, '', 0, 1),
(56, 58, 5, 'Hàn Quốc', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;top_country&amp;cid&#x3D;2', '', 3, 41, 2, '', 0, '', '0', '', 1, '', 0, 1),
(57, 58, 5, 'Âu Mỹ', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;top_country&amp;cid&#x3D;3', '', 2, 40, 2, '', 0, '', '0', '', 1, '', 0, 1),
(58, 26, 5, 'Bảng xếp hạng', '#', '', 1, 38, 1, '55,56,57', 0, '', '0', '', 1, '', 0, 1),
(59, 25, 5, 'Ca sĩ', '#', '', 1, 33, 1, '60,61,62', 0, '', '0', '', 1, '', 0, 1),
(60, 59, 5, 'Đàm Vĩnh Hưng', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;singer_song&amp;casiid&#x3D;43', '', 1, 34, 2, '', 0, '', '0', '', 1, '', 0, 1),
(61, 59, 5, 'AC&amp;M', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;singer_song&amp;casiid&#x3D;38', '', 2, 35, 2, '', 0, '', '0', '', 1, '', 0, 1),
(62, 59, 5, 'The Men', '&#x002F;musicvietnam&#x002F;index.php?language&#x3D;vi&amp;nv&#x3D;music&amp;op&#x3D;singer_song&amp;casiid&#x3D;5', '', 3, 36, 2, '', 0, '', '0', '', 1, '', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_modfuncs`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_modfuncs` (
  `func_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `func_name` varchar(55) NOT NULL,
  `func_custom_name` varchar(255) NOT NULL,
  `in_module` varchar(55) NOT NULL,
  `show_func` tinyint(4) NOT NULL DEFAULT '0',
  `in_submenu` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `subweight` smallint(2) unsigned NOT NULL DEFAULT '1',
  `setting` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`func_id`),
  UNIQUE KEY `func_name` (`func_name`,`in_module`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=89 ;

--
-- Dumping data for table `nv3_vi_modfuncs`
--

INSERT INTO `nv3_vi_modfuncs` (`func_id`, `func_name`, `func_custom_name`, `in_module`, `show_func`, `in_submenu`, `subweight`, `setting`) VALUES
(1, 'Sitemap', 'Sitemap', 'about', 0, 0, 0, ''),
(2, 'main', 'Main', 'about', 1, 0, 1, ''),
(3, 'Sitemap', 'Sitemap', 'news', 0, 0, 0, ''),
(4, 'comment', 'Comment', 'news', 0, 0, 0, ''),
(5, 'content', 'Content', 'news', 1, 0, 1, ''),
(6, 'detail', 'Detail', 'news', 1, 0, 2, ''),
(7, 'main', 'Main', 'news', 1, 0, 3, ''),
(8, 'postcomment', 'Postcomment', 'news', 0, 0, 0, ''),
(9, 'print', 'Print', 'news', 0, 0, 0, ''),
(10, 'rating', 'Rating', 'news', 0, 0, 0, ''),
(11, 'rss', 'Rss', 'news', 0, 0, 0, ''),
(12, 'savefile', 'Savefile', 'news', 0, 0, 0, ''),
(13, 'search', 'Search', 'news', 1, 0, 4, ''),
(14, 'sendmail', 'Sendmail', 'news', 0, 0, 0, ''),
(15, 'topic', 'Topic', 'news', 1, 0, 5, ''),
(16, 'viewcat', 'Viewcat', 'news', 1, 0, 6, ''),
(17, 'active', 'Active', 'users', 1, 0, 8, ''),
(18, 'changepass', 'Đổi mật khẩu', 'users', 1, 1, 6, ''),
(19, 'editinfo', 'Editinfo', 'users', 1, 0, 10, ''),
(20, 'login', 'Đăng nhập', 'users', 1, 1, 2, ''),
(21, 'logout', 'Logout', 'users', 1, 1, 3, ''),
(22, 'lostactivelink', 'Lostactivelink', 'users', 1, 0, 9, ''),
(23, 'lostpass', 'Quên mật khẩu', 'users', 1, 1, 5, ''),
(24, 'main', 'Main', 'users', 1, 1, 1, ''),
(25, 'openid', 'Openid', 'users', 1, 1, 7, ''),
(26, 'register', 'Đăng ký', 'users', 1, 1, 4, ''),
(27, 'main', 'Main', 'contact', 1, 0, 1, ''),
(28, 'allbots', 'Máy chủ tìm kiếm', 'statistics', 1, 1, 6, ''),
(29, 'allbrowsers', 'Theo trình duyệt', 'statistics', 1, 1, 4, ''),
(30, 'allcountries', 'Theo quốc gia', 'statistics', 1, 1, 3, ''),
(31, 'allos', 'Theo hệ điều hành', 'statistics', 1, 1, 5, ''),
(32, 'allreferers', 'Theo đường dẫn đến site', 'statistics', 1, 1, 2, ''),
(33, 'main', 'Main', 'statistics', 1, 0, 1, ''),
(34, 'referer', 'Đường dẫn đến site theo tháng', 'statistics', 1, 0, 7, ''),
(35, 'main', 'Main', 'voting', 1, 0, 0, ''),
(36, 'addads', 'Addads', 'banners', 1, 0, 1, ''),
(37, 'cledit', 'Cledit', 'banners', 0, 0, 0, ''),
(38, 'click', 'Click', 'banners', 0, 0, 0, ''),
(39, 'clientinfo', 'Clientinfo', 'banners', 1, 0, 2, ''),
(40, 'clinfo', 'Clinfo', 'banners', 0, 0, 0, ''),
(41, 'logininfo', 'Logininfo', 'banners', 0, 0, 0, ''),
(42, 'main', 'Main', 'banners', 1, 0, 3, ''),
(43, 'stats', 'Stats', 'banners', 1, 0, 4, ''),
(44, 'viewmap', 'Viewmap', 'banners', 0, 0, 0, ''),
(45, 'adv', 'Adv', 'search', 0, 0, 0, ''),
(46, 'main', 'Main', 'search', 1, 0, 1, ''),
(47, 'main', 'Main', 'rss', 1, 0, 1, ''),
(48, 'regroups', 'Nhóm thành viên', 'users', 1, 0, 1, ''),
(50, 'memberlist', 'Danh sách thành viên', 'users', 1, 1, 1, ''),
(51, 'groups', 'Groups', 'news', 1, 0, 7, ''),
(52, 'Sitemap', 'Sitemap', 'music', 0, 0, 0, ''),
(53, 'album', 'Album', 'music', 1, 0, 7, ''),
(54, 'allplaylist', 'Allplaylist', 'music', 1, 0, 11, ''),
(55, 'comment', 'Comment', 'music', 0, 0, 0, ''),
(56, 'creatalbum', 'Creatalbum', 'music', 1, 0, 9, ''),
(57, 'creatlinksong', 'Creatlinksong', 'music', 0, 0, 0, ''),
(58, 'data', 'Data', 'music', 0, 0, 0, ''),
(59, 'down', 'Down', 'music', 1, 0, 19, ''),
(60, 'editplaylist', 'Editplaylist', 'music', 1, 0, 16, ''),
(61, 'gift', 'Gift', 'music', 1, 0, 18, ''),
(62, 'listenlist', 'Listenlist', 'music', 1, 0, 4, ''),
(63, 'listenone', 'Listenone', 'music', 1, 0, 3, ''),
(64, 'listenuserlist', 'Listenuserlist', 'music', 1, 0, 10, ''),
(65, 'main', 'Main', 'music', 1, 0, 2, ''),
(66, 'managersong', 'Managersong', 'music', 1, 0, 17, ''),
(67, 'playlist', 'Playlist', 'music', 1, 0, 6, ''),
(68, 'postcomment', 'Postcomment', 'music', 0, 0, 0, ''),
(69, 'rss', 'Rss', 'music', 0, 0, 0, ''),
(70, 'search', 'Search', 'music', 1, 0, 5, ''),
(71, 'searchvideo', 'Searchvideo', 'music', 1, 0, 15, ''),
(72, 'sendmail', 'Sendmail', 'music', 0, 0, 0, ''),
(73, 'showplaylist', 'Showplaylist', 'music', 0, 0, 0, ''),
(74, 'song', 'Song', 'music', 1, 0, 8, ''),
(75, 'upload', 'Upload', 'music', 1, 0, 14, ''),
(76, 'uploadfile', 'Uploadfile', 'music', 0, 0, 0, ''),
(77, 'video', 'Video', 'music', 1, 0, 13, ''),
(78, 'videosendmail', 'Videosendmail', 'music', 0, 0, 0, ''),
(79, 'viewvideo', 'Viewvideo', 'music', 1, 0, 12, ''),
(80, 'main', 'Main', 'forum', 1, 0, 1, ''),
(81, 'Sitemap', 'Sitemap', 'articles', 0, 0, 0, ''),
(82, 'comment', 'Comment', 'articles', 0, 0, 0, ''),
(83, 'detail', 'Detail', 'articles', 1, 0, 2, ''),
(84, 'listcomment', 'Listcomment', 'articles', 0, 0, 0, ''),
(85, 'main', 'Main', 'articles', 1, 0, 1, ''),
(86, 'rss', 'Rss', 'articles', 0, 0, 0, ''),
(87, 'top_country', 'Top_country', 'music', 1, 0, 1, ''),
(88, 'singer_song', 'Singer_song', 'music', 1, 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_modthemes`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_modthemes` (
  `func_id` int(11) DEFAULT NULL,
  `layout` varchar(100) DEFAULT NULL,
  `theme` varchar(100) DEFAULT NULL,
  UNIQUE KEY `func_id` (`func_id`,`layout`,`theme`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_modthemes`
--

INSERT INTO `nv3_vi_modthemes` (`func_id`, `layout`, `theme`) VALUES
(0, 'body', 'mobile_nukeviet'),
(0, 'body-right', 'modern'),
(0, 'left-body-right', 'default'),
(0, 'left-body-right', 'music'),
(2, 'body', 'mobile_nukeviet'),
(2, 'body', 'modern'),
(2, 'body-right', 'music'),
(2, 'left-body-right', 'default'),
(5, 'body', 'mobile_nukeviet'),
(5, 'body-right', 'modern'),
(5, 'body-right', 'music'),
(5, 'left-body-right', 'default'),
(6, 'body', 'mobile_nukeviet'),
(6, 'body-right', 'modern'),
(6, 'body-right', 'music'),
(6, 'left-body-right', 'default'),
(7, 'body', 'mobile_nukeviet'),
(7, 'body-right', 'modern'),
(7, 'body-right', 'music'),
(7, 'left-body-right', 'default'),
(13, 'body', 'mobile_nukeviet'),
(13, 'body-right', 'modern'),
(13, 'body-right', 'music'),
(13, 'left-body-right', 'default'),
(15, 'body', 'mobile_nukeviet'),
(15, 'body-right', 'modern'),
(15, 'body-right', 'music'),
(15, 'left-body-right', 'default'),
(16, 'body', 'mobile_nukeviet'),
(16, 'body-right', 'modern'),
(16, 'body-right', 'music'),
(16, 'left-body-right', 'default'),
(17, 'body', 'mobile_nukeviet'),
(17, 'body-right', 'modern'),
(17, 'body-right', 'music'),
(17, 'left-body-right', 'default'),
(18, 'body', 'mobile_nukeviet'),
(18, 'body-right', 'modern'),
(18, 'body-right', 'music'),
(18, 'left-body-right', 'default'),
(19, 'body', 'mobile_nukeviet'),
(19, 'body-right', 'modern'),
(19, 'body-right', 'music'),
(19, 'left-body-right', 'default'),
(20, 'body', 'mobile_nukeviet'),
(20, 'body-right', 'modern'),
(20, 'body-right', 'music'),
(20, 'left-body-right', 'default'),
(21, 'body', 'mobile_nukeviet'),
(21, 'body-right', 'modern'),
(21, 'body-right', 'music'),
(21, 'left-body-right', 'default'),
(22, 'body', 'mobile_nukeviet'),
(22, 'body-right', 'modern'),
(22, 'body-right', 'music'),
(22, 'left-body-right', 'default'),
(23, 'body', 'mobile_nukeviet'),
(23, 'body-right', 'modern'),
(23, 'body-right', 'music'),
(23, 'left-body-right', 'default'),
(24, 'body', 'mobile_nukeviet'),
(24, 'body-right', 'modern'),
(24, 'body-right', 'music'),
(24, 'left-body-right', 'default'),
(25, 'body', 'mobile_nukeviet'),
(25, 'body-right', 'modern'),
(25, 'body-right', 'music'),
(25, 'left-body-right', 'default'),
(26, 'body', 'mobile_nukeviet'),
(26, 'body-right', 'modern'),
(26, 'body-right', 'music'),
(26, 'left-body-right', 'default'),
(27, 'body', 'mobile_nukeviet'),
(27, 'body-right', 'modern'),
(27, 'body-right', 'music'),
(27, 'left-body-right', 'default'),
(28, 'body', 'mobile_nukeviet'),
(28, 'body', 'modern'),
(28, 'body-right', 'music'),
(28, 'left-body', 'default'),
(29, 'body', 'mobile_nukeviet'),
(29, 'body', 'modern'),
(29, 'body-right', 'music'),
(29, 'left-body', 'default'),
(30, 'body', 'mobile_nukeviet'),
(30, 'body', 'modern'),
(30, 'body-right', 'music'),
(30, 'left-body', 'default'),
(31, 'body', 'mobile_nukeviet'),
(31, 'body', 'modern'),
(31, 'body-right', 'music'),
(31, 'left-body', 'default'),
(32, 'body', 'mobile_nukeviet'),
(32, 'body', 'modern'),
(32, 'body-right', 'music'),
(32, 'left-body', 'default'),
(33, 'body', 'mobile_nukeviet'),
(33, 'body', 'modern'),
(33, 'body-right', 'music'),
(33, 'left-body', 'default'),
(34, 'body', 'mobile_nukeviet'),
(34, 'body', 'modern'),
(34, 'body-right', 'music'),
(34, 'left-body', 'default'),
(35, 'body', 'mobile_nukeviet'),
(35, 'body-right', 'modern'),
(35, 'body-right', 'music'),
(35, 'left-body-right', 'default'),
(36, 'body', 'mobile_nukeviet'),
(36, 'body-right', 'modern'),
(36, 'body-right', 'music'),
(36, 'left-body-right', 'default'),
(39, 'body', 'mobile_nukeviet'),
(39, 'body-right', 'modern'),
(39, 'body-right', 'music'),
(39, 'left-body-right', 'default'),
(42, 'body', 'mobile_nukeviet'),
(42, 'body-right', 'modern'),
(42, 'body-right', 'music'),
(42, 'left-body-right', 'default'),
(43, 'body', 'mobile_nukeviet'),
(43, 'body-right', 'modern'),
(43, 'body-right', 'music'),
(43, 'left-body-right', 'default'),
(46, 'body', 'mobile_nukeviet'),
(46, 'body-right', 'modern'),
(46, 'body-right', 'music'),
(46, 'left-body-right', 'default'),
(47, 'body', 'mobile_nukeviet'),
(47, 'body', 'modern'),
(47, 'body-right', 'music'),
(47, 'left-body-right', 'default'),
(48, 'body', 'mobile_nukeviet'),
(48, 'body-right', 'modern'),
(48, 'body-right', 'music'),
(48, 'left-body-right', 'default'),
(50, 'body', 'mobile_nukeviet'),
(50, 'body-right', 'modern'),
(50, 'body-right', 'music'),
(50, 'left-body-right', 'default'),
(51, 'body-right', 'modern'),
(51, 'body-right', 'music'),
(51, 'left-body-right', 'default'),
(53, 'body', 'default'),
(53, 'body', 'mobile_nukeviet'),
(53, 'body-right', 'modern'),
(53, 'body-right', 'music'),
(54, 'body', 'default'),
(54, 'body', 'mobile_nukeviet'),
(54, 'body-right', 'modern'),
(54, 'body-right', 'music'),
(56, 'body', 'default'),
(56, 'body', 'mobile_nukeviet'),
(56, 'body-right', 'modern'),
(56, 'body-right', 'music'),
(59, 'body', 'default'),
(59, 'body', 'mobile_nukeviet'),
(59, 'body-right', 'modern'),
(59, 'body-right', 'music'),
(60, 'body', 'default'),
(60, 'body', 'mobile_nukeviet'),
(60, 'body-right', 'modern'),
(60, 'body-right', 'music'),
(61, 'body', 'default'),
(61, 'body', 'mobile_nukeviet'),
(61, 'body-right', 'modern'),
(61, 'body-right', 'music'),
(62, 'body', 'default'),
(62, 'body', 'mobile_nukeviet'),
(62, 'body-right', 'modern'),
(62, 'body-right', 'music'),
(63, 'body', 'default'),
(63, 'body', 'mobile_nukeviet'),
(63, 'body-right', 'modern'),
(63, 'body-right', 'music'),
(64, 'body', 'default'),
(64, 'body', 'mobile_nukeviet'),
(64, 'body-right', 'modern'),
(64, 'body-right', 'music'),
(65, 'body', 'mobile_nukeviet'),
(65, 'body', 'music'),
(65, 'body-right', 'modern'),
(65, 'left-body-right', 'default'),
(66, 'body', 'default'),
(66, 'body', 'mobile_nukeviet'),
(66, 'body-right', 'modern'),
(66, 'body-right', 'music'),
(67, 'body', 'default'),
(67, 'body', 'mobile_nukeviet'),
(67, 'body-right', 'modern'),
(67, 'body-right', 'music'),
(70, 'body', 'default'),
(70, 'body', 'mobile_nukeviet'),
(70, 'body-right', 'modern'),
(70, 'body-right', 'music'),
(71, 'body', 'default'),
(71, 'body', 'mobile_nukeviet'),
(71, 'body-right', 'modern'),
(71, 'body-right', 'music'),
(74, 'body', 'default'),
(74, 'body', 'mobile_nukeviet'),
(74, 'body-right', 'modern'),
(74, 'body-right', 'music'),
(75, 'body', 'default'),
(75, 'body', 'mobile_nukeviet'),
(75, 'body-right', 'modern'),
(75, 'body-right', 'music'),
(77, 'body', 'default'),
(77, 'body', 'mobile_nukeviet'),
(77, 'body-right', 'modern'),
(77, 'body-right', 'music'),
(79, 'body', 'default'),
(79, 'body', 'mobile_nukeviet'),
(79, 'body-right', 'modern'),
(79, 'body-right', 'music'),
(80, 'body', 'mobile_nukeviet'),
(80, 'body-right', 'modern'),
(80, 'left-body-right', 'default'),
(80, 'left-body-right', 'music'),
(83, 'body', 'mobile_nukeviet'),
(83, 'body-right', 'modern'),
(83, 'body-right', 'music'),
(83, 'left-body-right', 'default'),
(85, 'body', 'mobile_nukeviet'),
(85, 'body-right', 'modern'),
(85, 'body-right', 'music'),
(85, 'left-body-right', 'default'),
(87, 'body-right', 'music'),
(88, 'body-right', 'music');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_modules`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_modules` (
  `title` varchar(55) NOT NULL,
  `module_file` varchar(55) NOT NULL DEFAULT '',
  `module_data` varchar(55) NOT NULL DEFAULT '',
  `custom_title` varchar(255) NOT NULL,
  `admin_title` varchar(255) NOT NULL,
  `set_time` int(11) unsigned NOT NULL DEFAULT '0',
  `main_file` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `admin_file` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `theme` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `keywords` mediumtext NOT NULL,
  `groups_view` varchar(255) NOT NULL,
  `in_menu` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `weight` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `submenu` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `admins` varchar(255) NOT NULL,
  `rss` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`title`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_modules`
--

INSERT INTO `nv3_vi_modules` (`title`, `module_file`, `module_data`, `custom_title`, `admin_title`, `set_time`, `main_file`, `admin_file`, `theme`, `mobile`, `description`, `keywords`, `groups_view`, `in_menu`, `weight`, `submenu`, `act`, `admins`, `rss`) VALUES
('about', 'about', 'about', 'Giới thiệu', '', 1276333182, 1, 1, '', 'mobile_nukeviet', '', '', '0', 1, 1, 1, 1, '', 0),
('news', 'news', 'news', 'Tin Tức', '', 1270400000, 1, 1, '', 'mobile_nukeviet', '', '', '0', 1, 2, 1, 1, '', 1),
('users', 'users', 'users', 'Thành viên', 'Tài khoản', 1274080277, 1, 1, '', 'mobile_nukeviet', '', '', '0', 1, 3, 1, 1, '', 0),
('contact', 'contact', 'contact', 'Liên hệ', '', 1275351337, 1, 1, '', 'mobile_nukeviet', '', '', '0', 1, 4, 1, 1, '', 0),
('statistics', 'statistics', 'statistics', 'Thống kê', '', 1276520928, 1, 0, '', 'mobile_nukeviet', '', 'truy cập, online, statistics', '0', 1, 5, 1, 1, '', 0),
('voting', 'voting', 'voting', 'Thăm dò ý kiến', '', 1275315261, 1, 1, '', 'mobile_nukeviet', '', '', '0', 0, 6, 1, 1, '', 1),
('banners', 'banners', 'banners', 'Quảng cáo', '', 1270400000, 1, 1, '', 'mobile_nukeviet', '', '', '0', 0, 7, 1, 1, '', 0),
('search', 'search', 'search', 'Tìm kiếm', '', 1273474173, 1, 0, '', 'mobile_nukeviet', '', '', '0', 0, 8, 1, 1, '', 0),
('menu', 'menu', 'menu', 'Menu Site', '', 1295287334, 0, 1, '', 'mobile_nukeviet', '', '', '0', 0, 9, 1, 1, '', 0),
('rss', 'rss', 'rss', 'Rss', '', 1279366705, 1, 1, '', 'mobile_nukeviet', '', '', '0', 0, 10, 10, 1, '', 0),
('music', 'music', 'music', 'Music', '', 1394791399, 1, 1, '', '', '', '', '0', 1, 11, 1, 1, '', 1),
('forum', 'forum', 'forum', 'forum', '', 1395217311, 1, 0, '', '', '', '', '0', 1, 12, 1, 1, '', 0),
('articles', 'articles', 'articles', 'Thông tin cần thiết', '', 1395221787, 1, 1, '', '', '', '', '0', 1, 13, 1, 1, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) NOT NULL DEFAULT '',
  `tenthat` varchar(255) NOT NULL DEFAULT '',
  `casi` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `nhacsi` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `album` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `theloai` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `listcat` varchar(255) NOT NULL DEFAULT '',
  `duongdan` varchar(255) NOT NULL DEFAULT '',
  `upboi` varchar(255) NOT NULL DEFAULT '',
  `numview` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `active` smallint(2) NOT NULL DEFAULT '0',
  `bitrate` bigint(20) unsigned NOT NULL DEFAULT '0',
  `size` bigint(20) unsigned NOT NULL DEFAULT '0',
  `duration` bigint(20) unsigned NOT NULL DEFAULT '0',
  `server` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `dt` int(11) unsigned NOT NULL DEFAULT '0',
  `binhchon` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `hit` varchar(50) NOT NULL DEFAULT '',
  `cid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=49 ;

--
-- Dumping data for table `nv3_vi_music`
--

INSERT INTO `nv3_vi_music` (`id`, `ten`, `tenthat`, `casi`, `nhacsi`, `album`, `theloai`, `listcat`, `duongdan`, `upboi`, `numview`, `active`, `bitrate`, `size`, `duration`, `server`, `userid`, `dt`, `binhchon`, `hit`, `cid`) VALUES
(40, 'Em', 'Em', 16, 0, 1, 1, '1', '/em.X1tTVEVdbw==.html', 'admin', 1, 1, 0, 0, 0, 3, 1, 1394851697, 0, '1-1394851697', 1),
(2, 'Em-Cua-Ngay-Hom-Qua', 'Em Của Ngày Hôm Qua', 3, 2, 1, 1, '1', '/em-cua-ngay-hom-qua.X1tQWkRdZw==.html', 'admin', 162, 1, 320, 0, 3, 3, 1, 1394795639, 1, '188-1394795639', 2),
(4, 'Minh-Yeu-Nhau-Di', 'Mình Yêu Nhau Đi', 4, 0, 1, 1, '1', '/minh-yeu-nhau-di.X1tTVURfbQ==.html', 'admin', 6, 1, 128, 0, 3, 3, 1, 1394848912, 0, '6-1394848912', 3),
(5, 'Co-Khi-Nao-Roi-Xa', 'Có Khi Nào Rời Xa', 4, 4, 1, 1, '1', '/co-khi-nao-roi-xa.VllTW0Rd.html', 'admin', 6, 1, 320, 0, 4, 3, 1, 1394848912, 0, '8-1394848912', 1),
(43, 'Ky-Uc-Con-Dau', 'Ký Ức Còn Đâu', 29, 11, 2, 1, '1', '/ky-uc-con-dau.X1tRV0tbbw==.html', 'admin', 9, 1, 320, 0, 4, 3, 1, 1394854446, 0, '5-1394854446', 2),
(6, 'Minh-Yeu-Nhau-Di', 'Mình Yêu Nhau Đi', 4, 0, 1, 1, '1', '/minh-yeu-nhau-di.X1tTVURfbQ==.html', 'admin', 1, 1, 0, 0, 0, 3, 1, 1394849208, 0, '1-1394849208', 3),
(7, 'Nu-Cuoi-Dang', 'Nụ Cười Đắng', 5, 5, 1, 1, '1', '/nu-cuoi-dang.X1tTW0Ndaw==.html', 'admin', 3, 1, 320, 0, 4, 3, 1, 1394849208, 0, '3-1394849208', 3),
(8, 'Tim', 'Tìm', 6, 0, 1, 1, '1', '/tim.X1tTW0NfbQ==.html', 'admin', 6, 1, 320, 0, 4, 3, 1, 1394849208, 0, '6-1394849208', 2),
(9, 'Trot-Yeu', 'Trót Yêu', 7, 6, 1, 1, '1', '/trot-yeu.X1tTVERZbw==.html', 'admin', 3, 1, 320, 0, 4, 3, 1, 1394849423, 0, '3-1394849423', 1),
(10, 'Khoang-Trong-De-Lai', 'Khoảng Trống Để Lại', 5, 7, 1, 1, '1', '/khoang-trong-de-lai.X1tTW0dcbg==.html', 'admin', 0, 1, 320, 0, 4, 3, 1, 1394849423, 0, '0-1394849423', 2),
(11, 'Choi-Voi-Trong-Con-Dau', 'Chơi Vơi Trong Cơn Đau', 8, 8, 1, 1, '1', '/choi-voi-trong-con-dau.X1tTVERcbA==.html', 'admin', 0, 1, 320, 0, 3, 3, 1, 1394849423, 0, '0-1394849423', 3),
(12, 'Dung-Co-Yeu', 'Đừng Cố Yêu', 9, 9, 1, 1, '1', '/dung-co-yeu.X1tTW0ZXaQ==.html', 'admin', 0, 1, 320, 0, 4, 3, 1, 1394849423, 0, '0-1394849423', 2),
(13, 'Tim-Em', 'Tìm Em', 1, 10, 1, 1, '1,11', '/tim-em.X1tSU0tfZg==.html', 'admin', 2, 1, 320, 0, 4, 3, 1, 1394849423, 0, '2-1394849423', 2),
(14, 'Anh-Muon-Chia-Tay-Phai-Khong', 'Anh Muốn Chia Tay Phải Không', 10, 0, 1, 1, '1', '/anh-muon-chia-tay-phai-khong.X1tSU0ZbbQ==.html', 'admin', 0, 1, 0, 0, 0, 3, 1, 1394849423, 0, '0-1394849423', 1),
(15, 'Dung-Lai-Nhe', 'Dừng Lại Nhé', 11, 0, 1, 2, '2', '/dung-lai-nhe.X1tTVUVWbQ==.html', 'admin', 0, 1, 0, 0, 0, 3, 1, 1394849423, 0, '0-1394849423', 1),
(16, 'Yeu-Di-Roi-Khoc', 'Yêu Đi Rồi Khóc', 12, 0, 1, 2, '1,2', '/yeu-di-roi-khoc.X1tTVEJbaQ==.html', 'admin', 13, 1, 0, 0, 0, 3, 1, 1394849423, 0, '15-1394849423', 2),
(17, 'Ta-La-Cho-Nhau', 'Ta Là Cho Nhau', 13, 0, 1, 1, '1', '/ta-la-cho-nhau.X1tTVEZdaw==.html', 'admin', 3, 1, 0, 0, 0, 3, 1, 1394849423, 0, '3-1394849423', 3),
(20, 'Manh-Ghep-Da-Vo', 'Mảnh Ghép Đã Vỡ', 2, 0, 1, 1, '1', '/manh-ghep-da-vo.X1tTUUBeaw==.html', 'admin', 0, 1, 0, 0, 0, 3, 1, 1394849945, 0, '0-1394849945', 2),
(19, 'Leave-Me-Alone', 'Leave Me Alone', 15, 0, 1, 1, '1', '/leave-me-alone.X1tTVUVcbQ==.html', 'admin', 0, 1, 0, 0, 0, 3, 1, 1394849945, 0, '0-1394849945', 3),
(21, 'Chi-Co-The-La-Yeu', 'Chỉ Có Thể Là Yêu', 2, 0, 1, 1, '1,10', '/chi-co-the-la-yeu.X1tTW0JdbQ==.html', 'admin', 1, 1, 0, 0, 0, 3, 1, 1394849945, 0, '1-1394849945', 2),
(22, 'Em', 'Em', 16, 0, 1, 1, '1', '/em.X1tTVEVdbw==.html', 'admin', 36, 1, 0, 0, 0, 3, 1, 1394849945, 0, '0-1394849945', 1),
(23, 'Ben-Anh-Em-Se-Khong-Co-Tuong-Lai', 'Bên Anh Em Sẽ Không Có Tương Lai', 17, 0, 1, 1, '1', '/ben-anh-em-se-khong-co-tuong-lai.X1tTVUZaZg==.html', 'admin', 1, 1, 0, 0, 0, 3, 1, 1394849945, 0, '1-1394849945', 3),
(24, 'Cho-Tim-Minh-Ly-Do', 'Cho Tim Mình Lý Do', 5, 0, 1, 1, '1', '/cho-tim-minh-ly-do.X1tQWkdWaw==.html', 'admin', 9, 1, 0, 0, 0, 3, 1, 1394849945, 0, '7-1394849945', 2),
(25, 'Chuyen-Cua-Mua-Dong', 'Chuyện Của Mùa Đông', 18, 0, 1, 1, '1', '/chuyen-cua-mua-dong.X1tTUEJfbA==.html', 'admin', 2, 1, 0, 0, 0, 3, 1, 1394849945, 0, '2-1394849945', 3),
(26, 'Hay-Quen-Anh', 'Hãy Quên Anh', 19, 0, 1, 3, '1,2,3,4', '/hay-quen-anh.X1tTVURfbA==.html', 'admin', 3, 1, 0, 0, 0, 3, 1, 1394849945, 0, '3-1394849945', 2),
(27, 'Co-Em-Va-Ai', 'Có Em Và Ai', 20, 0, 1, 3, '1', '/co-em-va-ai.X1tTVUVWbA==.html', 'admin', 1, 1, 0, 0, 0, 3, 1, 1394849945, 0, '1-1394849945', 1),
(28, 'Chut-Nang-Chut-Mua', 'Chút Nắng Chút Mưa', 21, 0, 1, 1, '1', '/chut-nang-chut-mua.X1tTV0tabA==.html', 'admin', 5, 1, 0, 0, 0, 3, 1, 1394849945, 0, '5-1394849945', 2),
(39, 'Manh-Ghep-Da-Vo', 'Mảnh Ghép Đã Vỡ', 2, 0, 1, 1, '1', '/manh-ghep-da-vo.X1tTUUBeaw==.html', 'admin', 0, 1, 0, 0, 0, 3, 1, 1394851697, 0, '0-1394851697', 1),
(41, 'Ben-Anh-Em-Se-Khong-Co-Tuong-Lai', 'Bên Anh Em Sẽ Không Có Tương Lai', 17, 0, 1, 1, '1', '/ben-anh-em-se-khong-co-tuong-lai.X1tTVUZaZg==.html', 'admin', 1, 1, 0, 0, 0, 3, 1, 1394851697, 0, '1-1394851697', 3),
(42, 'Cho-Tim-Minh-Ly-Do', 'Cho Tim Mình Lý Do', 5, 0, 1, 1, '1', '/cho-tim-minh-ly-do.X1tQWkdWaw==.html', 'admin', 8, 1, 0, 0, 0, 3, 1, 1394851697, 0, '11-1394851697', 3),
(44, 'Ky-Uc-Con-Dau-Instrumental', 'Ký Ức Còn Đâu (Instrumental)', 29, 11, 2, 3, '1,3', '/ky-uc-con-dau-instrumental.X1tRVEJcbg==.html', 'admin', 18, 1, 320, 0, 4, 3, 1, 1394854542, 0, '14-1394854542', 1),
(45, 'Ky-Uc-Con-Dau-Remix-Instrumental', 'Ký Ức Còn Đâu (Remix Instrumental)', 29, 11, 2, 2, '1', '/ky-uc-con-dau-remix-instrumental.X1tRVEJcbw==.html', 'admin', 59, 1, 320, 0, 4, 3, 1, 1394854592, 0, '23-1394854592', 1),
(46, 'Khoang-trong-de-lai', 'Khoảng trống để lại', 5, 12, 3, 1, '1,10', '/khoang-trong-de-lai.X1tTW0dcbg==.html', 'admin', 109, 1, 320, 0, 4, 3, 1, 1395031361, 0, '91-1395031361', 1),
(48, 'Chuyen-Chang-Co-Don', 'Chuyện Chàng Cô Đơn', 38, 15, 9, 1, '1', '/chuyen-chang-co-don.W1hXWkVc.html', 'admin', 22, 1, 320000, 0, 3, 3, 1, 1395216290, 0, '20-1395216290', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_4category`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_4category` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `cid` mediumint(8) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `nv3_vi_music_4category`
--

INSERT INTO `nv3_vi_music_4category` (`id`, `cid`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_ads`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_ads` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `stt` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `link` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(100) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `nv3_vi_music_ads`
--

INSERT INTO `nv3_vi_music_ads` (`id`, `stt`, `link`, `name`, `url`) VALUES
(3, 2, '/musicvietnam/uploads/music/ads/487922_330691810365272_1505486174_n.jpg', 'xembaomoi', 'http://xembaomoi.com'),
(4, 2, '/musicvietnam/uploads/music/ads/1395281249-liena-300250-7.swf', 'megacode.vn', 'http://megacode.vn/');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_album`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_album` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `tname` varchar(255) NOT NULL DEFAULT '',
  `casi` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `thumb` varchar(255) NOT NULL DEFAULT '',
  `numview` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `upboi` varchar(255) NOT NULL DEFAULT '',
  `describe` mediumtext NOT NULL,
  `active` smallint(2) NOT NULL DEFAULT '0',
  `numsong` int(11) NOT NULL DEFAULT '0',
  `listsong` mediumtext NOT NULL,
  `addtime` int(11) unsigned NOT NULL DEFAULT '0',
  `hit` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `nv3_vi_music_album`
--

INSERT INTO `nv3_vi_music_album` (`id`, `name`, `tname`, `casi`, `thumb`, `numview`, `upboi`, `describe`, `active`, `numsong`, `listsong`, `addtime`, `hit`) VALUES
(1, 'Tim-em', 'Tìm em', 1, '/musicvietnam/uploads/music/thumb/531eb4e54343c.png', 5, 'admin', '<p> <strong><span>Tên thật:</span> Hồ Quang Hiếu</strong></p><p> <strong><span>Ngày sinh:</span> 1986 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Ca sĩ Tự Do</p><p id="_artistBio"> Tốt nghiệp trường đại học Văn hóa nghệ thuật quân đội tại Hà Nội nhưng sau đó lại vào Sài Gòn lập nghiệp. Môi trường âm nhạc sôi động ở nơi đây luôn thu hút những người trẻ như tôi đến thử sức mình.<br  /> <br  /> Vào Sài Gòn, tôi công tác tại nhà văn hóa quận 8 một thời gian. Ban đêm, tôi ”lăn lộn” tại các tụ điểm ca nhạc trong thành phố (Cười). Sau một thời gian dài cố gắng, tôi may mắn cũng có được một thành tích nho nhỏ. Đó là giải nhất cuộc thi Hãy tỏa sáng tổ chức năm ngoái.</p>', 1, 29, '2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,39,40,41,42', 1394791546, '5-1394791546'),
(4, 'Vua-di-vua-khoc', 'Vừa đi vừa khóc', 31, '/musicvietnam/uploads/music/thumb/1394791111517_org.png', 31, 'admin', '<strong><span>Tên thật:</span> Nguyễn Thị Minh Thư<br  /><span>Ngày sinh:</span> 21/09/1990<br  /><span>Thể loại:</span> <a href="http://mp3.zing.vn/the-loai-nghe-si/Viet-Nam/IWZ9Z08I.html">Việt Nam</a>, <a href="http://mp3.zing.vn/the-loai-nghe-si/Nhac-Tru-Tinh/IWZ9Z08B.html">Nhạc Trữ Tình</a></strong><br  /><span>Quốc Gia:</span> Việt Nam<br  /><div class="new-content-block"> <p class="new-content-block-title"> <span>Thông tin chi tiết</span></p> <p> <br  /> Ca sỹ <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=Minh+Th%C6%B0" title="Minh Thư"><strong>Minh Thư</strong></a> tên thật là Nguyễn Thị <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=Minh+Th%C6%B0" title="Minh Thư"><strong>Minh Thư</strong></a> sinh năm 1990 tại thôn Mỹ Thiện , thị trấn Châu Ổ , huyện Bình Sơn , tỉnh Quảng Ngãi. Khi ở Bình Sơn cô theo học ở quê nhà đến năm cuối bậc trung học cô vào T.P Quảng Ngãi học lớp 12 tại trường trung học Trần Quốc Tuấn sau đó vào T.P Hồ Chí Minh học , đã tốt nghiệp đại học Kinh tế T.P Hồ Chí Minh.Thừa hưởng di truyền từ ông Nội, Cha và nhất là người Mẹ nên cô bộc lộ năng khiếu âm nhạc từ lúc nhỏ , từng tham gia vào các hoạt động văn nghệ do trường tổ chức và các phong trào văn nghệ khác. Trong thời gian học tại đại học kinh tế T.P Hồ Chí Minh. <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=Minh+Th%C6%B0" title="Minh Thư"><strong>Minh Thư</strong></a> là thành viên câu lạc bộ Dân ca của trường,liên tiếp đoạt giải có thứ hạng cao trong những cuộc thi tiếng hát dân ca sinh viên kinh tế mở rộng hàng năm, khi học đại học,cô đã học thanh nhạc tại trung tâm thanh nhạc Hoài Nam và Hà Phương Foundation tốt nghiệp loại xuất sắc.giọng ca của cô ngọt ngào truyền cảm dễ đi vào lòng người,nên được nhiều tầng lớp khán giả yêu mến. Ca sỹ <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=Minh+Th%C6%B0" title="Minh Thư"><strong>Minh Thư</strong></a> là một hiện tượng mới đại diện cho lớp thế hệ trẻ kế thừa và phát huy dòng nhạc dân ca trữ tình. Hiện nay cô đang biểu diễn tại các sân khấu và phòng trà ở T.P hồ chí minh,các tỉnh Miền Tây Nam Bộ, và tích cực tham gia vào các hoạt động văn nghệ từ thiện.</p></div>', 1, 1, '22', 1395033252, '31-1395033252'),
(2, 'Ky-Uc-Con-Dau-Single', 'Ký Ức Còn Đâu (Single)', 30, '/musicvietnam/uploads/music/thumb/b42da9895c6a0f1397ebd17d11d9a5bbbbf3d1ef_640_293.jpg', 48, 'admin', 'Lần đầu tiên 2 giọng ca ăn khách nhất hiện nay kết hợp trong 1 sáng tác của nhạc sĩ Lương Duy Thắng.', 1, 3, '45,44,43', 1394854619, '48-1394854619'),
(3, 'Khoang-trong-de-lai', 'Khoảng trống để lại', 5, '/musicvietnam/uploads/music/thumb/531e8204868fd.png', 26, 'admin', '', 1, 1, '46', 1395031289, '26-1395031289'),
(5, 'Anh-nho-em-nguoi-yeu-cu', 'Anh nhớ em người yêu cũ', 2, '/musicvietnam/uploads/music/thumb/1394612566976_org.png', 3, 'admin', '&quot;Anh Nhớ Em Người Yêu Cũ&quot; chính là single đầu tiên Minh Vương gửi đến các bạn trong năm 2014. Ca khúc chính trong single &quot;Anh Nhớ Em Người Yêu Cũ&quot; là một sáng tác mới của Khánh Đơn, đánh dấu sự hợp tác lần đầu tiên của cả hai.', 1, 0, '', 1395033495, '3-1395033495'),
(6, 'Ac-mong', 'Ác mộng', 32, '/musicvietnam/uploads/music/thumb/1394783908275_org.png', 1, 'admin', '', 1, 0, '', 1395033622, '1-1395033622'),
(7, 'Tron-doi-ben-em', 'Trọn đời bên em', 33, '/musicvietnam/uploads/music/thumb/1394089761852.png', 8, 'admin', '', 1, 0, '', 1395034057, '8-1395034057'),
(8, 'Cat-Giau-Ky-Uc', 'Cất Giấu Ký Ức', 34, '/musicvietnam/uploads/music/thumb/1394591844646.png', 2, 'admin', '', 1, 0, '', 1395034143, '2-1395034143'),
(9, 'Em-cua-ngay-hom-qua', 'Em của ngày hôm qua', 3, '/musicvietnam/uploads/music/thumb/1485911_562645727150932_509505901_o.jpg', 8, 'admin', '', 1, 1, '48', 1395034511, '8-1395034511');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_album_hot`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_album_hot` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `albumid` mediumint(8) NOT NULL DEFAULT '0',
  `stt` mediumint(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `nv3_vi_music_album_hot`
--

INSERT INTO `nv3_vi_music_album_hot` (`id`, `albumid`, `stt`) VALUES
(1, 2, 1),
(2, 1, 2),
(3, 0, 3),
(4, 0, 4),
(5, 0, 5),
(6, 0, 6),
(7, 0, 7),
(8, 0, 8),
(9, 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_author`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_author` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) NOT NULL DEFAULT '',
  `tenthat` varchar(255) NOT NULL DEFAULT '',
  `thumb` varchar(255) NOT NULL DEFAULT '',
  `introduction` text NOT NULL,
  `numsong` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `numvideo` mediumint(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `nv3_vi_music_author`
--

INSERT INTO `nv3_vi_music_author` (`id`, `ten`, `tenthat`, `thumb`, `introduction`, `numsong`, `numvideo`) VALUES
(1, 'Phan-Manh-Quynh', 'Phan Mạnh Quỳnh', '/musicvietnam/uploads/music/authorthumb/032b2cc936860b03048302d991c3498f_1386577348.jpg', '<p> <strong><span>Tên thật:</span> Phan Mạnh Quỳnh</strong></p><p> <strong><span>Ngày sinh:</span> 10/01 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Ca sĩ Tự Do</p>Email: pmqstudio@yahoo.com<br  /><br  />Là một nhạc sỹ trẻ, đã và đang cộng tác với những tên tuổi lớn như Ưng Hoàng Phúc, Quang Vinh, Akira Phan, Hồ Quang Hiếu… nhưng với niềm đam mê ca hát, PMQ cũng đang dần tung ra thị trường những sản phẩm có chiều sâu như: “ Bước Qua Thế Giới”, “Giáng Sinh Không Ở Nhà”, “Những Ngày Không Bên Nhau”, và mới đây nhất là Bóng Tối Không Em….<br  />Dự định trong tương lai gần là một album online với 10 ca khúc tâm huyết.', 0, 0),
(2, 'Son-Tung-M-TP', 'Sơn Tùng M-TP', '', '', 1, 0),
(11, 'Luong-Duy-Thang', 'Lương Duy Thắng', '', '', 3, 0),
(4, 'Tien-Cookie', 'Tiên Cookie', '', '', 1, 0),
(5, 'Nguyen-Van-Chung', 'Nguyễn Văn Chung', '', '', 1, 0),
(6, 'Ai-Phuong', 'Ái Phương', '', '', 1, 0),
(7, 'Quoc-Cuong-B-O-M', 'Quốc Cường B.O.M', '', '', 1, 0),
(8, 'Trinh-Thang-Binh', 'Trịnh Thăng Bình', '/musicvietnam/uploads/music/authorthumb/93efec9378b1cc8d0b35c6ff683db47b_1376989156.jpg', '<p> <strong><span>Tên thật:</span> Trịnh Thăng Bình</strong></p><p> <strong><span>Ngày sinh:</span> 30/04 - <span>Quốc gia: </span>Việt Nam</strong></p><p id="_artistBio"> Sinh năm 1988<br  /> SV Cao đẳng sân khấu điện ảnh TP. HCM.<br  /> Cựu thành viên của nhóm A#. Hiện đang hoạt động solo.<br  /> Có khả năng sáng tác, chơi guitar, piano<br  /> Các phim tham gia : &quot;Có lẽ nào ta yêu nhau&quot; , &quot;Blog và Người đẹp&quot; , &quot;Anh em sinh đôi&quot;, &quot;Tam nam vẫn phú&quot;<br  /> Album đã phát hành:<br  /> - <strong>Trịnh Thăng Bình</strong> vol. 1<br  /> - Lời chưa nói Single<br  /> - Summer Love<br  /> - TTB Vol.3</p>', 1, 0),
(9, 'Khac-Viet', 'Khắc Việt', '/musicvietnam/uploads/music/authorthumb/fdec5f5c0b06310830d2c392a14d6b71_1392779490.jpg', '<p> <strong><span>Tên thật:</span> Nguyễn Khắc Việt</strong></p><p> <strong><span>Ngày sinh:</span> 30/08 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <strong><span>Công ty đại diện:</span> Ca sĩ Tự Do</strong></p><p id="_artistBio"> - Nickname: Việt Vui Vẻ (do fanclub dành tặng);<br  /> <br  /> - Đã tốt nghiệp Học viện Âm nhạc Quốc gia Việt Nam, khoa Thanh nhạc vào năm 2005;<br  /> <br  /> - Năm 2009, phát hành album online “Câu chuyện tình yêu”;<br  /> <br  /> - Đầu năm 2010, phát hành single và video clip “Như vậy nhé”;<br  /> <br  /> - Tính đến thời điểm hiện nay đã sáng tác hơn 100 ca khúc, trong đó có một số ca khúc được đông đảo khán giả trẻ yêu thích.<br  /> <br  /> - Sinh ra và lớn lên ở Yên Bái, trong một gia đình không có ai theo nghệ thuật, bố mẹ là công chức; sau khi học xong phổ thông, <strong>Khắc Việt</strong> cùng em ruột của mình thi đỗ Nhạc viện Hà Nội (Học viện Âm nhạc Quốc gia bây giờ) vào năm 2005.<br  /> <br  /> - Tốt nghiệp khoa Thanh nhạc, nhưng <strong>Khắc Việt</strong> lại bén duyên với con đường sáng tác khi cho ra mắt ca khúc đầu tay với tựa đề “Quên” vào năm 2009. Sau khi phát hành một thời gian ngắn, ca khúc “Quên” do chính <strong>Khắc Việt</strong> thể hiện đã trở thành một hit trên mạng vào thời gian đó và liên tục đứng vị trí cao tại các bảng xếp hạng âm nhạc online. Với thành công đó, <strong>Khắc Việt</strong> đã tiếp tục cho ra đời album online &quot;Câu chuyện tình yêu&quot; để chuẩn bị cho con đường ca hát chuyên nghiệp của mình. Đầu năm 2010, single “Như vậy nhé” được phát hành online và nhận được rất nhiều sự ủng hộ của khán giả, đặc biệt là cộng đồng mạng. Với chất giọng nam cao, sáng, đầy nội lực nhưng không kém phần tinh tế, <strong>Khắc Việt</strong> gây ấn tượng với khán giả bằng các ca khúc trữ tình, đậm chất pop-ballad trong thời gian qua. Có thể nói đây là một sở trường mà <strong>Khắc Việt</strong> đã biết khai thác đúng hướng. Không có thế mạnh về ngoại hình như nhiều ca sĩ hiện nay nhưng <strong>Khắc Việt</strong> tự tin với âm nhạc mang dấu ấn riêng của mình sẽ khiến cho khán giả “bắt tai”. Với âm nhạc, <strong>Khắc Việt</strong> đặt ra tiêu chí chú trọng phần nghe hơn là phần nhìn.<br  /> <br  /> - Bên cạnh ca hát thì sáng tác là niềm đam mê của <strong>Khắc Việt</strong> ngay từ khi bước chân vào con đường ca hát. Sở hữu hơn 100 ca khúc tính đến thời điểm bây giờ, cái tên <strong>Khắc Việt</strong> đang được nhiều ca sĩ thị trường tìm đến cộng tác cùng trong các dự án âm nhạc của họ. Hiện tại, <strong>Khắc Việt</strong> đang là sáng tác chính cho một số ca sĩ như Nam Cường, Cao Thái Sơn, Nhật Tinh Anh, Quỳnh Nga, nhóm The Men… Những sáng tác của <strong>Khắc Việt</strong> như: Yêu thương quay về, Bình yên nhé (Cao Thái Sơn); Phải là anh, Đoạn cuối con đường (Nam Cường); Chờ em trong đêm (The Men); Suy nghĩ trong anh (Duy Khoa)… là những bài hát đang nằm trong top hot các ca khúc được nghe nhiều nhất trên một số kênh âm nhạc hiện nay.</p>', 1, 0),
(10, 'Trinh-Dinh-Quang', 'Trịnh Định Quang', '', '', 1, 0),
(12, 'Quoc-Cuong-B-O-M', 'Quốc Cường B.O.M', '', '', 1, 0),
(14, 'na', 'na', '', '', 0, 0),
(15, 'Hoang-Bach', 'Hoàng Bách', '', '', 1, 0),
(16, 'Pham-Hoang-Duy', 'Phạm Hoàng Duy', '', '', 0, 1),
(17, 'TRINH-DINH-QUANG', 'TRỊNH ĐÌNH QUANG', '', '', 0, 1),
(18, 'Tien-Cookie', 'Tiên Cookie', '', '', 0, 1),
(19, 'Dam-Vinh-Hung', 'Đàm Vĩnh Hưng', '', '', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_category`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_category` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `keywords` mediumtext NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `numsong` int(11) unsigned NOT NULL DEFAULT '0',
  `weight` smallint(4) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `nv3_vi_music_category`
--

INSERT INTO `nv3_vi_music_category` (`id`, `title`, `keywords`, `description`, `numsong`, `weight`) VALUES
(1, 'Pop Việt', '', '', 35, 1),
(2, 'Rock Việt', '', '', 4, 2),
(3, 'Rap Việt', '', '', 3, 3),
(5, 'Pop Nhật', '', '', 0, 4),
(6, 'Nhạc Truyền Thống', '', '', 0, 5),
(7, 'Rap &#x002F; Hip Hop', '', '', 0, 6),
(8, 'Nhạc Thiếu Nhi', '', '', 0, 7),
(9, 'Rock', '', '', 0, 8),
(10, 'Nhạc Phim', '', '', 3, 9),
(11, 'Nhạc Dance', '', '', 1, 10),
(12, 'Nhạc Không Lời', '', '', 0, 11),
(13, 'Quốc Gia Khác', '', '', 0, 12),
(14, 'Nhạc Trữ Tình', '', '', 0, 13);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_comment_album`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_comment_album` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `body` text NOT NULL,
  `dt` int(11) unsigned NOT NULL DEFAULT '0',
  `what` varchar(255) NOT NULL DEFAULT '',
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `active` smallint(2) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_comment_song`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_comment_song` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `body` text NOT NULL,
  `dt` int(11) unsigned NOT NULL DEFAULT '0',
  `what` varchar(255) NOT NULL DEFAULT '',
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `active` smallint(2) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `nv3_vi_music_comment_song`
--

INSERT INTO `nv3_vi_music_comment_song` (`id`, `name`, `body`, `dt`, `what`, `userid`, `active`) VALUES
(2, 'admin', 'fuck', 1394852316, '2', 1, 1),
(3, 'admin', ':-/', 1395129509, '2', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_comment_video`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_comment_video` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `body` text NOT NULL,
  `dt` int(11) unsigned NOT NULL DEFAULT '0',
  `what` varchar(255) NOT NULL DEFAULT '',
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `active` smallint(2) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `nv3_vi_music_comment_video`
--

INSERT INTO `nv3_vi_music_comment_video` (`id`, `name`, `body`, `dt`, `what`, `userid`, `active`) VALUES
(1, 'admin', 'video thật tuyệt &gt;:D&lt;', 1395194183, '2', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_country`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `code` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL DEFAULT '0',
  `addtime` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `nv3_vi_music_country`
--

INSERT INTO `nv3_vi_music_country` (`id`, `title`, `code`, `weight`, `addtime`) VALUES
(1, 'Việt Nam', 'VI', 1, 0),
(2, 'Hàn Quốc', 'KR', 2, 1395064910),
(3, 'Âu Mỹ', 'US', 3, 1395064931);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_error`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_error` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `sid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `username` varchar(255) NOT NULL DEFAULT '',
  `body` text NOT NULL,
  `where` varchar(10) NOT NULL DEFAULT '',
  `addtime` int(11) unsigned NOT NULL DEFAULT '0',
  `ip` varchar(100) NOT NULL DEFAULT '',
  `status` smallint(2) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `nv3_vi_music_error`
--

INSERT INTO `nv3_vi_music_error` (`id`, `sid`, `userid`, `username`, `body`, `where`, `addtime`, `ip`, `status`) VALUES
(1, 2, 1, 'admin', 'Ca khúc có chất lượng kém | zxczxcxz', 'song', 1394852256, '127.0.0.1', 1),
(2, 2, 2, 'chuayeuai', 'Ca khúc có chất lượng kém | fuck you', 'song', 1395200039, '117.1.177.87', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_ftp`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_ftp` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `host` varchar(30) NOT NULL DEFAULT '',
  `user` varchar(30) NOT NULL DEFAULT '',
  `pass` varchar(30) NOT NULL DEFAULT '',
  `fulladdress` varchar(255) NOT NULL DEFAULT '',
  `subpart` varchar(255) NOT NULL DEFAULT '',
  `ftppart` varchar(255) NOT NULL DEFAULT '',
  `active` smallint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `host` (`host`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `nv3_vi_music_ftp`
--

INSERT INTO `nv3_vi_music_ftp` (`id`, `host`, `user`, `pass`, `fulladdress`, `subpart`, `ftppart`, `active`) VALUES
(3, 'nhacso', 'admin', '123', 'http://nhacso.net/', 'nghe-nhac', '/', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_gift`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_gift` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `who_send` varchar(255) NOT NULL DEFAULT '',
  `who_receive` varchar(255) NOT NULL DEFAULT '',
  `songid` mediumint(8) NOT NULL DEFAULT '0',
  `time` int(11) unsigned NOT NULL DEFAULT '0',
  `body` text NOT NULL,
  `active` smallint(2) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `nv3_vi_music_gift`
--

INSERT INTO `nv3_vi_music_gift` (`id`, `who_send`, `who_receive`, `songid`, `time`, `body`, `active`) VALUES
(1, 'admin', 'chuayeuai', 2, 1395132700, 'Tặng người yêu của tôi', 1),
(2, 'admin', 'megacode', 46, 1395134335, 'Tặng người yêu của tôi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_lyric`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_lyric` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `songid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `user` varchar(255) NOT NULL DEFAULT '',
  `body` text NOT NULL,
  `active` smallint(2) unsigned NOT NULL DEFAULT '0',
  `dt` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `nv3_vi_music_lyric`
--

INSERT INTO `nv3_vi_music_lyric` (`id`, `songid`, `user`, `body`, `active`, `dt`) VALUES
(1, 2, 'admin', 'Eh eh eh...<br />Em đang nơi nào...<br />Can you feel me.<br />Can you feel me.<br />Eh eh eh<br />M-tp<br />Liệu rằng chia tay trong em có quên được câu ca.<br />Tình yêu khi xưa em trao cho anh đâu nào phôi pha.<br />Đừng lừa dối con tim anh,em sẽ không buông tay anh được đâu mà.(Em không thể bước đi)<br />Gạt nước mắt yếu đuối đó cứ quay lại nơi anh.<br />Em biết rằng cơn mưa qua đâu có che lấp được nụ cười đau thương kia.<br />Nước mắt đó vẫn rơi vì em..Oh baby..No baby..<br />Đừng nhìn anh nữa,đôi mắt ngày xưa giờ ở đâu???<br />Em còn là em?<br />Em đã khác rồi.<br />Em muốn quay lưng quên hết đi(Thật vậy sao?)<br />Tình yêu trong em giờ toàn giả dối.<br />Anh không muốn vùi mình trong mơ.<br />Anh không muốn đi tìm giấc mơ ngày hôm nao.<br />Đừng vội vàng em hãy là em của ngày hôm qua.<br />Uhhhhhhh..<br />Xin hãy là em của ngày hôm qua.<br />Uhhhhhhh..<br />Đừng bỏ mặc anh một mình nơi đây.<br />Uhhhhhhh..<br />Dừng lại và xoá nhẹ đi kí ức.', 1, 1394796104),
(2, 4, 'admin', 'Verse:<br />Hình như anh có điều muốn nói<br />Cứ ngập ngừng rồi thôi<br />Và có lẽ anh không biết rằng em cũng đang chờ đợi<br />Ở cạnh bên anh bình yên lắm<br />Anh hiền lành ấm áp<br />Cứ tiếp tục ngại ngùng thì ai sẽ là người đầu tiên nói ra<br />Chorus1<br />Hay là mình cứ bất chấp hết yêu nhau đi<br />Hay để chắc chắn anh cứ lắng nghe tim muốn gì rồi nói cho em nghe<br />một câu thôi<br />1, 2 ,3, 5 anh có đánh rơi nhịp nào không?<br />Nếu câu trả lời là có anh hãy đến ôm em ngay đi<br />Em đã chờ đợi từ anh giây phút ấy cũng lâu lắm rồi<br />Và dẫu cho mai sau có ra sao<br />Thì em vẫn sẽ không hói tiếc vì ngày hôm nay đã nói yêu<br />Chorus2<br />Cho dù ta đã mất rất rất lâu để yêu nhau<br />Nhưng chẳng còn gì ý nghĩa nếu như chúng ta không hiểu nhau,<br />Và muốn quan tâm nhau, phải không anh?<br />Và em xin hứa sẽ mãi mãi yêu một mình anh<br />Cho dù ngày sau dẫu có nắng hay mưa trên đầu<br />Em chẳng ngại điều gì đâu chỉ cần chúng ta che chở nhau<br />Có anh bên em là em yên lòng<br />Kể từ hôm nay em sẽ chính thức được gọi anh: Anh yêu.', 1, 1394852385),
(3, 5, 'admin', 'Biết đâu bất ngờ đôi ta chợt rời xa nhau,<br />Ai còn đứng dưới mưa ngân nga câu ru tình..<br />Và môi hôn rất ướt,dư âm giấu trong mưa.<br />Cơn mưa kéo dài…<br />Sẽ là dối lòng khi em chẳng ngại âu lo,<br />Lo em sẽ mất anh trong lúc yêu thương nhất.<br />Vì tình yêu mong manh,tay em quá yếu mềm..<br />Người yêu ơi,anh có biết?<br />Chorus:<br />Em yêu anh hơn thế,nhiều hơn lời em vẫn nói.<br />Để bên anh em đánh đổi tất cả bình yên<br />Đêm buông xuôi vì cô đơn,còn riêng em cứ ngẩn ngơ<br />Có khi nào ta xa rời…<br />Anh đưa em theo với, cầm tay em và đưa lối,<br />Đến nơi đâu em có thể bên anh trọn đời,<br />Nơi thương yêu không phôi phai, được bên nhau mỗi sớm mai.<br />Quá xa xôi không, anh ơi<br />Nơi thương yêu không phôi phai, được bên nhau mỗi sớm mai.<br />Biết không anh ,em yêu anh...', 1, 1394852546),
(4, 7, 'admin', 'Anh cứ ngỡ rằng, những niềm vui là mãi mãi<br />Anh đã hoài ước bên em từng giây phút.<br />Nhưng tiếc cho anh chỉ một mình anh nghĩ thế<br />Đó chỉ là những yêu thương riêng mình anh mơ mộng<br />Vì sao em không nói với anh, rồi em cứ cất bước ra đi<br />Giữ em lại chẳng có nghĩa chi, trái tim em chẳng thuộc về anh<br />Và anh cũng chẳng trách câu gì, vì anh chỉ cần em thấy vui<br />Anh sẽ cười chờ em quay đi, tuy lòng anh từng giọt nước mắt ngược vào tim.<br />Nhưng tiếc cho anh chỉ một mình lòng anh nghĩ thế<br />Đó chỉ là những nỗi nhớ trong anh mà thôi<br />Vì sao em không nói với anh, rằng từ lâu hết yêu anh rồi<br />Khó khăn gì khi buông cánh tay, khó khăn gì một câu em đi<br />Đưunfg hỏi anh đang suy nghĩ gì, đừng lo lắng rằng anh sẽ buồn<br />Anh chỉ buồn vì em không vui, anh chỉ buồn vì em đau thôi<br />Vì sao em không nói với anh, rồi em cứ cất bước ra đi<br />Giữ em lại chẳng có nghĩa chi, trái tim em chẳng thuộc về anh<br />Và anh cũng chẳng trách câu gì, vì anh chỉ cần em thấy vui<br />Anh sẽ cười chờ em quay đi, tuy lòng anh từng giọt nước mắt ngược vào tim.', 1, 1394852698),
(5, 8, 'admin', 'Có những khi giấc mơ trôi theo từng áng mây tìm về quá khứ<br />Anh nhớ một ngày một ngày có ai bên cạnh<br />Có những khi nỗi đau trôi theo từng giấc chiêm bao<br />Để ngày mới đến, người đã ở lại trong đôi mắt<br />Có khi giận hờn, tiếng yêu chẳng thành câu, nhưng trái tim em vẫn bồi hồi<br />Ngỡ như thật gần, ngỡ như là mãi mãi ,<br />Quay lưng để rồi một ngày ta đánh mất...<br /><br />Đã bao nhiêu ngày tháng trôi, nắng mưa vẫn còn ở lại<br />Yêu nhau một thời, xa nhau một đời<br />Giấc mơ sẽ tàn khắp nơi, để ta xây lại từ cát bụi<br />Tìm mãi nụ cười trong mắt thôi...<br /><br />Riêng em sẽ quên, em sẽ tin, em đã mất anh giữa những hoài nghi<br />Đừng khiến tim em thêm run sợ<br />Vâng anh cứ đi , anh cứ vui, anh cứ theo những giấc mơ hoang đường<br />Đừng níu tay em người hõi ...<br /><br />Đã bao nhiêu ngày tháng trôi, nắng mưa vẫn còn ở lại<br />Yêu nhau một thời, xa nhau một đời<br />Giấc mơ sẽ tàn khắp nơi, để ta xây lại từ cát bụi<br />Tìm mãi nụ cười trong mắt thôi ..', 1, 1394852807),
(6, 9, 'admin', 'Có chút bối rối... chạm tay anh rồi...<br />Vì anh đang... mơ giấc dịu dàng...<br />Có chút tan vỡ... chạm môi anh rồi...<br />Vì em yêu... chỉ yêu mùa ghé thôi...<br /><br />Có chút thương nhớ... làn môi nhẹ nhàng..<br />Khi em... yên say trong giấc...<br />Có chút yêu dấu... chỉ là mơ... mộng thôi...<br />Vì anh... luôn mong được có em...<br /><br />Người nói yêu anh đi... người nói thương anh đi...<br />Để cho con tim này đừng ngóng trông hao gầy...<br />Hãy đến bên anh đi... để cho tình trọn vẹn chúng ta...<br />Vì nơi con tim này luôn có... tình yêu giấu kín cùng thương nhớ cho em...<br /><br />Người nói yêu anh đi... người nói thương anh đi...<br />Để cho con tim này đừng ngóng trông hao gầy...<br />Hãy đến bên anh đi... để cho tình trọn vẹn chúng ta...<br />Vì nơi con tim này luôn có... tình yêu dấu kín cùng thương nhớ cho em...<br />-------------- -------------------- -------------------- -------------------- -------------------- ---------<br /><br />C� chút bối rối... chạm tay anh rồi...<br />Vì anh đang... mơ giấc dịu dàng...<br />Có chút tan vỡ... chạm môi anh rồi...<br />Vì em yêu... chỉ yêu mùa ghé thôi...<br /><br />Có chút thương nhớ... làn môi nhẹ nhàng..<br />Khi em... yên say trong giấc...<br />Có chút yêu dấu... chỉ là mơ... mộng thôi...<br />Vì anh... luôn mong được có em...<br /><br />Người nói yêu anh đi... người nói thương anh đi...<br />Để cho con tim này đừng ngóng trông hao gầy...<br />Hãy đến bên anh đi... để cho tình trọn vẹn chúng ta...<br />Vì nơi con tim này luôn có... tình yêu giấu kín cùng thương nhớ cho em...<br /><br />Người nói yêu anh đi... người nói thương anh đi...<br />Để cho con tim này đừng ngóng trông hao gầy...<br />Hãy đến bên anh đi... để cho tình trọn vẹn chúng ta...<br />Vì nơi con tim này luôn có... tình yêu dấu kín cùng thương nhớ cho em...<br />-------------- -------------------- -------------------- -------------------- -------------------- ------<br /><br />C� chút bối rối... có chút tan vỡ...<br />Có chút thương nhớ tình ai...<br />Người hỡi đến bên anh này... nói yêu mình anh thôi...<br />Để cho lòng anh... thoả nhớ mong ...', 1, 1394852954),
(7, 10, 'admin', 'Bao ánh đèn, bao phố phường, dòng người cứ lướt ngang qua đây<br />Góc nến này, ánh nến này, nơi quán vắng lúc xưa hẹn hò<br />Câu chuyện yêu đong đưa, như sợi dây lưa thưa, là kết thúc giữa những hạt mưa<br />Làm sao anh có thể giải thích duyên số này, nơi nào anh đi cũng thấy em<br /><br />Đành nhìn em đi qua nơi anh theo làn gió bay,<br />Đành nhìn em trôi xa mộng mơ như là áng mây<br />Một lần thôi trong anh muốn nói, giá như là vờ yêu thôi,<br />Giá như là người ngang qua chưa từng quen<br />Nhạc vụn vỡ bao nhiêu hồi ức êm đềm có nhau,<br />Dòng thời gian trôi đi mà vẫn in hằn vết đau<br />Vì sao em yêu thêm lần nữa, giã từ lời hẹn khi xưa,<br />Bước về dường dài cô đơn riêng mình anh, nhớ về em.', 1, 1394853045),
(8, 11, 'admin', 'Hãy cứ vỡ oà khi em không còn yêu anh, nữa đâu<br />Sợ lắm nỗi sầu khi bao cô đơn về quanh đây<br />Em yêu anh, sao quên được mau<br />Khi xưa yêu nhau trong lo âu<br />Giờ chợt về trong cơn đau<br />Sao em nỡ vội quên đi mau cơn đau này, ai hiểu thấu<br /><br />Anh chẳng tin vào ngày mai, hay là tương lai<br />Chỉ biết mỗi khi bên nhau, hai ta luôn nồng thắm, môi kề môi<br />Xin cho anh chút cơ hội<br />Yêu là sai, yêu là mê, chẳng phải trò chơi<br />Mà những tính toán hơn thua tranh đua nhau vật chất hay giàu sang<br />Ai yêu ai hơn ai ?<br /><br /><br />Dù trong tim đã trải qua bao thương đau<br />Và rồi lại cố tìm nhau<br />Trong cơn mộng này, vẫn chờ em trong phút giây, mà nào đâu thấy<br /><br />Anh chẳng tin vào ngày mai, hay là tương lai<br />Chỉ biết mỗi khi bên nhau, hai ta luôn nồng thắm, môi kề môi<br />Xin cho anh chút cơ hội<br />Yêu là sai, yêu là mê, chẳng phải trò chơi<br />Mà những tính toán hơn thua tranh đua nhau vật chất hay giàu sang<br />Ai yêu ai hơn ai ?', 1, 1394853122),
(9, 12, 'admin', 'Em! hết yêu anh từ bao giờ ?<br />Tại sao em không nói ra ?<br />Em! hết yêu anh từ lúc nào ?<br />Vì sao em không nói với anh ?<br />Em mệt không khi cứ phải giả vờ<br />Giả vờ như ta yêu nhau nhiều lắm<br />Nhưng làm sao<br />Làm sao có thể giấu được<br />Lạnh nhạt từ trong đôi mắt nhau<br />Vậy thì anh sẽ cho em ra đi, ra đi về nơi em chọn<br />Đúng những gì mà em mong muốn<br />Vì mình cũng đã chia tay bao lần, xong mình lại quay lại<br />Nên hai ta tình yêu cũng nhạt phai<br />Đừng nên cố gắng bên nhau<br />Yêu nhau để rồi mình lại đau khổ<br />Hay em là mình chia tay nhé<br />Dù một trong hai ta đến hôm nay có thể còn yêu nhau nhiều<br />Nhưng ta đừng làm khổ nhau<br />Đừng cố yêu', 1, 1394853187),
(10, 13, 'admin', 'Một ngày vắng yêu thương nỗi nhớ quay cuồng trong đêm<br />Nhiều ngày vắng hỡi em nỗi nhớ ngày càng dâng lên<br />Tóc rối khi không thấy người<br />Đẫm nát lang thang cuối trời<br />Ngày tàn anh chơi vơi với cuộc đời<br /><br />Giờ thì đã chia li ta mãi không còn bên nhau<br />Và người đó ra đi không biết phải tìm nơi đâu<br />Ấy thế không có nghĩa là<br />Dứt khoát ta phải cách xa<br />Cuộc tình chưa thể nào chấm dứt, không thể như thế<br />ĐK:<br />Một ngày nào đó với anh không còn buồn nữa đâu<br />Bước qua nỗi buồn sẽ tan vào trong hố sâu<br />Rồi mênh mang thức giấc<br />Chỉ là chiêm bao thôi<br />Vội mặc chiếc áo bước mau nhưng tìm em chốn nao<br />Bước trong ánh đèn, trước mắt toàn là bóng đêm<br />Dòng người vẫn đan xen, một mình tôi bơ vơ<br />Lạc lối giữa bao con người...mình tôi', 1, 1394853264),
(11, 43, 'admin', 'Khi cơn mưa vụt qua là khi anh nhận ra rằng đôi ta đã chia xa<br />Giờ đây riêng anh mà thôi lặng im nghe đêm dần trôi<br />Những ký ức ùa về nước mắt rơi.<br />Còn đâu yêu thương ngày xưa mình bên nhau trong chiều mưa<br />Người ơi em có nhớ không (có hay không)<br />Giờ em ra đi về nơi ấy tìm trong cô đơn hoài không thấy<br />Bao nhiêu buồn vui khi có nhau.<br /><br />Còn đâu nữa vì người bước đi về nơi rất xa<br />Tình yêu phai nhoà một mình anh ngồi ôm giấc mơ<br />Chìm trong bóng đêm với nỗi xót xa.<br />Tại vì sao người không trở lại để nói tiếng yêu một lần sau cuối<br />Những khúc hát bên em, những nỗi nhớ đêm đêm<br />Giờ riêng mình anh gìn giữ trong tim, một mình anh.', 1, 1394854446),
(12, 44, 'admin', 'Khi cơn mưa vụt qua là khi anh nhận ra rằng đôi ta đã chia xa<br />Giờ đây riêng anh mà thôi lặng im nghe đêm dần trôi<br />Những ký ức ùa về nước mắt rơi.<br />Còn đâu yêu thương ngày xưa mình bên nhau trong chiều mưa<br />Người ơi em có nhớ không (có hay không)<br />Giờ em ra đi về nơi ấy tìm trong cô đơn hoài không thấy<br />Bao nhiêu buồn vui khi có nhau.<br /><br />Còn đâu nữa vì người bước đi về nơi rất xa<br />Tình yêu phai nhoà một mình anh ngồi ôm giấc mơ<br />Chìm trong bóng đêm với nỗi xót xa.<br />Tại vì sao người không trở lại để nói tiếng yêu một lần sau cuối<br />Những khúc hát bên em, những nỗi nhớ đêm đêm<br />Giờ riêng mình anh gìn giữ trong tim, một mình anh.', 1, 1394854542),
(13, 45, 'admin', 'Khi cơn mưa vụt qua là khi anh nhận ra rằng đôi ta đã chia xa<br />Giờ đây riêng anh mà thôi lặng im nghe đêm dần trôi<br />Những ký ức ùa về nước mắt rơi.<br />Còn đâu yêu thương ngày xưa mình bên nhau trong chiều mưa<br />Người ơi em có nhớ không (có hay không)<br />Giờ em ra đi về nơi ấy tìm trong cô đơn hoài không thấy<br />Bao nhiêu buồn vui khi có nhau.<br /><br />Còn đâu nữa vì người bước đi về nơi rất xa<br />Tình yêu phai nhoà một mình anh ngồi ôm giấc mơ<br />Chìm trong bóng đêm với nỗi xót xa.<br />Tại vì sao người không trở lại để nói tiếng yêu một lần sau cuối<br />Những khúc hát bên em, những nỗi nhớ đêm đêm<br />Giờ riêng mình anh gìn giữ trong tim, một mình anh.', 1, 1394854592),
(14, 46, 'admin', 'Bao ánh đèn, bao phố phường, dòng người cứ lướt ngang qua đây<br />Góc nến này, ánh nến này, nơi quán vắng lúc xưa hẹn hò<br />Câu chuyện yêu đong đưa, như sợi dây lưa thưa, là kết thúc giữa những hạt mưa<br />Làm sao anh có thể giải thích duyên số này, nơi nào anh đi cũng thấy em<br /><br />Đành nhìn em đi qua nơi anh theo làn gió bay,<br />Đành nhìn em trôi xa mộng mơ như là áng mây<br />Một lần thôi trong anh muốn nói, giá như là vờ yêu thôi,<br />Giá như là người ngang qua chưa từng quen<br />Nhạc vụn vỡ bao nhiêu hồi ức êm đềm có nhau,<br />Dòng thời gian trôi đi mà vẫn in hằn vết đau<br />Vì sao em yêu thêm lần nữa, giã từ lời hẹn khi xưa,<br />Bước về dường dài cô đơn riêng mình anh, nhớ về em.', 1, 1395031361),
(16, 48, 'admin', 'Bao nhiêu ngày qua tình yêu sao còn xa hỡi người ?.<br />Cô đơn mình ta chờ mong một ngày kia em đến.<br />Khắp nhân gian tiếng ca chan hoà.<br />Dù nghe chuyện tôi rất buồn.<br />Hứa đi em sẽ không hững hờ chuyện tình tôi.<br /><br />Chuyện một chàng cô đơn mãi tìm cuộc tình xa xôi quá.<br />Để biển sóng cuốn trôi đi tháng năm tuổi xanh.<br />Vì thật lòng anh chỉ có một chuyện tình chưa dám nói.<br />Nào hãy hứa đi em sẽ không hững hờ.<br /><br />Em ơi lặng nghe mùa xuân đang về đây rất gần.<br />Xuân trong lòng ta dịu dàng con tim lên tiếng.<br />Khắp nhân gian tiếng ca chan hoà.<br />Dù nghe chuyện tôi rất buồn.<br />Hứa đi em sẽ không hững hờ chuyện tình tôi.<br /><br />Chuyện một chàng…không hững hờ.<br /><br />Này người yêu ơi ! khi cô đơn anh chỉ kêu tên người.<br />Dù mai mưa nắng, dù ai phôi pha tôi vẫn yêu...', 1, 1395216290);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_main_album`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_main_album` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `albumid` mediumint(8) NOT NULL DEFAULT '0',
  `order` smallint(4) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `albumid` (`albumid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `nv3_vi_music_main_album`
--

INSERT INTO `nv3_vi_music_main_album` (`id`, `albumid`, `order`) VALUES
(1, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_main_category`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_main_category` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `cid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `order` smallint(4) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cid` (`cid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `nv3_vi_music_main_category`
--

INSERT INTO `nv3_vi_music_main_category` (`id`, `cid`, `order`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(11, 11, 11),
(12, 12, 12),
(13, 13, 13),
(14, 14, 14);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_playlist`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_playlist` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `username` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `keyname` varchar(255) NOT NULL DEFAULT '',
  `singer` varchar(255) NOT NULL DEFAULT 'ns',
  `message` mediumtext NOT NULL,
  `songdata` mediumtext NOT NULL,
  `time` int(11) unsigned NOT NULL DEFAULT '0',
  `view` int(11) unsigned NOT NULL DEFAULT '0',
  `active` smallint(2) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `nv3_vi_music_playlist`
--

INSERT INTO `nv3_vi_music_playlist` (`id`, `userid`, `username`, `name`, `keyname`, `singer`, `message`, `songdata`, `time`, `view`, `active`) VALUES
(1, 2, 'chuayeuai', 'Hồ quang hiếu', 'Ho-quang-hieu', 'Hồ quang hiếu', 'undefined', '45,43', 1395039891, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_setting`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_setting` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(50) NOT NULL DEFAULT '',
  `value` bigint(20) NOT NULL DEFAULT '0',
  `char` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `nv3_vi_music_setting`
--

INSERT INTO `nv3_vi_music_setting` (`id`, `key`, `value`, `char`) VALUES
(1, 'who_comment', 0, ''),
(2, 'auto_comment', 1, ''),
(3, 'root_contain', 0, 'b03496787c3d934ad67e2295cee01407'),
(4, 'who_lyric', 0, ''),
(5, 'auto_lyric', 1, ''),
(6, 'who_gift', 0, ''),
(7, 'auto_gift', 1, ''),
(8, 'auto_album', 1, ''),
(9, 'who_download', 0, ''),
(10, 'upload_max', 10, ''),
(11, 'who_upload', 0, ''),
(12, 'auto_upload', 1, ''),
(13, 'default_server', 1, ''),
(14, 'playlist_max', 2, ''),
(15, 'del_cache_time_out', 21600, ''),
(16, 'version', 0, '3.3.01'),
(17, 'revision', 284, ''),
(18, 'num_blocktab', 10, ''),
(19, 'description', 0, 'The Professional Module Music For Vinagon- tuan_hm90@yahoo.com'),
(20, 'type_main', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_singer`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_singer` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ten` varchar(100) NOT NULL DEFAULT '',
  `tenthat` varchar(100) NOT NULL DEFAULT '',
  `thumb` varchar(255) NOT NULL DEFAULT '',
  `introduction` text NOT NULL,
  `numsong` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `numalbum` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `numvideo` mediumint(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=44 ;

--
-- Dumping data for table `nv3_vi_music_singer`
--

INSERT INTO `nv3_vi_music_singer` (`id`, `ten`, `tenthat`, `thumb`, `introduction`, `numsong`, `numalbum`, `numvideo`) VALUES
(1, 'Ho-Quang-Hieu', 'Hồ Quang Hiếu', '/musicvietnam/uploads/music/singerthumb/1b03ea82b35e244e353228d6417cd53c_1380765906.jpg', '<p> <strong><span>Tên thật:</span> Hồ Quang Hiếu</strong></p><p> <strong><span>Ngày sinh:</span> 1986 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Ca sĩ Tự Do</p><p id="_artistBio"> Tốt nghiệp trường đại học Văn hóa nghệ thuật quân đội tại Hà Nội nhưng sau đó lại vào Sài Gòn lập nghiệp. Môi trường âm nhạc sôi động ở nơi đây luôn thu hút những người trẻ như tôi đến thử sức mình.<br  /> <br  /> Vào Sài Gòn, tôi công tác tại nhà văn hóa quận 8 một thời gian. Ban đêm, tôi ”lăn lộn” tại các tụ điểm ca nhạc trong thành phố (Cười). Sau một thời gian dài cố gắng, tôi may mắn cũng có được một thành tích nho nhỏ. Đó là giải nhất cuộc thi Hãy tỏa sáng tổ chức năm ngoái.</p>', 1, 1, 1),
(2, 'Minh-Vuong-M4U', 'Minh Vương M4U', '/musicvietnam/uploads/music/singerthumb/e2358dc9ba8b5b5e9bc0476dea165e9d_1373258860.jpg', '<p> <strong><span>Tên thật:</span> Trần Trương Minh Vương</strong></p><p> <strong><span>Ngày sinh:</span> 21/12 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <strong><span>Công ty đại diện:</span> Ca sĩ Tự Do</strong></p>Trưởng nhóm M4U - Một Boys Band đang được khán giả trẻ yêu thích<br  />Hiện Minh Vương đang là sinh viên Cao Đẳng Nghệ Thuật Hà Nội khoa Guitar cổ điển. Người dàn dựng phối bè và mixer chuyên nghiệp cho 8X Studio<br  /><br  />Ít nói, giản dị, dễ gần, lãng mạn, yêu âm nhạc, đam mê ca hát...<br  />Thành tích:<br  />- Đồng sáng tác Hát Cho Màn Đêm (BHV05),<br  />- Giải Bài Hát Ấn Tượng và giải Bài Hát của tháng &quot;Giấc mơ bình yên&quot; (BHV12/07).<br  /><br  />Ngoài ra Vương đã sáng tác rất nhiều ca khúc hay như Nhớ Em, Nỗi Nhớ Mang Tên Em, Vì Sao Cuối Trời, Giấc Mơ Bình Yên... và thể hiện một số bài hát của tác giả khác như: Nỗi Đau Xót Xa, Ước, Đi Qua Bóng Tối...<br  />Sản phẩm: Mini Album Nỗi Nhớ Mang Tên Em (2011)', 3, 1, 0),
(3, 'Son-Tung-M', 'Sơn Tùng M', '/musicvietnam/uploads/music/singerthumb/808b957cc2881147b5ece9c430ad0877_1390188872.jpg', '<div class="new-detail-content" id="_contentBody"> <div class="se-lected" id="_profile"> <div class="new-content-block"> <ul class="singer-info"> <li> <strong><span>Tên thật:</span> Nguyễn Thanh Tùng</strong></li> <li> <strong><span>Ngày sinh:</span> 05/07/1994</strong></li> <li> <strong><span>Thể loại:</span> <a href="http://mp3.zing.vn/the-loai-nghe-si/Viet-Nam/IWZ9Z08I.html">Việt Nam</a>, <a href="http://mp3.zing.vn/the-loai-nghe-si/Rap-Viet/IWZ9Z089.html">Rap Việt</a></strong></li> <li> <strong><span>Quốc Gia:</span> Việt Nam</strong></li> </ul> </div> <div class="new-content-block"> <p class="new-content-block-title"> <span>Thông tin chi tiết</span></p> <p> M-TP tên thật là Nguyễn Thanh Tùng. Cậu thanh niên sinh năm 1994 ở Thái Bình sớm bị hip hop hớp hồn giống như bao bạn bè đồng trang lứa. Và với niềm đam mê này, M-TP quyết tâm khăn gói tới Hà Nội học hỏi thêm về hip hop. Hiện tại, M-TP vẫn đang học văn hóa và hoạt động underground cùng các rapper đàn anh tên tuổi như LK, Jansaker...<br  /> <br  /> Sau khi tốt nghiệp cấp 3, anh chàng dự định sẽ đầu quân làm học viên tại Học viện M4Me để rèn rũa khả năng ca hát, sáng tác... trước khi chính thức theo đuổi con đường âm nhạc.<br  /> <br  /> Ngoài đam mê ca hát, M-TP còn có khả năng sáng tác, chơi piano và nhảy cực &quot;đỉnh&quot;. Với thế mạnh này, anh chàng không ngừng cố gắng học tập các bậc đàn anh đàn chị và đã có trong tay một hành trang khá &quot;khủng&quot; những sáng tác của riêng mình.<br  /> <br  /> Nổi bật nhất là Cơn mưa ngang qua. Dù mới xuất hiện từ tháng 8/2011, nhưng chỉ sau hai tháng, đã có hơn 1.7 triệu lượt nghe - con số mà những ca sĩ kỳ cựu như Đàm Vĩnh Hưng, Hồ Ngọc Hà... cũng phải mơ ước.<br  /> <br  /> M-TP chia sẻ: &quot;Em rất bất ngờ khi thấy lượng view bài hát này cứ tăng dần đều mỗi ngày. Thực sự khi sáng tác rồi thu âm, em có kỳ vọng nhưng không dám nghĩ nó sẽ vượt qua con số 1 triệu lượt nghe như thế này. Thế nên tới bây giờ, bạn bè vẫn trêu em là &quot;ăn rùa&quot;, cứ vu vơ upload lên MP3 mà cuối cùng lại thành... nhạc hot&quot;.<br  /> <br  /> Năm 2012, với tổng điểm 25,5đ, M-TP trở thành thủ khoa Nhạc viện TP.HCM. Cậu chia sẻ rằng &quot;chia sẻ cảm xúc: &quot;Mặc dù khá tự tin sau khi kết thúc buổi thi nhưng mình vẫn không khỏi ngạc nhiên và hạnh phúc khi biết được kết quả thi. Đây thực sự là một món quà vô cùng ý nghĩa để bù đắp cho những nỗ lực của mình trong suốt thời gian ôn luyện vừa qua&quot;<br  /> <br  /> Để lại nhiều ấn tượng trong lòng khán giả khi M-TP trình diễn thành công ca khúc Cơn Mưa Ngang Qua tại Bài Hát Yêu Thích tháng 10/2012 và tiếp tục nhận giải thưởng hát hát yêu thích của tháng trong chương trình là động lực rất lớn cho M-TP tiếp tục phấn đấu trong con đường âm nhạc chuyên nghiệp. Sau Bài Hát Yêu Thích, M-TP còn được mời tham gia biểu diễn trong đêm công bố kết quả Top 9 Vietnam Idol 2012.<br  /> <br  /> Thời gian sắp tới, song song với việc học, M-TP sẽ tiếp tục cho ra mắt các sản phẩm âm nhạc của mình và hy vọng sẽ tiếp tục gặt hái được nhiều thành công như Cơn Mưa Ngang Qua đã từng làm được.<br  /> <br  /> Trang cá nhân của M-TP: https://www.facebook.com/MTP.Fan</p> </div> </div></div>', 1, 1, 0),
(4, 'Bich-Phuong', 'Bích Phương', '/musicvietnam/uploads/music/singerthumb/2d18d7a77341a041945b542400cf9009_1383669082.jpg', '<p> <strong><span>Tên thật:</span> Bùi Thị Bích Phương</strong></p><p> <strong><span>Ngày sinh:</span> 30/09 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <strong><span>Công ty đại diện:</span> Ca sĩ Tự Do</strong></p>Sinh viên năm 2, khoa Thanh nhạc, trường Cao đẳng Văn hóa Nghệ thuật và Du lịch Hạ Long<br  />Thể loại nhạc yêu thích: pop ballad<br  />Thần tượng: Christina Aguilera<br  />Thành tích tại các cuộc thi âm nhạc trước đây:<br  />TOP 40 – Vietnam Idol 2008<br  />Chưa từng tham gia các hoạt động nghệ thuật nào trước khi tham gia Vietnam Idol 2010.<br  /><br  />Đến từ vùng đất mỏ, trước cuộc thi Việt Nam Idol, <strong>Bích Phương</strong> là cô gái yêu ca hát, nhưng khá rụt rè trên sân khấu. Khi quyết định đăng kí thử giọng tại Vietnam Idol. Phương tâm sự: “Tôi là một người có cá tính khá hướng nội. Đến với Vietnam Idol 2010, tôi đã có cơ hội để chiến thắng bản thân, trở thành một người năng động, hòa đồng và tự tin hơn rất nhiều. Dù đây chỉ là cuộc thi âm nhạc, nhưng tôi phải cảm ơn Vietnam Idol đã giúp tôi trưởng thành sống tích cực và tự tin hơn rất nhiều.”<br  />Trải qua một hành trình dài cùng với Vietnam Idol, Phương chia sẻ: “Với tôi, Thấn tượng Âm nhạc là cuộc thi khác rất nhiều so với những cuộc thi khác. Ở mỗi vòng thi tôi đều nhận được rất nhiều sự quan tâm, những lời nhận xét khách quan, chân tình từ nhiều phía, từ ban giám khảo cũng như khán giả. Điều này khiến tôi trưởng thành lên rất nhiều.<br  />Tôi nhận rõ những điểm mạnh, điểm yếu của mình từ giọng hát đến phong cách biểu diễn trên sân khấu và luôn ghi nhớ điều này để cố gắng tiến bộ qua từng vòng thi. Tính quyết liệt của cuộc thi khiến tôi vừa lo lắng, hồi hộp vừa cảm động vì tình yêu khán giả đã dành cho mình. Những tin nhắn bình chọn của mọi người chính là tiêu chí để tôi đánh giá bản thân, cũng là nguồn động viên rất lớn với tôi. Tôi sẽ cố gắng hết sức mình vì tình cảm đó!”', 3, 0, 0),
(5, 'The-Men', 'The Men', '/musicvietnam/uploads/music/singerthumb/ad7bc863acc50ad3b747c51c2f85b431_1373259706.jpg', '<strong>Tên thật: <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men">The Men</a><br  />Ngày sinh: 2009 - Quốc gia: Việt Nam<br  />Công ty đại diện: Ca sĩ Tự Do</strong><br  /><br  /><a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> Chỉ với hai thành viên, <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> cũng có thể gọi là nhóm nhạc với đôi song ca nam. Mỗi người, từng xuất thân trong một nhóm nhạc trước khi kết hợp với nhau, Lê Hoàng – thành viên cũ của nhóm B.O.M; Tiến Dũng - cựu thành viên của nhóm Weboys.<br  /><br  />Kinh nghiệm hát nhóm cho họ cái nhìn đúng đắn nhất về giọng ca, vai trò của mình khi quyết định ra đời <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a>. Cùng gặp nhau trong cố gắng tạo phong cách riêng, chú ý chọn lựa bài hát phù hợp với giới trẻ và có nội dung sâu lắng. Một năm trước, khi Tiến Dũng và Lê Hoàng kết hợp, họ đã trăn trở chọn tên nhóm. <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> là ý tưởng của ca sĩ Tuấn Hưng, người được cả hai xem như người anh, người bạn.<br  /><br  />“Mặt bằng chung hiện nay tồn tại rất ít nhóm nhạc nam, nếu có, đa số các thành viên trong những nhóm này thường nhìn thiếu nam tính. Tôi muốn hướng các em đến hình ảnh một nhóm nhạc nam thật sự mạnh mẽ, nam tính và lịch lãm” – Tuấn Hưng cho biết lý do anh chọn tên <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> cho nhóm và được cả hai đồng tình ngay.<br  /><br  />Vạch sẵn cho nhóm một con đường để chinh phục người nghe, Lê Hoàng và Tiến Dũng trong giai đoạn đầu sẽ không chú trọng nhiều đến phần hát bè, mà nhấn mạnh đến cảm xúc khi thể hiện ca khúc. Cả hai đều sở hữu một chất giọng nồng nàn, ấm áp và đặc biệt ấn tượng ở những nốt cao.<br  /><br  />Với họ, việc chọn được những ca khúc phù hợp với chất giọng, với phong cách không phải chuyện dễ dàng. Rất may, họ gặp được hai nhạc sĩ trẻ Nguyễn Hoàng Duy và Phạm Việt Hoàng. Cùng gặp nhau trong ý hướng nghệ thuật, họ bắt tay hợp tác trong vòng 3 năm. Trong thời gian đó, <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> khẳng định giọng hát, phong cách của mình bằng chính các ca khúc viết riêng cho mình.<br  /><br  />Sau thời gian chuẩn bị chu đáo, <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> vừa quyết định ra mắt album đầu tiên của nhóm “<a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> – Vol.1”. Album gồm 8 ca khúc mới độc quyền của các nhạc sĩ trẻ: Nguyễn Hoàng Duy, Phạm Việt Hoàng và Châu Phạm, phần lớn đều có nội dung về tình yêu. Cũng dễ hiểu, tuổi trẻ với những ước mơ về cuộc sống, về tình yêu, nhưng ở đây luôn là những khao khát vươn tới một tình yêu thật đẹp, thật lãng mạn và sâu sắc gắn với những cống hiến cho xã hội, cho môi trường sống trong lành.<br  /><br  />Những ca khúc về tình yêu của Nguyễn Hoàng Duy, Phạm Việt Hoàng, Châu Phạm qua phần thể hiện da diết của Lê Hoàng và Tiến Dũng vừa đủ mang lại sự hài lòng cho người nghe cả phần ca từ và giai điệu. Mong muốn của <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> không chỉ chinh phục khán giả trẻ, mà còn cả lớp có tuổi và những người nghe khó tính. Chính vì vậy, cả hai rất chịu khó trong việc luyện thanh và thầy dạy nhạc của Lê Hoàng và Tiến Dũng không tiếc lời khen ngợi về thái độ nghiêm túc và sự chịu khó của học trò mình.<br  /><br  />Định hình một phong cách sang trọng, lịch lãm khi biểu diễn trên sân khấu, nên dù theo đuổi dòng nhạc trẻ, cả hai đều nhất trí không quá chú trọng hình thức cầu kỳ, bắt mắt. “Quan trọng nhất vẫn là đầu tư cho giọng hát, chúng tôi muốn khán giả nhớ đến <a href="http://mp3.zing.vn/tim-kiem/bai-hat.html?q=The+Men" title="The Men"><strong>The Men</strong></a> bằng chính giọng hát và những ca khúc có chất lượng” – Lê Hoàng khẳng định.', 5, 1, 0),
(6, 'Van-Mai-Huong-ft-Truc-Nhan', 'Văn Mai Hương ft. Trúc Nhân', '/musicvietnam/uploads/music/singerthumb/8ca3496940e6e3497c8aa7da1db7b788_1373365849.jpg', '<p> <strong><span>Tên thật:</span> Văn Mai Hương</strong></p><p> <strong><span>Ngày sinh:</span> 27/09 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Văn Production JSC</p>Sinh viên Khoa thanh nhạc, trường Văn hóa Nghệ thuật Quân đội<br  />Thể loại nhạc yêu thích: RnB, Jazz<br  />Thần tượng: C-harice Pempengco – tài năng âm nhạc 18 tuổi<br  />Thành tích tại các cuộc thi âm nhạc trước đây: Giải 4 cuộc thi Tiếng ca học đường 2009<br  />Các hoạt động nghệ thuật trước khi tham gia Vietnam Idol 2010:<br  />• Tham gia sinh hoạt từ nhỏ tại CLB Họa Mi Hà Nội<br  />• Tham gia chương trình Ki ốt Âm nhạc VTV6<br  />Sở thích khác ngoài ca nhạc: nhảy và diễn xuất<br  /><br  />VĂN MAI HƯƠNG – Tuổi nhỏ nhưng giọng ca không “nhỏ”<br  />Là thí sinh nhỏ tuổi nhất Vietnam Idol 2010, <strong>Văn Mai Hương</strong> cô bé 16 tuổi đã chinh phục moi người bằng giọng ca trong trẻo, cao vút – một giọng ca không hề “nhỏ”. Lọt vào TOP 10 Vietnam Idol 2010 là một thành thích đáng nể của cô ca sĩ tuổi teen.<br  />Mai Hương bộc bạch: “Trong cuộc đời mỗi người,có những cơ hội chỉ đến một lần và cần phải nắm bắt nó. Đó là lí do tôi đăng kí Vietnam Idol.”<br  />“Những gì tôi thể hiện không phải bằng kinh nghiệm.mà bằng trái tim, bằng nội lực và sự cố gắng trau dồi bản thân tại nơi mình học. Trước đây tuổi nhỏ là lợi thế tôi có trong cuộc thi còn bây giờ đó là sự áp lực . Tôi không muốn người ta đánh giá tôi qua tuổi tác. Hãy đánh giá những gì tôi thể hiện trên sân khấu qua nỗ lưc của tôi ở từng vòng thi.<br  />Tôi luôn tâm niệm khi mình còn trẻ hãy sống hết mình cho đam mê và mơ ước.Tôi vẫn luôn học hỏi để hoàn thiện mình từng ngày.Dù sự trải nghiệm còn ít nhưng tôi tin khi mình luôn cố gắng và hát bằng trái tim,mọi người sẽ hiểu và ủng hộ cho mình.Sự ủng hộ của các bạn là món quà tinh thần rất lớn để tôi tự tin,vững bước vaò cuộc thi.”<br  />Album đã phát hành:<br  />2011: Hãy Mỉm Cười<br  />2013: Mười Tám<br  />Single đã phát hành:<br  />2011: Nếu Như Anh Đến<br  />2012: Ngày Chung Đôi<br  />2012: Chuyện Tình Nhà Thơ', 1, 0, 0),
(7, 'Trung-Quan-Idol', 'Trung Quân Idol', '/musicvietnam/uploads/music/singerthumb/4864e650e84562ba9fc77d879bd164c2_1392224809.jpg', '<p> <strong><span>Tên thật:</span> Bùi Nguyễn Trung Quân</strong></p><p> <strong><span>Ngày sinh:</span> 1990 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Ca sĩ Tự Do</p>Sinh viên năm 2, chuyên ngành Đồ họa, trường ĐH Kiến trúc Tp.HCM<br  />Thể loại nhạc yêu thích: pop, RnB, jazz, blues<br  /><br  />Thành tích tại các cuộc thi âm nhạc trước đây:<br  />• TOP 100 cuộc thi Tiếng ca học đường 2008<br  />• TOP 16 – Vietnam Idol 2008<br  />Các hoạt động nghệ thuật trước khi tham gia Vietnam Idol 2010: từng giam hát cho các TVC quảng cáo<br  />Sở thích khác ngoài ca nhạc: vẽ, diễn hài, nấu ăn, stylist<br  /><br  />BÙI NGUYỄN TRUNG QUÂN – Giọng ca “bay”<br  />Sinh ra và lớn lên ở Đà Lạt, tuy bố mẹ không ai hoạt động nghệ thuật, nhưng gia đình ai cũng có máu nghệ sĩ. Anh ruột của Quân là rapper Quân Rapsoul – vừa đầu quân cho công ty Music Faces vào hè năm ngoái. Và giọng ca “bay” mà Quân có được cũng thừa hường từ mẹ.<br  />Nhạc sĩ Quốc Trung đã ưu ái nhận xét về giọng hát của Trung Quân: “Dù cho kết quả em thi như thế nào thì tôi vẫn thích em nhất trong số tất cả các thí sinh. Đối với tôi, giọng hát chỉ là một phương tiện. Cái em có rất đáng quý đó là thẩm mỹ âm nhạc. Tôi chỉ e rằng sở thích của tôi đôi khi không đi với số đông khán giả. Em cần bãn lĩnh, giữ thẩm mỹ, phong cách của mình cho dù kết quả như thế nào. Đó là cái đáng quý nhất.”<br  />Khi được lọt vào TOP 10 Vietnam Idol 2010, Quân chia sẻ: “Với sự tập trung cao, cùng với sự thay đổi theo từng vòng thi, Quân hi vọng khán giả sẽ yêu mến giọng hát Quân hơn. Những tin nhắn bình chọn của khán giả sẽ giúp Quân thực hiện ước mơ của mình cũng như như mang tiếng hát đến gần khán giả hơn.”', 1, 0, 1),
(8, 'Duong-Trieu-Vu', 'Dương Triệu Vũ', '/musicvietnam/uploads/music/singerthumb/a260f97c9c737d7b147004fec82ab940_1389407478.jpg', '', 1, 0, 0),
(9, 'Khac-Viet', 'Khắc Việt', '', '', 1, 0, 0),
(10, 'Luong-Bich-Huu', 'Lương Bích Hữu', '/musicvietnam/uploads/music/singerthumb/a0ab8112abab50b3de78d440a15e211e_1371293203.jpg', '<p> <strong><span>Tên thật:</span> Lương Bích Hữu</strong></p><p> <strong><span>Ngày sinh:</span> 01/09 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Khải Sao Production</p><p> <span>Profile:</span>&nbsp;<a href="http://me.zing.vn/singer.luongbichhuu" target="__blank" title="Lương Bích Hữu">http://me.zing.vn/singer.luongbichhuu</a></p><p id="_artistBio"> Nguyên quán: Trung Hoa<br  /> Cao: 1m60<br  /> Nặng: 45 kg<br  /> Tính cách: chân thật, sâu sắc<br  /> Ca sĩ yêu thích: Coco Lee<br  /> Nhạc sĩ yêu thích: Nguyễn Hà, Đức Huy, Jacky Cheung<br  /> Thể loại nhạc: Pop, ballad<br  /> Sở thích thể thao: bơi lội, xem võ thuật<br  /> Thời gian rãnh: học thêm tiếng Việt (đã nói lưu loát tiếng Quảng Đông, Phổ thông)<br  /> Loài hoa yêu thích: Hồng<br  /> Loài vật yêu thích: chó Bắc Kinh<br  /> Thích phim: hoạt hình, hài<br  /> Màu yêu thích thì có lẽ là màu vàng<br  /> Nếu có tin vui thì đầu tiên sẽ báo cho khán giả<br  /> Nếu có một điều ước: mau chóng nói thông thạo tiếng Việt để viết nhạc cùng với H.A.T. ( điều ước lúc cô còn trong nhóm H.A.T. )<br  /> <br  /> <strong>Lương Bích Hữu</strong> sinh năm 1984 là một nữ ca sỹ người Việt gốc Hoa được biết đến nhiều qua các ca khúc dành cho tuổi teen. Cô còn được giới truyền thông cũng như khán giả hâm mộ đặt cho biệt danh &quot;Cô gái Trung Hoa&quot; - đây cũng là tên một bài hát rất ăn khách của cô.<br  /> <br  /> <strong>Lương Bích Hữu</strong> sinh ngày 1/9/1984, còn có biệt danh là A Mí, là con thứ 4 trong một gia đình có 5 chị em gái, tại quận 5, một khu dân cư được mệnh danh là &quot;phố người Hoa&quot; của Thành phố Hồ Chí Minh.<br  /> <br  /> Từ nhỏ cô đã có niềm yêu thích đặc biệt với nghệ thuật, năm 12 tuổi, trong một cuộc thi cấp quận, cô và một số người bạn đã giành giải nhất với tiết mục &quot;Cô gái Bích Lan Hương&quot; sau đó được phát hiện và bắt đầu sinh hoạt tại Nhà Thiếu nhi quận 5.<br  /> Sau khi học hết lớp 12, Hữu đậu vào Khoa thanh nhạc của Nhạc viện Thành phố Hồ Chí Minh với số điểm khá cao, nhưng mơ ước chính của cô lúc bấy giờ là sau này sẽ trở thành giảng viên thanh nhạc thật giỏi, vừa có thể gần gũi với việc ca hát, vừa “không trở thành ca sĩ” theo ý gia đình<br  /> <br  /> Sự nghiệp:<br  /> <br  /> Năm 2003 cô tham gia cuộc thi Tiếng hát truyền hình, và lọt được tới vòng bán kết, cũng vì thành tích bất ngờ đó mà cô được nhạc sĩ Nguyễn Hà, giám đốc công ty Nguyễn Production và là nhạc sỹ khá nổi tiếng với việc phát hiện - đào tạo ca sĩ chủ động đặt vấn đề, cô đã không bỏ lỡ cơ hội này và quyết định gia nhập công ty Nguyễn Production<br  /> Một thời gian sau cô quyết định rời Nguyễn Production để gia nhập công ty WePro(Thế giới giải trí), vốn được thành lập bởi nhạc sĩ Quang Huy - anh em của nhạc sĩ Nguyễn Hà. Thành lập một nhóm nhạc nữa với cái tên &quot;HAT&quot;, là tên viết tắt của 3 ca sỹ gồm <strong>Lương Bích Hữu</strong>, Phạm Quỳnh Anh và Thu Thủy.<br  /> <br  /> Lần đầu tiên nhóm ra mắt khán giả là trong chương trình &quot;Giai Điệu Tình Yêu&quot; ngày 12/1/2004, nhóm đã có một vài thành công nhất định, được xem là một nhóm nhạc triển vọng, có nhiều hit lớn như Yêu làm chi,Taxi, Đành nói lời chia tay...<br  /> <br  /> Sau đó một thời gian, HAT tan rã, <strong>Lương Bích Hữu</strong> lại quay về công ty Nguyễn Production và chính thức phát hành album đầu tay mang tên Cô gái Trung Hoa. <strong>Lương Bích Hữu</strong> đã làm không ít người thất vọng vì một album khá đơn giản và được phát hành trong lặng lẽ. Thế mà chưa đầy 2 tuần sau, 4 bài trong tổng số 6 bài hát của <strong>Lương Bích Hữu</strong> đều nhảy vào top của các trang web nghe nhạc trực tuyến. Nhất là bài hát chủ đề &quot;Cô gái Trung Hoa&quot; nổi đình nổi đám, từ đó khi nhắc đến <strong>Lương Bích Hữu</strong>, người ta đều nghĩ ngay đến tên gọi Cô gái Trung Hoa.<br  /> <br  /> Sau khi phát hành album đầu tay, không lâu sau đó <strong>Lương Bích Hữu</strong> tiếp tục khẳng định danh tiếng của mình bằng Liveshow cùng tên &quot;Cô gái Trung Hoa&quot; vào ngày 28/7/2006. Vào ngày 3/1/2007, <strong>Lương Bích Hữu</strong> phát hành album Vol.2 Âyda Âyda một lần nữa làm khuấy động Showbiz Việt. Có thể nói giai đoạn này hình ảnh <strong>Lương Bích Hữu</strong> đạt đến đỉnh cao nhất của vinh quang. Bằng nét dễ thương vốn có và giọng hát trong trẻo ngây thơ, Bích Hữu đánh vào giới khán giả tuổi teen và đã thành công bằng các bài hát đầy tâm trạng dễ thương của những khán giả khó tính, mau thích mau chán này.<br  /> <br  /> Tự lập<br  /> Thời gian sau đó cô gia nhập nhóm nhạc nữ &quot;Ngũ Long Công Chúa&quot; cùng Yến Nhi, Yến Trang, Minh Trang và Bích Trâm. Tuy mang danh nghĩa nhóm nhạc nhưng mỗi người vẫn có một hướng đi riêng, và vẫn hát độc lập. Nhóm nhạc này cũng có một vài bài hát tạo thành hit, nhưng rồi cũng tan rã khá nhanh. Từ sự cố rã nhóm Ngũ Long Công Chúa, Bích Hữu cũng hết hạn hợp đồng với Nguyễn Production, mặc dù Nguyễn đã gia tăng thời hạn hợp đồng, nhưng Bích Hữu đã có một bước ngoặt trong sự nghiệp tại đây, cô đã từ chối và trở thành một ca sỹ tự do, độc lập.<br  /> <br  /> Sau đó, được bạn bè và người thân giúp đỡ, đến ngày 2/12/2008, cô cho ra mắt album thứ ba mang tên It&#039;s not over - Chưa dừng lại, được xem là &quot;đứa con tinh thần&quot; của <strong>Lương Bích Hữu</strong>. Và chỉ trong ngày đầu tiên phát hành, album đã tiêu thụ được tận 3000 bản . Báo chí rầm rộ đưa tin, dường như đó đã đánh dấu một thành công nhất định từ khi <strong>Lương Bích Hữu</strong> rời khỏi Nguyễn Production để hát độc lập. Tuy nhiên, có lẽ vì sự im hơi lặng tiếng quá lâu trước khi ra album, mà album chỉ có vài ba bài hit so với vol.1, thêm vào lúc đó đang có những gương mặt tuổi teen hot như Đông Nhi, Wanbi Tuấn Anh, Bảo Thy... nên bấy nhiêu không đủ kéo <strong>Lương Bích Hữu</strong> trở lại vị trí Công chúa Teen Pop như trước kia.<br  /> <br  /> <strong>Lương Bích Hữu</strong> thành lập công ty mang tên Khải Sao Entertaniment- theo cô cái tên Khải Sao rất ý nghĩa và đặc biệt.<br  /> <br  /> Ngày 19/12/2011 , <strong>Lương Bích Hữu</strong> ra mắt sản phẩm âm nhạc đầu tiên kể từ khi rời khỏi Nguyễn Production , album &quot; DVD single Cô Gái Trung Hoa Trở Lại &quot; .</p>', 1, 0, 0),
(11, 'Emily', 'Emily', '', '', 1, 0, 0),
(12, 'Hamlet-Truong', 'Hamlet Trương', '', '', 1, 0, 0),
(13, 'Miu-Le', 'Miu Lê', '', '', 1, 0, 0),
(14, 'Hoang-Nhat-Minh', 'Hoàng Nhật Minh', '', '', 0, 0, 0),
(15, 'Phuong-Linh', 'Phương Linh', '/musicvietnam/uploads/music/singerthumb/73853c4742e70a9cab7e779c922ea7cd_1370016346.png', '<p> <strong><span>Tên thật:</span> Trần Phương Linh</strong></p><p> <strong><span>Ngày sinh:</span> 29/08 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Ca sĩ Tự Do</p><p> <span>Profile:</span>&nbsp;<a href="http://me.zing.vn/singer_phuonglinh" target="__blank" title="Phương Linh">http://me.zing.vn/singer_phuonglinh</a></p><p id="_artistBio"> Sở hữu gương mặt khả ái và vóc dáng rất &quot;sang&quot;, giọng hát tuy không quá ấn tượng nhưng lại tràn đầy cảm xúc và cách xử lý tinh tế, Trần <strong>Phương Linh</strong> gây ấn tượng cho khán giả ngay từ những ngày đầu tham gia giải Sao Mai 2005. Với nỗ lực vượt bậc của bản thân, cô gái đến từ Thanh Hoá - Trần <strong>Phương Linh</strong> đã bước lên bục chiến thắng với đồng giải Nhì dòng nhạc nhẹ tại Sao Mai 2005.<br  /> <br  /> Sau album song ca chung với ca sĩ Hà Anh Tuấn vào năm 2006, album đầu tay của <strong>Phương Linh</strong> phải đến tận năm 2009 mới ra mắt khán giả. &quot;Pha Lê&quot; được <strong>Phương Linh</strong> đầu tư khá kỹ để mang đến cho khán giả một sản phẩm chất lượng.<br  /> <br  /> Trong thời gian này <strong>Phương Linh</strong> đang cùng Hà Anh Tuấn đang tiến hành thu âm cho album Ngày Hát Đôi 2 sẽ được ra mắt vào cuối năm nay.</p>', 1, 0, 0),
(16, 'Duy-Manh', 'Duy Mạnh', '/musicvietnam/uploads/music/singerthumb/f3ccdd27d2000e3f9255a7e3e2c48800_1300333297.jpg', '<p> <strong><span>Tên thật:</span> Duy Mạnh</strong></p><p> <strong><span>Ngày sinh:</span> 1975 - <span>Quốc gia: </span>Việt Nam</strong></p><p id="_artistBio"> Sinh năm 1975, học Nhạc viện TPHCM khoa piano, biết chơi Flute và Saxo, <strong>Duy Mạnh</strong> đã đạt được chút ít tiếng tăm qua vài lần kết hợp với nhạc sĩ Vũ Quốc Việt. Việt hát, <strong>Duy Mạnh</strong> đàn piano và bè.<br  /> <br  /> Từ năm 1998, <strong>Duy Mạnh</strong> đã đàn hát phiêu bạt qua các sân khấu, bar, pub Sài Gòn. Năm 2002, <strong>Duy Mạnh</strong> từng liều mình làm đĩa nhạc đầu tiên, song tới công đoạn ra master (đĩa chủ để đem đi in sang hàng loạt) thì anh lại hết sạch tiền và đành ngưng lại.<br  /> <br  /> Album đầu tay Tình em là đại dương ra mắt của <strong>Duy Mạnh</strong>, anh đã chủ ý viết ca khúc phù hợp với chất giọng của mình - một giọng nam trữ tình, rỉ rả, có cơ may đi vào lòng người nghe từ từ. Album qua 3 lần tái bản đã có số lượng tiêu thụ lên tới 20 000 bản.<br  /> <br  /> Các album sau tuy không thành công như album đầu tay nhưng giọng hát của <strong>Duy Mạnh</strong> đã đuợc đánh giá cao hơn.<br  /> <br  /> Các album đã phát hành:<br  /> - Tình Em Là Đại Dương Vol.1<br  /> - Lời Sám Hối Của Kẻ Hấp Hối Vol.2<br  /> - Kẻ Hoàn Lương Vol.3<br  /> - Bài Hát Cho Người Thủy Thủ Vol.4<br  /> - Nước Mắt Kẻ Đa Tình Vol.5</p>', 2, 0, 0),
(17, 'HKT-Band', 'HKT Band', '/musicvietnam/uploads/music/singerthumb/150840b5b5849fc50cfd4902cc102d99_1343638478.jpg', '', 2, 0, 0),
(18, 'Ha-Anh-Tuan', 'Hà Anh Tuấn', '', '', 1, 0, 0),
(19, 'Manh-Quan-ft-Ai-Phuong', 'Mạnh Quân ft. Ái Phương', '', '', 1, 0, 0),
(20, 'Que-Van', 'Quế Vân', '/musicvietnam/uploads/music/singerthumb/4e2b0ef28ab651d398a1883c71dbfaf4_1371203800.jpg', '<p> <strong><span>Tên thật:</span> Phạm Thị Vân Quế</strong></p><p> <strong><span>Ngày sinh:</span> - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Ca sĩ Tự Do</p><p id="_artistBio"> Xuất thân là một người mẫu, nhưng sau một thời gian hoạt động khá kín tiếng, <strong>Quế Vân</strong> quyết định tấn công vào thị trường ca hát, cô để lại ấn tượng nhờ ca khúc &quot;Đừng xa em nhé&quot; - Đây cũng chính là ca khúc làm nên tên tuổi của <strong>Quế Vân</strong> trong làng âm nhạc Việt vào thời gian khoảng 5 năm trước.<br  /> <br  /> Tuy nhiên, vào thời điểm đó, do một số lý do, <strong>Quế Vân</strong> buộc phải rời xa ánh đèn sân khấu và tiếp quản công việc kinh doanh của gia đình. Và hiện tại, khi công việc kinh doanh đã ổn định, niềm đam mê âm nhạc trỗi dậy và cũng là lúc cô quyết định quay lại làng giải trí. Mới đây, cô cũng vừa cho ra mắt một single mang tên &quot;Một lần để mất anh&quot;.</p>', 1, 0, 0),
(21, 'Hoang-Ton', 'Hoàng Tôn', '/musicvietnam/uploads/music/singerthumb/885aac931f9b0cf4b242041673aea6e0_1369988099.jpg', '<p> <strong><span>Tên thật:</span> Nguyễn Hoàng Tôn</strong></p><p> <strong><span>Ngày sinh:</span> 15/11 - <span>Quốc gia: </span>Việt Nam</strong></p><p id="_artistBio"> <strong>Nguyễn Hoàng Tôn</strong><br  /> <br  /> - Sinh ngày: 15/11/1988<br  /> <br  /> - Nhạc sỹ, ca sỹ, sản xuất âm nhạc<br  /> <br  /> - Đề cử Top 10 Làn sóng xanh 2011<br  /> <br  /> - Top 10 Pepsi Talent Show 2010<br  /> <br  /> - Top 2 nhóm Hát tự nhiên Vfresh</p>', 1, 0, 0),
(22, 'Son-Ca', 'Sơn Ca', '', '', 0, 0, 0),
(23, 'Minh-Thu', 'Minh Thư', '', '', 0, 0, 0),
(24, 'Hoai-Nam-Bozo', 'Hoài Nam Bozo', '', '', 0, 0, 0),
(25, 'Tran-Ha-My-Mo-Naive', 'Trần Hà My (Mờ Naive)', '', '', 0, 0, 0),
(26, 'Cao-Tuan-Thien', 'Cao Tuấn Thiên', '', '', 0, 0, 0),
(27, 'Lam-Chan-Kiet', 'Lâm Chấn Kiệt', '', '', 0, 0, 0),
(28, 'Yuki-Huy-Nam', 'Yuki Huy Nam', '', '', 0, 0, 0),
(29, 'Minh-Vuong-M4U-Ho-Quang-Hieu', 'Minh Vương M4U, Hồ Quang Hiếu', '/musicvietnam/uploads/music/singerthumb/e2358dc9ba8b5b5e9bc0476dea165e9d_1373258860.jpg', '', 3, 0, 0),
(30, 'Minh-Vuong-M4U-Ho-Quang-Hieu', 'Minh Vương M4U  , Hồ Quang Hiếu', '', '', 0, 1, 0),
(31, 'Minh-Thu', 'Minh Thư', '', '', 0, 1, 0),
(32, '365Band', '365Band', '', '', 0, 1, 0),
(33, 'Ly-Hai', 'Lý Hải', '', '', 0, 1, 0),
(34, 'Ong-Cao-Thang-Dong-Nhi', 'Ông Cao Thắng, Đông Nhi', '', '', 0, 1, 0),
(35, 'Lam-Truong-Noo-Phuoc-Thinh', 'Lam Trường ,  Noo Phước Thịnh', '', '', 0, 0, 1),
(37, 'Son-Tung-MTP', 'Sơn Tùng MTP', '', '', 0, 0, 0),
(38, 'AC-M', 'AC&amp;M', '/musicvietnam/uploads/music/singerthumb/e9f46f968c158fdbda86a394b1cf9903_1292581786.jpg', '<p> <strong><span>Tên thật:</span> AC&amp;M</strong></p><p> <strong><span>Ngày sinh:</span> 2001 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <strong><span>Công ty đại diện:</span> Ca sĩ Tự Do</strong></p><p id="_artistBio"> <strong>AC&amp;M</strong> được biết đến như là một trong những nhóm nhạc nam có phong cách, tồn tại trong khoảng thời gian dài và đạt được không ít thành tích đáng kể nhất của làng showbiz Việt tính đến thời điểm này. Nhóm nhạc do bốn anh chàng đều xuất thân từ Nhạc viện TP HCM, trong đó Nam Khánh giữ bè tenor 1, Hoàng Bách tenor 2, Thụy Vũ và Đình Bảo, hai anh em ruột giữ phần bass và barritone thành lập vào 24/12/2001. Phong cách chủ đạo của nhóm là Acapella.</p>', 1, 0, 0),
(39, 'Tra-My-The-Voice', 'Trà My The Voice', '', '', 0, 0, 1),
(40, 'Trinh-Thang-Binh', 'Trịnh Thăng Bình', '', '', 0, 0, 1),
(41, 'Ho-Viet-Trung', 'Hồ Việt Trung', '/musicvietnam/uploads/music/singerthumb/ad7bc863acc50ad3b747c51c2f85b431_1378461448.jpg', '<p> <strong><span>Tên thật:</span> Hồ Việt Trung</strong></p><p> <strong><span>Ngày sinh:</span> 07/06 - <span>Quốc gia: </span>Việt Nam</strong></p><p> <span>Công ty đại diện:</span> Ca sĩ Tự Do</p>', 0, 0, 1),
(42, 'Bich-Phuong', 'Bích Phương', '', '', 0, 0, 1),
(43, 'Dam-Vinh-Hung', 'Đàm Vĩnh Hưng', '', '', 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_topsong`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_topsong` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `songid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `dt` int(11) NOT NULL DEFAULT '0',
  `hit` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `songid` (`songid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_video`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_video` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `tname` varchar(255) NOT NULL DEFAULT '',
  `casi` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `nhacsi` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `theloai` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `listcat` varchar(255) NOT NULL DEFAULT '',
  `duongdan` varchar(255) NOT NULL DEFAULT '',
  `thumb` varchar(255) NOT NULL DEFAULT '',
  `view` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `active` smallint(2) unsigned NOT NULL DEFAULT '0',
  `dt` int(11) unsigned NOT NULL DEFAULT '0',
  `server` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `binhchon` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `hit` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `nv3_vi_music_video`
--

INSERT INTO `nv3_vi_music_video` (`id`, `name`, `tname`, `casi`, `nhacsi`, `theloai`, `listcat`, `duongdan`, `thumb`, `view`, `active`, `dt`, `server`, `binhchon`, `hit`) VALUES
(1, 'Trot-Yeu-Choreography-Version-DMV-Fanmade', 'Trót Yêu (Choreography Version) [DMV Fanmade]', 7, 0, 1, '1', 'http://youtu.be/cCMOrJQoCSE', '/musicvietnam/uploads/music/clipthumb/trotyeu.png', 12, 1, 1394854829, 0, 0, '13-1394854829'),
(4, 'Tu-Nay-Ve-Sau-Trinh-Thang-Binh-Official-MV', 'Từ Nay Về Sau Trịnh Thăng Bình Official MV', 40, 16, 1, '1', 'http://youtu.be/OR9Ld7Kn3ao', '/musicvietnam/uploads/music/clipthumb/tunayvesau.jpg', 0, 1, 1395223654, 0, 0, '0-1395223654'),
(2, 'Lien-Khuc-Chot-Thay-Em-Khoc-Anh-Sang-Cua-doi-Toi', 'Liên Khúc Chợt Thấy Em Khóc & Ánh Sáng Của đời Tôi', 35, 0, 1, '1', 'http://youtu.be/WlTRmpwAptQ', '/musicvietnam/uploads/music/clipthumb/capture.png', 29, 1, 1395059275, 0, 0, '31-1395059275'),
(3, 'Em-La-Ai', 'Em Là Ai', 39, 0, 1, '1', 'http://youtu.be/a_cn52nLDog', '/musicvietnam/uploads/music/clipthumb/emlaai.png', 7, 1, 1395216991, 0, 0, '8-1395216991'),
(5, 'HO-QUANG-HIEU-TIM-EM-Official-MV', 'HỒ QUANG HIẾU - TÌM EM [Official MV]', 1, 17, 1, '1', 'http://youtu.be/unt1tr4qtzs', '/musicvietnam/uploads/music/clipthumb/timyeu.jpg', 4, 1, 1395224009, 0, 0, '3-1395224009'),
(6, 'Bao-Gio-Het-Co-Don', 'Bao Giờ Hết Cô Đơn', 41, 0, 1, '1', 'http://youtu.be/-H_ggzCD1ic', '/musicvietnam/uploads/music/clipthumb/bikipcuagai.jpg', 0, 1, 1395224365, 0, 0, '0-1395224365'),
(7, 'Minh-Yeu-Nhau-Di-OFFICIAL-MV', 'Mình Yêu Nhau Đi [OFFICIAL MV]', 42, 18, 1, '1', 'http://youtu.be/X8mhF6HgzVA', '/musicvietnam/uploads/music/clipthumb/minhyeunhaudi.jpg', 0, 1, 1395224733, 0, 0, '0-1395224733'),
(8, 'Bien-Tinh', 'Biển Tình', 43, 19, 1, '1', 'http://youtu.be/NIl3QsOMZ_c', '/musicvietnam/uploads/music/clipthumb/bientinh.jpg', 9, 1, 1395224972, 0, 0, '6-1395224972');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_music_video_category`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_music_video_category` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `keywords` mediumtext NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `numvideo` int(11) unsigned NOT NULL DEFAULT '0',
  `weight` smallint(4) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `nv3_vi_music_video_category`
--

INSERT INTO `nv3_vi_music_video_category` (`id`, `title`, `keywords`, `description`, `numvideo`, `weight`) VALUES
(1, 'Việt Nam', '', '', 8, 1),
(2, 'Âu Mỹ', '', '', 0, 2),
(3, 'Hàn Quốc', '', '', 0, 3),
(4, 'Nhật Bản', '', '', 0, 4),
(5, 'Hoa Ngữ', '', '', 0, 5),
(6, 'Hòa Tấu', '', '', 0, 6),
(7, 'Nhạc Trữ Tình', '', '', 0, 7),
(8, 'Nhạc Quê Hương', '', '', 0, 8),
(9, 'Nhạc Cách Mạng', '', '', 0, 9),
(10, 'Nhạc Thiếu Nhi', '', '', 0, 10),
(11, 'Rock Việt', '', '', 0, 11),
(12, 'Rap Việt', '', '', 0, 12),
(13, 'Electronic &#x002F; Dance', '', '', 0, 13),
(14, 'AudioPhile', '', '', 0, 14);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_1`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_1` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `catid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `listcatid` varchar(255) NOT NULL DEFAULT '',
  `topicid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `author` varchar(255) NOT NULL DEFAULT '',
  `sourceid` mediumint(8) NOT NULL DEFAULT '0',
  `addtime` int(11) unsigned NOT NULL DEFAULT '0',
  `edittime` int(11) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `publtime` int(11) unsigned NOT NULL DEFAULT '0',
  `exptime` int(11) unsigned NOT NULL DEFAULT '0',
  `archive` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `hometext` mediumtext NOT NULL,
  `homeimgfile` varchar(255) NOT NULL DEFAULT '',
  `homeimgalt` varchar(255) NOT NULL DEFAULT '',
  `homeimgthumb` varchar(255) NOT NULL DEFAULT '',
  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_comm` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_rating` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `hitstotal` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `hitscm` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `total_rating` int(11) NOT NULL DEFAULT '0',
  `click_rating` int(11) NOT NULL DEFAULT '0',
  `keywords` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `catid` (`catid`),
  KEY `topicid` (`topicid`),
  KEY `admin_id` (`admin_id`),
  KEY `author` (`author`),
  KEY `title` (`title`),
  KEY `addtime` (`addtime`),
  KEY `publtime` (`publtime`),
  KEY `exptime` (`exptime`),
  KEY `status` (`status`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `nv3_vi_news_1`
--

INSERT INTO `nv3_vi_news_1` (`id`, `catid`, `listcatid`, `topicid`, `admin_id`, `author`, `sourceid`, `addtime`, `edittime`, `status`, `publtime`, `exptime`, `archive`, `title`, `alias`, `hometext`, `homeimgfile`, `homeimgalt`, `homeimgthumb`, `inhome`, `allowed_comm`, `allowed_rating`, `hitstotal`, `hitscm`, `total_rating`, `click_rating`, `keywords`) VALUES
(1, 1, '1,8,12', 0, 1, '', 0, 1274989177, 1395195147, 1, 1274989177, 0, 2, 'Trịnh Thăng Bình cố gắng níu kéo dù bị Lại Hương Thảo phản bội', 'Trinh-Thang-Binh-co-gang-niu-keo-du-bi-Lai-Huong-Thao-phan-boi', 'Trịnh Thăng Bình và Lại Hương Thảo tiếp tục vào vai đôi tình nhân không hạnh phúc trong MV mới của nam ca sĩ.', '2014_03/1-12504.jpg', 'Thành lập VINADES.,JSC', 'thumb/1-12504.jpg|block/1-12504.jpg', 1, 2, 1, 3, 0, 0, 0, 'nguồn mở, quen thuộc, cộng đồng, việt nam, hoạt động, gần đây, phổ biến, áp dụng, hầu hết, hết các, lĩnh vực, tin tức, thương mại điện, điện tử, cá nhân, hệ thống'),
(11, 1, '1', 0, 1, '', 0, 1395195297, 1395195297, 1, 1395195297, 0, 2, 'HyunA &#40;4Minute&#41; &quot;hứng đá&quot; vì cảnh khoe ngực', 'HyunA-4Minute-hung-da-vi-canh-khoe-nguc', 'Cảnh quay khoe ngực từ trên xuống của HyunA trong MV &quot;Whatcha Doin&#039; Today?&quot; ngay lập tức vấp phải khá nhiều chỉ trích.', '2014_03/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg', '', 'thumb/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg|block/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg', 1, 2, 1, 0, 0, 0, 0, 'ngay lập tức'),
(12, 1, '1', 0, 1, '', 0, 1395195463, 1395195463, 1, 1395195463, 0, 2, 'Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &quot;báng bổ&quot;', 'Hang-chuc-nghin-nguoi-ky-ten-doi-go-MV-cua-Katy-Perry-vi-bang-bo', 'Mới ra mắt được 1 tuần nhưng MV &quot;Dark Horse&quot; của Katy Perry đã làm không ít người xem tức giận.', '2014_03/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg', '', 'thumb/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg|block/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg', 1, 2, 1, 0, 0, 0, 0, 'ra mắt'),
(13, 1, '1', 0, 1, '', 0, 1395195568, 1395195568, 1, 1395195568, 0, 2, 'Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng', 'Noo-Phuoc-Thinh-hat-nhay-cuc-sung-Minh-Hang-thay-trang-phuc-chop-nhoang', 'Đêm nhạc riêng của Noo Phước Thịnh - Minh Hằng đã diễn ra tối qua và nhận được nhiều phản hồi từ khán giả.', '2014_03/img_2549-97780.jpg', '', 'thumb/img_2549-97780.jpg|block/img_2549-97780.jpg', 1, 2, 1, 4, 0, 0, 0, 'phản hồi'),
(14, 1, '1', 0, 1, '', 0, 1395195845, 1395195845, 1, 1395195845, 0, 2, 'Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng', 'Phuong-My-Chi-moi-Hien-Thuc-hat-trong-dem-nhac-rieng', 'Sau khi lỡ hẹn xuất hiện trong liveshow của Hiền Thục, Phương Mỹ Chi đã mời HLV tham gia vào đêm nhạc của mình cùng bố nuôi Quang Lê.', '2014_03/ht-28829-16e81.jpg', '', 'thumb/ht-28829-16e81.jpg|block/ht-28829-16e81.jpg', 1, 2, 1, 0, 0, 0, 0, 'xuất hiện,tham gia');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_8`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_8` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `catid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `listcatid` varchar(255) NOT NULL DEFAULT '',
  `topicid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `author` varchar(255) NOT NULL DEFAULT '',
  `sourceid` mediumint(8) NOT NULL DEFAULT '0',
  `addtime` int(11) unsigned NOT NULL DEFAULT '0',
  `edittime` int(11) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `publtime` int(11) unsigned NOT NULL DEFAULT '0',
  `exptime` int(11) unsigned NOT NULL DEFAULT '0',
  `archive` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `hometext` mediumtext NOT NULL,
  `homeimgfile` varchar(255) NOT NULL DEFAULT '',
  `homeimgalt` varchar(255) NOT NULL DEFAULT '',
  `homeimgthumb` varchar(255) NOT NULL DEFAULT '',
  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_comm` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_rating` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `hitstotal` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `hitscm` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `total_rating` int(11) NOT NULL DEFAULT '0',
  `click_rating` int(11) NOT NULL DEFAULT '0',
  `keywords` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `catid` (`catid`),
  KEY `topicid` (`topicid`),
  KEY `admin_id` (`admin_id`),
  KEY `author` (`author`),
  KEY `title` (`title`),
  KEY `addtime` (`addtime`),
  KEY `publtime` (`publtime`),
  KEY `exptime` (`exptime`),
  KEY `status` (`status`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `nv3_vi_news_8`
--

INSERT INTO `nv3_vi_news_8` (`id`, `catid`, `listcatid`, `topicid`, `admin_id`, `author`, `sourceid`, `addtime`, `edittime`, `status`, `publtime`, `exptime`, `archive`, `title`, `alias`, `hometext`, `homeimgfile`, `homeimgalt`, `homeimgthumb`, `inhome`, `allowed_comm`, `allowed_rating`, `hitstotal`, `hitscm`, `total_rating`, `click_rating`, `keywords`) VALUES
(1, 1, '1,8,12', 0, 1, '', 0, 1274989177, 1395195147, 1, 1274989177, 0, 2, 'Trịnh Thăng Bình cố gắng níu kéo dù bị Lại Hương Thảo phản bội', 'Trinh-Thang-Binh-co-gang-niu-keo-du-bi-Lai-Huong-Thao-phan-boi', 'Trịnh Thăng Bình và Lại Hương Thảo tiếp tục vào vai đôi tình nhân không hạnh phúc trong MV mới của nam ca sĩ.', '2014_03/1-12504.jpg', 'Thành lập VINADES.,JSC', 'thumb/1-12504.jpg|block/1-12504.jpg', 1, 2, 1, 3, 0, 0, 0, 'nguồn mở, quen thuộc, cộng đồng, việt nam, hoạt động, gần đây, phổ biến, áp dụng, hầu hết, hết các, lĩnh vực, tin tức, thương mại điện, điện tử, cá nhân, hệ thống');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_9`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_9` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `catid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `listcatid` varchar(255) NOT NULL DEFAULT '',
  `topicid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `author` varchar(255) NOT NULL DEFAULT '',
  `sourceid` mediumint(8) NOT NULL DEFAULT '0',
  `addtime` int(11) unsigned NOT NULL DEFAULT '0',
  `edittime` int(11) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `publtime` int(11) unsigned NOT NULL DEFAULT '0',
  `exptime` int(11) unsigned NOT NULL DEFAULT '0',
  `archive` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `hometext` mediumtext NOT NULL,
  `homeimgfile` varchar(255) NOT NULL DEFAULT '',
  `homeimgalt` varchar(255) NOT NULL DEFAULT '',
  `homeimgthumb` varchar(255) NOT NULL DEFAULT '',
  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_comm` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_rating` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `hitstotal` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `hitscm` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `total_rating` int(11) NOT NULL DEFAULT '0',
  `click_rating` int(11) NOT NULL DEFAULT '0',
  `keywords` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `catid` (`catid`),
  KEY `topicid` (`topicid`),
  KEY `admin_id` (`admin_id`),
  KEY `author` (`author`),
  KEY `title` (`title`),
  KEY `addtime` (`addtime`),
  KEY `publtime` (`publtime`),
  KEY `exptime` (`exptime`),
  KEY `status` (`status`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_12`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_12` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `catid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `listcatid` varchar(255) NOT NULL DEFAULT '',
  `topicid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `author` varchar(255) NOT NULL DEFAULT '',
  `sourceid` mediumint(8) NOT NULL DEFAULT '0',
  `addtime` int(11) unsigned NOT NULL DEFAULT '0',
  `edittime` int(11) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `publtime` int(11) unsigned NOT NULL DEFAULT '0',
  `exptime` int(11) unsigned NOT NULL DEFAULT '0',
  `archive` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `hometext` mediumtext NOT NULL,
  `homeimgfile` varchar(255) NOT NULL DEFAULT '',
  `homeimgalt` varchar(255) NOT NULL DEFAULT '',
  `homeimgthumb` varchar(255) NOT NULL DEFAULT '',
  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_comm` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_rating` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `hitstotal` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `hitscm` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `total_rating` int(11) NOT NULL DEFAULT '0',
  `click_rating` int(11) NOT NULL DEFAULT '0',
  `keywords` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `catid` (`catid`),
  KEY `topicid` (`topicid`),
  KEY `admin_id` (`admin_id`),
  KEY `author` (`author`),
  KEY `title` (`title`),
  KEY `addtime` (`addtime`),
  KEY `publtime` (`publtime`),
  KEY `exptime` (`exptime`),
  KEY `status` (`status`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `nv3_vi_news_12`
--

INSERT INTO `nv3_vi_news_12` (`id`, `catid`, `listcatid`, `topicid`, `admin_id`, `author`, `sourceid`, `addtime`, `edittime`, `status`, `publtime`, `exptime`, `archive`, `title`, `alias`, `hometext`, `homeimgfile`, `homeimgalt`, `homeimgthumb`, `inhome`, `allowed_comm`, `allowed_rating`, `hitstotal`, `hitscm`, `total_rating`, `click_rating`, `keywords`) VALUES
(1, 1, '1,8,12', 0, 1, '', 0, 1274989177, 1395195147, 1, 1274989177, 0, 2, 'Trịnh Thăng Bình cố gắng níu kéo dù bị Lại Hương Thảo phản bội', 'Trinh-Thang-Binh-co-gang-niu-keo-du-bi-Lai-Huong-Thao-phan-boi', 'Trịnh Thăng Bình và Lại Hương Thảo tiếp tục vào vai đôi tình nhân không hạnh phúc trong MV mới của nam ca sĩ.', '2014_03/1-12504.jpg', 'Thành lập VINADES.,JSC', 'thumb/1-12504.jpg|block/1-12504.jpg', 1, 2, 1, 3, 0, 0, 0, 'nguồn mở, quen thuộc, cộng đồng, việt nam, hoạt động, gần đây, phổ biến, áp dụng, hầu hết, hết các, lĩnh vực, tin tức, thương mại điện, điện tử, cá nhân, hệ thống');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_admins`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_admins` (
  `userid` int(11) NOT NULL DEFAULT '0',
  `catid` int(11) NOT NULL DEFAULT '0',
  `admin` tinyint(4) NOT NULL DEFAULT '0',
  `add_content` tinyint(4) NOT NULL DEFAULT '0',
  `pub_content` tinyint(4) NOT NULL DEFAULT '0',
  `edit_content` tinyint(4) NOT NULL DEFAULT '0',
  `del_content` tinyint(4) NOT NULL DEFAULT '0',
  `comment` tinyint(4) NOT NULL DEFAULT '0',
  UNIQUE KEY `userid` (`userid`,`catid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_block`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_block` (
  `bid` int(11) unsigned NOT NULL,
  `id` int(11) unsigned NOT NULL,
  `weight` int(11) unsigned NOT NULL,
  UNIQUE KEY `bid` (`bid`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_news_block`
--

INSERT INTO `nv3_vi_news_block` (`bid`, `id`, `weight`) VALUES
(1, 12, 3),
(1, 11, 4),
(1, 1, 5),
(1, 13, 2),
(1, 14, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_block_cat`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_block_cat` (
  `bid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `adddefault` tinyint(4) NOT NULL DEFAULT '0',
  `number` mediumint(4) NOT NULL DEFAULT '10',
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `weight` smallint(4) NOT NULL DEFAULT '0',
  `keywords` mediumtext NOT NULL,
  `add_time` int(11) NOT NULL DEFAULT '0',
  `edit_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`bid`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `alias` (`alias`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `nv3_vi_news_block_cat`
--

INSERT INTO `nv3_vi_news_block_cat` (`bid`, `adddefault`, `number`, `title`, `alias`, `image`, `thumbnail`, `description`, `weight`, `keywords`, `add_time`, `edit_time`) VALUES
(1, 1, 4, 'Music Blog', 'Music-Blog', '', '', 'Tin tiêu điểm', 1, '', 1279945710, 1395194969);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_bodyhtml_1`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_bodyhtml_1` (
  `id` int(11) unsigned NOT NULL,
  `bodyhtml` longtext NOT NULL,
  `sourcetext` varchar(255) NOT NULL DEFAULT '',
  `imgposition` tinyint(1) NOT NULL DEFAULT '1',
  `copyright` tinyint(1) NOT NULL DEFAULT '0',
  `allowed_send` tinyint(1) NOT NULL DEFAULT '0',
  `allowed_print` tinyint(1) NOT NULL DEFAULT '0',
  `allowed_save` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_news_bodyhtml_1`
--

INSERT INTO `nv3_vi_news_bodyhtml_1` (`id`, `bodyhtml`, `sourcetext`, `imgposition`, `copyright`, `allowed_send`, `allowed_print`, `allowed_save`) VALUES
(1, '<div> Sau khoảng thời gian dài lưu diễn kết hợp du lịch ở Úc và New Zealand để xả hơi và tự thưởng cho một năm 2013 thành công, Trịnh Thăng Bình vừa trở về Việt Nam và đã bắt tay vào hoàn tất phần hậu kỳ của MV Từ nay về sau. Đây là phần tiếp theo câu chuyện trong <a href="http://kenh14.vn/musik/trinh-thang-binh-vmusic-dong-loat-tung-du-an-cuoi-nam-20131215101422371.chn" target="_blank" title="MV Đâu phải anh chưa từng">MV Đâu phải em chưa từng</a> phát hành vào khoảng cuối năm 2013 vừa qua.&nbsp;</div><div> &nbsp;</div><div style="text-align: center;"> <img alt="" src="http://k14.vcmedia.vn/thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/1-12504.jpg" style="cursor: none;" /></div><div> &nbsp;</div><div> Câu chuyện trong MV Đâu phải em chưa từng kể về tình yêu đang say đắm của Trịnh Thăng Bình, anh vào vai một chàng trai đang chuẩn bị cầu hôn người yêu (Lại Hương Thảo thủ vai), nhưng cũng chính hôm ấy anh phát hiện ra người yêu lừa dối mình. Sau những tranh cãi, người yêu anh quyết định bỏ đi, để anh ở lại với những lựa chọn nên quyết định quay lại hay buông tay. Và ở Từ nay về sau, nhân vật của Trịnh Thăng Bình vẫn cố gắng níu kéo nhưng cuối cùng vẫn không thể thay đổi được gì...</div><div> &nbsp;</div><div> &nbsp;</div><div> Sau khi giới thiệu MV Từ nay về sau đến khán giả, Trịnh Thăng Bình đang tiếp tục sản xuất album mới, đồng thời chuẩn bị cho mini liveshow nhân dịp sinh nhật của mình.</div><br  /><img alt="" src="http://k14.vcmedia.vn/thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/2-12504.jpg" style="cursor: none;" /><br  /><br  /><img alt="" src="http://k14.vcmedia.vn/thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/3-12504.jpg" style="cursor: none;" />', '', 1, 0, 1, 1, 1),
(11, 'Ngay <a href="http://kenh14.vn/musik/hyuna-khoe-nguc-lap-lo-trong-clip-moi-20140316113041943.chn" target="_blank" title="từ khi tung teaser cho ">từ khi tung teaser cho &quot;Whatcha Doin&#039; Today?&quot;</a> (<a href="http://kenh14.vn/4minute.html" target="_blank" title="4Minute">4Minute</a>), <span style="font-weight: bold;"><a href="http://kenh14.vn/hyuna-4minute.html" target="_blank" title="HyunA">HyunA</a></span> đã lấy hết mọi sự chú ý của khán giả với cảnh khoe ngực khá gợi cảm, kèm theo một vài động tác vũ đạo nóng bỏng. Không nằm ngoài dự đoán, sau khi &quot;thưởng thức&quot; <a href="http://kenh14.vn/musik/hyuna-twerk-nhu-miley-trong-mv-moi-cua-4minute-2014031610569796.chn" target="_blank" title="trọn vẹn những hình ảnh sexy trong MV này">trọn vẹn những hình ảnh sexy trong MV này</a>, netizen đã để lại nhiều ý kiến không mấy thiện chí đối với sự hở hang quá mức cần thiết của <span style="font-weight: bold;">HyunA</span>.<br  /><br  /><div align="center"> <img alt="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 1" src="http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA01-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg" style="cursor: none;" title="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 1" /><br  /> <br  /> <img alt="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 2" src="http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA02-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg" style="cursor: none;" title="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 2" /><br  /> <br  /> <img alt="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 3" src="http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA03-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg" style="cursor: none;" title="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 3" /><br  /> &nbsp;</div>Độc giả Nate bình luận về cảnh quay từ trên cao, khoe ngực sexy của <span style="font-weight: bold;">HyunA</span>:<br  /><br  />&quot;<span style="font-style: italic;">Họ không thể có một phần trình diễn không khoe da thịt như <a href="http://kenh14.vn/2ne1.html" target="_blank" title="2NE1">2NE1</a> hay <a href="http://kenh14.vn/snsd.html" target="_blank" title="Soshi">Soshi</a> được à?</span>&quot; - 416 vote đồng tình, 64 vote không đồng tình.<br  /><br  />&quot;<span style="font-style: italic;">Nhìn vào ảnh là đã thấy thực sự ghê rồi</span>&quot; - 386 vote đồng tình, 33 vote không đồng tình.<br  /><br  />&quot;<span style="font-style: italic;">Sức mạnh của sự trợ giúp y học</span>&quot; - 304 vote đồng tình, 44 vote không đồng tình.<br  /><br  />&quot;<span style="font-style: italic;">Nhưng không ai có thể giống <span style="font-weight: bold;">HyunA</span>... Chỉ mỗi ánh mắt là đã gợi cảm lắm rồi</span>&quot; - 31 vote đồng tình, 7 vote không đồng tình.<br  /><br  />&quot;<span style="font-style: italic;">Quảng cáo ồn ào. MV xuất hiện cuối bài rõ ràng là để câu khách</span>&quot; - 26 vote đồng tình, 1 vote không đồng tình.<br  /><br  />&quot;<span style="font-style: italic;">Nhưng MV được đính kèm cuối bài báo kìa. Tại sao phải dùng cái vụ ồn ào này để quảng bá cho ca khúc trở lại chứ?</span>&quot; - 23 vote đồng tình, 1 vote không đồng tình.<br  /><br  /><div align="center"> <img alt="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 4" src="http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA04-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg" title="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 4" /><br  /> <br  /> <img alt="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 5" src="http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA05-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg" style="cursor: none;" title="HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 5" /><br  /> &nbsp;</div>Trong bài báo &quot;&quot;Whatcha Doin&#039; Today?&quot; chạm No.1 trên 9 bảng xếp hạng nhạc số&quot;, độc giả Naver chia sẻ:<br  /><br  />&quot;<span style="font-style: italic;">Rớt hạng nhanh thôi</span>&quot; - 125 vote đồng tình, 18 vote không đồng tình.<br  /><br  />&quot;<span style="font-style: italic;">MV của họ lại gây lùm xùm về gợi dục</span>&quot; - 80 vote đồng tình, 6 vote không đồng tình.<br  /><br  />&quot;<span style="font-style: italic;">Thật hả? Chỉ vì người ta tò mò nghe thử xem thế nào. Rồi cũng tụt hạng sớm thôi</span>&quot; - 80 vote đồng tình, 7 vote không đồng tình.', '', 1, 0, 1, 1, 1),
(12, '<div class="content"> <div> <span style="line-height: 1.6em;">MV mới nhất của <a href="http://kenh14.vn/katy-perry.html" target="_blank" title="Katy Perry"><span style="font-weight: bold;">Katy Perry</span></a>, &quot;Dark Horse&quot; đã thu về gần 40 triệu lượt xem trên YouTube sau 1 tuần lên sóng, tuy nhiên nó đang làm không ít người xem tức giận. Một cuộc thu thập chữ ký trên trang Change.org đã được tạo ra nhằm yêu cầu gỡ bỏ MV mới của<span style="font-weight: bold;"> Katy Perry</span> vì lý do <span style="font-style: italic;">&quot;báng bổ&quot;</span>:</span></div> <div> &nbsp;</div> <div> <span style="font-style: italic;">&quot;Tại thời điểm 01:15 trong video &quot;Dark Horse&quot;, một người đàn ông đã bị thiêu trong khi đang đeo một chiếc vòng (cũng bị thiêu) có chữ &quot;Allah&quot;, nghĩa là Chúa trong tiếng Ả Rập. Điều này cho thấy sự báng bổ rõ ràng trong video bởi <span style="font-weight: bold;">Katy Perry</span> (người tượng trưng cho sự đối lập với Chúa trong video) đã nhấn chìm một người tin vào Chúa cũng như từ &quot;Chúa&quot; trong lửa&quot;.</span></div> <div> &nbsp;</div> <div style="text-align: center;"> <p> <img alt="Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 1" src="http://kenh14.vcmedia.vn/k:QuickNewsK14/9639237/2014/02/img_201402271128466984/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg" style="line-height: 1.6em; max-width: 100%; cursor: none;" title="Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 1" /></p> <p> <img alt="Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 2" src="http://kenh14.vcmedia.vn/k:QuickNewsK14/9639237/2014/02/img_201402271308461277/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg" style="line-height: 1.6em; max-width: 100%; cursor: none;" title="Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 2" /></p> <div style="text-align:center;"> <img alt="Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 3" src="http://kenh14.vcmedia.vn/k:QuickNewsK14/9639237/2014/02/img_201402271308374117/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg" style="max-width: 100%; cursor: none;" title="Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 3" /></div> <div align="center"> <span style="font-style: italic;">&quot;Dark Horse&quot; MV - Katy Perry</span></div> </div> <div> Tuy nhiên, sau khi thu được hơn 60.000 chữ ký, cuộc vận động này đã bị đóng cửa. Phía <span style="font-weight: bold;">Katy Perry</span> hiện vẫn chưa lên tiếng về vụ việc. Hiện tại, &quot;Dark Horse&quot; vừa rớt hạng xuống No.2 trên Billboard Hot 100 tuần này.</div></div>', '', 1, 0, 1, 1, 1),
(13, 'Mở màn cho chuỗi chương trình Tôi tỏa sáng dành cho các ca sĩ trẻ đang được yêu thích, Noo Phước Thịnh và Minh Hằng đã có một đêm diễn hết mình với khán giả vào tối qua - 15/3. Trong suốt đêm nhạc, Noo Phước Thịnh và Minh Hằng cùng mang đến cho khán giả những phần biểu diễn được đầu tư khá hoành tráng.&nbsp;<div> &nbsp;</div><div style="text-align: center;"> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 1" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2541-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 1" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 2" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2549-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 2" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 3" src="http://k14.vcmedia.vn/k:EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2554-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 3" /></div><div style="text-align: center;"> <span style="font-style: italic;">Noo Phước Thịnh cùng Minh Hằng hát ca khúc mở màn cũng là chủ đề cho chương trình</span><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 4" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2556-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 4" /></div><div style="text-align: center;"> <span style="font-style: italic;">Ngô Kiến Huy đảm nhận vai trò MC cho đêm nhạc</span></div><div> &nbsp;</div><div> Noo Phước Thịnh tiếp tục chứng tỏ nội lực của mình khi vừa hát, vừa nhảy khá tốt từ đầu cho đến cuối chương trình. Không chỉ làm mới lại những bản hit đình đám từ ngày đầu đi hát, Noo Phước Thịnh còn tranh thủ chương trình lần này để giới thiệu dự án cover các ca khúc nổi tiếng đã được nhiều đàn anh, đàn chị thể hiện thành công. Nam ca sĩ thể hiện rất cảm xúc và tròn trịa những bài hát: Dấu yêu một thời, Một thoáng hương tình... Ngoài ra, màn song ca giữa Noo Phước Thịnh cùng A2 Lam Trường trong hai ca khúc Lắng nghe nước mắt và Ánh sáng đời tôi cũng khiến khán giả thích thú. Đặc biệt, Noo Phước Thịnh còn lần đầu tiên khoe khả năng khiêu vũ của mình trong chương trình lần này.</div><div> &nbsp;</div><div style="text-align: center;"> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 5" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2634-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 5" /></div><div style="text-align: center;"> &nbsp;</div><div style="text-align: center;"> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 6" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2828-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 6" /></div><div style="text-align: center;"> <span style="font-style: italic;">Noo Phước Thịnh khiến khán giả thỏa mãn với khả năng hát và nhảy tốt trong đêm nhạc</span></div><div style="text-align: center;"> &nbsp;</div><div style="text-align: center;"> <div> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 7" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2845-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 7" /><br  /> &nbsp;</div> <div> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 8" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2847-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 8" /></div> <div> <span style="font-style: italic;">Màn song ca giữa Noo Phước Thịnh cùng A2 Lam Trường mang đến nhiều cảm xúc cho khán giả</span></div></div><div> &nbsp;</div><div> Trong khi đó, biết rõ thế mạnh và điểm yếu của mình nên Minh Hằng đã tập trung tối đa vào phần hình ảnh. Trong các phần biểu diễn, Minh Hằng gây ấn tượng với khán giả bởi sự đầu tư khá công phu về ý tưởng, dàn dựng... và khả năng nhảy cực tốt. Đặc biệt, phần trang phục cũng được Minh Hằng chuẩn bị rất kĩ lưỡng cho từng tiết mục khác nhau và đều nhận được lời khen từ khán giả. Riêng màn kết hợp diễn nhạc kịch với khách mời Trấn Thành, Minh Hằng đã có màn thay đến... 5 bộ trang phục trong chớp nhoáng.<br  /> &nbsp;</div><div style="text-align: center;"> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 9" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2722-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 9" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 10" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2737-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 10" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 11" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2755-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 11" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 12" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2759-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 12" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 13" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2761-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 13" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 14" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2764-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 14" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 15" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2770-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 15" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 16" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2780-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 16" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 17" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2798-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 17" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 18" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2811-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 18" /></div><div style="text-align: center;"> <span style="font-style: italic;">Minh Hằng tập trung khai thác vào phần hình ảnh với những tiết mục được dàn dựng công phu và khả năng nhảy cực tốt. Riêng trong tiết mục song ca cùng Trấn Thành, Minh Hằng đã thay 5 bộ trang phục chớp nhoáng</span></div><div> &nbsp;</div><div> Sau gần 2 giờ đồng hồ diễn ra, chương trình Tôi tỏa sáng số đầu tiên khép lại tương đối thành công nhưng thật sự chưa làm hài lòng nhiều khán giả. Được quảng bá như một liveshow của&nbsp;Noo Phước Thịnh và Minh Hằng nhưng cách sắp xếp chương trình xen kẽ tiết mục giữa hai ca sĩ đã khiến đêm nhạc rời rạc, không theo một chuỗi nội dung, ý tưởng đúng như một đêm diễn với tên gọi là liveshow. Ngoài ra, phần âm thanh liên tục bị lỗi cũng là điểm trừ đáng tiếc làm giảm đi hiệu ứng biểu diễn của ca sĩ trên sân khấu.</div><div> &nbsp;</div><div> Một số hình ảnh khác trong đêm nhạc:</div><div style="text-align: center;"> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 19" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2560-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 19" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 20" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2582-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 20" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 21" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2595-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 21" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 22" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2606-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 22" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 23" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2620-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 23" /><br  /> &nbsp;</div><div style="text-align: center;"> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 24" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2623-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 24" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 25" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2635-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 25" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 26" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2646-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 26" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 27" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2649-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 27" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 28" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2677-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 28" /><br  /> <br  /> <img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 29" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2712-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 29" /><br  /> &nbsp;</div><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 30" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2859-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 30" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 31" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2869-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 31" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 32" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2890-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 32" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 33" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2895-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 33" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 34" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2905-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 34" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 35" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2929-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 35" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 36" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2939-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 36" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 37" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2945-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 37" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 38" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2953-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 38" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 39" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2962-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 39" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 40" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2987-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 40" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 41" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2993-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 41" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 42" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2998-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 42" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 43" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3029-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 43" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 44" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3034-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 44" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 45" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3043-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 45" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 46" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3057-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 46" /><br  /><br  /><img alt="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 47" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3061-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG" style="cursor: none;" title="Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 47" />', '', 1, 0, 1, 1, 1),
(14, '<div class="content"> <div> Suốt thời gian qua, tin đồn về mối quan hệ giữa Phương Mỹ Chi và Hiền Thục trở thành tâm điểm của báo chí. Đỉnh điểm của những ồn ào này là trong liveshow đầu tiên sau 25 năm ca hát của Hiền Thục hồi đầu tháng 3 vừa qua, Phương Mỹ Chi đã không thể có mặt. Tuy nhiên, cả hai cô trò đã nhanh chóng xóa bỏ tin đồn khi <a href="http://kenh14.vn/musik/hien-thuc-ra-suc-bao-ve-phuong-my-chi-20140221023950590.chn" target="_blank" title="Phương Mỹ Chi xuất hiện tại buổi họp báo">Phương Mỹ Chi xuất hiện tại buổi họp báo</a> và trong đoạn clip đặc biệt được phát trong liveshow Hiền Thục. Thần đồng nhạc dân ca đã ngỏ lời xin lỗi HLV của mình vì sự vắng mặt này. Phương Mỹ Chi cũng nhận được khá nhiều lời thông cảm, động viên từ chính Hiền Thục.&nbsp;</div> <div> &nbsp;</div> <div style="text-align: center;"> <img alt="Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 1" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/07/01/ht-%288%29-16e81/phuong-my-chi-moi-hien-thuc-hat-trong-dem-nhac-rieng.JPG" style="color: rgb(51, 51, 51); font-size: 16px; line-height: 22px; background-color: rgb(255, 255, 255); cursor: none;" title="Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 1" /></div> <div style="text-align: center;"> &nbsp;</div> <div style="text-align: center;"> <img alt="Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 2" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/07/01/ht-%289%29-16e81/phuong-my-chi-moi-hien-thuc-hat-trong-dem-nhac-rieng.JPG" style="color: rgb(51, 51, 51); font-size: 16px; line-height: 22px; background-color: rgb(255, 255, 255); cursor: none;" title="Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 2" /></div> <div> &nbsp;</div> <div> Chính vì vậy, trong đêm nhạc sắp tới tổ chức cùng Quang Lê mang chủ đề Ngôi sao đêm nay diễn ra vào ngày 22/3 tại Tp.HCM, Phương Mỹ Chi đã quyết định mời HLV Hiền Thục góp mặt và biểu diễn cùng mình.</div> <div> &nbsp;</div> <div> Nói về sự kết hợp lần này, Phương Mỹ Chi tâm sự: &quot;Con rất vui vì ba Quang Lê đã ngỏ lời mời và cô Thục cũng đồng ý xuất hiện trên sân khấu. Kể từ sau cuộc thi, con và cô Hiền Thục chưa có nhiều cơ hội để hát cùng nhau. Con thật sự rất tiếc khi liveshow Dấu ấn của cô Thục đã không thể có mặt. Chính vì thế lần này, con hy vọng tiết mục song ca cùng cô sẽ khiến khán giả hài lòng và thích thú&quot;.</div> <div> &nbsp;</div> <div style="text-align: center;"> <img alt="Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 3" src="http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2013/10/01/IMG_4031a-1dee0/phuong-my-chi-moi-hien-thuc-hat-trong-dem-nhac-rieng.jpg" style="color: rgb(51, 51, 51); font-size: 16px; line-height: 22px; background-color: rgb(255, 255, 255); cursor: none;" title="Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 3" /></div> <div> &nbsp;</div> <div> <div> Về phần mình, Hiền Thục cũng rất vui mừng khi lần đầu tiên đứng chung sân khấu với hai ba con Quang Lê - Phương Mỹ Chi. Nữ HLV The Voice tâm sự: &quot;Sau <a href="http://kenh14.vn/musik/my-tam-khao-hien-thuc-an-bun-mang-vit-de-het-that-tinh-20140302012359261.chn" target="_blank" title="liveshow Dấu ấn">liveshow Dấu ấn</a> nhận được nhiều tình cảm của khán giả tôi cảm thấy rất hạnh phúc. Dù khá bận rộn với các lịch diễn từ Nam đến Bắc nhưng khi được mời tham gia đêm nhạc của bé Chi thì tôi sẵn sàng nhận lời. Hai cô trò cũng đã trao đổi và chọn ca khúc ý nghĩa để thể hiện trên sân khấu&quot;.</div> <div> &nbsp;</div> <div> Được biết, trong liveshow này, Hiền Thục và Phương Mỹ Chi sẽ lần đầu tiên song ca ca khúc Nhật ký của mẹ với phần hỗ trợ của chính nhạc sĩ Nguyễn Văn Chung cùng các thành viên trong team The Voice Kids là Linh Lan và Lê Nguyên. Cả hai cô trò cũng sẽ có những phần hát đơn các ca khúc gắn liền với tên tuổi của mình.</div> </div></div>', '', 1, 0, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_bodytext`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_bodytext` (
  `id` int(11) unsigned NOT NULL,
  `bodytext` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_news_bodytext`
--

INSERT INTO `nv3_vi_news_bodytext` (`id`, `bodytext`) VALUES
(1, ' Sau khoảng thời gian dài lưu diễn kết hợp du lịch ở Úc và New Zealand để xả hơi và tự thưởng cho một năm 2013 thành công, Trịnh Thăng Bình vừa trở về Việt Nam và đã bắt tay vào hoàn tất phần hậu kỳ của MV Từ nay về sau. Đây là phần tiếp theo câu chuyện trong http://kenh14.vn/musik/trinh-thang-binh-vmusic-dong-loat-tung-du-an-cuoi-nam-20131215101422371.chn MV Đâu phải em chưa từng phát hành vào khoảng cuối năm 2013 vừa qua. http://k14.vcmedia.vn/thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/1-12504.jpg Câu chuyện trong MV Đâu phải em chưa từng kể về tình yêu đang say đắm của Trịnh Thăng Bình, anh vào vai một chàng trai đang chuẩn bị cầu hôn người yêu (Lại Hương Thảo thủ vai), nhưng cũng chính hôm ấy anh phát hiện ra người yêu lừa dối mình. Sau những tranh cãi, người yêu anh quyết định bỏ đi, để anh ở lại với những lựa chọn nên quyết định quay lại hay buông tay. Và ở Từ nay về sau, nhân vật của Trịnh Thăng Bình vẫn cố gắng níu kéo nhưng cuối cùng vẫn không thể thay đổi được gì... Sau khi giới thiệu MV Từ nay về sau đến khán giả, Trịnh Thăng Bình đang tiếp tục sản xuất album mới, đồng thời chuẩn bị cho mini liveshow nhân dịp sinh nhật của mình. http://k14.vcmedia.vn/thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/2-12504.jpg http://k14.vcmedia.vn/thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/3-12504.jpg'),
(11, 'Ngay http://kenh14.vn/musik/hyuna-khoe-nguc-lap-lo-trong-clip-moi-20140316113041943.chn từ khi tung teaser cho "Whatcha Doin&#039; Today?" (http://kenh14.vn/4minute.html 4Minute), http://kenh14.vn/hyuna-4minute.html HyunA đã lấy hết mọi sự chú ý của khán giả với cảnh khoe ngực khá gợi cảm, kèm theo một vài động tác vũ đạo nóng bỏng. Không nằm ngoài dự đoán, sau khi "thưởng thức" http://kenh14.vn/musik/hyuna-twerk-nhu-miley-trong-mv-moi-cua-4minute-2014031610569796.chn trọn vẹn những hình ảnh sexy trong MV này, netizen đã để lại nhiều ý kiến không mấy thiện chí đối với sự hở hang quá mức cần thiết của HyunA. http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA01-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 1 http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA02-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 2 http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA03-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 3 Độc giả Nate bình luận về cảnh quay từ trên cao, khoe ngực sexy của HyunA:"Họ không thể có một phần trình diễn không khoe da thịt như http://kenh14.vn/2ne1.html 2NE1 hay http://kenh14.vn/snsd.html Soshi được à?" - 416 vote đồng tình, 64 vote không đồng tình."Nhìn vào ảnh là đã thấy thực sự ghê rồi" - 386 vote đồng tình, 33 vote không đồng tình."Sức mạnh của sự trợ giúp y học" - 304 vote đồng tình, 44 vote không đồng tình."Nhưng không ai có thể giống HyunA... Chỉ mỗi ánh mắt là đã gợi cảm lắm rồi" - 31 vote đồng tình, 7 vote không đồng tình."Quảng cáo ồn ào. MV xuất hiện cuối bài rõ ràng là để câu khách" - 26 vote đồng tình, 1 vote không đồng tình."Nhưng MV được đính kèm cuối bài báo kìa. Tại sao phải dùng cái vụ ồn ào này để quảng bá cho ca khúc trở lại chứ?" - 23 vote đồng tình, 1 vote không đồng tình. http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA04-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 4 http://k14.vcmedia.vn/k:hybm9xcn884ndCWkeBIwKmY0VbVak/Image/2014/03/140318musicHA05-e3b68/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg HyunA (4Minute) &#039;hứng đá&#039; vì cảnh khoe ngực 5 Trong bài báo ""Whatcha Doin&#039; Today?" chạm No.1 trên 9 bảng xếp hạng nhạc số", độc giả Naver chia sẻ:"Rớt hạng nhanh thôi" - 125 vote đồng tình, 18 vote không đồng tình."MV của họ lại gây lùm xùm về gợi dục" - 80 vote đồng tình, 6 vote không đồng tình."Thật hả? Chỉ vì người ta tò mò nghe thử xem thế nào. Rồi cũng tụt hạng sớm thôi" - 80 vote đồng tình, 7 vote không đồng tình.'),
(12, ' MV mới nhất của http://kenh14.vn/katy-perry.html Katy Perry, "Dark Horse" đã thu về gần 40 triệu lượt xem trên YouTube sau 1 tuần lên sóng, tuy nhiên nó đang làm không ít người xem tức giận. Một cuộc thu thập chữ ký trên trang Change.org đã được tạo ra nhằm yêu cầu gỡ bỏ MV mới của Katy Perry vì lý do "báng bổ": "Tại thời điểm 01:15 trong video "Dark Horse", một người đàn ông đã bị thiêu trong khi đang đeo một chiếc vòng (cũng bị thiêu) có chữ "Allah", nghĩa là Chúa trong tiếng Ả Rập. Điều này cho thấy sự báng bổ rõ ràng trong video bởi Katy Perry (người tượng trưng cho sự đối lập với Chúa trong video) đã nhấn chìm một người tin vào Chúa cũng như từ "Chúa" trong lửa". http://kenh14.vcmedia.vn/k:QuickNewsK14/9639237/2014/02/img_201402271128466984/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 1 http://kenh14.vcmedia.vn/k:QuickNewsK14/9639237/2014/02/img_201402271308461277/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 2 http://kenh14.vcmedia.vn/k:QuickNewsK14/9639237/2014/02/img_201402271308374117/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &#039;báng bổ&#039; 3 "Dark Horse" MV - Katy Perry Tuy nhiên, sau khi thu được hơn 60.000 chữ ký, cuộc vận động này đã bị đóng cửa. Phía Katy Perry hiện vẫn chưa lên tiếng về vụ việc. Hiện tại, "Dark Horse" vừa rớt hạng xuống No.2 trên Billboard Hot 100 tuần này.'),
(13, 'Mở màn cho chuỗi chương trình Tôi tỏa sáng dành cho các ca sĩ trẻ đang được yêu thích, Noo Phước Thịnh và Minh Hằng đã có một đêm diễn hết mình với khán giả vào tối qua - 15/3. Trong suốt đêm nhạc, Noo Phước Thịnh và Minh Hằng cùng mang đến cho khán giả những phần biểu diễn được đầu tư khá hoành tráng. http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2541-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 1 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2549-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 2 http://k14.vcmedia.vn/k:EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2554-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 3 Noo Phước Thịnh cùng Minh Hằng hát ca khúc mở màn cũng là chủ đề cho chương trình http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2556-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 4 Ngô Kiến Huy đảm nhận vai trò MC cho đêm nhạc Noo Phước Thịnh tiếp tục chứng tỏ nội lực của mình khi vừa hát, vừa nhảy khá tốt từ đầu cho đến cuối chương trình. Không chỉ làm mới lại những bản hit đình đám từ ngày đầu đi hát, Noo Phước Thịnh còn tranh thủ chương trình lần này để giới thiệu dự án cover các ca khúc nổi tiếng đã được nhiều đàn anh, đàn chị thể hiện thành công. Nam ca sĩ thể hiện rất cảm xúc và tròn trịa những bài hát: Dấu yêu một thời, Một thoáng hương tình... Ngoài ra, màn song ca giữa Noo Phước Thịnh cùng A2 Lam Trường trong hai ca khúc Lắng nghe nước mắt và Ánh sáng đời tôi cũng khiến khán giả thích thú. Đặc biệt, Noo Phước Thịnh còn lần đầu tiên khoe khả năng khiêu vũ của mình trong chương trình lần này. http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2634-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 5 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2828-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 6 Noo Phước Thịnh khiến khán giả thỏa mãn với khả năng hát và nhảy tốt trong đêm nhạc http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2845-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 7 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2847-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 8 Màn song ca giữa Noo Phước Thịnh cùng A2 Lam Trường mang đến nhiều cảm xúc cho khán giả Trong khi đó, biết rõ thế mạnh và điểm yếu của mình nên Minh Hằng đã tập trung tối đa vào phần hình ảnh. Trong các phần biểu diễn, Minh Hằng gây ấn tượng với khán giả bởi sự đầu tư khá công phu về ý tưởng, dàn dựng... và khả năng nhảy cực tốt. Đặc biệt, phần trang phục cũng được Minh Hằng chuẩn bị rất kĩ lưỡng cho từng tiết mục khác nhau và đều nhận được lời khen từ khán giả. Riêng màn kết hợp diễn nhạc kịch với khách mời Trấn Thành, Minh Hằng đã có màn thay đến... 5 bộ trang phục trong chớp nhoáng. http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2722-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 9 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2737-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 10 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2755-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 11 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2759-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 12 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2761-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 13 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2764-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 14 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2770-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 15 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2780-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 16 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2798-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 17 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2811-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 18 Minh Hằng tập trung khai thác vào phần hình ảnh với những tiết mục được dàn dựng công phu và khả năng nhảy cực tốt. Riêng trong tiết mục song ca cùng Trấn Thành, Minh Hằng đã thay 5 bộ trang phục chớp nhoáng Sau gần 2 giờ đồng hồ diễn ra, chương trình Tôi tỏa sáng số đầu tiên khép lại tương đối thành công nhưng thật sự chưa làm hài lòng nhiều khán giả. Được quảng bá như một liveshow của Noo Phước Thịnh và Minh Hằng nhưng cách sắp xếp chương trình xen kẽ tiết mục giữa hai ca sĩ đã khiến đêm nhạc rời rạc, không theo một chuỗi nội dung, ý tưởng đúng như một đêm diễn với tên gọi là liveshow. Ngoài ra, phần âm thanh liên tục bị lỗi cũng là điểm trừ đáng tiếc làm giảm đi hiệu ứng biểu diễn của ca sĩ trên sân khấu. Một số hình ảnh khác trong đêm nhạc: http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2560-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 19 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2582-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 20 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2595-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 21 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2606-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 22 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2620-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 23 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2623-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 24 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2635-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 25 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2646-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 26 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2649-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 27 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2677-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 28 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2712-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 29 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2859-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 30 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2869-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 31 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2890-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 32 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2895-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 33 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2905-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 34 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2929-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 35 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2939-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 36 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2945-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 37 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2953-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 38 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2962-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 39 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2987-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 40 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2993-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 41 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_2998-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 42 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3029-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 43 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3034-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 44 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3043-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 45 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3057-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 46 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/08/IMG_3061-97780/noo-phuoc-thinh-hat-nhay-cuc-sung-minh-hang-thay-trang-phuc-chop-nhoang.JPG Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng 47'),
(14, ' Suốt thời gian qua, tin đồn về mối quan hệ giữa Phương Mỹ Chi và Hiền Thục trở thành tâm điểm của báo chí. Đỉnh điểm của những ồn ào này là trong liveshow đầu tiên sau 25 năm ca hát của Hiền Thục hồi đầu tháng 3 vừa qua, Phương Mỹ Chi đã không thể có mặt. Tuy nhiên, cả hai cô trò đã nhanh chóng xóa bỏ tin đồn khi http://kenh14.vn/musik/hien-thuc-ra-suc-bao-ve-phuong-my-chi-20140221023950590.chn Phương Mỹ Chi xuất hiện tại buổi họp báo và trong đoạn clip đặc biệt được phát trong liveshow Hiền Thục. Thần đồng nhạc dân ca đã ngỏ lời xin lỗi HLV của mình vì sự vắng mặt này. Phương Mỹ Chi cũng nhận được khá nhiều lời thông cảm, động viên từ chính Hiền Thục. http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/07/01/ht-%288%29-16e81/phuong-my-chi-moi-hien-thuc-hat-trong-dem-nhac-rieng.JPG Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 1 http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2014/07/01/ht-%289%29-16e81/phuong-my-chi-moi-hien-thuc-hat-trong-dem-nhac-rieng.JPG Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 2 Chính vì vậy, trong đêm nhạc sắp tới tổ chức cùng Quang Lê mang chủ đề Ngôi sao đêm nay diễn ra vào ngày 22/3 tại Tp.HCM, Phương Mỹ Chi đã quyết định mời HLV Hiền Thục góp mặt và biểu diễn cùng mình. Nói về sự kết hợp lần này, Phương Mỹ Chi tâm sự: "Con rất vui vì ba Quang Lê đã ngỏ lời mời và cô Thục cũng đồng ý xuất hiện trên sân khấu. Kể từ sau cuộc thi, con và cô Hiền Thục chưa có nhiều cơ hội để hát cùng nhau. Con thật sự rất tiếc khi liveshow Dấu ấn của cô Thục đã không thể có mặt. Chính vì thế lần này, con hy vọng tiết mục song ca cùng cô sẽ khiến khán giả hài lòng và thích thú". http://k14.vcmedia.vn/k:thumb_w/600/EFArAxSbfRMRi1CGjBAhXbItoobDMS/Image/2013/10/01/IMG_4031a-1dee0/phuong-my-chi-moi-hien-thuc-hat-trong-dem-nhac-rieng.jpg Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng 3 Về phần mình, Hiền Thục cũng rất vui mừng khi lần đầu tiên đứng chung sân khấu với hai ba con Quang Lê - Phương Mỹ Chi. Nữ HLV The Voice tâm sự: "Sau http://kenh14.vn/musik/my-tam-khao-hien-thuc-an-bun-mang-vit-de-het-that-tinh-20140302012359261.chn liveshow Dấu ấn nhận được nhiều tình cảm của khán giả tôi cảm thấy rất hạnh phúc. Dù khá bận rộn với các lịch diễn từ Nam đến Bắc nhưng khi được mời tham gia đêm nhạc của bé Chi thì tôi sẵn sàng nhận lời. Hai cô trò cũng đã trao đổi và chọn ca khúc ý nghĩa để thể hiện trên sân khấu". Được biết, trong liveshow này, Hiền Thục và Phương Mỹ Chi sẽ lần đầu tiên song ca ca khúc Nhật ký của mẹ với phần hỗ trợ của chính nhạc sĩ Nguyễn Văn Chung cùng các thành viên trong team The Voice Kids là Linh Lan và Lê Nguyên. Cả hai cô trò cũng sẽ có những phần hát đơn các ca khúc gắn liền với tên tuổi của mình. ');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_cat`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_cat` (
  `catid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `parentid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL,
  `titlesite` varchar(255) NOT NULL,
  `alias` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `thumbnail` varchar(255) NOT NULL DEFAULT '',
  `weight` smallint(4) unsigned NOT NULL DEFAULT '0',
  `order` mediumint(8) NOT NULL DEFAULT '0',
  `lev` smallint(4) NOT NULL DEFAULT '0',
  `viewcat` varchar(50) NOT NULL DEFAULT 'viewcat_page_new',
  `numsubcat` int(11) NOT NULL DEFAULT '0',
  `subcatid` varchar(255) NOT NULL DEFAULT '',
  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `numlinks` tinyint(2) unsigned NOT NULL DEFAULT '3',
  `keywords` mediumtext NOT NULL,
  `admins` mediumtext NOT NULL,
  `add_time` int(11) unsigned NOT NULL DEFAULT '0',
  `edit_time` int(11) unsigned NOT NULL DEFAULT '0',
  `who_view` tinyint(2) unsigned NOT NULL DEFAULT '0',
  `groups_view` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`catid`),
  UNIQUE KEY `alias` (`alias`),
  KEY `parentid` (`parentid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `nv3_vi_news_cat`
--

INSERT INTO `nv3_vi_news_cat` (`catid`, `parentid`, `title`, `titlesite`, `alias`, `description`, `image`, `thumbnail`, `weight`, `order`, `lev`, `viewcat`, `numsubcat`, `subcatid`, `inhome`, `numlinks`, `keywords`, `admins`, `add_time`, `edit_time`, `who_view`, `groups_view`) VALUES
(1, 0, 'Music Blog', '', 'Music-Blog', '', '', '', 1, 1, 0, 'viewcat_page_new', 3, '8,12,9', 1, 5, '', '', 1274986690, 1395195000, 0, ''),
(8, 1, 'Thông cáo báo chí', '', 'thong-cao-bao-chi', '', '', '', 1, 2, 1, 'viewcat_page_new', 0, '', 1, 4, '', '', 1274987105, 1274987244, 0, ''),
(9, 1, 'Tin công nghệ', '', 'Tin-cong-nghe', '', '', '', 3, 4, 1, 'viewcat_page_new', 0, '', 1, 4, '', '', 1274987212, 1274987212, 0, ''),
(12, 1, 'Bản tin nội bộ', '', 'Ban-tin-noi-bo', '', '', '', 2, 3, 1, 'viewcat_page_new', 0, '', 1, 4, '', '', 1274987902, 1274987902, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_comments`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_comments` (
  `cid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `content` mediumtext NOT NULL,
  `post_time` int(11) unsigned NOT NULL DEFAULT '0',
  `userid` int(11) NOT NULL DEFAULT '0',
  `post_name` varchar(100) NOT NULL,
  `post_email` varchar(100) NOT NULL,
  `post_ip` varchar(15) NOT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`),
  KEY `post_time` (`post_time`),
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_config_post`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_config_post` (
  `pid` mediumint(9) NOT NULL AUTO_INCREMENT,
  `member` tinyint(4) NOT NULL,
  `group_id` mediumint(9) NOT NULL,
  `addcontent` tinyint(4) NOT NULL,
  `postcontent` tinyint(4) NOT NULL,
  `editcontent` tinyint(4) NOT NULL,
  `delcontent` tinyint(4) NOT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `member` (`member`,`group_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `nv3_vi_news_config_post`
--

INSERT INTO `nv3_vi_news_config_post` (`pid`, `member`, `group_id`, `addcontent`, `postcontent`, `editcontent`, `delcontent`) VALUES
(1, 0, 0, 0, 0, 0, 0),
(2, 1, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_rows`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_rows` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `catid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `listcatid` varchar(255) NOT NULL DEFAULT '',
  `topicid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `author` varchar(255) NOT NULL DEFAULT '',
  `sourceid` mediumint(8) NOT NULL DEFAULT '0',
  `addtime` int(11) unsigned NOT NULL DEFAULT '0',
  `edittime` int(11) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `publtime` int(11) unsigned NOT NULL DEFAULT '0',
  `exptime` int(11) unsigned NOT NULL DEFAULT '0',
  `archive` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `hometext` mediumtext NOT NULL,
  `homeimgfile` varchar(255) NOT NULL DEFAULT '',
  `homeimgalt` varchar(255) NOT NULL DEFAULT '',
  `homeimgthumb` varchar(255) NOT NULL DEFAULT '',
  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_comm` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `allowed_rating` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `hitstotal` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `hitscm` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `total_rating` int(11) NOT NULL DEFAULT '0',
  `click_rating` int(11) NOT NULL DEFAULT '0',
  `keywords` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `catid` (`catid`),
  KEY `topicid` (`topicid`),
  KEY `admin_id` (`admin_id`),
  KEY `author` (`author`),
  KEY `title` (`title`),
  KEY `addtime` (`addtime`),
  KEY `publtime` (`publtime`),
  KEY `exptime` (`exptime`),
  KEY `status` (`status`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `nv3_vi_news_rows`
--

INSERT INTO `nv3_vi_news_rows` (`id`, `catid`, `listcatid`, `topicid`, `admin_id`, `author`, `sourceid`, `addtime`, `edittime`, `status`, `publtime`, `exptime`, `archive`, `title`, `alias`, `hometext`, `homeimgfile`, `homeimgalt`, `homeimgthumb`, `inhome`, `allowed_comm`, `allowed_rating`, `hitstotal`, `hitscm`, `total_rating`, `click_rating`, `keywords`) VALUES
(1, 1, '1,8,12', 0, 1, '', 0, 1274989177, 1395195147, 1, 1274989177, 0, 2, 'Trịnh Thăng Bình cố gắng níu kéo dù bị Lại Hương Thảo phản bội', 'Trinh-Thang-Binh-co-gang-niu-keo-du-bi-Lai-Huong-Thao-phan-boi', 'Trịnh Thăng Bình và Lại Hương Thảo tiếp tục vào vai đôi tình nhân không hạnh phúc trong MV mới của nam ca sĩ.', '2014_03/1-12504.jpg', 'Thành lập VINADES.,JSC', 'thumb/1-12504.jpg|block/1-12504.jpg', 1, 2, 1, 3, 0, 0, 0, 'nguồn mở, quen thuộc, cộng đồng, việt nam, hoạt động, gần đây, phổ biến, áp dụng, hầu hết, hết các, lĩnh vực, tin tức, thương mại điện, điện tử, cá nhân, hệ thống'),
(11, 1, '1', 0, 1, '', 0, 1395195297, 1395195297, 1, 1395195297, 0, 2, 'HyunA &#40;4Minute&#41; &quot;hứng đá&quot; vì cảnh khoe ngực', 'HyunA-4Minute-hung-da-vi-canh-khoe-nguc', 'Cảnh quay khoe ngực từ trên xuống của HyunA trong MV &quot;Whatcha Doin&#039; Today?&quot; ngay lập tức vấp phải khá nhiều chỉ trích.', '2014_03/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg', '', 'thumb/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg|block/hyuna-4minute-hung-da-vi-canh-khoe-nguc.jpg', 1, 2, 1, 0, 0, 0, 0, 'ngay lập tức'),
(12, 1, '1', 0, 1, '', 0, 1395195463, 1395195463, 1, 1395195463, 0, 2, 'Hàng chục nghìn người ký tên đòi gỡ MV của Katy Perry vì &quot;báng bổ&quot;', 'Hang-chuc-nghin-nguoi-ky-ten-doi-go-MV-cua-Katy-Perry-vi-bang-bo', 'Mới ra mắt được 1 tuần nhưng MV &quot;Dark Horse&quot; của Katy Perry đã làm không ít người xem tức giận.', '2014_03/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg', '', 'thumb/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg|block/hang-chuc-nghin-nguoi-ky-ten-doi-go-mv-cua-katy-perry-vi-bang-bo.jpg', 1, 2, 1, 0, 0, 0, 0, 'ra mắt'),
(13, 1, '1', 0, 1, '', 0, 1395195568, 1395195568, 1, 1395195568, 0, 2, 'Noo Phước Thịnh hát - nhảy cực sung, Minh Hằng thay trang phục chớp nhoáng', 'Noo-Phuoc-Thinh-hat-nhay-cuc-sung-Minh-Hang-thay-trang-phuc-chop-nhoang', 'Đêm nhạc riêng của Noo Phước Thịnh - Minh Hằng đã diễn ra tối qua và nhận được nhiều phản hồi từ khán giả.', '2014_03/img_2549-97780.jpg', '', 'thumb/img_2549-97780.jpg|block/img_2549-97780.jpg', 1, 2, 1, 4, 0, 0, 0, 'phản hồi'),
(14, 1, '1', 0, 1, '', 0, 1395195845, 1395195845, 1, 1395195845, 0, 2, 'Phương Mỹ Chi mời Hiền Thục hát trong đêm nhạc riêng', 'Phuong-My-Chi-moi-Hien-Thuc-hat-trong-dem-nhac-rieng', 'Sau khi lỡ hẹn xuất hiện trong liveshow của Hiền Thục, Phương Mỹ Chi đã mời HLV tham gia vào đêm nhạc của mình cùng bố nuôi Quang Lê.', '2014_03/ht-28829-16e81.jpg', '', 'thumb/ht-28829-16e81.jpg|block/ht-28829-16e81.jpg', 1, 2, 1, 0, 0, 0, 0, 'xuất hiện,tham gia');

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_sources`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_sources` (
  `sourceid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `link` varchar(255) NOT NULL DEFAULT '',
  `logo` varchar(255) NOT NULL DEFAULT '',
  `weight` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `add_time` int(11) unsigned NOT NULL,
  `edit_time` int(11) unsigned NOT NULL,
  PRIMARY KEY (`sourceid`),
  UNIQUE KEY `title` (`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_news_topics`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_news_topics` (
  `topicid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `weight` smallint(4) NOT NULL DEFAULT '0',
  `keywords` mediumtext NOT NULL,
  `add_time` int(11) NOT NULL DEFAULT '0',
  `edit_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`topicid`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `alias` (`alias`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `nv3_vi_news_topics`
--

INSERT INTO `nv3_vi_news_topics` (`topicid`, `title`, `alias`, `image`, `thumbnail`, `description`, `weight`, `keywords`, `add_time`, `edit_time`) VALUES
(1, 'NukeViet 3', 'NukeViet-3', '', '', 'NukeViet 3', 1, 'NukeViet 3', 1274990212, 1274990212);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_referer_stats`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_referer_stats` (
  `host` varchar(255) NOT NULL,
  `total` int(11) NOT NULL DEFAULT '0',
  `month01` int(11) NOT NULL DEFAULT '0',
  `month02` int(11) NOT NULL DEFAULT '0',
  `month03` int(11) NOT NULL DEFAULT '0',
  `month04` int(11) NOT NULL DEFAULT '0',
  `month05` int(11) NOT NULL DEFAULT '0',
  `month06` int(11) NOT NULL DEFAULT '0',
  `month07` int(11) NOT NULL DEFAULT '0',
  `month08` int(11) NOT NULL DEFAULT '0',
  `month09` int(11) NOT NULL DEFAULT '0',
  `month10` int(11) NOT NULL DEFAULT '0',
  `month11` int(11) NOT NULL DEFAULT '0',
  `month12` int(11) NOT NULL DEFAULT '0',
  `last_update` int(11) NOT NULL DEFAULT '0',
  UNIQUE KEY `host` (`host`),
  KEY `total` (`total`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nv3_vi_referer_stats`
--

INSERT INTO `nv3_vi_referer_stats` (`host`, `total`, `month01`, `month02`, `month03`, `month04`, `month05`, `month06`, `month07`, `month08`, `month09`, `month10`, `month11`, `month12`, `last_update`) VALUES
('megacode.vn', 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1395371954);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_searchkeys`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_searchkeys` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `keys` varchar(255) NOT NULL,
  `total` int(11) NOT NULL DEFAULT '0',
  `search_engine` varchar(50) NOT NULL,
  KEY `id` (`id`),
  KEY `keys` (`keys`),
  KEY `search_engine` (`search_engine`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_voting`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_voting` (
  `vid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL DEFAULT '',
  `acceptcm` int(2) NOT NULL DEFAULT '1',
  `admin_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `who_view` tinyint(2) unsigned NOT NULL DEFAULT '0',
  `groups_view` varchar(255) NOT NULL,
  `publ_time` int(11) unsigned NOT NULL DEFAULT '0',
  `exp_time` int(11) unsigned NOT NULL DEFAULT '0',
  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`vid`),
  UNIQUE KEY `question` (`question`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `nv3_vi_voting`
--

INSERT INTO `nv3_vi_voting` (`vid`, `question`, `link`, `acceptcm`, `admin_id`, `who_view`, `groups_view`, `publ_time`, `exp_time`, `act`) VALUES
(2, 'Bạn biết gì về NukeViet 3?', '', 1, 1, 0, '0', 1275318563, 0, 1),
(3, 'Bạn quan tâm gì nhất ở mã nguồn mở?', '', 1, 1, 0, '0', 1275318589, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nv3_vi_voting_rows`
--

CREATE TABLE IF NOT EXISTS `nv3_vi_voting_rows` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `vid` int(11) unsigned NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `hitstotal` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `vid` (`vid`,`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `nv3_vi_voting_rows`
--

INSERT INTO `nv3_vi_voting_rows` (`id`, `vid`, `title`, `url`, `hitstotal`) VALUES
(5, 2, 'Một bộ sourcecode cho web hoàn toàn mới.', '', 0),
(6, 2, 'Mã nguồn mở, sử dụng miễn phí.', '', 0),
(7, 2, 'Sử dụng xHTML, CSS và hỗ trợ Ajax', '', 0),
(8, 2, 'Tất cả các ý kiến trên', '', 0),
(9, 3, 'Liên tục được cải tiến, sửa đổi bởi cả thế giới.', '', 0),
(10, 3, 'Được sử dụng miễn phí không mất tiền.', '', 0),
(11, 3, 'Được tự do khám phá, sửa đổi theo ý thích.', '', 0),
(12, 3, 'Phù hợp để học tập, nghiên cứu vì được tự do sửa đổi theo ý thích.', '', 0),
(13, 3, 'Tất cả các ý kiến trên', '', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
