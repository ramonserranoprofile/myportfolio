jQuery('document').ready(function ($) {
    var toggle = $('.toggle'),
        menubar = $('.nav');
    toggle.click(function () {
        if (menubar.hasClass('nav__open')) {
            menubar.removeClass('nav__open');
        } else {
            menubar.addClass('nav__open');
        }


    });

});