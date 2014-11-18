
(function($) {

    "use strict";

    $(function() {

        $("pre").prettyPre().pretty();
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



    });

}(jQuery));