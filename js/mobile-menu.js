$(document).ready(function(){
/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */

var menu = document.querySelector ("#menu");
var mobile = document.querySelector ("#mobile");
var mob = document.querySelector ("#mobile-menu");
var item1 = document.querySelector(".menu-item__1");
var item2 = document.querySelector(".menu-item__2");
var item3 = document.querySelector(".menu-item__3");
var item4 = document.querySelector(".menu-item__4");
var item5 = document.querySelector(".menu-item__5");
 mobile.addEventListener ("click", function() {
    menu.classList.toggle("show");
    mob.classList.toggle("show-active");
 });


item1.addEventListener ("click", function() {
   $('#menu').removeClass('show');
   $('#mobile-menu').removeClass('show-active');
});

item2.addEventListener ("click", function() {
   $('#menu').removeClass('show');
   $('#mobile-menu').removeClass('show-active');
});

item3.addEventListener ("click", function() {
   $('#menu').removeClass('show');
   $('#mobile-menu').removeClass('show-active');
});

item4.addEventListener ("click", function() {
   $('#menu').removeClass('show');
   $('#mobile-menu').removeClass('show-active');
});
item5.addEventListener ("click", function() {
   $('#menu').removeClass('show');
   $('#mobile-menu').removeClass('show-active');
});


   var margin = 0; // переменная для контроля докрутки
   $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top-margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 1600, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });


});