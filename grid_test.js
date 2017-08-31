$(window).scroll(function(){
    var fromTopPx = 150; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        $('article').addClass('scrolled');
    }else{
        $('article').removeClass('scrolled');
    }
});