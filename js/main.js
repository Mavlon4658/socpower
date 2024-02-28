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


});

