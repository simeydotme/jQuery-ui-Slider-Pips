$(document).ready(function() {



    $.extend( $.ui.slider.prototype.options, { 

        animate: true ,
        stop: function(e,ui) {
            ga('send', 'event', 'slider', 'interact', this.id );
        }

    });



    var $slider1 = $("#mainDemo").slider({ max: 20 , value: 10 });
        $slider1.slider("pips");


    var $slider2 = $("#slider2").slider({ max: 20 , value: 10 });
        $slider2.slider("pips");


    var $slider3 = $("#slider3").slider({ max: 20 , value: 10 });
        $slider3.slider("float");


    var $awesome = $("#awesome").slider({ max: 20 , value: 10 });
        $awesome.slider("pips").slider("float");

    var $awesome2 = $("#awesome2").slider({ max: 100 , value: 50 });
        $awesome2.slider("pips", { rest: "label" }).slider("float");


    var $slider5 = $("#slider5").slider({ max: 20 , value: 10 });
        $slider5.slider("pips");


    var $slider6 = $("#slider6").slider({ max: 20 , value: 10 });
        $slider6.slider("pips", { rest: "label" });


    var $slider7 = $("#slider7").slider({ max: 20, range: true, values: [ 4, 16 ] });
        $slider7.slider("pips" , {
            rest: false
        });


    var $slider8 = $("#slider8").slider({ max: 20, value: 10 });
        $slider8.slider("pips" , {
            first: "pip", 
            last: "pip"
        });


    var $slider9 = $("#slider9").slider({ max: 10, value: 5 });
        $slider9.slider("pips" , {
            rest: 'label',  
            prefix: '$' , 
            suffix: '.00'
        });


    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    var $slider10 = $("#slider10").slider({ min: 0, max: 11, value: 5 });
        $slider10.slider("pips" , {
            rest: 'label', 
            labels: months
        }).on("slidechange", function(e,ui) {
            $("#slider10output").text( "You selected " + months[ui.value] );
        });


    var $slider11 = $("#slider11").slider({ min: 0, max: 100, step: 20, orientation: "vertical" });
        $slider11.slider("pips");


    var suffix = "&deg;c"

    var $slider12 = $("#slider12").slider({ max: 100, step: 20, orientation: "vertical" });
        $slider12.slider("pips", { suffix: suffix });
        $slider12.slider("float", { suffix: suffix });


    var $slider13 = $("#slider13").slider({ max: 20 , value: 10 });
        $slider13.slider("pips")
        .slider("float", {
            pips: true
        });






    $("#awesomecss, #awesome2css").on("click", function(e) {

        e.preventDefault();
        $(this).next("pre").slideToggle();

    }).next("pre").hide();


});