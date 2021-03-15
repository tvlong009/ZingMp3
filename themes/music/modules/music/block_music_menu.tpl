<!-- BEGIN: tree -->
<li><a title="{MENUTREE.note}" href="{MENUTREE.link}" {cla}{MENUTREE.target}>{MENUTREE.title}</a>	
	<!-- BEGIN: tree_content -->
	<ul>
		{TREE_CONTENT}
	</ul><!-- END: tree_content -->                
</li>
<!-- END: tree -->
<!-- BEGIN: main -->
<ul>
                  <li class="item-menu-bar">
                     <a href="{THEME_SITE_HREF}">
                     <img src="{NV_BASE_SITEURL}themes/{TEMPLATE}/images/imuzik_10.png"></a>
                  </li>
                  <!-- BEGIN: loopcat1 -->
                  <li class="item-menu-bar ">
                     <span><a href="{CAT1.link}"
                        class="link-menu">{CAT1.title}</a></span>
                     <div class="sub-menu">
                        <div class="rows-sub-menu">
                        <!-- BEGIN: cat2 -->
                        <!-- BEGIN: loopcat2 -->
                           <div class="song-list-cols">
                              <h2><a href="{CAT2.link}">{CAT2.title}</a></h2>
                              <!-- BEGIN: cat3 -->
                              <ul class="sub-list">
                                 {HTML_CONTENT}	
                              </ul>
                              <!-- END: cat3 -->
                           </div>
                           <!-- END: loopcat2 -->
                           <!-- END: cat2 -->
                        </div>
                     </div>
                  </li>
                 <!-- END: loopcat1 -->
               </ul>
<!-- END: main -->

