<!-- BEGIN: main -->
<script type="text/javascript" src="{base_url}jwplayer.js"></script>
<div class=" box-play-music">
<h3 playingid="216340" title="{DATA.name}" class="name-song"><span class="ping">{DATA.name}</span>&nbsp;-&nbsp; <p class="name-single"><a title="{DATA.singer}" href="{DATA.url_search_singer}" class="link under">{DATA.singer}</a></p> <!-- BEGIN: hit --><span class="musicicon mhit hitsong">&nbsp;&nbsp;&nbsp;</span><!-- END: hit -->
  </h3>
    <span class="statis">
    {LANG.category_2}: 
    <a title="{DATA.category}" href="{DATA.url_search_category}" class="link tl under">{DATA.category}</a>    &nbsp;|&nbsp;<!-- BEGIN: subcat --> / <a class="singer" href="{SUBCAT.url}" title="{SUBCAT.name}">{SUBCAT.name}&nbsp;</a>
	<!-- END: subcat --> |
     {LANG.view1}: {DATA.view}
    </span>
<div class="alboxw">
	<div class="alwrap">
		<div id="player">Loading the player...</div>
		<script type="text/javascript">
		var player_width = $('#player').width();
		var player_height = parseInt(player_width * 9.65 / 16);
		jwplayer("player").setup({
			flashplayer: "{base_url}player.swf", file: "{DATA.link}", image: "{ads}", controlbar: "bottom",menu:false,
			volume: 100, height: player_height, width: player_width, repeat: "always", autostart: "true"
		});
		</script>
	</div>
</div>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js">{lang: '{NV_LANG_INTERFACE}'}</script>
<script type="text/javascript">
var url_share = u=location.href;
var title_share = document.title;
function share_facebook(){window.open("http://www.facebook.com/share.php?u="+encodeURIComponent(url_share)+"&t="+encodeURIComponent(title_share))}
function share_yahoo(){window.open("http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&u="+encodeURIComponent(url_share)+"&t="+encodeURIComponent(title_share)+"&d=")}
function share_zingme(){window.open("http://link.apps.zing.vn/share?url="+encodeURIComponent(url_share)+"&title="+encodeURIComponent(title_share))}
</script>
</div>
<ul class="mlo-tool fl">
	<li class="tool"><a href="javascript:void(0);">{LANG.send_to}</a></li>
</ul>
	<div class="box_content_player">
                        <div class="boxContentNowPlaying" id="divShowInfo">
                        <div class="box_share"> 
                                <span class="title_name_share"><strong>Chia sẻ</strong></span>
                                <ul class="listshare" style="margin-top:10px;">
                                   <a class="musicicon mfacebook" href="javascript:void(0);" onclick="share_facebook();"></a>
                                    <a class="musicicon mzingme" href="javascript:void(0);" onclick="share_zingme();"></a>
                                    <a class="musicicon myahoo" href="javascript:void(0);" onclick="share_yahoo();"></a>
                                    <g:plusone size="small" annotation="none"></g:plusone>
                                    <a rel="nofollow" class="musicicon memail" href="javascript:void(0);" onclick="NewWindow('{SDATA.send_mail_url}','SendMail','500','500','no');return false;" ></a>
                                    <a class="musicicon mvote" href="javascript:void(0);" onclick="votethissong('{SDATA.song_id}')"></a>
                                    <li style="display:none" id="vote">{SDATA.song_vote}</li>                          
                                </ul>                                                        
                            </div>
                            <div class="box_share"> 
                                <p class="title_name_share"><strong>{LANG.blog_song}</strong></p>                  
                                <input class="input share_button_input" id="blogsong" onclick="Select_all('blogsong');" type="text" value="&lt;object id=&quot;player&quot; classid=&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot; name=&quot;player&quot; width=&quot;500&quot; height=&quot;350&quot;&gt; &lt;param name=&quot;movie&quot; value=&quot;{playerurl}player.swf&quot; /&gt; &lt;param name=&quot;allowfullscreen&quot; value=&quot;false&quot; /&gt; &lt;param name=&quot;allowscriptaccess&quot; value=&quot;always&quot; /&gt; &lt;param name=&quot;flashvars&quot; value=&quot;file={DATA.creat_link_url}&amp;amp;bufferlength=10&amp;amp;volume=100&amp;amp;playlist=bottom&amp;amp;playlistsize=1&amp;amp;autostart=true&amp;amp;repeat=always&amp;amp;controlbar=bottom&amp;amp;dock=false&quot; /&gt; &lt;embed  type=&quot;application/x-shockwave-flash&quot; id=&quot;player2&quot; name=&quot;player2&quot; src=&quot;{playerurl}player.swf&quot; width=&quot;500&quot; height=&quot;350&quot; allowscriptaccess=&quot;always&quot; allowfullscreen=&quot;false&quot; flashvars=&quot;file={DATA.creat_link_url}&amp;amp;bufferlength=10&amp;amp;volume=100&amp;amp;playlist=bottom&amp;amp;playlistsize=1&amp;amp;autostart=true&amp;amp;repeat=always&amp;amp;controlbar=bottom&amp;amp;dock=false&quot; /&gt;&lt;/object&gt;" readonly="readonly">
                            </div>
                            <div class="box_share"> 
                                <p class="title_name_share"><strong>{LANG.forum_song}</strong></p>                  
                                <input class="input share_button_input" id="songforum" onClick="Select_all('songforum');" type="text" value="[FLASH]{playerurl}player.swf?file={DATA.creat_link_url}[/FLASH]" readonly="readonly">
                            </div>
                            <div class="box_share"> 
                                <p class="title_name_share"><strong>{LANG.video_link}</strong></p>                  
                                <input class="input share_button_input" id="linksong" onclick="Select_all('linksong');" type="text" value="{DATA.URL_SONG}" readonly="readonly" >
                            </div>
                        </div>
                        <div id="divBoxReport" class="box_report_error boxContentNowPlaying hide"></div>
                    </div>
<div class="clear"></div>
<!-- BEGIN: singer_info -->
<div class="mg10 alwrap alcontent">
	<div class="ms-shwrap">
		<div class="ms-shimg">
			<img class="fl musicsmalllalbum" src="{SINGER_INFO.thumb}" alt="{SINGER_INFO.tenthat}" width="100" height="100"/>
		</div>
		<div class="ms-shdetail" id="singersdetail">
			<h2 class="medium greencolor">{SINGER_INFO.tenthat}</h2>
			{SINGER_INFO.introduction}
		</div>
		<div class="ms-shshow">
			<a href="javascript:void(0);" rel="0|{LANG.view_expand}|{LANG.view_collapse}|singersdetail" class="musicicon zoomin greencolor ms-shd" title="{LANG.view_expand}">{LANG.view_expand}</a>
		</div>
		<div class="clear"></div>
	</div>
</div>
<!-- END: singer_info -->
<!-- OTHER ALBUM -->
<!-- BEGIN: other_album -->
<div class="mg10 alwrap alcontent">
	<strong>{LANG.album} {DATA.singer}</strong>
	<div class="hr"></div>
	<!-- BEGIN: loop -->
	<div class="col-25 mcenter">
		<a href="{ROW.url_listen}" title="{LANG.listen_album} {ROW.name}"><img src="{ROW.thumb}" alt="{ROW.name}" width="100" height="100" class="musicsmalllalbum"/></a><br />
		<a class="singer" href="{ROW.url_listen}" title="{LANG.listen_album} {ROW.name}">{ROW.name}</a><br />
		<a href="{ROW.url_search_singer}" title="{LANG.search_width} {DATA.singer}" class="msmall">{DATA.singer}</a>
	</div>
	<!-- END: loop -->
	<div class="clear"></div>
	<div class="hr"></div>
	<div class="alright"><a href="{SEARCH_ALL_ALBUM}" title="{LANG.view_all}" class="musicicon mforward">{LANG.view_all}</a></div>
</div>
<!-- END: other_album -->
<!-- OTHER VIDEO -->
<!-- BEGIN: other_video -->
<div class="mg10 alwrap alcontent">
	<div class="mg10 alwrap alcontent">
<div class="video-list">
    <h3 class="video-title-header keeng-h3-header">{LANG.video} 
        <a class="link">{DATA.singer}</a>    </h3>
    <div class="row">
    <!-- BEGIN: loop -->
          <div class="item">
          <span class="wrap">
          <a href="{ROW.url_listen}" class="link">
          <img src="{ROW.thumb}"><span class="icon-play"></span></a>          
          </span>
        <a title="{LANG.listen_album} {ROW.name}" href="{ROW.url_listen}" class="link name-song under">{ROW.name}</a>    <p class="name-single"><a title="{LANG.search_width} {DATA.singer}" href="{ROW.url_search_singer}" class="link under">{DATA.singer}</a></p>        </div>
        <!-- END: loop -->
    </div>
  </div>
</div>
<div class="div-view-more"><a title="{LANG.view_all}" href="{SEARCH_ALL_VIDEO}" class="link link-view under">{LANG.view_all}</a> ...</div>
</div>
<!-- END: other_video -->
<!-- COMMENT -->
<div class="alboxw mg10">
	<div class="alwrap">
		<div class="alheader">
			<span>{LANG.comment}</span>
		</div>
		<div class="alcontent">
			<div id="comment-content"></div>
			<!-- BEGIN: nocomment -->
			<div class="alboxw">
				<div class="alwrap alcontent infoerror">
					<div>
						{LANG.you_must} <a href="{USER_LOGIN}">{LANG.loginsubmit}</a> / <a href="{USER_REGISTER}">{LANG.register}</a> {LANG.to_access}
					</div>
				</div>
			</div>
			<!-- END: nocomment -->
			<!-- BEGIN: stopcomment -->
			<div class="alboxw">
				<div class="alwrap alcontent infoerror">
					<div>
						{LANG.setting_stop}
					</div>
				</div>
			</div>
			<!-- END: stopcomment -->
			<!-- BEGIN: comment -->
			<table cellpadding="0" cellspacing="0" class="musictable">
				<tr>
					<td class="left">{LANG.your_name}:</td>
					<td><input class="txt-full" type="text" name="name" id="name" value="{USER_NAME}" {NO_CHANGE}/></td>
				</tr>
				<tr>
					<td class="left">{LANG.content}:</td>
					<td><textarea class="txt-full" name="body" id="commentbody" style="height:50px"></textarea></td>
				</tr>
				<tr>
					<td class="mcenter" colspan="2">
						<input class="mbutton" id="button-comment" type="button" value="{LANG.send}" onclick="sendcommment('{DATA.ID}','video');"/>
						<input class="mbutton" type="button" onclick="nv_show_emotions('emotion-content');" value="{LANG.emotion}"/>
						<script type="text/javascript" src="{base_url}showemotion.js"></script>
						<div class="wrap-emotion"><div class="emotion-content" id="emotion-content"></div></div>
					</td>
				</tr>
			</table>
			<div class="clear"></div>
			<script type="text/javascript">
			$(document).ready(function(){show_comment('{DATA.ID}','video',0);});
			</script>
			<!-- END: comment -->
		</div>
	</div>
</div>
<!-- END: main -->