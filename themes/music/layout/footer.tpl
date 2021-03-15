<div id="footer">
         <div class="footer">
            <div class="banner-footer">
               <div class="noel-edge-left"></div>
               <div class="noel-edge-center"></div>
               <div class="noel-edge-right"></div>
            </div>
            	[FOOTER]
            
         </div>
      </div>
      </div>
      </div>
      <div id="overlay-login">
         <div class="contentWrap"></div>
      </div>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery-1.4.2.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.tools.min.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/cookie.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/swfobject2-2.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/frontend.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/frontend/common_function.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.anythingslider.min.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/slideshowhome.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/newhome/songHome.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/global.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/articleHome.js"></script>

      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/compRankTable.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/json2.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/updatePhoneNumber.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.base64.min.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/frontend/vtSearchSuggestion.js"></script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/frontend/base64.js"></script>
      <script type="text/javascript">
         $(document).ready(function () {
             $('.menu-bar li').hover(
                 function () {
                     var self = $(this);
                     var subMenu = $('.sub-menu', self);
                     if (subMenu.size()) {
                         subMenu.show();
                     }
                 },
                 function () {
                     var self = $(this);
                     var subMenu = $('.sub-menu', self);
                     if (subMenu.size()) {
                         subMenu.hide();
                     }
                 }
             );
         
         });
         var regexCheckPhoneNumber = /^8496\d{7}$|^8497\d{7}$|^8498\d{7}$|^8416\d{8}$|^0?96\d{7}$|^0?97\d{7}$|^0?98\d{7}$|^0?16\d{8}$/    
         
      </script>
      <script>
         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','../www.google-analytics.com/analytics.js','ga');
         
         ga('create', 'UA-42164565-1', 'imuzik.com.vn');
         ga('send', 'pageview');
      </script>
      <script type="text/javascript">var dm_configuration = {"relative_url_root":"","dm_core_asset_root":"\/dmCorePlugin\/","script_name":"\/","debug":false,"culture":"en","dateFormat":"m\/d\/yy","module":"dmFront","action":"page","authenticated":false,"page_id":"1"};</script>
      <script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/cf3f73b1b62ec068bfac8f81b98cc655.js"></script>
      <script type="text/javascript">
         var _gaq = _gaq || [];
         _gaq.push(['_setAccount', 'UA-32476512-1']);
         _gaq.push(['_trackPageview']);
         
         (function() {
           var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
           ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
           (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
         })();
      </script>
      <!-- BEGIN: for_admin -->
      </div>
      <p class="show_query" >
         {CLICK_SHOW_QUERIES}
      </p>
      <div id="div_hide" style="visibility: hidden; display: none;">
         {SHOW_QUERIES_FOR_ADMIN}
      </div>
      <!-- END: for_admin -->
      <div id="run_cronjobs" style="visibility: hidden; display: none;">
         <img alt="" title="" src="{THEME_IMG_CRONJOBS}" width="1" height="1" />
      </div>
      {THEME_ADMIN_MENU}
      {THEME_MY_FOOTER}
      {THEME_FOOTER_JS}
   </body>
</html>