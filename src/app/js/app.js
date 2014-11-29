
(function($) {

    "use strict";

    $(function() {

        $("code").pretty();
        $("pre").prettyPre().pretty();
        prettyPrint();


        $(document).foundation();




        $("a[data-active-tab]").on("click", function(e) {

            var $this = $(this),
                tab = $this.data("active-tab");

            $( tab )
                .addClass("active")
                .siblings(".content")
                .removeClass("active");

            $("a[href=" + tab + "]")
                .parent("dd")
                .addClass("active")
                .siblings("dd")
                .removeClass("active");

            e.preventDefault();

        });


        var $sidebar = $(".sidebar"),
            $toggle = $(".sidebar__toggle"),
            $body = $("body"),
            ev = ( Modernizr.touch ) ? "touchstart" : "click";

        $toggle.on( ev, function(e) {

            $sidebar.toggleClass("sidebar--open");
            $toggle.toggleClass("sidebar__toggle--active");
            $body.toggleClass("nav--active");
            e.preventDefault();

        });



    });

}(jQuery));