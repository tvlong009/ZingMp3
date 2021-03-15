<!-- BEGIN: empty -->
<div class="alboxw"><div class="alwrap alcontent information"><div>{LANG.gift_list_empty}<a title="{LANG.close_info}" href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="fr musicicon mcancel">&nbsp;</a></div></div></div>
<!-- END: empty -->
<!-- BEGIN: main -->
<div class="alboxw">
	<div class="alwrap">
		<div class="alheader"> 
			<span>{LANG.gift_list}</span>
		</div>
	</div>
</div>
<!-- BEGIN: loop -->
<div class="news-music-content">
    <h3 class="content-title">
      <a class="link-title under" target="_blank" href="{ROW.url_listen}" title="{ROW.songtitle}">
        Tên bài hát : {ROW.songtitle}</a>
    </h3>
    <br /><span class="musicicon mplay msmall" style="float:left">{LANG.who_recive}: <strong class="greencolor">{ROW.who_send}</strong></span><br /><br />
		<span class="musicicon mplay msmall"  style="float:left">{LANG.request}: <strong class="greencolor">{ROW.who_receive}</strong></span><br />
    <p class="content-short">Lời nhắn gửi : {ROW.body}</p>
    
  </div>
<!-- END: loop -->
<div class="clear"></div>
<!-- BEGIN: generate_page -->
<div class="generate_page">
	{generate_page}
</div>
<div class="clear"></div>
<!-- END: generate_page -->
<div class="clear"></div>
<style>
.news-music-content
{
	float: left;
    margin-top: 10px;
    overflow: hidden;
	line-height:19px;
}

 .news-music-content h3.content-title {
    display: inline;
    float: left;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 5px;
    width: 340px;
}

.news-music-content h3.content-title a.link-title {
    color: rgb(83, 83, 83);
    font-size: 16px;
    font-weight: bold;
}

.news-music-content p.content-short {
    color: rgb(51, 51, 51);
    display: inline;
    float: left;
    font-size: 13px;
    line-height: 20px;
    width: 340px;
}
</style>
<!-- END: main -->