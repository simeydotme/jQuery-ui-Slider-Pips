
(function($) {

    "use strict";

    $(function() {

        $("#example-slider")
            .slider({ max: 20, value: 3 });

        $("#example-slider-pips")
            .slider({ max: 20, value: 3 })
            .slider("pips")
            .slider("float");





        $("#example-pips")
            .slider({ max: 50, value: 10 })
            .slider("pips");

        $("#example-float")
            .slider({ max: 50, value: 10 })
            .slider("float");





        $("#styling-before-slider")
            .slider({ max: 20, value: 10 })
            .slider("pips");

        $("#styling-after-slider")
            .slider({ max: 20, value: 10 })
            .slider("pips");





        $("#show-rest-slider")
            .slider({ max: 12, value: 6 })
            .slider("pips", {
                rest: "label"
            });





        $("#hide-rest-slider")
            .slider({ max: 12, range: true, values: [3, 9] })
            .slider("pips", {
                rest: false
            });

    });

}(jQuery));