<!-- BEGIN: main -->
<!-- BEGIN: loop -->
<div style="padding-bottom:5px;margin-bottom:5px;border-bottom:1px #dadada solid;font-size:13px; margin-left:36px; margin-top:26px">
	<a style="font-size:13px;color:#17658C; margin-top:10px;" href="{url_listen}" title="{LANG.listen} {songname}"><strong> {songname}</strong></a> - <span style="font-size:13px;color:#999">{time}</span><br /><br />
	Nội dung : {message}
    <br />
    <br />
	<a title="{LANG.readmore}" class="showmess fr" onclick="ShowHide('message{DIV}');">{LANG.readmore}</a>
    <br />
	<div id="message{DIV}" style="display:none;color:#000;font-size:13px;text-align:justify;">{fullmessage}</div>
	<div class="clear"></div>
    <br />
	<span style="font-size:11px;color:#666">{LANG.from}: <strong style="color:#17658C">{from}</strong></span><br />
    <br />
	<span style="font-size:11px;color:#666">{LANG.to}: <strong style="color:#17658C">{to}</strong></span>
</div>
<!-- END: loop -->
<div class="clear"></div>
<div class="fr" style="float:right">
	<a href="{GIFT_LINK}" title="{LANG.readmore}">{LANG.readmore}</a>
</div>
<div class="clear"></div>
<!-- END: main -->