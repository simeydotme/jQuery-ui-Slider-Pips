
(function($) {

    "use strict";

    $(function() {


        $.ui.slider.prototype.options.animate = "fast";


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





        $("#show-only-pips-slider")
            .slider({ max: 4, value: 2 })
            .slider("pips", {
                first: "pip",
                last: "pip"
            });





        $("#prefix-suffix-slider")
            .slider({ min: 0, max: 100, value: 50, step: 10 })
            .slider("pips", {
                rest: "label",
                prefix: "&dollar;",
                suffix: ".00&cent;"
            });

    });

}(jQuery));