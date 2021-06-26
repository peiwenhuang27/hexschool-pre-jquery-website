$(document).ready(function(){
    $('.nav_button').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings().slideToggle();
    });
    $('.back_top a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        speed: 500,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        // navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        // },
    
        // And if we need scrollbar
        // scrollbar: {
        // el: '.swiper-scrollbar',
        // },
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false
    });
    
});