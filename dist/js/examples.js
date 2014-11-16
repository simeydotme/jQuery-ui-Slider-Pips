
(function($) {

    "use strict";

    $(function() {

        $("#example-slider")
            .slider({ max: 20, value: 3 });

        $("#example-slider-pips")
            .slider({ max: 20, value: 3 })
            .slider("pips");





        $("#basic-pips")
            .slider({ max: 50, value: 10 })
            .slider("pips");

    });

}(jQuery));