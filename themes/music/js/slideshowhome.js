(function($) {
    if ($('#slideshow-list-home').size()) {
        $('#slideshow-list-home').anythingSlider({
            buildArrows:false,
            width:slideshow_width_home,
            height:slideshow_height_home,
            delay:8000,
            resumeDelay:8000,
            autoPlayLocked:true,
            infiniteSlides:true,
            startStopped:false,
            navigationFormatter:function (i, panel) {
                return '';
            }
        });
    }
})(jQuery);

