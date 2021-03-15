<!-- BEGIN: main -->
<div id="center-body">
<div class="home-bxh-video bxh-audio">
  <h3 class="header">BẢNG XẾP HẠNG <span class="ping">BÀI HÁT</span></h3>       
      <div class="column2">
       <!-- BEGIN: top -->
      <div class="bxh-top">
          <div class="top-left">
            <span class="number"></span>
          </div>
          <div class="top-right">            
            <a href="{ROW.url_listen}" class="link thumb"><img src="{ROW.thumb}"></a>
            <h2>
              <a title="{ROW.tenthat}" href="{ROW.url_listen}" class="link name-song under">{ROW.tenthat}</a> 
              <p class="name-single"><a title="{ROW.casithat}" href="{ROW.url_search_singer}" class="link under">{ROW.casithat}</a></p>              
            </h2>
             
            </h2> 

          </div>
         
        </div>
         <!-- END: top -->
                  <div class="collections">
                   <!-- BEGIN: loop -->
                    <div class="item">
                <strong>{STT}</strong>   
                <a href="{ROW.url_listen}" class="link avatar"><img src="{ROW.thumb}"></a>        
                 <a title="{ROW.tenthat} " href="{ROW.url_listen}" class="link name-song under">{ROW.tenthat} </a>                
                 <p class="name-single"><a title="{ROW.casithat}" href="{ROW.url_search_singer}" class="link under">{ROW.casithat}</a></p>
                 
              </div>
               <!-- END: loop -->
                      </div>
                               
      </div>
</div>
</div>
<!-- END: main -->