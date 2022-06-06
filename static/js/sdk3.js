if ($(window).width() < 321) {
    $('.sll3').owlCarousel({
        items:2,
        loop:true,
        margin:40,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
}else if($(window).width() < 400 && $(window).width() > 321){
    $('.sll3').owlCarousel({
        items:2,
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
}else if($(window).width() > 400){
    $('.sll3').owlCarousel({
        items:3,
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
}