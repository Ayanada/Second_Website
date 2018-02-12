/*global $ ,jQuery ,alert */

$(document).ready(function () {
    
    'use strict';
//    $('#horizontalTab').easyResponsiveTabs({
//        type: 'default', //Types: default, vertical, accordion           
//        width: 'auto', //auto or any width like 600px
//        fit: true   // 100% fit in a container
//    });
    
     // Adjust Slider Height  
    
    var windowHeight = $(window).height(),
        upperH       = $('.upper-bar').innerHeight();
//        navH         = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowHeight - (upperH));
    
    
//    $("#flexiselDemo1").flexisel({
//        visibleItems: 4,
//        animationSpeed: 1000,
//        autoPlay: true,
//        autoPlaySpeed: 2500,
//		pauseOnHover: true,
//		enableResponsiveBreakpoints: true,
//		responsiveBreakpoints: {
//            portrait: {
//                changePoint: 480,
//				visibleItems: 1
//            },
//            landscape: {
//                changePoint: 640,
//                visibleItems: 2
//            },
//            tablet: {
//                changePoint: 768,
//				visibleItems: 3
//            }
//        }
//    });
						    
//    $('.flexslider').flexslider({
//        animation: "slide",
//        controlNav: "thumbnails"
//    });
    
    $('.nav_slide_button').click(function () {
        $('.navegation').slideToggle();
    });
    
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true   // 100% fit in a container
    });
   
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
    
});

$(function () {
    'use strict';
    var menu_ul = $('.menu > li > ul'),
        menu_a  = $('.menu > li > a');
    menu_ul.hide();
    menu_a.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            menu_a.removeClass('active');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true, true).slideUp('normal');
        }
    });
});
