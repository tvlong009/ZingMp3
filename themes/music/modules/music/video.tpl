<!-- BEGIN: main -->
<div class="clear"></div>
<ul class="mvideo">
	<!-- BEGIN: cat --><li><a href="{url_view_category}" title="{name}">{name}</a></li><!-- END: cat -->
</ul>
<div class="video-list">
   <h3 class="video-title-header all-list">
      <a class="link color">{LANG.video_new}</a>   	
   </h3>
   <div class="box-list">
      <div class="row">
      <!-- BEGIN: new -->
         <div class="item">
            <span class="wrap">   				
            <a href="{ROW.url_view}" class="link">
            <img src="{ROW.thumb}"><span class="icon-play"></span></a>  			
            </span> 
            <a title="{ROW.name}" href="{ROW.url_view}" class="link name-song under">
            {ROW.name}</a>            
            <p class="name-single"><a title="{ROW.singer}" href="{ROW.url_search_singer}" class="link under">{ROW.singer}</a></p>
         </div>
         <!-- END: new -->
      </div>
      <div class="div-view-more" style="float:right"><a title="{LANG.view_all}" href="{url_viewnew}" class="link link-view under">{LANG.view_all}</a> ...</div>
   </div>
</div>

<div class="clear"></div>
<div class="video-list">
   <h3 class="video-title-header all-list">
      <a class="link color">{LANG.video_hot}</a>   	
   </h3>
   <div class="box-list">
      <div class="row">
      <!-- BEGIN: hot -->
         <div class="item">
            <span class="wrap">   				
            <a href="{ROW.url_view}" class="link">
            <img src="{ROW.thumb}"><span class="icon-play"></span></a>  			
            </span> 
            <a title="{ROW.name}" href="{ROW.url_view}" class="link name-song under">
            {ROW.name}</a>            
            <p class="name-single"><a title="{ROW.singer}" href="{ROW.url_search_singer}" class="link under">{ROW.singer}</a></p>
         </div>
         <!-- END: hot -->
      </div>
      <div class="div-view-more" style="float:right"><a title="{LANG.view_all}" href="{url_viewnew}" class="link link-view under">{LANG.view_all}</a> ...</div>
   </div>
</div>
<!-- END: main -->
