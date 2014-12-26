
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
            .slider({ max: 30, value: 20 })
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




        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var activeMonth = new Date().getMonth();

        $("#custom-labels-output").text( "The current month is: " + months[activeMonth] );

        $("#custom-labels-slider")
            .slider({ min: 0, max: months.length-1, value: activeMonth })
            .slider("pips", {
                rest: "label",
                labels: months
            })
            .on("slidechange", function(e,ui) {
                $("#custom-labels-output").text( "You selected " + months[ui.value] + " (" + ui.value + ")");
            });
            //.trigger("slidechange");




        var hanzi = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];

        $("#hanzi-labels-slider")
            .slider({ min: 0, max: hanzi.length-1, value: 3 })
            .slider("pips", {
                rest: "label",
                labels: hanzi
            })
            .slider("float", {
                labels: hanzi
            });





        $("#steps-default-slider")
            .slider({ min: 0, max: 100, step: 20 })
            .slider("pips", {
                rest: "label"
            });





        $("#steps-fivepercent-slider")
            .slider({ min: 0, max: 1000, range: true, values: [200, 800] })
            .slider("pips", {
                rest: "label"
            })
            .slider("float");





        $("#steps-stacking-slider")
            .slider({ min: 0, max: 1000, step: 100 })
            .slider("pips", {
                rest: "label",
                step: 2
            })
            .slider("float");





        $(".step-table-slider-11")
            .slider({ min: 0, max: 50 })
            .slider("pips");

        $(".step-table-slider-51")
            .slider({ min: 0, max: 50, step: 5 })
            .slider("pips");

        $(".step-table-slider-101")
            .slider({ min: 0, max: 50, step: 10 })
            .slider("pips");

        $(".step-table-slider-12")
            .slider({ min: 0, max: 50 })
            .slider("pips", { step: 2 });

        $(".step-table-slider-52")
            .slider({ min: 0, max: 50, step: 5 })
            .slider("pips", { step: 2 });

        $(".step-table-slider-102")
            .slider({ min: 0, max: 50, step: 10 })
            .slider("pips", { step: 2 });

        $(".step-table-slider-15")
            .slider({ min: 0, max: 50 })
            .slider("pips", { step: 5 });

        $(".step-table-slider-55")
            .slider({ min: 0, max: 50, step: 5 })
            .slider("pips", { step: 5 });

        $(".step-table-slider-105")
            .slider({ min: 0, max: 50, step: 10 })
            .slider("pips", { step: 5 });

        $(".step-table-slider-33")
            .slider({ min: 0, max: 50, step: 3 })
            .slider("pips", { step: 3 });

        $(".step-table-slider-66")
            .slider({ min: 0, max: 50, step: 6 })
            .slider("pips", { step: 6 });
                    
        $("[class^=step-table-slider-]")
            .slider("float");





        $("#vertical-slider")
            .slider({ min: 0, max: 20, orientation: "vertical" })
            .slider("pips", {
                rest: "label",
                step: "5"
            });

    });

}(jQuery));