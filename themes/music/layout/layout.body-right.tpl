<!-- BEGIN: main -->
{FILE "header.tpl"}
<link rel="stylesheet" type="text/css" media="all" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/topic.css" />
<link rel="stylesheet" type="text/css" media="all" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/detail.css" />
<link rel="stylesheet" type="text/css" media="all" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/listenToSong.css" />
<link rel="stylesheet" type="text/css" media="all" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/listenToAlbum.css" />
<link rel="stylesheet" type="text/css" media="all" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/rankTableHome.css" />

<div id="fb-root"></div>
<script>(function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1";
   fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<div id="left-body">
   	{MODULE_CONTENT}
</div>
<div id="right-body">
 [REAL]
   [SONG]
   
   <div class="rb-container" id="compRankTable" style="z-index: 11">
      [BXH]
   </div>
  
</div>
</div>
{FILE "footer.tpl"}
<!-- END: main -->

