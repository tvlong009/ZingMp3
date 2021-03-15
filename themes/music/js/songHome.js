///*bui minhtuan*/
///*buiminhtuan85@gmail.com*/

var playerMagic;
function playerMagicReady(object) {
    if(object.id=="magicPlayer"){
        playerMagic = document.getElementById(object.id);
        playerMagic.addModelListener("TIME", "onChangePosition");
    }
};

jQuery(document).ready(function() {
    $(".buttonImuzikMagicPlayer").click(function(e) {
        var top = e.pageY;
        $(".magicPlayer").css("top", top + "px");
    });
});

////tuanbm link phai bat dau nhu "/Resources/tes.mp3" co dau "/" dang truoc
var magicPlayingCode = "";
function imuzikPlayMagicHome(link, code, widthPlayer, title) {
    pauseAllPlayer("magicPlayer");//tim cac player khac roi pause lai



//    link = link.toLowerCase();
    //    alert(link);
//    if (link.endsWith("mp3") == false) {
//        alert('Xin lỗi bài hát này không nghe thử được!');
//        return false;
//    }

    maxWidthMagicPlayer = widthPlayer;
    var status = $("#process-bar-" + code).hasClass("playingMagic");

    if (status == true) {
        playerMagic.sendEvent("PLAY", false);
        pauseMagicPlayer();
        //resetMagicPlayer();
    } else {
        //
        if(playerMagic!=null){
            var config = playerMagic.getConfig();
            var state = config.state;
            if(magicPlayingCode!="" && magicPlayingCode==code && state=="PAUSED"){
                playerMagic.sendEvent("PLAY", true);
                resumeMagicPlayer(code,title);
                return;
            }
        }
        //reset css cho process-bar cua 1 bai hat choi truoc do
        resetMagicPlayer();

        firstLoad = true;
        playerMagic = null;

        //reset process-bar
        $("#process-bar-"+code).attr(  "style","display:block;width:0px;");
        //xu ly co ma hien tai
        resumeMagicPlayer(code,title);

        magicPlayingCode = code;
        var link2 = link + '&autostart=true';

        var flashvars = {
            id: "magicPlayer",
            name: "magicPlayer",
            file: link2,
            repeat: "none",//ko su dung repeat
//            autostart: "true",  // tu dong choi o trang danh sach
            volume: "100",
            'playerready': 'playerMagicReady'
        };
        var params = {
            allowscriptaccess: "always",
            allowfullscreen: "true"
        };
        var attributes = {};
        swfobject.embedSWF("/js/player5.swf", "magicPlayer", "1", "1", "9.0.124", 'false', flashvars, params, attributes, callbackFn);
    }

}

function resetMagicPlayer(){
    $(".playingMagic").attr("style", "");
    pauseMagicPlayer();
}
function pauseMagicPlayer(){
    var titleListen = $(".icon-play").attr("title");
    $(".icon-stop").addClass("icon-play");//chuyen thanh start
    $(".icon-stop").attr("title",titleListen);//chuyen thanh stop
    $(".icon-stop").removeClass("icon-stop");//chuyen thanh stop
    $(".playingMagic").removeClass("playingMagic");
}
function resumeMagicPlayer(code,title){
    $("#magic-icon-play-"+code).removeClass("icon-play");//chuyen thanh stop
    $("#magic-icon-play-"+code).addClass("icon-stop");//chuyen thanh stop
    $("#magic-icon-play-"+code).attr("title",title);//chuyen thanh stop
    $("#process-bar-"+code).addClass("playingMagic");
}

function callbackFn(e) {

}

function onChangePosition(obj) {
    if (obj.position > 1) {
        //lay ra duration lan dau tien -> thay bang ham load META
        var percentComplete = (obj.position / obj.duration) * 100;
        if (percentComplete >= 99) {
            resetMagicPlayer();
            return;
        }
        var maxWidth = (obj.position / obj.duration) * maxWidthMagicPlayer;
        maxWidth = parseInt(maxWidth);
        var value = maxWidth.toString() + "px";
        $("#process-bar-"+magicPlayingCode).css("width", value);
    }
};

//function ringtonelisten(rtId) {
//    var link = "/AjaxSystem/Actions.aspx?actionType=6&rtId=" + rtId;
//    $.ajax({
//        url: link,
//        cache: false
//    });
//}