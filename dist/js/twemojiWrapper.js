$(function() {

    $.fn.twemoji = function() {

        return $(this).each(function() {

            twemoji.parse( this ,
                { base: "", folder: "dist/img/twemoji/36x36" });

        });

    };

});