define(['jquery'], function ($) {
    'use strict';

    $('.footer_block .footer_title').on('click', function () {
        $('.footer_block .footer_list').slideUp();
        $('.footer_block .footer_title').removeClass('active_footer');

        let thisElemUL = $(this).parent().find('.footer_list');
        if (thisElemUL.is(':hidden')) {
            $(this).addClass('active_footer');
            thisElemUL.slideDown();
        }
    });
});
