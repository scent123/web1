$(document).ready(function() {
    $('.nav').find('li').on('mouseover', function() {
        $(this).find('.sub').stop(true).slideDown(300);
    });

    $('.nav').find('li').on('mouseleave', function() {
        $(this).find('.sub').stop(true).slideUp(300);
    });

    window.setInterval(function() {
        $('.slide_img').find('li:last-child').fadeOut(300, function() {
            $(this).prependTo('.slide_img');
            $(this).fadeIn(0);
        });
    },3000);

    $('.con1').find('a.title').on('click', function() {
        $('.con1 > a.title.on').removeClass('on');
        $('.con_tab').find('li > .on').removeClass('on');

        $(this).addClass('on')
        $('.' + $(this).attr('data-tab')).addClass('on');
    });

    $('table tbody tr:first-child').on('click', function() {
        $('.popup').show(0);
    });

    $('.popup > button').on('click', function() {
        $('.popup').hide(0);
    });
});