<!-- BEGIN: main -->
<div class="bx-wrapper" style="max-width: 100%;">
    <div class="bx-viewport">
      <ul class="bxslider">
      <!-- BEGIN: loop -->
       <li class="bx-clone">
          <a href="{url_listen}" title="{name}" >
          <img src="{img}" alt="{name}">
          </a>
          <h3 class="h3-bx-txt bx-album">
             <a href="{url_listen}" title="{name}">
             <span>
             {name}               
             </span>
             </a>
          </h3>
       </li>
      <!-- END: loop -->
      </ul>
    </div>
</div>
<div class="album-bx-pager" id="bx-pager">
  <!-- BEGIN: loop1 -->
	<a href="{url_listen}" data-slide-index="{a}">
       <img src="{img}">
       <span class="border"></span>
       <span class="mask"></span>
    </a>
 <!-- END: loop1 -->
</div>
<!-- END: main -->