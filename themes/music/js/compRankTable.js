    $(document).ready(function() {
                    $("#compRankTable .music-bill-board .sub-tab-2").hide();
                    $("#compRankTable .music-bill-board .sub-tab-3").hide();

                $('#compRankTable .tab .lnk1').click(function(){

                  $("#compRankTable .music-bill-board .tab .active").removeClass("active") ;
                    $('#compRankTable .tab .lnk1').addClass("active");
                    $("#compRankTable .music-bill-board #tab-1").show();
                    $("#compRankTable .music-bill-board #tab-2").hide();
                                      
                    $("#compRankTable .music-bill-board .sub-tab-1").show();
                    $("#compRankTable .music-bill-board .sub-tab-2").hide();
                    $("#compRankTable .music-bill-board .sub-tab-3").hide();
                    $("#compRankTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
                    $("#compRankTable .music-bill-board #tab-1 .sub-tab .lnk1-a").addClass("active-1");
                });
                $('#compRankTable .tab .lnk2').click(function(){
                    $("#compRankTable .music-bill-board .tab .active").removeClass("active") ;
                    $('#compRankTable .tab .lnk2').addClass("active");
                    $("#compRankTable .music-bill-board #tab-1").hide();

                    $("#compRankTable .music-bill-board .sub-tab-1").show();
                    $("#compRankTable .music-bill-board .sub-tab-2").hide();
                    $("#compRankTable .music-bill-board .sub-tab-3").hide();
                    
                    $("#compRankTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
                    $("#compRankTable .music-bill-board #tab-2 .sub-tab .lnk1-a").addClass("active-1");
                    
                });
                $('#compRankTable .sub-tab .lnk1-a').click(function(){
                    $("#compRankTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
                    $(this).addClass("active-1");
                    //$(this).hide();
                    $("#compRankTable .music-bill-board .sub-tab-1").show();
                    $("#compRankTable .music-bill-board .sub-tab-2").hide();
                    $("#compRankTable .music-bill-board .sub-tab-3").hide();
                });
                $('#compRankTable .sub-tab .lnk1-b').click(function(){
                    $("#compRankTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
                    $(this).addClass("active-1");
                    $("#compRankTable .music-bill-board .sub-tab-1").hide();
                    $("#compRankTable .music-bill-board .sub-tab-2").show();
                    $("#compRankTable .music-bill-board .sub-tab-3").hide();
                });
                $('#compRankTable .sub-tab .lnk1-c').click(function(){
                    $("#compRankTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
                    $(this).addClass("active-1");
                    $("#compRankTable .music-bill-board .sub-tab-1").hide();
                    $("#compRankTable .music-bill-board .sub-tab-2").hide();
                    $("#compRankTable .music-bill-board .sub-tab-3").show();
                });


//      dung cho video
      $("#compRankVideoTable .music-bill-board .sub-tab-2").hide();
      $("#compRankVideoTable .music-bill-board .sub-tab-3").hide();

      $('#compRankVideoTable .tab .lnk1').click(function(){

        $("#compRankVideoTable .music-bill-board .tab .active").removeClass("active") ;
        $('#compRankVideoTable .tab .lnk1').addClass("active");
        $("#compRankVideoTable .music-bill-board #tab-1").show();

        $("#compRankVideoTable .music-bill-board .sub-tab-1").show();
        $("#compRankVideoTable .music-bill-board .sub-tab-2").hide();
        $("#compRankVideoTable .music-bill-board .sub-tab-3").hide();
        $("#compRankVideoTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
        $("#compRankVideoTable .music-bill-board #tab-1 .sub-tab .lnk1-a").addClass("active-1");
      });
      $('#compRankVideoTable .tab .lnk2').click(function(){
        $("#compRankVideoTable .music-bill-board .tab .active").removeClass("active") ;
        $('#compRankVideoTable .tab .lnk2').addClass("active");
        $("#compRankVideoTable .music-bill-board #tab-1").hide();

        $("#compRankVideoTable .music-bill-board .sub-tab-1").show();
        $("#compRankVideoTable .music-bill-board .sub-tab-2").hide();
        $("#compRankVideoTable .music-bill-board .sub-tab-3").hide();

        $("#compRankTable .music-bill-board .sub-tab .active-1").removeClass("active-1");

      });
      $('#compRankVideoTable .sub-tab .lnk1-a').click(function(){
        $("#compRankVideoTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
        $(this).addClass("active-1");
        //$(this).hide();
        $("#compRankVideoTable .music-bill-board .sub-tab-1").show();
        $("#compRankVideoTable .music-bill-board .sub-tab-2").hide();
        $("#compRankVideoTable .music-bill-board .sub-tab-3").hide();
      });
      $('#compRankVideoTable .sub-tab .lnk1-b').click(function(){
        $("#compRankVideoTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
        $(this).addClass("active-1");
        $("#compRankVideoTable .music-bill-board .sub-tab-1").hide();
        $("#compRankVideoTable .music-bill-board .sub-tab-2").show();
        $("#compRankVideoTable .music-bill-board .sub-tab-3").hide();
      });
      $('#compRankVideoTable .sub-tab .lnk1-c').click(function(){
        $("#compRankVideoTable .music-bill-board .sub-tab .active-1").removeClass("active-1");
        $(this).addClass("active-1");
        $("#compRankVideoTable .music-bill-board .sub-tab-1").hide();
        $("#compRankVideoTable .music-bill-board .sub-tab-2").hide();
        $("#compRankVideoTable .music-bill-board .sub-tab-3").show();
      });

            });