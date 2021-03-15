<!-- BEGIN: main -->

    <div class="music-bill-board">
    <div class="sub-tab">
        <!-- BEGIN: tab -->
        <a class="lnk1-{TAB.abc} {TAB.active}" href="javascript:void(0);">{TAB.title}</a>
        <!-- END: tab -->
    </div>
    <!-- BEGIN: ltap -->
    <div id="tab-{TAB.id}" style="display:block;">
          <div class="sub-tab-{TAB.id}" style="display:block;">
             <div class="list-bill-board">
             <!-- BEGIN: loop -->
                <div class="item-bill-board">
                   <div class="number" style="height: 39px"><b>{STT}.</b></div>
                   <p>
                      <a href="{ROW.url_listen}" class="bold color4"
                         title="{ROW.tenthat}">
                     {ROW.tenthat}           </a>
                   </p>
                   <p class="info-music">
                      <a class="size11" href="{ROW.url_search_singer"
                         title="{ROW.casithat}">
                      {ROW.casithat}</a>
                   </p>
                </div>
            <!-- END: loop -->
             </div>
          </div>
       </div>
       <!-- END: ltap --> 
</div>

<!-- END: main -->