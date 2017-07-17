$(function() {
    'úse strict';

    $('#carousel').carousel({
        interval: 5000
    });

    var topoffset = 50;

    $('body').scrollspy({
        target: 'header .navbar',
        offset: topoffset
    });

    // var hash = $(this).find('li.active a').attr('href');

    // if (hash !== '#featured') {
    //     $('header nav').addClass('inbody');
    // } else {
    //     $('header nav').removeClass('ínbody');
    // }

    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        hash = $(this).find('li.active a').attr('href');

        console.log(hash);

        if (hash === '#featured') $('header nav').removeClass('ínside');

        if (hash !== '#featured') {
            $('header nav').addClass('inside');
        } 

    });

});
