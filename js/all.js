$(document).ready(function(){
    $('.menu-btn').click(function (e) { 
        e.preventDefault();

        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().siblings().find('ul').slideUp();

        $(this).toggleClass('active');
        $(this).siblings().slideToggle();
    });
    $('.back-top a').click(function (e) {
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
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false
    });
    
});