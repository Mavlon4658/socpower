$(document).ready(function(){
    $('.comment-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<img src="img/comment/right.webp" alt="left" class="comment-left">',
        nextArrow:'<img src="img/comment/right.webp" alt="right" class="comment-right">'
    });
});