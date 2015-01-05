
(function($) {

    "use strict";

    $(function() {

        $("code").pretty();
        $("pre").prettyPre().pretty();
        prettyPrint();


        $(document).foundation();


        $(".share-links__link").on("click", function() {
            ga("send", "event", "social", $(this).data("share") );
        });


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


        var $window = $(window),
            $sidebar = $(".sidebar"),
            $toggle = $(".sidebar__toggle"),
            $body = $("body"),
            $anchors = $(".anchor"),

            anchors,
            anchorsLength,
            paintAnchor,
            scrollTimer,

            ev = ( Modernizr.touch ) ? "touchend" : "click";

        $toggle
            .on( ev, function(e) {

                $sidebar.toggleClass("sidebar--open");
                $toggle.toggleClass("sidebar__toggle--active");
                $body.toggleClass("nav--active");
                e.preventDefault();

            });

        anchors = $anchors.map(function(){
            return { 
                "name": $(this).attr("href"), 
                "scroll": Math.floor($(this).offset().top) 
            };
        });

        anchorsLength = anchors.length;

        paintAnchor = function() {

            var top = window.scrollY,
                l = anchorsLength,
                anchorsTemp = {
                    "name": "",
                    "scroll": 0
                };

            while( l-- ) {
                if( anchors[l].scroll - 50 > anchorsTemp.scroll && anchors[l].scroll - 50 <= top ) {
                    anchorsTemp = anchors[l];
                }
            }

            $sidebar
                .find(".sidebar__item")
                .removeClass("sidebar__item--active");

            if( anchorsTemp.scroll > 0 ) {

                $sidebar
                    .find("[href=" + anchorsTemp.name + "]")
                    .parent(".sidebar__item")
                    .addClass("sidebar__item--active");

            }

        };

        $window
            .off(".navscroll")
            .on("scroll.navscroll", function() {

                clearTimeout( scrollTimer );
                scrollTimer = setTimeout( paintAnchor, 100 );

            });



    });

}(jQuery));