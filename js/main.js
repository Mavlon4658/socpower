$(document).ready(function(){
	$('.matter-part__1').click(function(){
		$('.matter-text__1').slideToggle(300, function(){
							
        });
        $('.matter-cursor__1').toggleClass('matter-active__cursor');
      
        return false;

        
	});
    $('.matter-part__2').click(function(){
		$('.matter-text__2').slideToggle(300, function(){
							
        });
        $('.matter-cursor__2').toggleClass('matter-active__cursor');
      
        return false;

        
    });
  
    $('.matter-part__3').click(function(){
		$('.matter-text__3').slideToggle(300, function(){
							
        });
        $('.matter-cursor__3').toggleClass('matter-active__cursor');
      
        return false;

        
    }); 
      
    $('.matter-part__4').click(function(){
		$('.matter-text__4').slideToggle(300, function(){
							
        });
        $('.matter-cursor__4').toggleClass('matter-active__cursor');
      
        return false;

        
    });

    $('.matter-part__5').click(function(){
		$('.matter-text__5').slideToggle(300, function(){
							
        });
        $('.matter-cursor__5').toggleClass('matter-active__cursor');
      
        return false;

        
    });

    $('body').on('click', '.overlay-control', function(){
        if ($('#password-input').attr('type') == 'password'){
            $(this).addClass('view');
            $('#password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input').attr('type', 'password');
        }
        return false;
    });

    $('.article__slider').each(function (idx, el) {
        let slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                1300: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                }
            },
            navigation: {
                nextEl: $('.article__slider__btn_next')[idx],
                prevEl: $('.article__slider__btn_prev')[idx],
            }
        })
    })

    $('.article__slider_2__wrap').each(function (idx, el) {
        let slider = new Swiper($(el).find('.article__slider_2')[0], {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: $(el).find('.slider_next')[0],
                prevEl: $(el).find('.slider_prev')[0]
            }
        })
    })

    $('.article__slider_3__wrap').each(function (idx, el) {
        let swiper = new Swiper($(el).find('.article__slider_3')[0], {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: $(el).find('.slider_next')[0],
                prevEl: $(el).find('.slider_prev')[0]
            },
            breakpoints: {
                1220: {
                    slidesPerView: 'auto'
                }
            }
        })
    })

    if ($('.img_wrap__right').length) {
        new Swiper('.img_wrap__right .swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.img_wrap__right .slider_next',
                prevEl: '.img_wrap__right .slider_prev'
            }
        })
    }

    let article_card = 3;
    function sortArticleCard () {
        $('.article__cards_item').each(function (idx, el) {
            if (idx + 1 > article_card) {
                $(el).hide(0);
            } else {
                $(el).show(0)
            }
        })
    }

    $('.article .show_more').click(function () {
        article_card += 3;
        sortArticleCard();

        if (article_card >= $('.article__cards_item').length) {
            $('.article .show_more').css({
                position: 'relative',
                zIndex: '-1',
                opacity: '0'
            })
        }
    })

    sortArticleCard();

});

