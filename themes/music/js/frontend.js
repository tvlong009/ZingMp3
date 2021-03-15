/**
 * User: tuanbm, HuongND16
 * Date: 9/25/12 - 20/08/2013
 * Time: 7:14 PM
 */
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

function trim(str) {
    var str = str.replace(/^\s\s*/, ''),
        ws = /\s/,
        i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}
function regexPassword(value) {
    //  var pattern = /^.*(?=.{6,28})(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[a-zA-Z]).*$/
    var pattern = /^[^~,]{6,28}$/
    if (value.match(pattern)) {
        return true;
    }
    else {
        return false;
    }
}
function regexUsername(value) {
    var pattern = /^([a-zA-Z])+([a-zA-Z0-9_]){4,29}$/
    if (value.match(pattern)) {
        return true;
    }
    else {
        return false;
    }
}

function regexViettelPhonenumber(value) {
    return true;
    //     alert(regexEx.substring(2,regexEx.length - 1));
    //    var regex = new RegExp(regexEx.substring(1,l-1));///^8496\d{7}$|^8497\d{7}$|^8498\d{7}$|^8416\d{8}$|^0?96\d{7}$|^0?97\d{7}$|^0?98\d{7}$|^0?16\d{8}$/;//options.allrules.viettelPhonenumber.regex;
//    var pattern = /^8496\d{7}$|^8497\d{7}$|^8498\d{7}$|^8416\d{8}$|^0?96\d{7}$|^0?97\d{7}$|^0?98\d{7}$|^0?16\d{8}$|^222\d{1,}$|^221\d{1,}$|^224\d{1,}$|^246\d{1,}$|^247\d{1,}$|^248\d{1,}$|^220\d{1,}$|^223\d{1,}$|^225\d{1,}$|^226\d{1,}$|^227\d{1,}$|^228\d{1,}$|^229\d{1,}$|^249\d{1,}$|^962\d{1,}$|^963\d{1,}$|^966\d{1,}$|^968\d{1,}$|^969\d{1,}$|^2322\d{1,}$|^2321\d{1,}$|^2324\d{1,}$|^2346\d{1,}$|^2347\d{1,}$|^2348\d{1,}$|^2022\d{1,}$|^2021\d{1,}$|^2024\d{1,}$|^2046\d{1,}$|^2047\d{1,}$|^2048\d{1,}$|^2121\d{1,}$|^2122\d{1,}$|^2124\d{1,}$|^2146\d{1,}$|^2147\d{1,}$|^2148\d{1,}$|^2320\d{1,}$|^2323\d{1,}$|^2020\d{1,}$|^2023\d{1,}$|^2120\d{1,}$|^2123\d{1,}$|^26\d{1,}$|^28\d{1,}$|^6\d{1,}$/
//
//    if (value.match(pattern)) {
//        return true;
//    }
//    else {
//        return false;
//    }
}

function regexEmail(value) {
    var pattern = /^((?:(?:(?:[a-zA-Z0-9][\.\+_]?)*)[a-zA-Z0-9])+)\@((?:(?:(?:[a-zA-Z0-9][\.\-_]?){0,62})[a-zA-Z0-9])+)\.([a-zA-Z0-9]{2,6})$/
    if (value.match(pattern)) {
        return true;
    }
    else {
        return false;
    }
}

var countPhoneNoLoginErrors = 0;
var countPassErrors = 0;

function feLogin() {
    $("#content-more").css('display','none');
    $("#top-massage").css('display','none');
    $("#top-massage-login").css('display','block');
    popupOpenLogin("popup-login");
//    alert(1);
    $("#inputLoginPhoneNo").focus();
}

function popupOpenLogin(popup) {
    $("#popup-main-login").show();

    $("#" + popup).show().css("position", "fixed").css("margin-left", ($(window).width() - $("#" + popup).width()) / 2);
    $("#inputLoginPhoneNo").focus();
}

function popupCloseLogin(popup) {
    $("#popup-main-login").hide();
    $("#" + popup).hide();
    location.reload();
}

function popupCloseLoginNotReload(popup) {
    $('.popup-width-430px').hide();
    $("#popup-main-login").hide();
    $("#popup-main").hide();
    $("#" + popup).hide();
}

function popupCloseRegisterRbtLogin(popup) {
    $("#popup-main-login").hide();
    $("#" + popup).hide();
    location.reload();
}

function closePopupChangePass(popup) {
    $("#popup-main-login").hide();
    $("#" + popup).hide();
    $.ajax({
            type:"POST",
            url:"/ajax/checkStatusCRBT?sToken=" + $.cookie("sToken"),
            data: {},
            cache: false,
            success: function(data){
                var queryCheckUserInfo = JSON.parse(data);
//          alert(queryCheckUserInfo.errorCode);
                 if(queryCheckUserInfo.statusCRBT !='1') {
                     
                    popupOpen("popup-rbt-register");
                 } else{
                     location.reload();
                 }
            }
    });
 //   location.reload();
}

$("#inputLoginPhoneNo").change(function () {
    //  document.getElementById('requiredLogin').style.display ="none";
    document.getElementById('loginRequiredFields').style.display = "none";
    var phonenumber = $("#inputLoginPhoneNo").val();
    var trimPhonenumber = trim(phonenumber);
    if (trimPhonenumber != "") {
        if (!regexViettelPhonenumber(trimPhonenumber)) {
            countPhoneNoLoginErrors++;
            document.getElementById('requiredLogin').style.display = "none";
            document.getElementById('inputValuesNotValid').style.display = "block";
//            document.getElementById('top-massage').style.display = "none";

            //      $('#inputLoginPhoneNo').focus();
            return;
        }
        else {
            countPhoneNoLoginErrors = 0;
//            document.getElementById('top-massage').style.display = "block";
            document.getElementById('loginPhoneNumberNotValid').style.display = "none";
            document.getElementById('requiredLogin').style.display = "none";
        }
        document.getElementById('inputValuesNotValid').style.display = "none";
        document.getElementById('lockedUserStatus').style.display = "none";

    }
//  else
//  {
//    $('#inputLoginPhoneNo').focus();
//  }
});


function submitLogin() {
    var phonenumber = $("#inputLoginPhoneNo").val();
    var trimPhonenumber = trim(phonenumber);
    if (!regexViettelPhonenumber(trimPhonenumber)) {
        countPhoneNoLoginErrors++;
        document.getElementById('requiredLogin').style.display = "none";
        document.getElementById('inputValuesNotValid').style.display = "none";
        document.getElementById('inputValuesNotValid').style.display = "block";

        //      $('#inputLoginPhoneNo').focus();
        return;
    }
    document.getElementById('requiredLogin').style.display = "none";
    var loginPhonenumber = $("#inputLoginPhoneNo").val();
    var trimLoginPhonenumber = trim(loginPhonenumber);
    var loginPassword = $("#inputLoginPass").val();
    var trimLoginPassword = trim(loginPassword);
    var inputLoginCaptcha = $("#inputLoginCaptcha").val();
    var trimInputLoginCaptcha = trim(inputLoginCaptcha);
  //  var signCaptcha = -1;
    if (document.getElementById('captchaRow').style.display == "none") {
        if (trimLoginPassword == "" || trimLoginPhonenumber == "") {
            document.getElementById('requiredLogin').style.display = "none";
            document.getElementById('lockedUserStatus').style.display = "none";
            document.getElementById('inputValuesNotValid').style.display = "block";
            if (trimLoginPassword == "" && trimLoginPhonenumber != "") {
                $('#inputLoginPass').focus();
                document.getElementById('lockedUserStatus').style.display = "none";
                document.getElementById('loginPhoneNumberNotValid').style.display = "none";
            }
            else {
                $('#inputLoginPhoneNo').focus();
                document.getElementById('lockedUserStatus').style.display = "none";
                document.getElementById('inputValuesNotValid').style.display = "none";
                document.getElementById('loginPhoneNumberNotValid').style.display = "none";
            }
            return;
        }
    }
    else {
      //  signCaptcha = 1;
        if (trimInputLoginCaptcha == "" || trimLoginPassword == "" || trimLoginPhonenumber == "") {
            document.getElementById('requiredLogin').style.display = "none";
            document.getElementById('loginCaptchaIncorrect').style.display = "none";
            document.getElementById('lockedUserStatus').style.display = "none";
            document.getElementById('inputValuesNotValid').style.display = "block";
            if (trimLoginPassword == "" && trimLoginPhonenumber != "" && trimInputLoginCaptcha != "") {
                $('#inputLoginPass').focus();
            }
            else if (trimLoginPassword != "" && trimLoginPhonenumber != "" && trimInputLoginCaptcha == "") {
                $('#inputLoginCaptcha').focus();
            }
            else {
                $('#inputLoginPhoneNo').focus();
            }
            return;
        }
    }

    var checkeRemeber = 0;
    if (document.getElementById("checkRemember").checked == true) {
        checkeRemeber = 1;
    }
    if (countPhoneNoLoginErrors <= 0 && countPassErrors <= 0) {
        $("#loginLoadingStatus").show();
        trimLoginPassword = $.base64Encode(trimLoginPassword);
//        alert(trimLoginPassword);return;
        $.ajax({
            type:"POST",
            url:"/ajax/submitLoginUser?sToken=" + $.cookie("sToken"),
            data:{
                inputCaptchaLogin:trimInputLoginCaptcha,
               // existCaptcha:signCaptcha,
                loginPassword:trimLoginPassword,
                checkRemeber:checkeRemeber,
                loginPhoneNo:trimLoginPhonenumber
            },
            cache:false,
            success:function (result) {
                var queryCheckUserInfo = JSON.parse(result);
//          alert(queryCheckUserInfo.errorCode);
                switch (queryCheckUserInfo.errorCode) {
                    case '-4':
                        $("#loginLoadingStatus").hide();
                        document.getElementById('loginCaptchaIncorrect').style.display = "block";
                        document.getElementById('inputValuesNotValid').style.display = "none";
                        document.getElementById('loginPhoneNumberNotValid').style.display = "none";
                        document.getElementById('lockedUserStatus').style.display = "none";
                        document.getElementById('loginRequiredFields').style.display = "none";
                        document.getElementById('captchaRow').style.display = "block";
                        $('#inputLoginCaptcha').focus();
                        var myImageElement = document.getElementById('captchaLogin');
                        myImageElement.src = '/captcha?r=' + Math.random();
                        break;
                    case '0':
                        $("#loginLoadingStatus").hide();
                        popupCloseLogin("popup-login");
                        //            location.reload();
                        break;
                    case '1':
                        $("#loginLoadingStatus").hide();
                        popupCloseLoginNotReload("popup-login");
//                        popupOpenLogin("popup-register-rbt-service");
                        popupOpenLogin("popup-change-pass");
                        break;
                    case '2':
                        $("#loginLoadingStatus").hide();
                        document.getElementById('loginRequiredFields').style.display = "none";
                        document.getElementById('loginCaptchaIncorrect').style.display = "none";
                        document.getElementById('lockedUserStatus').style.display = "none";
                        document.getElementById('inputValuesNotValid').style.display = "block";
                        if (queryCheckUserInfo.countFailTimes > 2) {
                            document.getElementById('captchaRow').style.display = "block";
                        }
                        var myImageElement = document.getElementById('captchaLogin');
                        myImageElement.src = '/captcha?r=' + Math.random();
                        break;
                    case '3':
                        $("#loginLoadingStatus").hide();
                        popupCloseLogin("popup-login");
                        //            location.reload();
                        break;
                    case '4':
                        $("#loginLoadingStatus").hide();
                        popupCloseLogin("popup-login");
                        //            location.reload();
                        break;
                    case '10':
                        $("#loginLoadingStatus").hide();
                        document.getElementById('loginCaptchaIncorrect').style.display = "none";
                        document.getElementById('inputValuesNotValid').style.display = "none";
                        document.getElementById('lockedUserStatus').style.display = "block";
                        if (queryCheckUserInfo.countFailTimes > 2) {
                            document.getElementById('captchaRow').style.display = "block";
                        }
                        break;
                    default:
                        $("#loginLoadingStatus").hide();
                        document.getElementById('inputValuesNotValid').style.display = "none";
                        document.getElementById('lockedUserStatus').style.display = "none";
                        document.getElementById('loginCaptchaIncorrect').style.display = "none";
                        document.getElementById('captchaRow').style.display = "none";
                        break;
                }
            },
            error:function (request, status, err) {
            }
        });
    }
    else {
        return;
    }
}

function changePassword(){
    var oldPass = $("#input-old-pass").val();
    var newPass1 = $("#input-new-pass1").val();
    var newPass2 = $("#input-new-pass2").val();
    var trimOldPassword = trim(oldPass);
    var trimNewPassword1 = trim(newPass1);
    var trimNewPassword2 = trim(newPass2);

    if(trimOldPassword == "" || trimNewPassword1 == "" || trimNewPassword2 == ""){
        $(".table-form .red").hide();
        $(".cols2 input").css('border-color','#B5B5B5');

        if(trimOldPassword == ""){
            $("#old-pass-empty").show();
            $("#input-old-pass").css('border-color','red');
            $("#input-old-pass").focus();
            return;
        }
        if(trimNewPassword1 == ""){
            $("#new-pass1-empty").show();
            $("#input-new-pass1").css('border-color','red');
            $("#input-new-pass1").focus();
            return;
        }
        if(trimNewPassword2 == ""){
            $("#new-pass2-empty").show();
            $("#input-new-pass2").css('border-color','red');
            $("#input-new-pass2").focus();
            return;
        }
    } else {
        $(".table-form .red").hide();
        $(".cols2 input").css('border-color','#B5B5B5');
        if(trimNewPassword1 != trimNewPassword2){
            $("#new-pass2-notvail").show();
            $("#input-new-pass1").css('border-color','red');
            $("#input-new-pass2").css('border-color','red');
            return;
        }
        if(trimNewPassword1.length < 6 || trimNewPassword1.length > 30){
            $("#new-pass1-length").show();
            $("#input-new-pass1").css('border-color','red');
            $("#input-new-pass2").css('border-color','red');
            return;
        }
    }

    trimOldPassword = $.base64Encode(trimOldPassword);
    trimNewPassword1 = $.base64Encode(trimNewPassword1);
    trimNewPassword2 = $.base64Encode(trimNewPassword2);
//    $("#loginLoadingStatus").show();
        $.ajax({
            type:"POST",
            url:"/ajax/changePassword?sToken=" + $.cookie("sToken"),
            data:{
                oldPass:trimOldPassword,
                newPass1:trimNewPassword1,
                newPass2:trimNewPassword2
            },
            cache:false,
            success:function (result) {
                var returnResult = JSON.parse(result);
                switch (returnResult.errorCode) {
                    case '2':
                        $("#old-pass-novail").show();
                        $("#input-old-pass").focus();
                        $("#input-old-pass").css('border-color','red');
                        break;
                    case '3':
                        $("#new-pass1-sameold").show();
                        $("#input-new-pass1").focus();
                        $("#input-new-pass1").css('border-color','red');
                        break;
                    case '4':
                        $("#new-pass2-notvail").show();
                        $("#input-new-pass1").css('border-color','red');
                        $("#input-new-pass2").css('border-color','red');
                    case '41':
                        alert(returnResult.message);
                        popupCloseLoginNotReload("popup-change-pass");
                        location.reload();
                        break;
                    case '42':
                        alert(returnResult.message);
                        popupCloseLoginNotReload("popup-change-pass");
                        popupOpen("popup-rbt-register");
                        break;
                    default:
                        $("#loginLoadingStatus").hide();
                        break;
                }
            },
            error:function (request, status, err) {
            }
        });

}

function RegisterCrbtWS(message) {
    if (confirm(message)) {
        popupCloseLoginNotReload('popup-register-rbt-service');
        $.ajax({
            type:"POST",
            url:"/ajax/registerCrbt?sToken=" + $.cookie("sToken"),
            data:{},
            cache:false,
            success:function (result) {
                var obj = JSON.parse(result);
                alert(obj.message);
                location.reload();
            },
            error:function (request, status, err) {
            }
        });
    }

}


function pauseAllPlayer(playerId) {
    $("object").each(function (e) {
        //playerMagic = document.getElementById(object.id);
        otherId = this.id;
        //if(otherId!="magicPlayer"){
        if (otherId != playerId && otherId != "") {
            var otherPlayer = document.getElementById(this.id);
            if (otherPlayer != null) {
                if (otherPlayer.getConfig != undefined) {
                    var config = otherPlayer.getConfig();
                    var state = config.state;
                    if (state == "PLAYING" || state == "BUFFERING") {
                        //              otherPlayer.sendEvent("STOP");
                        otherPlayer.sendEvent("PLAY", false);
                        if (this.id == "magicPlayer") {
                            resetMagicPlayer();
                        }
                    }
                }
            }
        }
    });
}

function decodeOutput(s) {
    //    return $('<div/>').text(s).html();
    if (s != null && s.length > 0) {
        s = s.replace("&#39;", /\'/g); //no HTML equivalent as &apos is not cross browser supported
        s = s.replace("&#34;", /\"/g);
        s = s.replace("&#60;", /</g);
        s = s.replace("&#62;", />/g);
        return s;
    } else {
        return "";
    }

}

function encodeOutput(s) {
    //    result = $('<div/>').text(s).html(); //loi ATTT co dau nhay " hoac nhay '
    //    return result;
    if (s != null && s.length > 0) {
        en = false;
        // do we convert to numerical or html entity?
        if (en) {
            s = s.replace(/\'/g, "&#39;"); //no HTML equivalent as &apos is not cross browser supported
            s = s.replace(/\"/g, "&quot;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
        } else {
            s = s.replace(/\'/g, "&#39;"); //no HTML equivalent as &apos is not cross browser supported
            s = s.replace(/\"/g, "&#34;");
            s = s.replace(/</g, "&#60;");
            s = s.replace(/>/g, "&#62;");
        }
        return s;
    } else {
        return "";
    }
}
function encodeOutput2(s) {
    if (s != null && s.length > 0) {
        en = false;
        // do we convert to numerical or html entity?
        if (en) {
            s = s.replace(/\'/g, "&#39;"); //no HTML equivalent as &apos is not cross browser supported
            s = s.replace(/\"/g, "&quot;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
        } else {
            s = s.replace(/\'/g, "&#39;"); //no HTML equivalent as &apos is not cross browser supported
            s = s.replace(/\"/g, "&#34;");
            s = s.replace(/</g, "&#60;");
            s = s.replace(/>/g, "&#62;");
        }
        return s;
    } else {
        return "";
    }
}

function shareFB(sUrl) {
//    var url = sUrl;
    var urlFB = "http://www.facebook.com/share.php?u=" + sUrl;
//    var newPopup = "http://www.facebook.com/sharer.php?s=100&p[url]=" + url + "&p[title]=" + title + " | imuzik.com.vn&p[images][0]=" + sImage + "&p[summary]=" + Description;
    //var newwin = open(urlFB, "listenWindow", "scrollbars=yes, addressbar=no, width=750, height=520, left=300,top=100");
    window.open(urlFB, '_blank');
}

/**
 * breakingnewss
 */
$(document).ready(function () {
    $(".breaking-news").show();
    setInterval('marqueeBreakingNews();', 120);
//    $('#listBreakingNews').webTicker({travelocity: 0.03}); su dung jquery hay bi treo trinh duyet
});
var positionBreakingNews = 0;
function marqueeBreakingNews() {
    var length = $("#titleBrekingNews").width();
    if (positionBreakingNews == (-1 * length))
        positionBreakingNews = 650;
    $("#titleBrekingNews").css("left", positionBreakingNews + "px");
    positionBreakingNews--;
}

/**
 * trim object
 */
function trim(str) {
    str = str.replace(/^\s\s*/, '');
    var ws = /\s/,
        i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}

/**
 * hien thi tooltip
 * @author vos_khanhnq16
 */
function Tip(divId) {
    $('#' + divId).show();
}
function UnTip(divId) {
    $('#' + divId).hide();
}

//---- ham kiem tra xem mot obj co la date ko
function isDateFormat(value) {
    var date = value.substr(0, 10);

    // Regular expression used to check if date is in correct format
    var pattern = new RegExp(/^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/);

    // kiem tra date
    if (date.match(pattern)) {
        var date_array = date.split('/');
        var day = date_array[0];
        // Attention! Javascript consider months in the range 0 - 11
        var month = date_array[1] - 1;
        var year = date_array[2];
        // This instruction will create a date object
        var source_date = new Date(year, month, day);
        if (year != source_date.getFullYear()) {
            return false;
        }
        if (month != source_date.getMonth()) {
            return false;
        }
        if (day != source_date.getDate()) {
            return false;
        }
    } else {
        return false;
    }

    // kiem tra time
    if (value.length > 10) {
        var time = value.substr(11);
        if (time.length == 8) {
            var hour = time.substr(0, 2);
            var minute = time.substr(3, 2);
            var second = time.substr(6);
            if (parseInt(hour, 10) > 23 && parseInt(hour, 10) < 0) {
                return false;
            }
            if (parseInt(minute, 10) > 60 && parseInt(minute, 10) < 0) {
                return false;
            }
            if (parseInt(second, 10) > 60 && parseInt(second, 10) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

/**
 * validate Date
 * khanhnq16
 */
function validateDate(obj, msg) {
    var checkString = obj.value;
    checkString = trimAll(checkString);
    if (checkString != "") {
        var strMsg = (msg != null && msg != undefined) ? msg : 'Dữ liệu ngày tháng phải theo định dạng dd/mm/yyyy';
        if (!isDateFormat(checkString)) {
            alert(strMsg);
            setTimeout(function () {
                obj.focus();
                obj.select();
            }, 0);
            return false;
        }
    }
    return true;
}

/**
 * view more comment
 * @author vos_khanhnq16
 */
function viewmoreComment(action, lastpage) {
    //        var page=document.getElementById("page");
    var url = "/" + action;
    var currentPage = parseInt($('#page').val());
    $('#processingViewMoreComment').show();
    if (currentPage == lastpage) {
        $.get(url, {
            page:1
        }, function (result) {
            $('#processingViewMoreComment').hide();
            var div = $(result).find("#listComment");
            $('#clickViewmore').css('display', '');
            $('#clickViewLittle').css('display', 'none');
            $('#listComment').html(div.html());
            $('#page').val(1);
        });
    } else {
        $.get(url, {
            page:parseInt($('#page').val()) + 1
        }, function (result) {
            $('#processingViewMoreComment').hide();
            var div = $(result).find("#listComment");
            var last = $('#listComment').html();
            $('#listComment').html(last + div.html());
            $('#page').val(parseInt($('#page').val()) + 1);
            if (parseInt($('#page').val()) == lastpage) {
                $('#clickViewmore').css('display', 'none');
                $('#clickViewLittle').css('display', '');
            }
        });
    }
}

/**
 * function send comment
 * @author vos_khanhnq16 - duynt10
 */
function sendComment(type, objectId, urlcaptcha) {
    var content = $('#commentContent').val();
    var captcha = $('#vt_comment_song_captcha').val();
    if (trim(captcha).length == 0) return alert('Bạn phải nhập mã xác thực');
    if (captcha.length != 6) return alert('Sai mã xác thực');
    //    $('#formComment').validationEngine('validate');
    if (content.trim().length > 500) {
        $('.italic').html('Tối đa 500 kí tự');
        $('.italic').css('color', 'red');
        return false;
    } else if (content.trim().length == "") {
        $('.italic').css('color', 'red');
        $('.italic').html('yêu cầu nhập bình luận');
        return false;
    } else {
        $('.italic').html('Tối đa 500 kí tự');
        $('.italic').css('color', 'inherit');
    }
    $("#processingContainerComment").show();
    var link = "/gui-binh-luan?" + "sToken=" + $.cookie("sToken");
    $.ajax({
        type:"POST",
        url:link,
        data:{
            slug:objectId,
            type:type,
            comment:content,
            captcha:captcha
        },
        cache:false,
        success:function (result) {
            $("#processingContainerComment").hide();
            alert(result);
            $('#commentContent').val('');
            $('#vt_comment_song_captcha').val('');
            var captcha_arr = $('a .captcha');
            $('a .captcha')[captcha_arr.length - 1].src = urlcaptcha + '?r=' + Math.random() + '&reload=1';
            for (var i = 0; i < captcha_arr.length - 1; i++)
                $('a .captcha')[i].src = $('a .captcha')[captcha_arr.length - 1].src;
//      $('#captcha_comment a .captcha')[0].src=urlcaptcha+ '?r=' + Math.random() + '&reload=1';
            //            return window.location.reload();
        },
        error:function (request, status, err) {
            //            alert("Thực hiện thất bại");
        }
    });
}

/**
 * cat cac ky tu space o 2 dau va thay the cac space lien nhau thanh 1 space
 * @author vos_khanhnq16
 */
function trimObject(string) {
    if (string == null || string == undefined) {
        return;
    }
    string.value = string.value.trim().replace(/\s+/g, " ");
}

function trimAll(sString) {
    if (sString == null)
        return sString;
    return trim(sString);
}

function trimComment(id) {
    var comment = document.getElementById(id);
    comment.value = comment.value.trim();
}

function view4ButtonHomepage(songSlug) {
    if ($('#' + songSlug).css('display') == 'block') {
        $('#' + songSlug).hide();
    }
    else {
        $("div[name^='setButtonHomepage']").hide();
        $('#' + songSlug).show();
    }
}

function giftOrder(slug) {
    //TODO chekc lai tai sao
    $("#processingContainer").show();
    var url = "/ajax/vtGiftOrder?" + "sToken=" + $.cookie("sToken");
    $.post(url, {
        slug:slug
    }, function (result) {
        $("#processingContainer").hide();
        alert(result);
    });
}

// HuongND16
// 2 ham cho nut Xem day du va Xem thu gon o trang Ca si va Nhac si chi tiet
function viewFullInfo() {
    $('#littleInfo').css('display', 'none');
    $('#fullInfo').css('display', '');
}
function viewLittleInfo() {
    $('#littleInfo').css('display', '');
    $('#fullInfo').css('display', 'none');
}

// HuongND
// Show and hide cac Helper trong trang Huong dan
function showHelpCenter(thisObject) {
//    if ($('#' + thisObject).attr("class") == 'content break-word active') {
//        $('#' + thisObject).attr("class", "content break-word");
    if ($('#' + thisObject).attr("class") == 'item break-word active') {
        $('#' + thisObject).removeClass("active");
//        $('#' + thisObject).attr("class", "item break-word active");
        return;
    }
    $('.item').removeClass("active");
//    $('.content').attr("class", "content break-word");
    $('#' + thisObject).addClass('active');
}

//khanhnq16

function getFormAsString(formName) {
    return $("#" + formName).serialize();
}


/**************************For All Players In Page***************************/
var listPlayerInPages = [];

function insertPlayerIntoPage(playerName) {
    var i = 0;
    for (i in listPlayerInPages) {
        if (listPlayerInPages[i] == playerName) {
            return;
        }
    }
    listPlayerInPages.push(playerName);
}

function stopAllPlayerInPageWithout(playerName) {
    for (i in listPlayerInPages) {
        if (listPlayerInPages[i] != playerName) {
            jwpLayer(listPlayerInPages[i]).stop(true);
        }
    }
}

function pauseAllPlayerInPageWithout(playerName) {
    for (i in listPlayerInPages) {
        if (listPlayerInPages[i] != playerName) {
            jwplayer(listPlayerInPages[i]).pause(true);
        }
    }
}
/**************************End For All Players In Page***************************/

// HuongND - Ham phan trang cho cac module 2 trang
function page1(pagename1, pagename2) {
    $("div[name^='" + pagename2 + "']").hide();
    $("div[name^='" + pagename1 + "']").show();
    $("#" + pagename1).attr("class", "l-arrow");
    $("#" + pagename2).attr("class", "r-arrow-active");
}
function page2(pagename1, pagename2) {
    $("div[name^='" + pagename1 + "']").hide();
    $("div[name^='" + pagename2 + "']").show();
    $("#" + pagename1).attr("class", "l-arrow-active");
    $("#" + pagename2).attr("class", "r-arrow");
}
// Nut phan trang nho?
function rightcolumpage1(pagename1, pagename2) {
    $("div[name^='" + pagename2 + "']").hide();
    $("div[name^='" + pagename1 + "']").show();
    $("#" + pagename1).attr("class", "non-active");
    $("#" + pagename2).attr("class", "pri");
}
function rightcolumpage2(pagename1, pagename2) {
    $("div[name^='" + pagename1 + "']").hide();
    $("div[name^='" + pagename2 + "']").show();
    $("#" + pagename1).attr("class", "active");
    $("#" + pagename2).attr("class", "pri-active");
}

// HuongND - Gọi ajax ghi dữ liệu vào bảng SMS_Mo và ghi log gửi tin nhắn lịch diễn ca sĩ
function addSMSmo(sgId) {
    // Ẩn nút bấm tránh click double
    $('#smsSchedule').css('display', 'none');
    $('#loading-icon').css('display', 'block');
    var link = "/ajax/smsSchedule" + "?sToken=" + $.cookie("sToken");
    $.ajax({
        type:"POST",
        url:link,
        data:{
            sgId:sgId
        },
        cache:false,
        success:function (result) {
            var ketqua = JSON.parse(result);
            alert(ketqua['message']);
            // Ghi dữ liệu thành công -> load lại trang!
            if (ketqua['errcode'] == '0') {
                window.location.reload();
            }
        }
    });
}

function htmlEncode(value) {
    return $('<div/>').text(value).html();
}
function htmlspecialchars(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function myFocus(element) {
    if (element.value == element.defaultValue) {
        element.value = '';
    }
}
function myBlur(element) {
    if (element.value == '') {
        element.value = element.defaultValue;
    }
}

function generateNewsTicket(width, height, linkXml, embedId) {
    //linkXml = "http://localhost:8080/js/news123.xml";
    $template = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + width + '" height="' + height + '" id="NewsTicker" align="middle">'
        + '<param name="movie" value="/js/ViettelNewsTicker.swf" />'
        + '<param name="quality" value="high" />'
        + '<param name="bgcolor" value="#444444" />'
        + '<param name="play" value="true" />'
        + '<param name="loop" value="true" />'
        + '<param name="wmode" value="opaque" />'
        + '<param name="scale" value="showall" />'
        + '<param name="menu" value="true" />'
        + '<param name="devicefont" value="false" />'
        + '<param name="salign" value="" />'
        + '<param name="allowScriptAccess" value="sameDomain" />'
        + '<param name="flashvars" value="imuzik_xml_url=' + linkXml + '" />'
        + '<!--[if !IE]>-->'
        + '<object type="application/x-shockwave-flash" data="/js/ViettelNewsTicker.swf" width="' + width + '" height="' + height + '" flashvars="imuzik_xml_url=' + linkXml + '">'
        + '<param name="movie" value="NewsTicker.swf" />'
        + '<param name="quality" value="high" />'
        + '<param name="bgcolor" value="#444444" />'
        + '<param name="play" value="true" />'
        + '<param name="loop" value="true" />'
        + '<param name="wmode" value="opaque" />'
        + '<param name="scale" value="showall" />'
        + '<param name="menu" value="true" />'
        + '<param name="devicefont" value="false" />'
        + '<param name="salign" value="" />'
        + '<param name="allowScriptAccess" value="sameDomain" />'
        + '<!--<![endif]-->'
        + '<a href="http://www.adobe.com/go/getflash">'
        + '<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />'
        + '</a>'
        + '<!--[if !IE]>-->'
        + '</object>'
        + '<!--<![endif]-->'
        + '</object>';
    $("#" + embedId).html($template);
}
/*********************khanhnq16*******************************
 * validate phone number in module free sms
 * @param val
 * @return {Boolean}
 */
function validatePhone(val) {
    $('#err-phone').hide();
    var trimPhonenumber = trim(val);
    if (trimPhonenumber != "") {
        if (!regexViettelPhonenumber(trimPhonenumber)) {
            if($('#phone-number-error').length != 0){
                $('#phone-number-error').css('display', 'none');
            }
            $('#sendPhoneNumberNotValid').css('display', 'block');
            $('#vt_member_sms_phonenumber').addClass('text-field-error');
            return false;
        }
        else {
            $('#sendPhoneNumberNotValid').css('display', 'none');
            $('#vt_member_sms_phonenumber').removeClass('text-field-error');
            return true;
        }
    } else {
        $('#sendPhoneNumberNotValid').css('display', 'block');
        $('#vt_member_sms_phonenumber').addClass('text-field-error');
        return false;
    }
}

function validateMessage(val) {

    var trimlength = trim(val);
    if (val.length > 160) return false;
    return true;
}

function validateFreeSMS() {
    var number = $('#vt_member_sms_phonenumber').val();
    var mes = $('#vt_member_sms_message').val();
    var validateNumber = validatePhone(number);
    var validateMes = validateMessage(mes);

    return (validateMes && validateNumber);
}

$('#vt_member_sms_message').keyup(function () {
    var max = 160;
    var len = $(this).val().length;
    $('#charNum').text(len + '/' + max);
});

// HuongND16 Bắt sự kiện ấn nút enter dùng cho nút search và popup đăng nhập
function doClick(e, button) {
    var key;
    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox
    if (key == 13) {
        var btn = $("#" + button)
        if (btn != null) {
            btn.click();
        }
    }
}

//// HuongND16 - Tự động đánh z-index các thẻ chỉ định
$(function () {
    $('#left-body').css('zIndex', 5000);
    var zIndexNumber = 4900;

    $(".lb-container").each(function () {
        $(this).css('zIndex', zIndexNumber);
        zIndexNumber -= 100;
    });

    zIndexNumber -= 100;
    $('#right-body').css('zIndex', zIndexNumber);
    $(".rb-container").each(function () {
        $(this).css('zIndex', zIndexNumber);
        zIndexNumber -= 100;
    });
});

function checkLoginJS() {
    var urlCheck = '/ajax/checkLogin';
    $.ajaxSetup({async: false});
    var checkLogin=1;
    $.post(urlCheck, {}, function (result) {
        var getResult = $.parseJSON(result);
        var resultCode = getResult.resultCode;
        if (resultCode == 0) {
            checkLogin=getResult.redirect_url;
        } else {
            checkLogin=1;
        }
    });
    return checkLogin;
}

function showPopupLogin(popup){
//    popupCloseLoginNotReload();
//    $("#popup-main-login").hide();
    $("#" + popup).hide();
    popupOpenLogin("popup-login");
    $("#inputLoginPhoneNo").focus();
}

function writePopup(name, value){
    value = htmlspecialchars(value);
    $('strong[name='+name+']').html(value);
}
function popupOpen(popup){
    $("#popup-main").show();
    $("#" + popup).show();
}

$(function() {
 var url = document.URL;
// alert(url);
    if(url.indexOf('dich-vu-3g') != -1){
//        $('id=^[left-menu]').removeClass('active');
        $('#left-menu-imuzik3g').addClass('active');
    } else if(url.indexOf('dich-vu-nhac-cho') != -1){
        $('#left-menu-rbt').addClass('active');
    } else if(url.indexOf('bo-suu-tap-nhac-cho') != -1){
        $('#left-menu-rbt-collect').addClass('active');
    } else if(url.indexOf('tao-moi-nhom-nhac-cho') != -1){
        $('#left-menu-incomming-call').addClass('active');
    } else if(url.indexOf('cai-dat-nhom-nhac-cho') != -1){
        $('#left-menu-incomming-call').addClass('active');
    } else if(url.indexOf('them-moi-cai-dat-cuoc-goi-den') != -1){
        $('#left-menu-incomming-call').addClass('active');
    } else if(url.indexOf('cai-dat-cuoc-goi-den') != -1){
        $('#left-menu-incomming-call').addClass('active');
    } else if(url.indexOf('sao-chep-nhac-cho') != -1){
        $('#left-menu-rbt-copy').addClass('active');
    } else if(url.indexOf('dich-vu-tap-chi-am-nhac') != -1){
        $('#left-menu-mnews').addClass('active');
    } else if(url.indexOf('lich-dien-ca-si') != -1){
        $('#left-menu-list-show').addClass('active');
    } else if(url.indexOf('dich-vu-qua-tang-am-nhac') != -1){
        $('#left-menu-mgift').addClass('active');
    } else if(url.indexOf('dich-vu-nhac-chuong') != -1){
        $('#left-menu-ringtone').addClass('active');
    } else if(url.indexOf('baihat-yeu-thich') != -1){
        $('#right-menu-song').addClass('active');
    } else if(url.indexOf('playlist-ca-nhan') != -1){
        $('#right-menu-playlist').addClass('active');
    } else if(url.indexOf('chinh-sua-playlist') != -1){
        $('#right-menu-playlist').addClass('active');
    } else if(url.indexOf('album-yeu-thich') != -1){
        $('#right-menu-album').addClass('active');
    } else if(url.indexOf('video-yeu-thich') != -1){
        $('#right-menu-video').addClass('active');
    } else if(url.indexOf('playlist-yeu-thich') != -1){
        $('#right-menu-playlist2').addClass('active');
    } else if(url.indexOf('nhac-tu-upload') != -1){
        $('#right-menu-upload').addClass('active');
    } else if(url.indexOf('upload-music') != -1){
        $('#right-menu-upload').addClass('active');
    }
});

//HuongND16 - Move Đoạn JS ở trang send free SMS. Bị lỗi vì jQuery đc load sau
$(function () {
    if(document.URL.indexOf('dich-vu-free-sms') != -1){
    var length = $('#vt_member_sms_message').val().length;
    var max = 160;
    var len = length;
    $('#charNum').text(len + '/' + max);
    }});
function checkContent() {
    if (validatePhone($('#vt_member_sms_phonenumber').val())) {
        var value = $('#vt_member_sms_message').val();
//        var pattern = new RegExp(/^[a-zA-ZÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9_\n\r~@#\^\$&\*\(\)-_\+=\[\]\{\}\|\\,\.\?\s]{1,160}$/);
        if (value.length <= 160) {
            $('#err-mess #err-phone').hide();
            $('#freeSMS').submit();
        }
        else {
            $('#err-mess').show();
        }
    }
    else return false;
}