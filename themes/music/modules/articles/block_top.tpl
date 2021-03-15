<!-- BEGIN: main -->
<style type="text/css">
.items_content{ 
	margin-bottom:10px
}
.items_content .time{ color:#666666 }
.items_content a{
	font-weight:bold;
}
.items_content a img{ 
	float:left; margin-right:5px;
	border:1px solid #F8F8F8; padding:1px;
}
.items_content .title_ne {
	padding:5px;
	background:#F7F7F7;
	margin-bottom:3px;	
}
</style>
<div class="items_content clearfix">
    <!-- BEGIN: img --><a href="{ROW.link}"><img src="{ROW.fileimg}" width="230" style="border:1px solid #E8E8E8; padding:2px" /></a><!-- END: img -->
    <div style="font-weight:bold; font-size:16px; margin-bottom:10px"><a href="{ROW.link}">{ROW.title}</a></div>
    <p align="justify">{ROW.hometext}</p>
</div>
<!-- END: main -->