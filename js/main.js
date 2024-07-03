$(document).ready(function(){
    
    gsap.registerPlugin(ScrollTrigger);
   

    $('.mob_hamburger').click(function(){
        $('.mob_menu, .X_mark, .mob_hamburger').addClass("active");
    });
    $('.mob_menu .bg, .mob_menu ul li, .X_mark').click(function(){
        $('.mob_menu, .X_mark, .mob_hamburger').removeClass("active");
    });
});