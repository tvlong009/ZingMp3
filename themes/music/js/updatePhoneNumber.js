function popupUpdatePhonenumber(){
  var phoneNumber = $("#popup-update-phone-number_mobile").val();
  var trimPhoneNumber = trim(phoneNumber);
  var code = $("#popup-update-phone-number_code").val();
  var trimCode = trim(code);
  $.ajax({
    type: "POST",
    url: "/ajax/updatePhonenumber?sToken=" + $.cookie("sToken"),
    data: {
      phoneNumber: trimPhoneNumber, 
      code: trimCode
    },
    cache: false,
    success: function(result) {
      var obj = JSON.parse(result);

     
      if(obj.errorCode == 1){
        alert(obj.message);
        popupClose('popup-update-phone-number');
        return window.location.reload(true);
      }
      else if(obj.errorCode == 5)
      {
        alert(obj.message);
        popupClose('popup-update-phone-number');
        window.location = "/trang-chu";
      }
      else
        
      {
         alert(obj.message);
      }
    },
    error: function(request, status, err) {
    }
  });
}



function popupRegisterCrbt(message){
  if (confirm(message)) {
    popupClose('popup-rbt-register');
    
    $.ajax({
      type: "POST",
      url: "/ajax/registerCrbt?sToken=" + $.cookie("sToken"),
      data: {},
      cache: false,
      success: function(result) {
        var obj = JSON.parse(result);
        alert(obj.message);        
      },
      error: function(request, status, err) {
      }
    });
  }
  
}



function trim (str) {
  var	str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}