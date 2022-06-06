// $('.sll2').owlCarousel({
//     items:3,
//     loop:true,
//     margin:40,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true,
// });

if ($(window).width() < 769) {
    $('.sll2').owlCarousel({
        items:1,
        loop:true,
        margin:40,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
}else if($(window).width() < 1200 && $(window).width() > 769){
    $('.sll2').owlCarousel({
        items:2,
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
}else if($(window).width() > 1200){
    $('.sll2').owlCarousel({
        items:3,
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
}