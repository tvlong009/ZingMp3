

<!-- BEGIN: main -->
{FILE "header.tpl"}
<link rel="stylesheet" type="text/css" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/slide.css" />
<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.lazyload.min.js"></script>	
<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.easing.1.3.js"></script> 
<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.skitter.min.js"></script> 
<script type="text/javascript"> 
   var BASE_NAME = 'http://www.megacode.com/';
   jQuery(document).ready(function(){
   	jQuery("img").lazyload({ 
   		effect : "fadeIn"
   	});
   	jQuery("#game").mouseover(function(){
   		$(".sub").show();
   	}).mouseout(function(){
   		$(".sub").hide();
   	});							
   	jQuery("#searchValue").keypress(function(e) {
   		var code = (e.keyCode ? e.keyCode : e.which);
   		if(code == 13) {
   			doSearch();
   		}
   	});
   });
   function doSearch() { 
   	var searchValue = jQuery("#searchValue").val(); 
   	window.location = BASE_NAME + "search/" + searchValue;
   } 
   function GetWidth()
   {
   	var x = 0;
   	if (self.innerHeight){
   		x = self.innerWidth;
   	}
   	else if (document.documentElement && document.documentElement.clientHeight){
   		x = document.documentElement.clientWidth;
   	}
   	else if (document.body){
   		x = document.body.clientWidth;
   	}
   	return x;
   }		
</script>
<script>
   $(document).ready(function(){
   	
   	$('.box_skitter_medium').skitter({thumbs: true});
   	
   });
</script>
<div class="wrapper">
      <header id="top">
         <div id="site-header">
            <div id="banner_top" class="banner">
               <div id="advTop"><img src="http://megacode.vn/media/banners/banner_matran.png"></div>
            </div>
         </div>
         <nav class="categories">
            [MENU_SITE]
         </nav>
      </header>
<section class="template2" id="category">
   <div class="content-wrap">
      <section class="cate_content">
         {MODULE_CONTENT}
      </section>
      <section class="cate_sidebar">
         [XEMNHIEU]
      </section>
   </div>
   <section class="sidebar">
     	[QUANGCAO]
   </section>
</section>

{FILE "footer.tpl"}
<!-- END: main -->

