$(document).ready(function(){


    $('.main_content').children().hide();
    $('.main_content').children().first().show();

    // 탭 메뉴
    $('.main .tab_menu ul li').click(function(){
        
        let tab_idx = $(this).index();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('.main_content').children().hide();
        $('.main_content').children().eq(tab_idx).show();

        $("html, body").animate({scrollTop : 0}, 1);

    });


})
