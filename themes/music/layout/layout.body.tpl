<!-- BEGIN: main -->
{FILE "header.tpl"}

         <div id="left-body">
            <div class="top-slider-album">
               [SLIDER]
            </div>
            <div class="box-flash-album">
               [PLAYLIST]
            </div>
            <div class="video-list-home">
               [VIDEO]
            </div>
            [RATING]
            <div class="tab-music-box my-playlist" id="list-song-content">
               <div class="list-wrap">
                  [MUSICNEW]
                  <ul id="core" class="hiden music-hot-list">
                  </ul>
               </div>
            </div>
            <div class="news-music">
				[NEWSMUSIC]
            </div>
         </div>
         <div id="right-body">
            [REAL]
            <div class="rb-container" id="compRankTable" style="z-index: 11">
               [BXH]
               
            </div>
            <div class="rb-container" id="compRankTable" style="z-index: 11">
            	[FACE_BOOK]
            </div>
         </div>
      </div>
      {FILE "footer.tpl"}
<!-- END: main -->

