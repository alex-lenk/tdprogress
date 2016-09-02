// Актальный год в подвале сайта
var dateMy = new Date();
var year = dateMy.getFullYear();
document.getElementById('year').innerHTML = year;

// Tooltip подсказка от bootstrap
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Кнопка вверх
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});

$(document).ready(function () {

    var prod = $("#producers");

    prod.owlCarousel({
        items: 5,
        itemsDesktop: [1000, 5],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: false
    });
    $(".next").click(function () {
        prod.trigger('owl.next');
    });
    $(".prev").click(function () {
        prod.trigger('owl.prev');
    });

    //Для мобильного меню
    $(".menu-toggle").click(function () {
        $('.menu').toggleClass("open-menu");
    });

    //Плавная прокрутка к якорям на странице
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
        e.preventDefault();
    });
});
