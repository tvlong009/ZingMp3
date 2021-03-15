<!-- BEGIN: main -->
<!-- BEGIN: singer_info -->
<div class="mg10 ms-shwrap">
	<div class="ms-shimg">
		<img class="fl musicsmalllalbum" src="{SDATA.thumb}" alt="{SDATA.tenthat}" width="100" height="100"/>
	</div>
	<div class="ms-shdetail" id="singersdetail">
		<h2 class="medium greencolor">{SDATA.tenthat}</h2>
		{SDATA.introduction}
	</div>
	<div class="ms-shshow">
		<a href="javascript:void(0);" rel="0|{LANG.view_expand}|{LANG.view_collapse}|singersdetail" class="musicicon zoomin greencolor ms-shd" title="{LANG.view_expand}">{LANG.view_expand}</a>
	</div>
	<div class="clear"></div>
</div>
<!-- END: singer_info -->
<div class="clear"></div>
<!-- BEGIN: typesong -->
<div class="box-music-search">
      <h3 class="box-music-header keeng-h3-header">
      		{LANG.search_find} <a class="link">{NUM_RESULT} </a>{LANG.results}
      </h3>
      <div class="list-bxh">
         <ul class="music-hot-list panelhiddenPlayerMagic5327bbf02ddb4">
         <!-- BEGIN: loop -->
            <li class="parent-player iparent5327bbf0375f3">
               <a class="icon-play" href="{SONG.url_listen}"></a>
               <div class="content">
                  <a title="{SONG.name}" href="{SONG.url_listen}" class="link name-song color isongname">{SONG.name}</a>                                   
                  <p class="name-single">
                  <a title="{SONG.singer}" href="{SONG.url_search_singer}" class="link under">{SONG.singer}</a></p>
               </div>
               <div class="control-media3">
                  <p style="width: 0px;" class="left iproccess5327bbf0375f3"></p>
                  <p class="right"></p>
               </div>
            </li>
            <!-- END: loop -->
         </ul>
      </div>
   </div>
<!-- END: typesong -->

<!-- BEGIN: typealbum -->
<!-- BEGIN: loop -->
	<a href="{ALBUM.albumview}" title="{LANG.listen_album} {ALBUM.albumname}">
		<img alt="{ALBUM.albumname}" class="musicsmalllalbum fl" width="100" height="100" src="{ALBUM.thumb}" />
	</a>
	<h2 class="medium">
		<a href="{ALBUM.albumview}" title="{LANG.listen_album} {ALBUM.albumname}">{ALBUM.albumname}</a> - 
		<a title="{ALBUM.albumsinger}" href="{ALBUM.url_search_singer}">{ALBUM.albumsinger}</a>
		<!-- BEGIN: hit --><span class="musicicon mhit hitsong">&nbsp;&nbsp;&nbsp;</span><!-- END: hit -->
	</h2>
	<p>{LANG.who_create_1}: <a class="singer" title="{ALBUM.upboi}" href="{ALBUM.url_search_upload}">{ALBUM.upboi}</a> | {LANG.view}: {ALBUM.numview}</p>
	{ALBUM.describe}
	<div class="clear"></div>
	<div class="hr"></div>
<!-- END: loop -->
<!-- END: typealbum -->

<!-- BEGIN: typeplaylist -->
<!-- BEGIN: loop -->
	<a href="{PLAYLIST.link}" title="{LANG.playlist_listen} {PLAYLIST.name}">
		<img alt="{PLAYLIST.name}" class="musicsmalllalbum fl" width="100" height="100" src="{PLAYLIST.thumb}" />
	</a>
	<h2 class="medium">
		<a href="{PLAYLIST.link}" title="{LANG.playlist_listen} {PLAYLIST.name}">{PLAYLIST.name}</a> - 
		<a title="{PLAYLIST.singer}" href="{PLAYLIST.url_search_singer}">{PLAYLIST.singer}</a>
	</h2>
	<p>{LANG.who_create_1}: <a class="singer" title="{PLAYLIST.username}" href="{PLAYLIST.url_search_upload}">{PLAYLIST.username}</a> | {LANG.view}: {PLAYLIST.view}</p>
	{PLAYLIST.message}
	<div class="clear"></div>
	<div class="hr"></div>
<!-- END: loop -->
<!-- END: typeplaylist -->

<!-- BEGIN: typevideo -->
<div class="video-list">
  <div class="box-list">
    	<div class="row">
        <!-- BEGIN: loop -->
  	        	 <div class="item">
  			<span class="wrap">   				
  				<a href="{VIDEO.videoview}" class="link">
                <img src="{VIDEO.thumb}"><span class="icon-play"></span></a>  			
                </span> <!-- BEGIN: hit --><span class="musicicon mhit hitsong">&nbsp;&nbsp;&nbsp;</span><!-- END: hit --> 
  			<a title="{VIDEO.videoname}" href="{VIDEO.videoview}" class="link name-song under">{VIDEO.videoname}</a>           
            <p class="name-single"><a title="{VIDEO.videosinger}" href="{VIDEO.s_video}" class="link under">{VIDEO.videosinger}</a></p>      </div>
            <!-- END: loop -->
              
    </div>
  </div>
</div>
<!-- END: typevideo -->

<!-- BEGIN: gennerate_page -->
<div class="clear"></div>
<div class="hr"></div>
<div class="mcenter">{GENNERATE_PAGE}</div>
<!-- END: gennerate_page -->

<!-- END: main -->