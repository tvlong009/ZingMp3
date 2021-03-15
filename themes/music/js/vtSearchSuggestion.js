/**
 * Created with JetBrains PhpStorm.
 * User: vas_hoangl
 * Date: 9/29/12
 * Time: 9:29 AM
 * To change this template use File | Settings | File Templates.
 */
var searchValue = "";
var lastTimeQuery = null;
var lastQuery = "";
var timer = null;
var xTriggered = 0;
var txtSearch = $('#search_query');
var divSuggestion = $('#suggestions');
var singer_match = null;
var currentRequest = '';
var isFinishRequest = false;
var redirectTicker;

function redirectSearchUrl(){
  if (isFinishRequest) {
    clearTimeout(redirectTicker);
    redirectUrl = window.location.href;
    if (singer_match != null && singer_match.is_match) {
      redirectUrl = singerDetaiLink.replace('singerDetaiLink', singer_match.singer_match);
    } else {
      var query=Base64.encode(txtSearch.val());
      query=query.replace('/','|');
      redirectUrl = searchCommonLink.replace('searchCommonLink',query);
    }
    window.location.href = redirectUrl;
  } else {
    redirectTicker = setTimeout('redirectSearchUrl()', 200);
  }
}

(function ($) {
  // Bat su kien click vao button search
  $('#searchIcon').click(function () {
    var text = txtSearch.val();
    text = $.trim(text);
    txtSearch.val(text);
    if (text == '') {
      alert("Vui lòng nhập vào ô tìm kiếm");
      txtSearch.focus();
      return false;
    }
    else if (text == 'Từ khóa tìm kiếm...') {
//      alert("Vui lòng nhập vào ô tìm kiếm");
      txtSearch.focus();
      return false;
    }
    if (text.length == 1) {
      var query=Base64.encode(txtSearch.val());
      redirectUrl = searchCommonLink.replace('searchCommonLink',query);
      window.location.href = redirectUrl;
    }
    redirectSearchUrl();
    return false;
  });

// HUONGND16 - Bắt sự kiện nút tìm nhạc chờ!
// 25/07/2013

    $('#search-rbt').click(function () {
        var text = txtSearch.val();
        if (text == '') {
            alert("Vui lòng nhập vào ô tìm kiếm");
            txtSearch.focus();
            return false;
        }
        else if (text == 'Từ khóa tìm kiếm...') {
            alert("Vui lòng nhập vào ô tìm kiếm");
            txtSearch.focus();
            return false;
        }
        if (text.length == 1) {
            var query=Base64.encode(txtSearch.val());
            redirectUrl = searchRBTLink.replace('searchRBTLink',query);
            window.location.href = redirectUrl;
        }
        var query=Base64.encode(txtSearch.val());
        query=query.replace('/','|');
        redirectUrl = searchRBTLink.replace('searchRBTLink',query);
        window.location.href = redirectUrl;
        return false;
    });

  txtSearch.keyup(function (event) {
    searchValue = $(this).val();
    searchValue = $.trim(searchValue);
    var timerCallback = function () {
      suggesstionFunc();
    };
    clearTimeout(timer);
    timer = setTimeout(timerCallback, 200);
  });

  txtSearch.focusin(function () {
    if (divSuggestion.html() != "") {
      setTimeout("divSuggestion.fadeIn(50);", 100);
    }
  });

  txtSearch.blur(function (event) {
    setTimeout("divSuggestion.fadeOut(50);", 200);
  });

  txtSearch.keydown(function (e) {
    if (divSuggestion.css('display') != 'block')
      return;
    var allItem = divSuggestion.find('li');
    var activeItem = divSuggestion.find('li.active-bg');
    var totalItem = allItem.size();
    var firstItem = allItem.eq(0);
    var lastItem = allItem.eq(totalItem - 1);
    var idx = allItem.index(activeItem);

    if (!totalItem) {
      return;
    }
    switch (e.keyCode) {
      case 38:
        if (idx == -1) {
          lastItem.addClass('active-bg');
        } else {
          var prevItem = allItem.eq(idx - 1);
          activeItem.removeClass('active-bg');
          prevItem.addClass('active-bg');
        }
        break;

      case 40:
        if (idx == -1) {
          firstItem.addClass('active-bg');
        } else if (idx == (totalItem - 1)) {
          // Item cuoi cung
          activeItem.removeClass('active-bg');
          firstItem.addClass('active-bg');
        } else {
          var nextItem = allItem.eq(idx + 1);

          activeItem.removeClass('active-bg');
          nextItem.addClass('active-bg');
        }
        break;
    }
  });

  $("#search_query").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      var itemSugg = $('#suggestions li.active-bg a:first');
      if (itemSugg.size() == 0)
        $('.btn-search').click();
      else{
        $(location).attr('href', itemSugg.attr('href'));
      }
      return false;
    }
    return true;
  });
})(jQuery);

function suggesstionFunc() {
  singer_match = null;
  if (searchValue.length < 2) {
    divSuggestion.fadeOut(100);
  } else {
    if (lastQuery == "") {
      lastQuery = searchValue;
    } else if (lastQuery == searchValue) {
      //divSuggestion.fadeIn(400);
      return;
    } else {
      lastQuery = searchValue;
    }
    //lấy dữ liệu từ ajax
    currentRequest = generateGuid();
    isFinishRequest = false;
    var link = "/ajax/suggestionQuery?currentRq=" + currentRequest + "&q=" + Base64.encode(searchValue);
//    var link = "/ajax/suggestionQuery?q=" + Base64.encode(searchValue);
    $.ajax({
      type:"POST",
      url:link,
      data:{},
      cache:false,
      success:function (data) {
        /**
         * Kiểu mặc định trả về là dạng String, bạn dùng hàm parseJSON để phân tích dữ liệu trả về
         * có 2 cách parse JSON là : JSON.parse() và $.parseJSON();
         * 1. var getData = JSON.parse(string);
         * 2. var getData = $.parseJSON(string);
         **/
        var getData = $.parseJSON(data);
        var singers = getData.singers;
        var albums = getData.albums;
        var videos = getData.videos;
        var songs = getData.songs;
        var rbts = getData.rbt;
        var currentRq = getData.currentRq;
        if (currentRq == currentRequest) {
          isFinishRequest = true;
        }
        singer_match = getData.singer_match;
        var hasResult = false;
        var resHtml = '';
        var singerName = "";
//        resHtml += '<h1><a href="javascript:void(0);"> Tìm kiếm với "' + htmlEncode(searchValue) + '"</a></h1>';
        resHtml += '<p class="title-search"> Tìm kiếm với "' + htmlEncode(searchValue) + '"</p>';
        //bind rbt
        if (rbts.length > 0) {
          var rbtName = "";
          var codePrice = "";
          hasResult = true;
          resHtml += '<div class="suggest-song">'
            + '<h3 class="title">Nhạc chờ</h3>'
            +'<h4>Nhạc chờ</h4>'
            + '<ul class="list">';
          for (var i in rbts) {
              rbtName = stringMaxLength(rbts[i].name,35);
              codePrice = stringMaxLength(rbts[i].code_price,35);
             
            resHtml += '<li class="" style="overflow:hidden;"><a href="'+rbts[i].url+'">'
              + stringMaxLength(rbtName,35)
              +'</br><span>' + stringMaxLength(codePrice,35)
              +'</span></a></li>';
          }
          resHtml += '</ul></div>';
        }
//        // bind songs
        if (songs.length > 0) {
          var songName = "";
          var songRbt = "";
          singerName = "";
          hasResult = true;
          resHtml += '<div class="suggest-song">'
            + '<h3 class="title">Bài hát</h3>'
            +'<h4>Bài hát</h4>'
            + '<ul class="list">';
          for (var i in songs) {
              songName = stringMaxLength(songs[i].name,35);
              singerName = stringMaxLength(songs[i].singer,35);
              if(songs[i].is_rbt == 1){
                  songRbt = 'ringtone" title="Nhạc chờ' ;
              } else{
                  songRbt = "";
              }
            resHtml += '<li class="'+songRbt+'" style="overflow:hidden;"><a href="' + songs[i].url + '">'
              + stringMaxLength(songName,35)
              +'</br><span>' + stringMaxLength(singerName,35)
              +'</span></a></li>';
          }
          resHtml += '</ul></div>';
        }
        // bind singers
        if (singers.length > 0) {
          
          hasResult = true;
          resHtml += '<div class="suggest-singer">'
            + '<h3 class="title">Ca sĩ</h3>'
            +'<h4>Ca sĩ</h4>'
            + '<ul class="list">';
          for (var i in singers) {              
            resHtml += '<li style="overflow:hidden;"><a class="rows-item" href="' + singers[i].url + '">' +
              '<img width="36" height="36" src="' +
              singers[i].image_path + '">' + stringMaxLength(singers[i].name,35) +
              '</a></li>';
          }
          resHtml += '</ul></div>';
        }
        // bind videos
        if (videos.length > 0) {
          hasResult = true;
          singerName = "";
          var videoName = "";
          resHtml += '<div class="suggest-video">'
            + '<h3 class="title">Video</h3>'
            +'<h4>Video</h4>'
            + '<ul class="list">';
          for (var i in videos) {
              videoName = stringMaxLength(videos[i].name,35);
              singerName = stringMaxLength(videos[i].singer,35);
            resHtml += '<li style="overflow:hidden;"><a class="rows-item" href="' + videos[i].url + '">'
              + '<img width="62" height="36" src="'
              + videos[i].image_path + '">' +  videoName
              + '<br/><span>' + singerName
              + '</span></a></li>';
          }
          resHtml += '</ul></div>';
        }
        // bind albums
        if (albums.length > 0) {
          var albumName = "";
          singerName = "";
          hasResult = true;
          resHtml += '<div class="suggest-album">'
            + '<h3 class="title">Album</h3>'
            +'<h4>Album</h4>'
            + '<ul class="list">';
          for (var i in albums) {
              albumName = stringMaxLength(albums[i].name,35);
              singerName = stringMaxLength(albums[i].singer,35);
            resHtml += '<li style="overflow:hidden;"><a class="rows-item" href="' + albums[i].url + '">' 
            + '<img width="62" height="36" src="'
            + albums[i].image_path + '">'
            + albumName
            + '</br><span>' + singerName
            + '</span></a></li>';
          }
          resHtml += '</ul></div>';
        }

        if (hasResult)
          divSuggestion.html(resHtml);
        else
          divSuggestion.html('<h1><a href="javascript:void(0);">Không tìm thấy kết quả với "' + htmlEncode(searchValue) + '"</a></h1>');
      },

      error:function (request, status, err) {

      },
      complete:function () {
        divSuggestion.fadeIn(200);
      }
    });
  }
}

function stringMaxLength(str, max_length) {
    var str_val = "";
    if(str == undefined || str == "") return str_val;
    if (str.length > max_length) {
        str_val = str.substr(0, max_length) + "...";
    }
    else {
        str_val = str;
    }
    return str_val;
}
