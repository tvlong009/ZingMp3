//function onClickNewArticle() {
//  $("#lb-container-new-articles").removeClass("inactive-tab");
//  $("#lb-container-new-articles").addClass("active-tab");
//  $("#lb-container-hot-articles").removeClass("active-tab2");
//  $("#lb-container-hot-articles").addClass("inactive-tab");
////  $("#list-article-home #tab-bill-board-1").show();
////  $("#list-article-home #tab-bill-board-2").hide();
//
//  $(".list-article-home #tab-article-normal").css("display", "block");
//  $(".list-article-home #tab-article-saleoff").css("display", "none");
//}
//function onClickSaleOffArticle() {
//  $("#lb-container-new-articles").removeClass("active-tab");
//  $("#lb-container-new-articles").addClass("inactive-tab");
//  $("#lb-container-hot-articles").removeClass("inactive-tab");
//  $("#lb-container-hot-articles").addClass("active-tab2");
////  $("#list-article-home #tab-bill-board-1").hide();
////  $("#list-article-home #tab-bill-board-2").show();
//  $(".list-article-home #tab-article-normal").css("display", "none");
//  $(".list-article-home #tab-article-saleoff").css("display", "block");
//}
/**
 * Ham chuyen tab giua tin tuc va tin khuyen mai trang home
 * author: hatt12
 */
function onClickArticle()
{
  $("#newsWeek").click(function(){
    $("#titleNews").css("display","");
    $("#titlePromotion").css("display","none");
    $("#tabNewsWeek").css("display","");
    $("#promotionNews").css("display","none");
    $("#tabPromotion").removeClass();
    $("#tabPromotion").addClass("r-arrow-active");
    $("#newsWeek").removeClass();
    $("#newsWeek").addClass("l-arrow");
  })
}
function onClickSaleOff(){

  $("#tabPromotion").click(function(){
    $("#titleNews").css("display","none");
    $("#titlePromotion").css("display","");
    $("#tabNewsWeek").css("display","none");
    $("#promotionNews").css("display","");
    $("#tabPromotion").removeClass();
    $("#tabPromotion").addClass("r-arrow");
    $("#newsWeek").removeClass();
    $("#newsWeek").addClass("l-arrow-active");
  })
}